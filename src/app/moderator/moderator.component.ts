import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";
import {LoginService} from "../auth/login.service";

@Component({
  selector: 'app-moderator',
  templateUrl: './moderator.component.html',
  styleUrls: ['./moderator.component.scss']
})
export class ModeratorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
