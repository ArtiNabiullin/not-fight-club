import type { Player, Enemy } from "../types";
import { createHealthBar } from "./HealthBar";

export function createFighterCard(fighter: Player | Enemy, hp: number) {
  const card = document.createElement("div");
  card.className = "fighter-card";

  const avatar = document.createElement("img");
  avatar.src = fighter.avatar;
  card.append(avatar);

  const name = document.createElement("h2");
  name.textContent = fighter.name;
  card.append(name);

  const maxHp = "maxHP" in fighter ? fighter.maxHP : fighter.maxHp;

  const health = createHealthBar(hp, maxHp);

  card.append(health);

  return card;
}
