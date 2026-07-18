export function isCriticalHit(): boolean {
  const criticalChance = 0.2;

  return Math.random() < criticalChance;
}
