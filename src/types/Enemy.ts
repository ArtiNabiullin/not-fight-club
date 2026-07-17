import { Zone } from "./Zone";

export interface Enemy {
  name: string;
  avatar: string;

  maxHp: number;
  damage: number;

  attackProfile: Zone[];
  defenseProfile: Zone[];

  attackCount: number;
  defenseCount: number;
}
