import { Injectable } from '@angular/core';

export interface gameResult {
  start: string;
  end: string;
  //win: string;
  //myTurns: string[];
  
}



export interface player {
  name: string;
  order: number;
};
export interface gameResult {
  start: string;      // "2022-02-14T18:49:30"
  end: string;        // "2022-02-14T18:59:30"
  winner: string;      // "Me"
  players: player[] ;  


  // tca-zombie-specific
  expansions?: any[];
  gameTurns?: any[]
};




const game1: gameResult = {
  start: "2022-02-14T18:55:00"
  , end: "2022-02-14T19:00:00"
  , winner: "Me"
  , players: [{ name: "Me", order: 1 }, { name: "Jack", order: 2 }, { name: "Taylor", order: 3 }]
  
  
};

const game2: gameResult = {
  start: "2022-02-14T19:05:00"
  , end: "2022-02-14T19:35:00"
  , winner: "Stephanie"
  , players: [{ name: "Me", order: 1 }, { name: "Stephanie", order: 2 }]
};



@Injectable({
  providedIn: 'root'
})
export class CardGameService {

  constructor() { 
    
    
  }
  gameResults: gameResult[] = [
    game1
    , game2
];

addGameResult = (r: gameResult) => {
  this.gameResults = [
    ...this.gameResults,
    r
  ];
};

  
  
  
 
  
  
}
