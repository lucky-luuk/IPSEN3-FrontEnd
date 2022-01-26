import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import { AccountModel } from 'src/app/account.model';
import { HttpService } from 'src/app/http.service';
import { Md5 } from 'ts-md5';

@Component({
  selector: 'app-add-mod-popup',
  templateUrl: './add-mod-popup.component.html',
  styleUrls: ['./add-mod-popup.component.scss']
})
export class AddModPopupComponent implements OnInit {
  data : {first_name : string, last_name : string, email : string, phone : string, password :string};
  account: AccountModel = new AccountModel;

  constructor(public activeModel : NgbActiveModal, private http: HttpService, private router: Router) {
    this.data = {first_name: "",last_name: "",email: "",phone: "", password: ""};
  }

  ngOnInit(): void {
    this.data.password = this.createRandomUserPassword();
  }

  onSubmit() {
    this.account.firstName = this.data.first_name;
    this.account.lastName = this.data.last_name;
    this.account.email = this.data.email;
    this.account.password = Md5.hashStr(this.data.password);
    this.http.post<AccountModel>('/account/mod', this.account, (data) => {
      console.log(data);
      
    });
  }

  createRandomUserPassword(): string{
    let possible ="ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    let text = "";
    for(let i = 0; i< 8; i++){
      text += possible.charAt(Math.floor(Math.random()* possible.length));
    }
    return text;
  }
}
