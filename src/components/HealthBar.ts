export function createHealthBar(hp: number, maxHp: number) {
  const percent = (hp / maxHp) * 100;

  const container = document.createElement("div");
  container.className = "health-container";

  const track = document.createElement("div");
  track.className = "health-track";

  const bar = document.createElement("div");
  bar.className = "health-bar";

  track.append(bar);

  bar.style.width = `${percent}%`;

  const text = document.createElement("span");
  text.className = "health-text";
  text.textContent = `${hp}/${maxHp}`;

  container.append(track, text);

  return container;
}
