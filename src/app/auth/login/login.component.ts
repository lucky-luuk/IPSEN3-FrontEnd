import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AccountModel} from "../../account.model";
import {LoginService} from "../login.service";
import {Router} from "@angular/router";

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

  constructor( private auth: LoginService, private router: Router) { }

  onSubmit(form: any) {
      this.submitted = true;
      this.email = form.value.email;
      this.password = form.value.password;      
      this.auth.login(this.email, this.password, (data) => {   
        if (this.auth.getRole() === 'ADMIN') {
          this.router.navigate(['admin/overzicht'])
        } else {
          this.router.navigate(['moderator/overzicht'])
        }
      }, () => {
        this.invalid = true;
      });
  }
}
