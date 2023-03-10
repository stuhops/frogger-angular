import { Injectable } from '@angular/core';
import { RecordsService } from '../records/records.service';
import { Game } from 'src/app/models/game.model';
import { HighScore } from 'src/app/models/high-score.model';
import { StatusBar } from 'src/app/models/status-bar.model';
import { CharacterService } from '../character/character.service';
import { GameBoardService } from '../game-board/game-board.service';

@Injectable({
  providedIn: 'root',
})
export class GameInitService {
  constructor(
    private _characterService: CharacterService,
    private _gameBoardService: GameBoardService,
  ) {}

  game(): Game {
    const level = 0;
    return new Game({
      level: level,
      levels: 2,
      character: this._characterService.frog(),
      board: this._gameBoardService.generateBoard(level),
    });
  }

  highScores(): HighScore[] {
    return RecordsService.highScores;
  }

  statusBar(game: Game): StatusBar {
    return new StatusBar({
      size: { width: Game.SQR_SIZE, height: Game.ROW_HEIGHT },
      gameLives: game.lives,
      score: game._score,
      gameClock: game.clock,
      position: { x: 0, y: 0 },
    });
  }
}

// game.loader = (function() {
//     let scriptOrder = [
//             scripts: ['road', 'river', 'land', 'winRow'],
//             message: 'Game Board loaded',
//             onComplete: null
//         }];
// }());

// function newGame() {
//   game.winRow = game.createWinRow(
//     0,  // x
//     0,  // y
//     game.gameWidth,  // width
//     game.gameHeight / game.rows * 2 // height
//     // fillImgSrc
//     // obstacleImgSrcArr
//   );
//   game.river = game.createRiver(
//     0,  // x
//     2 * (game.gameHeight / game.rows),  // y
//     game.gameWidth,  // width
//     game.gameHeight / game.rows * 5 // height
//   );
//   game.middleLand = game.createLand(
//     0,  // x
//     parseInt(game.rows / 2) * (game.gameHeight / game.rows),  // y
//     game.gameWidth,  // width
//     game.gameHeight / game.rows * 1 // height
//   );
//   game.road = game.createRoad(
//     0,  // x
//     parseInt(game.rows / 2 + 1) * (game.gameHeight / game.rows),  // y
//     game.gameWidth,  // width
//     game.gameHeight / game.rows * 5 // height
//   );
//   game.startLand = game.createLand(
//     0,  // x
//     parseInt(game.rows - 1) * (game.gameHeight / game.rows),  // y
//     game.gameWidth,  // width
//     game.gameHeight / game.rows * 1 // height
//   );

//   game.statusBar = game.createStatusBar(
//     game.gameWidth,
//     game.gameHeight / game.rows,
//     0,
//     0,
//     // parseInt(game.rows - 1) * (game.gameHeight / game.rows),  // y
//   )

//   document.getElementById('background-music').play();

//   game.gameLoop.start();
// }
