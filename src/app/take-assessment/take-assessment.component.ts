import { Component, OnInit } from '@angular/core';
import { JobsService } from '../services/jobs.service';

@Component({
  selector: 'app-take-assessment',
  templateUrl: './take-assessment.component.html',
  styleUrls: ['./take-assessment.component.scss'],
})
export class TakeAssessmentComponent implements OnInit {
  questionNumber: number;
  assessmentQuestions: any;
  quiz: any;
  index: number;

  showStartContent: boolean;
  showAssessmentQuestions: boolean;
  showSpinner: boolean;
  showEndContent: boolean;
  selectedOption: string;

  showBtnMessage: string;

  constructor(private jobService: JobsService) {
    this.showStartContent = true;
    this.showAssessmentQuestions = false;

    this.questionNumber = 1;
    this.showSpinner = false;
    this.showBtnMessage = 'Next';
    this.index = 0;
  }

  ngOnInit(): void {
    this.fetchAllAssessmentQuestions();
  }

  fetchAllAssessmentQuestions() {
    this.jobService.fetchAllAssessmentQuestions().subscribe((data) => {
      this.assessmentQuestions = data;
    });
  }

  startAssessment(): void {
    this.showSpinner = true;

    this.showStartContent = false;

    this.quiz = this.assessmentQuestions[this.index];
    this.questionNumber = 1;
    this.showSpinner = false;
    this.showAssessmentQuestions = true;
    this.showEndContent = false;
  }

  displayNextQuestion() {
    this.showAssessmentQuestions = false;
    this.showSpinner = true;
    this.selectedOption = null;

    this.questionNumber = this.questionNumber + 1;
    this.index = this.index + 1;

    this.quiz = this.assessmentQuestions[this.index];
    this.showSpinner = false;
    this.showAssessmentQuestions = true;
  }

  finishAssement() {
    this.showEndContent = true;
    this.showAssessmentQuestions = false;
  }
}
