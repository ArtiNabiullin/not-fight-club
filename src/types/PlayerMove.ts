import { Zone } from "./Zone";

export interface PlayerMove {
  attackZone: Zone;
  defenseZones: Zone[];
}
