import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-moderator',
  templateUrl: './search-moderator.component.html',
  styleUrls: ['./search-moderator.component.scss']
})
export class SearchModeratorComponent implements OnInit {
  @Output() onSearchEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onKey(event : any) {
    this.onSearchEvent.emit(event.target.value);
  }

}
