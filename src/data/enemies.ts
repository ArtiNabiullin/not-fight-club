import type { Enemy } from "../types";
import { Zone } from "../types";
import spider from "../assets/img/spider.jpg";
import troll from "../assets/img/troll.jfif";
import knight from "../assets/img/knight.jpg";

export const enemies: Enemy[] = [
  {
    name: "Spider",
    avatar: spider,
    maxHp: 100,
    damage: 10,
    attackProfile: [Zone.Head, Zone.Body, Zone.Legs],
    defenseProfile: [Zone.Body],
    attackCount: 2,
    defenseCount: 1,
  },
  {
    name: "Troll",
    avatar: troll,
    maxHp: 130,
    damage: 20,
    attackProfile: [Zone.Body],
    defenseProfile: [Zone.Head, Zone.Body, Zone.Neck],
    attackCount: 1,
    defenseCount: 3,
  },
  {
    name: "Knight",
    avatar: knight,
    maxHp: 150,
    damage: 15,
    attackProfile: [Zone.Head, Zone.Belly],
    defenseProfile: [Zone.Body, Zone.Legs],
    attackCount: 2,
    defenseCount: 2,
  },
];
