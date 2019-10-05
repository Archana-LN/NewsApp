import { Component, OnInit } from '@angular/core';
import { NewsAppService } from '../services/news-app.service';
import { Article } from '../article';

@Component({
  selector: 'app-content-component',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  news: Article;
  constructor(private newsAppService: NewsAppService) { }

  ngOnInit() {
    this.newsAppService.newsSubject.subscribe(data => {
      this.news = data;
    })
  }

}
