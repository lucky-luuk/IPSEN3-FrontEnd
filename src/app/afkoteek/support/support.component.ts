import {Component, HostBinding, OnInit} from '@angular/core';
import {SupportService} from "./support.service";
import {ActivatedRoute, Router, Routes} from "@angular/router";

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {
  activeSupport: string = '';

  constructor(private supportService: SupportService) { }

  ngOnInit(): void {
  }

  setSupportType(type: string) {
    this.activeSupport = type;
  }

  getOptions() : { type: string, name: string }[] {
    return this.supportService.getOptions();
  }
}
