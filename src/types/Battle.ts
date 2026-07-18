import type { Player } from "./Player";
import type { Enemy } from "./Enemy";
import type { LogEntry } from "./LogEntry";

export interface Battle {
  player: Player;
  enemy: Enemy;

  playerHp: number;
  enemyHp: number;

  turn: number;
  log: LogEntry[];

  isFinished: boolean;
}
