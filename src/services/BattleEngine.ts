import type { Battle, Enemy, Player, BattleMove, DamageResult } from "../types";
import { isCriticalHit } from "../utils/critical";
import { getRandomItem, getRandomUniqueItems } from "../utils/random";
import { CRITICAL_MULTIPLIER } from "../constants/battle";

export class BattleEngine {
  private battle: Battle | null = null;

  constructor(
    private player: Player,
    private enemies: Enemy[],
  ) {}

  public startBattle(): Battle {
    const enemy = getRandomItem(this.enemies);

    const battle: Battle = {
      player: this.player,
      enemy,

      playerHp: this.player.maxHP,
      enemyHp: enemy.maxHp,

      turn: 1,

      log: [],

      isFinished: false,
    };

    this.battle = battle;

    return battle;
  }

  public resolveTurn(move: BattleMove): Battle {
    if (!this.battle) {
      throw new Error("Battle has not started");
    }

    const enemyMove = this.createEnemyMove();

    const playerDamage = this.calculateDamage(
      this.battle.player,
      move,
      this.battle.enemy,
      enemyMove,
    );

    const enemyDamage = this.calculateDamage(
      this.battle.enemy,
      enemyMove,
      this.battle.player,
      move,
    );

    this.applyDamage(playerDamage, enemyDamage);

    this.battle.turn++;

    this.finishBattle();

    return this.battle;
  }

  private createEnemyMove(): BattleMove {
    if (!this.battle) {
      throw new Error("Battle has not started");
    }

    const enemy = this.battle.enemy;

    if (enemy.attackProfile.length < enemy.attackCount) {
      throw new Error("Enemy attack profile is too small");
    }

    if (enemy.defenseProfile.length < enemy.defenseCount) {
      throw new Error("Enemy defense profile is too small");
    }

    const attackZones = getRandomUniqueItems(
      enemy.attackProfile,
      enemy.attackCount,
    );

    const defenseZones = getRandomUniqueItems(
      enemy.defenseProfile,
      enemy.defenseCount,
    );

    return { attackZones, defenseZones };
  }

  private calculateDamage(
    attacker: Player | Enemy,
    attackerMove: BattleMove,

    defender: Player | Enemy,
    defenderMove: BattleMove,
  ): DamageResult {
    const critical = isCriticalHit();

    let damage = 0;
    let isBlocked = false;

    for (const zone of attackerMove.attackZones) {
      const blocked = defenderMove.defenseZones.includes(zone);

      if (blocked && !critical) {
        isBlocked = true;
        continue;
      }

      damage += attacker.damage;
    }

    if (critical) {
      damage *= CRITICAL_MULTIPLIER;
    }

    return {
      damage,
      isCritical: critical,
      isBlocked,
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
      this.battle.enemyHp - playerResult.damage,
    );

    this.battle.playerHp = Math.max(
      0,
      this.battle.playerHp - enemyResult.damage,
    );
  }

  private addLog() {}

  private finishBattle() {}
}
