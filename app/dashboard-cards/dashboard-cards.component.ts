import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-cards',
  templateUrl: './dashboard-cards.component.html',
  styleUrls: ['./dashboard-cards.component.css']
})
export class DashboardCardsComponent implements OnInit {
  collection = ['Test1','Test2', 'Test3', 'Test4','Test1','Test2', 'Test3', 'Test4', 'Test1','Test2', 'Test3', 'Test4'];
  constructor() { }

  ngOnInit() {
  }

}
