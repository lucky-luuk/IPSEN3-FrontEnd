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
    password2 : new FormControl(),
    newpassword: new FormControl()
  });
  closeResult = '';

  onClose = ()=>{}

  abbreviation = new AbbreviationModel();
  constructor(public activeModal: NgbActiveModal, private loginservice: LoginService) {}


  submit(){
    let oldpassword: string = this.form.get("password")?.value;
    let oldpasswordtwo: string = this.form.get("password2")?.value;
    let newpassword = this.form.get("newpassword")?.value;
    if (oldpassword === oldpasswordtwo){
     let email = JSON.stringify(localStorage.getItem('userEmail'));
      this.loginservice.resetPassword({email, oldpassword, newpassword});
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
