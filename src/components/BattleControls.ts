import { Zone } from "../types";
import type { BattleMove } from "../types";

export function createBattleControls(onAttack: (move: BattleMove) => void) {
  const container = document.createElement("div");
  container.className = "battle-controls";

  let attackZones: Zone[] = [];
  let defenseZones: Zone[] = [];

  const attackButton = document.createElement("button");
  attackButton.textContent = "ATTACK";

  attackButton.onclick = () => {
    onAttack({ attackZones, defenseZones });
  };

  container.append(attackButton);

  return container;
}
