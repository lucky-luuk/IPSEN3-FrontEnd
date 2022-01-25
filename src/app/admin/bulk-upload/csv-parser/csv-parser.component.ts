import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BulkUploadParseService} from "../bulk-upload-parse.service";
import {AbbreviationModel} from "../../../afkoteek/search/abbreviation-list/abbreviation.model";
import {OrganisationModel} from "../../../afkoteek/search/abbreviation-list/organisation.model";

@Component({
  selector: 'app-csv-parser',
  templateUrl: './csv-parser.component.html',
  styleUrls: ['./csv-parser.component.scss', '../json-parser/json-parser.component.scss']
})
export class CsvParserComponent implements OnInit {
  @Input()
  file : File | null = null;
  @Output()
  onParsed = new EventEmitter<{abbr: AbbreviationModel[], orgs: OrganisationModel[]}>();
  error = "";

  constructor(private parserService : BulkUploadParseService) { }

  ngOnInit(): void {
  }

  onParse() {
    if (this.file !== null) {
      this.file.text().then((data) => {
        this.parserService.parseCSV(data).then((result) => {
          // reset the error in case something was thrown before
          this.error = "";
          this.onParsed.emit(result);
        }).catch((e) => {
          this.error = e;
        });
      });
    }
  }
}
