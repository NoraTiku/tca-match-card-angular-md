import { Component, OnInit } from '@angular/core';
import { CardGameService, gameResult } from '../card-game.service';

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.css']
})
export class PlayGameComponent implements OnInit {

  constructor(private gameSVC: CardGameService) { }

  ngOnInit(): void {
  }

  endGame = (r: gameResult) => {
    //add new game result to the service


    //navigate back to the home
  }

}

