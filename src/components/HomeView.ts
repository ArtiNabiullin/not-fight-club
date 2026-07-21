export function renderHome(playerName: string, onStartBattle: () => void) {
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

  container.append(title, welcome, startButton);

  return container;
}
