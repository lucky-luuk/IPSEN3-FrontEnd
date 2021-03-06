import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {LoginService} from "../../auth/login.service";

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {
  isLoggedIn: boolean = false;
  adminRoutes = [
    {
      name: 'Overzicht',
      link: '/admin/overzicht'
    },
    {
      name: 'Gebruiker Toevoegen',
      link: '/admin/nieuw'
    },
    {
      name: "Bulk uploaden",
      link: "/admin/bulk"
    }
  ]

  constructor(private route: Router, private activeRoute: ActivatedRoute, private auth: LoginService) {
  }


  ngOnInit(): void {
  }

  logout() {
    this.isLoggedIn = false;
    this.auth.deleteToken();
    this.route.navigate(['afko'])
  }

}

