import { Component, OnInit, ViewChild } from '@angular/core';
import { JobsService } from '../services/jobs.service';

import { ChartComponent } from 'ng-apexcharts';

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-skill-pie-chart',
  templateUrl: './skill-pie-chart.component.html',
  styleUrls: ['./skill-pie-chart.component.scss'],
})
export class SkillPieChartComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor(private jobService: JobsService) {
    this.getSkillScore();
  }

  ngOnInit(): void {}

  getSkillScore() {
    this.jobService.fetchSkillPieChart().subscribe((data) => {
      console.log('chart', data);

      this.chartOptions = data;
    });
  }
}
