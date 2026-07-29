import type { Player } from "./Player";
import type { Enemy } from "./Enemy";
import type { LogEntry } from "./LogEntry";
import type { BattleMove } from "./BattleMove";

export type BattleResult = "win" | "loss" | "draw";

export interface Battle {
  player: Player;
  enemy: Enemy;

  playerHp: number;
  enemyHp: number;

  turn: number;
  log: LogEntry[];

  isFinished: boolean;
  result: BattleResult | null;
  statsRecorded: boolean;
  playerMove: BattleMove;
}
