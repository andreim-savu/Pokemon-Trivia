import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment.prod';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { QuizPageComponent } from './pages/quiz-page/quiz-page.component';
import { QuizAnswerComponent } from './components/quiz-answer/quiz-answer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    QuizPageComponent,
    QuizAnswerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
