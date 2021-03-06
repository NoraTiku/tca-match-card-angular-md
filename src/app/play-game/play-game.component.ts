import { Component, OnInit } from '@angular/core';
import { CardGameService, gameResult } from '../card-game.service';
import {Router } from '@angular/router';

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.css']
})


export class PlayGameComponent implements OnInit {

  constructor(public gameSVC: CardGameService,
    private router: Router

    ) { }

  ngOnInit(): void {
  }

  endGame = () => {
    //add new game result to the service
    this.gameSVC.addGameResult({
      start: "",
      end: new Date().toISOString(),
      turns: this.turns
    });

    //navigate back to the home
    this.router.navigateByUrl("/");
  };

  turns = 0;


  iWon = () => {
    
    this.turns = this.turns +1;
   
    
  };

  

  






}





