import { Injectable } from '@angular/core';

export interface gameResult {
  start: string;
  end: string;
  win: string;
  myTurns: string[];
  
}



@Injectable({
  providedIn: 'root'
})
export class CardGameService {

  constructor() { }

  
  
   gameResults: gameResult[] = [
    {
      start: "2022-04-14T18:30:00"
      , end: "2022-04-14T18:00:00"
      , win: "me"
      , myTurns: [
        "match"
        , "no match"
        , "no match"
        , "match"
      ]
    }
    , {
      start: ""
      , end: ""
      , win: "Bless"
      , myTurns: [
          "match"
          , "match"
          , "match"
          , "no match"
          , "no match"
          , "no match"
          , "no match"
          , "no match"
          , "match"
          , "match"
          , "match"
          , "match"
          , "match"
          , "match"
          , "match"
          , "match"
          , "match"
          , "match"
          , "no match"
          , "no match"
          , "no match"
          , "no match"
          , "no match"
          , "no match"
          , "match"
          , "match"
          , "match"
          , "match"
          , "match"
          , "match"
          , "match"
          , "match"
          , "match"
          , "match"
          , "match"
      ]
    }
    , {
      start: ""
      , end: ""
      , win:" Joel"
      , myTurns: [
        "match"
        , "no match"
        , "no match"
        , "match"
      ]
    }];

    addGameResult = (r: gameResult ) => {
      this.gameResults = [
        ...this.gameResults, 
        r

      ];
    };
  
 
  
  
}
