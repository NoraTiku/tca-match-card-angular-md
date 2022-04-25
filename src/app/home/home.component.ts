import { Component, OnInit } from '@angular/core';
import { CardGameService } from '../card-game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public gameSVC: CardGameService) { }

  ngOnInit(): void {
    this.gamesPlayed = this.gameSVC.gameResults.length;
  }

  gamesPlayed = 0;

}
