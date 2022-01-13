import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'AFKORIJK';
  isAuthorised = 'afko';

  constructor(private titleService : Title, private route: Router) {
    this.titleService.setTitle(this.title);
  }

  ngOnInit() {

  }

}
