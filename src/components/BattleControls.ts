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

  const attackContainer = document.createElement("div");
  attackContainer.className = "attack-zones";

  container.append(attackContainer);

  const zones = [Zone.Head, Zone.Neck, Zone.Body, Zone.Belly, Zone.Legs];

  zones.forEach((zone) => {
    const button = document.createElement("button");

    button.textContent = zone;

    button.onclick = () => {
      if (!attackZones.includes(zone) && attackZones.length < MAX_ATTACK) {
        attackZones.push(zone);
      }

      button.classList.add("selected");

      console.log("Attack:", attackZones);
    };

    attackContainer.append(button);
  });

  const defenseTitle = document.createElement("h3");
  defenseTitle.textContent = "Defense:";

  container.append(defenseTitle);

  const defenseContainer = document.createElement("div");
  defenseContainer.className = "defense-zones";

  container.append(defenseContainer);

  zones.forEach((zone) => {
    const button = document.createElement("button");

    button.textContent = zone;

    button.onclick = () => {
      if (!defenseZones.includes(zone) && defenseZones.length < MAX_DEFENSE) {
        defenseZones.push(zone);
      }

      button.classList.add("selected");

      console.log("Defense:", defenseZones);
    };

    defenseContainer.append(button);
  });

  container.append(attackButton);

  return container;
}
