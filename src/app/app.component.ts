import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {LoginService} from "./auth/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'AFKORIJK';
  isAuthorised = 'afko';


  constructor(private titleService : Title,  public router: Router) {
    this.titleService.setTitle(this.title);
  }

  ngOnInit() {

  }

}
