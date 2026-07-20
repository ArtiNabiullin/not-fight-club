import type { LogEntry } from "../types";

export function createBattleLog(log: LogEntry[]) {
  const container = document.createElement("div");
  container.className = "battle-log";

  const title = document.createElement("h3");
  title.textContent = "Battle Log:";
  container.append(title);

  if (log.length === 0) {
    const item = document.createElement("div");
    item.className = "log-message";
    item.textContent = "Waiting for first turn...";

    container.append(item);
  }

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

    const result = document.createElement("span");

    if (entry.isCritical) {
      result.className = "log-critical";
      result.textContent = " - CRITICAL!";
    } else if (entry.isBlocked) {
      result.className = "log-blocked";
      result.textContent = " - BLOCKED!";
    } else {
      result.textContent = "";
    }

    item.append(
      attacker,
      attacks,
      target,
      document.createTextNode(" in "),
      zone,
      document.createTextNode(" for "),
      damage,
      document.createTextNode(" damage"),
      result,
    );

    container.append(item);
  });

  return container;
}
