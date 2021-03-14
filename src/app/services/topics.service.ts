import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TopicsService {

  constructor(private httpClient : HttpClient) { }

  fetchAllTopics() {
    const url = `${environment.springBaseUrl}/topics`
    return this.httpClient.get(url);
  }

  fetchAllCategories() {
    const url = `${environment.springBaseUrl}/categories`
    return this.httpClient.get(url);
  }
  
}
