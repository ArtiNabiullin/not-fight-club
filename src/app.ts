import { BattleEngine } from "./services/BattleEngine";
import { enemies } from "./data/enemies";
import { renderBattle } from "./components/BattleView";
import { renderRegistration } from "./components/RegistrationView";
import { renderHome } from "./components/HomeView";
import { savePlayer, getPlayer } from "./services/Storage";
import { renderCharacter } from "./components/CharacterView";
import type { Player, BattleMove, Battle } from "./types";

export class App {
  init(): void {
    let player: Player;

    let engine: BattleEngine;

    let currentBattle: Battle;

    const root = document.createElement("div");

    document.body.append(root);

    const savedPlayer = getPlayer();

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

    const loadPlayer = (playerData: Player) => {
      player = playerData;

      engine = new BattleEngine(player, enemies);

      showScreen(renderHome(player.name, handleStartBattle, handleCharacter));
    };

    const handleBackHome = () => {
      showScreen(renderHome(player.name, handleStartBattle, handleCharacter));
    };

    const handleChangeAvatar = (avatar: string) => {
      player.avatar = avatar;

      savePlayer(player);

      showScreen(renderCharacter(player, handleChangeAvatar, handleBackHome));
    };

    const handleCharacter = () => {
      showScreen(renderCharacter(player, handleChangeAvatar, handleBackHome));
    };

    if (savedPlayer) {
      loadPlayer(savedPlayer);
    } else {
      showScreen(
        renderRegistration((name) => {
          player = {
            name,
            avatar: "./assets/player.png",
            wins: 0,
            losses: 0,
            maxHP: 100,
            damage: 20,
          };

          savePlayer(player);

          engine = new BattleEngine(player, enemies);

          showScreen(
            renderHome(player.name, handleStartBattle, handleCharacter),
          );
        }),
      );
    }
  }
}
