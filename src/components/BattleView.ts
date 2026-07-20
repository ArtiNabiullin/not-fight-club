import type { Battle, BattleMove } from "../types";
import { createFighterCard } from "./FighterCard";
import { createBattleControls } from "./BattleControls";

export function renderBattle(
  battle: Battle,
  onAttack: (move: BattleMove) => void,
) {
  const container = document.createElement("div");
  container.className = "battle-container";

  const enemyCard = createFighterCard(battle.enemy, battle.enemyHp);

  const playerCard = createFighterCard(battle.player, battle.playerHp);

  container.append(enemyCard, playerCard);

  const controls = createBattleControls(onAttack);

  container.append(controls);

  return container;
}
