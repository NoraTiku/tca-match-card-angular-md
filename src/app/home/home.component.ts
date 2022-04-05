import { Component, OnInit } from '@angular/core';
import { CardGameService } from '../card-game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private gameSVC: CardGameService) { }

  ngOnInit(): void {
  }

}
