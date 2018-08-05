import { Component, OnInit } from '@angular/core';
import { News } from './../models/news';
import { NewsService } from '../news-service/news.service';

@Component({
  selector: 'app-news-cards',
  templateUrl: './news-cards.component.html',
  styleUrls: ['./news-cards.component.css']
})
export class NewsCardsComponent implements OnInit {
  newsList:any[];
  newsObj = {
    title: '',
    description: '',
    photo_URL: ''
  };
  

  constructor(
    private newsService: NewsService
  ) { 
    this.getNewsList();
  }

  ngOnInit() {
  }
  getNewsList(){
    this.newsService.getNewsList().subscribe(newsList => {
      this.newsList = newsList;
    });
  }
  // onSubmitAdd() {
  //   this.newsService.addNewsObj(this.newsObj);
  // }
}
