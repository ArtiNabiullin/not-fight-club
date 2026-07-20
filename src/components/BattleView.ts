import type { Battle, BattleMove } from "../types";
import { createFighterCard } from "./FighterCard";
import { createBattleControls } from "./BattleControls";
import { createBattleLog } from "./BattleLog";

export function renderBattle(
  battle: Battle,
  onAttack: (move: BattleMove) => void,
  onNewBattle: () => void,
) {
  const container = document.createElement("div");
  container.className = "battle-container";

  const fightersContainer = document.createElement("div");
  fightersContainer.className = "fighters-container";

  const enemyCard = createFighterCard(battle.enemy, battle.enemyHp);

  const playerCard = createFighterCard(battle.player, battle.playerHp);

  const vs = document.createElement("div");
  vs.className = "vs";
  vs.textContent = "VS";
  fightersContainer.append(playerCard, vs, enemyCard);

  const log = createBattleLog(battle.log);

  container.append(fightersContainer, log);

  const controls = createBattleControls(onAttack);

  if (battle.isFinished) {
    const button = controls.querySelector<HTMLButtonElement>(".attack-button");

    if (button) {
      if (battle.playerHp === 0) {
        button.textContent = "You lost!";
      } else if (battle.enemyHp === 0) {
        button.textContent = "You won!";
      }

      button.disabled = true;
    }

    const newBattleButton = document.createElement("button");
    newBattleButton.className = "new-battle-button";
    newBattleButton.textContent = "New Battle";
    newBattleButton.onclick = () => {
      onNewBattle();
    };

    controls.append(newBattleButton);
  }

  container.append(controls);

  return container;
}
