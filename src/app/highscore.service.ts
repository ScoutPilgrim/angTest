import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class HighscoreService {
  highscores: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.highscores = db.list('/highscores');
  }
  pushHighScore(int){
    this.highscores.push(int);
  }
  getHighScores(){
    return this.highscores;
  }
}
