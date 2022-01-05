import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-anwser',
  templateUrl: './anwser.component.html',
  styleUrls: ['./anwser.component.scss']
})
export class AnwserComponent implements OnInit {
  @Input() anwser!: { description: string};

  constructor() { }

  ngOnInit(): void {

  }

}
