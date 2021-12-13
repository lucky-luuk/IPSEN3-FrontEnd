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
  afkos: { name: string }[] = [];

  constructor(private headerService: HeaderService, private route: Router) {
    headerService.getAfko();
    this.afkos = headerService.getAfko();
    headerService.getModerator();
  }

  ngOnInit(): void {
    this.route.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/afko'){
          this.isAuthorised = 'afko'
        }
        if (event.url === '/moderator'){
          this.isAuthorised = 'moderator'
        }
        if (event.url === '/admin'){
          this.isAuthorised = 'admin'
        }
      }
    });
  }
}
