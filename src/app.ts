import { BattleEngine } from "./services/BattleEngine";
import { enemies } from "./data/enemies";
import { renderBattle } from "./components/BattleView";
import type { Player } from "./types";
import type { BattleMove } from "./types";

export class App {
  init(): void {
    const player: Player = {
      name: "Arthur",
      avatar: "./assets/player.png",

      wins: 0,
      losses: 0,

      maxHP: 100,
      damage: 20,
    };

    const engine = new BattleEngine(player, enemies);

    const battle = engine.startBattle();

    let currentBattle = battle;

    const root = document.createElement("div");

    document.body.append(root);

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

    updateBattleView();
  }
}
