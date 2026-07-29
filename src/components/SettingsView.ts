import type { Player } from "../types";

export function renderSettings(
  player: Player,
  onSave: (name: string) => void,
  onBack: () => void,
) {
  const container = document.createElement("div");
  container.className = "settings";

  const title = document.createElement("h1");
  title.textContent = "SETTINGS";

  const input = document.createElement("input");
  input.value = player.name;

  const saveButton = document.createElement("button");
  saveButton.textContent = "SAVE";

  saveButton.onclick = () => {
    const name = input.value.trim();

    if (!name) {
      return;
    }

    onSave(name);
  };

  const backButton = document.createElement("button");
  backButton.textContent = "BACK";

  backButton.onclick = () => {
    onBack();
  };

  container.append(title, input, saveButton, backButton);

  return container;
}
