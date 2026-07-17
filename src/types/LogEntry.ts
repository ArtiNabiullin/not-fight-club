import type { Player } from "./Player";
import type { Enemy } from "./Enemy";
import { Zone } from "./Zone";

export interface LogEntry {
  attacker: Player | Enemy;
  target: Player | Enemy;

  zone: Zone;
  damage: number;

  isCritical: boolean;
  isBlocked: boolean;
}
