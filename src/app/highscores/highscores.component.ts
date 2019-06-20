import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { HighscoreService } from '../highscore.service';

@Component({
  selector: 'app-highscores',
  templateUrl: './highscores.component.html',
  styleUrls: ['./highscores.component.css'],
  providers: [HighscoreService]
})
export class HighscoresComponent implements OnInit {
  scores: FirebaseListObservable<any[]>;
  constructor(public highscoreService: HighscoreService) {
    this.scores = highscoreService.getHighScores();
  }

  ngOnInit() {
  }

}
