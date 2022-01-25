import { Component, OnInit } from '@angular/core';
import {AbbreviationModel} from "../../afkoteek/search/abbreviation-list/abbreviation.model";
import {ModalDismissReasons, NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {AbbreviationService} from "../../afkoteek/search/abbreviation-list/abbreviation.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-first-login-popup',
  templateUrl: './first-login-popup.component.html',
  styleUrls: ['./first-login-popup.component.scss']
})
export class FirstLoginPopupComponent implements OnInit {
  passwordSame: boolean = true;
  form = new FormGroup({
    password : new FormControl(),
    password2 : new FormControl()
  });
  closeResult = '';

  onClose = ()=>{}

  abbreviation = new AbbreviationModel();
  constructor(public activeModal: NgbActiveModal, private abbreviationService: AbbreviationService) {}


  submit(){
    let password = this.form.get("password")?.value;
    let password2 = this.form.get("password2")?.value;
    if (password === password2){
      this.passwordSame = true;

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
