import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {LoginService} from "./login.service";
import {AccountModel} from "./account.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'AFKORIJK';
  isAuthorised = 'afko';


  constructor(private titleService : Title, private login : LoginService) {
    this.titleService.setTitle(this.title);
  }

  ngOnInit() {

  }

}
