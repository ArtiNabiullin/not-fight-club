export function createHealthBar(hp: number, maxHp: number) {
  const percent = (hp / maxHp) * 100;

  const container = document.createElement("div");
  container.className = "health-container";

  const bar = document.createElement("div");
  bar.className = "health-bar";

  bar.style.width = `${percent}%`;

  const text = document.createElement("span");
  text.textContent = `${hp}/${maxHp}`;

  container.append(bar, text);

  return container;
}
