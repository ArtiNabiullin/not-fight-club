import type { Zone } from "./Zone";

export interface BattleMove {
  attackZones: Zone[];
  defenseZones: Zone[];
}
