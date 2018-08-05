
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';

import { NewsComponent } from './news/news.component';
import { DashboardCardsComponent } from './dashboard-cards/dashboard-cards.component';
import { NewsCardsComponent } from './news-cards/news-cards.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { NewsService } from './news-service/news.service';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'news', component: NewsComponent },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: '**',
    component: PageNotFoundComponent,
    pathMatch: 'full'
  }
];

export const firebaseConfig = {
  apiKey: "AIzaSyD6Rg5ux3fQi3OrwrWCHAEipaxrk3hB7EY",
  authDomain: "stigo-6d063.firebaseapp.com",
  databaseURL: "https://stigo-6d063.firebaseio.com",
  projectId: "stigo-6d063",
  storageBucket: "stigo-6d063.appspot.com",
  messagingSenderId: "510666125923"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    DashboardComponent,
    NavbarComponent,
    NewsComponent,
    DashboardCardsComponent,
    NewsCardsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    FormsModule
  ],
  providers: [
    AngularFireDatabase,
    NewsService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
