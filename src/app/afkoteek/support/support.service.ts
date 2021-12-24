import {Injectable} from "@angular/core";
import {HttpService} from "../../http.service";

@Injectable({
  providedIn: 'root'
})
export class SupportService {

  constructor(private http : HttpService) {
  }


  private supportOption = [
    {
      type: 'request',
      name: 'Informatie verzoek'
    },
    {
      type: 'report',
      name: 'Fout Melden'
    },
    {
      type: 'add',
      name: 'Afkorting toevoegen'
    }
  ];

  getOptions() {
    return this.supportOption;
  }

}
