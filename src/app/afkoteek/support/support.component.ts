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
  options: { type: string, name: string }[] = [];

  constructor(private supportService: SupportService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.options = this.supportService.getOptions();
    this.route.queryParams
      .subscribe(
        (params) => {
          console.log(params)
        }
      )
  }

  supportType(type: string) {
    this.activeSupport = type;
  }
}
