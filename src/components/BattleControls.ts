import { Zone } from "../types";
import type { BattleMove } from "../types";

export function createBattleControls(
  onAttack: (move: BattleMove) => void,
  initialMove: BattleMove,
  onMoveChange: (move: BattleMove) => void,
) {
  const MAX_ATTACK = 1;
  const MAX_DEFENSE = 2;

  const container = document.createElement("div");
  container.className = "battle-controls";

  let attackZones: Zone[] = [...initialMove.attackZones];
  let defenseZones: Zone[] = [...initialMove.defenseZones];

  const attackButtons: HTMLButtonElement[] = [];
  const defenseButtons: HTMLButtonElement[] = [];

  const attackButton = document.createElement("button");
  attackButton.className = "attack-button";
  attackButton.textContent = "ATTACK";

  attackButton.onclick = () => {
    if (
      attackZones.length !== MAX_ATTACK ||
      defenseZones.length !== MAX_DEFENSE
    ) {
      alert("Choose attack and defense zones");

      return;
    }
    onAttack({
      attackZones: [...attackZones],
      defenseZones: [...defenseZones],
    });
  };

  const attackTitle = document.createElement("h3");
  attackTitle.textContent = `Attack: ${attackZones.length}/${MAX_ATTACK}`;

  container.append(attackTitle);

  const attackContainer = document.createElement("div");
  attackContainer.className = "attack-zones";

  container.append(attackContainer);

  const zones = [Zone.Head, Zone.Neck, Zone.Body, Zone.Belly, Zone.Legs];

  zones.forEach((zone) => {
    const button = document.createElement("button");

    button.textContent = zone;

    if (attackZones.includes(zone)) {
      button.classList.add("selected");
    }

    button.onclick = () => {
      if (attackZones.includes(zone)) {
        attackZones = attackZones.filter(
          (selectedZone) => selectedZone !== zone,
        );
      } else if (attackZones.length < MAX_ATTACK) {
        attackZones.push(zone);
      }

      attackTitle.textContent = `Attack: ${attackZones.length}/${MAX_ATTACK}`;

      attackButtons.forEach((currentButton) => {
        const currentZone = currentButton.textContent as Zone;
        const isSelected = attackZones.includes(currentZone);

        currentButton.classList.toggle("selected", isSelected);
        currentButton.disabled =
          !isSelected && attackZones.length >= MAX_ATTACK;
      });

      onMoveChange({
        attackZones: [...attackZones],
        defenseZones: [...defenseZones],
      });
    };

    attackContainer.append(button);

    attackButtons.push(button);
  });

  attackButtons.forEach((currentButton) => {
    const currentZone = currentButton.textContent as Zone;
    const isSelected = attackZones.includes(currentZone);

    currentButton.classList.toggle("selected", isSelected);
    currentButton.disabled = !isSelected && attackZones.length >= MAX_ATTACK;
  });

  const defenseTitle = document.createElement("h3");
  defenseTitle.textContent = `Defense: ${defenseZones.length}/${MAX_DEFENSE}`;

  container.append(defenseTitle);

  const defenseContainer = document.createElement("div");
  defenseContainer.className = "defense-zones";

  container.append(defenseContainer);

  zones.forEach((zone) => {
    const button = document.createElement("button");

    button.textContent = zone;

    if (defenseZones.includes(zone)) {
      button.classList.add("selected");
    }

    button.onclick = () => {
      if (defenseZones.includes(zone)) {
        defenseZones = defenseZones.filter(
          (selectedZone) => selectedZone !== zone,
        );
      } else if (defenseZones.length < MAX_DEFENSE) {
        defenseZones.push(zone);
      }

      defenseTitle.textContent = `Defense: ${defenseZones.length}/${MAX_DEFENSE}`;

      defenseButtons.forEach((currentButton) => {
        const currentZone = currentButton.textContent as Zone;
        const isSelected = defenseZones.includes(currentZone);

        currentButton.classList.toggle("selected", isSelected);
        currentButton.disabled =
          !isSelected && defenseZones.length >= MAX_DEFENSE;
      });

      onMoveChange({
        attackZones: [...attackZones],
        defenseZones: [...defenseZones],
      });
    };

    defenseContainer.append(button);

    defenseButtons.push(button);
  });

  defenseButtons.forEach((currentButton) => {
    const currentZone = currentButton.textContent as Zone;
    const isSelected = defenseZones.includes(currentZone);

    currentButton.classList.toggle("selected", isSelected);
    currentButton.disabled = !isSelected && defenseZones.length >= MAX_DEFENSE;
  });

  container.append(attackButton);

  return container;
}
