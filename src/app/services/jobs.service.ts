import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  constructor(private httpClient: HttpClient) {}

  fetchAllTJobAdvertisements() {
    return this.httpClient.get('assets/job-posts.json');
  }

  fetchAllAssessmentQuestions() {
    return this.httpClient.get('assets/spring-15-questions.json');
  }

  fetchSkillPieChart() {
    return this.httpClient.get('assets/skill-score.json');
  }
}
