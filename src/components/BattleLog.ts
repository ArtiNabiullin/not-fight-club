import type { LogEntry } from "../types";

export function createBattleLog(log: LogEntry[]) {
  const container = document.createElement("div");
  container.className = "battle-log";

  log.forEach((entry) => {
    const item = document.createElement("div");
    item.className = "log-entry";

    const attacker = document.createElement("span");
    attacker.className = "log-attacker";
    attacker.textContent = entry.attacker.name;

    const attacks = document.createElement("span");
    attacks.textContent = ` attacks `;

    const target = document.createElement("span");
    target.className = "log-target";
    target.textContent = entry.target.name;

    const zone = document.createElement("span");
    zone.className = "log-zone";
    zone.textContent = entry.zone;

    const damage = document.createElement("span");
    damage.className = "log-damage";
    damage.textContent = ` ${entry.damage} `;

    item.append(
      attacker,
      attacks,
      target,
      document.createTextNode(" in "),
      zone,
      document.createTextNode(" for "),
      damage,
      document.createTextNode(" damage"),
    );

    container.append(item);
  });

  return container;
}
