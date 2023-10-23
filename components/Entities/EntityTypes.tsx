interface Spell {
  name: string;
  type: string;
  level: number;
  components: string[];

  levelCondition?: string;
  concentration: boolean;
  description: string;
  materialComponents?: string[];
  castingtime?: number;
  duration?: number;
  range?: number;
}
