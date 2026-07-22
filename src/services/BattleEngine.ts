import type {
  Battle,
  Enemy,
  Player,
  BattleMove,
  DamageResult,
  HitResult,
} from "../types";

import type { Zone } from "../types";

import { isCriticalHit } from "../utils/critical";
import { getRandomItem, getRandomUniqueItems } from "../utils/random";
import { CRITICAL_MULTIPLIER } from "../constants/battle";

export class BattleEngine {
  private battle: Battle | null = null;
  private player: Player;
  private enemies: Enemy[];

  constructor(player: Player, enemies: Enemy[]) {
    this.player = player;
    this.enemies = enemies;
  }

  public startBattle(): Battle {
    const enemy = getRandomItem(this.enemies);

    this.battle = {
      player: this.player,
      enemy,

      playerHp: this.player.maxHP,
      enemyHp: enemy.maxHp,

      turn: 1,

      log: [],

      isFinished: false,
    };

    return this.battle;
  }

  public resolveTurn(move: BattleMove): Battle {
    if (!this.battle) {
      throw new Error("Battle has not started");
    }

    const enemyMove = this.createEnemyMove();

    const playerResult = this.calculateDamage(
      this.battle.player,
      move,
      enemyMove,
    );

    const enemyResult = this.calculateDamage(
      this.battle.enemy,
      enemyMove,
      move,
    );

    this.applyDamage(playerResult, enemyResult);

    this.createLogs(this.battle.player, this.battle.enemy, playerResult);

    this.createLogs(this.battle.enemy, this.battle.player, enemyResult);

    this.battle.turn++;

    this.finishBattle();

    return this.battle;
  }

  private createEnemyMove(): BattleMove {
    if (!this.battle) {
      throw new Error("Battle has not started");
    }

    const enemy = this.battle.enemy;

    return {
      attackZones: getRandomUniqueItems(enemy.attackProfile, enemy.attackCount),

      defenseZones: getRandomUniqueItems(
        enemy.defenseProfile,
        enemy.defenseCount,
      ),
    };
  }

  private calculateDamage(
    attacker: Player | Enemy,
    attackerMove: BattleMove,
    defenderMove: BattleMove,
  ): DamageResult {
    const hits: HitResult[] = [];

    for (const zone of attackerMove.attackZones) {
      const hit = this.calculateHit(attacker, zone, defenderMove);

      hits.push(hit);
    }

    const totalDamage = hits.reduce((sum, hit) => sum + hit.damage, 0);

    return {
      hits,
      totalDamage,
    };
  }

  private calculateHit(
    attacker: Player | Enemy,
    zone: Zone,
    defenderMove: BattleMove,
  ): HitResult {
    const critical = isCriticalHit();

    const blocked = defenderMove.defenseZones.includes(zone);

    let damage = 0;

    if (!blocked || critical) {
      damage = attacker.damage;
    }

    if (critical) {
      damage *= CRITICAL_MULTIPLIER;
    }

    return {
      zone,

      damage,

      isCritical: critical,

      isBlocked: blocked,
    };
  }

  private applyDamage(
    playerResult: DamageResult,
    enemyResult: DamageResult,
  ): void {
    if (!this.battle) {
      throw new Error("Battle has not started");
    }

    this.battle.enemyHp = Math.max(
      0,
      this.battle.enemyHp - playerResult.totalDamage,
    );

    this.battle.playerHp = Math.max(
      0,
      this.battle.playerHp - enemyResult.totalDamage,
    );
  }

  private createLogs(
    attacker: Player | Enemy,
    target: Player | Enemy,
    result: DamageResult,
  ): void {
    if (!this.battle) {
      throw new Error("Battle has not started");
    }

    for (const hit of result.hits) {
      this.battle.log.push({
        attacker,

        target,

        zone: hit.zone,

        damage: hit.damage,

        isCritical: hit.isCritical,

        isBlocked: hit.isBlocked,
      });
    }
  }

  private finishBattle(): void {
    if (!this.battle) {
      throw new Error("Battle has not started");
    }

    if (this.battle.enemyHp === 0 || this.battle.playerHp === 0) {
      this.battle.isFinished = true;
    }
  }
}
