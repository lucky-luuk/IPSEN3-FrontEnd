import {Component, OnInit} from '@angular/core';
import {HeaderService} from "./header.service";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAuthorised: string = 'afko'
  afkoHeaders: { name: string }[] = [];
  user: boolean = true;
  private urls : string[] = [
    "/afko",
    "/moderator",
    "/admin"
  ];

  constructor(private headerService: HeaderService, private route: Router, private activeRoute: ActivatedRoute) {
    this.afkoHeaders = headerService.getAfkotheekHeaderOptions();
    headerService.getModeratorHeaderOptions();

  }

  ngOnInit(): void {
    this.route.events
      .pipe(filter(event => event instanceof NavigationEnd))
      // @ts-ignore
      .subscribe((event: NavigationEnd) => {
        if (event.url.includes('/moderator')) {
          this.isAuthorised = 'moderator';
          this.user = false;
        }
        else if (event.url.includes('/admin')) {
          this.isAuthorised = 'admin';
          this.user = false;
        }
        else {
          this.isAuthorised = 'afko';
          this.user = true;
        }
      });
  }

  setIsAuthorized(url : string) {
    this.isAuthorised = url.replace("/", "");
  }
}
//if (event instanceof NavigationEnd) {
//         if (this.urls.includes(event.url)) {
//           this.setIsAuthorized(event.url);
//         }
//       }
