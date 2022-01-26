import { Component, OnInit } from '@angular/core';
import {AbbreviationModel} from "../../afkoteek/search/abbreviation-list/abbreviation.model";
import {ModalDismissReasons, NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {AbbreviationService} from "../../afkoteek/search/abbreviation-list/abbreviation.service";
import {FormControl, FormGroup} from "@angular/forms";
import { HttpService } from 'src/app/http.service';
import { LoginService } from '../login.service';
import { Md5 } from 'ts-md5';

@Component({
  selector: 'app-first-login-popup',
  templateUrl: './first-login-popup.component.html',
  styleUrls: ['./first-login-popup.component.scss']
})
export class FirstLoginPopupComponent implements OnInit {
  passwordSame: boolean = true;
  form = new FormGroup({
    password : new FormControl(),
    newpasswordtwo : new FormControl(),
    newpassword: new FormControl()
  });
  closeResult = '';

  onClose = ()=>{}

  abbreviation = new AbbreviationModel();
  constructor(public activeModal: NgbActiveModal, private loginservice: LoginService) {}


  submit(){
    let oldPassword: string = this.form.get("password")?.value;
    let newpasswordtwo: string = this.form.get("newpasswordtwo")?.value;
    let newPassword = this.form.get("newpassword")?.value;
    if (newPassword === newpasswordtwo){
      newPassword = Md5.hashStr(newPassword);
      this.loginservice.resetPassword({oldPassword, newPassword});
    } else{
      this.passwordSame = false;
    }
  }

  onSave(){
    this.activeModal.close();
    this.onClose();
  }
  ngOnInit(): void {
  }

}
