import { Component, OnInit } from '@angular/core';
import { CardGameService } from '../card-game.service';
import {Router } from '@angular/Router';

interface choosePlayerItem {
  name: string;
  checked: boolean;

}
 
@Component({
  selector: 'app-set-up',
  templateUrl: './set-up.component.html',
  styleUrls: ['./set-up.component.css']
})

export class SetUpComponent implements OnInit {

    constructor(
      private gameSVC: CardGameService,
      private routersvc: Router
    
    ) { }

  availablePlayers: choosePlayerItem[] = [];
  

  ngOnInit(): void {
    
    this.availablePlayers = this.gameSVC.getUniquePlayers().map(x => ({
      name: x ,
      checked: false

    }));
  }

  startGame = () => {

    //save players
    this.gameSVC.setCurrentGame({
      start: new Date().toISOString(),
      players: [
        this.availablePlayers[0].name,
        this.availablePlayers[1].name,
        "Tiku"
      ]
    });

    //Navigate to the play screen
    this.routersvc.navigateByUrl("/play");


  };

}
