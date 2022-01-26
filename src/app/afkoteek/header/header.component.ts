import {Component, OnInit} from '@angular/core';
import {HeaderService} from "./header.service";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";
import {LoginService} from "../../auth/login.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAuthorised: string = 'afko'
  isLoggedIn: boolean = false;
  roleRoutes: { name: string; link: string; }[] = []
  mod = [
    {
      name: 'Overzicht',
      link: '/moderator/overzicht'
    },
    {
      name: 'Ticket',
      link: '/moderator/ticket'
    }
  ]
  admin = [
    {
      name: 'Overzicht',
      link: '/admin/overzicht'
    },
    {
      name: 'Gebruiker Toevoegen',
      link: '/admin/nieuw'
    },
    {
      name: 'Instellingen',
      link: '/admin/settings'
    }
  ]



  constructor(private headerService: HeaderService, private route: Router, private activeRoute: ActivatedRoute, private auth: LoginService) {
    headerService.getModeratorHeaderOptions();
  }


  ngOnInit(): void {

  }

  logout() {
    this.isLoggedIn = false;
  }
  setIsAuthorized(url : string) {
    this.isAuthorised = url.replace("/", "");
  }
}

