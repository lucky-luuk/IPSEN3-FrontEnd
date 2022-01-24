import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../auth.service";
import {AccountModel} from "./account.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @ViewChild('Login') loginForm: NgForm | undefined;
  email = '';
  password = '';
  submitted = false;

  constructor(private authService: AuthService) {
  }

  onSubmit() {
    if (this.loginForm != undefined) {
      this.submitted = true;
      this.email = this.loginForm.value.email;
      this.password = this.loginForm.value.password;
      const body = {
        username: this.loginForm.value.email,
        password: this.loginForm.value.password
      }
      this.authService.login(body, (data: AccountModel) => {
        console.log(data)
        this.authService.isAuthorised(data);
      })
    }
  }
}
