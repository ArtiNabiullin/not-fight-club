import type { Player } from "../types";

export function renderCharacter(
  player: Player,
  onChangeAvatar: (avatar: string) => void,
) {
  const container = document.createElement("div");
  container.className = "character";

  const avatar = document.createElement("img");
  avatar.src = player.avatar;

  const name = document.createElement("h2");
  name.textContent = player.name;

  const stats = document.createElement("p");
  stats.textContent = `Wins: ${player.wins} | Losses: ${player.losses}`;

  const avatars = [
    "./assets/img/avatar1.png",
    "./assets/img/avatar2.png",
    "./assets/img/avatar3.png",
  ];

  const avatarList = document.createElement("div");
  avatarList.className = "avatar-list";

  avatars.forEach((avatarPath) => {
    const button = document.createElement("button");

    button.textContent = "Choose";

    button.onclick = () => {
      onChangeAvatar(avatarPath);
    };
  });

  container.append(avatar, name, stats, avatarList);

  return container;
}
