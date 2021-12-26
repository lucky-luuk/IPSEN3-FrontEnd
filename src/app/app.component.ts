import {Component} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AFKORIJK';

  constructor(private titleService : Title, public router: Router) {
    this.titleService.setTitle(this.title);
  }

}
