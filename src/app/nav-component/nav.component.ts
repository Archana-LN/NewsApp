import { Component, OnInit, Input } from '@angular/core';
import { Article } from './../article';
import { NewsAppService } from '../services/news-app.service';

@Component({
  selector: 'app-nav-component',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Input() newsParent;

  constructor(private newsAppservice: NewsAppService) { }

  ngOnInit() {

  }

  getContent(news) {
    this.newsAppservice.newsSubject.next(news);
  }

}
