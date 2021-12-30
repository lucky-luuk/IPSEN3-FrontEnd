import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-game-page-start',
  templateUrl: './game-page-start.component.html',
  styleUrls: ['./game-page-start.component.scss']
})
export class GamePageStartComponent implements OnInit {
  organisatie: string = "";
  @ViewChild ('nameInput') nameInputRef: ElementRef;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.nameInputRef = new ElementRef(null);
  }

  ngOnInit(): void {}

  onSelectOrg(data: string){
    this.organisatie = data;
    console.log(this.organisatie);
  }

  startGame(){
    const playerName = this.nameInputRef.nativeElement.value;
    this.router.navigate(['game',this.organisatie,playerName]);

  }

}
