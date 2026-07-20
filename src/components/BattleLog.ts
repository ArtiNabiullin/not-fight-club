import type { LogEntry } from "../types";

export function createBattleLog(log: LogEntry[]) {
  const container = document.createElement("div");
  container.className = "battle-log";

  log.forEach((entry) => {
    const item = document.createElement("p");
    item.textContent = `${entry.attacker.name}
    attacks
    ${entry.target.name}
    in
    ${entry.zone}
    for
    ${entry.damage} damage`;

    container.append(item);
  });

  return container;
}
