import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AccountModel} from "../../account.model";
import {LoginService} from "../login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = '';
  password = '';
  submitted = false;

  constructor( private auth: LoginService) { }

  onSubmit(form: any) {
      this.submitted = true;
      this.email = form.value.email;
      this.password = form.value.password;
      this.auth.login(this.email, this.password)
  }
}
