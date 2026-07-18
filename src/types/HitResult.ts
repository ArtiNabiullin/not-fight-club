import { Zone } from "./Zone";

export interface HitResult {
  zone: Zone;

  damage: number;

  isCritical: boolean;

  isBlocked: boolean;
}
