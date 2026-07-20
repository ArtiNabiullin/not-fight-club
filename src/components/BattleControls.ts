import { Zone } from "../types";
import type { BattleMove } from "../types";

export function createBattleControls(onAttack: (move: BattleMove) => void) {
  const MAX_ATTACK = 2;
  const MAX_DEFENSE = 2;

  const container = document.createElement("div");
  container.className = "battle-controls";

  let attackZones: Zone[] = [];
  let defenseZones: Zone[] = [];

  const attackButton = document.createElement("button");
  attackButton.textContent = "ATTACK";

  attackButton.onclick = () => {
    if (
      attackZones.length !== MAX_ATTACK ||
      defenseZones.length !== MAX_DEFENSE
    ) {
      alert("Choose attack and defense zones");

      return;
    }
    onAttack({ attackZones, defenseZones });
  };

  const attackTitle = document.createElement("h3");
  attackTitle.textContent = "Attack:";

  container.append(attackTitle);

  const zones = [Zone.Head, Zone.Neck, Zone.Body, Zone.Belly, Zone.Legs];

  zones.forEach((zone) => {
    const button = document.createElement("button");

    button.textContent = zone;

    button.onclick = () => {
      if (!attackZones.includes(zone) && attackZones.length < MAX_ATTACK) {
        attackZones.push(zone);
      }

      console.log("Attack:", attackZones);
    };

    container.append(button);
  });

  const defenseTitle = document.createElement("h3");
  defenseTitle.textContent = "Defense:";

  container.append(defenseTitle);

  zones.forEach((zone) => {
    const button = document.createElement("button");

    button.textContent = zone;

    button.onclick = () => {
      if (!defenseZones.includes(zone) && defenseZones.length < MAX_DEFENSE) {
        defenseZones.push(zone);
      }

      console.log("Defense:", defenseZones);
    };

    container.append(button);
  });

  container.append(attackButton);

  return container;
}
