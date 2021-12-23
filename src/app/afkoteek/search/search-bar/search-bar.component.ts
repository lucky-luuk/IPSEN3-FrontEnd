import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  public placeHolderText ="Zoek een afkorting";
  public onKeyTimeout = 400;
  private delayTimer : number = 0;
  @Output() preOnSearchEvent = new EventEmitter();
  @Output() onSearchEvent = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onKey(event : any) {
    this.preOnSearchEvent.emit();
    clearTimeout(this.delayTimer);
    this.delayTimer = setTimeout(() => {
      this.onSearchEvent.emit(event.target.value);
    }, this.onKeyTimeout);
  }
}
