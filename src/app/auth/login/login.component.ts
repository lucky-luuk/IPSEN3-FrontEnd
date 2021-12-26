import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

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



  onSubmit() {
    if (this.loginForm != undefined) {
      this.submitted = true;
      this.email = this.loginForm.value.email;
      this.password = this.loginForm.value.password;
    }
  }
}
