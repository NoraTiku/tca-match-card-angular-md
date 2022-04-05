import { Component, OnInit } from '@angular/core';
import { CardGameService } from '../card-game.service';

@Component({
  selector: 'app-set-up',
  templateUrl: './set-up.component.html',
  styleUrls: ['./set-up.component.css']
})
export class SetUpComponent implements OnInit {

  constructor(private gameSVC: CardGameService) { }

  ngOnInit(): void {
  }

}
