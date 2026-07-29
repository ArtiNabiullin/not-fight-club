import type { Player, Battle } from "../types";

const PLAYER_KEY = "not-fight-club-player";
const BATTLE_KEY = "not-fight-club-battle";

export function savePlayer(player: Player) {
  localStorage.setItem(PLAYER_KEY, JSON.stringify(player));
}

export function getPlayer(): Player | null {
  const data = localStorage.getItem(PLAYER_KEY);

  if (!data) {
    return null;
  }
  return JSON.parse(data);
}

export function saveBattle(battle: Battle): void {
  localStorage.setItem(BATTLE_KEY, JSON.stringify(battle));
}

export function getBattle(): Battle | null {
  const data = localStorage.getItem(BATTLE_KEY);

  return data ? JSON.parse(data) : null;
}
