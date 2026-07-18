export const Zone = {
  Head: "head",
  Neck: "neck",
  Body: "body",
  Belly: "belly",
  Legs: "legs",
} as const;

export type Zone = (typeof Zone)[keyof typeof Zone];
