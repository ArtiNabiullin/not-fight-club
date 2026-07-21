import type { Player } from "../types";
import avatar1 from "../assets/img/avatar1.jfif";
import avatar2 from "../assets/img/avatar2.jpg";
import avatar3 from "../assets/img/avatar3.jfif";

export function renderCharacter(
  player: Player,
  onChangeAvatar: (avatar: string) => void,
  onBack: () => void,
) {
  const container = document.createElement("div");
  container.className = "character";

  const avatar = document.createElement("img");
  avatar.src = player.avatar;

  const name = document.createElement("h2");
  name.textContent = player.name;

  const stats = document.createElement("p");
  stats.textContent = `Wins: ${player.wins} | Losses: ${player.losses}`;

  const avatars = [avatar1, avatar2, avatar3];

  const avatarList = document.createElement("div");
  avatarList.className = "avatar-list";

  avatars.forEach((avatarPath) => {
    const button = document.createElement("button");
    button.className = "avatar-button";
    const img = document.createElement("img");
    img.className = "avatar-preview";
    img.src = avatarPath;
    button.append(img);

    button.onclick = () => {
      onChangeAvatar(avatarPath);
    };

    avatarList.append(button);
  });

  const backButton = document.createElement("button");
  backButton.textContent = "BACK";

  backButton.onclick = () => {
    onBack();
  };

  container.append(avatar, name, stats, avatarList, backButton);

  return container;
}
