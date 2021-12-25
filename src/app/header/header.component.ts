import {Component, OnInit} from '@angular/core';
import {HeaderService} from "./header.service";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAuthorised: string = 'afko'
  afkoHeaders: { name: string }[] = [];
  private urls : string[] = [
    "/afko",
    "/moderator",
    "/admin"
  ];

  constructor(private headerService: HeaderService, private route: Router) {
    this.afkoHeaders = headerService.getAfkotheekHeaderOptions();
    headerService.getModeratorHeaderOptions();
  }

  ngOnInit(): void {
    this.route.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (this.urls.includes(event.url)) {
          this.setIsAuthorized(event.url);
        }
      }
    });
  }
  setIsAuthorized(url : string) {
    this.isAuthorised = url.replace("/", "");
  }
}
