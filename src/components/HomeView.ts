export function renderHome(
  playerName: string,
  onStartBattle: () => void,
  onCharacter: () => void,
  onSettings: () => void,
) {
  const container = document.createElement("div");
  container.className = "home";

  const title = document.createElement("h1");
  title.textContent = "NOT FIGHT CLUB";

  const welcome = document.createElement("h2");
  welcome.textContent = `Welcome, ${playerName}!`;

  const startButton = document.createElement("button");
  startButton.textContent = "START BATTLE";

  startButton.onclick = () => {
    onStartBattle();
  };

  const characterButton = document.createElement("button");
  characterButton.textContent = "CHARACTER";

  characterButton.onclick = () => {
    onCharacter();
  };

  const settingsButton = document.createElement("button");

  settingsButton.textContent = "SETTINGS";

  settingsButton.onclick = () => {
    onSettings();
  };

  container.append(
    title,
    welcome,
    startButton,
    characterButton,
    settingsButton,
  );

  return container;
}
