import { Sprite } from "src/app/models/sprite.model";
import { GameSpriteService } from "../game-sprite/game-sprite.service";
import { Position } from "src/app/models/position.model";
import { BoardRow, BoardRowParams } from "src/app/models/board-row.model";
import { Move } from "src/app/models/move.model";

export class BoardRowService {
  static defaultSprite: Sprite = GameSpriteService.gameSprites.grass;
  static defaultSafe: boolean = false;

  static getDefaultRow(position: Position, options?: Partial<BoardRowParams>): BoardRow {
    return new BoardRow(BoardRowService.getDefaultRowParams(position, options));
  }

  static getDefaultRowParams(
    position: Position,
    options?: Partial<BoardRowParams>,
  ): BoardRowParams {
    return {
      position: position,
      move: options?.move ?? new Move({ distance: 0 }),
      background: options?.background ?? this.defaultSprite,
      defaultSafe: options?.defaultSafe ?? this.defaultSafe,

      size: options?.size,
      obstacles: options?.obstacles,
      obstaclesIdx: options?.obstaclesIdx,
      currObstacles: options?.currObstacles,
      min: options?.min,
      max: options?.max,
    };
  }
}
