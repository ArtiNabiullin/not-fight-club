import type { Player } from "../types";

const PLAYER_KEY = "not-fight-club-player";

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
