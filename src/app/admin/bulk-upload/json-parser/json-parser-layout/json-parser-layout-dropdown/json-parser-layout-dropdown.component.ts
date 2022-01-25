import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-json-parser-layout-dropdown',
  templateUrl: './json-parser-layout-dropdown.component.html',
  styleUrls: ['./json-parser-layout-dropdown.component.scss']
})
export class JsonParserLayoutDropdownComponent implements OnInit {
  abbrProp = "";
  jsonProp = "";
  @Input()
  parent = "";
  @Output()
  onAdd = new EventEmitter<{abbrProp: string, jsonProp: string, parentName: string}>();
  constructor() { }

  ngOnInit(): void {
  }

  add() {
   this.onAdd.emit({abbrProp: this.abbrProp, jsonProp: this.jsonProp, parentName: this.parent});
  }
  onSetAbbr(event : any) {
    this.abbrProp = event.target.value;
  }
  onSetJson(event : any) {
    this.jsonProp = event.target.value;
  }
}
