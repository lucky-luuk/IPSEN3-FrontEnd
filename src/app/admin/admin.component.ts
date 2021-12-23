import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminOverviewComponent } from './overview/admin-overview.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  @ViewChild(AdminOverviewComponent) adminOverView: any;

  constructor() { }

  ngOnInit(): void {
  }
}
