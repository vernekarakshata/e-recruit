import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { JobsService } from '../services/jobs.service';
import { SkillPieChartComponent } from '../skill-pie-chart/skill-pie-chart.component';
import { TakeAssessmentComponent } from '../take-assessment/take-assessment.component';

@Component({
  selector: 'app-assessment-tab',
  templateUrl: './assessment-tab.component.html',
  styleUrls: ['./assessment-tab.component.scss'],
})
export class AssessmentTabComponent implements OnInit {
  jobsApplied: any[] = [
    'Java Developer',
    'Java Developer - Microservices Architecture/Spring Boot',
  ];

  skills: any;

  isQuizUnAnswered: boolean;
  quizAnswered: boolean;

  constructor(public dialog: MatDialog, private jobsService: JobsService) {
    this.isQuizUnAnswered = false;
    this.quizAnswered = false;
  }

  ngOnInit(): void {}

  checkStatus(value) {
    if (value == 'Java Developer') {
      this.isQuizUnAnswered = true;
      this.quizAnswered = false;
    } else {
      this.isQuizUnAnswered = false;
      this.quizAnswered = true;
    }
  }

  answerQuiz() {
    const dialogRef = this.dialog.open(TakeAssessmentComponent, {
      width: '30%',
      data: '',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed with result: ', result);
    });
  }

  showResults() {
    const dialogRef = this.dialog.open(SkillPieChartComponent, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed with result: ', result);
    });
  }
}
