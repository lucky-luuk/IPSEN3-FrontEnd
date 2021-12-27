import { Injectable } from '@angular/core';
import {HttpService} from "../../http.service";
import { ModeratorModel } from 'src/app/moderator/moderator.model';

@Injectable({
  providedIn: 'root'
})
export class AddModService {

    constructor(private http : HttpService) { }

postModerator(moderator : ModeratorModel[]) : void {
    this.http.post<ModeratorModel[]>("/register", moderator, (data) => {});
  }

}