import type { Enemy } from "../types";
import { Zone } from "../types";
import spider from "../assets/img/spider.jpg";
import troll from "../assets/img/troll.jfif";
import knight from "../assets/img/knight.jpg";

export const enemies: Enemy[] = [
  {
    name: "Spider",
    avatar: spider,
    maxHp: 120,
    damage: 10,
    attackProfile: [Zone.Neck, Zone.Belly, Zone.Legs],
    defenseProfile: [Zone.Body, Zone.Legs],
    attackCount: 2,
    defenseCount: 2,
  },
  {
    name: "Troll",
    avatar: troll,
    maxHp: 135,
    damage: 20,
    attackProfile: [Zone.Head, Zone.Body, Zone.Neck, Zone.Belly],
    defenseProfile: [Zone.Head, Zone.Body, Zone.Neck],
    attackCount: 1,
    defenseCount: 3,
  },
  {
    name: "Knight",
    avatar: knight,
    maxHp: 150,
    damage: 15,
    attackProfile: [Zone.Head, Zone.Body, Zone.Legs],
    defenseProfile: [Zone.Head, Zone.Belly, Zone.Legs],
    attackCount: 2,
    defenseCount: 3,
  },
];
