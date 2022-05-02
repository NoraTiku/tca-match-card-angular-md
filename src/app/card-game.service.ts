import { Injectable } from '@angular/core';

export interface gameResult {
  start: string
  end: string;        
  turns:  any;    
}


const game1: gameResult = {
  start: "2022-02-14T18:55:00"
  , end: "2022-02-14T19:00:00"
  , turns: 10
};

const game2: gameResult = {
  start: "2022-02-14T19:05:00"
  , end: "2022-02-14T19:35:00"
  ,  turns: 10
  
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




  TakeTurns = (r: gameResult) => {
    this.gameResults = [
      ...this.gameResults,
      r
    ];
  }; 
  
  
  
  /** 
  calculateFastestWin = () => {
    return 10;
  };
  **/

/** 
calculateFastestWin = (r: gameResult[]) =>{ (
  Math.min(...r.map(x => x.turns.length,
    
    ))
  
)};

**/



  calculateFastestWin = () => (

    
      Math.min(...this.gameResults.map(x => x.turns.length))
  
);
 




 



}
