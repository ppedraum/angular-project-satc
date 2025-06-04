import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-dashboard',
  imports: [ChartModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  basicData = [
    { ano: 2021, qtd: 2000 },
    { ano: 2022, qtd: 3000 },
    { ano: 2023, qtd: 4000 },
    { ano: 2024, qtd: 5000 },
  ];

  options = {
    aspectRatio: 1,
  };
}
