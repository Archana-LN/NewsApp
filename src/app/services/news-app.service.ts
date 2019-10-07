import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Article } from '../article';

@Injectable()
export class NewsAppService {


  newsSubject = new BehaviorSubject<Article>(null);

  constructor(private http: HttpClient) { }

  getNews() {
    return this.http.get<Array<Article>>('https://my-json-server.typicode.com/Archana-LN/news/news');
  }

}
