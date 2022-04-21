import { Component, OnInit } from '@angular/core';
import { CardGameService, gameResult } from '../card-game.service';
import {Router } from '@angular/router';

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.css']
})


export class PlayGameComponent implements OnInit {

  constructor(private gameSVC: CardGameService,
    private router: Router

    ) { }

  ngOnInit(): void {
  }

  endGame = () => {
    //add new game result to the service
    this.gameSVC.addGameResult({
      start: this.gameSVC.currentGame.start,
      end: new Date().toISOString(),
      players: this.gameSVC.currentGame.players.map(x => ({
        name: x, order: 0


      })),
      winner: "Tiku"
    });


    //navigate back to the home
    this.router.navigateByUrl("home");
  };

}

