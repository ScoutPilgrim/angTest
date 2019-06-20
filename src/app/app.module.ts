import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,  Routes} from '@angular/router';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


import { AppComponent } from './app.component';
import { FarkleComponent } from './farkle/farkle.component';
import { HighscoresComponent } from './highscores/highscores.component';
import { InstructionsComponent } from './instructions/instructions.component';

const appRoutes: Routes = [
  {path: 'game', component: FarkleComponent},
  {path: 'high-scores', component: HighscoresComponent},
  {path: 'instructions', component: InstructionsComponent}
];

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket,
  projectId: masterFirebaseConfig.projectId,
  messagingSenderId: masterFirebaseConfig.messagingSenderId,
  appId: masterFirebaseConfig.appId
};

@NgModule({
  declarations: [
    AppComponent,
    FarkleComponent,
    HighscoresComponent,
    InstructionsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
