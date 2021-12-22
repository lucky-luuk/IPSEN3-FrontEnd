import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AdminOverviewComponent } from './overview/admin-overview.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
@ViewChild(AdminOverviewComponent) adminOverView: any;

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  onSearch(data : string) {
    this.adminOverView.onSearchMod(data);
  }

}
