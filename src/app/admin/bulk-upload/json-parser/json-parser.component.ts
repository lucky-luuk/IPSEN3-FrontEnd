import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {BulkUploadParseService} from "../bulk-upload-parse.service";
import {AbbreviationModel} from "../../../afkoteek/search/abbreviation-list/abbreviation.model";
import {OrganisationModel} from "../../../afkoteek/search/abbreviation-list/organisation.model";
import {JsonParserLayoutComponent} from "./json-parser-layout/json-parser-layout.component";

@Component({
  selector: 'app-json-parser',
  templateUrl: './json-parser.component.html',
  styleUrls: ['./json-parser.component.scss']
})
export class JsonParserComponent implements OnInit {
  @Input()
  file : File | null = null;
  @Output()
  onParsed = new EventEmitter<{abbr: AbbreviationModel[], orgs: OrganisationModel[]}>();
  @Output()
  onParseButtonClicked = new EventEmitter();
  error = "";
  model = "custom";
  layout : {abbreviationProperty: string, jsonProperty: string, jsonData: any}[] = [];

  constructor(private parserService : BulkUploadParseService) { }

  ngOnInit(): void {
    // default values for explanation:
    this.layout = [
      {abbreviationProperty: "name", jsonProperty: "naam", jsonData: undefined},
      {abbreviationProperty: "description", jsonProperty: "beschrijving", jsonData: undefined},
      {abbreviationProperty: "organisations", jsonProperty: "organizaties", jsonData: [
          {abbreviationProperty: "name", jsonProperty: "naam", jsonData: undefined},
        ]}
    ]
  }

  onParse() {
    if (this.file !== null) {
      this.onParseButtonClicked.emit();
      this.file.text().then((data) => {
        if (this.model === "pdirect") {
          this.parserService.parseJsonWithPDirectLayout(data).then((result) => {
            // reset the error in case something was thrown before
            this.error = "";
            this.onParsed.emit(result);
          }).catch((e) => {
            this.error = e;
          });
        }
        else { // if using custom json parsing
          let l = this.layout;
          this.parserService.parseJson<AbbreviationModel>(AbbreviationModel, data, l).then((result) => {
            // reset the error in case something was thrown before
            this.error = "";
            this.getOrganisationsFromData(result).then((data) => {
              this.onParsed.emit({abbr: result, orgs: data});
            });
          }).catch((e) => {
            this.error = e;
          });
        }
      });
    }
  }

  async getOrganisationsFromData(data : AbbreviationModel[]) : Promise<OrganisationModel[]> {
    let result : OrganisationModel[] = []
    for (let abbr of data) {
      for (let i = 0; i < abbr.organisations.length; i++) {
        let found = false;
        for (let o of result) {
          if (abbr.organisations[i].name === o.name) {
            found = true;
            break;
          }
        }
        if (!found) {
          result.push(abbr.organisations[i]);
        }
      }
    }
    return result;
  }
}
