import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-request',
  templateUrl: './info-request.component.html',
  styleUrls: ['./info-request.component.scss']
})
export class InfoRequestComponent implements OnInit {
  // name : string;
  // email : string;
  // phone : string;
  // data : string;

  constructor() {
    // this.name = "";
    // this.email = "";
    // this.phone = "";
    // this.data = "";
  }

  ngOnInit(): void {
  }
  test(event : any) {
    //console.log(this.name);
  }

  onSubmit() {

  }
  // nameIsValid() : boolean {
  //   return (this.name === "a");
  // }
}
