import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,  Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { FarkleComponent } from './farkle/farkle.component';
import { HighscoresComponent } from './highscores/highscores.component';
import { InstructionsComponent } from './instructions/instructions.component';

const appRoutes: Routes = [
  {path: 'game', component: FarkleComponent},
  {path: 'high-scores', component: HighscoresComponent},
  {path: 'instructions', component: InstructionsComponent}
];

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
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
