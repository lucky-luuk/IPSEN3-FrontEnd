import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-game-page-start',
  templateUrl: './game-page-start.component.html',
  styleUrls: ['./game-page-start.component.scss']
})
export class GamePageStartComponent implements OnInit {
  @ViewChild('gameform') gameForm!: NgForm;
  organisatie: string = "";

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  onSelectOrg(data: string){
    this.organisatie = data;
    console.log(this.organisatie);
  }

  startGame(form: NgForm){
    this.router.navigate(['game',this.organisatie, this.gameForm.value.name]);    
  }

}
