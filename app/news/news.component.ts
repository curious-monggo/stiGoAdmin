import { Component, OnInit } from '@angular/core';
import { News } from './../models/news';
import { NewsService } from '../news-service/news.service';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  isDialogOpen = false;

  newsList:any[];
  newsObj = {
    title: '',
    description: '',
    photo_URL: ''
  };
  

  constructor(
    private newsService: NewsService
  ) { }

  ngOnInit() {
  }
  openDialog(){
    this.isDialogOpen =true;
  }
  closeDialog(){
    this.isDialogOpen =false;
  }
  onSubmitAdd() {
    this.newsService.addNewsObj(this.newsObj);
    this.closeDialog();
  }
}
