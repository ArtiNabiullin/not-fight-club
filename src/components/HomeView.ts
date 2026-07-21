export function renderHome(
  playerName: string,
  onStartBattle: () => void,
  onCharacter: () => void,
) {
  const container = document.createElement("div");
  container.className = "home";

  const title = document.createElement("h1");
  title.textContent = "NOT FIGHT CLUB";

  const welcome = document.createElement("h2");
  welcome.textContent = `Welcome, ${playerName}!`;

  const startButton = document.createElement("button");
  startButton.textContent = "START BATTLE";

  const characterButton = document.createElement("button");
  characterButton.textContent = "CHARACTER";

  startButton.onclick = () => {
    onStartBattle();
  };

  characterButton.onclick = () => {
    onCharacter();
  };

  container.append(title, welcome, startButton, characterButton);

  return container;
}
