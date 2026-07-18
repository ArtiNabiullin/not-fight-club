import type { HitResult } from "./HitResult";

export interface DamageResult {
  hits: HitResult[];
  totalDamage: number;
}
