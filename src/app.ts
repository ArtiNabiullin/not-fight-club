import { BattleEngine } from "./services/BattleEngine";
import { enemies } from "./data/enemies";
import { renderBattle } from "./components/BattleView";
import { renderRegistration } from "./components/RegistrationView";
import { renderHome } from "./components/HomeView";
import type { Player } from "./types";
import type { BattleMove } from "./types";

export class App {
  init(): void {
    let player: Player;

    let engine: BattleEngine;

    let currentBattle;

    const root = document.createElement("div");

    document.body.append(root);

    const showScreen = (screen: HTMLElement) => {
      root.innerHTML = "";

      root.append(screen);
    };

    const handleAttack = (move: BattleMove) => {
      currentBattle = engine.resolveTurn(move);

      updateBattleView();
    };

    const handleNewBattle = () => {
      currentBattle = engine.startBattle();

      updateBattleView();
    };

    const updateBattleView = () => {
      root.innerHTML = "";

      root.append(renderBattle(currentBattle, handleAttack, handleNewBattle));
    };

    const handleStartBattle = () => {
      currentBattle = engine.startBattle();

      updateBattleView();
    };

    root.append(
      renderRegistration((name) => {
        ((player = {
          name,
          avatar: "./assets/player.png",
          wins: 0,
          losses: 0,
          maxHP: 100,
          damage: 20,
        }),
          (engine = new BattleEngine(player, enemies)));

        showScreen(renderHome(player.name, handleStartBattle));

        currentBattle = engine.startBattle();
      }),
    );
  }
}
