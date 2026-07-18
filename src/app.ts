import { BattleEngine } from "./services/BattleEngine";
import { enemies } from "./data/enemies";
import { Zone } from "./types";
import { renderBattle } from "./components/BattleView";
import type { Player } from "./types";

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

    const battleView = renderBattle(battle);

    document.body.append(battleView);

    console.log("START BATTLE", battle);

    const result = engine.resolveTurn({
      attackZones: [Zone.Head, Zone.Body],

      defenseZones: [Zone.Legs, Zone.Body],
    });

    console.log("AFTER TURN", result);
  }
}
