import { Component, OnInit } from '@angular/core';
import { CardGameService } from '../card-game.service';

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

  constructor(private gameSVC: CardGameService) { }

  availablePlayers: choosePlayerItem[] = [];

  ngOnInit(): void {
    this.availablePlayers = this.gameSVC.getUniquePlayers().map(x => ({
      name: x ,
      checked: false

    }));
  }

}
