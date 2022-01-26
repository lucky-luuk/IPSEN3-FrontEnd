import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-json-parser-layout',
  templateUrl: './json-parser-layout.component.html',
  styleUrls: ['./json-parser-layout.component.scss']
})
export class JsonParserLayoutComponent implements OnInit {
  @Output()
  onLayoutChanged = new EventEmitter<{abbreviationProperty: string, jsonProperty: string, jsonData: any}[]>()
  @Input()
  layout : {abbreviationProperty: string, jsonProperty: string, jsonData: any}[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  addJsonProperty(event : {abbrProp: string, jsonProp: string, parentName: string}) {
    this.layout.push({abbreviationProperty: event.abbrProp, jsonProperty: event.jsonProp, jsonData: undefined});
  }

  remove(r : {abbreviationProperty: string, jsonProperty: string, jsonData: any}) {
    for (let i = 0; i < this.layout.length; i++) {
      if (this.layout[i].abbreviationProperty === r.abbreviationProperty) {
        this.layout.splice(i, 1);
        break;
      }
    }
  }

}
