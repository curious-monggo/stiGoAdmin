import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'
import { News } from './../models/news';
@Injectable({
  providedIn: 'root'
})
export class NewsService {
	//list variables
	newsListRef: AngularFireList<any>;
	newsList: Observable<News[]>;//added client model
	//object variables
	newsObjRef: AngularFireObject<any>;
	newsObj: Observable<News>;
  constructor(private afDB: AngularFireDatabase) {
    this.newsListRef = afDB.list('news');

/*    this.courseRef = db.object('course');
    this.course = this.courseRef.valueChanges();*/

    //use snapshot changes.map to store key
    this.newsList = this.newsListRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
   }
   getNewsList(){
  	return this.newsList;
  }

  addNewsObj(news:News){
  	this.newsListRef.push(news);
  }

  getNewsObj(id:string){
    this.newsObjRef = this.afDB.object('/news/'+id);
    this.newsObj = this.newsObjRef.valueChanges();
  	return this.newsObj;
  }
}
