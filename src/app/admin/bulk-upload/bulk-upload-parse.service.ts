import { Injectable } from '@angular/core';
import {AbbreviationModel} from "../../afkoteek/search/abbreviation-list/abbreviation.model";
import {OrganisationModel} from "../../afkoteek/search/abbreviation-list/organisation.model";
import {GenericPopupComponent} from "../../features/generic-popup/generic-popup.component";
import {HttpService} from "../../http/http.service";
import {NgbModal, NgbModalOptions} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";
import {BulkUploadLoadingPopupComponent} from "./bulk-upload-loading-popup/bulk-upload-loading-popup.component";

@Injectable({
  providedIn: 'root'
})
export class BulkUploadParseService {

  constructor(private http : HttpService, private modalService : NgbModal, private router : Router) { }

  getFileExtension(fileName : string) : string {
    let pos = fileName.lastIndexOf(".");
    return fileName.toLowerCase().substr(pos, fileName.length - 1);
  }

  postData(data : {abbr: AbbreviationModel[], orgs: OrganisationModel[]}) {
    let modalOption : NgbModalOptions = {};
    modalOption.backdrop = "static";
    modalOption.keyboard = false;
    let ref = this.modalService.open(BulkUploadLoadingPopupComponent, modalOption).componentInstance;
    const amountOfRequests = Math.round(data.abbr.length / 100);
    const remainder = data.abbr.length % 100;
    ref.size = amountOfRequests;
    ref.incrementAmount = 1;
    this.sendData(data, amountOfRequests, remainder, ref);
  }

  private sendData(data : {abbr: AbbreviationModel[], orgs: OrganisationModel[]}, amountOfRequests : number, remainder : number, ref : any) {
    let abbrsSend = 0;
    this.http.post("/organisation", data.orgs,(o) => {
      data.orgs = o;
      this.setOrgIds(data);

      for (let i = 0; i < amountOfRequests - 1; i++) {
        this.http.post("/abbreviation", data.abbr.slice(i * 100, (i + 1) * 100),() => {
          abbrsSend += 100;
          ref.incrementProgressBar();
        }, () => {
          this.openErrorPopup();
        });
      }
      // send the remainder
      this.http.post("/abbreviation", data.abbr.slice(amountOfRequests * 100, (amountOfRequests * 100) + remainder),() => {
        abbrsSend += remainder;
        ref.incrementProgressBar();
      }, () => {
        this.openErrorPopup();
      });

    }, () => {
      this.openErrorPopup();
    });
  }

  // im sry for this typescript
  async parseJson<T>(t: {new(): T}, text : string, layout : {abbreviationProperty: string, jsonData: any | undefined, jsonProperty: string}[], obj : T = new t(), d : any = null) : Promise<T[]> {
    let result = [];
    let data : any;

    if (d === null)
      data = JSON.parse(text);
    else {
      data = d;
    }
    for (let datapoint of data) {
      let obj = new t();
      for (let properties of layout) {
        if (properties.jsonData === undefined) {
          if (datapoint[properties.jsonProperty] === undefined)
            throw new Error("property: " + properties.jsonProperty + " niet gevonden");
          // @ts-ignore
          obj[properties.abbreviationProperty] = datapoint[properties.jsonProperty];

        }
        else {
          try {
            // @ts-ignore
            let c = datapoint[properties.jsonProperty][0].constructor;
            // @ts-ignore
            obj[properties.abbreviationProperty] = await this.parseJson(c, text, properties.jsonData, obj[properties.abbreviationProperty], datapoint[properties.jsonProperty]);
          }
          catch (e) {
            throw new Error("property: " + properties.jsonProperty + " niet gevonden");
          }
        }
      }
      result.push(obj);
    }
    return result;
  }
  async parseJsonWithPDirectLayout(text : string) : Promise<{abbr: AbbreviationModel[], orgs: OrganisationModel[]}>{
    let abbrs : AbbreviationModel[] = [];
    let orgs : OrganisationModel[] = [];
    let data : {entries: number, results : {
      id: string, abbreviation: string, definitions: {
        id: string, fullText: string,
          organizations: {id: string, name: string }[]
        }[]
      }[]} = JSON.parse(text);
    for (let result of data.results) {
      for (let defs of result.definitions) {
        let abbr = new AbbreviationModel();
        abbr.name = result.abbreviation;
        abbr.description = defs.fullText;
        for (let org of defs.organizations) {
          abbr.organisations.push(this.addOrgIfNotExists(orgs, org.id, org.name));
        }
        abbrs.push(abbr);
      }
    }

    return {abbr: abbrs, orgs: orgs};
  }
  async parseCSV(text : string) : Promise<{abbr: AbbreviationModel[], orgs: OrganisationModel[]}> {
    let result : AbbreviationModel[] = [];
    let orgs : OrganisationModel[] = [];

    const lines = text.split("\n");
    for (let line of lines) {
      let abbr = new AbbreviationModel();
      let split = line.split(",");
      if (split.length < 4)
        throw new Error("de afkorting: " + line + " heeft niet alle benodigde kolommen");
      abbr.name = split[0];
      abbr.description = split[1];
      let org = new OrganisationModel();
      org.name = split[2];
      org.id = split[3];
      abbr.organisations.push(org);
      result.push(abbr);
      this.addOrgIfNotExists(orgs, org.id, org.name);
    }
    return {abbr: result, orgs: orgs};
  }

  addOrgIfNotExists(orgs : OrganisationModel[], id : string, name : string) : OrganisationModel {
    // because pdirect data is faulty and sometimes has null instead of a proper id for Rijksbreed
    const newId = (name === "Rijksbreed") ? this.getRijksbreedOrgId() : id;

    for (let o of orgs) {
      if (o.id === newId) {
        return o;
      }
    }
    let organisation = new OrganisationModel();
    organisation.name = name;
    organisation.id = newId;
    orgs.push(organisation);
    return organisation;
  }

  private getRijksbreedOrgId() : string {
    return "da2a1baf-0b34-46f2-a089-f0911a927cac";
  }

  private openErrorPopup() {
    let ref = this.modalService.open(GenericPopupComponent).componentInstance;
    ref.title = "Er is iets fout gegaan";
    ref.confirmText = "Sluit";
    ref.confirm = () => {
      this.router.navigate(["/admin", "overview"]);
    }
  }
  // update the organisation ids of all abbreviations in data
  private setOrgIds(data :  {abbr: AbbreviationModel[], orgs: OrganisationModel[]}) {
    for (let a of data.abbr) {
      for (let o of a.organisations) {
        o.id = this.getOrgIdFromName(o.name, data);
      }
    }
  }
  // get the id belonging to a name from a list of organisations
  private getOrgIdFromName(name : string, data : {abbr: AbbreviationModel[], orgs: OrganisationModel[]}) : string {
    for (let d of data.orgs) {
      if (d.name === name) {
        return d.id;
      }
    }
    return "";
  }
}
