import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  private delayTimer : number = 0;
  @Output() onSearchEvent = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }


  onKey(event : any) {
    clearTimeout(this.delayTimer);
    this.delayTimer = setTimeout(() => {
      this.onSearchEvent.emit(event.target.value);
    }, 400);
  }
}
