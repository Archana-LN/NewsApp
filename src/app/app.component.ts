import { Component, OnInit } from '@angular/core';
import { NewsAppService } from './services/news-app.service';
import { Article } from './article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  news: Array<Article>;
  constructor(private newsServce: NewsAppService) {

  }

  ngOnInit() {
    this.newsServce.getNews().subscribe(
      res => {
        this.news = res;
      }
    )
  }
}
