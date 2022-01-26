import { Component, OnInit } from '@angular/core';
import {AbbreviationModel} from "../../afkoteek/search/abbreviation-list/abbreviation.model";
import {ModalDismissReasons, NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {AbbreviationService} from "../../afkoteek/search/abbreviation-list/abbreviation.service";
import {FormControl, FormGroup} from "@angular/forms";
import { HttpService } from 'src/app/http.service';
import { LoginService } from '../login.service';
import { Md5 } from 'ts-md5';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-login-popup',
  templateUrl: './first-login-popup.component.html',
  styleUrls: ['./first-login-popup.component.scss']
})
export class FirstLoginPopupComponent implements OnInit {
  passwordSame: boolean = true;
  data: any;
  form = new FormGroup({
    newpassword: new FormControl(),
    newpasswordtwo : new FormControl()
  });
  closeResult = '';

  onClose = ()=>{}

  abbreviation = new AbbreviationModel();
  constructor(private auth: LoginService, public activeModal: NgbActiveModal, private router: Router, private loginservice: LoginService) {}


  submit(){
    let newPassword = this.form.get("newpassword")?.value;
    let newpasswordtwo: string = this.form.get("newpasswordtwo")?.value;
    if (newPassword === newpasswordtwo){
      const token = this.auth.getToken();
      newPassword = Md5.hashStr(newPassword);
      this.loginservice.resetPassword({newPassword});
      this.onSave();
    }else{
      this.passwordSame = false;
    }
  }

  onSave(){
    this.activeModal.close();
    this.onClose();

    if (this.data) {
      this.auth.handleLogin(this.data.token);
      if (this.auth.getRole() === 'ADMIN') {
        this.router.navigate(['admin/overzicht'])
      } else {
        this.router.navigate(['moderator/overzicht'])
      }
    }
  }
  ngOnInit(): void {
  }

}
