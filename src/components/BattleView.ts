import type { Battle } from "../types";
import { createFighterCard } from "./FighterCard";

export function renderBattle(battle: Battle) {
  const container = document.createElement("div");
  container.className = "battle-container";

  const enemyCard = createFighterCard(battle.enemy, battle.enemyHp);

  const playerCard = createFighterCard(battle.player, battle.playerHp);

  container.append(enemyCard, playerCard);

  return container;
}
