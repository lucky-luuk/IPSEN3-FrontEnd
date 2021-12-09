import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";

@Component({
  selector: 'app-moderator',
  templateUrl: './moderator.component.html',
  styleUrls: ['./moderator.component.scss']
})
export class ModeratorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

  }
  onClick(){
    this.router.navigateByUrl("/ticket")
  }
}
