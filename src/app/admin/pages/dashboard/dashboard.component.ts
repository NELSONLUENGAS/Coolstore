import { Component } from '@angular/core';
import { ApplicationConfig } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  data: any;

  chartOptions: any;

  ngOnInit() {
    this.data = {
      datasets: [{
        data: [
          11,
          16,
          7,
          3
        ],
        backgroundColor: [
          "#42A5F5",
          "#66BB6A",
          "#FFA726",
          "#26C6DA"
        ],
        label: 'Statistic'
      }],
      labels: [
        "Products",
        "Categories",
        "Orders",
        "users",
      ]
    };
  }
}
