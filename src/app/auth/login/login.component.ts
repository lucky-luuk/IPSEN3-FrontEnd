import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AccountModel} from "../../account.model";
import {LoginService} from "../login.service";
import {Router} from "@angular/router";
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { FirstLoginPopupComponent } from '../first-login-popup/first-login-popup.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = '';
  password = '';
  submitted = false;
  invalid = false;

  constructor( private auth: LoginService, private router: Router, private modal: NgbModal) { }

  onSubmit(form: any) {
      this.submitted = true;
      this.email = form.value.email;
      this.password = form.value.password;
      this.auth.login(this.email, this.password, (data) => {
        if(data.firstLogin){
          let modalOption : NgbModalOptions = {};
          modalOption.backdrop = "static";
          modalOption.keyboard = false;
          let ref = this.modal.open(FirstLoginPopupComponent, modalOption).componentInstance;
          ref.data = data;
        }else{
          if (data) {
            this.auth.handleLogin(data.token);
            if (this.auth.getRole() === 'ADMIN') {
              this.router.navigate(['admin/overzicht'])
            } else {
              this.router.navigate(['moderator/overzicht'])
            }
          }
        }
      }, () => {
        this.invalid = true;
      });
  }
}
