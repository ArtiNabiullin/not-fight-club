import type { Player, Enemy } from "../types";
import { createHealthBar } from "./HealthBar";

export function createFighterCard(fighter: Player | Enemy, hp: number) {
  const card = document.createElement("div");
  card.className = "fighter-card";

  if ("wins" in fighter) {
    card.classList.add("player-card");
  } else {
    card.classList.add("enemy-card");
  }

  const avatar = document.createElement("img");
  avatar.src = fighter.avatar;
  card.append(avatar);

  const name = document.createElement("h2");
  name.textContent = fighter.name;
  card.append(name);

  if ("wins" in fighter) {
    const record = document.createElement("p");
    record.textContent = `Wins: ${fighter.wins} | Losses: ${fighter.losses}`;
    card.append(record);
  }

  const maxHp = "maxHP" in fighter ? fighter.maxHP : fighter.maxHp;

  const health = createHealthBar(hp, maxHp);

  card.append(health);

  return card;
}
