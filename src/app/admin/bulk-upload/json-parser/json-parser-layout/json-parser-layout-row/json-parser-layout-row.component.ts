import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-json-parser-layout-row',
  templateUrl: './json-parser-layout-row.component.html',
  styleUrls: ['./json-parser-layout-row.component.scss']
})
export class JsonParserLayoutRowComponent implements OnInit {
  @Input()
  row! : {abbreviationProperty: string, jsonProperty: string, jsonData: any};
  @Output()
  onChange = new EventEmitter<{abbreviationProperty: string, jsonProperty: string, jsonData: any}>();
  @Output()
  onRemove = new EventEmitter<{abbreviationProperty: string, jsonProperty: string, jsonData: any}>();
  constructor() { }

  ngOnInit(): void {
  }

  setJsonProperty(event : any) {
    this.row.jsonProperty = event.target.value;
    this.onChange.emit(this.row);
  }

  setAbbrProperty(event : any) {
    this.row.abbreviationProperty = event.target.value;
    this.onChange.emit(this.row);
  }

  onAdd(event : {abbrProp: string, jsonProp: string, parentName: string}) {
    if (this.row.jsonData === undefined)
      this.row.jsonData = [];
    this.row.jsonData.push({abbreviationProperty: event.abbrProp, jsonProperty: event.jsonProp, jsonData: undefined});
  }

  remove(r : {abbreviationProperty: string, jsonProperty: string, jsonData: any}) {
    for (let i = 0; i < this.row.jsonData.length; i++) {
      if (this.row.jsonData[i].abbreviationProperty === r.abbreviationProperty) {
        this.row.jsonData.splice(i, 1);
        break;
      }
    }
  }
}
