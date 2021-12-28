import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { ModeratorModel } from '../moderator/moderator.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http : HttpService) { }

  postModerator(moderator : ModeratorModel) : void{
    this.http.post<ModeratorModel>("#", moderator, (data) =>{});
  }
}
