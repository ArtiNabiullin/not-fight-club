import type { Battle, BattleMove } from "../types";
import { createFighterCard } from "./FighterCard";
import { createBattleControls } from "./BattleControls";
import { createBattleLog } from "./BattleLog";

export function renderBattle(
  battle: Battle,
  onAttack: (move: BattleMove) => void,
) {
  const container = document.createElement("div");
  container.className = "battle-container";

  const fightersContainer = document.createElement("div");
  fightersContainer.className = "fighters-container";

  const enemyCard = createFighterCard(battle.enemy, battle.enemyHp);

  const playerCard = createFighterCard(battle.player, battle.playerHp);

  fightersContainer.append(playerCard, enemyCard);

  const log = createBattleLog(battle.log);

  container.append(fightersContainer, log);

  const controls = createBattleControls(onAttack);

  container.append(controls);

  return container;
}
