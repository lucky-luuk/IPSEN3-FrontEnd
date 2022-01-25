import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {LoginService} from "../../auth/login.service";

@Component({
  selector: 'app-mod-header',
  templateUrl: './mod-header.component.html',
  styleUrls: ['./mod-header.component.scss']
})
export class ModHeaderComponent implements OnInit {
  isLoggedIn: boolean = false;
  roleRoutes: { name: string; link: string; }[] = []
  modRouter = [
    {
      name: 'Overzicht',
      link: '/moderator/overzicht'
    },
    {
      name: 'Ticket',
      link: '/moderator/ticket'
    }
  ]



  constructor(private route: Router, private activeRoute: ActivatedRoute, private auth: LoginService) {
  }


  ngOnInit(): void {
  }

  logout() {
    this.isLoggedIn = false;
    this.auth.logout();
  }

}

