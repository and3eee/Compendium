
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model GMProfile
 * 
 */
export type GMProfile = $Result.DefaultSelection<Prisma.$GMProfilePayload>
/**
 * Model PlayerProfile
 * 
 */
export type PlayerProfile = $Result.DefaultSelection<Prisma.$PlayerProfilePayload>
/**
 * Model PlayerCharacter
 * 
 */
export type PlayerCharacter = $Result.DefaultSelection<Prisma.$PlayerCharacterPayload>
/**
 * Model ClassedEntity
 * 
 */
export type ClassedEntity = $Result.DefaultSelection<Prisma.$ClassedEntityPayload>
/**
 * Model ClassConfigs
 * 
 */
export type ClassConfigs = $Result.DefaultSelection<Prisma.$ClassConfigsPayload>
/**
 * Model Class
 * 
 */
export type Class = $Result.DefaultSelection<Prisma.$ClassPayload>
/**
 * Model GameSession
 * 
 */
export type GameSession = $Result.DefaultSelection<Prisma.$GameSessionPayload>
/**
 * Model InfoSession
 * 
 */
export type InfoSession = $Result.DefaultSelection<Prisma.$InfoSessionPayload>
/**
 * Model Campaign
 * 
 */
export type Campaign = $Result.DefaultSelection<Prisma.$CampaignPayload>
/**
 * Model Story
 * 
 */
export type Story = $Result.DefaultSelection<Prisma.$StoryPayload>
/**
 * Model Quest
 * 
 */
export type Quest = $Result.DefaultSelection<Prisma.$QuestPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ROLE: {
  USER: 'USER',
  GM: 'GM',
  ADMIN: 'ADMIN'
};

export type ROLE = (typeof ROLE)[keyof typeof ROLE]


export const HostType: {
  REMOTE: 'REMOTE',
  HYBRID: 'HYBRID',
  INPERSON: 'INPERSON'
};

export type HostType = (typeof HostType)[keyof typeof HostType]


export const SessionState: {
  PLANNED: 'PLANNED',
  ACTIVE: 'ACTIVE',
  COMPLETE: 'COMPLETE'
};

export type SessionState = (typeof SessionState)[keyof typeof SessionState]

}

export type ROLE = $Enums.ROLE

export const ROLE: typeof $Enums.ROLE

export type HostType = $Enums.HostType

export const HostType: typeof $Enums.HostType

export type SessionState = $Enums.SessionState

export const SessionState: typeof $Enums.SessionState

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.gMProfile`: Exposes CRUD operations for the **GMProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GMProfiles
    * const gMProfiles = await prisma.gMProfile.findMany()
    * ```
    */
  get gMProfile(): Prisma.GMProfileDelegate<ExtArgs>;

  /**
   * `prisma.playerProfile`: Exposes CRUD operations for the **PlayerProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlayerProfiles
    * const playerProfiles = await prisma.playerProfile.findMany()
    * ```
    */
  get playerProfile(): Prisma.PlayerProfileDelegate<ExtArgs>;

  /**
   * `prisma.playerCharacter`: Exposes CRUD operations for the **PlayerCharacter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlayerCharacters
    * const playerCharacters = await prisma.playerCharacter.findMany()
    * ```
    */
  get playerCharacter(): Prisma.PlayerCharacterDelegate<ExtArgs>;

  /**
   * `prisma.classedEntity`: Exposes CRUD operations for the **ClassedEntity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClassedEntities
    * const classedEntities = await prisma.classedEntity.findMany()
    * ```
    */
  get classedEntity(): Prisma.ClassedEntityDelegate<ExtArgs>;

  /**
   * `prisma.classConfigs`: Exposes CRUD operations for the **ClassConfigs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClassConfigs
    * const classConfigs = await prisma.classConfigs.findMany()
    * ```
    */
  get classConfigs(): Prisma.ClassConfigsDelegate<ExtArgs>;

  /**
   * `prisma.class`: Exposes CRUD operations for the **Class** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Classes
    * const classes = await prisma.class.findMany()
    * ```
    */
  get class(): Prisma.ClassDelegate<ExtArgs>;

  /**
   * `prisma.gameSession`: Exposes CRUD operations for the **GameSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GameSessions
    * const gameSessions = await prisma.gameSession.findMany()
    * ```
    */
  get gameSession(): Prisma.GameSessionDelegate<ExtArgs>;

  /**
   * `prisma.infoSession`: Exposes CRUD operations for the **InfoSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InfoSessions
    * const infoSessions = await prisma.infoSession.findMany()
    * ```
    */
  get infoSession(): Prisma.InfoSessionDelegate<ExtArgs>;

  /**
   * `prisma.campaign`: Exposes CRUD operations for the **Campaign** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Campaigns
    * const campaigns = await prisma.campaign.findMany()
    * ```
    */
  get campaign(): Prisma.CampaignDelegate<ExtArgs>;

  /**
   * `prisma.story`: Exposes CRUD operations for the **Story** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stories
    * const stories = await prisma.story.findMany()
    * ```
    */
  get story(): Prisma.StoryDelegate<ExtArgs>;

  /**
   * `prisma.quest`: Exposes CRUD operations for the **Quest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Quests
    * const quests = await prisma.quest.findMany()
    * ```
    */
  get quest(): Prisma.QuestDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.1.1
   * Query Engine version: 6a3747c37ff169c90047725a05a6ef02e32ac97e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Account: 'Account',
    Session: 'Session',
    User: 'User',
    GMProfile: 'GMProfile',
    PlayerProfile: 'PlayerProfile',
    PlayerCharacter: 'PlayerCharacter',
    ClassedEntity: 'ClassedEntity',
    ClassConfigs: 'ClassConfigs',
    Class: 'Class',
    GameSession: 'GameSession',
    InfoSession: 'InfoSession',
    Campaign: 'Campaign',
    Story: 'Story',
    Quest: 'Quest'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'account' | 'session' | 'user' | 'gMProfile' | 'playerProfile' | 'playerCharacter' | 'classedEntity' | 'classConfigs' | 'class' | 'gameSession' | 'infoSession' | 'campaign' | 'story' | 'quest'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>,
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>,
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      GMProfile: {
        payload: Prisma.$GMProfilePayload<ExtArgs>
        fields: Prisma.GMProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GMProfileFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GMProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GMProfileFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GMProfilePayload>
          }
          findFirst: {
            args: Prisma.GMProfileFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GMProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GMProfileFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GMProfilePayload>
          }
          findMany: {
            args: Prisma.GMProfileFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GMProfilePayload>[]
          }
          create: {
            args: Prisma.GMProfileCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GMProfilePayload>
          }
          createMany: {
            args: Prisma.GMProfileCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.GMProfileDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GMProfilePayload>
          }
          update: {
            args: Prisma.GMProfileUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GMProfilePayload>
          }
          deleteMany: {
            args: Prisma.GMProfileDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.GMProfileUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.GMProfileUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GMProfilePayload>
          }
          aggregate: {
            args: Prisma.GMProfileAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGMProfile>
          }
          groupBy: {
            args: Prisma.GMProfileGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GMProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.GMProfileCountArgs<ExtArgs>,
            result: $Utils.Optional<GMProfileCountAggregateOutputType> | number
          }
        }
      }
      PlayerProfile: {
        payload: Prisma.$PlayerProfilePayload<ExtArgs>
        fields: Prisma.PlayerProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayerProfileFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlayerProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayerProfileFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlayerProfilePayload>
          }
          findFirst: {
            args: Prisma.PlayerProfileFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlayerProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayerProfileFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlayerProfilePayload>
          }
          findMany: {
            args: Prisma.PlayerProfileFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlayerProfilePayload>[]
          }
          create: {
            args: Prisma.PlayerProfileCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlayerProfilePayload>
          }
          createMany: {
            args: Prisma.PlayerProfileCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PlayerProfileDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlayerProfilePayload>
          }
          update: {
            args: Prisma.PlayerProfileUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlayerProfilePayload>
          }
          deleteMany: {
            args: Prisma.PlayerProfileDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PlayerProfileUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PlayerProfileUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlayerProfilePayload>
          }
          aggregate: {
            args: Prisma.PlayerProfileAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePlayerProfile>
          }
          groupBy: {
            args: Prisma.PlayerProfileGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PlayerProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlayerProfileCountArgs<ExtArgs>,
            result: $Utils.Optional<PlayerProfileCountAggregateOutputType> | number
          }
        }
      }
      PlayerCharacter: {
        payload: Prisma.$PlayerCharacterPayload<ExtArgs>
        fields: Prisma.PlayerCharacterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayerCharacterFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlayerCharacterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayerCharacterFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlayerCharacterPayload>
          }
          findFirst: {
            args: Prisma.PlayerCharacterFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlayerCharacterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayerCharacterFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlayerCharacterPayload>
          }
          findMany: {
            args: Prisma.PlayerCharacterFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlayerCharacterPayload>[]
          }
          create: {
            args: Prisma.PlayerCharacterCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlayerCharacterPayload>
          }
          createMany: {
            args: Prisma.PlayerCharacterCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PlayerCharacterDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlayerCharacterPayload>
          }
          update: {
            args: Prisma.PlayerCharacterUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlayerCharacterPayload>
          }
          deleteMany: {
            args: Prisma.PlayerCharacterDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PlayerCharacterUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PlayerCharacterUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlayerCharacterPayload>
          }
          aggregate: {
            args: Prisma.PlayerCharacterAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePlayerCharacter>
          }
          groupBy: {
            args: Prisma.PlayerCharacterGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PlayerCharacterGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlayerCharacterCountArgs<ExtArgs>,
            result: $Utils.Optional<PlayerCharacterCountAggregateOutputType> | number
          }
        }
      }
      ClassedEntity: {
        payload: Prisma.$ClassedEntityPayload<ExtArgs>
        fields: Prisma.ClassedEntityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassedEntityFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClassedEntityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassedEntityFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClassedEntityPayload>
          }
          findFirst: {
            args: Prisma.ClassedEntityFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClassedEntityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassedEntityFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClassedEntityPayload>
          }
          findMany: {
            args: Prisma.ClassedEntityFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClassedEntityPayload>[]
          }
          create: {
            args: Prisma.ClassedEntityCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClassedEntityPayload>
          }
          createMany: {
            args: Prisma.ClassedEntityCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ClassedEntityDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClassedEntityPayload>
          }
          update: {
            args: Prisma.ClassedEntityUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClassedEntityPayload>
          }
          deleteMany: {
            args: Prisma.ClassedEntityDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ClassedEntityUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ClassedEntityUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClassedEntityPayload>
          }
          aggregate: {
            args: Prisma.ClassedEntityAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateClassedEntity>
          }
          groupBy: {
            args: Prisma.ClassedEntityGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ClassedEntityGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassedEntityCountArgs<ExtArgs>,
            result: $Utils.Optional<ClassedEntityCountAggregateOutputType> | number
          }
        }
      }
      ClassConfigs: {
        payload: Prisma.$ClassConfigsPayload<ExtArgs>
        fields: Prisma.ClassConfigsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassConfigsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClassConfigsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassConfigsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClassConfigsPayload>
          }
          findFirst: {
            args: Prisma.ClassConfigsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClassConfigsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassConfigsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClassConfigsPayload>
          }
          findMany: {
            args: Prisma.ClassConfigsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClassConfigsPayload>[]
          }
          create: {
            args: Prisma.ClassConfigsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClassConfigsPayload>
          }
          createMany: {
            args: Prisma.ClassConfigsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ClassConfigsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClassConfigsPayload>
          }
          update: {
            args: Prisma.ClassConfigsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClassConfigsPayload>
          }
          deleteMany: {
            args: Prisma.ClassConfigsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ClassConfigsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ClassConfigsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClassConfigsPayload>
          }
          aggregate: {
            args: Prisma.ClassConfigsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateClassConfigs>
          }
          groupBy: {
            args: Prisma.ClassConfigsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ClassConfigsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassConfigsCountArgs<ExtArgs>,
            result: $Utils.Optional<ClassConfigsCountAggregateOutputType> | number
          }
        }
      }
      Class: {
        payload: Prisma.$ClassPayload<ExtArgs>
        fields: Prisma.ClassFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClassPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          findFirst: {
            args: Prisma.ClassFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClassPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          findMany: {
            args: Prisma.ClassFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>[]
          }
          create: {
            args: Prisma.ClassCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          createMany: {
            args: Prisma.ClassCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ClassDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          update: {
            args: Prisma.ClassUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          deleteMany: {
            args: Prisma.ClassDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ClassUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ClassUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          aggregate: {
            args: Prisma.ClassAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateClass>
          }
          groupBy: {
            args: Prisma.ClassGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ClassGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassCountArgs<ExtArgs>,
            result: $Utils.Optional<ClassCountAggregateOutputType> | number
          }
        }
      }
      GameSession: {
        payload: Prisma.$GameSessionPayload<ExtArgs>
        fields: Prisma.GameSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameSessionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GameSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameSessionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GameSessionPayload>
          }
          findFirst: {
            args: Prisma.GameSessionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GameSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameSessionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GameSessionPayload>
          }
          findMany: {
            args: Prisma.GameSessionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GameSessionPayload>[]
          }
          create: {
            args: Prisma.GameSessionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GameSessionPayload>
          }
          createMany: {
            args: Prisma.GameSessionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.GameSessionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GameSessionPayload>
          }
          update: {
            args: Prisma.GameSessionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GameSessionPayload>
          }
          deleteMany: {
            args: Prisma.GameSessionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.GameSessionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.GameSessionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GameSessionPayload>
          }
          aggregate: {
            args: Prisma.GameSessionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGameSession>
          }
          groupBy: {
            args: Prisma.GameSessionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GameSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameSessionCountArgs<ExtArgs>,
            result: $Utils.Optional<GameSessionCountAggregateOutputType> | number
          }
        }
      }
      InfoSession: {
        payload: Prisma.$InfoSessionPayload<ExtArgs>
        fields: Prisma.InfoSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InfoSessionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InfoSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InfoSessionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InfoSessionPayload>
          }
          findFirst: {
            args: Prisma.InfoSessionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InfoSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InfoSessionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InfoSessionPayload>
          }
          findMany: {
            args: Prisma.InfoSessionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InfoSessionPayload>[]
          }
          create: {
            args: Prisma.InfoSessionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InfoSessionPayload>
          }
          createMany: {
            args: Prisma.InfoSessionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.InfoSessionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InfoSessionPayload>
          }
          update: {
            args: Prisma.InfoSessionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InfoSessionPayload>
          }
          deleteMany: {
            args: Prisma.InfoSessionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.InfoSessionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.InfoSessionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InfoSessionPayload>
          }
          aggregate: {
            args: Prisma.InfoSessionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateInfoSession>
          }
          groupBy: {
            args: Prisma.InfoSessionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<InfoSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.InfoSessionCountArgs<ExtArgs>,
            result: $Utils.Optional<InfoSessionCountAggregateOutputType> | number
          }
        }
      }
      Campaign: {
        payload: Prisma.$CampaignPayload<ExtArgs>
        fields: Prisma.CampaignFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CampaignFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CampaignFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          findFirst: {
            args: Prisma.CampaignFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CampaignFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          findMany: {
            args: Prisma.CampaignFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          create: {
            args: Prisma.CampaignCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          createMany: {
            args: Prisma.CampaignCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CampaignDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          update: {
            args: Prisma.CampaignUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          deleteMany: {
            args: Prisma.CampaignDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CampaignUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CampaignUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          aggregate: {
            args: Prisma.CampaignAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCampaign>
          }
          groupBy: {
            args: Prisma.CampaignGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CampaignGroupByOutputType>[]
          }
          count: {
            args: Prisma.CampaignCountArgs<ExtArgs>,
            result: $Utils.Optional<CampaignCountAggregateOutputType> | number
          }
        }
      }
      Story: {
        payload: Prisma.$StoryPayload<ExtArgs>
        fields: Prisma.StoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StoryPayload>
          }
          findFirst: {
            args: Prisma.StoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StoryPayload>
          }
          findMany: {
            args: Prisma.StoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StoryPayload>[]
          }
          create: {
            args: Prisma.StoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StoryPayload>
          }
          createMany: {
            args: Prisma.StoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.StoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StoryPayload>
          }
          update: {
            args: Prisma.StoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StoryPayload>
          }
          deleteMany: {
            args: Prisma.StoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.StoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.StoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StoryPayload>
          }
          aggregate: {
            args: Prisma.StoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateStory>
          }
          groupBy: {
            args: Prisma.StoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<StoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.StoryCountArgs<ExtArgs>,
            result: $Utils.Optional<StoryCountAggregateOutputType> | number
          }
        }
      }
      Quest: {
        payload: Prisma.$QuestPayload<ExtArgs>
        fields: Prisma.QuestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuestPayload>
          }
          findFirst: {
            args: Prisma.QuestFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuestPayload>
          }
          findMany: {
            args: Prisma.QuestFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuestPayload>[]
          }
          create: {
            args: Prisma.QuestCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuestPayload>
          }
          createMany: {
            args: Prisma.QuestCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.QuestDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuestPayload>
          }
          update: {
            args: Prisma.QuestUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuestPayload>
          }
          deleteMany: {
            args: Prisma.QuestDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.QuestUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.QuestUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuestPayload>
          }
          aggregate: {
            args: Prisma.QuestAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateQuest>
          }
          groupBy: {
            args: Prisma.QuestGroupByArgs<ExtArgs>,
            result: $Utils.Optional<QuestGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestCountArgs<ExtArgs>,
            result: $Utils.Optional<QuestCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    sessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }



  /**
   * Count Type GMProfileCountOutputType
   */

  export type GMProfileCountOutputType = {
    GameSession: number
    Campaign: number
    Quest: number
    InfoSession: number
  }

  export type GMProfileCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    GameSession?: boolean | GMProfileCountOutputTypeCountGameSessionArgs
    Campaign?: boolean | GMProfileCountOutputTypeCountCampaignArgs
    Quest?: boolean | GMProfileCountOutputTypeCountQuestArgs
    InfoSession?: boolean | GMProfileCountOutputTypeCountInfoSessionArgs
  }

  // Custom InputTypes

  /**
   * GMProfileCountOutputType without action
   */
  export type GMProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GMProfileCountOutputType
     */
    select?: GMProfileCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * GMProfileCountOutputType without action
   */
  export type GMProfileCountOutputTypeCountGameSessionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: GameSessionWhereInput
  }


  /**
   * GMProfileCountOutputType without action
   */
  export type GMProfileCountOutputTypeCountCampaignArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: CampaignWhereInput
  }


  /**
   * GMProfileCountOutputType without action
   */
  export type GMProfileCountOutputTypeCountQuestArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: QuestWhereInput
  }


  /**
   * GMProfileCountOutputType without action
   */
  export type GMProfileCountOutputTypeCountInfoSessionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: InfoSessionWhereInput
  }



  /**
   * Count Type PlayerProfileCountOutputType
   */

  export type PlayerProfileCountOutputType = {
    PlayerCharacter: number
  }

  export type PlayerProfileCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    PlayerCharacter?: boolean | PlayerProfileCountOutputTypeCountPlayerCharacterArgs
  }

  // Custom InputTypes

  /**
   * PlayerProfileCountOutputType without action
   */
  export type PlayerProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerProfileCountOutputType
     */
    select?: PlayerProfileCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PlayerProfileCountOutputType without action
   */
  export type PlayerProfileCountOutputTypeCountPlayerCharacterArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: PlayerCharacterWhereInput
  }



  /**
   * Count Type PlayerCharacterCountOutputType
   */

  export type PlayerCharacterCountOutputType = {
    GameSession: number
  }

  export type PlayerCharacterCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    GameSession?: boolean | PlayerCharacterCountOutputTypeCountGameSessionArgs
  }

  // Custom InputTypes

  /**
   * PlayerCharacterCountOutputType without action
   */
  export type PlayerCharacterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerCharacterCountOutputType
     */
    select?: PlayerCharacterCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PlayerCharacterCountOutputType without action
   */
  export type PlayerCharacterCountOutputTypeCountGameSessionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: GameSessionWhereInput
  }



  /**
   * Count Type ClassedEntityCountOutputType
   */

  export type ClassedEntityCountOutputType = {
    classes: number
  }

  export type ClassedEntityCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    classes?: boolean | ClassedEntityCountOutputTypeCountClassesArgs
  }

  // Custom InputTypes

  /**
   * ClassedEntityCountOutputType without action
   */
  export type ClassedEntityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassedEntityCountOutputType
     */
    select?: ClassedEntityCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ClassedEntityCountOutputType without action
   */
  export type ClassedEntityCountOutputTypeCountClassesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ClassConfigsWhereInput
  }



  /**
   * Count Type ClassCountOutputType
   */

  export type ClassCountOutputType = {
    ClassConfigs: number
  }

  export type ClassCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    ClassConfigs?: boolean | ClassCountOutputTypeCountClassConfigsArgs
  }

  // Custom InputTypes

  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassCountOutputType
     */
    select?: ClassCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeCountClassConfigsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ClassConfigsWhereInput
  }



  /**
   * Count Type GameSessionCountOutputType
   */

  export type GameSessionCountOutputType = {
    players: number
  }

  export type GameSessionCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    players?: boolean | GameSessionCountOutputTypeCountPlayersArgs
  }

  // Custom InputTypes

  /**
   * GameSessionCountOutputType without action
   */
  export type GameSessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSessionCountOutputType
     */
    select?: GameSessionCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * GameSessionCountOutputType without action
   */
  export type GameSessionCountOutputTypeCountPlayersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: PlayerCharacterWhereInput
  }



  /**
   * Count Type InfoSessionCountOutputType
   */

  export type InfoSessionCountOutputType = {
    players: number
  }

  export type InfoSessionCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    players?: boolean | InfoSessionCountOutputTypeCountPlayersArgs
  }

  // Custom InputTypes

  /**
   * InfoSessionCountOutputType without action
   */
  export type InfoSessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfoSessionCountOutputType
     */
    select?: InfoSessionCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * InfoSessionCountOutputType without action
   */
  export type InfoSessionCountOutputTypeCountPlayersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }



  /**
   * Count Type CampaignCountOutputType
   */

  export type CampaignCountOutputType = {
    gms: number
    players: number
    sessions: number
    infoSessions: number
    members: number
  }

  export type CampaignCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    gms?: boolean | CampaignCountOutputTypeCountGmsArgs
    players?: boolean | CampaignCountOutputTypeCountPlayersArgs
    sessions?: boolean | CampaignCountOutputTypeCountSessionsArgs
    infoSessions?: boolean | CampaignCountOutputTypeCountInfoSessionsArgs
    members?: boolean | CampaignCountOutputTypeCountMembersArgs
  }

  // Custom InputTypes

  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignCountOutputType
     */
    select?: CampaignCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeCountGmsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: GMProfileWhereInput
  }


  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeCountPlayersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: PlayerCharacterWhereInput
  }


  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: GameSessionWhereInput
  }


  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeCountInfoSessionsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: InfoSessionWhereInput
  }


  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: PlayerProfileWhereInput
  }



  /**
   * Count Type StoryCountOutputType
   */

  export type StoryCountOutputType = {
    GameSession: number
  }

  export type StoryCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    GameSession?: boolean | StoryCountOutputTypeCountGameSessionArgs
  }

  // Custom InputTypes

  /**
   * StoryCountOutputType without action
   */
  export type StoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryCountOutputType
     */
    select?: StoryCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * StoryCountOutputType without action
   */
  export type StoryCountOutputTypeCountGameSessionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: GameSessionWhereInput
  }



  /**
   * Count Type QuestCountOutputType
   */

  export type QuestCountOutputType = {
    GameSession: number
  }

  export type QuestCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    GameSession?: boolean | QuestCountOutputTypeCountGameSessionArgs
  }

  // Custom InputTypes

  /**
   * QuestCountOutputType without action
   */
  export type QuestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestCountOutputType
     */
    select?: QuestCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * QuestCountOutputType without action
   */
  export type QuestCountOutputTypeCountGameSessionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: GameSessionWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
    refresh_token_expires_in: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
    refresh_token_expires_in: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    refresh_token_expires_in: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    refresh_token_expires_in: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    refresh_token_expires_in: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
    refresh_token_expires_in?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
    refresh_token_expires_in?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    refresh_token_expires_in?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    refresh_token_expires_in?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    refresh_token_expires_in?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    refresh_token_expires_in: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    refresh_token_expires_in?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    refresh_token_expires_in?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type AccountInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $AccountPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      refresh_token_expires_in: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }


  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<AccountFindManyArgs, 'select' | 'include'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AccountFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Account that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AccountFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AccountFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
    **/
    create<T extends AccountCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AccountCreateArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Accounts.
     *     @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     *     @example
     *     // Create many Accounts
     *     const account = await prisma.account.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AccountCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
    **/
    delete<T extends AccountDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AccountUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AccountDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AccountUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
    **/
    upsert<T extends AccountUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Account model
   */ 
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly refresh_token_expires_in: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }


  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }


  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }


  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }


  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
  }


  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }


  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
  }


  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
  }



  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $SessionPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }


  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<SessionFindManyArgs, 'select' | 'include'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SessionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Session that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SessionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SessionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
    **/
    create<T extends SessionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SessionCreateArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Sessions.
     *     @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     *     @example
     *     // Create many Sessions
     *     const session = await prisma.session.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SessionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
    **/
    delete<T extends SessionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SessionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SessionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SessionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
    **/
    upsert<T extends SessionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Session model
   */ 
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }


  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }


  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }


  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }


  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
  }


  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }


  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
  }


  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
  }



  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    age: number | null
  }

  export type UserSumAggregateOutputType = {
    age: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    age: number | null
    fName: string | null
    lName: string | null
    bio: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    role: $Enums.ROLE | null
    gMProfileId: string | null
    playerProfileId: string | null
    infoSessionId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    age: number | null
    fName: string | null
    lName: string | null
    bio: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    role: $Enums.ROLE | null
    gMProfileId: string | null
    playerProfileId: string | null
    infoSessionId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    age: number
    fName: number
    lName: number
    bio: number
    email: number
    emailVerified: number
    image: number
    role: number
    gMProfileId: number
    playerProfileId: number
    infoSessionId: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    age?: true
  }

  export type UserSumAggregateInputType = {
    age?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    age?: true
    fName?: true
    lName?: true
    bio?: true
    email?: true
    emailVerified?: true
    image?: true
    role?: true
    gMProfileId?: true
    playerProfileId?: true
    infoSessionId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    age?: true
    fName?: true
    lName?: true
    bio?: true
    email?: true
    emailVerified?: true
    image?: true
    role?: true
    gMProfileId?: true
    playerProfileId?: true
    infoSessionId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    age?: true
    fName?: true
    lName?: true
    bio?: true
    email?: true
    emailVerified?: true
    image?: true
    role?: true
    gMProfileId?: true
    playerProfileId?: true
    infoSessionId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    age: number | null
    fName: string | null
    lName: string | null
    bio: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    role: $Enums.ROLE
    gMProfileId: string | null
    playerProfileId: string | null
    infoSessionId: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    age?: boolean
    fName?: boolean
    lName?: boolean
    bio?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    role?: boolean
    gMProfileId?: boolean
    playerProfileId?: boolean
    infoSessionId?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    gmProfile?: boolean | User$gmProfileArgs<ExtArgs>
    playerProfile?: boolean | User$playerProfileArgs<ExtArgs>
    InfoSession?: boolean | User$InfoSessionArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    age?: boolean
    fName?: boolean
    lName?: boolean
    bio?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    role?: boolean
    gMProfileId?: boolean
    playerProfileId?: boolean
    infoSessionId?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    gmProfile?: boolean | User$gmProfileArgs<ExtArgs>
    playerProfile?: boolean | User$playerProfileArgs<ExtArgs>
    InfoSession?: boolean | User$InfoSessionArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      gmProfile: Prisma.$GMProfilePayload<ExtArgs> | null
      playerProfile: Prisma.$PlayerProfilePayload<ExtArgs> | null
      InfoSession: Prisma.$InfoSessionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetResult<{
      id: string
      name: string | null
      age: number | null
      fName: string | null
      lName: string | null
      bio: string | null
      email: string | null
      emailVerified: Date | null
      image: string | null
      role: $Enums.ROLE
      gMProfileId: string | null
      playerProfileId: string | null
      infoSessionId: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findMany'> | Null>;

    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findMany'> | Null>;

    gmProfile<T extends User$gmProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$gmProfileArgs<ExtArgs>>): Prisma__GMProfileClient<$Result.GetResult<Prisma.$GMProfilePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    playerProfile<T extends User$playerProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$playerProfileArgs<ExtArgs>>): Prisma__PlayerProfileClient<$Result.GetResult<Prisma.$PlayerProfilePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    InfoSession<T extends User$InfoSessionArgs<ExtArgs> = {}>(args?: Subset<T, User$InfoSessionArgs<ExtArgs>>): Prisma__InfoSessionClient<$Result.GetResult<Prisma.$InfoSessionPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly age: FieldRef<"User", 'Int'>
    readonly fName: FieldRef<"User", 'String'>
    readonly lName: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'ROLE'>
    readonly gMProfileId: FieldRef<"User", 'String'>
    readonly playerProfileId: FieldRef<"User", 'String'>
    readonly infoSessionId: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data?: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }


  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }


  /**
   * User.gmProfile
   */
  export type User$gmProfileArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GMProfile
     */
    select?: GMProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GMProfileInclude<ExtArgs> | null
    where?: GMProfileWhereInput
  }


  /**
   * User.playerProfile
   */
  export type User$playerProfileArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerProfile
     */
    select?: PlayerProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayerProfileInclude<ExtArgs> | null
    where?: PlayerProfileWhereInput
  }


  /**
   * User.InfoSession
   */
  export type User$InfoSessionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfoSession
     */
    select?: InfoSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InfoSessionInclude<ExtArgs> | null
    where?: InfoSessionWhereInput
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model GMProfile
   */

  export type AggregateGMProfile = {
    _count: GMProfileCountAggregateOutputType | null
    _min: GMProfileMinAggregateOutputType | null
    _max: GMProfileMaxAggregateOutputType | null
  }

  export type GMProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.HostType | null
  }

  export type GMProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.HostType | null
  }

  export type GMProfileCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    _all: number
  }


  export type GMProfileMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
  }

  export type GMProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
  }

  export type GMProfileCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    _all?: true
  }

  export type GMProfileAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which GMProfile to aggregate.
     */
    where?: GMProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GMProfiles to fetch.
     */
    orderBy?: GMProfileOrderByWithRelationInput | GMProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GMProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GMProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GMProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GMProfiles
    **/
    _count?: true | GMProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GMProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GMProfileMaxAggregateInputType
  }

  export type GetGMProfileAggregateType<T extends GMProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateGMProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGMProfile[P]>
      : GetScalarType<T[P], AggregateGMProfile[P]>
  }




  export type GMProfileGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: GMProfileWhereInput
    orderBy?: GMProfileOrderByWithAggregationInput | GMProfileOrderByWithAggregationInput[]
    by: GMProfileScalarFieldEnum[] | GMProfileScalarFieldEnum
    having?: GMProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GMProfileCountAggregateInputType | true
    _min?: GMProfileMinAggregateInputType
    _max?: GMProfileMaxAggregateInputType
  }

  export type GMProfileGroupByOutputType = {
    id: string
    userId: string
    type: $Enums.HostType
    _count: GMProfileCountAggregateOutputType | null
    _min: GMProfileMinAggregateOutputType | null
    _max: GMProfileMaxAggregateOutputType | null
  }

  type GetGMProfileGroupByPayload<T extends GMProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GMProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GMProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GMProfileGroupByOutputType[P]>
            : GetScalarType<T[P], GMProfileGroupByOutputType[P]>
        }
      >
    >


  export type GMProfileSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    GameSession?: boolean | GMProfile$GameSessionArgs<ExtArgs>
    Campaign?: boolean | GMProfile$CampaignArgs<ExtArgs>
    Quest?: boolean | GMProfile$QuestArgs<ExtArgs>
    InfoSession?: boolean | GMProfile$InfoSessionArgs<ExtArgs>
    _count?: boolean | GMProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gMProfile"]>

  export type GMProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
  }

  export type GMProfileInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    GameSession?: boolean | GMProfile$GameSessionArgs<ExtArgs>
    Campaign?: boolean | GMProfile$CampaignArgs<ExtArgs>
    Quest?: boolean | GMProfile$QuestArgs<ExtArgs>
    InfoSession?: boolean | GMProfile$InfoSessionArgs<ExtArgs>
    _count?: boolean | GMProfileCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $GMProfilePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "GMProfile"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
      GameSession: Prisma.$GameSessionPayload<ExtArgs>[]
      Campaign: Prisma.$CampaignPayload<ExtArgs>[]
      Quest: Prisma.$QuestPayload<ExtArgs>[]
      InfoSession: Prisma.$InfoSessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: string
      userId: string
      type: $Enums.HostType
    }, ExtArgs["result"]["gMProfile"]>
    composites: {}
  }


  type GMProfileGetPayload<S extends boolean | null | undefined | GMProfileDefaultArgs> = $Result.GetResult<Prisma.$GMProfilePayload, S>

  type GMProfileCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<GMProfileFindManyArgs, 'select' | 'include'> & {
      select?: GMProfileCountAggregateInputType | true
    }

  export interface GMProfileDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GMProfile'], meta: { name: 'GMProfile' } }
    /**
     * Find zero or one GMProfile that matches the filter.
     * @param {GMProfileFindUniqueArgs} args - Arguments to find a GMProfile
     * @example
     * // Get one GMProfile
     * const gMProfile = await prisma.gMProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GMProfileFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, GMProfileFindUniqueArgs<ExtArgs>>
    ): Prisma__GMProfileClient<$Result.GetResult<Prisma.$GMProfilePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one GMProfile that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GMProfileFindUniqueOrThrowArgs} args - Arguments to find a GMProfile
     * @example
     * // Get one GMProfile
     * const gMProfile = await prisma.gMProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GMProfileFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GMProfileFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GMProfileClient<$Result.GetResult<Prisma.$GMProfilePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first GMProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GMProfileFindFirstArgs} args - Arguments to find a GMProfile
     * @example
     * // Get one GMProfile
     * const gMProfile = await prisma.gMProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GMProfileFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, GMProfileFindFirstArgs<ExtArgs>>
    ): Prisma__GMProfileClient<$Result.GetResult<Prisma.$GMProfilePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first GMProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GMProfileFindFirstOrThrowArgs} args - Arguments to find a GMProfile
     * @example
     * // Get one GMProfile
     * const gMProfile = await prisma.gMProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GMProfileFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GMProfileFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GMProfileClient<$Result.GetResult<Prisma.$GMProfilePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more GMProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GMProfileFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GMProfiles
     * const gMProfiles = await prisma.gMProfile.findMany()
     * 
     * // Get first 10 GMProfiles
     * const gMProfiles = await prisma.gMProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gMProfileWithIdOnly = await prisma.gMProfile.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GMProfileFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GMProfileFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GMProfilePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a GMProfile.
     * @param {GMProfileCreateArgs} args - Arguments to create a GMProfile.
     * @example
     * // Create one GMProfile
     * const GMProfile = await prisma.gMProfile.create({
     *   data: {
     *     // ... data to create a GMProfile
     *   }
     * })
     * 
    **/
    create<T extends GMProfileCreateArgs<ExtArgs>>(
      args: SelectSubset<T, GMProfileCreateArgs<ExtArgs>>
    ): Prisma__GMProfileClient<$Result.GetResult<Prisma.$GMProfilePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many GMProfiles.
     *     @param {GMProfileCreateManyArgs} args - Arguments to create many GMProfiles.
     *     @example
     *     // Create many GMProfiles
     *     const gMProfile = await prisma.gMProfile.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GMProfileCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GMProfileCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GMProfile.
     * @param {GMProfileDeleteArgs} args - Arguments to delete one GMProfile.
     * @example
     * // Delete one GMProfile
     * const GMProfile = await prisma.gMProfile.delete({
     *   where: {
     *     // ... filter to delete one GMProfile
     *   }
     * })
     * 
    **/
    delete<T extends GMProfileDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, GMProfileDeleteArgs<ExtArgs>>
    ): Prisma__GMProfileClient<$Result.GetResult<Prisma.$GMProfilePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one GMProfile.
     * @param {GMProfileUpdateArgs} args - Arguments to update one GMProfile.
     * @example
     * // Update one GMProfile
     * const gMProfile = await prisma.gMProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GMProfileUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, GMProfileUpdateArgs<ExtArgs>>
    ): Prisma__GMProfileClient<$Result.GetResult<Prisma.$GMProfilePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more GMProfiles.
     * @param {GMProfileDeleteManyArgs} args - Arguments to filter GMProfiles to delete.
     * @example
     * // Delete a few GMProfiles
     * const { count } = await prisma.gMProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GMProfileDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GMProfileDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GMProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GMProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GMProfiles
     * const gMProfile = await prisma.gMProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GMProfileUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, GMProfileUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GMProfile.
     * @param {GMProfileUpsertArgs} args - Arguments to update or create a GMProfile.
     * @example
     * // Update or create a GMProfile
     * const gMProfile = await prisma.gMProfile.upsert({
     *   create: {
     *     // ... data to create a GMProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GMProfile we want to update
     *   }
     * })
    **/
    upsert<T extends GMProfileUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, GMProfileUpsertArgs<ExtArgs>>
    ): Prisma__GMProfileClient<$Result.GetResult<Prisma.$GMProfilePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of GMProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GMProfileCountArgs} args - Arguments to filter GMProfiles to count.
     * @example
     * // Count the number of GMProfiles
     * const count = await prisma.gMProfile.count({
     *   where: {
     *     // ... the filter for the GMProfiles we want to count
     *   }
     * })
    **/
    count<T extends GMProfileCountArgs>(
      args?: Subset<T, GMProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GMProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GMProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GMProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GMProfileAggregateArgs>(args: Subset<T, GMProfileAggregateArgs>): Prisma.PrismaPromise<GetGMProfileAggregateType<T>>

    /**
     * Group by GMProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GMProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GMProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GMProfileGroupByArgs['orderBy'] }
        : { orderBy?: GMProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GMProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGMProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GMProfile model
   */
  readonly fields: GMProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GMProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GMProfileClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    GameSession<T extends GMProfile$GameSessionArgs<ExtArgs> = {}>(args?: Subset<T, GMProfile$GameSessionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, 'findMany'> | Null>;

    Campaign<T extends GMProfile$CampaignArgs<ExtArgs> = {}>(args?: Subset<T, GMProfile$CampaignArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, 'findMany'> | Null>;

    Quest<T extends GMProfile$QuestArgs<ExtArgs> = {}>(args?: Subset<T, GMProfile$QuestArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, 'findMany'> | Null>;

    InfoSession<T extends GMProfile$InfoSessionArgs<ExtArgs> = {}>(args?: Subset<T, GMProfile$InfoSessionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InfoSessionPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the GMProfile model
   */ 
  interface GMProfileFieldRefs {
    readonly id: FieldRef<"GMProfile", 'String'>
    readonly userId: FieldRef<"GMProfile", 'String'>
    readonly type: FieldRef<"GMProfile", 'HostType'>
  }
    

  // Custom InputTypes

  /**
   * GMProfile findUnique
   */
  export type GMProfileFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GMProfile
     */
    select?: GMProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GMProfileInclude<ExtArgs> | null
    /**
     * Filter, which GMProfile to fetch.
     */
    where: GMProfileWhereUniqueInput
  }


  /**
   * GMProfile findUniqueOrThrow
   */
  export type GMProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GMProfile
     */
    select?: GMProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GMProfileInclude<ExtArgs> | null
    /**
     * Filter, which GMProfile to fetch.
     */
    where: GMProfileWhereUniqueInput
  }


  /**
   * GMProfile findFirst
   */
  export type GMProfileFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GMProfile
     */
    select?: GMProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GMProfileInclude<ExtArgs> | null
    /**
     * Filter, which GMProfile to fetch.
     */
    where?: GMProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GMProfiles to fetch.
     */
    orderBy?: GMProfileOrderByWithRelationInput | GMProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GMProfiles.
     */
    cursor?: GMProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GMProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GMProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GMProfiles.
     */
    distinct?: GMProfileScalarFieldEnum | GMProfileScalarFieldEnum[]
  }


  /**
   * GMProfile findFirstOrThrow
   */
  export type GMProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GMProfile
     */
    select?: GMProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GMProfileInclude<ExtArgs> | null
    /**
     * Filter, which GMProfile to fetch.
     */
    where?: GMProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GMProfiles to fetch.
     */
    orderBy?: GMProfileOrderByWithRelationInput | GMProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GMProfiles.
     */
    cursor?: GMProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GMProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GMProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GMProfiles.
     */
    distinct?: GMProfileScalarFieldEnum | GMProfileScalarFieldEnum[]
  }


  /**
   * GMProfile findMany
   */
  export type GMProfileFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GMProfile
     */
    select?: GMProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GMProfileInclude<ExtArgs> | null
    /**
     * Filter, which GMProfiles to fetch.
     */
    where?: GMProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GMProfiles to fetch.
     */
    orderBy?: GMProfileOrderByWithRelationInput | GMProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GMProfiles.
     */
    cursor?: GMProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GMProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GMProfiles.
     */
    skip?: number
    distinct?: GMProfileScalarFieldEnum | GMProfileScalarFieldEnum[]
  }


  /**
   * GMProfile create
   */
  export type GMProfileCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GMProfile
     */
    select?: GMProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GMProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a GMProfile.
     */
    data: XOR<GMProfileCreateInput, GMProfileUncheckedCreateInput>
  }


  /**
   * GMProfile createMany
   */
  export type GMProfileCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GMProfiles.
     */
    data: GMProfileCreateManyInput | GMProfileCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * GMProfile update
   */
  export type GMProfileUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GMProfile
     */
    select?: GMProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GMProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a GMProfile.
     */
    data: XOR<GMProfileUpdateInput, GMProfileUncheckedUpdateInput>
    /**
     * Choose, which GMProfile to update.
     */
    where: GMProfileWhereUniqueInput
  }


  /**
   * GMProfile updateMany
   */
  export type GMProfileUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GMProfiles.
     */
    data: XOR<GMProfileUpdateManyMutationInput, GMProfileUncheckedUpdateManyInput>
    /**
     * Filter which GMProfiles to update
     */
    where?: GMProfileWhereInput
  }


  /**
   * GMProfile upsert
   */
  export type GMProfileUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GMProfile
     */
    select?: GMProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GMProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the GMProfile to update in case it exists.
     */
    where: GMProfileWhereUniqueInput
    /**
     * In case the GMProfile found by the `where` argument doesn't exist, create a new GMProfile with this data.
     */
    create: XOR<GMProfileCreateInput, GMProfileUncheckedCreateInput>
    /**
     * In case the GMProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GMProfileUpdateInput, GMProfileUncheckedUpdateInput>
  }


  /**
   * GMProfile delete
   */
  export type GMProfileDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GMProfile
     */
    select?: GMProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GMProfileInclude<ExtArgs> | null
    /**
     * Filter which GMProfile to delete.
     */
    where: GMProfileWhereUniqueInput
  }


  /**
   * GMProfile deleteMany
   */
  export type GMProfileDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which GMProfiles to delete
     */
    where?: GMProfileWhereInput
  }


  /**
   * GMProfile.GameSession
   */
  export type GMProfile$GameSessionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameSessionInclude<ExtArgs> | null
    where?: GameSessionWhereInput
    orderBy?: GameSessionOrderByWithRelationInput | GameSessionOrderByWithRelationInput[]
    cursor?: GameSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameSessionScalarFieldEnum | GameSessionScalarFieldEnum[]
  }


  /**
   * GMProfile.Campaign
   */
  export type GMProfile$CampaignArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CampaignInclude<ExtArgs> | null
    where?: CampaignWhereInput
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    cursor?: CampaignWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }


  /**
   * GMProfile.Quest
   */
  export type GMProfile$QuestArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestInclude<ExtArgs> | null
    where?: QuestWhereInput
    orderBy?: QuestOrderByWithRelationInput | QuestOrderByWithRelationInput[]
    cursor?: QuestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestScalarFieldEnum | QuestScalarFieldEnum[]
  }


  /**
   * GMProfile.InfoSession
   */
  export type GMProfile$InfoSessionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfoSession
     */
    select?: InfoSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InfoSessionInclude<ExtArgs> | null
    where?: InfoSessionWhereInput
    orderBy?: InfoSessionOrderByWithRelationInput | InfoSessionOrderByWithRelationInput[]
    cursor?: InfoSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InfoSessionScalarFieldEnum | InfoSessionScalarFieldEnum[]
  }


  /**
   * GMProfile without action
   */
  export type GMProfileDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GMProfile
     */
    select?: GMProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GMProfileInclude<ExtArgs> | null
  }



  /**
   * Model PlayerProfile
   */

  export type AggregatePlayerProfile = {
    _count: PlayerProfileCountAggregateOutputType | null
    _avg: PlayerProfileAvgAggregateOutputType | null
    _sum: PlayerProfileSumAggregateOutputType | null
    _min: PlayerProfileMinAggregateOutputType | null
    _max: PlayerProfileMaxAggregateOutputType | null
  }

  export type PlayerProfileAvgAggregateOutputType = {
    campaignId: number | null
  }

  export type PlayerProfileSumAggregateOutputType = {
    campaignId: number | null
  }

  export type PlayerProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    campaignId: number | null
  }

  export type PlayerProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    campaignId: number | null
  }

  export type PlayerProfileCountAggregateOutputType = {
    id: number
    userId: number
    campaignId: number
    _all: number
  }


  export type PlayerProfileAvgAggregateInputType = {
    campaignId?: true
  }

  export type PlayerProfileSumAggregateInputType = {
    campaignId?: true
  }

  export type PlayerProfileMinAggregateInputType = {
    id?: true
    userId?: true
    campaignId?: true
  }

  export type PlayerProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    campaignId?: true
  }

  export type PlayerProfileCountAggregateInputType = {
    id?: true
    userId?: true
    campaignId?: true
    _all?: true
  }

  export type PlayerProfileAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayerProfile to aggregate.
     */
    where?: PlayerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerProfiles to fetch.
     */
    orderBy?: PlayerProfileOrderByWithRelationInput | PlayerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlayerProfiles
    **/
    _count?: true | PlayerProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlayerProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlayerProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayerProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayerProfileMaxAggregateInputType
  }

  export type GetPlayerProfileAggregateType<T extends PlayerProfileAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayerProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayerProfile[P]>
      : GetScalarType<T[P], AggregatePlayerProfile[P]>
  }




  export type PlayerProfileGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: PlayerProfileWhereInput
    orderBy?: PlayerProfileOrderByWithAggregationInput | PlayerProfileOrderByWithAggregationInput[]
    by: PlayerProfileScalarFieldEnum[] | PlayerProfileScalarFieldEnum
    having?: PlayerProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayerProfileCountAggregateInputType | true
    _avg?: PlayerProfileAvgAggregateInputType
    _sum?: PlayerProfileSumAggregateInputType
    _min?: PlayerProfileMinAggregateInputType
    _max?: PlayerProfileMaxAggregateInputType
  }

  export type PlayerProfileGroupByOutputType = {
    id: string
    userId: string
    campaignId: number | null
    _count: PlayerProfileCountAggregateOutputType | null
    _avg: PlayerProfileAvgAggregateOutputType | null
    _sum: PlayerProfileSumAggregateOutputType | null
    _min: PlayerProfileMinAggregateOutputType | null
    _max: PlayerProfileMaxAggregateOutputType | null
  }

  type GetPlayerProfileGroupByPayload<T extends PlayerProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayerProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayerProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayerProfileGroupByOutputType[P]>
            : GetScalarType<T[P], PlayerProfileGroupByOutputType[P]>
        }
      >
    >


  export type PlayerProfileSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    campaignId?: boolean
    PlayerCharacter?: boolean | PlayerProfile$PlayerCharacterArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
    Campaign?: boolean | PlayerProfile$CampaignArgs<ExtArgs>
    _count?: boolean | PlayerProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playerProfile"]>

  export type PlayerProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    campaignId?: boolean
  }

  export type PlayerProfileInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    PlayerCharacter?: boolean | PlayerProfile$PlayerCharacterArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
    Campaign?: boolean | PlayerProfile$CampaignArgs<ExtArgs>
    _count?: boolean | PlayerProfileCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $PlayerProfilePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "PlayerProfile"
    objects: {
      PlayerCharacter: Prisma.$PlayerCharacterPayload<ExtArgs>[]
      User: Prisma.$UserPayload<ExtArgs>
      Campaign: Prisma.$CampaignPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetResult<{
      id: string
      userId: string
      campaignId: number | null
    }, ExtArgs["result"]["playerProfile"]>
    composites: {}
  }


  type PlayerProfileGetPayload<S extends boolean | null | undefined | PlayerProfileDefaultArgs> = $Result.GetResult<Prisma.$PlayerProfilePayload, S>

  type PlayerProfileCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<PlayerProfileFindManyArgs, 'select' | 'include'> & {
      select?: PlayerProfileCountAggregateInputType | true
    }

  export interface PlayerProfileDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlayerProfile'], meta: { name: 'PlayerProfile' } }
    /**
     * Find zero or one PlayerProfile that matches the filter.
     * @param {PlayerProfileFindUniqueArgs} args - Arguments to find a PlayerProfile
     * @example
     * // Get one PlayerProfile
     * const playerProfile = await prisma.playerProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PlayerProfileFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PlayerProfileFindUniqueArgs<ExtArgs>>
    ): Prisma__PlayerProfileClient<$Result.GetResult<Prisma.$PlayerProfilePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one PlayerProfile that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PlayerProfileFindUniqueOrThrowArgs} args - Arguments to find a PlayerProfile
     * @example
     * // Get one PlayerProfile
     * const playerProfile = await prisma.playerProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PlayerProfileFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PlayerProfileFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PlayerProfileClient<$Result.GetResult<Prisma.$PlayerProfilePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first PlayerProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerProfileFindFirstArgs} args - Arguments to find a PlayerProfile
     * @example
     * // Get one PlayerProfile
     * const playerProfile = await prisma.playerProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PlayerProfileFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PlayerProfileFindFirstArgs<ExtArgs>>
    ): Prisma__PlayerProfileClient<$Result.GetResult<Prisma.$PlayerProfilePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first PlayerProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerProfileFindFirstOrThrowArgs} args - Arguments to find a PlayerProfile
     * @example
     * // Get one PlayerProfile
     * const playerProfile = await prisma.playerProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PlayerProfileFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PlayerProfileFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PlayerProfileClient<$Result.GetResult<Prisma.$PlayerProfilePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more PlayerProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerProfileFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlayerProfiles
     * const playerProfiles = await prisma.playerProfile.findMany()
     * 
     * // Get first 10 PlayerProfiles
     * const playerProfiles = await prisma.playerProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playerProfileWithIdOnly = await prisma.playerProfile.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PlayerProfileFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PlayerProfileFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerProfilePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a PlayerProfile.
     * @param {PlayerProfileCreateArgs} args - Arguments to create a PlayerProfile.
     * @example
     * // Create one PlayerProfile
     * const PlayerProfile = await prisma.playerProfile.create({
     *   data: {
     *     // ... data to create a PlayerProfile
     *   }
     * })
     * 
    **/
    create<T extends PlayerProfileCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PlayerProfileCreateArgs<ExtArgs>>
    ): Prisma__PlayerProfileClient<$Result.GetResult<Prisma.$PlayerProfilePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many PlayerProfiles.
     *     @param {PlayerProfileCreateManyArgs} args - Arguments to create many PlayerProfiles.
     *     @example
     *     // Create many PlayerProfiles
     *     const playerProfile = await prisma.playerProfile.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PlayerProfileCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PlayerProfileCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PlayerProfile.
     * @param {PlayerProfileDeleteArgs} args - Arguments to delete one PlayerProfile.
     * @example
     * // Delete one PlayerProfile
     * const PlayerProfile = await prisma.playerProfile.delete({
     *   where: {
     *     // ... filter to delete one PlayerProfile
     *   }
     * })
     * 
    **/
    delete<T extends PlayerProfileDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PlayerProfileDeleteArgs<ExtArgs>>
    ): Prisma__PlayerProfileClient<$Result.GetResult<Prisma.$PlayerProfilePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one PlayerProfile.
     * @param {PlayerProfileUpdateArgs} args - Arguments to update one PlayerProfile.
     * @example
     * // Update one PlayerProfile
     * const playerProfile = await prisma.playerProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PlayerProfileUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PlayerProfileUpdateArgs<ExtArgs>>
    ): Prisma__PlayerProfileClient<$Result.GetResult<Prisma.$PlayerProfilePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more PlayerProfiles.
     * @param {PlayerProfileDeleteManyArgs} args - Arguments to filter PlayerProfiles to delete.
     * @example
     * // Delete a few PlayerProfiles
     * const { count } = await prisma.playerProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PlayerProfileDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PlayerProfileDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlayerProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlayerProfiles
     * const playerProfile = await prisma.playerProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PlayerProfileUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PlayerProfileUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PlayerProfile.
     * @param {PlayerProfileUpsertArgs} args - Arguments to update or create a PlayerProfile.
     * @example
     * // Update or create a PlayerProfile
     * const playerProfile = await prisma.playerProfile.upsert({
     *   create: {
     *     // ... data to create a PlayerProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlayerProfile we want to update
     *   }
     * })
    **/
    upsert<T extends PlayerProfileUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PlayerProfileUpsertArgs<ExtArgs>>
    ): Prisma__PlayerProfileClient<$Result.GetResult<Prisma.$PlayerProfilePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of PlayerProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerProfileCountArgs} args - Arguments to filter PlayerProfiles to count.
     * @example
     * // Count the number of PlayerProfiles
     * const count = await prisma.playerProfile.count({
     *   where: {
     *     // ... the filter for the PlayerProfiles we want to count
     *   }
     * })
    **/
    count<T extends PlayerProfileCountArgs>(
      args?: Subset<T, PlayerProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayerProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlayerProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlayerProfileAggregateArgs>(args: Subset<T, PlayerProfileAggregateArgs>): Prisma.PrismaPromise<GetPlayerProfileAggregateType<T>>

    /**
     * Group by PlayerProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlayerProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayerProfileGroupByArgs['orderBy'] }
        : { orderBy?: PlayerProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlayerProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayerProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlayerProfile model
   */
  readonly fields: PlayerProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlayerProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayerProfileClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    PlayerCharacter<T extends PlayerProfile$PlayerCharacterArgs<ExtArgs> = {}>(args?: Subset<T, PlayerProfile$PlayerCharacterArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerCharacterPayload<ExtArgs>, T, 'findMany'> | Null>;

    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Campaign<T extends PlayerProfile$CampaignArgs<ExtArgs> = {}>(args?: Subset<T, PlayerProfile$CampaignArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the PlayerProfile model
   */ 
  interface PlayerProfileFieldRefs {
    readonly id: FieldRef<"PlayerProfile", 'String'>
    readonly userId: FieldRef<"PlayerProfile", 'String'>
    readonly campaignId: FieldRef<"PlayerProfile", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * PlayerProfile findUnique
   */
  export type PlayerProfileFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerProfile
     */
    select?: PlayerProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayerProfileInclude<ExtArgs> | null
    /**
     * Filter, which PlayerProfile to fetch.
     */
    where: PlayerProfileWhereUniqueInput
  }


  /**
   * PlayerProfile findUniqueOrThrow
   */
  export type PlayerProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerProfile
     */
    select?: PlayerProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayerProfileInclude<ExtArgs> | null
    /**
     * Filter, which PlayerProfile to fetch.
     */
    where: PlayerProfileWhereUniqueInput
  }


  /**
   * PlayerProfile findFirst
   */
  export type PlayerProfileFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerProfile
     */
    select?: PlayerProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayerProfileInclude<ExtArgs> | null
    /**
     * Filter, which PlayerProfile to fetch.
     */
    where?: PlayerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerProfiles to fetch.
     */
    orderBy?: PlayerProfileOrderByWithRelationInput | PlayerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayerProfiles.
     */
    cursor?: PlayerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerProfiles.
     */
    distinct?: PlayerProfileScalarFieldEnum | PlayerProfileScalarFieldEnum[]
  }


  /**
   * PlayerProfile findFirstOrThrow
   */
  export type PlayerProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerProfile
     */
    select?: PlayerProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayerProfileInclude<ExtArgs> | null
    /**
     * Filter, which PlayerProfile to fetch.
     */
    where?: PlayerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerProfiles to fetch.
     */
    orderBy?: PlayerProfileOrderByWithRelationInput | PlayerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayerProfiles.
     */
    cursor?: PlayerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerProfiles.
     */
    distinct?: PlayerProfileScalarFieldEnum | PlayerProfileScalarFieldEnum[]
  }


  /**
   * PlayerProfile findMany
   */
  export type PlayerProfileFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerProfile
     */
    select?: PlayerProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayerProfileInclude<ExtArgs> | null
    /**
     * Filter, which PlayerProfiles to fetch.
     */
    where?: PlayerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerProfiles to fetch.
     */
    orderBy?: PlayerProfileOrderByWithRelationInput | PlayerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlayerProfiles.
     */
    cursor?: PlayerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerProfiles.
     */
    skip?: number
    distinct?: PlayerProfileScalarFieldEnum | PlayerProfileScalarFieldEnum[]
  }


  /**
   * PlayerProfile create
   */
  export type PlayerProfileCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerProfile
     */
    select?: PlayerProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayerProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a PlayerProfile.
     */
    data: XOR<PlayerProfileCreateInput, PlayerProfileUncheckedCreateInput>
  }


  /**
   * PlayerProfile createMany
   */
  export type PlayerProfileCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlayerProfiles.
     */
    data: PlayerProfileCreateManyInput | PlayerProfileCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * PlayerProfile update
   */
  export type PlayerProfileUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerProfile
     */
    select?: PlayerProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayerProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a PlayerProfile.
     */
    data: XOR<PlayerProfileUpdateInput, PlayerProfileUncheckedUpdateInput>
    /**
     * Choose, which PlayerProfile to update.
     */
    where: PlayerProfileWhereUniqueInput
  }


  /**
   * PlayerProfile updateMany
   */
  export type PlayerProfileUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlayerProfiles.
     */
    data: XOR<PlayerProfileUpdateManyMutationInput, PlayerProfileUncheckedUpdateManyInput>
    /**
     * Filter which PlayerProfiles to update
     */
    where?: PlayerProfileWhereInput
  }


  /**
   * PlayerProfile upsert
   */
  export type PlayerProfileUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerProfile
     */
    select?: PlayerProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayerProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the PlayerProfile to update in case it exists.
     */
    where: PlayerProfileWhereUniqueInput
    /**
     * In case the PlayerProfile found by the `where` argument doesn't exist, create a new PlayerProfile with this data.
     */
    create: XOR<PlayerProfileCreateInput, PlayerProfileUncheckedCreateInput>
    /**
     * In case the PlayerProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayerProfileUpdateInput, PlayerProfileUncheckedUpdateInput>
  }


  /**
   * PlayerProfile delete
   */
  export type PlayerProfileDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerProfile
     */
    select?: PlayerProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayerProfileInclude<ExtArgs> | null
    /**
     * Filter which PlayerProfile to delete.
     */
    where: PlayerProfileWhereUniqueInput
  }


  /**
   * PlayerProfile deleteMany
   */
  export type PlayerProfileDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayerProfiles to delete
     */
    where?: PlayerProfileWhereInput
  }


  /**
   * PlayerProfile.PlayerCharacter
   */
  export type PlayerProfile$PlayerCharacterArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerCharacter
     */
    select?: PlayerCharacterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayerCharacterInclude<ExtArgs> | null
    where?: PlayerCharacterWhereInput
    orderBy?: PlayerCharacterOrderByWithRelationInput | PlayerCharacterOrderByWithRelationInput[]
    cursor?: PlayerCharacterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayerCharacterScalarFieldEnum | PlayerCharacterScalarFieldEnum[]
  }


  /**
   * PlayerProfile.Campaign
   */
  export type PlayerProfile$CampaignArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CampaignInclude<ExtArgs> | null
    where?: CampaignWhereInput
  }


  /**
   * PlayerProfile without action
   */
  export type PlayerProfileDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerProfile
     */
    select?: PlayerProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayerProfileInclude<ExtArgs> | null
  }



  /**
   * Model PlayerCharacter
   */

  export type AggregatePlayerCharacter = {
    _count: PlayerCharacterCountAggregateOutputType | null
    _avg: PlayerCharacterAvgAggregateOutputType | null
    _sum: PlayerCharacterSumAggregateOutputType | null
    _min: PlayerCharacterMinAggregateOutputType | null
    _max: PlayerCharacterMaxAggregateOutputType | null
  }

  export type PlayerCharacterAvgAggregateOutputType = {
    campaignId: number | null
    experience: number | null
    level: number | null
    gold: number | null
  }

  export type PlayerCharacterSumAggregateOutputType = {
    campaignId: number | null
    experience: number | null
    level: number | null
    gold: number | null
  }

  export type PlayerCharacterMinAggregateOutputType = {
    id: string | null
    name: string | null
    playerProfileId: string | null
    campaignId: number | null
    experience: number | null
    level: number | null
    gold: number | null
    classedEntityId: string | null
    backStory: string | null
    personality: string | null
    race: string | null
    active: boolean | null
  }

  export type PlayerCharacterMaxAggregateOutputType = {
    id: string | null
    name: string | null
    playerProfileId: string | null
    campaignId: number | null
    experience: number | null
    level: number | null
    gold: number | null
    classedEntityId: string | null
    backStory: string | null
    personality: string | null
    race: string | null
    active: boolean | null
  }

  export type PlayerCharacterCountAggregateOutputType = {
    id: number
    name: number
    playerProfileId: number
    campaignId: number
    experience: number
    level: number
    gold: number
    classedEntityId: number
    backStory: number
    personality: number
    race: number
    active: number
    _all: number
  }


  export type PlayerCharacterAvgAggregateInputType = {
    campaignId?: true
    experience?: true
    level?: true
    gold?: true
  }

  export type PlayerCharacterSumAggregateInputType = {
    campaignId?: true
    experience?: true
    level?: true
    gold?: true
  }

  export type PlayerCharacterMinAggregateInputType = {
    id?: true
    name?: true
    playerProfileId?: true
    campaignId?: true
    experience?: true
    level?: true
    gold?: true
    classedEntityId?: true
    backStory?: true
    personality?: true
    race?: true
    active?: true
  }

  export type PlayerCharacterMaxAggregateInputType = {
    id?: true
    name?: true
    playerProfileId?: true
    campaignId?: true
    experience?: true
    level?: true
    gold?: true
    classedEntityId?: true
    backStory?: true
    personality?: true
    race?: true
    active?: true
  }

  export type PlayerCharacterCountAggregateInputType = {
    id?: true
    name?: true
    playerProfileId?: true
    campaignId?: true
    experience?: true
    level?: true
    gold?: true
    classedEntityId?: true
    backStory?: true
    personality?: true
    race?: true
    active?: true
    _all?: true
  }

  export type PlayerCharacterAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayerCharacter to aggregate.
     */
    where?: PlayerCharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerCharacters to fetch.
     */
    orderBy?: PlayerCharacterOrderByWithRelationInput | PlayerCharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayerCharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerCharacters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerCharacters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlayerCharacters
    **/
    _count?: true | PlayerCharacterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlayerCharacterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlayerCharacterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayerCharacterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayerCharacterMaxAggregateInputType
  }

  export type GetPlayerCharacterAggregateType<T extends PlayerCharacterAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayerCharacter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayerCharacter[P]>
      : GetScalarType<T[P], AggregatePlayerCharacter[P]>
  }




  export type PlayerCharacterGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: PlayerCharacterWhereInput
    orderBy?: PlayerCharacterOrderByWithAggregationInput | PlayerCharacterOrderByWithAggregationInput[]
    by: PlayerCharacterScalarFieldEnum[] | PlayerCharacterScalarFieldEnum
    having?: PlayerCharacterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayerCharacterCountAggregateInputType | true
    _avg?: PlayerCharacterAvgAggregateInputType
    _sum?: PlayerCharacterSumAggregateInputType
    _min?: PlayerCharacterMinAggregateInputType
    _max?: PlayerCharacterMaxAggregateInputType
  }

  export type PlayerCharacterGroupByOutputType = {
    id: string
    name: string
    playerProfileId: string
    campaignId: number
    experience: number
    level: number
    gold: number
    classedEntityId: string
    backStory: string | null
    personality: string | null
    race: string
    active: boolean
    _count: PlayerCharacterCountAggregateOutputType | null
    _avg: PlayerCharacterAvgAggregateOutputType | null
    _sum: PlayerCharacterSumAggregateOutputType | null
    _min: PlayerCharacterMinAggregateOutputType | null
    _max: PlayerCharacterMaxAggregateOutputType | null
  }

  type GetPlayerCharacterGroupByPayload<T extends PlayerCharacterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayerCharacterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayerCharacterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayerCharacterGroupByOutputType[P]>
            : GetScalarType<T[P], PlayerCharacterGroupByOutputType[P]>
        }
      >
    >


  export type PlayerCharacterSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    playerProfileId?: boolean
    campaignId?: boolean
    experience?: boolean
    level?: boolean
    gold?: boolean
    classedEntityId?: boolean
    backStory?: boolean
    personality?: boolean
    race?: boolean
    active?: boolean
    owner?: boolean | PlayerProfileDefaultArgs<ExtArgs>
    GameSession?: boolean | PlayerCharacter$GameSessionArgs<ExtArgs>
    Campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    character?: boolean | ClassedEntityDefaultArgs<ExtArgs>
    _count?: boolean | PlayerCharacterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playerCharacter"]>

  export type PlayerCharacterSelectScalar = {
    id?: boolean
    name?: boolean
    playerProfileId?: boolean
    campaignId?: boolean
    experience?: boolean
    level?: boolean
    gold?: boolean
    classedEntityId?: boolean
    backStory?: boolean
    personality?: boolean
    race?: boolean
    active?: boolean
  }

  export type PlayerCharacterInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    owner?: boolean | PlayerProfileDefaultArgs<ExtArgs>
    GameSession?: boolean | PlayerCharacter$GameSessionArgs<ExtArgs>
    Campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    character?: boolean | ClassedEntityDefaultArgs<ExtArgs>
    _count?: boolean | PlayerCharacterCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $PlayerCharacterPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "PlayerCharacter"
    objects: {
      owner: Prisma.$PlayerProfilePayload<ExtArgs>
      GameSession: Prisma.$GameSessionPayload<ExtArgs>[]
      Campaign: Prisma.$CampaignPayload<ExtArgs>
      character: Prisma.$ClassedEntityPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      id: string
      name: string
      playerProfileId: string
      campaignId: number
      experience: number
      level: number
      gold: number
      classedEntityId: string
      backStory: string | null
      personality: string | null
      race: string
      active: boolean
    }, ExtArgs["result"]["playerCharacter"]>
    composites: {}
  }


  type PlayerCharacterGetPayload<S extends boolean | null | undefined | PlayerCharacterDefaultArgs> = $Result.GetResult<Prisma.$PlayerCharacterPayload, S>

  type PlayerCharacterCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<PlayerCharacterFindManyArgs, 'select' | 'include'> & {
      select?: PlayerCharacterCountAggregateInputType | true
    }

  export interface PlayerCharacterDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlayerCharacter'], meta: { name: 'PlayerCharacter' } }
    /**
     * Find zero or one PlayerCharacter that matches the filter.
     * @param {PlayerCharacterFindUniqueArgs} args - Arguments to find a PlayerCharacter
     * @example
     * // Get one PlayerCharacter
     * const playerCharacter = await prisma.playerCharacter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PlayerCharacterFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PlayerCharacterFindUniqueArgs<ExtArgs>>
    ): Prisma__PlayerCharacterClient<$Result.GetResult<Prisma.$PlayerCharacterPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one PlayerCharacter that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PlayerCharacterFindUniqueOrThrowArgs} args - Arguments to find a PlayerCharacter
     * @example
     * // Get one PlayerCharacter
     * const playerCharacter = await prisma.playerCharacter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PlayerCharacterFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PlayerCharacterFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PlayerCharacterClient<$Result.GetResult<Prisma.$PlayerCharacterPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first PlayerCharacter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerCharacterFindFirstArgs} args - Arguments to find a PlayerCharacter
     * @example
     * // Get one PlayerCharacter
     * const playerCharacter = await prisma.playerCharacter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PlayerCharacterFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PlayerCharacterFindFirstArgs<ExtArgs>>
    ): Prisma__PlayerCharacterClient<$Result.GetResult<Prisma.$PlayerCharacterPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first PlayerCharacter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerCharacterFindFirstOrThrowArgs} args - Arguments to find a PlayerCharacter
     * @example
     * // Get one PlayerCharacter
     * const playerCharacter = await prisma.playerCharacter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PlayerCharacterFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PlayerCharacterFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PlayerCharacterClient<$Result.GetResult<Prisma.$PlayerCharacterPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more PlayerCharacters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerCharacterFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlayerCharacters
     * const playerCharacters = await prisma.playerCharacter.findMany()
     * 
     * // Get first 10 PlayerCharacters
     * const playerCharacters = await prisma.playerCharacter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playerCharacterWithIdOnly = await prisma.playerCharacter.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PlayerCharacterFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PlayerCharacterFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerCharacterPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a PlayerCharacter.
     * @param {PlayerCharacterCreateArgs} args - Arguments to create a PlayerCharacter.
     * @example
     * // Create one PlayerCharacter
     * const PlayerCharacter = await prisma.playerCharacter.create({
     *   data: {
     *     // ... data to create a PlayerCharacter
     *   }
     * })
     * 
    **/
    create<T extends PlayerCharacterCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PlayerCharacterCreateArgs<ExtArgs>>
    ): Prisma__PlayerCharacterClient<$Result.GetResult<Prisma.$PlayerCharacterPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many PlayerCharacters.
     *     @param {PlayerCharacterCreateManyArgs} args - Arguments to create many PlayerCharacters.
     *     @example
     *     // Create many PlayerCharacters
     *     const playerCharacter = await prisma.playerCharacter.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PlayerCharacterCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PlayerCharacterCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PlayerCharacter.
     * @param {PlayerCharacterDeleteArgs} args - Arguments to delete one PlayerCharacter.
     * @example
     * // Delete one PlayerCharacter
     * const PlayerCharacter = await prisma.playerCharacter.delete({
     *   where: {
     *     // ... filter to delete one PlayerCharacter
     *   }
     * })
     * 
    **/
    delete<T extends PlayerCharacterDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PlayerCharacterDeleteArgs<ExtArgs>>
    ): Prisma__PlayerCharacterClient<$Result.GetResult<Prisma.$PlayerCharacterPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one PlayerCharacter.
     * @param {PlayerCharacterUpdateArgs} args - Arguments to update one PlayerCharacter.
     * @example
     * // Update one PlayerCharacter
     * const playerCharacter = await prisma.playerCharacter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PlayerCharacterUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PlayerCharacterUpdateArgs<ExtArgs>>
    ): Prisma__PlayerCharacterClient<$Result.GetResult<Prisma.$PlayerCharacterPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more PlayerCharacters.
     * @param {PlayerCharacterDeleteManyArgs} args - Arguments to filter PlayerCharacters to delete.
     * @example
     * // Delete a few PlayerCharacters
     * const { count } = await prisma.playerCharacter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PlayerCharacterDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PlayerCharacterDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlayerCharacters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerCharacterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlayerCharacters
     * const playerCharacter = await prisma.playerCharacter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PlayerCharacterUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PlayerCharacterUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PlayerCharacter.
     * @param {PlayerCharacterUpsertArgs} args - Arguments to update or create a PlayerCharacter.
     * @example
     * // Update or create a PlayerCharacter
     * const playerCharacter = await prisma.playerCharacter.upsert({
     *   create: {
     *     // ... data to create a PlayerCharacter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlayerCharacter we want to update
     *   }
     * })
    **/
    upsert<T extends PlayerCharacterUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PlayerCharacterUpsertArgs<ExtArgs>>
    ): Prisma__PlayerCharacterClient<$Result.GetResult<Prisma.$PlayerCharacterPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of PlayerCharacters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerCharacterCountArgs} args - Arguments to filter PlayerCharacters to count.
     * @example
     * // Count the number of PlayerCharacters
     * const count = await prisma.playerCharacter.count({
     *   where: {
     *     // ... the filter for the PlayerCharacters we want to count
     *   }
     * })
    **/
    count<T extends PlayerCharacterCountArgs>(
      args?: Subset<T, PlayerCharacterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayerCharacterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlayerCharacter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerCharacterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlayerCharacterAggregateArgs>(args: Subset<T, PlayerCharacterAggregateArgs>): Prisma.PrismaPromise<GetPlayerCharacterAggregateType<T>>

    /**
     * Group by PlayerCharacter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerCharacterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlayerCharacterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayerCharacterGroupByArgs['orderBy'] }
        : { orderBy?: PlayerCharacterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlayerCharacterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayerCharacterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlayerCharacter model
   */
  readonly fields: PlayerCharacterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlayerCharacter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayerCharacterClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    owner<T extends PlayerProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlayerProfileDefaultArgs<ExtArgs>>): Prisma__PlayerProfileClient<$Result.GetResult<Prisma.$PlayerProfilePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    GameSession<T extends PlayerCharacter$GameSessionArgs<ExtArgs> = {}>(args?: Subset<T, PlayerCharacter$GameSessionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, 'findMany'> | Null>;

    Campaign<T extends CampaignDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CampaignDefaultArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    character<T extends ClassedEntityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassedEntityDefaultArgs<ExtArgs>>): Prisma__ClassedEntityClient<$Result.GetResult<Prisma.$ClassedEntityPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the PlayerCharacter model
   */ 
  interface PlayerCharacterFieldRefs {
    readonly id: FieldRef<"PlayerCharacter", 'String'>
    readonly name: FieldRef<"PlayerCharacter", 'String'>
    readonly playerProfileId: FieldRef<"PlayerCharacter", 'String'>
    readonly campaignId: FieldRef<"PlayerCharacter", 'Int'>
    readonly experience: FieldRef<"PlayerCharacter", 'Int'>
    readonly level: FieldRef<"PlayerCharacter", 'Int'>
    readonly gold: FieldRef<"PlayerCharacter", 'Int'>
    readonly classedEntityId: FieldRef<"PlayerCharacter", 'String'>
    readonly backStory: FieldRef<"PlayerCharacter", 'String'>
    readonly personality: FieldRef<"PlayerCharacter", 'String'>
    readonly race: FieldRef<"PlayerCharacter", 'String'>
    readonly active: FieldRef<"PlayerCharacter", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * PlayerCharacter findUnique
   */
  export type PlayerCharacterFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerCharacter
     */
    select?: PlayerCharacterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayerCharacterInclude<ExtArgs> | null
    /**
     * Filter, which PlayerCharacter to fetch.
     */
    where: PlayerCharacterWhereUniqueInput
  }


  /**
   * PlayerCharacter findUniqueOrThrow
   */
  export type PlayerCharacterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerCharacter
     */
    select?: PlayerCharacterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayerCharacterInclude<ExtArgs> | null
    /**
     * Filter, which PlayerCharacter to fetch.
     */
    where: PlayerCharacterWhereUniqueInput
  }


  /**
   * PlayerCharacter findFirst
   */
  export type PlayerCharacterFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerCharacter
     */
    select?: PlayerCharacterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayerCharacterInclude<ExtArgs> | null
    /**
     * Filter, which PlayerCharacter to fetch.
     */
    where?: PlayerCharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerCharacters to fetch.
     */
    orderBy?: PlayerCharacterOrderByWithRelationInput | PlayerCharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayerCharacters.
     */
    cursor?: PlayerCharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerCharacters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerCharacters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerCharacters.
     */
    distinct?: PlayerCharacterScalarFieldEnum | PlayerCharacterScalarFieldEnum[]
  }


  /**
   * PlayerCharacter findFirstOrThrow
   */
  export type PlayerCharacterFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerCharacter
     */
    select?: PlayerCharacterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayerCharacterInclude<ExtArgs> | null
    /**
     * Filter, which PlayerCharacter to fetch.
     */
    where?: PlayerCharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerCharacters to fetch.
     */
    orderBy?: PlayerCharacterOrderByWithRelationInput | PlayerCharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayerCharacters.
     */
    cursor?: PlayerCharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerCharacters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerCharacters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerCharacters.
     */
    distinct?: PlayerCharacterScalarFieldEnum | PlayerCharacterScalarFieldEnum[]
  }


  /**
   * PlayerCharacter findMany
   */
  export type PlayerCharacterFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerCharacter
     */
    select?: PlayerCharacterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayerCharacterInclude<ExtArgs> | null
    /**
     * Filter, which PlayerCharacters to fetch.
     */
    where?: PlayerCharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerCharacters to fetch.
     */
    orderBy?: PlayerCharacterOrderByWithRelationInput | PlayerCharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlayerCharacters.
     */
    cursor?: PlayerCharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerCharacters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerCharacters.
     */
    skip?: number
    distinct?: PlayerCharacterScalarFieldEnum | PlayerCharacterScalarFieldEnum[]
  }


  /**
   * PlayerCharacter create
   */
  export type PlayerCharacterCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerCharacter
     */
    select?: PlayerCharacterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayerCharacterInclude<ExtArgs> | null
    /**
     * The data needed to create a PlayerCharacter.
     */
    data: XOR<PlayerCharacterCreateInput, PlayerCharacterUncheckedCreateInput>
  }


  /**
   * PlayerCharacter createMany
   */
  export type PlayerCharacterCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlayerCharacters.
     */
    data: PlayerCharacterCreateManyInput | PlayerCharacterCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * PlayerCharacter update
   */
  export type PlayerCharacterUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerCharacter
     */
    select?: PlayerCharacterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayerCharacterInclude<ExtArgs> | null
    /**
     * The data needed to update a PlayerCharacter.
     */
    data: XOR<PlayerCharacterUpdateInput, PlayerCharacterUncheckedUpdateInput>
    /**
     * Choose, which PlayerCharacter to update.
     */
    where: PlayerCharacterWhereUniqueInput
  }


  /**
   * PlayerCharacter updateMany
   */
  export type PlayerCharacterUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlayerCharacters.
     */
    data: XOR<PlayerCharacterUpdateManyMutationInput, PlayerCharacterUncheckedUpdateManyInput>
    /**
     * Filter which PlayerCharacters to update
     */
    where?: PlayerCharacterWhereInput
  }


  /**
   * PlayerCharacter upsert
   */
  export type PlayerCharacterUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerCharacter
     */
    select?: PlayerCharacterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayerCharacterInclude<ExtArgs> | null
    /**
     * The filter to search for the PlayerCharacter to update in case it exists.
     */
    where: PlayerCharacterWhereUniqueInput
    /**
     * In case the PlayerCharacter found by the `where` argument doesn't exist, create a new PlayerCharacter with this data.
     */
    create: XOR<PlayerCharacterCreateInput, PlayerCharacterUncheckedCreateInput>
    /**
     * In case the PlayerCharacter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayerCharacterUpdateInput, PlayerCharacterUncheckedUpdateInput>
  }


  /**
   * PlayerCharacter delete
   */
  export type PlayerCharacterDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerCharacter
     */
    select?: PlayerCharacterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayerCharacterInclude<ExtArgs> | null
    /**
     * Filter which PlayerCharacter to delete.
     */
    where: PlayerCharacterWhereUniqueInput
  }


  /**
   * PlayerCharacter deleteMany
   */
  export type PlayerCharacterDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayerCharacters to delete
     */
    where?: PlayerCharacterWhereInput
  }


  /**
   * PlayerCharacter.GameSession
   */
  export type PlayerCharacter$GameSessionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameSessionInclude<ExtArgs> | null
    where?: GameSessionWhereInput
    orderBy?: GameSessionOrderByWithRelationInput | GameSessionOrderByWithRelationInput[]
    cursor?: GameSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameSessionScalarFieldEnum | GameSessionScalarFieldEnum[]
  }


  /**
   * PlayerCharacter without action
   */
  export type PlayerCharacterDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerCharacter
     */
    select?: PlayerCharacterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayerCharacterInclude<ExtArgs> | null
  }



  /**
   * Model ClassedEntity
   */

  export type AggregateClassedEntity = {
    _count: ClassedEntityCountAggregateOutputType | null
    _min: ClassedEntityMinAggregateOutputType | null
    _max: ClassedEntityMaxAggregateOutputType | null
  }

  export type ClassedEntityMinAggregateOutputType = {
    id: string | null
  }

  export type ClassedEntityMaxAggregateOutputType = {
    id: string | null
  }

  export type ClassedEntityCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type ClassedEntityMinAggregateInputType = {
    id?: true
  }

  export type ClassedEntityMaxAggregateInputType = {
    id?: true
  }

  export type ClassedEntityCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type ClassedEntityAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClassedEntity to aggregate.
     */
    where?: ClassedEntityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassedEntities to fetch.
     */
    orderBy?: ClassedEntityOrderByWithRelationInput | ClassedEntityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassedEntityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassedEntities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassedEntities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClassedEntities
    **/
    _count?: true | ClassedEntityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassedEntityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassedEntityMaxAggregateInputType
  }

  export type GetClassedEntityAggregateType<T extends ClassedEntityAggregateArgs> = {
        [P in keyof T & keyof AggregateClassedEntity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClassedEntity[P]>
      : GetScalarType<T[P], AggregateClassedEntity[P]>
  }




  export type ClassedEntityGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ClassedEntityWhereInput
    orderBy?: ClassedEntityOrderByWithAggregationInput | ClassedEntityOrderByWithAggregationInput[]
    by: ClassedEntityScalarFieldEnum[] | ClassedEntityScalarFieldEnum
    having?: ClassedEntityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassedEntityCountAggregateInputType | true
    _min?: ClassedEntityMinAggregateInputType
    _max?: ClassedEntityMaxAggregateInputType
  }

  export type ClassedEntityGroupByOutputType = {
    id: string
    _count: ClassedEntityCountAggregateOutputType | null
    _min: ClassedEntityMinAggregateOutputType | null
    _max: ClassedEntityMaxAggregateOutputType | null
  }

  type GetClassedEntityGroupByPayload<T extends ClassedEntityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassedEntityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassedEntityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassedEntityGroupByOutputType[P]>
            : GetScalarType<T[P], ClassedEntityGroupByOutputType[P]>
        }
      >
    >


  export type ClassedEntitySelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    classes?: boolean | ClassedEntity$classesArgs<ExtArgs>
    PlayerCharacter?: boolean | ClassedEntity$PlayerCharacterArgs<ExtArgs>
    _count?: boolean | ClassedEntityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classedEntity"]>

  export type ClassedEntitySelectScalar = {
    id?: boolean
  }

  export type ClassedEntityInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    classes?: boolean | ClassedEntity$classesArgs<ExtArgs>
    PlayerCharacter?: boolean | ClassedEntity$PlayerCharacterArgs<ExtArgs>
    _count?: boolean | ClassedEntityCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ClassedEntityPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "ClassedEntity"
    objects: {
      classes: Prisma.$ClassConfigsPayload<ExtArgs>[]
      PlayerCharacter: Prisma.$PlayerCharacterPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetResult<{
      id: string
    }, ExtArgs["result"]["classedEntity"]>
    composites: {}
  }


  type ClassedEntityGetPayload<S extends boolean | null | undefined | ClassedEntityDefaultArgs> = $Result.GetResult<Prisma.$ClassedEntityPayload, S>

  type ClassedEntityCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ClassedEntityFindManyArgs, 'select' | 'include'> & {
      select?: ClassedEntityCountAggregateInputType | true
    }

  export interface ClassedEntityDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClassedEntity'], meta: { name: 'ClassedEntity' } }
    /**
     * Find zero or one ClassedEntity that matches the filter.
     * @param {ClassedEntityFindUniqueArgs} args - Arguments to find a ClassedEntity
     * @example
     * // Get one ClassedEntity
     * const classedEntity = await prisma.classedEntity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ClassedEntityFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ClassedEntityFindUniqueArgs<ExtArgs>>
    ): Prisma__ClassedEntityClient<$Result.GetResult<Prisma.$ClassedEntityPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ClassedEntity that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ClassedEntityFindUniqueOrThrowArgs} args - Arguments to find a ClassedEntity
     * @example
     * // Get one ClassedEntity
     * const classedEntity = await prisma.classedEntity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ClassedEntityFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ClassedEntityFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ClassedEntityClient<$Result.GetResult<Prisma.$ClassedEntityPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ClassedEntity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassedEntityFindFirstArgs} args - Arguments to find a ClassedEntity
     * @example
     * // Get one ClassedEntity
     * const classedEntity = await prisma.classedEntity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ClassedEntityFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ClassedEntityFindFirstArgs<ExtArgs>>
    ): Prisma__ClassedEntityClient<$Result.GetResult<Prisma.$ClassedEntityPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ClassedEntity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassedEntityFindFirstOrThrowArgs} args - Arguments to find a ClassedEntity
     * @example
     * // Get one ClassedEntity
     * const classedEntity = await prisma.classedEntity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ClassedEntityFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ClassedEntityFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ClassedEntityClient<$Result.GetResult<Prisma.$ClassedEntityPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ClassedEntities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassedEntityFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClassedEntities
     * const classedEntities = await prisma.classedEntity.findMany()
     * 
     * // Get first 10 ClassedEntities
     * const classedEntities = await prisma.classedEntity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classedEntityWithIdOnly = await prisma.classedEntity.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ClassedEntityFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ClassedEntityFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassedEntityPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ClassedEntity.
     * @param {ClassedEntityCreateArgs} args - Arguments to create a ClassedEntity.
     * @example
     * // Create one ClassedEntity
     * const ClassedEntity = await prisma.classedEntity.create({
     *   data: {
     *     // ... data to create a ClassedEntity
     *   }
     * })
     * 
    **/
    create<T extends ClassedEntityCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ClassedEntityCreateArgs<ExtArgs>>
    ): Prisma__ClassedEntityClient<$Result.GetResult<Prisma.$ClassedEntityPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ClassedEntities.
     *     @param {ClassedEntityCreateManyArgs} args - Arguments to create many ClassedEntities.
     *     @example
     *     // Create many ClassedEntities
     *     const classedEntity = await prisma.classedEntity.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ClassedEntityCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ClassedEntityCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ClassedEntity.
     * @param {ClassedEntityDeleteArgs} args - Arguments to delete one ClassedEntity.
     * @example
     * // Delete one ClassedEntity
     * const ClassedEntity = await prisma.classedEntity.delete({
     *   where: {
     *     // ... filter to delete one ClassedEntity
     *   }
     * })
     * 
    **/
    delete<T extends ClassedEntityDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ClassedEntityDeleteArgs<ExtArgs>>
    ): Prisma__ClassedEntityClient<$Result.GetResult<Prisma.$ClassedEntityPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ClassedEntity.
     * @param {ClassedEntityUpdateArgs} args - Arguments to update one ClassedEntity.
     * @example
     * // Update one ClassedEntity
     * const classedEntity = await prisma.classedEntity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ClassedEntityUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ClassedEntityUpdateArgs<ExtArgs>>
    ): Prisma__ClassedEntityClient<$Result.GetResult<Prisma.$ClassedEntityPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ClassedEntities.
     * @param {ClassedEntityDeleteManyArgs} args - Arguments to filter ClassedEntities to delete.
     * @example
     * // Delete a few ClassedEntities
     * const { count } = await prisma.classedEntity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ClassedEntityDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ClassedEntityDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClassedEntities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassedEntityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClassedEntities
     * const classedEntity = await prisma.classedEntity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ClassedEntityUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ClassedEntityUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ClassedEntity.
     * @param {ClassedEntityUpsertArgs} args - Arguments to update or create a ClassedEntity.
     * @example
     * // Update or create a ClassedEntity
     * const classedEntity = await prisma.classedEntity.upsert({
     *   create: {
     *     // ... data to create a ClassedEntity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClassedEntity we want to update
     *   }
     * })
    **/
    upsert<T extends ClassedEntityUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ClassedEntityUpsertArgs<ExtArgs>>
    ): Prisma__ClassedEntityClient<$Result.GetResult<Prisma.$ClassedEntityPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ClassedEntities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassedEntityCountArgs} args - Arguments to filter ClassedEntities to count.
     * @example
     * // Count the number of ClassedEntities
     * const count = await prisma.classedEntity.count({
     *   where: {
     *     // ... the filter for the ClassedEntities we want to count
     *   }
     * })
    **/
    count<T extends ClassedEntityCountArgs>(
      args?: Subset<T, ClassedEntityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassedEntityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClassedEntity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassedEntityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClassedEntityAggregateArgs>(args: Subset<T, ClassedEntityAggregateArgs>): Prisma.PrismaPromise<GetClassedEntityAggregateType<T>>

    /**
     * Group by ClassedEntity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassedEntityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClassedEntityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassedEntityGroupByArgs['orderBy'] }
        : { orderBy?: ClassedEntityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClassedEntityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassedEntityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClassedEntity model
   */
  readonly fields: ClassedEntityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClassedEntity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassedEntityClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    classes<T extends ClassedEntity$classesArgs<ExtArgs> = {}>(args?: Subset<T, ClassedEntity$classesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassConfigsPayload<ExtArgs>, T, 'findMany'> | Null>;

    PlayerCharacter<T extends ClassedEntity$PlayerCharacterArgs<ExtArgs> = {}>(args?: Subset<T, ClassedEntity$PlayerCharacterArgs<ExtArgs>>): Prisma__PlayerCharacterClient<$Result.GetResult<Prisma.$PlayerCharacterPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ClassedEntity model
   */ 
  interface ClassedEntityFieldRefs {
    readonly id: FieldRef<"ClassedEntity", 'String'>
  }
    

  // Custom InputTypes

  /**
   * ClassedEntity findUnique
   */
  export type ClassedEntityFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassedEntity
     */
    select?: ClassedEntitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClassedEntityInclude<ExtArgs> | null
    /**
     * Filter, which ClassedEntity to fetch.
     */
    where: ClassedEntityWhereUniqueInput
  }


  /**
   * ClassedEntity findUniqueOrThrow
   */
  export type ClassedEntityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassedEntity
     */
    select?: ClassedEntitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClassedEntityInclude<ExtArgs> | null
    /**
     * Filter, which ClassedEntity to fetch.
     */
    where: ClassedEntityWhereUniqueInput
  }


  /**
   * ClassedEntity findFirst
   */
  export type ClassedEntityFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassedEntity
     */
    select?: ClassedEntitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClassedEntityInclude<ExtArgs> | null
    /**
     * Filter, which ClassedEntity to fetch.
     */
    where?: ClassedEntityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassedEntities to fetch.
     */
    orderBy?: ClassedEntityOrderByWithRelationInput | ClassedEntityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClassedEntities.
     */
    cursor?: ClassedEntityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassedEntities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassedEntities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClassedEntities.
     */
    distinct?: ClassedEntityScalarFieldEnum | ClassedEntityScalarFieldEnum[]
  }


  /**
   * ClassedEntity findFirstOrThrow
   */
  export type ClassedEntityFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassedEntity
     */
    select?: ClassedEntitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClassedEntityInclude<ExtArgs> | null
    /**
     * Filter, which ClassedEntity to fetch.
     */
    where?: ClassedEntityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassedEntities to fetch.
     */
    orderBy?: ClassedEntityOrderByWithRelationInput | ClassedEntityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClassedEntities.
     */
    cursor?: ClassedEntityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassedEntities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassedEntities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClassedEntities.
     */
    distinct?: ClassedEntityScalarFieldEnum | ClassedEntityScalarFieldEnum[]
  }


  /**
   * ClassedEntity findMany
   */
  export type ClassedEntityFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassedEntity
     */
    select?: ClassedEntitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClassedEntityInclude<ExtArgs> | null
    /**
     * Filter, which ClassedEntities to fetch.
     */
    where?: ClassedEntityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassedEntities to fetch.
     */
    orderBy?: ClassedEntityOrderByWithRelationInput | ClassedEntityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClassedEntities.
     */
    cursor?: ClassedEntityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassedEntities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassedEntities.
     */
    skip?: number
    distinct?: ClassedEntityScalarFieldEnum | ClassedEntityScalarFieldEnum[]
  }


  /**
   * ClassedEntity create
   */
  export type ClassedEntityCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassedEntity
     */
    select?: ClassedEntitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClassedEntityInclude<ExtArgs> | null
    /**
     * The data needed to create a ClassedEntity.
     */
    data?: XOR<ClassedEntityCreateInput, ClassedEntityUncheckedCreateInput>
  }


  /**
   * ClassedEntity createMany
   */
  export type ClassedEntityCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClassedEntities.
     */
    data: ClassedEntityCreateManyInput | ClassedEntityCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ClassedEntity update
   */
  export type ClassedEntityUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassedEntity
     */
    select?: ClassedEntitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClassedEntityInclude<ExtArgs> | null
    /**
     * The data needed to update a ClassedEntity.
     */
    data: XOR<ClassedEntityUpdateInput, ClassedEntityUncheckedUpdateInput>
    /**
     * Choose, which ClassedEntity to update.
     */
    where: ClassedEntityWhereUniqueInput
  }


  /**
   * ClassedEntity updateMany
   */
  export type ClassedEntityUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClassedEntities.
     */
    data: XOR<ClassedEntityUpdateManyMutationInput, ClassedEntityUncheckedUpdateManyInput>
    /**
     * Filter which ClassedEntities to update
     */
    where?: ClassedEntityWhereInput
  }


  /**
   * ClassedEntity upsert
   */
  export type ClassedEntityUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassedEntity
     */
    select?: ClassedEntitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClassedEntityInclude<ExtArgs> | null
    /**
     * The filter to search for the ClassedEntity to update in case it exists.
     */
    where: ClassedEntityWhereUniqueInput
    /**
     * In case the ClassedEntity found by the `where` argument doesn't exist, create a new ClassedEntity with this data.
     */
    create: XOR<ClassedEntityCreateInput, ClassedEntityUncheckedCreateInput>
    /**
     * In case the ClassedEntity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassedEntityUpdateInput, ClassedEntityUncheckedUpdateInput>
  }


  /**
   * ClassedEntity delete
   */
  export type ClassedEntityDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassedEntity
     */
    select?: ClassedEntitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClassedEntityInclude<ExtArgs> | null
    /**
     * Filter which ClassedEntity to delete.
     */
    where: ClassedEntityWhereUniqueInput
  }


  /**
   * ClassedEntity deleteMany
   */
  export type ClassedEntityDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClassedEntities to delete
     */
    where?: ClassedEntityWhereInput
  }


  /**
   * ClassedEntity.classes
   */
  export type ClassedEntity$classesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassConfigs
     */
    select?: ClassConfigsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClassConfigsInclude<ExtArgs> | null
    where?: ClassConfigsWhereInput
    orderBy?: ClassConfigsOrderByWithRelationInput | ClassConfigsOrderByWithRelationInput[]
    cursor?: ClassConfigsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassConfigsScalarFieldEnum | ClassConfigsScalarFieldEnum[]
  }


  /**
   * ClassedEntity.PlayerCharacter
   */
  export type ClassedEntity$PlayerCharacterArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerCharacter
     */
    select?: PlayerCharacterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayerCharacterInclude<ExtArgs> | null
    where?: PlayerCharacterWhereInput
  }


  /**
   * ClassedEntity without action
   */
  export type ClassedEntityDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassedEntity
     */
    select?: ClassedEntitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClassedEntityInclude<ExtArgs> | null
  }



  /**
   * Model ClassConfigs
   */

  export type AggregateClassConfigs = {
    _count: ClassConfigsCountAggregateOutputType | null
    _avg: ClassConfigsAvgAggregateOutputType | null
    _sum: ClassConfigsSumAggregateOutputType | null
    _min: ClassConfigsMinAggregateOutputType | null
    _max: ClassConfigsMaxAggregateOutputType | null
  }

  export type ClassConfigsAvgAggregateOutputType = {
    Level: number | null
  }

  export type ClassConfigsSumAggregateOutputType = {
    Level: number | null
  }

  export type ClassConfigsMinAggregateOutputType = {
    id: string | null
    classId: string | null
    Level: number | null
    classedEntityId: string | null
  }

  export type ClassConfigsMaxAggregateOutputType = {
    id: string | null
    classId: string | null
    Level: number | null
    classedEntityId: string | null
  }

  export type ClassConfigsCountAggregateOutputType = {
    id: number
    classId: number
    Level: number
    classedEntityId: number
    _all: number
  }


  export type ClassConfigsAvgAggregateInputType = {
    Level?: true
  }

  export type ClassConfigsSumAggregateInputType = {
    Level?: true
  }

  export type ClassConfigsMinAggregateInputType = {
    id?: true
    classId?: true
    Level?: true
    classedEntityId?: true
  }

  export type ClassConfigsMaxAggregateInputType = {
    id?: true
    classId?: true
    Level?: true
    classedEntityId?: true
  }

  export type ClassConfigsCountAggregateInputType = {
    id?: true
    classId?: true
    Level?: true
    classedEntityId?: true
    _all?: true
  }

  export type ClassConfigsAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClassConfigs to aggregate.
     */
    where?: ClassConfigsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassConfigs to fetch.
     */
    orderBy?: ClassConfigsOrderByWithRelationInput | ClassConfigsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassConfigsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClassConfigs
    **/
    _count?: true | ClassConfigsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClassConfigsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClassConfigsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassConfigsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassConfigsMaxAggregateInputType
  }

  export type GetClassConfigsAggregateType<T extends ClassConfigsAggregateArgs> = {
        [P in keyof T & keyof AggregateClassConfigs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClassConfigs[P]>
      : GetScalarType<T[P], AggregateClassConfigs[P]>
  }




  export type ClassConfigsGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ClassConfigsWhereInput
    orderBy?: ClassConfigsOrderByWithAggregationInput | ClassConfigsOrderByWithAggregationInput[]
    by: ClassConfigsScalarFieldEnum[] | ClassConfigsScalarFieldEnum
    having?: ClassConfigsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassConfigsCountAggregateInputType | true
    _avg?: ClassConfigsAvgAggregateInputType
    _sum?: ClassConfigsSumAggregateInputType
    _min?: ClassConfigsMinAggregateInputType
    _max?: ClassConfigsMaxAggregateInputType
  }

  export type ClassConfigsGroupByOutputType = {
    id: string
    classId: string
    Level: number
    classedEntityId: string
    _count: ClassConfigsCountAggregateOutputType | null
    _avg: ClassConfigsAvgAggregateOutputType | null
    _sum: ClassConfigsSumAggregateOutputType | null
    _min: ClassConfigsMinAggregateOutputType | null
    _max: ClassConfigsMaxAggregateOutputType | null
  }

  type GetClassConfigsGroupByPayload<T extends ClassConfigsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassConfigsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassConfigsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassConfigsGroupByOutputType[P]>
            : GetScalarType<T[P], ClassConfigsGroupByOutputType[P]>
        }
      >
    >


  export type ClassConfigsSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    classId?: boolean
    Level?: boolean
    classedEntityId?: boolean
    ClassedEntity?: boolean | ClassedEntityDefaultArgs<ExtArgs>
    ClassChoice?: boolean | ClassDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classConfigs"]>

  export type ClassConfigsSelectScalar = {
    id?: boolean
    classId?: boolean
    Level?: boolean
    classedEntityId?: boolean
  }

  export type ClassConfigsInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    ClassedEntity?: boolean | ClassedEntityDefaultArgs<ExtArgs>
    ClassChoice?: boolean | ClassDefaultArgs<ExtArgs>
  }


  export type $ClassConfigsPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "ClassConfigs"
    objects: {
      ClassedEntity: Prisma.$ClassedEntityPayload<ExtArgs>
      ClassChoice: Prisma.$ClassPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      id: string
      classId: string
      Level: number
      classedEntityId: string
    }, ExtArgs["result"]["classConfigs"]>
    composites: {}
  }


  type ClassConfigsGetPayload<S extends boolean | null | undefined | ClassConfigsDefaultArgs> = $Result.GetResult<Prisma.$ClassConfigsPayload, S>

  type ClassConfigsCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ClassConfigsFindManyArgs, 'select' | 'include'> & {
      select?: ClassConfigsCountAggregateInputType | true
    }

  export interface ClassConfigsDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClassConfigs'], meta: { name: 'ClassConfigs' } }
    /**
     * Find zero or one ClassConfigs that matches the filter.
     * @param {ClassConfigsFindUniqueArgs} args - Arguments to find a ClassConfigs
     * @example
     * // Get one ClassConfigs
     * const classConfigs = await prisma.classConfigs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ClassConfigsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ClassConfigsFindUniqueArgs<ExtArgs>>
    ): Prisma__ClassConfigsClient<$Result.GetResult<Prisma.$ClassConfigsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ClassConfigs that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ClassConfigsFindUniqueOrThrowArgs} args - Arguments to find a ClassConfigs
     * @example
     * // Get one ClassConfigs
     * const classConfigs = await prisma.classConfigs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ClassConfigsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ClassConfigsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ClassConfigsClient<$Result.GetResult<Prisma.$ClassConfigsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ClassConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassConfigsFindFirstArgs} args - Arguments to find a ClassConfigs
     * @example
     * // Get one ClassConfigs
     * const classConfigs = await prisma.classConfigs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ClassConfigsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ClassConfigsFindFirstArgs<ExtArgs>>
    ): Prisma__ClassConfigsClient<$Result.GetResult<Prisma.$ClassConfigsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ClassConfigs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassConfigsFindFirstOrThrowArgs} args - Arguments to find a ClassConfigs
     * @example
     * // Get one ClassConfigs
     * const classConfigs = await prisma.classConfigs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ClassConfigsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ClassConfigsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ClassConfigsClient<$Result.GetResult<Prisma.$ClassConfigsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ClassConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassConfigsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClassConfigs
     * const classConfigs = await prisma.classConfigs.findMany()
     * 
     * // Get first 10 ClassConfigs
     * const classConfigs = await prisma.classConfigs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classConfigsWithIdOnly = await prisma.classConfigs.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ClassConfigsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ClassConfigsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassConfigsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ClassConfigs.
     * @param {ClassConfigsCreateArgs} args - Arguments to create a ClassConfigs.
     * @example
     * // Create one ClassConfigs
     * const ClassConfigs = await prisma.classConfigs.create({
     *   data: {
     *     // ... data to create a ClassConfigs
     *   }
     * })
     * 
    **/
    create<T extends ClassConfigsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ClassConfigsCreateArgs<ExtArgs>>
    ): Prisma__ClassConfigsClient<$Result.GetResult<Prisma.$ClassConfigsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ClassConfigs.
     *     @param {ClassConfigsCreateManyArgs} args - Arguments to create many ClassConfigs.
     *     @example
     *     // Create many ClassConfigs
     *     const classConfigs = await prisma.classConfigs.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ClassConfigsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ClassConfigsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ClassConfigs.
     * @param {ClassConfigsDeleteArgs} args - Arguments to delete one ClassConfigs.
     * @example
     * // Delete one ClassConfigs
     * const ClassConfigs = await prisma.classConfigs.delete({
     *   where: {
     *     // ... filter to delete one ClassConfigs
     *   }
     * })
     * 
    **/
    delete<T extends ClassConfigsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ClassConfigsDeleteArgs<ExtArgs>>
    ): Prisma__ClassConfigsClient<$Result.GetResult<Prisma.$ClassConfigsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ClassConfigs.
     * @param {ClassConfigsUpdateArgs} args - Arguments to update one ClassConfigs.
     * @example
     * // Update one ClassConfigs
     * const classConfigs = await prisma.classConfigs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ClassConfigsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ClassConfigsUpdateArgs<ExtArgs>>
    ): Prisma__ClassConfigsClient<$Result.GetResult<Prisma.$ClassConfigsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ClassConfigs.
     * @param {ClassConfigsDeleteManyArgs} args - Arguments to filter ClassConfigs to delete.
     * @example
     * // Delete a few ClassConfigs
     * const { count } = await prisma.classConfigs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ClassConfigsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ClassConfigsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClassConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassConfigsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClassConfigs
     * const classConfigs = await prisma.classConfigs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ClassConfigsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ClassConfigsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ClassConfigs.
     * @param {ClassConfigsUpsertArgs} args - Arguments to update or create a ClassConfigs.
     * @example
     * // Update or create a ClassConfigs
     * const classConfigs = await prisma.classConfigs.upsert({
     *   create: {
     *     // ... data to create a ClassConfigs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClassConfigs we want to update
     *   }
     * })
    **/
    upsert<T extends ClassConfigsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ClassConfigsUpsertArgs<ExtArgs>>
    ): Prisma__ClassConfigsClient<$Result.GetResult<Prisma.$ClassConfigsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ClassConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassConfigsCountArgs} args - Arguments to filter ClassConfigs to count.
     * @example
     * // Count the number of ClassConfigs
     * const count = await prisma.classConfigs.count({
     *   where: {
     *     // ... the filter for the ClassConfigs we want to count
     *   }
     * })
    **/
    count<T extends ClassConfigsCountArgs>(
      args?: Subset<T, ClassConfigsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassConfigsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClassConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassConfigsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClassConfigsAggregateArgs>(args: Subset<T, ClassConfigsAggregateArgs>): Prisma.PrismaPromise<GetClassConfigsAggregateType<T>>

    /**
     * Group by ClassConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassConfigsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClassConfigsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassConfigsGroupByArgs['orderBy'] }
        : { orderBy?: ClassConfigsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClassConfigsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassConfigsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClassConfigs model
   */
  readonly fields: ClassConfigsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClassConfigs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassConfigsClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    ClassedEntity<T extends ClassedEntityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassedEntityDefaultArgs<ExtArgs>>): Prisma__ClassedEntityClient<$Result.GetResult<Prisma.$ClassedEntityPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    ClassChoice<T extends ClassDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassDefaultArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ClassConfigs model
   */ 
  interface ClassConfigsFieldRefs {
    readonly id: FieldRef<"ClassConfigs", 'String'>
    readonly classId: FieldRef<"ClassConfigs", 'String'>
    readonly Level: FieldRef<"ClassConfigs", 'Int'>
    readonly classedEntityId: FieldRef<"ClassConfigs", 'String'>
  }
    

  // Custom InputTypes

  /**
   * ClassConfigs findUnique
   */
  export type ClassConfigsFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassConfigs
     */
    select?: ClassConfigsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClassConfigsInclude<ExtArgs> | null
    /**
     * Filter, which ClassConfigs to fetch.
     */
    where: ClassConfigsWhereUniqueInput
  }


  /**
   * ClassConfigs findUniqueOrThrow
   */
  export type ClassConfigsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassConfigs
     */
    select?: ClassConfigsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClassConfigsInclude<ExtArgs> | null
    /**
     * Filter, which ClassConfigs to fetch.
     */
    where: ClassConfigsWhereUniqueInput
  }


  /**
   * ClassConfigs findFirst
   */
  export type ClassConfigsFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassConfigs
     */
    select?: ClassConfigsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClassConfigsInclude<ExtArgs> | null
    /**
     * Filter, which ClassConfigs to fetch.
     */
    where?: ClassConfigsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassConfigs to fetch.
     */
    orderBy?: ClassConfigsOrderByWithRelationInput | ClassConfigsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClassConfigs.
     */
    cursor?: ClassConfigsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClassConfigs.
     */
    distinct?: ClassConfigsScalarFieldEnum | ClassConfigsScalarFieldEnum[]
  }


  /**
   * ClassConfigs findFirstOrThrow
   */
  export type ClassConfigsFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassConfigs
     */
    select?: ClassConfigsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClassConfigsInclude<ExtArgs> | null
    /**
     * Filter, which ClassConfigs to fetch.
     */
    where?: ClassConfigsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassConfigs to fetch.
     */
    orderBy?: ClassConfigsOrderByWithRelationInput | ClassConfigsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClassConfigs.
     */
    cursor?: ClassConfigsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClassConfigs.
     */
    distinct?: ClassConfigsScalarFieldEnum | ClassConfigsScalarFieldEnum[]
  }


  /**
   * ClassConfigs findMany
   */
  export type ClassConfigsFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassConfigs
     */
    select?: ClassConfigsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClassConfigsInclude<ExtArgs> | null
    /**
     * Filter, which ClassConfigs to fetch.
     */
    where?: ClassConfigsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassConfigs to fetch.
     */
    orderBy?: ClassConfigsOrderByWithRelationInput | ClassConfigsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClassConfigs.
     */
    cursor?: ClassConfigsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassConfigs.
     */
    skip?: number
    distinct?: ClassConfigsScalarFieldEnum | ClassConfigsScalarFieldEnum[]
  }


  /**
   * ClassConfigs create
   */
  export type ClassConfigsCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassConfigs
     */
    select?: ClassConfigsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClassConfigsInclude<ExtArgs> | null
    /**
     * The data needed to create a ClassConfigs.
     */
    data: XOR<ClassConfigsCreateInput, ClassConfigsUncheckedCreateInput>
  }


  /**
   * ClassConfigs createMany
   */
  export type ClassConfigsCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClassConfigs.
     */
    data: ClassConfigsCreateManyInput | ClassConfigsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ClassConfigs update
   */
  export type ClassConfigsUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassConfigs
     */
    select?: ClassConfigsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClassConfigsInclude<ExtArgs> | null
    /**
     * The data needed to update a ClassConfigs.
     */
    data: XOR<ClassConfigsUpdateInput, ClassConfigsUncheckedUpdateInput>
    /**
     * Choose, which ClassConfigs to update.
     */
    where: ClassConfigsWhereUniqueInput
  }


  /**
   * ClassConfigs updateMany
   */
  export type ClassConfigsUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClassConfigs.
     */
    data: XOR<ClassConfigsUpdateManyMutationInput, ClassConfigsUncheckedUpdateManyInput>
    /**
     * Filter which ClassConfigs to update
     */
    where?: ClassConfigsWhereInput
  }


  /**
   * ClassConfigs upsert
   */
  export type ClassConfigsUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassConfigs
     */
    select?: ClassConfigsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClassConfigsInclude<ExtArgs> | null
    /**
     * The filter to search for the ClassConfigs to update in case it exists.
     */
    where: ClassConfigsWhereUniqueInput
    /**
     * In case the ClassConfigs found by the `where` argument doesn't exist, create a new ClassConfigs with this data.
     */
    create: XOR<ClassConfigsCreateInput, ClassConfigsUncheckedCreateInput>
    /**
     * In case the ClassConfigs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassConfigsUpdateInput, ClassConfigsUncheckedUpdateInput>
  }


  /**
   * ClassConfigs delete
   */
  export type ClassConfigsDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassConfigs
     */
    select?: ClassConfigsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClassConfigsInclude<ExtArgs> | null
    /**
     * Filter which ClassConfigs to delete.
     */
    where: ClassConfigsWhereUniqueInput
  }


  /**
   * ClassConfigs deleteMany
   */
  export type ClassConfigsDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClassConfigs to delete
     */
    where?: ClassConfigsWhereInput
  }


  /**
   * ClassConfigs without action
   */
  export type ClassConfigsDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassConfigs
     */
    select?: ClassConfigsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClassConfigsInclude<ExtArgs> | null
  }



  /**
   * Model Class
   */

  export type AggregateClass = {
    _count: ClassCountAggregateOutputType | null
    _min: ClassMinAggregateOutputType | null
    _max: ClassMaxAggregateOutputType | null
  }

  export type ClassMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type ClassMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type ClassCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type ClassMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type ClassMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type ClassCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type ClassAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Class to aggregate.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Classes
    **/
    _count?: true | ClassCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassMaxAggregateInputType
  }

  export type GetClassAggregateType<T extends ClassAggregateArgs> = {
        [P in keyof T & keyof AggregateClass]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClass[P]>
      : GetScalarType<T[P], AggregateClass[P]>
  }




  export type ClassGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ClassWhereInput
    orderBy?: ClassOrderByWithAggregationInput | ClassOrderByWithAggregationInput[]
    by: ClassScalarFieldEnum[] | ClassScalarFieldEnum
    having?: ClassScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassCountAggregateInputType | true
    _min?: ClassMinAggregateInputType
    _max?: ClassMaxAggregateInputType
  }

  export type ClassGroupByOutputType = {
    id: string
    name: string
    _count: ClassCountAggregateOutputType | null
    _min: ClassMinAggregateOutputType | null
    _max: ClassMaxAggregateOutputType | null
  }

  type GetClassGroupByPayload<T extends ClassGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassGroupByOutputType[P]>
            : GetScalarType<T[P], ClassGroupByOutputType[P]>
        }
      >
    >


  export type ClassSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    ClassConfigs?: boolean | Class$ClassConfigsArgs<ExtArgs>
    _count?: boolean | ClassCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["class"]>

  export type ClassSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type ClassInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    ClassConfigs?: boolean | Class$ClassConfigsArgs<ExtArgs>
    _count?: boolean | ClassCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ClassPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Class"
    objects: {
      ClassConfigs: Prisma.$ClassConfigsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: string
      name: string
    }, ExtArgs["result"]["class"]>
    composites: {}
  }


  type ClassGetPayload<S extends boolean | null | undefined | ClassDefaultArgs> = $Result.GetResult<Prisma.$ClassPayload, S>

  type ClassCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ClassFindManyArgs, 'select' | 'include'> & {
      select?: ClassCountAggregateInputType | true
    }

  export interface ClassDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Class'], meta: { name: 'Class' } }
    /**
     * Find zero or one Class that matches the filter.
     * @param {ClassFindUniqueArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ClassFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ClassFindUniqueArgs<ExtArgs>>
    ): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Class that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ClassFindUniqueOrThrowArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ClassFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ClassFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Class that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindFirstArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ClassFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ClassFindFirstArgs<ExtArgs>>
    ): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Class that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindFirstOrThrowArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ClassFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ClassFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Classes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Classes
     * const classes = await prisma.class.findMany()
     * 
     * // Get first 10 Classes
     * const classes = await prisma.class.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classWithIdOnly = await prisma.class.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ClassFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ClassFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Class.
     * @param {ClassCreateArgs} args - Arguments to create a Class.
     * @example
     * // Create one Class
     * const Class = await prisma.class.create({
     *   data: {
     *     // ... data to create a Class
     *   }
     * })
     * 
    **/
    create<T extends ClassCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ClassCreateArgs<ExtArgs>>
    ): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Classes.
     *     @param {ClassCreateManyArgs} args - Arguments to create many Classes.
     *     @example
     *     // Create many Classes
     *     const class = await prisma.class.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ClassCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ClassCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Class.
     * @param {ClassDeleteArgs} args - Arguments to delete one Class.
     * @example
     * // Delete one Class
     * const Class = await prisma.class.delete({
     *   where: {
     *     // ... filter to delete one Class
     *   }
     * })
     * 
    **/
    delete<T extends ClassDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ClassDeleteArgs<ExtArgs>>
    ): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Class.
     * @param {ClassUpdateArgs} args - Arguments to update one Class.
     * @example
     * // Update one Class
     * const class = await prisma.class.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ClassUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ClassUpdateArgs<ExtArgs>>
    ): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Classes.
     * @param {ClassDeleteManyArgs} args - Arguments to filter Classes to delete.
     * @example
     * // Delete a few Classes
     * const { count } = await prisma.class.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ClassDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ClassDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Classes
     * const class = await prisma.class.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ClassUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ClassUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Class.
     * @param {ClassUpsertArgs} args - Arguments to update or create a Class.
     * @example
     * // Update or create a Class
     * const class = await prisma.class.upsert({
     *   create: {
     *     // ... data to create a Class
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Class we want to update
     *   }
     * })
    **/
    upsert<T extends ClassUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ClassUpsertArgs<ExtArgs>>
    ): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassCountArgs} args - Arguments to filter Classes to count.
     * @example
     * // Count the number of Classes
     * const count = await prisma.class.count({
     *   where: {
     *     // ... the filter for the Classes we want to count
     *   }
     * })
    **/
    count<T extends ClassCountArgs>(
      args?: Subset<T, ClassCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClassAggregateArgs>(args: Subset<T, ClassAggregateArgs>): Prisma.PrismaPromise<GetClassAggregateType<T>>

    /**
     * Group by Class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClassGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassGroupByArgs['orderBy'] }
        : { orderBy?: ClassGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClassGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Class model
   */
  readonly fields: ClassFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Class.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    ClassConfigs<T extends Class$ClassConfigsArgs<ExtArgs> = {}>(args?: Subset<T, Class$ClassConfigsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassConfigsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Class model
   */ 
  interface ClassFieldRefs {
    readonly id: FieldRef<"Class", 'String'>
    readonly name: FieldRef<"Class", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Class findUnique
   */
  export type ClassFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where: ClassWhereUniqueInput
  }


  /**
   * Class findUniqueOrThrow
   */
  export type ClassFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where: ClassWhereUniqueInput
  }


  /**
   * Class findFirst
   */
  export type ClassFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     */
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }


  /**
   * Class findFirstOrThrow
   */
  export type ClassFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     */
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }


  /**
   * Class findMany
   */
  export type ClassFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Classes to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }


  /**
   * Class create
   */
  export type ClassCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The data needed to create a Class.
     */
    data: XOR<ClassCreateInput, ClassUncheckedCreateInput>
  }


  /**
   * Class createMany
   */
  export type ClassCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Classes.
     */
    data: ClassCreateManyInput | ClassCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Class update
   */
  export type ClassUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The data needed to update a Class.
     */
    data: XOR<ClassUpdateInput, ClassUncheckedUpdateInput>
    /**
     * Choose, which Class to update.
     */
    where: ClassWhereUniqueInput
  }


  /**
   * Class updateMany
   */
  export type ClassUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Classes.
     */
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyInput>
    /**
     * Filter which Classes to update
     */
    where?: ClassWhereInput
  }


  /**
   * Class upsert
   */
  export type ClassUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The filter to search for the Class to update in case it exists.
     */
    where: ClassWhereUniqueInput
    /**
     * In case the Class found by the `where` argument doesn't exist, create a new Class with this data.
     */
    create: XOR<ClassCreateInput, ClassUncheckedCreateInput>
    /**
     * In case the Class was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassUpdateInput, ClassUncheckedUpdateInput>
  }


  /**
   * Class delete
   */
  export type ClassDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter which Class to delete.
     */
    where: ClassWhereUniqueInput
  }


  /**
   * Class deleteMany
   */
  export type ClassDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Classes to delete
     */
    where?: ClassWhereInput
  }


  /**
   * Class.ClassConfigs
   */
  export type Class$ClassConfigsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassConfigs
     */
    select?: ClassConfigsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClassConfigsInclude<ExtArgs> | null
    where?: ClassConfigsWhereInput
    orderBy?: ClassConfigsOrderByWithRelationInput | ClassConfigsOrderByWithRelationInput[]
    cursor?: ClassConfigsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassConfigsScalarFieldEnum | ClassConfigsScalarFieldEnum[]
  }


  /**
   * Class without action
   */
  export type ClassDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClassInclude<ExtArgs> | null
  }



  /**
   * Model GameSession
   */

  export type AggregateGameSession = {
    _count: GameSessionCountAggregateOutputType | null
    _avg: GameSessionAvgAggregateOutputType | null
    _sum: GameSessionSumAggregateOutputType | null
    _min: GameSessionMinAggregateOutputType | null
    _max: GameSessionMaxAggregateOutputType | null
  }

  export type GameSessionAvgAggregateOutputType = {
    duration: number | null
    campaignId: number | null
    questId: number | null
    storyId: number | null
    maxPlayers: number | null
  }

  export type GameSessionSumAggregateOutputType = {
    duration: number | null
    campaignId: number | null
    questId: number | null
    storyId: number | null
    maxPlayers: number | null
  }

  export type GameSessionMinAggregateOutputType = {
    id: string | null
    date: Date | null
    duration: number | null
    gMProfileId: string | null
    description: string | null
    notes: string | null
    state: $Enums.SessionState | null
    campaignId: number | null
    private: boolean | null
    gameSessionId: string | null
    questId: number | null
    storyId: number | null
    maxPlayers: number | null
    platform: string | null
    prework: string | null
  }

  export type GameSessionMaxAggregateOutputType = {
    id: string | null
    date: Date | null
    duration: number | null
    gMProfileId: string | null
    description: string | null
    notes: string | null
    state: $Enums.SessionState | null
    campaignId: number | null
    private: boolean | null
    gameSessionId: string | null
    questId: number | null
    storyId: number | null
    maxPlayers: number | null
    platform: string | null
    prework: string | null
  }

  export type GameSessionCountAggregateOutputType = {
    id: number
    date: number
    duration: number
    gMProfileId: number
    description: number
    notes: number
    state: number
    campaignId: number
    private: number
    gameSessionId: number
    questId: number
    storyId: number
    maxPlayers: number
    platform: number
    prework: number
    _all: number
  }


  export type GameSessionAvgAggregateInputType = {
    duration?: true
    campaignId?: true
    questId?: true
    storyId?: true
    maxPlayers?: true
  }

  export type GameSessionSumAggregateInputType = {
    duration?: true
    campaignId?: true
    questId?: true
    storyId?: true
    maxPlayers?: true
  }

  export type GameSessionMinAggregateInputType = {
    id?: true
    date?: true
    duration?: true
    gMProfileId?: true
    description?: true
    notes?: true
    state?: true
    campaignId?: true
    private?: true
    gameSessionId?: true
    questId?: true
    storyId?: true
    maxPlayers?: true
    platform?: true
    prework?: true
  }

  export type GameSessionMaxAggregateInputType = {
    id?: true
    date?: true
    duration?: true
    gMProfileId?: true
    description?: true
    notes?: true
    state?: true
    campaignId?: true
    private?: true
    gameSessionId?: true
    questId?: true
    storyId?: true
    maxPlayers?: true
    platform?: true
    prework?: true
  }

  export type GameSessionCountAggregateInputType = {
    id?: true
    date?: true
    duration?: true
    gMProfileId?: true
    description?: true
    notes?: true
    state?: true
    campaignId?: true
    private?: true
    gameSessionId?: true
    questId?: true
    storyId?: true
    maxPlayers?: true
    platform?: true
    prework?: true
    _all?: true
  }

  export type GameSessionAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameSession to aggregate.
     */
    where?: GameSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameSessions to fetch.
     */
    orderBy?: GameSessionOrderByWithRelationInput | GameSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GameSessions
    **/
    _count?: true | GameSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameSessionMaxAggregateInputType
  }

  export type GetGameSessionAggregateType<T extends GameSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateGameSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGameSession[P]>
      : GetScalarType<T[P], AggregateGameSession[P]>
  }




  export type GameSessionGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: GameSessionWhereInput
    orderBy?: GameSessionOrderByWithAggregationInput | GameSessionOrderByWithAggregationInput[]
    by: GameSessionScalarFieldEnum[] | GameSessionScalarFieldEnum
    having?: GameSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameSessionCountAggregateInputType | true
    _avg?: GameSessionAvgAggregateInputType
    _sum?: GameSessionSumAggregateInputType
    _min?: GameSessionMinAggregateInputType
    _max?: GameSessionMaxAggregateInputType
  }

  export type GameSessionGroupByOutputType = {
    id: string
    date: Date
    duration: number
    gMProfileId: string
    description: string | null
    notes: string | null
    state: $Enums.SessionState
    campaignId: number
    private: boolean
    gameSessionId: string | null
    questId: number | null
    storyId: number | null
    maxPlayers: number
    platform: string | null
    prework: string | null
    _count: GameSessionCountAggregateOutputType | null
    _avg: GameSessionAvgAggregateOutputType | null
    _sum: GameSessionSumAggregateOutputType | null
    _min: GameSessionMinAggregateOutputType | null
    _max: GameSessionMaxAggregateOutputType | null
  }

  type GetGameSessionGroupByPayload<T extends GameSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameSessionGroupByOutputType[P]>
            : GetScalarType<T[P], GameSessionGroupByOutputType[P]>
        }
      >
    >


  export type GameSessionSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    duration?: boolean
    gMProfileId?: boolean
    description?: boolean
    notes?: boolean
    state?: boolean
    campaignId?: boolean
    private?: boolean
    gameSessionId?: boolean
    questId?: boolean
    storyId?: boolean
    maxPlayers?: boolean
    platform?: boolean
    prework?: boolean
    host?: boolean | GMProfileDefaultArgs<ExtArgs>
    players?: boolean | GameSession$playersArgs<ExtArgs>
    Campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    followUpSession?: boolean | GameSession$followUpSessionArgs<ExtArgs>
    previousSession?: boolean | GameSession$previousSessionArgs<ExtArgs>
    quest?: boolean | GameSession$questArgs<ExtArgs>
    story?: boolean | GameSession$storyArgs<ExtArgs>
    _count?: boolean | GameSessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameSession"]>

  export type GameSessionSelectScalar = {
    id?: boolean
    date?: boolean
    duration?: boolean
    gMProfileId?: boolean
    description?: boolean
    notes?: boolean
    state?: boolean
    campaignId?: boolean
    private?: boolean
    gameSessionId?: boolean
    questId?: boolean
    storyId?: boolean
    maxPlayers?: boolean
    platform?: boolean
    prework?: boolean
  }

  export type GameSessionInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    host?: boolean | GMProfileDefaultArgs<ExtArgs>
    players?: boolean | GameSession$playersArgs<ExtArgs>
    Campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    followUpSession?: boolean | GameSession$followUpSessionArgs<ExtArgs>
    previousSession?: boolean | GameSession$previousSessionArgs<ExtArgs>
    quest?: boolean | GameSession$questArgs<ExtArgs>
    story?: boolean | GameSession$storyArgs<ExtArgs>
    _count?: boolean | GameSessionCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $GameSessionPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "GameSession"
    objects: {
      host: Prisma.$GMProfilePayload<ExtArgs>
      players: Prisma.$PlayerCharacterPayload<ExtArgs>[]
      Campaign: Prisma.$CampaignPayload<ExtArgs>
      followUpSession: Prisma.$GameSessionPayload<ExtArgs> | null
      previousSession: Prisma.$GameSessionPayload<ExtArgs> | null
      quest: Prisma.$QuestPayload<ExtArgs> | null
      story: Prisma.$StoryPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetResult<{
      id: string
      date: Date
      duration: number
      gMProfileId: string
      description: string | null
      notes: string | null
      state: $Enums.SessionState
      campaignId: number
      private: boolean
      gameSessionId: string | null
      questId: number | null
      storyId: number | null
      maxPlayers: number
      platform: string | null
      prework: string | null
    }, ExtArgs["result"]["gameSession"]>
    composites: {}
  }


  type GameSessionGetPayload<S extends boolean | null | undefined | GameSessionDefaultArgs> = $Result.GetResult<Prisma.$GameSessionPayload, S>

  type GameSessionCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<GameSessionFindManyArgs, 'select' | 'include'> & {
      select?: GameSessionCountAggregateInputType | true
    }

  export interface GameSessionDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GameSession'], meta: { name: 'GameSession' } }
    /**
     * Find zero or one GameSession that matches the filter.
     * @param {GameSessionFindUniqueArgs} args - Arguments to find a GameSession
     * @example
     * // Get one GameSession
     * const gameSession = await prisma.gameSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GameSessionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, GameSessionFindUniqueArgs<ExtArgs>>
    ): Prisma__GameSessionClient<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one GameSession that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GameSessionFindUniqueOrThrowArgs} args - Arguments to find a GameSession
     * @example
     * // Get one GameSession
     * const gameSession = await prisma.gameSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GameSessionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GameSessionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GameSessionClient<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first GameSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSessionFindFirstArgs} args - Arguments to find a GameSession
     * @example
     * // Get one GameSession
     * const gameSession = await prisma.gameSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GameSessionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, GameSessionFindFirstArgs<ExtArgs>>
    ): Prisma__GameSessionClient<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first GameSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSessionFindFirstOrThrowArgs} args - Arguments to find a GameSession
     * @example
     * // Get one GameSession
     * const gameSession = await prisma.gameSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GameSessionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GameSessionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GameSessionClient<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more GameSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSessionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GameSessions
     * const gameSessions = await prisma.gameSession.findMany()
     * 
     * // Get first 10 GameSessions
     * const gameSessions = await prisma.gameSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameSessionWithIdOnly = await prisma.gameSession.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GameSessionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GameSessionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a GameSession.
     * @param {GameSessionCreateArgs} args - Arguments to create a GameSession.
     * @example
     * // Create one GameSession
     * const GameSession = await prisma.gameSession.create({
     *   data: {
     *     // ... data to create a GameSession
     *   }
     * })
     * 
    **/
    create<T extends GameSessionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, GameSessionCreateArgs<ExtArgs>>
    ): Prisma__GameSessionClient<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many GameSessions.
     *     @param {GameSessionCreateManyArgs} args - Arguments to create many GameSessions.
     *     @example
     *     // Create many GameSessions
     *     const gameSession = await prisma.gameSession.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GameSessionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GameSessionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GameSession.
     * @param {GameSessionDeleteArgs} args - Arguments to delete one GameSession.
     * @example
     * // Delete one GameSession
     * const GameSession = await prisma.gameSession.delete({
     *   where: {
     *     // ... filter to delete one GameSession
     *   }
     * })
     * 
    **/
    delete<T extends GameSessionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, GameSessionDeleteArgs<ExtArgs>>
    ): Prisma__GameSessionClient<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one GameSession.
     * @param {GameSessionUpdateArgs} args - Arguments to update one GameSession.
     * @example
     * // Update one GameSession
     * const gameSession = await prisma.gameSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GameSessionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, GameSessionUpdateArgs<ExtArgs>>
    ): Prisma__GameSessionClient<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more GameSessions.
     * @param {GameSessionDeleteManyArgs} args - Arguments to filter GameSessions to delete.
     * @example
     * // Delete a few GameSessions
     * const { count } = await prisma.gameSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GameSessionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GameSessionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GameSessions
     * const gameSession = await prisma.gameSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GameSessionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, GameSessionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GameSession.
     * @param {GameSessionUpsertArgs} args - Arguments to update or create a GameSession.
     * @example
     * // Update or create a GameSession
     * const gameSession = await prisma.gameSession.upsert({
     *   create: {
     *     // ... data to create a GameSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GameSession we want to update
     *   }
     * })
    **/
    upsert<T extends GameSessionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, GameSessionUpsertArgs<ExtArgs>>
    ): Prisma__GameSessionClient<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of GameSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSessionCountArgs} args - Arguments to filter GameSessions to count.
     * @example
     * // Count the number of GameSessions
     * const count = await prisma.gameSession.count({
     *   where: {
     *     // ... the filter for the GameSessions we want to count
     *   }
     * })
    **/
    count<T extends GameSessionCountArgs>(
      args?: Subset<T, GameSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GameSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GameSessionAggregateArgs>(args: Subset<T, GameSessionAggregateArgs>): Prisma.PrismaPromise<GetGameSessionAggregateType<T>>

    /**
     * Group by GameSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GameSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameSessionGroupByArgs['orderBy'] }
        : { orderBy?: GameSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GameSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GameSession model
   */
  readonly fields: GameSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GameSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameSessionClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    host<T extends GMProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GMProfileDefaultArgs<ExtArgs>>): Prisma__GMProfileClient<$Result.GetResult<Prisma.$GMProfilePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    players<T extends GameSession$playersArgs<ExtArgs> = {}>(args?: Subset<T, GameSession$playersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerCharacterPayload<ExtArgs>, T, 'findMany'> | Null>;

    Campaign<T extends CampaignDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CampaignDefaultArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    followUpSession<T extends GameSession$followUpSessionArgs<ExtArgs> = {}>(args?: Subset<T, GameSession$followUpSessionArgs<ExtArgs>>): Prisma__GameSessionClient<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    previousSession<T extends GameSession$previousSessionArgs<ExtArgs> = {}>(args?: Subset<T, GameSession$previousSessionArgs<ExtArgs>>): Prisma__GameSessionClient<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    quest<T extends GameSession$questArgs<ExtArgs> = {}>(args?: Subset<T, GameSession$questArgs<ExtArgs>>): Prisma__QuestClient<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    story<T extends GameSession$storyArgs<ExtArgs> = {}>(args?: Subset<T, GameSession$storyArgs<ExtArgs>>): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the GameSession model
   */ 
  interface GameSessionFieldRefs {
    readonly id: FieldRef<"GameSession", 'String'>
    readonly date: FieldRef<"GameSession", 'DateTime'>
    readonly duration: FieldRef<"GameSession", 'Int'>
    readonly gMProfileId: FieldRef<"GameSession", 'String'>
    readonly description: FieldRef<"GameSession", 'String'>
    readonly notes: FieldRef<"GameSession", 'String'>
    readonly state: FieldRef<"GameSession", 'SessionState'>
    readonly campaignId: FieldRef<"GameSession", 'Int'>
    readonly private: FieldRef<"GameSession", 'Boolean'>
    readonly gameSessionId: FieldRef<"GameSession", 'String'>
    readonly questId: FieldRef<"GameSession", 'Int'>
    readonly storyId: FieldRef<"GameSession", 'Int'>
    readonly maxPlayers: FieldRef<"GameSession", 'Int'>
    readonly platform: FieldRef<"GameSession", 'String'>
    readonly prework: FieldRef<"GameSession", 'String'>
  }
    

  // Custom InputTypes

  /**
   * GameSession findUnique
   */
  export type GameSessionFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameSessionInclude<ExtArgs> | null
    /**
     * Filter, which GameSession to fetch.
     */
    where: GameSessionWhereUniqueInput
  }


  /**
   * GameSession findUniqueOrThrow
   */
  export type GameSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameSessionInclude<ExtArgs> | null
    /**
     * Filter, which GameSession to fetch.
     */
    where: GameSessionWhereUniqueInput
  }


  /**
   * GameSession findFirst
   */
  export type GameSessionFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameSessionInclude<ExtArgs> | null
    /**
     * Filter, which GameSession to fetch.
     */
    where?: GameSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameSessions to fetch.
     */
    orderBy?: GameSessionOrderByWithRelationInput | GameSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameSessions.
     */
    cursor?: GameSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameSessions.
     */
    distinct?: GameSessionScalarFieldEnum | GameSessionScalarFieldEnum[]
  }


  /**
   * GameSession findFirstOrThrow
   */
  export type GameSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameSessionInclude<ExtArgs> | null
    /**
     * Filter, which GameSession to fetch.
     */
    where?: GameSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameSessions to fetch.
     */
    orderBy?: GameSessionOrderByWithRelationInput | GameSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameSessions.
     */
    cursor?: GameSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameSessions.
     */
    distinct?: GameSessionScalarFieldEnum | GameSessionScalarFieldEnum[]
  }


  /**
   * GameSession findMany
   */
  export type GameSessionFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameSessionInclude<ExtArgs> | null
    /**
     * Filter, which GameSessions to fetch.
     */
    where?: GameSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameSessions to fetch.
     */
    orderBy?: GameSessionOrderByWithRelationInput | GameSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GameSessions.
     */
    cursor?: GameSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameSessions.
     */
    skip?: number
    distinct?: GameSessionScalarFieldEnum | GameSessionScalarFieldEnum[]
  }


  /**
   * GameSession create
   */
  export type GameSessionCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a GameSession.
     */
    data: XOR<GameSessionCreateInput, GameSessionUncheckedCreateInput>
  }


  /**
   * GameSession createMany
   */
  export type GameSessionCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GameSessions.
     */
    data: GameSessionCreateManyInput | GameSessionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * GameSession update
   */
  export type GameSessionUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a GameSession.
     */
    data: XOR<GameSessionUpdateInput, GameSessionUncheckedUpdateInput>
    /**
     * Choose, which GameSession to update.
     */
    where: GameSessionWhereUniqueInput
  }


  /**
   * GameSession updateMany
   */
  export type GameSessionUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GameSessions.
     */
    data: XOR<GameSessionUpdateManyMutationInput, GameSessionUncheckedUpdateManyInput>
    /**
     * Filter which GameSessions to update
     */
    where?: GameSessionWhereInput
  }


  /**
   * GameSession upsert
   */
  export type GameSessionUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the GameSession to update in case it exists.
     */
    where: GameSessionWhereUniqueInput
    /**
     * In case the GameSession found by the `where` argument doesn't exist, create a new GameSession with this data.
     */
    create: XOR<GameSessionCreateInput, GameSessionUncheckedCreateInput>
    /**
     * In case the GameSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameSessionUpdateInput, GameSessionUncheckedUpdateInput>
  }


  /**
   * GameSession delete
   */
  export type GameSessionDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameSessionInclude<ExtArgs> | null
    /**
     * Filter which GameSession to delete.
     */
    where: GameSessionWhereUniqueInput
  }


  /**
   * GameSession deleteMany
   */
  export type GameSessionDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameSessions to delete
     */
    where?: GameSessionWhereInput
  }


  /**
   * GameSession.players
   */
  export type GameSession$playersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerCharacter
     */
    select?: PlayerCharacterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayerCharacterInclude<ExtArgs> | null
    where?: PlayerCharacterWhereInput
    orderBy?: PlayerCharacterOrderByWithRelationInput | PlayerCharacterOrderByWithRelationInput[]
    cursor?: PlayerCharacterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayerCharacterScalarFieldEnum | PlayerCharacterScalarFieldEnum[]
  }


  /**
   * GameSession.followUpSession
   */
  export type GameSession$followUpSessionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameSessionInclude<ExtArgs> | null
    where?: GameSessionWhereInput
  }


  /**
   * GameSession.previousSession
   */
  export type GameSession$previousSessionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameSessionInclude<ExtArgs> | null
    where?: GameSessionWhereInput
  }


  /**
   * GameSession.quest
   */
  export type GameSession$questArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestInclude<ExtArgs> | null
    where?: QuestWhereInput
  }


  /**
   * GameSession.story
   */
  export type GameSession$storyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoryInclude<ExtArgs> | null
    where?: StoryWhereInput
  }


  /**
   * GameSession without action
   */
  export type GameSessionDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameSessionInclude<ExtArgs> | null
  }



  /**
   * Model InfoSession
   */

  export type AggregateInfoSession = {
    _count: InfoSessionCountAggregateOutputType | null
    _avg: InfoSessionAvgAggregateOutputType | null
    _sum: InfoSessionSumAggregateOutputType | null
    _min: InfoSessionMinAggregateOutputType | null
    _max: InfoSessionMaxAggregateOutputType | null
  }

  export type InfoSessionAvgAggregateOutputType = {
    duration: number | null
    campaignId: number | null
  }

  export type InfoSessionSumAggregateOutputType = {
    duration: number | null
    campaignId: number | null
  }

  export type InfoSessionMinAggregateOutputType = {
    id: string | null
    date: Date | null
    duration: number | null
    gMProfileId: string | null
    description: string | null
    private: boolean | null
    campaignId: number | null
  }

  export type InfoSessionMaxAggregateOutputType = {
    id: string | null
    date: Date | null
    duration: number | null
    gMProfileId: string | null
    description: string | null
    private: boolean | null
    campaignId: number | null
  }

  export type InfoSessionCountAggregateOutputType = {
    id: number
    date: number
    duration: number
    gMProfileId: number
    description: number
    private: number
    campaignId: number
    _all: number
  }


  export type InfoSessionAvgAggregateInputType = {
    duration?: true
    campaignId?: true
  }

  export type InfoSessionSumAggregateInputType = {
    duration?: true
    campaignId?: true
  }

  export type InfoSessionMinAggregateInputType = {
    id?: true
    date?: true
    duration?: true
    gMProfileId?: true
    description?: true
    private?: true
    campaignId?: true
  }

  export type InfoSessionMaxAggregateInputType = {
    id?: true
    date?: true
    duration?: true
    gMProfileId?: true
    description?: true
    private?: true
    campaignId?: true
  }

  export type InfoSessionCountAggregateInputType = {
    id?: true
    date?: true
    duration?: true
    gMProfileId?: true
    description?: true
    private?: true
    campaignId?: true
    _all?: true
  }

  export type InfoSessionAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which InfoSession to aggregate.
     */
    where?: InfoSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InfoSessions to fetch.
     */
    orderBy?: InfoSessionOrderByWithRelationInput | InfoSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InfoSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InfoSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InfoSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InfoSessions
    **/
    _count?: true | InfoSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InfoSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InfoSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InfoSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InfoSessionMaxAggregateInputType
  }

  export type GetInfoSessionAggregateType<T extends InfoSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateInfoSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInfoSession[P]>
      : GetScalarType<T[P], AggregateInfoSession[P]>
  }




  export type InfoSessionGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: InfoSessionWhereInput
    orderBy?: InfoSessionOrderByWithAggregationInput | InfoSessionOrderByWithAggregationInput[]
    by: InfoSessionScalarFieldEnum[] | InfoSessionScalarFieldEnum
    having?: InfoSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InfoSessionCountAggregateInputType | true
    _avg?: InfoSessionAvgAggregateInputType
    _sum?: InfoSessionSumAggregateInputType
    _min?: InfoSessionMinAggregateInputType
    _max?: InfoSessionMaxAggregateInputType
  }

  export type InfoSessionGroupByOutputType = {
    id: string
    date: Date
    duration: number
    gMProfileId: string
    description: string | null
    private: boolean
    campaignId: number | null
    _count: InfoSessionCountAggregateOutputType | null
    _avg: InfoSessionAvgAggregateOutputType | null
    _sum: InfoSessionSumAggregateOutputType | null
    _min: InfoSessionMinAggregateOutputType | null
    _max: InfoSessionMaxAggregateOutputType | null
  }

  type GetInfoSessionGroupByPayload<T extends InfoSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InfoSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InfoSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InfoSessionGroupByOutputType[P]>
            : GetScalarType<T[P], InfoSessionGroupByOutputType[P]>
        }
      >
    >


  export type InfoSessionSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    duration?: boolean
    gMProfileId?: boolean
    description?: boolean
    private?: boolean
    campaignId?: boolean
    host?: boolean | GMProfileDefaultArgs<ExtArgs>
    players?: boolean | InfoSession$playersArgs<ExtArgs>
    Campaign?: boolean | InfoSession$CampaignArgs<ExtArgs>
    _count?: boolean | InfoSessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["infoSession"]>

  export type InfoSessionSelectScalar = {
    id?: boolean
    date?: boolean
    duration?: boolean
    gMProfileId?: boolean
    description?: boolean
    private?: boolean
    campaignId?: boolean
  }

  export type InfoSessionInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    host?: boolean | GMProfileDefaultArgs<ExtArgs>
    players?: boolean | InfoSession$playersArgs<ExtArgs>
    Campaign?: boolean | InfoSession$CampaignArgs<ExtArgs>
    _count?: boolean | InfoSessionCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $InfoSessionPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "InfoSession"
    objects: {
      host: Prisma.$GMProfilePayload<ExtArgs>
      players: Prisma.$UserPayload<ExtArgs>[]
      Campaign: Prisma.$CampaignPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetResult<{
      id: string
      date: Date
      duration: number
      gMProfileId: string
      description: string | null
      private: boolean
      campaignId: number | null
    }, ExtArgs["result"]["infoSession"]>
    composites: {}
  }


  type InfoSessionGetPayload<S extends boolean | null | undefined | InfoSessionDefaultArgs> = $Result.GetResult<Prisma.$InfoSessionPayload, S>

  type InfoSessionCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<InfoSessionFindManyArgs, 'select' | 'include'> & {
      select?: InfoSessionCountAggregateInputType | true
    }

  export interface InfoSessionDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InfoSession'], meta: { name: 'InfoSession' } }
    /**
     * Find zero or one InfoSession that matches the filter.
     * @param {InfoSessionFindUniqueArgs} args - Arguments to find a InfoSession
     * @example
     * // Get one InfoSession
     * const infoSession = await prisma.infoSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends InfoSessionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, InfoSessionFindUniqueArgs<ExtArgs>>
    ): Prisma__InfoSessionClient<$Result.GetResult<Prisma.$InfoSessionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one InfoSession that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {InfoSessionFindUniqueOrThrowArgs} args - Arguments to find a InfoSession
     * @example
     * // Get one InfoSession
     * const infoSession = await prisma.infoSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends InfoSessionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, InfoSessionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__InfoSessionClient<$Result.GetResult<Prisma.$InfoSessionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first InfoSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfoSessionFindFirstArgs} args - Arguments to find a InfoSession
     * @example
     * // Get one InfoSession
     * const infoSession = await prisma.infoSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends InfoSessionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, InfoSessionFindFirstArgs<ExtArgs>>
    ): Prisma__InfoSessionClient<$Result.GetResult<Prisma.$InfoSessionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first InfoSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfoSessionFindFirstOrThrowArgs} args - Arguments to find a InfoSession
     * @example
     * // Get one InfoSession
     * const infoSession = await prisma.infoSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends InfoSessionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, InfoSessionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__InfoSessionClient<$Result.GetResult<Prisma.$InfoSessionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more InfoSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfoSessionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InfoSessions
     * const infoSessions = await prisma.infoSession.findMany()
     * 
     * // Get first 10 InfoSessions
     * const infoSessions = await prisma.infoSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const infoSessionWithIdOnly = await prisma.infoSession.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends InfoSessionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InfoSessionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InfoSessionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a InfoSession.
     * @param {InfoSessionCreateArgs} args - Arguments to create a InfoSession.
     * @example
     * // Create one InfoSession
     * const InfoSession = await prisma.infoSession.create({
     *   data: {
     *     // ... data to create a InfoSession
     *   }
     * })
     * 
    **/
    create<T extends InfoSessionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, InfoSessionCreateArgs<ExtArgs>>
    ): Prisma__InfoSessionClient<$Result.GetResult<Prisma.$InfoSessionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many InfoSessions.
     *     @param {InfoSessionCreateManyArgs} args - Arguments to create many InfoSessions.
     *     @example
     *     // Create many InfoSessions
     *     const infoSession = await prisma.infoSession.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends InfoSessionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InfoSessionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a InfoSession.
     * @param {InfoSessionDeleteArgs} args - Arguments to delete one InfoSession.
     * @example
     * // Delete one InfoSession
     * const InfoSession = await prisma.infoSession.delete({
     *   where: {
     *     // ... filter to delete one InfoSession
     *   }
     * })
     * 
    **/
    delete<T extends InfoSessionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, InfoSessionDeleteArgs<ExtArgs>>
    ): Prisma__InfoSessionClient<$Result.GetResult<Prisma.$InfoSessionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one InfoSession.
     * @param {InfoSessionUpdateArgs} args - Arguments to update one InfoSession.
     * @example
     * // Update one InfoSession
     * const infoSession = await prisma.infoSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends InfoSessionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, InfoSessionUpdateArgs<ExtArgs>>
    ): Prisma__InfoSessionClient<$Result.GetResult<Prisma.$InfoSessionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more InfoSessions.
     * @param {InfoSessionDeleteManyArgs} args - Arguments to filter InfoSessions to delete.
     * @example
     * // Delete a few InfoSessions
     * const { count } = await prisma.infoSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends InfoSessionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InfoSessionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InfoSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfoSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InfoSessions
     * const infoSession = await prisma.infoSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends InfoSessionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, InfoSessionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one InfoSession.
     * @param {InfoSessionUpsertArgs} args - Arguments to update or create a InfoSession.
     * @example
     * // Update or create a InfoSession
     * const infoSession = await prisma.infoSession.upsert({
     *   create: {
     *     // ... data to create a InfoSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InfoSession we want to update
     *   }
     * })
    **/
    upsert<T extends InfoSessionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, InfoSessionUpsertArgs<ExtArgs>>
    ): Prisma__InfoSessionClient<$Result.GetResult<Prisma.$InfoSessionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of InfoSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfoSessionCountArgs} args - Arguments to filter InfoSessions to count.
     * @example
     * // Count the number of InfoSessions
     * const count = await prisma.infoSession.count({
     *   where: {
     *     // ... the filter for the InfoSessions we want to count
     *   }
     * })
    **/
    count<T extends InfoSessionCountArgs>(
      args?: Subset<T, InfoSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InfoSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InfoSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfoSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InfoSessionAggregateArgs>(args: Subset<T, InfoSessionAggregateArgs>): Prisma.PrismaPromise<GetInfoSessionAggregateType<T>>

    /**
     * Group by InfoSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfoSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InfoSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InfoSessionGroupByArgs['orderBy'] }
        : { orderBy?: InfoSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InfoSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInfoSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InfoSession model
   */
  readonly fields: InfoSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InfoSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InfoSessionClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    host<T extends GMProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GMProfileDefaultArgs<ExtArgs>>): Prisma__GMProfileClient<$Result.GetResult<Prisma.$GMProfilePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    players<T extends InfoSession$playersArgs<ExtArgs> = {}>(args?: Subset<T, InfoSession$playersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'> | Null>;

    Campaign<T extends InfoSession$CampaignArgs<ExtArgs> = {}>(args?: Subset<T, InfoSession$CampaignArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the InfoSession model
   */ 
  interface InfoSessionFieldRefs {
    readonly id: FieldRef<"InfoSession", 'String'>
    readonly date: FieldRef<"InfoSession", 'DateTime'>
    readonly duration: FieldRef<"InfoSession", 'Int'>
    readonly gMProfileId: FieldRef<"InfoSession", 'String'>
    readonly description: FieldRef<"InfoSession", 'String'>
    readonly private: FieldRef<"InfoSession", 'Boolean'>
    readonly campaignId: FieldRef<"InfoSession", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * InfoSession findUnique
   */
  export type InfoSessionFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfoSession
     */
    select?: InfoSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InfoSessionInclude<ExtArgs> | null
    /**
     * Filter, which InfoSession to fetch.
     */
    where: InfoSessionWhereUniqueInput
  }


  /**
   * InfoSession findUniqueOrThrow
   */
  export type InfoSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfoSession
     */
    select?: InfoSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InfoSessionInclude<ExtArgs> | null
    /**
     * Filter, which InfoSession to fetch.
     */
    where: InfoSessionWhereUniqueInput
  }


  /**
   * InfoSession findFirst
   */
  export type InfoSessionFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfoSession
     */
    select?: InfoSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InfoSessionInclude<ExtArgs> | null
    /**
     * Filter, which InfoSession to fetch.
     */
    where?: InfoSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InfoSessions to fetch.
     */
    orderBy?: InfoSessionOrderByWithRelationInput | InfoSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InfoSessions.
     */
    cursor?: InfoSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InfoSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InfoSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InfoSessions.
     */
    distinct?: InfoSessionScalarFieldEnum | InfoSessionScalarFieldEnum[]
  }


  /**
   * InfoSession findFirstOrThrow
   */
  export type InfoSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfoSession
     */
    select?: InfoSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InfoSessionInclude<ExtArgs> | null
    /**
     * Filter, which InfoSession to fetch.
     */
    where?: InfoSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InfoSessions to fetch.
     */
    orderBy?: InfoSessionOrderByWithRelationInput | InfoSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InfoSessions.
     */
    cursor?: InfoSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InfoSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InfoSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InfoSessions.
     */
    distinct?: InfoSessionScalarFieldEnum | InfoSessionScalarFieldEnum[]
  }


  /**
   * InfoSession findMany
   */
  export type InfoSessionFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfoSession
     */
    select?: InfoSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InfoSessionInclude<ExtArgs> | null
    /**
     * Filter, which InfoSessions to fetch.
     */
    where?: InfoSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InfoSessions to fetch.
     */
    orderBy?: InfoSessionOrderByWithRelationInput | InfoSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InfoSessions.
     */
    cursor?: InfoSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InfoSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InfoSessions.
     */
    skip?: number
    distinct?: InfoSessionScalarFieldEnum | InfoSessionScalarFieldEnum[]
  }


  /**
   * InfoSession create
   */
  export type InfoSessionCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfoSession
     */
    select?: InfoSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InfoSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a InfoSession.
     */
    data: XOR<InfoSessionCreateInput, InfoSessionUncheckedCreateInput>
  }


  /**
   * InfoSession createMany
   */
  export type InfoSessionCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InfoSessions.
     */
    data: InfoSessionCreateManyInput | InfoSessionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * InfoSession update
   */
  export type InfoSessionUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfoSession
     */
    select?: InfoSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InfoSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a InfoSession.
     */
    data: XOR<InfoSessionUpdateInput, InfoSessionUncheckedUpdateInput>
    /**
     * Choose, which InfoSession to update.
     */
    where: InfoSessionWhereUniqueInput
  }


  /**
   * InfoSession updateMany
   */
  export type InfoSessionUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InfoSessions.
     */
    data: XOR<InfoSessionUpdateManyMutationInput, InfoSessionUncheckedUpdateManyInput>
    /**
     * Filter which InfoSessions to update
     */
    where?: InfoSessionWhereInput
  }


  /**
   * InfoSession upsert
   */
  export type InfoSessionUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfoSession
     */
    select?: InfoSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InfoSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the InfoSession to update in case it exists.
     */
    where: InfoSessionWhereUniqueInput
    /**
     * In case the InfoSession found by the `where` argument doesn't exist, create a new InfoSession with this data.
     */
    create: XOR<InfoSessionCreateInput, InfoSessionUncheckedCreateInput>
    /**
     * In case the InfoSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InfoSessionUpdateInput, InfoSessionUncheckedUpdateInput>
  }


  /**
   * InfoSession delete
   */
  export type InfoSessionDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfoSession
     */
    select?: InfoSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InfoSessionInclude<ExtArgs> | null
    /**
     * Filter which InfoSession to delete.
     */
    where: InfoSessionWhereUniqueInput
  }


  /**
   * InfoSession deleteMany
   */
  export type InfoSessionDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which InfoSessions to delete
     */
    where?: InfoSessionWhereInput
  }


  /**
   * InfoSession.players
   */
  export type InfoSession$playersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * InfoSession.Campaign
   */
  export type InfoSession$CampaignArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CampaignInclude<ExtArgs> | null
    where?: CampaignWhereInput
  }


  /**
   * InfoSession without action
   */
  export type InfoSessionDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfoSession
     */
    select?: InfoSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InfoSessionInclude<ExtArgs> | null
  }



  /**
   * Model Campaign
   */

  export type AggregateCampaign = {
    _count: CampaignCountAggregateOutputType | null
    _avg: CampaignAvgAggregateOutputType | null
    _sum: CampaignSumAggregateOutputType | null
    _min: CampaignMinAggregateOutputType | null
    _max: CampaignMaxAggregateOutputType | null
  }

  export type CampaignAvgAggregateOutputType = {
    id: number | null
  }

  export type CampaignSumAggregateOutputType = {
    id: number | null
  }

  export type CampaignMinAggregateOutputType = {
    id: number | null
    description: string | null
    name: string | null
  }

  export type CampaignMaxAggregateOutputType = {
    id: number | null
    description: string | null
    name: string | null
  }

  export type CampaignCountAggregateOutputType = {
    id: number
    description: number
    name: number
    _all: number
  }


  export type CampaignAvgAggregateInputType = {
    id?: true
  }

  export type CampaignSumAggregateInputType = {
    id?: true
  }

  export type CampaignMinAggregateInputType = {
    id?: true
    description?: true
    name?: true
  }

  export type CampaignMaxAggregateInputType = {
    id?: true
    description?: true
    name?: true
  }

  export type CampaignCountAggregateInputType = {
    id?: true
    description?: true
    name?: true
    _all?: true
  }

  export type CampaignAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campaign to aggregate.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Campaigns
    **/
    _count?: true | CampaignCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CampaignAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CampaignSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CampaignMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CampaignMaxAggregateInputType
  }

  export type GetCampaignAggregateType<T extends CampaignAggregateArgs> = {
        [P in keyof T & keyof AggregateCampaign]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCampaign[P]>
      : GetScalarType<T[P], AggregateCampaign[P]>
  }




  export type CampaignGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: CampaignWhereInput
    orderBy?: CampaignOrderByWithAggregationInput | CampaignOrderByWithAggregationInput[]
    by: CampaignScalarFieldEnum[] | CampaignScalarFieldEnum
    having?: CampaignScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CampaignCountAggregateInputType | true
    _avg?: CampaignAvgAggregateInputType
    _sum?: CampaignSumAggregateInputType
    _min?: CampaignMinAggregateInputType
    _max?: CampaignMaxAggregateInputType
  }

  export type CampaignGroupByOutputType = {
    id: number
    description: string | null
    name: string
    _count: CampaignCountAggregateOutputType | null
    _avg: CampaignAvgAggregateOutputType | null
    _sum: CampaignSumAggregateOutputType | null
    _min: CampaignMinAggregateOutputType | null
    _max: CampaignMaxAggregateOutputType | null
  }

  type GetCampaignGroupByPayload<T extends CampaignGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CampaignGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CampaignGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CampaignGroupByOutputType[P]>
            : GetScalarType<T[P], CampaignGroupByOutputType[P]>
        }
      >
    >


  export type CampaignSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    name?: boolean
    gms?: boolean | Campaign$gmsArgs<ExtArgs>
    players?: boolean | Campaign$playersArgs<ExtArgs>
    sessions?: boolean | Campaign$sessionsArgs<ExtArgs>
    infoSessions?: boolean | Campaign$infoSessionsArgs<ExtArgs>
    members?: boolean | Campaign$membersArgs<ExtArgs>
    _count?: boolean | CampaignCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectScalar = {
    id?: boolean
    description?: boolean
    name?: boolean
  }

  export type CampaignInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    gms?: boolean | Campaign$gmsArgs<ExtArgs>
    players?: boolean | Campaign$playersArgs<ExtArgs>
    sessions?: boolean | Campaign$sessionsArgs<ExtArgs>
    infoSessions?: boolean | Campaign$infoSessionsArgs<ExtArgs>
    members?: boolean | Campaign$membersArgs<ExtArgs>
    _count?: boolean | CampaignCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CampaignPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Campaign"
    objects: {
      gms: Prisma.$GMProfilePayload<ExtArgs>[]
      players: Prisma.$PlayerCharacterPayload<ExtArgs>[]
      sessions: Prisma.$GameSessionPayload<ExtArgs>[]
      infoSessions: Prisma.$InfoSessionPayload<ExtArgs>[]
      members: Prisma.$PlayerProfilePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: number
      description: string | null
      name: string
    }, ExtArgs["result"]["campaign"]>
    composites: {}
  }


  type CampaignGetPayload<S extends boolean | null | undefined | CampaignDefaultArgs> = $Result.GetResult<Prisma.$CampaignPayload, S>

  type CampaignCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<CampaignFindManyArgs, 'select' | 'include'> & {
      select?: CampaignCountAggregateInputType | true
    }

  export interface CampaignDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Campaign'], meta: { name: 'Campaign' } }
    /**
     * Find zero or one Campaign that matches the filter.
     * @param {CampaignFindUniqueArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CampaignFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CampaignFindUniqueArgs<ExtArgs>>
    ): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Campaign that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CampaignFindUniqueOrThrowArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CampaignFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CampaignFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Campaign that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindFirstArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CampaignFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CampaignFindFirstArgs<ExtArgs>>
    ): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Campaign that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindFirstOrThrowArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CampaignFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CampaignFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Campaigns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Campaigns
     * const campaigns = await prisma.campaign.findMany()
     * 
     * // Get first 10 Campaigns
     * const campaigns = await prisma.campaign.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const campaignWithIdOnly = await prisma.campaign.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CampaignFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CampaignFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Campaign.
     * @param {CampaignCreateArgs} args - Arguments to create a Campaign.
     * @example
     * // Create one Campaign
     * const Campaign = await prisma.campaign.create({
     *   data: {
     *     // ... data to create a Campaign
     *   }
     * })
     * 
    **/
    create<T extends CampaignCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CampaignCreateArgs<ExtArgs>>
    ): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Campaigns.
     *     @param {CampaignCreateManyArgs} args - Arguments to create many Campaigns.
     *     @example
     *     // Create many Campaigns
     *     const campaign = await prisma.campaign.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CampaignCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CampaignCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Campaign.
     * @param {CampaignDeleteArgs} args - Arguments to delete one Campaign.
     * @example
     * // Delete one Campaign
     * const Campaign = await prisma.campaign.delete({
     *   where: {
     *     // ... filter to delete one Campaign
     *   }
     * })
     * 
    **/
    delete<T extends CampaignDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CampaignDeleteArgs<ExtArgs>>
    ): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Campaign.
     * @param {CampaignUpdateArgs} args - Arguments to update one Campaign.
     * @example
     * // Update one Campaign
     * const campaign = await prisma.campaign.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CampaignUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CampaignUpdateArgs<ExtArgs>>
    ): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Campaigns.
     * @param {CampaignDeleteManyArgs} args - Arguments to filter Campaigns to delete.
     * @example
     * // Delete a few Campaigns
     * const { count } = await prisma.campaign.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CampaignDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CampaignDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Campaigns
     * const campaign = await prisma.campaign.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CampaignUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CampaignUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Campaign.
     * @param {CampaignUpsertArgs} args - Arguments to update or create a Campaign.
     * @example
     * // Update or create a Campaign
     * const campaign = await prisma.campaign.upsert({
     *   create: {
     *     // ... data to create a Campaign
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Campaign we want to update
     *   }
     * })
    **/
    upsert<T extends CampaignUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CampaignUpsertArgs<ExtArgs>>
    ): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignCountArgs} args - Arguments to filter Campaigns to count.
     * @example
     * // Count the number of Campaigns
     * const count = await prisma.campaign.count({
     *   where: {
     *     // ... the filter for the Campaigns we want to count
     *   }
     * })
    **/
    count<T extends CampaignCountArgs>(
      args?: Subset<T, CampaignCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CampaignCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Campaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CampaignAggregateArgs>(args: Subset<T, CampaignAggregateArgs>): Prisma.PrismaPromise<GetCampaignAggregateType<T>>

    /**
     * Group by Campaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CampaignGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CampaignGroupByArgs['orderBy'] }
        : { orderBy?: CampaignGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CampaignGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampaignGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Campaign model
   */
  readonly fields: CampaignFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Campaign.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CampaignClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    gms<T extends Campaign$gmsArgs<ExtArgs> = {}>(args?: Subset<T, Campaign$gmsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GMProfilePayload<ExtArgs>, T, 'findMany'> | Null>;

    players<T extends Campaign$playersArgs<ExtArgs> = {}>(args?: Subset<T, Campaign$playersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerCharacterPayload<ExtArgs>, T, 'findMany'> | Null>;

    sessions<T extends Campaign$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, Campaign$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, 'findMany'> | Null>;

    infoSessions<T extends Campaign$infoSessionsArgs<ExtArgs> = {}>(args?: Subset<T, Campaign$infoSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InfoSessionPayload<ExtArgs>, T, 'findMany'> | Null>;

    members<T extends Campaign$membersArgs<ExtArgs> = {}>(args?: Subset<T, Campaign$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerProfilePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Campaign model
   */ 
  interface CampaignFieldRefs {
    readonly id: FieldRef<"Campaign", 'Int'>
    readonly description: FieldRef<"Campaign", 'String'>
    readonly name: FieldRef<"Campaign", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Campaign findUnique
   */
  export type CampaignFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where: CampaignWhereUniqueInput
  }


  /**
   * Campaign findUniqueOrThrow
   */
  export type CampaignFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where: CampaignWhereUniqueInput
  }


  /**
   * Campaign findFirst
   */
  export type CampaignFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }


  /**
   * Campaign findFirstOrThrow
   */
  export type CampaignFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }


  /**
   * Campaign findMany
   */
  export type CampaignFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaigns to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }


  /**
   * Campaign create
   */
  export type CampaignCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The data needed to create a Campaign.
     */
    data: XOR<CampaignCreateInput, CampaignUncheckedCreateInput>
  }


  /**
   * Campaign createMany
   */
  export type CampaignCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Campaigns.
     */
    data: CampaignCreateManyInput | CampaignCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Campaign update
   */
  export type CampaignUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The data needed to update a Campaign.
     */
    data: XOR<CampaignUpdateInput, CampaignUncheckedUpdateInput>
    /**
     * Choose, which Campaign to update.
     */
    where: CampaignWhereUniqueInput
  }


  /**
   * Campaign updateMany
   */
  export type CampaignUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Campaigns.
     */
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyInput>
    /**
     * Filter which Campaigns to update
     */
    where?: CampaignWhereInput
  }


  /**
   * Campaign upsert
   */
  export type CampaignUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The filter to search for the Campaign to update in case it exists.
     */
    where: CampaignWhereUniqueInput
    /**
     * In case the Campaign found by the `where` argument doesn't exist, create a new Campaign with this data.
     */
    create: XOR<CampaignCreateInput, CampaignUncheckedCreateInput>
    /**
     * In case the Campaign was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CampaignUpdateInput, CampaignUncheckedUpdateInput>
  }


  /**
   * Campaign delete
   */
  export type CampaignDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter which Campaign to delete.
     */
    where: CampaignWhereUniqueInput
  }


  /**
   * Campaign deleteMany
   */
  export type CampaignDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campaigns to delete
     */
    where?: CampaignWhereInput
  }


  /**
   * Campaign.gms
   */
  export type Campaign$gmsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GMProfile
     */
    select?: GMProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GMProfileInclude<ExtArgs> | null
    where?: GMProfileWhereInput
    orderBy?: GMProfileOrderByWithRelationInput | GMProfileOrderByWithRelationInput[]
    cursor?: GMProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GMProfileScalarFieldEnum | GMProfileScalarFieldEnum[]
  }


  /**
   * Campaign.players
   */
  export type Campaign$playersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerCharacter
     */
    select?: PlayerCharacterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayerCharacterInclude<ExtArgs> | null
    where?: PlayerCharacterWhereInput
    orderBy?: PlayerCharacterOrderByWithRelationInput | PlayerCharacterOrderByWithRelationInput[]
    cursor?: PlayerCharacterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayerCharacterScalarFieldEnum | PlayerCharacterScalarFieldEnum[]
  }


  /**
   * Campaign.sessions
   */
  export type Campaign$sessionsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameSessionInclude<ExtArgs> | null
    where?: GameSessionWhereInput
    orderBy?: GameSessionOrderByWithRelationInput | GameSessionOrderByWithRelationInput[]
    cursor?: GameSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameSessionScalarFieldEnum | GameSessionScalarFieldEnum[]
  }


  /**
   * Campaign.infoSessions
   */
  export type Campaign$infoSessionsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfoSession
     */
    select?: InfoSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InfoSessionInclude<ExtArgs> | null
    where?: InfoSessionWhereInput
    orderBy?: InfoSessionOrderByWithRelationInput | InfoSessionOrderByWithRelationInput[]
    cursor?: InfoSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InfoSessionScalarFieldEnum | InfoSessionScalarFieldEnum[]
  }


  /**
   * Campaign.members
   */
  export type Campaign$membersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerProfile
     */
    select?: PlayerProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayerProfileInclude<ExtArgs> | null
    where?: PlayerProfileWhereInput
    orderBy?: PlayerProfileOrderByWithRelationInput | PlayerProfileOrderByWithRelationInput[]
    cursor?: PlayerProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayerProfileScalarFieldEnum | PlayerProfileScalarFieldEnum[]
  }


  /**
   * Campaign without action
   */
  export type CampaignDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CampaignInclude<ExtArgs> | null
  }



  /**
   * Model Story
   */

  export type AggregateStory = {
    _count: StoryCountAggregateOutputType | null
    _avg: StoryAvgAggregateOutputType | null
    _sum: StorySumAggregateOutputType | null
    _min: StoryMinAggregateOutputType | null
    _max: StoryMaxAggregateOutputType | null
  }

  export type StoryAvgAggregateOutputType = {
    id: number | null
  }

  export type StorySumAggregateOutputType = {
    id: number | null
  }

  export type StoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type StoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type StoryCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type StoryAvgAggregateInputType = {
    id?: true
  }

  export type StorySumAggregateInputType = {
    id?: true
  }

  export type StoryMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type StoryMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type StoryCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type StoryAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Story to aggregate.
     */
    where?: StoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stories to fetch.
     */
    orderBy?: StoryOrderByWithRelationInput | StoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stories
    **/
    _count?: true | StoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoryMaxAggregateInputType
  }

  export type GetStoryAggregateType<T extends StoryAggregateArgs> = {
        [P in keyof T & keyof AggregateStory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStory[P]>
      : GetScalarType<T[P], AggregateStory[P]>
  }




  export type StoryGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: StoryWhereInput
    orderBy?: StoryOrderByWithAggregationInput | StoryOrderByWithAggregationInput[]
    by: StoryScalarFieldEnum[] | StoryScalarFieldEnum
    having?: StoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoryCountAggregateInputType | true
    _avg?: StoryAvgAggregateInputType
    _sum?: StorySumAggregateInputType
    _min?: StoryMinAggregateInputType
    _max?: StoryMaxAggregateInputType
  }

  export type StoryGroupByOutputType = {
    id: number
    name: string
    description: string | null
    _count: StoryCountAggregateOutputType | null
    _avg: StoryAvgAggregateOutputType | null
    _sum: StorySumAggregateOutputType | null
    _min: StoryMinAggregateOutputType | null
    _max: StoryMaxAggregateOutputType | null
  }

  type GetStoryGroupByPayload<T extends StoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoryGroupByOutputType[P]>
            : GetScalarType<T[P], StoryGroupByOutputType[P]>
        }
      >
    >


  export type StorySelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    GameSession?: boolean | Story$GameSessionArgs<ExtArgs>
    _count?: boolean | StoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["story"]>

  export type StorySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
  }

  export type StoryInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    GameSession?: boolean | Story$GameSessionArgs<ExtArgs>
    _count?: boolean | StoryCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $StoryPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Story"
    objects: {
      GameSession: Prisma.$GameSessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: number
      name: string
      description: string | null
    }, ExtArgs["result"]["story"]>
    composites: {}
  }


  type StoryGetPayload<S extends boolean | null | undefined | StoryDefaultArgs> = $Result.GetResult<Prisma.$StoryPayload, S>

  type StoryCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<StoryFindManyArgs, 'select' | 'include'> & {
      select?: StoryCountAggregateInputType | true
    }

  export interface StoryDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Story'], meta: { name: 'Story' } }
    /**
     * Find zero or one Story that matches the filter.
     * @param {StoryFindUniqueArgs} args - Arguments to find a Story
     * @example
     * // Get one Story
     * const story = await prisma.story.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends StoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, StoryFindUniqueArgs<ExtArgs>>
    ): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Story that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {StoryFindUniqueOrThrowArgs} args - Arguments to find a Story
     * @example
     * // Get one Story
     * const story = await prisma.story.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends StoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Story that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryFindFirstArgs} args - Arguments to find a Story
     * @example
     * // Get one Story
     * const story = await prisma.story.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends StoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, StoryFindFirstArgs<ExtArgs>>
    ): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Story that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryFindFirstOrThrowArgs} args - Arguments to find a Story
     * @example
     * // Get one Story
     * const story = await prisma.story.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends StoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Stories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stories
     * const stories = await prisma.story.findMany()
     * 
     * // Get first 10 Stories
     * const stories = await prisma.story.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storyWithIdOnly = await prisma.story.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends StoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Story.
     * @param {StoryCreateArgs} args - Arguments to create a Story.
     * @example
     * // Create one Story
     * const Story = await prisma.story.create({
     *   data: {
     *     // ... data to create a Story
     *   }
     * })
     * 
    **/
    create<T extends StoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, StoryCreateArgs<ExtArgs>>
    ): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Stories.
     *     @param {StoryCreateManyArgs} args - Arguments to create many Stories.
     *     @example
     *     // Create many Stories
     *     const story = await prisma.story.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends StoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Story.
     * @param {StoryDeleteArgs} args - Arguments to delete one Story.
     * @example
     * // Delete one Story
     * const Story = await prisma.story.delete({
     *   where: {
     *     // ... filter to delete one Story
     *   }
     * })
     * 
    **/
    delete<T extends StoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, StoryDeleteArgs<ExtArgs>>
    ): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Story.
     * @param {StoryUpdateArgs} args - Arguments to update one Story.
     * @example
     * // Update one Story
     * const story = await prisma.story.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends StoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, StoryUpdateArgs<ExtArgs>>
    ): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Stories.
     * @param {StoryDeleteManyArgs} args - Arguments to filter Stories to delete.
     * @example
     * // Delete a few Stories
     * const { count } = await prisma.story.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends StoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stories
     * const story = await prisma.story.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends StoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, StoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Story.
     * @param {StoryUpsertArgs} args - Arguments to update or create a Story.
     * @example
     * // Update or create a Story
     * const story = await prisma.story.upsert({
     *   create: {
     *     // ... data to create a Story
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Story we want to update
     *   }
     * })
    **/
    upsert<T extends StoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, StoryUpsertArgs<ExtArgs>>
    ): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Stories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryCountArgs} args - Arguments to filter Stories to count.
     * @example
     * // Count the number of Stories
     * const count = await prisma.story.count({
     *   where: {
     *     // ... the filter for the Stories we want to count
     *   }
     * })
    **/
    count<T extends StoryCountArgs>(
      args?: Subset<T, StoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Story.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StoryAggregateArgs>(args: Subset<T, StoryAggregateArgs>): Prisma.PrismaPromise<GetStoryAggregateType<T>>

    /**
     * Group by Story.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StoryGroupByArgs['orderBy'] }
        : { orderBy?: StoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Story model
   */
  readonly fields: StoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Story.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StoryClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    GameSession<T extends Story$GameSessionArgs<ExtArgs> = {}>(args?: Subset<T, Story$GameSessionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Story model
   */ 
  interface StoryFieldRefs {
    readonly id: FieldRef<"Story", 'Int'>
    readonly name: FieldRef<"Story", 'String'>
    readonly description: FieldRef<"Story", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Story findUnique
   */
  export type StoryFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoryInclude<ExtArgs> | null
    /**
     * Filter, which Story to fetch.
     */
    where: StoryWhereUniqueInput
  }


  /**
   * Story findUniqueOrThrow
   */
  export type StoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoryInclude<ExtArgs> | null
    /**
     * Filter, which Story to fetch.
     */
    where: StoryWhereUniqueInput
  }


  /**
   * Story findFirst
   */
  export type StoryFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoryInclude<ExtArgs> | null
    /**
     * Filter, which Story to fetch.
     */
    where?: StoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stories to fetch.
     */
    orderBy?: StoryOrderByWithRelationInput | StoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stories.
     */
    cursor?: StoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stories.
     */
    distinct?: StoryScalarFieldEnum | StoryScalarFieldEnum[]
  }


  /**
   * Story findFirstOrThrow
   */
  export type StoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoryInclude<ExtArgs> | null
    /**
     * Filter, which Story to fetch.
     */
    where?: StoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stories to fetch.
     */
    orderBy?: StoryOrderByWithRelationInput | StoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stories.
     */
    cursor?: StoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stories.
     */
    distinct?: StoryScalarFieldEnum | StoryScalarFieldEnum[]
  }


  /**
   * Story findMany
   */
  export type StoryFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoryInclude<ExtArgs> | null
    /**
     * Filter, which Stories to fetch.
     */
    where?: StoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stories to fetch.
     */
    orderBy?: StoryOrderByWithRelationInput | StoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stories.
     */
    cursor?: StoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stories.
     */
    skip?: number
    distinct?: StoryScalarFieldEnum | StoryScalarFieldEnum[]
  }


  /**
   * Story create
   */
  export type StoryCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Story.
     */
    data: XOR<StoryCreateInput, StoryUncheckedCreateInput>
  }


  /**
   * Story createMany
   */
  export type StoryCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stories.
     */
    data: StoryCreateManyInput | StoryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Story update
   */
  export type StoryUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Story.
     */
    data: XOR<StoryUpdateInput, StoryUncheckedUpdateInput>
    /**
     * Choose, which Story to update.
     */
    where: StoryWhereUniqueInput
  }


  /**
   * Story updateMany
   */
  export type StoryUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stories.
     */
    data: XOR<StoryUpdateManyMutationInput, StoryUncheckedUpdateManyInput>
    /**
     * Filter which Stories to update
     */
    where?: StoryWhereInput
  }


  /**
   * Story upsert
   */
  export type StoryUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Story to update in case it exists.
     */
    where: StoryWhereUniqueInput
    /**
     * In case the Story found by the `where` argument doesn't exist, create a new Story with this data.
     */
    create: XOR<StoryCreateInput, StoryUncheckedCreateInput>
    /**
     * In case the Story was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StoryUpdateInput, StoryUncheckedUpdateInput>
  }


  /**
   * Story delete
   */
  export type StoryDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoryInclude<ExtArgs> | null
    /**
     * Filter which Story to delete.
     */
    where: StoryWhereUniqueInput
  }


  /**
   * Story deleteMany
   */
  export type StoryDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stories to delete
     */
    where?: StoryWhereInput
  }


  /**
   * Story.GameSession
   */
  export type Story$GameSessionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameSessionInclude<ExtArgs> | null
    where?: GameSessionWhereInput
    orderBy?: GameSessionOrderByWithRelationInput | GameSessionOrderByWithRelationInput[]
    cursor?: GameSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameSessionScalarFieldEnum | GameSessionScalarFieldEnum[]
  }


  /**
   * Story without action
   */
  export type StoryDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoryInclude<ExtArgs> | null
  }



  /**
   * Model Quest
   */

  export type AggregateQuest = {
    _count: QuestCountAggregateOutputType | null
    _avg: QuestAvgAggregateOutputType | null
    _sum: QuestSumAggregateOutputType | null
    _min: QuestMinAggregateOutputType | null
    _max: QuestMaxAggregateOutputType | null
  }

  export type QuestAvgAggregateOutputType = {
    id: number | null
    recLevel: number | null
    questID: number | null
  }

  export type QuestSumAggregateOutputType = {
    id: number | null
    recLevel: number | null
    questID: number | null
  }

  export type QuestMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    isPrivate: boolean | null
    dmNotes: string | null
    recLevel: number | null
    questID: number | null
    gMProfileId: string | null
  }

  export type QuestMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    isPrivate: boolean | null
    dmNotes: string | null
    recLevel: number | null
    questID: number | null
    gMProfileId: string | null
  }

  export type QuestCountAggregateOutputType = {
    id: number
    name: number
    description: number
    isPrivate: number
    dmNotes: number
    recLevel: number
    questID: number
    gMProfileId: number
    _all: number
  }


  export type QuestAvgAggregateInputType = {
    id?: true
    recLevel?: true
    questID?: true
  }

  export type QuestSumAggregateInputType = {
    id?: true
    recLevel?: true
    questID?: true
  }

  export type QuestMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isPrivate?: true
    dmNotes?: true
    recLevel?: true
    questID?: true
    gMProfileId?: true
  }

  export type QuestMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isPrivate?: true
    dmNotes?: true
    recLevel?: true
    questID?: true
    gMProfileId?: true
  }

  export type QuestCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isPrivate?: true
    dmNotes?: true
    recLevel?: true
    questID?: true
    gMProfileId?: true
    _all?: true
  }

  export type QuestAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quest to aggregate.
     */
    where?: QuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quests to fetch.
     */
    orderBy?: QuestOrderByWithRelationInput | QuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Quests
    **/
    _count?: true | QuestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestMaxAggregateInputType
  }

  export type GetQuestAggregateType<T extends QuestAggregateArgs> = {
        [P in keyof T & keyof AggregateQuest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuest[P]>
      : GetScalarType<T[P], AggregateQuest[P]>
  }




  export type QuestGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: QuestWhereInput
    orderBy?: QuestOrderByWithAggregationInput | QuestOrderByWithAggregationInput[]
    by: QuestScalarFieldEnum[] | QuestScalarFieldEnum
    having?: QuestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestCountAggregateInputType | true
    _avg?: QuestAvgAggregateInputType
    _sum?: QuestSumAggregateInputType
    _min?: QuestMinAggregateInputType
    _max?: QuestMaxAggregateInputType
  }

  export type QuestGroupByOutputType = {
    id: number
    name: string
    description: string
    isPrivate: boolean
    dmNotes: string
    recLevel: number | null
    questID: number | null
    gMProfileId: string
    _count: QuestCountAggregateOutputType | null
    _avg: QuestAvgAggregateOutputType | null
    _sum: QuestSumAggregateOutputType | null
    _min: QuestMinAggregateOutputType | null
    _max: QuestMaxAggregateOutputType | null
  }

  type GetQuestGroupByPayload<T extends QuestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestGroupByOutputType[P]>
            : GetScalarType<T[P], QuestGroupByOutputType[P]>
        }
      >
    >


  export type QuestSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    isPrivate?: boolean
    dmNotes?: boolean
    recLevel?: boolean
    questID?: boolean
    gMProfileId?: boolean
    author?: boolean | GMProfileDefaultArgs<ExtArgs>
    followUp?: boolean | Quest$followUpArgs<ExtArgs>
    previous?: boolean | Quest$previousArgs<ExtArgs>
    GameSession?: boolean | Quest$GameSessionArgs<ExtArgs>
    _count?: boolean | QuestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quest"]>

  export type QuestSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    isPrivate?: boolean
    dmNotes?: boolean
    recLevel?: boolean
    questID?: boolean
    gMProfileId?: boolean
  }

  export type QuestInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    author?: boolean | GMProfileDefaultArgs<ExtArgs>
    followUp?: boolean | Quest$followUpArgs<ExtArgs>
    previous?: boolean | Quest$previousArgs<ExtArgs>
    GameSession?: boolean | Quest$GameSessionArgs<ExtArgs>
    _count?: boolean | QuestCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $QuestPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Quest"
    objects: {
      author: Prisma.$GMProfilePayload<ExtArgs>
      followUp: Prisma.$QuestPayload<ExtArgs> | null
      previous: Prisma.$QuestPayload<ExtArgs> | null
      GameSession: Prisma.$GameSessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: number
      name: string
      description: string
      isPrivate: boolean
      dmNotes: string
      recLevel: number | null
      questID: number | null
      gMProfileId: string
    }, ExtArgs["result"]["quest"]>
    composites: {}
  }


  type QuestGetPayload<S extends boolean | null | undefined | QuestDefaultArgs> = $Result.GetResult<Prisma.$QuestPayload, S>

  type QuestCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<QuestFindManyArgs, 'select' | 'include'> & {
      select?: QuestCountAggregateInputType | true
    }

  export interface QuestDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Quest'], meta: { name: 'Quest' } }
    /**
     * Find zero or one Quest that matches the filter.
     * @param {QuestFindUniqueArgs} args - Arguments to find a Quest
     * @example
     * // Get one Quest
     * const quest = await prisma.quest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends QuestFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, QuestFindUniqueArgs<ExtArgs>>
    ): Prisma__QuestClient<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Quest that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {QuestFindUniqueOrThrowArgs} args - Arguments to find a Quest
     * @example
     * // Get one Quest
     * const quest = await prisma.quest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends QuestFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, QuestFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__QuestClient<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Quest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestFindFirstArgs} args - Arguments to find a Quest
     * @example
     * // Get one Quest
     * const quest = await prisma.quest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends QuestFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, QuestFindFirstArgs<ExtArgs>>
    ): Prisma__QuestClient<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Quest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestFindFirstOrThrowArgs} args - Arguments to find a Quest
     * @example
     * // Get one Quest
     * const quest = await prisma.quest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends QuestFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, QuestFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__QuestClient<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Quests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Quests
     * const quests = await prisma.quest.findMany()
     * 
     * // Get first 10 Quests
     * const quests = await prisma.quest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questWithIdOnly = await prisma.quest.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends QuestFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, QuestFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Quest.
     * @param {QuestCreateArgs} args - Arguments to create a Quest.
     * @example
     * // Create one Quest
     * const Quest = await prisma.quest.create({
     *   data: {
     *     // ... data to create a Quest
     *   }
     * })
     * 
    **/
    create<T extends QuestCreateArgs<ExtArgs>>(
      args: SelectSubset<T, QuestCreateArgs<ExtArgs>>
    ): Prisma__QuestClient<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Quests.
     *     @param {QuestCreateManyArgs} args - Arguments to create many Quests.
     *     @example
     *     // Create many Quests
     *     const quest = await prisma.quest.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends QuestCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, QuestCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Quest.
     * @param {QuestDeleteArgs} args - Arguments to delete one Quest.
     * @example
     * // Delete one Quest
     * const Quest = await prisma.quest.delete({
     *   where: {
     *     // ... filter to delete one Quest
     *   }
     * })
     * 
    **/
    delete<T extends QuestDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, QuestDeleteArgs<ExtArgs>>
    ): Prisma__QuestClient<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Quest.
     * @param {QuestUpdateArgs} args - Arguments to update one Quest.
     * @example
     * // Update one Quest
     * const quest = await prisma.quest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends QuestUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, QuestUpdateArgs<ExtArgs>>
    ): Prisma__QuestClient<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Quests.
     * @param {QuestDeleteManyArgs} args - Arguments to filter Quests to delete.
     * @example
     * // Delete a few Quests
     * const { count } = await prisma.quest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends QuestDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, QuestDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Quests
     * const quest = await prisma.quest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends QuestUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, QuestUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Quest.
     * @param {QuestUpsertArgs} args - Arguments to update or create a Quest.
     * @example
     * // Update or create a Quest
     * const quest = await prisma.quest.upsert({
     *   create: {
     *     // ... data to create a Quest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Quest we want to update
     *   }
     * })
    **/
    upsert<T extends QuestUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, QuestUpsertArgs<ExtArgs>>
    ): Prisma__QuestClient<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Quests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestCountArgs} args - Arguments to filter Quests to count.
     * @example
     * // Count the number of Quests
     * const count = await prisma.quest.count({
     *   where: {
     *     // ... the filter for the Quests we want to count
     *   }
     * })
    **/
    count<T extends QuestCountArgs>(
      args?: Subset<T, QuestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Quest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuestAggregateArgs>(args: Subset<T, QuestAggregateArgs>): Prisma.PrismaPromise<GetQuestAggregateType<T>>

    /**
     * Group by Quest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestGroupByArgs['orderBy'] }
        : { orderBy?: QuestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Quest model
   */
  readonly fields: QuestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Quest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    author<T extends GMProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GMProfileDefaultArgs<ExtArgs>>): Prisma__GMProfileClient<$Result.GetResult<Prisma.$GMProfilePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    followUp<T extends Quest$followUpArgs<ExtArgs> = {}>(args?: Subset<T, Quest$followUpArgs<ExtArgs>>): Prisma__QuestClient<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    previous<T extends Quest$previousArgs<ExtArgs> = {}>(args?: Subset<T, Quest$previousArgs<ExtArgs>>): Prisma__QuestClient<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    GameSession<T extends Quest$GameSessionArgs<ExtArgs> = {}>(args?: Subset<T, Quest$GameSessionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Quest model
   */ 
  interface QuestFieldRefs {
    readonly id: FieldRef<"Quest", 'Int'>
    readonly name: FieldRef<"Quest", 'String'>
    readonly description: FieldRef<"Quest", 'String'>
    readonly isPrivate: FieldRef<"Quest", 'Boolean'>
    readonly dmNotes: FieldRef<"Quest", 'String'>
    readonly recLevel: FieldRef<"Quest", 'Int'>
    readonly questID: FieldRef<"Quest", 'Int'>
    readonly gMProfileId: FieldRef<"Quest", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Quest findUnique
   */
  export type QuestFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestInclude<ExtArgs> | null
    /**
     * Filter, which Quest to fetch.
     */
    where: QuestWhereUniqueInput
  }


  /**
   * Quest findUniqueOrThrow
   */
  export type QuestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestInclude<ExtArgs> | null
    /**
     * Filter, which Quest to fetch.
     */
    where: QuestWhereUniqueInput
  }


  /**
   * Quest findFirst
   */
  export type QuestFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestInclude<ExtArgs> | null
    /**
     * Filter, which Quest to fetch.
     */
    where?: QuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quests to fetch.
     */
    orderBy?: QuestOrderByWithRelationInput | QuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quests.
     */
    cursor?: QuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quests.
     */
    distinct?: QuestScalarFieldEnum | QuestScalarFieldEnum[]
  }


  /**
   * Quest findFirstOrThrow
   */
  export type QuestFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestInclude<ExtArgs> | null
    /**
     * Filter, which Quest to fetch.
     */
    where?: QuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quests to fetch.
     */
    orderBy?: QuestOrderByWithRelationInput | QuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quests.
     */
    cursor?: QuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quests.
     */
    distinct?: QuestScalarFieldEnum | QuestScalarFieldEnum[]
  }


  /**
   * Quest findMany
   */
  export type QuestFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestInclude<ExtArgs> | null
    /**
     * Filter, which Quests to fetch.
     */
    where?: QuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quests to fetch.
     */
    orderBy?: QuestOrderByWithRelationInput | QuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Quests.
     */
    cursor?: QuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quests.
     */
    skip?: number
    distinct?: QuestScalarFieldEnum | QuestScalarFieldEnum[]
  }


  /**
   * Quest create
   */
  export type QuestCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestInclude<ExtArgs> | null
    /**
     * The data needed to create a Quest.
     */
    data: XOR<QuestCreateInput, QuestUncheckedCreateInput>
  }


  /**
   * Quest createMany
   */
  export type QuestCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Quests.
     */
    data: QuestCreateManyInput | QuestCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Quest update
   */
  export type QuestUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestInclude<ExtArgs> | null
    /**
     * The data needed to update a Quest.
     */
    data: XOR<QuestUpdateInput, QuestUncheckedUpdateInput>
    /**
     * Choose, which Quest to update.
     */
    where: QuestWhereUniqueInput
  }


  /**
   * Quest updateMany
   */
  export type QuestUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Quests.
     */
    data: XOR<QuestUpdateManyMutationInput, QuestUncheckedUpdateManyInput>
    /**
     * Filter which Quests to update
     */
    where?: QuestWhereInput
  }


  /**
   * Quest upsert
   */
  export type QuestUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestInclude<ExtArgs> | null
    /**
     * The filter to search for the Quest to update in case it exists.
     */
    where: QuestWhereUniqueInput
    /**
     * In case the Quest found by the `where` argument doesn't exist, create a new Quest with this data.
     */
    create: XOR<QuestCreateInput, QuestUncheckedCreateInput>
    /**
     * In case the Quest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestUpdateInput, QuestUncheckedUpdateInput>
  }


  /**
   * Quest delete
   */
  export type QuestDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestInclude<ExtArgs> | null
    /**
     * Filter which Quest to delete.
     */
    where: QuestWhereUniqueInput
  }


  /**
   * Quest deleteMany
   */
  export type QuestDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quests to delete
     */
    where?: QuestWhereInput
  }


  /**
   * Quest.followUp
   */
  export type Quest$followUpArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestInclude<ExtArgs> | null
    where?: QuestWhereInput
  }


  /**
   * Quest.previous
   */
  export type Quest$previousArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestInclude<ExtArgs> | null
    where?: QuestWhereInput
  }


  /**
   * Quest.GameSession
   */
  export type Quest$GameSessionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameSessionInclude<ExtArgs> | null
    where?: GameSessionWhereInput
    orderBy?: GameSessionOrderByWithRelationInput | GameSessionOrderByWithRelationInput[]
    cursor?: GameSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameSessionScalarFieldEnum | GameSessionScalarFieldEnum[]
  }


  /**
   * Quest without action
   */
  export type QuestDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    refresh_token_expires_in: 'refresh_token_expires_in',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    age: 'age',
    fName: 'fName',
    lName: 'lName',
    bio: 'bio',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    role: 'role',
    gMProfileId: 'gMProfileId',
    playerProfileId: 'playerProfileId',
    infoSessionId: 'infoSessionId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const GMProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type'
  };

  export type GMProfileScalarFieldEnum = (typeof GMProfileScalarFieldEnum)[keyof typeof GMProfileScalarFieldEnum]


  export const PlayerProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    campaignId: 'campaignId'
  };

  export type PlayerProfileScalarFieldEnum = (typeof PlayerProfileScalarFieldEnum)[keyof typeof PlayerProfileScalarFieldEnum]


  export const PlayerCharacterScalarFieldEnum: {
    id: 'id',
    name: 'name',
    playerProfileId: 'playerProfileId',
    campaignId: 'campaignId',
    experience: 'experience',
    level: 'level',
    gold: 'gold',
    classedEntityId: 'classedEntityId',
    backStory: 'backStory',
    personality: 'personality',
    race: 'race',
    active: 'active'
  };

  export type PlayerCharacterScalarFieldEnum = (typeof PlayerCharacterScalarFieldEnum)[keyof typeof PlayerCharacterScalarFieldEnum]


  export const ClassedEntityScalarFieldEnum: {
    id: 'id'
  };

  export type ClassedEntityScalarFieldEnum = (typeof ClassedEntityScalarFieldEnum)[keyof typeof ClassedEntityScalarFieldEnum]


  export const ClassConfigsScalarFieldEnum: {
    id: 'id',
    classId: 'classId',
    Level: 'Level',
    classedEntityId: 'classedEntityId'
  };

  export type ClassConfigsScalarFieldEnum = (typeof ClassConfigsScalarFieldEnum)[keyof typeof ClassConfigsScalarFieldEnum]


  export const ClassScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type ClassScalarFieldEnum = (typeof ClassScalarFieldEnum)[keyof typeof ClassScalarFieldEnum]


  export const GameSessionScalarFieldEnum: {
    id: 'id',
    date: 'date',
    duration: 'duration',
    gMProfileId: 'gMProfileId',
    description: 'description',
    notes: 'notes',
    state: 'state',
    campaignId: 'campaignId',
    private: 'private',
    gameSessionId: 'gameSessionId',
    questId: 'questId',
    storyId: 'storyId',
    maxPlayers: 'maxPlayers',
    platform: 'platform',
    prework: 'prework'
  };

  export type GameSessionScalarFieldEnum = (typeof GameSessionScalarFieldEnum)[keyof typeof GameSessionScalarFieldEnum]


  export const InfoSessionScalarFieldEnum: {
    id: 'id',
    date: 'date',
    duration: 'duration',
    gMProfileId: 'gMProfileId',
    description: 'description',
    private: 'private',
    campaignId: 'campaignId'
  };

  export type InfoSessionScalarFieldEnum = (typeof InfoSessionScalarFieldEnum)[keyof typeof InfoSessionScalarFieldEnum]


  export const CampaignScalarFieldEnum: {
    id: 'id',
    description: 'description',
    name: 'name'
  };

  export type CampaignScalarFieldEnum = (typeof CampaignScalarFieldEnum)[keyof typeof CampaignScalarFieldEnum]


  export const StoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type StoryScalarFieldEnum = (typeof StoryScalarFieldEnum)[keyof typeof StoryScalarFieldEnum]


  export const QuestScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    isPrivate: 'isPrivate',
    dmNotes: 'dmNotes',
    recLevel: 'recLevel',
    questID: 'questID',
    gMProfileId: 'gMProfileId'
  };

  export type QuestScalarFieldEnum = (typeof QuestScalarFieldEnum)[keyof typeof QuestScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'ROLE'
   */
  export type EnumROLEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ROLE'>
    


  /**
   * Reference to a field of type 'HostType'
   */
  export type EnumHostTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HostType'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'SessionState'
   */
  export type EnumSessionStateFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SessionState'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    refresh_token_expires_in?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    refresh_token_expires_in?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    refresh_token_expires_in?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    refresh_token_expires_in?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    refresh_token_expires_in?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    age?: IntNullableFilter<"User"> | number | null
    fName?: StringNullableFilter<"User"> | string | null
    lName?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    role?: EnumROLEFilter<"User"> | $Enums.ROLE
    gMProfileId?: StringNullableFilter<"User"> | string | null
    playerProfileId?: StringNullableFilter<"User"> | string | null
    infoSessionId?: StringNullableFilter<"User"> | string | null
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    gmProfile?: XOR<GMProfileNullableRelationFilter, GMProfileWhereInput> | null
    playerProfile?: XOR<PlayerProfileNullableRelationFilter, PlayerProfileWhereInput> | null
    InfoSession?: XOR<InfoSessionNullableRelationFilter, InfoSessionWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    fName?: SortOrderInput | SortOrder
    lName?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    role?: SortOrder
    gMProfileId?: SortOrderInput | SortOrder
    playerProfileId?: SortOrderInput | SortOrder
    infoSessionId?: SortOrderInput | SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    gmProfile?: GMProfileOrderByWithRelationInput
    playerProfile?: PlayerProfileOrderByWithRelationInput
    InfoSession?: InfoSessionOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    age?: IntNullableFilter<"User"> | number | null
    fName?: StringNullableFilter<"User"> | string | null
    lName?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    role?: EnumROLEFilter<"User"> | $Enums.ROLE
    gMProfileId?: StringNullableFilter<"User"> | string | null
    playerProfileId?: StringNullableFilter<"User"> | string | null
    infoSessionId?: StringNullableFilter<"User"> | string | null
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    gmProfile?: XOR<GMProfileNullableRelationFilter, GMProfileWhereInput> | null
    playerProfile?: XOR<PlayerProfileNullableRelationFilter, PlayerProfileWhereInput> | null
    InfoSession?: XOR<InfoSessionNullableRelationFilter, InfoSessionWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    fName?: SortOrderInput | SortOrder
    lName?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    role?: SortOrder
    gMProfileId?: SortOrderInput | SortOrder
    playerProfileId?: SortOrderInput | SortOrder
    infoSessionId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    age?: IntNullableWithAggregatesFilter<"User"> | number | null
    fName?: StringNullableWithAggregatesFilter<"User"> | string | null
    lName?: StringNullableWithAggregatesFilter<"User"> | string | null
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumROLEWithAggregatesFilter<"User"> | $Enums.ROLE
    gMProfileId?: StringNullableWithAggregatesFilter<"User"> | string | null
    playerProfileId?: StringNullableWithAggregatesFilter<"User"> | string | null
    infoSessionId?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type GMProfileWhereInput = {
    AND?: GMProfileWhereInput | GMProfileWhereInput[]
    OR?: GMProfileWhereInput[]
    NOT?: GMProfileWhereInput | GMProfileWhereInput[]
    id?: StringFilter<"GMProfile"> | string
    userId?: StringFilter<"GMProfile"> | string
    type?: EnumHostTypeFilter<"GMProfile"> | $Enums.HostType
    User?: XOR<UserRelationFilter, UserWhereInput>
    GameSession?: GameSessionListRelationFilter
    Campaign?: CampaignListRelationFilter
    Quest?: QuestListRelationFilter
    InfoSession?: InfoSessionListRelationFilter
  }

  export type GMProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    User?: UserOrderByWithRelationInput
    GameSession?: GameSessionOrderByRelationAggregateInput
    Campaign?: CampaignOrderByRelationAggregateInput
    Quest?: QuestOrderByRelationAggregateInput
    InfoSession?: InfoSessionOrderByRelationAggregateInput
  }

  export type GMProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: GMProfileWhereInput | GMProfileWhereInput[]
    OR?: GMProfileWhereInput[]
    NOT?: GMProfileWhereInput | GMProfileWhereInput[]
    type?: EnumHostTypeFilter<"GMProfile"> | $Enums.HostType
    User?: XOR<UserRelationFilter, UserWhereInput>
    GameSession?: GameSessionListRelationFilter
    Campaign?: CampaignListRelationFilter
    Quest?: QuestListRelationFilter
    InfoSession?: InfoSessionListRelationFilter
  }, "id" | "userId">

  export type GMProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    _count?: GMProfileCountOrderByAggregateInput
    _max?: GMProfileMaxOrderByAggregateInput
    _min?: GMProfileMinOrderByAggregateInput
  }

  export type GMProfileScalarWhereWithAggregatesInput = {
    AND?: GMProfileScalarWhereWithAggregatesInput | GMProfileScalarWhereWithAggregatesInput[]
    OR?: GMProfileScalarWhereWithAggregatesInput[]
    NOT?: GMProfileScalarWhereWithAggregatesInput | GMProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GMProfile"> | string
    userId?: StringWithAggregatesFilter<"GMProfile"> | string
    type?: EnumHostTypeWithAggregatesFilter<"GMProfile"> | $Enums.HostType
  }

  export type PlayerProfileWhereInput = {
    AND?: PlayerProfileWhereInput | PlayerProfileWhereInput[]
    OR?: PlayerProfileWhereInput[]
    NOT?: PlayerProfileWhereInput | PlayerProfileWhereInput[]
    id?: StringFilter<"PlayerProfile"> | string
    userId?: StringFilter<"PlayerProfile"> | string
    campaignId?: IntNullableFilter<"PlayerProfile"> | number | null
    PlayerCharacter?: PlayerCharacterListRelationFilter
    User?: XOR<UserRelationFilter, UserWhereInput>
    Campaign?: XOR<CampaignNullableRelationFilter, CampaignWhereInput> | null
  }

  export type PlayerProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    campaignId?: SortOrderInput | SortOrder
    PlayerCharacter?: PlayerCharacterOrderByRelationAggregateInput
    User?: UserOrderByWithRelationInput
    Campaign?: CampaignOrderByWithRelationInput
  }

  export type PlayerProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: PlayerProfileWhereInput | PlayerProfileWhereInput[]
    OR?: PlayerProfileWhereInput[]
    NOT?: PlayerProfileWhereInput | PlayerProfileWhereInput[]
    campaignId?: IntNullableFilter<"PlayerProfile"> | number | null
    PlayerCharacter?: PlayerCharacterListRelationFilter
    User?: XOR<UserRelationFilter, UserWhereInput>
    Campaign?: XOR<CampaignNullableRelationFilter, CampaignWhereInput> | null
  }, "id" | "userId">

  export type PlayerProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    campaignId?: SortOrderInput | SortOrder
    _count?: PlayerProfileCountOrderByAggregateInput
    _avg?: PlayerProfileAvgOrderByAggregateInput
    _max?: PlayerProfileMaxOrderByAggregateInput
    _min?: PlayerProfileMinOrderByAggregateInput
    _sum?: PlayerProfileSumOrderByAggregateInput
  }

  export type PlayerProfileScalarWhereWithAggregatesInput = {
    AND?: PlayerProfileScalarWhereWithAggregatesInput | PlayerProfileScalarWhereWithAggregatesInput[]
    OR?: PlayerProfileScalarWhereWithAggregatesInput[]
    NOT?: PlayerProfileScalarWhereWithAggregatesInput | PlayerProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PlayerProfile"> | string
    userId?: StringWithAggregatesFilter<"PlayerProfile"> | string
    campaignId?: IntNullableWithAggregatesFilter<"PlayerProfile"> | number | null
  }

  export type PlayerCharacterWhereInput = {
    AND?: PlayerCharacterWhereInput | PlayerCharacterWhereInput[]
    OR?: PlayerCharacterWhereInput[]
    NOT?: PlayerCharacterWhereInput | PlayerCharacterWhereInput[]
    id?: StringFilter<"PlayerCharacter"> | string
    name?: StringFilter<"PlayerCharacter"> | string
    playerProfileId?: StringFilter<"PlayerCharacter"> | string
    campaignId?: IntFilter<"PlayerCharacter"> | number
    experience?: IntFilter<"PlayerCharacter"> | number
    level?: IntFilter<"PlayerCharacter"> | number
    gold?: IntFilter<"PlayerCharacter"> | number
    classedEntityId?: StringFilter<"PlayerCharacter"> | string
    backStory?: StringNullableFilter<"PlayerCharacter"> | string | null
    personality?: StringNullableFilter<"PlayerCharacter"> | string | null
    race?: StringFilter<"PlayerCharacter"> | string
    active?: BoolFilter<"PlayerCharacter"> | boolean
    owner?: XOR<PlayerProfileRelationFilter, PlayerProfileWhereInput>
    GameSession?: GameSessionListRelationFilter
    Campaign?: XOR<CampaignRelationFilter, CampaignWhereInput>
    character?: XOR<ClassedEntityRelationFilter, ClassedEntityWhereInput>
  }

  export type PlayerCharacterOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    playerProfileId?: SortOrder
    campaignId?: SortOrder
    experience?: SortOrder
    level?: SortOrder
    gold?: SortOrder
    classedEntityId?: SortOrder
    backStory?: SortOrderInput | SortOrder
    personality?: SortOrderInput | SortOrder
    race?: SortOrder
    active?: SortOrder
    owner?: PlayerProfileOrderByWithRelationInput
    GameSession?: GameSessionOrderByRelationAggregateInput
    Campaign?: CampaignOrderByWithRelationInput
    character?: ClassedEntityOrderByWithRelationInput
  }

  export type PlayerCharacterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    classedEntityId?: string
    AND?: PlayerCharacterWhereInput | PlayerCharacterWhereInput[]
    OR?: PlayerCharacterWhereInput[]
    NOT?: PlayerCharacterWhereInput | PlayerCharacterWhereInput[]
    name?: StringFilter<"PlayerCharacter"> | string
    playerProfileId?: StringFilter<"PlayerCharacter"> | string
    campaignId?: IntFilter<"PlayerCharacter"> | number
    experience?: IntFilter<"PlayerCharacter"> | number
    level?: IntFilter<"PlayerCharacter"> | number
    gold?: IntFilter<"PlayerCharacter"> | number
    backStory?: StringNullableFilter<"PlayerCharacter"> | string | null
    personality?: StringNullableFilter<"PlayerCharacter"> | string | null
    race?: StringFilter<"PlayerCharacter"> | string
    active?: BoolFilter<"PlayerCharacter"> | boolean
    owner?: XOR<PlayerProfileRelationFilter, PlayerProfileWhereInput>
    GameSession?: GameSessionListRelationFilter
    Campaign?: XOR<CampaignRelationFilter, CampaignWhereInput>
    character?: XOR<ClassedEntityRelationFilter, ClassedEntityWhereInput>
  }, "id" | "classedEntityId">

  export type PlayerCharacterOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    playerProfileId?: SortOrder
    campaignId?: SortOrder
    experience?: SortOrder
    level?: SortOrder
    gold?: SortOrder
    classedEntityId?: SortOrder
    backStory?: SortOrderInput | SortOrder
    personality?: SortOrderInput | SortOrder
    race?: SortOrder
    active?: SortOrder
    _count?: PlayerCharacterCountOrderByAggregateInput
    _avg?: PlayerCharacterAvgOrderByAggregateInput
    _max?: PlayerCharacterMaxOrderByAggregateInput
    _min?: PlayerCharacterMinOrderByAggregateInput
    _sum?: PlayerCharacterSumOrderByAggregateInput
  }

  export type PlayerCharacterScalarWhereWithAggregatesInput = {
    AND?: PlayerCharacterScalarWhereWithAggregatesInput | PlayerCharacterScalarWhereWithAggregatesInput[]
    OR?: PlayerCharacterScalarWhereWithAggregatesInput[]
    NOT?: PlayerCharacterScalarWhereWithAggregatesInput | PlayerCharacterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PlayerCharacter"> | string
    name?: StringWithAggregatesFilter<"PlayerCharacter"> | string
    playerProfileId?: StringWithAggregatesFilter<"PlayerCharacter"> | string
    campaignId?: IntWithAggregatesFilter<"PlayerCharacter"> | number
    experience?: IntWithAggregatesFilter<"PlayerCharacter"> | number
    level?: IntWithAggregatesFilter<"PlayerCharacter"> | number
    gold?: IntWithAggregatesFilter<"PlayerCharacter"> | number
    classedEntityId?: StringWithAggregatesFilter<"PlayerCharacter"> | string
    backStory?: StringNullableWithAggregatesFilter<"PlayerCharacter"> | string | null
    personality?: StringNullableWithAggregatesFilter<"PlayerCharacter"> | string | null
    race?: StringWithAggregatesFilter<"PlayerCharacter"> | string
    active?: BoolWithAggregatesFilter<"PlayerCharacter"> | boolean
  }

  export type ClassedEntityWhereInput = {
    AND?: ClassedEntityWhereInput | ClassedEntityWhereInput[]
    OR?: ClassedEntityWhereInput[]
    NOT?: ClassedEntityWhereInput | ClassedEntityWhereInput[]
    id?: StringFilter<"ClassedEntity"> | string
    classes?: ClassConfigsListRelationFilter
    PlayerCharacter?: XOR<PlayerCharacterNullableRelationFilter, PlayerCharacterWhereInput> | null
  }

  export type ClassedEntityOrderByWithRelationInput = {
    id?: SortOrder
    classes?: ClassConfigsOrderByRelationAggregateInput
    PlayerCharacter?: PlayerCharacterOrderByWithRelationInput
  }

  export type ClassedEntityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClassedEntityWhereInput | ClassedEntityWhereInput[]
    OR?: ClassedEntityWhereInput[]
    NOT?: ClassedEntityWhereInput | ClassedEntityWhereInput[]
    classes?: ClassConfigsListRelationFilter
    PlayerCharacter?: XOR<PlayerCharacterNullableRelationFilter, PlayerCharacterWhereInput> | null
  }, "id">

  export type ClassedEntityOrderByWithAggregationInput = {
    id?: SortOrder
    _count?: ClassedEntityCountOrderByAggregateInput
    _max?: ClassedEntityMaxOrderByAggregateInput
    _min?: ClassedEntityMinOrderByAggregateInput
  }

  export type ClassedEntityScalarWhereWithAggregatesInput = {
    AND?: ClassedEntityScalarWhereWithAggregatesInput | ClassedEntityScalarWhereWithAggregatesInput[]
    OR?: ClassedEntityScalarWhereWithAggregatesInput[]
    NOT?: ClassedEntityScalarWhereWithAggregatesInput | ClassedEntityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ClassedEntity"> | string
  }

  export type ClassConfigsWhereInput = {
    AND?: ClassConfigsWhereInput | ClassConfigsWhereInput[]
    OR?: ClassConfigsWhereInput[]
    NOT?: ClassConfigsWhereInput | ClassConfigsWhereInput[]
    id?: StringFilter<"ClassConfigs"> | string
    classId?: StringFilter<"ClassConfigs"> | string
    Level?: IntFilter<"ClassConfigs"> | number
    classedEntityId?: StringFilter<"ClassConfigs"> | string
    ClassedEntity?: XOR<ClassedEntityRelationFilter, ClassedEntityWhereInput>
    ClassChoice?: XOR<ClassRelationFilter, ClassWhereInput>
  }

  export type ClassConfigsOrderByWithRelationInput = {
    id?: SortOrder
    classId?: SortOrder
    Level?: SortOrder
    classedEntityId?: SortOrder
    ClassedEntity?: ClassedEntityOrderByWithRelationInput
    ClassChoice?: ClassOrderByWithRelationInput
  }

  export type ClassConfigsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClassConfigsWhereInput | ClassConfigsWhereInput[]
    OR?: ClassConfigsWhereInput[]
    NOT?: ClassConfigsWhereInput | ClassConfigsWhereInput[]
    classId?: StringFilter<"ClassConfigs"> | string
    Level?: IntFilter<"ClassConfigs"> | number
    classedEntityId?: StringFilter<"ClassConfigs"> | string
    ClassedEntity?: XOR<ClassedEntityRelationFilter, ClassedEntityWhereInput>
    ClassChoice?: XOR<ClassRelationFilter, ClassWhereInput>
  }, "id">

  export type ClassConfigsOrderByWithAggregationInput = {
    id?: SortOrder
    classId?: SortOrder
    Level?: SortOrder
    classedEntityId?: SortOrder
    _count?: ClassConfigsCountOrderByAggregateInput
    _avg?: ClassConfigsAvgOrderByAggregateInput
    _max?: ClassConfigsMaxOrderByAggregateInput
    _min?: ClassConfigsMinOrderByAggregateInput
    _sum?: ClassConfigsSumOrderByAggregateInput
  }

  export type ClassConfigsScalarWhereWithAggregatesInput = {
    AND?: ClassConfigsScalarWhereWithAggregatesInput | ClassConfigsScalarWhereWithAggregatesInput[]
    OR?: ClassConfigsScalarWhereWithAggregatesInput[]
    NOT?: ClassConfigsScalarWhereWithAggregatesInput | ClassConfigsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ClassConfigs"> | string
    classId?: StringWithAggregatesFilter<"ClassConfigs"> | string
    Level?: IntWithAggregatesFilter<"ClassConfigs"> | number
    classedEntityId?: StringWithAggregatesFilter<"ClassConfigs"> | string
  }

  export type ClassWhereInput = {
    AND?: ClassWhereInput | ClassWhereInput[]
    OR?: ClassWhereInput[]
    NOT?: ClassWhereInput | ClassWhereInput[]
    id?: StringFilter<"Class"> | string
    name?: StringFilter<"Class"> | string
    ClassConfigs?: ClassConfigsListRelationFilter
  }

  export type ClassOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    ClassConfigs?: ClassConfigsOrderByRelationAggregateInput
  }

  export type ClassWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClassWhereInput | ClassWhereInput[]
    OR?: ClassWhereInput[]
    NOT?: ClassWhereInput | ClassWhereInput[]
    name?: StringFilter<"Class"> | string
    ClassConfigs?: ClassConfigsListRelationFilter
  }, "id">

  export type ClassOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: ClassCountOrderByAggregateInput
    _max?: ClassMaxOrderByAggregateInput
    _min?: ClassMinOrderByAggregateInput
  }

  export type ClassScalarWhereWithAggregatesInput = {
    AND?: ClassScalarWhereWithAggregatesInput | ClassScalarWhereWithAggregatesInput[]
    OR?: ClassScalarWhereWithAggregatesInput[]
    NOT?: ClassScalarWhereWithAggregatesInput | ClassScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Class"> | string
    name?: StringWithAggregatesFilter<"Class"> | string
  }

  export type GameSessionWhereInput = {
    AND?: GameSessionWhereInput | GameSessionWhereInput[]
    OR?: GameSessionWhereInput[]
    NOT?: GameSessionWhereInput | GameSessionWhereInput[]
    id?: StringFilter<"GameSession"> | string
    date?: DateTimeFilter<"GameSession"> | Date | string
    duration?: IntFilter<"GameSession"> | number
    gMProfileId?: StringFilter<"GameSession"> | string
    description?: StringNullableFilter<"GameSession"> | string | null
    notes?: StringNullableFilter<"GameSession"> | string | null
    state?: EnumSessionStateFilter<"GameSession"> | $Enums.SessionState
    campaignId?: IntFilter<"GameSession"> | number
    private?: BoolFilter<"GameSession"> | boolean
    gameSessionId?: StringNullableFilter<"GameSession"> | string | null
    questId?: IntNullableFilter<"GameSession"> | number | null
    storyId?: IntNullableFilter<"GameSession"> | number | null
    maxPlayers?: IntFilter<"GameSession"> | number
    platform?: StringNullableFilter<"GameSession"> | string | null
    prework?: StringNullableFilter<"GameSession"> | string | null
    host?: XOR<GMProfileRelationFilter, GMProfileWhereInput>
    players?: PlayerCharacterListRelationFilter
    Campaign?: XOR<CampaignRelationFilter, CampaignWhereInput>
    followUpSession?: XOR<GameSessionNullableRelationFilter, GameSessionWhereInput> | null
    previousSession?: XOR<GameSessionNullableRelationFilter, GameSessionWhereInput> | null
    quest?: XOR<QuestNullableRelationFilter, QuestWhereInput> | null
    story?: XOR<StoryNullableRelationFilter, StoryWhereInput> | null
  }

  export type GameSessionOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    duration?: SortOrder
    gMProfileId?: SortOrder
    description?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    state?: SortOrder
    campaignId?: SortOrder
    private?: SortOrder
    gameSessionId?: SortOrderInput | SortOrder
    questId?: SortOrderInput | SortOrder
    storyId?: SortOrderInput | SortOrder
    maxPlayers?: SortOrder
    platform?: SortOrderInput | SortOrder
    prework?: SortOrderInput | SortOrder
    host?: GMProfileOrderByWithRelationInput
    players?: PlayerCharacterOrderByRelationAggregateInput
    Campaign?: CampaignOrderByWithRelationInput
    followUpSession?: GameSessionOrderByWithRelationInput
    previousSession?: GameSessionOrderByWithRelationInput
    quest?: QuestOrderByWithRelationInput
    story?: StoryOrderByWithRelationInput
  }

  export type GameSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    gameSessionId?: string
    AND?: GameSessionWhereInput | GameSessionWhereInput[]
    OR?: GameSessionWhereInput[]
    NOT?: GameSessionWhereInput | GameSessionWhereInput[]
    date?: DateTimeFilter<"GameSession"> | Date | string
    duration?: IntFilter<"GameSession"> | number
    gMProfileId?: StringFilter<"GameSession"> | string
    description?: StringNullableFilter<"GameSession"> | string | null
    notes?: StringNullableFilter<"GameSession"> | string | null
    state?: EnumSessionStateFilter<"GameSession"> | $Enums.SessionState
    campaignId?: IntFilter<"GameSession"> | number
    private?: BoolFilter<"GameSession"> | boolean
    questId?: IntNullableFilter<"GameSession"> | number | null
    storyId?: IntNullableFilter<"GameSession"> | number | null
    maxPlayers?: IntFilter<"GameSession"> | number
    platform?: StringNullableFilter<"GameSession"> | string | null
    prework?: StringNullableFilter<"GameSession"> | string | null
    host?: XOR<GMProfileRelationFilter, GMProfileWhereInput>
    players?: PlayerCharacterListRelationFilter
    Campaign?: XOR<CampaignRelationFilter, CampaignWhereInput>
    followUpSession?: XOR<GameSessionNullableRelationFilter, GameSessionWhereInput> | null
    previousSession?: XOR<GameSessionNullableRelationFilter, GameSessionWhereInput> | null
    quest?: XOR<QuestNullableRelationFilter, QuestWhereInput> | null
    story?: XOR<StoryNullableRelationFilter, StoryWhereInput> | null
  }, "id" | "gameSessionId">

  export type GameSessionOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    duration?: SortOrder
    gMProfileId?: SortOrder
    description?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    state?: SortOrder
    campaignId?: SortOrder
    private?: SortOrder
    gameSessionId?: SortOrderInput | SortOrder
    questId?: SortOrderInput | SortOrder
    storyId?: SortOrderInput | SortOrder
    maxPlayers?: SortOrder
    platform?: SortOrderInput | SortOrder
    prework?: SortOrderInput | SortOrder
    _count?: GameSessionCountOrderByAggregateInput
    _avg?: GameSessionAvgOrderByAggregateInput
    _max?: GameSessionMaxOrderByAggregateInput
    _min?: GameSessionMinOrderByAggregateInput
    _sum?: GameSessionSumOrderByAggregateInput
  }

  export type GameSessionScalarWhereWithAggregatesInput = {
    AND?: GameSessionScalarWhereWithAggregatesInput | GameSessionScalarWhereWithAggregatesInput[]
    OR?: GameSessionScalarWhereWithAggregatesInput[]
    NOT?: GameSessionScalarWhereWithAggregatesInput | GameSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GameSession"> | string
    date?: DateTimeWithAggregatesFilter<"GameSession"> | Date | string
    duration?: IntWithAggregatesFilter<"GameSession"> | number
    gMProfileId?: StringWithAggregatesFilter<"GameSession"> | string
    description?: StringNullableWithAggregatesFilter<"GameSession"> | string | null
    notes?: StringNullableWithAggregatesFilter<"GameSession"> | string | null
    state?: EnumSessionStateWithAggregatesFilter<"GameSession"> | $Enums.SessionState
    campaignId?: IntWithAggregatesFilter<"GameSession"> | number
    private?: BoolWithAggregatesFilter<"GameSession"> | boolean
    gameSessionId?: StringNullableWithAggregatesFilter<"GameSession"> | string | null
    questId?: IntNullableWithAggregatesFilter<"GameSession"> | number | null
    storyId?: IntNullableWithAggregatesFilter<"GameSession"> | number | null
    maxPlayers?: IntWithAggregatesFilter<"GameSession"> | number
    platform?: StringNullableWithAggregatesFilter<"GameSession"> | string | null
    prework?: StringNullableWithAggregatesFilter<"GameSession"> | string | null
  }

  export type InfoSessionWhereInput = {
    AND?: InfoSessionWhereInput | InfoSessionWhereInput[]
    OR?: InfoSessionWhereInput[]
    NOT?: InfoSessionWhereInput | InfoSessionWhereInput[]
    id?: StringFilter<"InfoSession"> | string
    date?: DateTimeFilter<"InfoSession"> | Date | string
    duration?: IntFilter<"InfoSession"> | number
    gMProfileId?: StringFilter<"InfoSession"> | string
    description?: StringNullableFilter<"InfoSession"> | string | null
    private?: BoolFilter<"InfoSession"> | boolean
    campaignId?: IntNullableFilter<"InfoSession"> | number | null
    host?: XOR<GMProfileRelationFilter, GMProfileWhereInput>
    players?: UserListRelationFilter
    Campaign?: XOR<CampaignNullableRelationFilter, CampaignWhereInput> | null
  }

  export type InfoSessionOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    duration?: SortOrder
    gMProfileId?: SortOrder
    description?: SortOrderInput | SortOrder
    private?: SortOrder
    campaignId?: SortOrderInput | SortOrder
    host?: GMProfileOrderByWithRelationInput
    players?: UserOrderByRelationAggregateInput
    Campaign?: CampaignOrderByWithRelationInput
  }

  export type InfoSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InfoSessionWhereInput | InfoSessionWhereInput[]
    OR?: InfoSessionWhereInput[]
    NOT?: InfoSessionWhereInput | InfoSessionWhereInput[]
    date?: DateTimeFilter<"InfoSession"> | Date | string
    duration?: IntFilter<"InfoSession"> | number
    gMProfileId?: StringFilter<"InfoSession"> | string
    description?: StringNullableFilter<"InfoSession"> | string | null
    private?: BoolFilter<"InfoSession"> | boolean
    campaignId?: IntNullableFilter<"InfoSession"> | number | null
    host?: XOR<GMProfileRelationFilter, GMProfileWhereInput>
    players?: UserListRelationFilter
    Campaign?: XOR<CampaignNullableRelationFilter, CampaignWhereInput> | null
  }, "id">

  export type InfoSessionOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    duration?: SortOrder
    gMProfileId?: SortOrder
    description?: SortOrderInput | SortOrder
    private?: SortOrder
    campaignId?: SortOrderInput | SortOrder
    _count?: InfoSessionCountOrderByAggregateInput
    _avg?: InfoSessionAvgOrderByAggregateInput
    _max?: InfoSessionMaxOrderByAggregateInput
    _min?: InfoSessionMinOrderByAggregateInput
    _sum?: InfoSessionSumOrderByAggregateInput
  }

  export type InfoSessionScalarWhereWithAggregatesInput = {
    AND?: InfoSessionScalarWhereWithAggregatesInput | InfoSessionScalarWhereWithAggregatesInput[]
    OR?: InfoSessionScalarWhereWithAggregatesInput[]
    NOT?: InfoSessionScalarWhereWithAggregatesInput | InfoSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InfoSession"> | string
    date?: DateTimeWithAggregatesFilter<"InfoSession"> | Date | string
    duration?: IntWithAggregatesFilter<"InfoSession"> | number
    gMProfileId?: StringWithAggregatesFilter<"InfoSession"> | string
    description?: StringNullableWithAggregatesFilter<"InfoSession"> | string | null
    private?: BoolWithAggregatesFilter<"InfoSession"> | boolean
    campaignId?: IntNullableWithAggregatesFilter<"InfoSession"> | number | null
  }

  export type CampaignWhereInput = {
    AND?: CampaignWhereInput | CampaignWhereInput[]
    OR?: CampaignWhereInput[]
    NOT?: CampaignWhereInput | CampaignWhereInput[]
    id?: IntFilter<"Campaign"> | number
    description?: StringNullableFilter<"Campaign"> | string | null
    name?: StringFilter<"Campaign"> | string
    gms?: GMProfileListRelationFilter
    players?: PlayerCharacterListRelationFilter
    sessions?: GameSessionListRelationFilter
    infoSessions?: InfoSessionListRelationFilter
    members?: PlayerProfileListRelationFilter
  }

  export type CampaignOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrderInput | SortOrder
    name?: SortOrder
    gms?: GMProfileOrderByRelationAggregateInput
    players?: PlayerCharacterOrderByRelationAggregateInput
    sessions?: GameSessionOrderByRelationAggregateInput
    infoSessions?: InfoSessionOrderByRelationAggregateInput
    members?: PlayerProfileOrderByRelationAggregateInput
  }

  export type CampaignWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: CampaignWhereInput | CampaignWhereInput[]
    OR?: CampaignWhereInput[]
    NOT?: CampaignWhereInput | CampaignWhereInput[]
    description?: StringNullableFilter<"Campaign"> | string | null
    gms?: GMProfileListRelationFilter
    players?: PlayerCharacterListRelationFilter
    sessions?: GameSessionListRelationFilter
    infoSessions?: InfoSessionListRelationFilter
    members?: PlayerProfileListRelationFilter
  }, "id" | "name">

  export type CampaignOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrderInput | SortOrder
    name?: SortOrder
    _count?: CampaignCountOrderByAggregateInput
    _avg?: CampaignAvgOrderByAggregateInput
    _max?: CampaignMaxOrderByAggregateInput
    _min?: CampaignMinOrderByAggregateInput
    _sum?: CampaignSumOrderByAggregateInput
  }

  export type CampaignScalarWhereWithAggregatesInput = {
    AND?: CampaignScalarWhereWithAggregatesInput | CampaignScalarWhereWithAggregatesInput[]
    OR?: CampaignScalarWhereWithAggregatesInput[]
    NOT?: CampaignScalarWhereWithAggregatesInput | CampaignScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Campaign"> | number
    description?: StringNullableWithAggregatesFilter<"Campaign"> | string | null
    name?: StringWithAggregatesFilter<"Campaign"> | string
  }

  export type StoryWhereInput = {
    AND?: StoryWhereInput | StoryWhereInput[]
    OR?: StoryWhereInput[]
    NOT?: StoryWhereInput | StoryWhereInput[]
    id?: IntFilter<"Story"> | number
    name?: StringFilter<"Story"> | string
    description?: StringNullableFilter<"Story"> | string | null
    GameSession?: GameSessionListRelationFilter
  }

  export type StoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    GameSession?: GameSessionOrderByRelationAggregateInput
  }

  export type StoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StoryWhereInput | StoryWhereInput[]
    OR?: StoryWhereInput[]
    NOT?: StoryWhereInput | StoryWhereInput[]
    name?: StringFilter<"Story"> | string
    description?: StringNullableFilter<"Story"> | string | null
    GameSession?: GameSessionListRelationFilter
  }, "id">

  export type StoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: StoryCountOrderByAggregateInput
    _avg?: StoryAvgOrderByAggregateInput
    _max?: StoryMaxOrderByAggregateInput
    _min?: StoryMinOrderByAggregateInput
    _sum?: StorySumOrderByAggregateInput
  }

  export type StoryScalarWhereWithAggregatesInput = {
    AND?: StoryScalarWhereWithAggregatesInput | StoryScalarWhereWithAggregatesInput[]
    OR?: StoryScalarWhereWithAggregatesInput[]
    NOT?: StoryScalarWhereWithAggregatesInput | StoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Story"> | number
    name?: StringWithAggregatesFilter<"Story"> | string
    description?: StringNullableWithAggregatesFilter<"Story"> | string | null
  }

  export type QuestWhereInput = {
    AND?: QuestWhereInput | QuestWhereInput[]
    OR?: QuestWhereInput[]
    NOT?: QuestWhereInput | QuestWhereInput[]
    id?: IntFilter<"Quest"> | number
    name?: StringFilter<"Quest"> | string
    description?: StringFilter<"Quest"> | string
    isPrivate?: BoolFilter<"Quest"> | boolean
    dmNotes?: StringFilter<"Quest"> | string
    recLevel?: IntNullableFilter<"Quest"> | number | null
    questID?: IntNullableFilter<"Quest"> | number | null
    gMProfileId?: StringFilter<"Quest"> | string
    author?: XOR<GMProfileRelationFilter, GMProfileWhereInput>
    followUp?: XOR<QuestNullableRelationFilter, QuestWhereInput> | null
    previous?: XOR<QuestNullableRelationFilter, QuestWhereInput> | null
    GameSession?: GameSessionListRelationFilter
  }

  export type QuestOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isPrivate?: SortOrder
    dmNotes?: SortOrder
    recLevel?: SortOrderInput | SortOrder
    questID?: SortOrderInput | SortOrder
    gMProfileId?: SortOrder
    author?: GMProfileOrderByWithRelationInput
    followUp?: QuestOrderByWithRelationInput
    previous?: QuestOrderByWithRelationInput
    GameSession?: GameSessionOrderByRelationAggregateInput
  }

  export type QuestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    questID?: number
    AND?: QuestWhereInput | QuestWhereInput[]
    OR?: QuestWhereInput[]
    NOT?: QuestWhereInput | QuestWhereInput[]
    name?: StringFilter<"Quest"> | string
    description?: StringFilter<"Quest"> | string
    isPrivate?: BoolFilter<"Quest"> | boolean
    dmNotes?: StringFilter<"Quest"> | string
    recLevel?: IntNullableFilter<"Quest"> | number | null
    gMProfileId?: StringFilter<"Quest"> | string
    author?: XOR<GMProfileRelationFilter, GMProfileWhereInput>
    followUp?: XOR<QuestNullableRelationFilter, QuestWhereInput> | null
    previous?: XOR<QuestNullableRelationFilter, QuestWhereInput> | null
    GameSession?: GameSessionListRelationFilter
  }, "id" | "questID">

  export type QuestOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isPrivate?: SortOrder
    dmNotes?: SortOrder
    recLevel?: SortOrderInput | SortOrder
    questID?: SortOrderInput | SortOrder
    gMProfileId?: SortOrder
    _count?: QuestCountOrderByAggregateInput
    _avg?: QuestAvgOrderByAggregateInput
    _max?: QuestMaxOrderByAggregateInput
    _min?: QuestMinOrderByAggregateInput
    _sum?: QuestSumOrderByAggregateInput
  }

  export type QuestScalarWhereWithAggregatesInput = {
    AND?: QuestScalarWhereWithAggregatesInput | QuestScalarWhereWithAggregatesInput[]
    OR?: QuestScalarWhereWithAggregatesInput[]
    NOT?: QuestScalarWhereWithAggregatesInput | QuestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Quest"> | number
    name?: StringWithAggregatesFilter<"Quest"> | string
    description?: StringWithAggregatesFilter<"Quest"> | string
    isPrivate?: BoolWithAggregatesFilter<"Quest"> | boolean
    dmNotes?: StringWithAggregatesFilter<"Quest"> | string
    recLevel?: IntNullableWithAggregatesFilter<"Quest"> | number | null
    questID?: IntNullableWithAggregatesFilter<"Quest"> | number | null
    gMProfileId?: StringWithAggregatesFilter<"Quest"> | string
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    refresh_token_expires_in?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    refresh_token_expires_in?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    refresh_token_expires_in?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    age?: number | null
    fName?: string | null
    lName?: string | null
    bio?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: $Enums.ROLE
    gMProfileId?: string | null
    playerProfileId?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    gmProfile?: GMProfileCreateNestedOneWithoutUserInput
    playerProfile?: PlayerProfileCreateNestedOneWithoutUserInput
    InfoSession?: InfoSessionCreateNestedOneWithoutPlayersInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    age?: number | null
    fName?: string | null
    lName?: string | null
    bio?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: $Enums.ROLE
    gMProfileId?: string | null
    playerProfileId?: string | null
    infoSessionId?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    gmProfile?: GMProfileUncheckedCreateNestedOneWithoutUserInput
    playerProfile?: PlayerProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    fName?: NullableStringFieldUpdateOperationsInput | string | null
    lName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    gMProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    playerProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    gmProfile?: GMProfileUpdateOneWithoutUserNestedInput
    playerProfile?: PlayerProfileUpdateOneWithoutUserNestedInput
    InfoSession?: InfoSessionUpdateOneWithoutPlayersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    fName?: NullableStringFieldUpdateOperationsInput | string | null
    lName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    gMProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    playerProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    infoSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    gmProfile?: GMProfileUncheckedUpdateOneWithoutUserNestedInput
    playerProfile?: PlayerProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    age?: number | null
    fName?: string | null
    lName?: string | null
    bio?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: $Enums.ROLE
    gMProfileId?: string | null
    playerProfileId?: string | null
    infoSessionId?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    fName?: NullableStringFieldUpdateOperationsInput | string | null
    lName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    gMProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    playerProfileId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    fName?: NullableStringFieldUpdateOperationsInput | string | null
    lName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    gMProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    playerProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    infoSessionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GMProfileCreateInput = {
    id?: string
    type: $Enums.HostType
    User: UserCreateNestedOneWithoutGmProfileInput
    GameSession?: GameSessionCreateNestedManyWithoutHostInput
    Campaign?: CampaignCreateNestedManyWithoutGmsInput
    Quest?: QuestCreateNestedManyWithoutAuthorInput
    InfoSession?: InfoSessionCreateNestedManyWithoutHostInput
  }

  export type GMProfileUncheckedCreateInput = {
    id?: string
    userId: string
    type: $Enums.HostType
    GameSession?: GameSessionUncheckedCreateNestedManyWithoutHostInput
    Campaign?: CampaignUncheckedCreateNestedManyWithoutGmsInput
    Quest?: QuestUncheckedCreateNestedManyWithoutAuthorInput
    InfoSession?: InfoSessionUncheckedCreateNestedManyWithoutHostInput
  }

  export type GMProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumHostTypeFieldUpdateOperationsInput | $Enums.HostType
    User?: UserUpdateOneRequiredWithoutGmProfileNestedInput
    GameSession?: GameSessionUpdateManyWithoutHostNestedInput
    Campaign?: CampaignUpdateManyWithoutGmsNestedInput
    Quest?: QuestUpdateManyWithoutAuthorNestedInput
    InfoSession?: InfoSessionUpdateManyWithoutHostNestedInput
  }

  export type GMProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumHostTypeFieldUpdateOperationsInput | $Enums.HostType
    GameSession?: GameSessionUncheckedUpdateManyWithoutHostNestedInput
    Campaign?: CampaignUncheckedUpdateManyWithoutGmsNestedInput
    Quest?: QuestUncheckedUpdateManyWithoutAuthorNestedInput
    InfoSession?: InfoSessionUncheckedUpdateManyWithoutHostNestedInput
  }

  export type GMProfileCreateManyInput = {
    id?: string
    userId: string
    type: $Enums.HostType
  }

  export type GMProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumHostTypeFieldUpdateOperationsInput | $Enums.HostType
  }

  export type GMProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumHostTypeFieldUpdateOperationsInput | $Enums.HostType
  }

  export type PlayerProfileCreateInput = {
    id?: string
    PlayerCharacter?: PlayerCharacterCreateNestedManyWithoutOwnerInput
    User: UserCreateNestedOneWithoutPlayerProfileInput
    Campaign?: CampaignCreateNestedOneWithoutMembersInput
  }

  export type PlayerProfileUncheckedCreateInput = {
    id?: string
    userId: string
    campaignId?: number | null
    PlayerCharacter?: PlayerCharacterUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type PlayerProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    PlayerCharacter?: PlayerCharacterUpdateManyWithoutOwnerNestedInput
    User?: UserUpdateOneRequiredWithoutPlayerProfileNestedInput
    Campaign?: CampaignUpdateOneWithoutMembersNestedInput
  }

  export type PlayerProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    campaignId?: NullableIntFieldUpdateOperationsInput | number | null
    PlayerCharacter?: PlayerCharacterUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type PlayerProfileCreateManyInput = {
    id?: string
    userId: string
    campaignId?: number | null
  }

  export type PlayerProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type PlayerProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    campaignId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PlayerCharacterCreateInput = {
    id?: string
    name: string
    experience?: number
    level?: number
    gold?: number
    backStory?: string | null
    personality?: string | null
    race: string
    active?: boolean
    owner: PlayerProfileCreateNestedOneWithoutPlayerCharacterInput
    GameSession?: GameSessionCreateNestedManyWithoutPlayersInput
    Campaign: CampaignCreateNestedOneWithoutPlayersInput
    character: ClassedEntityCreateNestedOneWithoutPlayerCharacterInput
  }

  export type PlayerCharacterUncheckedCreateInput = {
    id?: string
    name: string
    playerProfileId: string
    campaignId: number
    experience?: number
    level?: number
    gold?: number
    classedEntityId: string
    backStory?: string | null
    personality?: string | null
    race: string
    active?: boolean
    GameSession?: GameSessionUncheckedCreateNestedManyWithoutPlayersInput
  }

  export type PlayerCharacterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    gold?: IntFieldUpdateOperationsInput | number
    backStory?: NullableStringFieldUpdateOperationsInput | string | null
    personality?: NullableStringFieldUpdateOperationsInput | string | null
    race?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    owner?: PlayerProfileUpdateOneRequiredWithoutPlayerCharacterNestedInput
    GameSession?: GameSessionUpdateManyWithoutPlayersNestedInput
    Campaign?: CampaignUpdateOneRequiredWithoutPlayersNestedInput
    character?: ClassedEntityUpdateOneRequiredWithoutPlayerCharacterNestedInput
  }

  export type PlayerCharacterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    playerProfileId?: StringFieldUpdateOperationsInput | string
    campaignId?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    gold?: IntFieldUpdateOperationsInput | number
    classedEntityId?: StringFieldUpdateOperationsInput | string
    backStory?: NullableStringFieldUpdateOperationsInput | string | null
    personality?: NullableStringFieldUpdateOperationsInput | string | null
    race?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    GameSession?: GameSessionUncheckedUpdateManyWithoutPlayersNestedInput
  }

  export type PlayerCharacterCreateManyInput = {
    id?: string
    name: string
    playerProfileId: string
    campaignId: number
    experience?: number
    level?: number
    gold?: number
    classedEntityId: string
    backStory?: string | null
    personality?: string | null
    race: string
    active?: boolean
  }

  export type PlayerCharacterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    gold?: IntFieldUpdateOperationsInput | number
    backStory?: NullableStringFieldUpdateOperationsInput | string | null
    personality?: NullableStringFieldUpdateOperationsInput | string | null
    race?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PlayerCharacterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    playerProfileId?: StringFieldUpdateOperationsInput | string
    campaignId?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    gold?: IntFieldUpdateOperationsInput | number
    classedEntityId?: StringFieldUpdateOperationsInput | string
    backStory?: NullableStringFieldUpdateOperationsInput | string | null
    personality?: NullableStringFieldUpdateOperationsInput | string | null
    race?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ClassedEntityCreateInput = {
    id?: string
    classes?: ClassConfigsCreateNestedManyWithoutClassedEntityInput
    PlayerCharacter?: PlayerCharacterCreateNestedOneWithoutCharacterInput
  }

  export type ClassedEntityUncheckedCreateInput = {
    id?: string
    classes?: ClassConfigsUncheckedCreateNestedManyWithoutClassedEntityInput
    PlayerCharacter?: PlayerCharacterUncheckedCreateNestedOneWithoutCharacterInput
  }

  export type ClassedEntityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    classes?: ClassConfigsUpdateManyWithoutClassedEntityNestedInput
    PlayerCharacter?: PlayerCharacterUpdateOneWithoutCharacterNestedInput
  }

  export type ClassedEntityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    classes?: ClassConfigsUncheckedUpdateManyWithoutClassedEntityNestedInput
    PlayerCharacter?: PlayerCharacterUncheckedUpdateOneWithoutCharacterNestedInput
  }

  export type ClassedEntityCreateManyInput = {
    id?: string
  }

  export type ClassedEntityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type ClassedEntityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type ClassConfigsCreateInput = {
    id?: string
    Level?: number
    ClassedEntity: ClassedEntityCreateNestedOneWithoutClassesInput
    ClassChoice: ClassCreateNestedOneWithoutClassConfigsInput
  }

  export type ClassConfigsUncheckedCreateInput = {
    id?: string
    classId: string
    Level?: number
    classedEntityId: string
  }

  export type ClassConfigsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    Level?: IntFieldUpdateOperationsInput | number
    ClassedEntity?: ClassedEntityUpdateOneRequiredWithoutClassesNestedInput
    ClassChoice?: ClassUpdateOneRequiredWithoutClassConfigsNestedInput
  }

  export type ClassConfigsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    Level?: IntFieldUpdateOperationsInput | number
    classedEntityId?: StringFieldUpdateOperationsInput | string
  }

  export type ClassConfigsCreateManyInput = {
    id?: string
    classId: string
    Level?: number
    classedEntityId: string
  }

  export type ClassConfigsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    Level?: IntFieldUpdateOperationsInput | number
  }

  export type ClassConfigsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    Level?: IntFieldUpdateOperationsInput | number
    classedEntityId?: StringFieldUpdateOperationsInput | string
  }

  export type ClassCreateInput = {
    id?: string
    name: string
    ClassConfigs?: ClassConfigsCreateNestedManyWithoutClassChoiceInput
  }

  export type ClassUncheckedCreateInput = {
    id?: string
    name: string
    ClassConfigs?: ClassConfigsUncheckedCreateNestedManyWithoutClassChoiceInput
  }

  export type ClassUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ClassConfigs?: ClassConfigsUpdateManyWithoutClassChoiceNestedInput
  }

  export type ClassUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ClassConfigs?: ClassConfigsUncheckedUpdateManyWithoutClassChoiceNestedInput
  }

  export type ClassCreateManyInput = {
    id?: string
    name: string
  }

  export type ClassUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ClassUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GameSessionCreateInput = {
    id?: string
    date: Date | string
    duration: number
    description?: string | null
    notes?: string | null
    state?: $Enums.SessionState
    private?: boolean
    maxPlayers?: number
    platform?: string | null
    prework?: string | null
    host: GMProfileCreateNestedOneWithoutGameSessionInput
    players?: PlayerCharacterCreateNestedManyWithoutGameSessionInput
    Campaign: CampaignCreateNestedOneWithoutSessionsInput
    followUpSession?: GameSessionCreateNestedOneWithoutPreviousSessionInput
    previousSession?: GameSessionCreateNestedOneWithoutFollowUpSessionInput
    quest?: QuestCreateNestedOneWithoutGameSessionInput
    story?: StoryCreateNestedOneWithoutGameSessionInput
  }

  export type GameSessionUncheckedCreateInput = {
    id?: string
    date: Date | string
    duration: number
    gMProfileId: string
    description?: string | null
    notes?: string | null
    state?: $Enums.SessionState
    campaignId: number
    private?: boolean
    gameSessionId?: string | null
    questId?: number | null
    storyId?: number | null
    maxPlayers?: number
    platform?: string | null
    prework?: string | null
    players?: PlayerCharacterUncheckedCreateNestedManyWithoutGameSessionInput
    previousSession?: GameSessionUncheckedCreateNestedOneWithoutFollowUpSessionInput
  }

  export type GameSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    state?: EnumSessionStateFieldUpdateOperationsInput | $Enums.SessionState
    private?: BoolFieldUpdateOperationsInput | boolean
    maxPlayers?: IntFieldUpdateOperationsInput | number
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    prework?: NullableStringFieldUpdateOperationsInput | string | null
    host?: GMProfileUpdateOneRequiredWithoutGameSessionNestedInput
    players?: PlayerCharacterUpdateManyWithoutGameSessionNestedInput
    Campaign?: CampaignUpdateOneRequiredWithoutSessionsNestedInput
    followUpSession?: GameSessionUpdateOneWithoutPreviousSessionNestedInput
    previousSession?: GameSessionUpdateOneWithoutFollowUpSessionNestedInput
    quest?: QuestUpdateOneWithoutGameSessionNestedInput
    story?: StoryUpdateOneWithoutGameSessionNestedInput
  }

  export type GameSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    gMProfileId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    state?: EnumSessionStateFieldUpdateOperationsInput | $Enums.SessionState
    campaignId?: IntFieldUpdateOperationsInput | number
    private?: BoolFieldUpdateOperationsInput | boolean
    gameSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    questId?: NullableIntFieldUpdateOperationsInput | number | null
    storyId?: NullableIntFieldUpdateOperationsInput | number | null
    maxPlayers?: IntFieldUpdateOperationsInput | number
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    prework?: NullableStringFieldUpdateOperationsInput | string | null
    players?: PlayerCharacterUncheckedUpdateManyWithoutGameSessionNestedInput
    previousSession?: GameSessionUncheckedUpdateOneWithoutFollowUpSessionNestedInput
  }

  export type GameSessionCreateManyInput = {
    id?: string
    date: Date | string
    duration: number
    gMProfileId: string
    description?: string | null
    notes?: string | null
    state?: $Enums.SessionState
    campaignId: number
    private?: boolean
    gameSessionId?: string | null
    questId?: number | null
    storyId?: number | null
    maxPlayers?: number
    platform?: string | null
    prework?: string | null
  }

  export type GameSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    state?: EnumSessionStateFieldUpdateOperationsInput | $Enums.SessionState
    private?: BoolFieldUpdateOperationsInput | boolean
    maxPlayers?: IntFieldUpdateOperationsInput | number
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    prework?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GameSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    gMProfileId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    state?: EnumSessionStateFieldUpdateOperationsInput | $Enums.SessionState
    campaignId?: IntFieldUpdateOperationsInput | number
    private?: BoolFieldUpdateOperationsInput | boolean
    gameSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    questId?: NullableIntFieldUpdateOperationsInput | number | null
    storyId?: NullableIntFieldUpdateOperationsInput | number | null
    maxPlayers?: IntFieldUpdateOperationsInput | number
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    prework?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InfoSessionCreateInput = {
    id?: string
    date: Date | string
    duration: number
    description?: string | null
    private?: boolean
    host: GMProfileCreateNestedOneWithoutInfoSessionInput
    players?: UserCreateNestedManyWithoutInfoSessionInput
    Campaign?: CampaignCreateNestedOneWithoutInfoSessionsInput
  }

  export type InfoSessionUncheckedCreateInput = {
    id?: string
    date: Date | string
    duration: number
    gMProfileId: string
    description?: string | null
    private?: boolean
    campaignId?: number | null
    players?: UserUncheckedCreateNestedManyWithoutInfoSessionInput
  }

  export type InfoSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    private?: BoolFieldUpdateOperationsInput | boolean
    host?: GMProfileUpdateOneRequiredWithoutInfoSessionNestedInput
    players?: UserUpdateManyWithoutInfoSessionNestedInput
    Campaign?: CampaignUpdateOneWithoutInfoSessionsNestedInput
  }

  export type InfoSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    gMProfileId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    private?: BoolFieldUpdateOperationsInput | boolean
    campaignId?: NullableIntFieldUpdateOperationsInput | number | null
    players?: UserUncheckedUpdateManyWithoutInfoSessionNestedInput
  }

  export type InfoSessionCreateManyInput = {
    id?: string
    date: Date | string
    duration: number
    gMProfileId: string
    description?: string | null
    private?: boolean
    campaignId?: number | null
  }

  export type InfoSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    private?: BoolFieldUpdateOperationsInput | boolean
  }

  export type InfoSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    gMProfileId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    private?: BoolFieldUpdateOperationsInput | boolean
    campaignId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CampaignCreateInput = {
    description?: string | null
    name: string
    gms?: GMProfileCreateNestedManyWithoutCampaignInput
    players?: PlayerCharacterCreateNestedManyWithoutCampaignInput
    sessions?: GameSessionCreateNestedManyWithoutCampaignInput
    infoSessions?: InfoSessionCreateNestedManyWithoutCampaignInput
    members?: PlayerProfileCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateInput = {
    id?: number
    description?: string | null
    name: string
    gms?: GMProfileUncheckedCreateNestedManyWithoutCampaignInput
    players?: PlayerCharacterUncheckedCreateNestedManyWithoutCampaignInput
    sessions?: GameSessionUncheckedCreateNestedManyWithoutCampaignInput
    infoSessions?: InfoSessionUncheckedCreateNestedManyWithoutCampaignInput
    members?: PlayerProfileUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUpdateInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    gms?: GMProfileUpdateManyWithoutCampaignNestedInput
    players?: PlayerCharacterUpdateManyWithoutCampaignNestedInput
    sessions?: GameSessionUpdateManyWithoutCampaignNestedInput
    infoSessions?: InfoSessionUpdateManyWithoutCampaignNestedInput
    members?: PlayerProfileUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    gms?: GMProfileUncheckedUpdateManyWithoutCampaignNestedInput
    players?: PlayerCharacterUncheckedUpdateManyWithoutCampaignNestedInput
    sessions?: GameSessionUncheckedUpdateManyWithoutCampaignNestedInput
    infoSessions?: InfoSessionUncheckedUpdateManyWithoutCampaignNestedInput
    members?: PlayerProfileUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignCreateManyInput = {
    id?: number
    description?: string | null
    name: string
  }

  export type CampaignUpdateManyMutationInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CampaignUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
  }

  export type StoryCreateInput = {
    name: string
    description?: string | null
    GameSession?: GameSessionCreateNestedManyWithoutStoryInput
  }

  export type StoryUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    GameSession?: GameSessionUncheckedCreateNestedManyWithoutStoryInput
  }

  export type StoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    GameSession?: GameSessionUpdateManyWithoutStoryNestedInput
  }

  export type StoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    GameSession?: GameSessionUncheckedUpdateManyWithoutStoryNestedInput
  }

  export type StoryCreateManyInput = {
    id?: number
    name: string
    description?: string | null
  }

  export type StoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuestCreateInput = {
    name: string
    description: string
    isPrivate: boolean
    dmNotes: string
    recLevel?: number | null
    author: GMProfileCreateNestedOneWithoutQuestInput
    followUp?: QuestCreateNestedOneWithoutPreviousInput
    previous?: QuestCreateNestedOneWithoutFollowUpInput
    GameSession?: GameSessionCreateNestedManyWithoutQuestInput
  }

  export type QuestUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    isPrivate: boolean
    dmNotes: string
    recLevel?: number | null
    questID?: number | null
    gMProfileId: string
    previous?: QuestUncheckedCreateNestedOneWithoutFollowUpInput
    GameSession?: GameSessionUncheckedCreateNestedManyWithoutQuestInput
  }

  export type QuestUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    dmNotes?: StringFieldUpdateOperationsInput | string
    recLevel?: NullableIntFieldUpdateOperationsInput | number | null
    author?: GMProfileUpdateOneRequiredWithoutQuestNestedInput
    followUp?: QuestUpdateOneWithoutPreviousNestedInput
    previous?: QuestUpdateOneWithoutFollowUpNestedInput
    GameSession?: GameSessionUpdateManyWithoutQuestNestedInput
  }

  export type QuestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    dmNotes?: StringFieldUpdateOperationsInput | string
    recLevel?: NullableIntFieldUpdateOperationsInput | number | null
    questID?: NullableIntFieldUpdateOperationsInput | number | null
    gMProfileId?: StringFieldUpdateOperationsInput | string
    previous?: QuestUncheckedUpdateOneWithoutFollowUpNestedInput
    GameSession?: GameSessionUncheckedUpdateManyWithoutQuestNestedInput
  }

  export type QuestCreateManyInput = {
    id?: number
    name: string
    description: string
    isPrivate: boolean
    dmNotes: string
    recLevel?: number | null
    questID?: number | null
    gMProfileId: string
  }

  export type QuestUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    dmNotes?: StringFieldUpdateOperationsInput | string
    recLevel?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type QuestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    dmNotes?: StringFieldUpdateOperationsInput | string
    recLevel?: NullableIntFieldUpdateOperationsInput | number | null
    questID?: NullableIntFieldUpdateOperationsInput | number | null
    gMProfileId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    refresh_token_expires_in?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    refresh_token_expires_in?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    refresh_token_expires_in?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumROLEFilter<$PrismaModel = never> = {
    equals?: $Enums.ROLE | EnumROLEFieldRefInput<$PrismaModel>
    in?: $Enums.ROLE[]
    notIn?: $Enums.ROLE[]
    not?: NestedEnumROLEFilter<$PrismaModel> | $Enums.ROLE
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type GMProfileNullableRelationFilter = {
    is?: GMProfileWhereInput | null
    isNot?: GMProfileWhereInput | null
  }

  export type PlayerProfileNullableRelationFilter = {
    is?: PlayerProfileWhereInput | null
    isNot?: PlayerProfileWhereInput | null
  }

  export type InfoSessionNullableRelationFilter = {
    is?: InfoSessionWhereInput | null
    isNot?: InfoSessionWhereInput | null
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    fName?: SortOrder
    lName?: SortOrder
    bio?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    role?: SortOrder
    gMProfileId?: SortOrder
    playerProfileId?: SortOrder
    infoSessionId?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    age?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    fName?: SortOrder
    lName?: SortOrder
    bio?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    role?: SortOrder
    gMProfileId?: SortOrder
    playerProfileId?: SortOrder
    infoSessionId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    fName?: SortOrder
    lName?: SortOrder
    bio?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    role?: SortOrder
    gMProfileId?: SortOrder
    playerProfileId?: SortOrder
    infoSessionId?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    age?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumROLEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ROLE | EnumROLEFieldRefInput<$PrismaModel>
    in?: $Enums.ROLE[]
    notIn?: $Enums.ROLE[]
    not?: NestedEnumROLEWithAggregatesFilter<$PrismaModel> | $Enums.ROLE
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumROLEFilter<$PrismaModel>
    _max?: NestedEnumROLEFilter<$PrismaModel>
  }

  export type EnumHostTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.HostType | EnumHostTypeFieldRefInput<$PrismaModel>
    in?: $Enums.HostType[]
    notIn?: $Enums.HostType[]
    not?: NestedEnumHostTypeFilter<$PrismaModel> | $Enums.HostType
  }

  export type GameSessionListRelationFilter = {
    every?: GameSessionWhereInput
    some?: GameSessionWhereInput
    none?: GameSessionWhereInput
  }

  export type CampaignListRelationFilter = {
    every?: CampaignWhereInput
    some?: CampaignWhereInput
    none?: CampaignWhereInput
  }

  export type QuestListRelationFilter = {
    every?: QuestWhereInput
    some?: QuestWhereInput
    none?: QuestWhereInput
  }

  export type InfoSessionListRelationFilter = {
    every?: InfoSessionWhereInput
    some?: InfoSessionWhereInput
    none?: InfoSessionWhereInput
  }

  export type GameSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CampaignOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InfoSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GMProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
  }

  export type GMProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
  }

  export type GMProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
  }

  export type EnumHostTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HostType | EnumHostTypeFieldRefInput<$PrismaModel>
    in?: $Enums.HostType[]
    notIn?: $Enums.HostType[]
    not?: NestedEnumHostTypeWithAggregatesFilter<$PrismaModel> | $Enums.HostType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumHostTypeFilter<$PrismaModel>
    _max?: NestedEnumHostTypeFilter<$PrismaModel>
  }

  export type PlayerCharacterListRelationFilter = {
    every?: PlayerCharacterWhereInput
    some?: PlayerCharacterWhereInput
    none?: PlayerCharacterWhereInput
  }

  export type CampaignNullableRelationFilter = {
    is?: CampaignWhereInput | null
    isNot?: CampaignWhereInput | null
  }

  export type PlayerCharacterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlayerProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    campaignId?: SortOrder
  }

  export type PlayerProfileAvgOrderByAggregateInput = {
    campaignId?: SortOrder
  }

  export type PlayerProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    campaignId?: SortOrder
  }

  export type PlayerProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    campaignId?: SortOrder
  }

  export type PlayerProfileSumOrderByAggregateInput = {
    campaignId?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PlayerProfileRelationFilter = {
    is?: PlayerProfileWhereInput
    isNot?: PlayerProfileWhereInput
  }

  export type CampaignRelationFilter = {
    is?: CampaignWhereInput
    isNot?: CampaignWhereInput
  }

  export type ClassedEntityRelationFilter = {
    is?: ClassedEntityWhereInput
    isNot?: ClassedEntityWhereInput
  }

  export type PlayerCharacterCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    playerProfileId?: SortOrder
    campaignId?: SortOrder
    experience?: SortOrder
    level?: SortOrder
    gold?: SortOrder
    classedEntityId?: SortOrder
    backStory?: SortOrder
    personality?: SortOrder
    race?: SortOrder
    active?: SortOrder
  }

  export type PlayerCharacterAvgOrderByAggregateInput = {
    campaignId?: SortOrder
    experience?: SortOrder
    level?: SortOrder
    gold?: SortOrder
  }

  export type PlayerCharacterMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    playerProfileId?: SortOrder
    campaignId?: SortOrder
    experience?: SortOrder
    level?: SortOrder
    gold?: SortOrder
    classedEntityId?: SortOrder
    backStory?: SortOrder
    personality?: SortOrder
    race?: SortOrder
    active?: SortOrder
  }

  export type PlayerCharacterMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    playerProfileId?: SortOrder
    campaignId?: SortOrder
    experience?: SortOrder
    level?: SortOrder
    gold?: SortOrder
    classedEntityId?: SortOrder
    backStory?: SortOrder
    personality?: SortOrder
    race?: SortOrder
    active?: SortOrder
  }

  export type PlayerCharacterSumOrderByAggregateInput = {
    campaignId?: SortOrder
    experience?: SortOrder
    level?: SortOrder
    gold?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ClassConfigsListRelationFilter = {
    every?: ClassConfigsWhereInput
    some?: ClassConfigsWhereInput
    none?: ClassConfigsWhereInput
  }

  export type PlayerCharacterNullableRelationFilter = {
    is?: PlayerCharacterWhereInput | null
    isNot?: PlayerCharacterWhereInput | null
  }

  export type ClassConfigsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClassedEntityCountOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ClassedEntityMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ClassedEntityMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ClassRelationFilter = {
    is?: ClassWhereInput
    isNot?: ClassWhereInput
  }

  export type ClassConfigsCountOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
    Level?: SortOrder
    classedEntityId?: SortOrder
  }

  export type ClassConfigsAvgOrderByAggregateInput = {
    Level?: SortOrder
  }

  export type ClassConfigsMaxOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
    Level?: SortOrder
    classedEntityId?: SortOrder
  }

  export type ClassConfigsMinOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
    Level?: SortOrder
    classedEntityId?: SortOrder
  }

  export type ClassConfigsSumOrderByAggregateInput = {
    Level?: SortOrder
  }

  export type ClassCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ClassMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ClassMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type EnumSessionStateFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionState | EnumSessionStateFieldRefInput<$PrismaModel>
    in?: $Enums.SessionState[]
    notIn?: $Enums.SessionState[]
    not?: NestedEnumSessionStateFilter<$PrismaModel> | $Enums.SessionState
  }

  export type GMProfileRelationFilter = {
    is?: GMProfileWhereInput
    isNot?: GMProfileWhereInput
  }

  export type GameSessionNullableRelationFilter = {
    is?: GameSessionWhereInput | null
    isNot?: GameSessionWhereInput | null
  }

  export type QuestNullableRelationFilter = {
    is?: QuestWhereInput | null
    isNot?: QuestWhereInput | null
  }

  export type StoryNullableRelationFilter = {
    is?: StoryWhereInput | null
    isNot?: StoryWhereInput | null
  }

  export type GameSessionCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    duration?: SortOrder
    gMProfileId?: SortOrder
    description?: SortOrder
    notes?: SortOrder
    state?: SortOrder
    campaignId?: SortOrder
    private?: SortOrder
    gameSessionId?: SortOrder
    questId?: SortOrder
    storyId?: SortOrder
    maxPlayers?: SortOrder
    platform?: SortOrder
    prework?: SortOrder
  }

  export type GameSessionAvgOrderByAggregateInput = {
    duration?: SortOrder
    campaignId?: SortOrder
    questId?: SortOrder
    storyId?: SortOrder
    maxPlayers?: SortOrder
  }

  export type GameSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    duration?: SortOrder
    gMProfileId?: SortOrder
    description?: SortOrder
    notes?: SortOrder
    state?: SortOrder
    campaignId?: SortOrder
    private?: SortOrder
    gameSessionId?: SortOrder
    questId?: SortOrder
    storyId?: SortOrder
    maxPlayers?: SortOrder
    platform?: SortOrder
    prework?: SortOrder
  }

  export type GameSessionMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    duration?: SortOrder
    gMProfileId?: SortOrder
    description?: SortOrder
    notes?: SortOrder
    state?: SortOrder
    campaignId?: SortOrder
    private?: SortOrder
    gameSessionId?: SortOrder
    questId?: SortOrder
    storyId?: SortOrder
    maxPlayers?: SortOrder
    platform?: SortOrder
    prework?: SortOrder
  }

  export type GameSessionSumOrderByAggregateInput = {
    duration?: SortOrder
    campaignId?: SortOrder
    questId?: SortOrder
    storyId?: SortOrder
    maxPlayers?: SortOrder
  }

  export type EnumSessionStateWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionState | EnumSessionStateFieldRefInput<$PrismaModel>
    in?: $Enums.SessionState[]
    notIn?: $Enums.SessionState[]
    not?: NestedEnumSessionStateWithAggregatesFilter<$PrismaModel> | $Enums.SessionState
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSessionStateFilter<$PrismaModel>
    _max?: NestedEnumSessionStateFilter<$PrismaModel>
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InfoSessionCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    duration?: SortOrder
    gMProfileId?: SortOrder
    description?: SortOrder
    private?: SortOrder
    campaignId?: SortOrder
  }

  export type InfoSessionAvgOrderByAggregateInput = {
    duration?: SortOrder
    campaignId?: SortOrder
  }

  export type InfoSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    duration?: SortOrder
    gMProfileId?: SortOrder
    description?: SortOrder
    private?: SortOrder
    campaignId?: SortOrder
  }

  export type InfoSessionMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    duration?: SortOrder
    gMProfileId?: SortOrder
    description?: SortOrder
    private?: SortOrder
    campaignId?: SortOrder
  }

  export type InfoSessionSumOrderByAggregateInput = {
    duration?: SortOrder
    campaignId?: SortOrder
  }

  export type GMProfileListRelationFilter = {
    every?: GMProfileWhereInput
    some?: GMProfileWhereInput
    none?: GMProfileWhereInput
  }

  export type PlayerProfileListRelationFilter = {
    every?: PlayerProfileWhereInput
    some?: PlayerProfileWhereInput
    none?: PlayerProfileWhereInput
  }

  export type GMProfileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlayerProfileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CampaignCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    name?: SortOrder
  }

  export type CampaignAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CampaignMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    name?: SortOrder
  }

  export type CampaignMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    name?: SortOrder
  }

  export type CampaignSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type StoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type StoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type StorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type QuestCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isPrivate?: SortOrder
    dmNotes?: SortOrder
    recLevel?: SortOrder
    questID?: SortOrder
    gMProfileId?: SortOrder
  }

  export type QuestAvgOrderByAggregateInput = {
    id?: SortOrder
    recLevel?: SortOrder
    questID?: SortOrder
  }

  export type QuestMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isPrivate?: SortOrder
    dmNotes?: SortOrder
    recLevel?: SortOrder
    questID?: SortOrder
    gMProfileId?: SortOrder
  }

  export type QuestMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isPrivate?: SortOrder
    dmNotes?: SortOrder
    recLevel?: SortOrder
    questID?: SortOrder
    gMProfileId?: SortOrder
  }

  export type QuestSumOrderByAggregateInput = {
    id?: SortOrder
    recLevel?: SortOrder
    questID?: SortOrder
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type GMProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<GMProfileCreateWithoutUserInput, GMProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: GMProfileCreateOrConnectWithoutUserInput
    connect?: GMProfileWhereUniqueInput
  }

  export type PlayerProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<PlayerProfileCreateWithoutUserInput, PlayerProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: PlayerProfileCreateOrConnectWithoutUserInput
    connect?: PlayerProfileWhereUniqueInput
  }

  export type InfoSessionCreateNestedOneWithoutPlayersInput = {
    create?: XOR<InfoSessionCreateWithoutPlayersInput, InfoSessionUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: InfoSessionCreateOrConnectWithoutPlayersInput
    connect?: InfoSessionWhereUniqueInput
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type GMProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<GMProfileCreateWithoutUserInput, GMProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: GMProfileCreateOrConnectWithoutUserInput
    connect?: GMProfileWhereUniqueInput
  }

  export type PlayerProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<PlayerProfileCreateWithoutUserInput, PlayerProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: PlayerProfileCreateOrConnectWithoutUserInput
    connect?: PlayerProfileWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumROLEFieldUpdateOperationsInput = {
    set?: $Enums.ROLE
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type GMProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<GMProfileCreateWithoutUserInput, GMProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: GMProfileCreateOrConnectWithoutUserInput
    upsert?: GMProfileUpsertWithoutUserInput
    disconnect?: GMProfileWhereInput | boolean
    delete?: GMProfileWhereInput | boolean
    connect?: GMProfileWhereUniqueInput
    update?: XOR<XOR<GMProfileUpdateToOneWithWhereWithoutUserInput, GMProfileUpdateWithoutUserInput>, GMProfileUncheckedUpdateWithoutUserInput>
  }

  export type PlayerProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<PlayerProfileCreateWithoutUserInput, PlayerProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: PlayerProfileCreateOrConnectWithoutUserInput
    upsert?: PlayerProfileUpsertWithoutUserInput
    disconnect?: PlayerProfileWhereInput | boolean
    delete?: PlayerProfileWhereInput | boolean
    connect?: PlayerProfileWhereUniqueInput
    update?: XOR<XOR<PlayerProfileUpdateToOneWithWhereWithoutUserInput, PlayerProfileUpdateWithoutUserInput>, PlayerProfileUncheckedUpdateWithoutUserInput>
  }

  export type InfoSessionUpdateOneWithoutPlayersNestedInput = {
    create?: XOR<InfoSessionCreateWithoutPlayersInput, InfoSessionUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: InfoSessionCreateOrConnectWithoutPlayersInput
    upsert?: InfoSessionUpsertWithoutPlayersInput
    disconnect?: InfoSessionWhereInput | boolean
    delete?: InfoSessionWhereInput | boolean
    connect?: InfoSessionWhereUniqueInput
    update?: XOR<XOR<InfoSessionUpdateToOneWithWhereWithoutPlayersInput, InfoSessionUpdateWithoutPlayersInput>, InfoSessionUncheckedUpdateWithoutPlayersInput>
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type GMProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<GMProfileCreateWithoutUserInput, GMProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: GMProfileCreateOrConnectWithoutUserInput
    upsert?: GMProfileUpsertWithoutUserInput
    disconnect?: GMProfileWhereInput | boolean
    delete?: GMProfileWhereInput | boolean
    connect?: GMProfileWhereUniqueInput
    update?: XOR<XOR<GMProfileUpdateToOneWithWhereWithoutUserInput, GMProfileUpdateWithoutUserInput>, GMProfileUncheckedUpdateWithoutUserInput>
  }

  export type PlayerProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<PlayerProfileCreateWithoutUserInput, PlayerProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: PlayerProfileCreateOrConnectWithoutUserInput
    upsert?: PlayerProfileUpsertWithoutUserInput
    disconnect?: PlayerProfileWhereInput | boolean
    delete?: PlayerProfileWhereInput | boolean
    connect?: PlayerProfileWhereUniqueInput
    update?: XOR<XOR<PlayerProfileUpdateToOneWithWhereWithoutUserInput, PlayerProfileUpdateWithoutUserInput>, PlayerProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutGmProfileInput = {
    create?: XOR<UserCreateWithoutGmProfileInput, UserUncheckedCreateWithoutGmProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutGmProfileInput
    connect?: UserWhereUniqueInput
  }

  export type GameSessionCreateNestedManyWithoutHostInput = {
    create?: XOR<GameSessionCreateWithoutHostInput, GameSessionUncheckedCreateWithoutHostInput> | GameSessionCreateWithoutHostInput[] | GameSessionUncheckedCreateWithoutHostInput[]
    connectOrCreate?: GameSessionCreateOrConnectWithoutHostInput | GameSessionCreateOrConnectWithoutHostInput[]
    createMany?: GameSessionCreateManyHostInputEnvelope
    connect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
  }

  export type CampaignCreateNestedManyWithoutGmsInput = {
    create?: XOR<CampaignCreateWithoutGmsInput, CampaignUncheckedCreateWithoutGmsInput> | CampaignCreateWithoutGmsInput[] | CampaignUncheckedCreateWithoutGmsInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutGmsInput | CampaignCreateOrConnectWithoutGmsInput[]
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
  }

  export type QuestCreateNestedManyWithoutAuthorInput = {
    create?: XOR<QuestCreateWithoutAuthorInput, QuestUncheckedCreateWithoutAuthorInput> | QuestCreateWithoutAuthorInput[] | QuestUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: QuestCreateOrConnectWithoutAuthorInput | QuestCreateOrConnectWithoutAuthorInput[]
    createMany?: QuestCreateManyAuthorInputEnvelope
    connect?: QuestWhereUniqueInput | QuestWhereUniqueInput[]
  }

  export type InfoSessionCreateNestedManyWithoutHostInput = {
    create?: XOR<InfoSessionCreateWithoutHostInput, InfoSessionUncheckedCreateWithoutHostInput> | InfoSessionCreateWithoutHostInput[] | InfoSessionUncheckedCreateWithoutHostInput[]
    connectOrCreate?: InfoSessionCreateOrConnectWithoutHostInput | InfoSessionCreateOrConnectWithoutHostInput[]
    createMany?: InfoSessionCreateManyHostInputEnvelope
    connect?: InfoSessionWhereUniqueInput | InfoSessionWhereUniqueInput[]
  }

  export type GameSessionUncheckedCreateNestedManyWithoutHostInput = {
    create?: XOR<GameSessionCreateWithoutHostInput, GameSessionUncheckedCreateWithoutHostInput> | GameSessionCreateWithoutHostInput[] | GameSessionUncheckedCreateWithoutHostInput[]
    connectOrCreate?: GameSessionCreateOrConnectWithoutHostInput | GameSessionCreateOrConnectWithoutHostInput[]
    createMany?: GameSessionCreateManyHostInputEnvelope
    connect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
  }

  export type CampaignUncheckedCreateNestedManyWithoutGmsInput = {
    create?: XOR<CampaignCreateWithoutGmsInput, CampaignUncheckedCreateWithoutGmsInput> | CampaignCreateWithoutGmsInput[] | CampaignUncheckedCreateWithoutGmsInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutGmsInput | CampaignCreateOrConnectWithoutGmsInput[]
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
  }

  export type QuestUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<QuestCreateWithoutAuthorInput, QuestUncheckedCreateWithoutAuthorInput> | QuestCreateWithoutAuthorInput[] | QuestUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: QuestCreateOrConnectWithoutAuthorInput | QuestCreateOrConnectWithoutAuthorInput[]
    createMany?: QuestCreateManyAuthorInputEnvelope
    connect?: QuestWhereUniqueInput | QuestWhereUniqueInput[]
  }

  export type InfoSessionUncheckedCreateNestedManyWithoutHostInput = {
    create?: XOR<InfoSessionCreateWithoutHostInput, InfoSessionUncheckedCreateWithoutHostInput> | InfoSessionCreateWithoutHostInput[] | InfoSessionUncheckedCreateWithoutHostInput[]
    connectOrCreate?: InfoSessionCreateOrConnectWithoutHostInput | InfoSessionCreateOrConnectWithoutHostInput[]
    createMany?: InfoSessionCreateManyHostInputEnvelope
    connect?: InfoSessionWhereUniqueInput | InfoSessionWhereUniqueInput[]
  }

  export type EnumHostTypeFieldUpdateOperationsInput = {
    set?: $Enums.HostType
  }

  export type UserUpdateOneRequiredWithoutGmProfileNestedInput = {
    create?: XOR<UserCreateWithoutGmProfileInput, UserUncheckedCreateWithoutGmProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutGmProfileInput
    upsert?: UserUpsertWithoutGmProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGmProfileInput, UserUpdateWithoutGmProfileInput>, UserUncheckedUpdateWithoutGmProfileInput>
  }

  export type GameSessionUpdateManyWithoutHostNestedInput = {
    create?: XOR<GameSessionCreateWithoutHostInput, GameSessionUncheckedCreateWithoutHostInput> | GameSessionCreateWithoutHostInput[] | GameSessionUncheckedCreateWithoutHostInput[]
    connectOrCreate?: GameSessionCreateOrConnectWithoutHostInput | GameSessionCreateOrConnectWithoutHostInput[]
    upsert?: GameSessionUpsertWithWhereUniqueWithoutHostInput | GameSessionUpsertWithWhereUniqueWithoutHostInput[]
    createMany?: GameSessionCreateManyHostInputEnvelope
    set?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    disconnect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    delete?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    connect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    update?: GameSessionUpdateWithWhereUniqueWithoutHostInput | GameSessionUpdateWithWhereUniqueWithoutHostInput[]
    updateMany?: GameSessionUpdateManyWithWhereWithoutHostInput | GameSessionUpdateManyWithWhereWithoutHostInput[]
    deleteMany?: GameSessionScalarWhereInput | GameSessionScalarWhereInput[]
  }

  export type CampaignUpdateManyWithoutGmsNestedInput = {
    create?: XOR<CampaignCreateWithoutGmsInput, CampaignUncheckedCreateWithoutGmsInput> | CampaignCreateWithoutGmsInput[] | CampaignUncheckedCreateWithoutGmsInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutGmsInput | CampaignCreateOrConnectWithoutGmsInput[]
    upsert?: CampaignUpsertWithWhereUniqueWithoutGmsInput | CampaignUpsertWithWhereUniqueWithoutGmsInput[]
    set?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    disconnect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    delete?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    update?: CampaignUpdateWithWhereUniqueWithoutGmsInput | CampaignUpdateWithWhereUniqueWithoutGmsInput[]
    updateMany?: CampaignUpdateManyWithWhereWithoutGmsInput | CampaignUpdateManyWithWhereWithoutGmsInput[]
    deleteMany?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
  }

  export type QuestUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<QuestCreateWithoutAuthorInput, QuestUncheckedCreateWithoutAuthorInput> | QuestCreateWithoutAuthorInput[] | QuestUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: QuestCreateOrConnectWithoutAuthorInput | QuestCreateOrConnectWithoutAuthorInput[]
    upsert?: QuestUpsertWithWhereUniqueWithoutAuthorInput | QuestUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: QuestCreateManyAuthorInputEnvelope
    set?: QuestWhereUniqueInput | QuestWhereUniqueInput[]
    disconnect?: QuestWhereUniqueInput | QuestWhereUniqueInput[]
    delete?: QuestWhereUniqueInput | QuestWhereUniqueInput[]
    connect?: QuestWhereUniqueInput | QuestWhereUniqueInput[]
    update?: QuestUpdateWithWhereUniqueWithoutAuthorInput | QuestUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: QuestUpdateManyWithWhereWithoutAuthorInput | QuestUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: QuestScalarWhereInput | QuestScalarWhereInput[]
  }

  export type InfoSessionUpdateManyWithoutHostNestedInput = {
    create?: XOR<InfoSessionCreateWithoutHostInput, InfoSessionUncheckedCreateWithoutHostInput> | InfoSessionCreateWithoutHostInput[] | InfoSessionUncheckedCreateWithoutHostInput[]
    connectOrCreate?: InfoSessionCreateOrConnectWithoutHostInput | InfoSessionCreateOrConnectWithoutHostInput[]
    upsert?: InfoSessionUpsertWithWhereUniqueWithoutHostInput | InfoSessionUpsertWithWhereUniqueWithoutHostInput[]
    createMany?: InfoSessionCreateManyHostInputEnvelope
    set?: InfoSessionWhereUniqueInput | InfoSessionWhereUniqueInput[]
    disconnect?: InfoSessionWhereUniqueInput | InfoSessionWhereUniqueInput[]
    delete?: InfoSessionWhereUniqueInput | InfoSessionWhereUniqueInput[]
    connect?: InfoSessionWhereUniqueInput | InfoSessionWhereUniqueInput[]
    update?: InfoSessionUpdateWithWhereUniqueWithoutHostInput | InfoSessionUpdateWithWhereUniqueWithoutHostInput[]
    updateMany?: InfoSessionUpdateManyWithWhereWithoutHostInput | InfoSessionUpdateManyWithWhereWithoutHostInput[]
    deleteMany?: InfoSessionScalarWhereInput | InfoSessionScalarWhereInput[]
  }

  export type GameSessionUncheckedUpdateManyWithoutHostNestedInput = {
    create?: XOR<GameSessionCreateWithoutHostInput, GameSessionUncheckedCreateWithoutHostInput> | GameSessionCreateWithoutHostInput[] | GameSessionUncheckedCreateWithoutHostInput[]
    connectOrCreate?: GameSessionCreateOrConnectWithoutHostInput | GameSessionCreateOrConnectWithoutHostInput[]
    upsert?: GameSessionUpsertWithWhereUniqueWithoutHostInput | GameSessionUpsertWithWhereUniqueWithoutHostInput[]
    createMany?: GameSessionCreateManyHostInputEnvelope
    set?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    disconnect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    delete?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    connect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    update?: GameSessionUpdateWithWhereUniqueWithoutHostInput | GameSessionUpdateWithWhereUniqueWithoutHostInput[]
    updateMany?: GameSessionUpdateManyWithWhereWithoutHostInput | GameSessionUpdateManyWithWhereWithoutHostInput[]
    deleteMany?: GameSessionScalarWhereInput | GameSessionScalarWhereInput[]
  }

  export type CampaignUncheckedUpdateManyWithoutGmsNestedInput = {
    create?: XOR<CampaignCreateWithoutGmsInput, CampaignUncheckedCreateWithoutGmsInput> | CampaignCreateWithoutGmsInput[] | CampaignUncheckedCreateWithoutGmsInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutGmsInput | CampaignCreateOrConnectWithoutGmsInput[]
    upsert?: CampaignUpsertWithWhereUniqueWithoutGmsInput | CampaignUpsertWithWhereUniqueWithoutGmsInput[]
    set?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    disconnect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    delete?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    update?: CampaignUpdateWithWhereUniqueWithoutGmsInput | CampaignUpdateWithWhereUniqueWithoutGmsInput[]
    updateMany?: CampaignUpdateManyWithWhereWithoutGmsInput | CampaignUpdateManyWithWhereWithoutGmsInput[]
    deleteMany?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
  }

  export type QuestUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<QuestCreateWithoutAuthorInput, QuestUncheckedCreateWithoutAuthorInput> | QuestCreateWithoutAuthorInput[] | QuestUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: QuestCreateOrConnectWithoutAuthorInput | QuestCreateOrConnectWithoutAuthorInput[]
    upsert?: QuestUpsertWithWhereUniqueWithoutAuthorInput | QuestUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: QuestCreateManyAuthorInputEnvelope
    set?: QuestWhereUniqueInput | QuestWhereUniqueInput[]
    disconnect?: QuestWhereUniqueInput | QuestWhereUniqueInput[]
    delete?: QuestWhereUniqueInput | QuestWhereUniqueInput[]
    connect?: QuestWhereUniqueInput | QuestWhereUniqueInput[]
    update?: QuestUpdateWithWhereUniqueWithoutAuthorInput | QuestUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: QuestUpdateManyWithWhereWithoutAuthorInput | QuestUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: QuestScalarWhereInput | QuestScalarWhereInput[]
  }

  export type InfoSessionUncheckedUpdateManyWithoutHostNestedInput = {
    create?: XOR<InfoSessionCreateWithoutHostInput, InfoSessionUncheckedCreateWithoutHostInput> | InfoSessionCreateWithoutHostInput[] | InfoSessionUncheckedCreateWithoutHostInput[]
    connectOrCreate?: InfoSessionCreateOrConnectWithoutHostInput | InfoSessionCreateOrConnectWithoutHostInput[]
    upsert?: InfoSessionUpsertWithWhereUniqueWithoutHostInput | InfoSessionUpsertWithWhereUniqueWithoutHostInput[]
    createMany?: InfoSessionCreateManyHostInputEnvelope
    set?: InfoSessionWhereUniqueInput | InfoSessionWhereUniqueInput[]
    disconnect?: InfoSessionWhereUniqueInput | InfoSessionWhereUniqueInput[]
    delete?: InfoSessionWhereUniqueInput | InfoSessionWhereUniqueInput[]
    connect?: InfoSessionWhereUniqueInput | InfoSessionWhereUniqueInput[]
    update?: InfoSessionUpdateWithWhereUniqueWithoutHostInput | InfoSessionUpdateWithWhereUniqueWithoutHostInput[]
    updateMany?: InfoSessionUpdateManyWithWhereWithoutHostInput | InfoSessionUpdateManyWithWhereWithoutHostInput[]
    deleteMany?: InfoSessionScalarWhereInput | InfoSessionScalarWhereInput[]
  }

  export type PlayerCharacterCreateNestedManyWithoutOwnerInput = {
    create?: XOR<PlayerCharacterCreateWithoutOwnerInput, PlayerCharacterUncheckedCreateWithoutOwnerInput> | PlayerCharacterCreateWithoutOwnerInput[] | PlayerCharacterUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PlayerCharacterCreateOrConnectWithoutOwnerInput | PlayerCharacterCreateOrConnectWithoutOwnerInput[]
    createMany?: PlayerCharacterCreateManyOwnerInputEnvelope
    connect?: PlayerCharacterWhereUniqueInput | PlayerCharacterWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutPlayerProfileInput = {
    create?: XOR<UserCreateWithoutPlayerProfileInput, UserUncheckedCreateWithoutPlayerProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlayerProfileInput
    connect?: UserWhereUniqueInput
  }

  export type CampaignCreateNestedOneWithoutMembersInput = {
    create?: XOR<CampaignCreateWithoutMembersInput, CampaignUncheckedCreateWithoutMembersInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutMembersInput
    connect?: CampaignWhereUniqueInput
  }

  export type PlayerCharacterUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<PlayerCharacterCreateWithoutOwnerInput, PlayerCharacterUncheckedCreateWithoutOwnerInput> | PlayerCharacterCreateWithoutOwnerInput[] | PlayerCharacterUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PlayerCharacterCreateOrConnectWithoutOwnerInput | PlayerCharacterCreateOrConnectWithoutOwnerInput[]
    createMany?: PlayerCharacterCreateManyOwnerInputEnvelope
    connect?: PlayerCharacterWhereUniqueInput | PlayerCharacterWhereUniqueInput[]
  }

  export type PlayerCharacterUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<PlayerCharacterCreateWithoutOwnerInput, PlayerCharacterUncheckedCreateWithoutOwnerInput> | PlayerCharacterCreateWithoutOwnerInput[] | PlayerCharacterUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PlayerCharacterCreateOrConnectWithoutOwnerInput | PlayerCharacterCreateOrConnectWithoutOwnerInput[]
    upsert?: PlayerCharacterUpsertWithWhereUniqueWithoutOwnerInput | PlayerCharacterUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: PlayerCharacterCreateManyOwnerInputEnvelope
    set?: PlayerCharacterWhereUniqueInput | PlayerCharacterWhereUniqueInput[]
    disconnect?: PlayerCharacterWhereUniqueInput | PlayerCharacterWhereUniqueInput[]
    delete?: PlayerCharacterWhereUniqueInput | PlayerCharacterWhereUniqueInput[]
    connect?: PlayerCharacterWhereUniqueInput | PlayerCharacterWhereUniqueInput[]
    update?: PlayerCharacterUpdateWithWhereUniqueWithoutOwnerInput | PlayerCharacterUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: PlayerCharacterUpdateManyWithWhereWithoutOwnerInput | PlayerCharacterUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: PlayerCharacterScalarWhereInput | PlayerCharacterScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutPlayerProfileNestedInput = {
    create?: XOR<UserCreateWithoutPlayerProfileInput, UserUncheckedCreateWithoutPlayerProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlayerProfileInput
    upsert?: UserUpsertWithoutPlayerProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPlayerProfileInput, UserUpdateWithoutPlayerProfileInput>, UserUncheckedUpdateWithoutPlayerProfileInput>
  }

  export type CampaignUpdateOneWithoutMembersNestedInput = {
    create?: XOR<CampaignCreateWithoutMembersInput, CampaignUncheckedCreateWithoutMembersInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutMembersInput
    upsert?: CampaignUpsertWithoutMembersInput
    disconnect?: CampaignWhereInput | boolean
    delete?: CampaignWhereInput | boolean
    connect?: CampaignWhereUniqueInput
    update?: XOR<XOR<CampaignUpdateToOneWithWhereWithoutMembersInput, CampaignUpdateWithoutMembersInput>, CampaignUncheckedUpdateWithoutMembersInput>
  }

  export type PlayerCharacterUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<PlayerCharacterCreateWithoutOwnerInput, PlayerCharacterUncheckedCreateWithoutOwnerInput> | PlayerCharacterCreateWithoutOwnerInput[] | PlayerCharacterUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PlayerCharacterCreateOrConnectWithoutOwnerInput | PlayerCharacterCreateOrConnectWithoutOwnerInput[]
    upsert?: PlayerCharacterUpsertWithWhereUniqueWithoutOwnerInput | PlayerCharacterUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: PlayerCharacterCreateManyOwnerInputEnvelope
    set?: PlayerCharacterWhereUniqueInput | PlayerCharacterWhereUniqueInput[]
    disconnect?: PlayerCharacterWhereUniqueInput | PlayerCharacterWhereUniqueInput[]
    delete?: PlayerCharacterWhereUniqueInput | PlayerCharacterWhereUniqueInput[]
    connect?: PlayerCharacterWhereUniqueInput | PlayerCharacterWhereUniqueInput[]
    update?: PlayerCharacterUpdateWithWhereUniqueWithoutOwnerInput | PlayerCharacterUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: PlayerCharacterUpdateManyWithWhereWithoutOwnerInput | PlayerCharacterUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: PlayerCharacterScalarWhereInput | PlayerCharacterScalarWhereInput[]
  }

  export type PlayerProfileCreateNestedOneWithoutPlayerCharacterInput = {
    create?: XOR<PlayerProfileCreateWithoutPlayerCharacterInput, PlayerProfileUncheckedCreateWithoutPlayerCharacterInput>
    connectOrCreate?: PlayerProfileCreateOrConnectWithoutPlayerCharacterInput
    connect?: PlayerProfileWhereUniqueInput
  }

  export type GameSessionCreateNestedManyWithoutPlayersInput = {
    create?: XOR<GameSessionCreateWithoutPlayersInput, GameSessionUncheckedCreateWithoutPlayersInput> | GameSessionCreateWithoutPlayersInput[] | GameSessionUncheckedCreateWithoutPlayersInput[]
    connectOrCreate?: GameSessionCreateOrConnectWithoutPlayersInput | GameSessionCreateOrConnectWithoutPlayersInput[]
    connect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
  }

  export type CampaignCreateNestedOneWithoutPlayersInput = {
    create?: XOR<CampaignCreateWithoutPlayersInput, CampaignUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutPlayersInput
    connect?: CampaignWhereUniqueInput
  }

  export type ClassedEntityCreateNestedOneWithoutPlayerCharacterInput = {
    create?: XOR<ClassedEntityCreateWithoutPlayerCharacterInput, ClassedEntityUncheckedCreateWithoutPlayerCharacterInput>
    connectOrCreate?: ClassedEntityCreateOrConnectWithoutPlayerCharacterInput
    connect?: ClassedEntityWhereUniqueInput
  }

  export type GameSessionUncheckedCreateNestedManyWithoutPlayersInput = {
    create?: XOR<GameSessionCreateWithoutPlayersInput, GameSessionUncheckedCreateWithoutPlayersInput> | GameSessionCreateWithoutPlayersInput[] | GameSessionUncheckedCreateWithoutPlayersInput[]
    connectOrCreate?: GameSessionCreateOrConnectWithoutPlayersInput | GameSessionCreateOrConnectWithoutPlayersInput[]
    connect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PlayerProfileUpdateOneRequiredWithoutPlayerCharacterNestedInput = {
    create?: XOR<PlayerProfileCreateWithoutPlayerCharacterInput, PlayerProfileUncheckedCreateWithoutPlayerCharacterInput>
    connectOrCreate?: PlayerProfileCreateOrConnectWithoutPlayerCharacterInput
    upsert?: PlayerProfileUpsertWithoutPlayerCharacterInput
    connect?: PlayerProfileWhereUniqueInput
    update?: XOR<XOR<PlayerProfileUpdateToOneWithWhereWithoutPlayerCharacterInput, PlayerProfileUpdateWithoutPlayerCharacterInput>, PlayerProfileUncheckedUpdateWithoutPlayerCharacterInput>
  }

  export type GameSessionUpdateManyWithoutPlayersNestedInput = {
    create?: XOR<GameSessionCreateWithoutPlayersInput, GameSessionUncheckedCreateWithoutPlayersInput> | GameSessionCreateWithoutPlayersInput[] | GameSessionUncheckedCreateWithoutPlayersInput[]
    connectOrCreate?: GameSessionCreateOrConnectWithoutPlayersInput | GameSessionCreateOrConnectWithoutPlayersInput[]
    upsert?: GameSessionUpsertWithWhereUniqueWithoutPlayersInput | GameSessionUpsertWithWhereUniqueWithoutPlayersInput[]
    set?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    disconnect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    delete?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    connect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    update?: GameSessionUpdateWithWhereUniqueWithoutPlayersInput | GameSessionUpdateWithWhereUniqueWithoutPlayersInput[]
    updateMany?: GameSessionUpdateManyWithWhereWithoutPlayersInput | GameSessionUpdateManyWithWhereWithoutPlayersInput[]
    deleteMany?: GameSessionScalarWhereInput | GameSessionScalarWhereInput[]
  }

  export type CampaignUpdateOneRequiredWithoutPlayersNestedInput = {
    create?: XOR<CampaignCreateWithoutPlayersInput, CampaignUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutPlayersInput
    upsert?: CampaignUpsertWithoutPlayersInput
    connect?: CampaignWhereUniqueInput
    update?: XOR<XOR<CampaignUpdateToOneWithWhereWithoutPlayersInput, CampaignUpdateWithoutPlayersInput>, CampaignUncheckedUpdateWithoutPlayersInput>
  }

  export type ClassedEntityUpdateOneRequiredWithoutPlayerCharacterNestedInput = {
    create?: XOR<ClassedEntityCreateWithoutPlayerCharacterInput, ClassedEntityUncheckedCreateWithoutPlayerCharacterInput>
    connectOrCreate?: ClassedEntityCreateOrConnectWithoutPlayerCharacterInput
    upsert?: ClassedEntityUpsertWithoutPlayerCharacterInput
    connect?: ClassedEntityWhereUniqueInput
    update?: XOR<XOR<ClassedEntityUpdateToOneWithWhereWithoutPlayerCharacterInput, ClassedEntityUpdateWithoutPlayerCharacterInput>, ClassedEntityUncheckedUpdateWithoutPlayerCharacterInput>
  }

  export type GameSessionUncheckedUpdateManyWithoutPlayersNestedInput = {
    create?: XOR<GameSessionCreateWithoutPlayersInput, GameSessionUncheckedCreateWithoutPlayersInput> | GameSessionCreateWithoutPlayersInput[] | GameSessionUncheckedCreateWithoutPlayersInput[]
    connectOrCreate?: GameSessionCreateOrConnectWithoutPlayersInput | GameSessionCreateOrConnectWithoutPlayersInput[]
    upsert?: GameSessionUpsertWithWhereUniqueWithoutPlayersInput | GameSessionUpsertWithWhereUniqueWithoutPlayersInput[]
    set?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    disconnect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    delete?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    connect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    update?: GameSessionUpdateWithWhereUniqueWithoutPlayersInput | GameSessionUpdateWithWhereUniqueWithoutPlayersInput[]
    updateMany?: GameSessionUpdateManyWithWhereWithoutPlayersInput | GameSessionUpdateManyWithWhereWithoutPlayersInput[]
    deleteMany?: GameSessionScalarWhereInput | GameSessionScalarWhereInput[]
  }

  export type ClassConfigsCreateNestedManyWithoutClassedEntityInput = {
    create?: XOR<ClassConfigsCreateWithoutClassedEntityInput, ClassConfigsUncheckedCreateWithoutClassedEntityInput> | ClassConfigsCreateWithoutClassedEntityInput[] | ClassConfigsUncheckedCreateWithoutClassedEntityInput[]
    connectOrCreate?: ClassConfigsCreateOrConnectWithoutClassedEntityInput | ClassConfigsCreateOrConnectWithoutClassedEntityInput[]
    createMany?: ClassConfigsCreateManyClassedEntityInputEnvelope
    connect?: ClassConfigsWhereUniqueInput | ClassConfigsWhereUniqueInput[]
  }

  export type PlayerCharacterCreateNestedOneWithoutCharacterInput = {
    create?: XOR<PlayerCharacterCreateWithoutCharacterInput, PlayerCharacterUncheckedCreateWithoutCharacterInput>
    connectOrCreate?: PlayerCharacterCreateOrConnectWithoutCharacterInput
    connect?: PlayerCharacterWhereUniqueInput
  }

  export type ClassConfigsUncheckedCreateNestedManyWithoutClassedEntityInput = {
    create?: XOR<ClassConfigsCreateWithoutClassedEntityInput, ClassConfigsUncheckedCreateWithoutClassedEntityInput> | ClassConfigsCreateWithoutClassedEntityInput[] | ClassConfigsUncheckedCreateWithoutClassedEntityInput[]
    connectOrCreate?: ClassConfigsCreateOrConnectWithoutClassedEntityInput | ClassConfigsCreateOrConnectWithoutClassedEntityInput[]
    createMany?: ClassConfigsCreateManyClassedEntityInputEnvelope
    connect?: ClassConfigsWhereUniqueInput | ClassConfigsWhereUniqueInput[]
  }

  export type PlayerCharacterUncheckedCreateNestedOneWithoutCharacterInput = {
    create?: XOR<PlayerCharacterCreateWithoutCharacterInput, PlayerCharacterUncheckedCreateWithoutCharacterInput>
    connectOrCreate?: PlayerCharacterCreateOrConnectWithoutCharacterInput
    connect?: PlayerCharacterWhereUniqueInput
  }

  export type ClassConfigsUpdateManyWithoutClassedEntityNestedInput = {
    create?: XOR<ClassConfigsCreateWithoutClassedEntityInput, ClassConfigsUncheckedCreateWithoutClassedEntityInput> | ClassConfigsCreateWithoutClassedEntityInput[] | ClassConfigsUncheckedCreateWithoutClassedEntityInput[]
    connectOrCreate?: ClassConfigsCreateOrConnectWithoutClassedEntityInput | ClassConfigsCreateOrConnectWithoutClassedEntityInput[]
    upsert?: ClassConfigsUpsertWithWhereUniqueWithoutClassedEntityInput | ClassConfigsUpsertWithWhereUniqueWithoutClassedEntityInput[]
    createMany?: ClassConfigsCreateManyClassedEntityInputEnvelope
    set?: ClassConfigsWhereUniqueInput | ClassConfigsWhereUniqueInput[]
    disconnect?: ClassConfigsWhereUniqueInput | ClassConfigsWhereUniqueInput[]
    delete?: ClassConfigsWhereUniqueInput | ClassConfigsWhereUniqueInput[]
    connect?: ClassConfigsWhereUniqueInput | ClassConfigsWhereUniqueInput[]
    update?: ClassConfigsUpdateWithWhereUniqueWithoutClassedEntityInput | ClassConfigsUpdateWithWhereUniqueWithoutClassedEntityInput[]
    updateMany?: ClassConfigsUpdateManyWithWhereWithoutClassedEntityInput | ClassConfigsUpdateManyWithWhereWithoutClassedEntityInput[]
    deleteMany?: ClassConfigsScalarWhereInput | ClassConfigsScalarWhereInput[]
  }

  export type PlayerCharacterUpdateOneWithoutCharacterNestedInput = {
    create?: XOR<PlayerCharacterCreateWithoutCharacterInput, PlayerCharacterUncheckedCreateWithoutCharacterInput>
    connectOrCreate?: PlayerCharacterCreateOrConnectWithoutCharacterInput
    upsert?: PlayerCharacterUpsertWithoutCharacterInput
    disconnect?: PlayerCharacterWhereInput | boolean
    delete?: PlayerCharacterWhereInput | boolean
    connect?: PlayerCharacterWhereUniqueInput
    update?: XOR<XOR<PlayerCharacterUpdateToOneWithWhereWithoutCharacterInput, PlayerCharacterUpdateWithoutCharacterInput>, PlayerCharacterUncheckedUpdateWithoutCharacterInput>
  }

  export type ClassConfigsUncheckedUpdateManyWithoutClassedEntityNestedInput = {
    create?: XOR<ClassConfigsCreateWithoutClassedEntityInput, ClassConfigsUncheckedCreateWithoutClassedEntityInput> | ClassConfigsCreateWithoutClassedEntityInput[] | ClassConfigsUncheckedCreateWithoutClassedEntityInput[]
    connectOrCreate?: ClassConfigsCreateOrConnectWithoutClassedEntityInput | ClassConfigsCreateOrConnectWithoutClassedEntityInput[]
    upsert?: ClassConfigsUpsertWithWhereUniqueWithoutClassedEntityInput | ClassConfigsUpsertWithWhereUniqueWithoutClassedEntityInput[]
    createMany?: ClassConfigsCreateManyClassedEntityInputEnvelope
    set?: ClassConfigsWhereUniqueInput | ClassConfigsWhereUniqueInput[]
    disconnect?: ClassConfigsWhereUniqueInput | ClassConfigsWhereUniqueInput[]
    delete?: ClassConfigsWhereUniqueInput | ClassConfigsWhereUniqueInput[]
    connect?: ClassConfigsWhereUniqueInput | ClassConfigsWhereUniqueInput[]
    update?: ClassConfigsUpdateWithWhereUniqueWithoutClassedEntityInput | ClassConfigsUpdateWithWhereUniqueWithoutClassedEntityInput[]
    updateMany?: ClassConfigsUpdateManyWithWhereWithoutClassedEntityInput | ClassConfigsUpdateManyWithWhereWithoutClassedEntityInput[]
    deleteMany?: ClassConfigsScalarWhereInput | ClassConfigsScalarWhereInput[]
  }

  export type PlayerCharacterUncheckedUpdateOneWithoutCharacterNestedInput = {
    create?: XOR<PlayerCharacterCreateWithoutCharacterInput, PlayerCharacterUncheckedCreateWithoutCharacterInput>
    connectOrCreate?: PlayerCharacterCreateOrConnectWithoutCharacterInput
    upsert?: PlayerCharacterUpsertWithoutCharacterInput
    disconnect?: PlayerCharacterWhereInput | boolean
    delete?: PlayerCharacterWhereInput | boolean
    connect?: PlayerCharacterWhereUniqueInput
    update?: XOR<XOR<PlayerCharacterUpdateToOneWithWhereWithoutCharacterInput, PlayerCharacterUpdateWithoutCharacterInput>, PlayerCharacterUncheckedUpdateWithoutCharacterInput>
  }

  export type ClassedEntityCreateNestedOneWithoutClassesInput = {
    create?: XOR<ClassedEntityCreateWithoutClassesInput, ClassedEntityUncheckedCreateWithoutClassesInput>
    connectOrCreate?: ClassedEntityCreateOrConnectWithoutClassesInput
    connect?: ClassedEntityWhereUniqueInput
  }

  export type ClassCreateNestedOneWithoutClassConfigsInput = {
    create?: XOR<ClassCreateWithoutClassConfigsInput, ClassUncheckedCreateWithoutClassConfigsInput>
    connectOrCreate?: ClassCreateOrConnectWithoutClassConfigsInput
    connect?: ClassWhereUniqueInput
  }

  export type ClassedEntityUpdateOneRequiredWithoutClassesNestedInput = {
    create?: XOR<ClassedEntityCreateWithoutClassesInput, ClassedEntityUncheckedCreateWithoutClassesInput>
    connectOrCreate?: ClassedEntityCreateOrConnectWithoutClassesInput
    upsert?: ClassedEntityUpsertWithoutClassesInput
    connect?: ClassedEntityWhereUniqueInput
    update?: XOR<XOR<ClassedEntityUpdateToOneWithWhereWithoutClassesInput, ClassedEntityUpdateWithoutClassesInput>, ClassedEntityUncheckedUpdateWithoutClassesInput>
  }

  export type ClassUpdateOneRequiredWithoutClassConfigsNestedInput = {
    create?: XOR<ClassCreateWithoutClassConfigsInput, ClassUncheckedCreateWithoutClassConfigsInput>
    connectOrCreate?: ClassCreateOrConnectWithoutClassConfigsInput
    upsert?: ClassUpsertWithoutClassConfigsInput
    connect?: ClassWhereUniqueInput
    update?: XOR<XOR<ClassUpdateToOneWithWhereWithoutClassConfigsInput, ClassUpdateWithoutClassConfigsInput>, ClassUncheckedUpdateWithoutClassConfigsInput>
  }

  export type ClassConfigsCreateNestedManyWithoutClassChoiceInput = {
    create?: XOR<ClassConfigsCreateWithoutClassChoiceInput, ClassConfigsUncheckedCreateWithoutClassChoiceInput> | ClassConfigsCreateWithoutClassChoiceInput[] | ClassConfigsUncheckedCreateWithoutClassChoiceInput[]
    connectOrCreate?: ClassConfigsCreateOrConnectWithoutClassChoiceInput | ClassConfigsCreateOrConnectWithoutClassChoiceInput[]
    createMany?: ClassConfigsCreateManyClassChoiceInputEnvelope
    connect?: ClassConfigsWhereUniqueInput | ClassConfigsWhereUniqueInput[]
  }

  export type ClassConfigsUncheckedCreateNestedManyWithoutClassChoiceInput = {
    create?: XOR<ClassConfigsCreateWithoutClassChoiceInput, ClassConfigsUncheckedCreateWithoutClassChoiceInput> | ClassConfigsCreateWithoutClassChoiceInput[] | ClassConfigsUncheckedCreateWithoutClassChoiceInput[]
    connectOrCreate?: ClassConfigsCreateOrConnectWithoutClassChoiceInput | ClassConfigsCreateOrConnectWithoutClassChoiceInput[]
    createMany?: ClassConfigsCreateManyClassChoiceInputEnvelope
    connect?: ClassConfigsWhereUniqueInput | ClassConfigsWhereUniqueInput[]
  }

  export type ClassConfigsUpdateManyWithoutClassChoiceNestedInput = {
    create?: XOR<ClassConfigsCreateWithoutClassChoiceInput, ClassConfigsUncheckedCreateWithoutClassChoiceInput> | ClassConfigsCreateWithoutClassChoiceInput[] | ClassConfigsUncheckedCreateWithoutClassChoiceInput[]
    connectOrCreate?: ClassConfigsCreateOrConnectWithoutClassChoiceInput | ClassConfigsCreateOrConnectWithoutClassChoiceInput[]
    upsert?: ClassConfigsUpsertWithWhereUniqueWithoutClassChoiceInput | ClassConfigsUpsertWithWhereUniqueWithoutClassChoiceInput[]
    createMany?: ClassConfigsCreateManyClassChoiceInputEnvelope
    set?: ClassConfigsWhereUniqueInput | ClassConfigsWhereUniqueInput[]
    disconnect?: ClassConfigsWhereUniqueInput | ClassConfigsWhereUniqueInput[]
    delete?: ClassConfigsWhereUniqueInput | ClassConfigsWhereUniqueInput[]
    connect?: ClassConfigsWhereUniqueInput | ClassConfigsWhereUniqueInput[]
    update?: ClassConfigsUpdateWithWhereUniqueWithoutClassChoiceInput | ClassConfigsUpdateWithWhereUniqueWithoutClassChoiceInput[]
    updateMany?: ClassConfigsUpdateManyWithWhereWithoutClassChoiceInput | ClassConfigsUpdateManyWithWhereWithoutClassChoiceInput[]
    deleteMany?: ClassConfigsScalarWhereInput | ClassConfigsScalarWhereInput[]
  }

  export type ClassConfigsUncheckedUpdateManyWithoutClassChoiceNestedInput = {
    create?: XOR<ClassConfigsCreateWithoutClassChoiceInput, ClassConfigsUncheckedCreateWithoutClassChoiceInput> | ClassConfigsCreateWithoutClassChoiceInput[] | ClassConfigsUncheckedCreateWithoutClassChoiceInput[]
    connectOrCreate?: ClassConfigsCreateOrConnectWithoutClassChoiceInput | ClassConfigsCreateOrConnectWithoutClassChoiceInput[]
    upsert?: ClassConfigsUpsertWithWhereUniqueWithoutClassChoiceInput | ClassConfigsUpsertWithWhereUniqueWithoutClassChoiceInput[]
    createMany?: ClassConfigsCreateManyClassChoiceInputEnvelope
    set?: ClassConfigsWhereUniqueInput | ClassConfigsWhereUniqueInput[]
    disconnect?: ClassConfigsWhereUniqueInput | ClassConfigsWhereUniqueInput[]
    delete?: ClassConfigsWhereUniqueInput | ClassConfigsWhereUniqueInput[]
    connect?: ClassConfigsWhereUniqueInput | ClassConfigsWhereUniqueInput[]
    update?: ClassConfigsUpdateWithWhereUniqueWithoutClassChoiceInput | ClassConfigsUpdateWithWhereUniqueWithoutClassChoiceInput[]
    updateMany?: ClassConfigsUpdateManyWithWhereWithoutClassChoiceInput | ClassConfigsUpdateManyWithWhereWithoutClassChoiceInput[]
    deleteMany?: ClassConfigsScalarWhereInput | ClassConfigsScalarWhereInput[]
  }

  export type GMProfileCreateNestedOneWithoutGameSessionInput = {
    create?: XOR<GMProfileCreateWithoutGameSessionInput, GMProfileUncheckedCreateWithoutGameSessionInput>
    connectOrCreate?: GMProfileCreateOrConnectWithoutGameSessionInput
    connect?: GMProfileWhereUniqueInput
  }

  export type PlayerCharacterCreateNestedManyWithoutGameSessionInput = {
    create?: XOR<PlayerCharacterCreateWithoutGameSessionInput, PlayerCharacterUncheckedCreateWithoutGameSessionInput> | PlayerCharacterCreateWithoutGameSessionInput[] | PlayerCharacterUncheckedCreateWithoutGameSessionInput[]
    connectOrCreate?: PlayerCharacterCreateOrConnectWithoutGameSessionInput | PlayerCharacterCreateOrConnectWithoutGameSessionInput[]
    connect?: PlayerCharacterWhereUniqueInput | PlayerCharacterWhereUniqueInput[]
  }

  export type CampaignCreateNestedOneWithoutSessionsInput = {
    create?: XOR<CampaignCreateWithoutSessionsInput, CampaignUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutSessionsInput
    connect?: CampaignWhereUniqueInput
  }

  export type GameSessionCreateNestedOneWithoutPreviousSessionInput = {
    create?: XOR<GameSessionCreateWithoutPreviousSessionInput, GameSessionUncheckedCreateWithoutPreviousSessionInput>
    connectOrCreate?: GameSessionCreateOrConnectWithoutPreviousSessionInput
    connect?: GameSessionWhereUniqueInput
  }

  export type GameSessionCreateNestedOneWithoutFollowUpSessionInput = {
    create?: XOR<GameSessionCreateWithoutFollowUpSessionInput, GameSessionUncheckedCreateWithoutFollowUpSessionInput>
    connectOrCreate?: GameSessionCreateOrConnectWithoutFollowUpSessionInput
    connect?: GameSessionWhereUniqueInput
  }

  export type QuestCreateNestedOneWithoutGameSessionInput = {
    create?: XOR<QuestCreateWithoutGameSessionInput, QuestUncheckedCreateWithoutGameSessionInput>
    connectOrCreate?: QuestCreateOrConnectWithoutGameSessionInput
    connect?: QuestWhereUniqueInput
  }

  export type StoryCreateNestedOneWithoutGameSessionInput = {
    create?: XOR<StoryCreateWithoutGameSessionInput, StoryUncheckedCreateWithoutGameSessionInput>
    connectOrCreate?: StoryCreateOrConnectWithoutGameSessionInput
    connect?: StoryWhereUniqueInput
  }

  export type PlayerCharacterUncheckedCreateNestedManyWithoutGameSessionInput = {
    create?: XOR<PlayerCharacterCreateWithoutGameSessionInput, PlayerCharacterUncheckedCreateWithoutGameSessionInput> | PlayerCharacterCreateWithoutGameSessionInput[] | PlayerCharacterUncheckedCreateWithoutGameSessionInput[]
    connectOrCreate?: PlayerCharacterCreateOrConnectWithoutGameSessionInput | PlayerCharacterCreateOrConnectWithoutGameSessionInput[]
    connect?: PlayerCharacterWhereUniqueInput | PlayerCharacterWhereUniqueInput[]
  }

  export type GameSessionUncheckedCreateNestedOneWithoutFollowUpSessionInput = {
    create?: XOR<GameSessionCreateWithoutFollowUpSessionInput, GameSessionUncheckedCreateWithoutFollowUpSessionInput>
    connectOrCreate?: GameSessionCreateOrConnectWithoutFollowUpSessionInput
    connect?: GameSessionWhereUniqueInput
  }

  export type EnumSessionStateFieldUpdateOperationsInput = {
    set?: $Enums.SessionState
  }

  export type GMProfileUpdateOneRequiredWithoutGameSessionNestedInput = {
    create?: XOR<GMProfileCreateWithoutGameSessionInput, GMProfileUncheckedCreateWithoutGameSessionInput>
    connectOrCreate?: GMProfileCreateOrConnectWithoutGameSessionInput
    upsert?: GMProfileUpsertWithoutGameSessionInput
    connect?: GMProfileWhereUniqueInput
    update?: XOR<XOR<GMProfileUpdateToOneWithWhereWithoutGameSessionInput, GMProfileUpdateWithoutGameSessionInput>, GMProfileUncheckedUpdateWithoutGameSessionInput>
  }

  export type PlayerCharacterUpdateManyWithoutGameSessionNestedInput = {
    create?: XOR<PlayerCharacterCreateWithoutGameSessionInput, PlayerCharacterUncheckedCreateWithoutGameSessionInput> | PlayerCharacterCreateWithoutGameSessionInput[] | PlayerCharacterUncheckedCreateWithoutGameSessionInput[]
    connectOrCreate?: PlayerCharacterCreateOrConnectWithoutGameSessionInput | PlayerCharacterCreateOrConnectWithoutGameSessionInput[]
    upsert?: PlayerCharacterUpsertWithWhereUniqueWithoutGameSessionInput | PlayerCharacterUpsertWithWhereUniqueWithoutGameSessionInput[]
    set?: PlayerCharacterWhereUniqueInput | PlayerCharacterWhereUniqueInput[]
    disconnect?: PlayerCharacterWhereUniqueInput | PlayerCharacterWhereUniqueInput[]
    delete?: PlayerCharacterWhereUniqueInput | PlayerCharacterWhereUniqueInput[]
    connect?: PlayerCharacterWhereUniqueInput | PlayerCharacterWhereUniqueInput[]
    update?: PlayerCharacterUpdateWithWhereUniqueWithoutGameSessionInput | PlayerCharacterUpdateWithWhereUniqueWithoutGameSessionInput[]
    updateMany?: PlayerCharacterUpdateManyWithWhereWithoutGameSessionInput | PlayerCharacterUpdateManyWithWhereWithoutGameSessionInput[]
    deleteMany?: PlayerCharacterScalarWhereInput | PlayerCharacterScalarWhereInput[]
  }

  export type CampaignUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<CampaignCreateWithoutSessionsInput, CampaignUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutSessionsInput
    upsert?: CampaignUpsertWithoutSessionsInput
    connect?: CampaignWhereUniqueInput
    update?: XOR<XOR<CampaignUpdateToOneWithWhereWithoutSessionsInput, CampaignUpdateWithoutSessionsInput>, CampaignUncheckedUpdateWithoutSessionsInput>
  }

  export type GameSessionUpdateOneWithoutPreviousSessionNestedInput = {
    create?: XOR<GameSessionCreateWithoutPreviousSessionInput, GameSessionUncheckedCreateWithoutPreviousSessionInput>
    connectOrCreate?: GameSessionCreateOrConnectWithoutPreviousSessionInput
    upsert?: GameSessionUpsertWithoutPreviousSessionInput
    disconnect?: GameSessionWhereInput | boolean
    delete?: GameSessionWhereInput | boolean
    connect?: GameSessionWhereUniqueInput
    update?: XOR<XOR<GameSessionUpdateToOneWithWhereWithoutPreviousSessionInput, GameSessionUpdateWithoutPreviousSessionInput>, GameSessionUncheckedUpdateWithoutPreviousSessionInput>
  }

  export type GameSessionUpdateOneWithoutFollowUpSessionNestedInput = {
    create?: XOR<GameSessionCreateWithoutFollowUpSessionInput, GameSessionUncheckedCreateWithoutFollowUpSessionInput>
    connectOrCreate?: GameSessionCreateOrConnectWithoutFollowUpSessionInput
    upsert?: GameSessionUpsertWithoutFollowUpSessionInput
    disconnect?: GameSessionWhereInput | boolean
    delete?: GameSessionWhereInput | boolean
    connect?: GameSessionWhereUniqueInput
    update?: XOR<XOR<GameSessionUpdateToOneWithWhereWithoutFollowUpSessionInput, GameSessionUpdateWithoutFollowUpSessionInput>, GameSessionUncheckedUpdateWithoutFollowUpSessionInput>
  }

  export type QuestUpdateOneWithoutGameSessionNestedInput = {
    create?: XOR<QuestCreateWithoutGameSessionInput, QuestUncheckedCreateWithoutGameSessionInput>
    connectOrCreate?: QuestCreateOrConnectWithoutGameSessionInput
    upsert?: QuestUpsertWithoutGameSessionInput
    disconnect?: QuestWhereInput | boolean
    delete?: QuestWhereInput | boolean
    connect?: QuestWhereUniqueInput
    update?: XOR<XOR<QuestUpdateToOneWithWhereWithoutGameSessionInput, QuestUpdateWithoutGameSessionInput>, QuestUncheckedUpdateWithoutGameSessionInput>
  }

  export type StoryUpdateOneWithoutGameSessionNestedInput = {
    create?: XOR<StoryCreateWithoutGameSessionInput, StoryUncheckedCreateWithoutGameSessionInput>
    connectOrCreate?: StoryCreateOrConnectWithoutGameSessionInput
    upsert?: StoryUpsertWithoutGameSessionInput
    disconnect?: StoryWhereInput | boolean
    delete?: StoryWhereInput | boolean
    connect?: StoryWhereUniqueInput
    update?: XOR<XOR<StoryUpdateToOneWithWhereWithoutGameSessionInput, StoryUpdateWithoutGameSessionInput>, StoryUncheckedUpdateWithoutGameSessionInput>
  }

  export type PlayerCharacterUncheckedUpdateManyWithoutGameSessionNestedInput = {
    create?: XOR<PlayerCharacterCreateWithoutGameSessionInput, PlayerCharacterUncheckedCreateWithoutGameSessionInput> | PlayerCharacterCreateWithoutGameSessionInput[] | PlayerCharacterUncheckedCreateWithoutGameSessionInput[]
    connectOrCreate?: PlayerCharacterCreateOrConnectWithoutGameSessionInput | PlayerCharacterCreateOrConnectWithoutGameSessionInput[]
    upsert?: PlayerCharacterUpsertWithWhereUniqueWithoutGameSessionInput | PlayerCharacterUpsertWithWhereUniqueWithoutGameSessionInput[]
    set?: PlayerCharacterWhereUniqueInput | PlayerCharacterWhereUniqueInput[]
    disconnect?: PlayerCharacterWhereUniqueInput | PlayerCharacterWhereUniqueInput[]
    delete?: PlayerCharacterWhereUniqueInput | PlayerCharacterWhereUniqueInput[]
    connect?: PlayerCharacterWhereUniqueInput | PlayerCharacterWhereUniqueInput[]
    update?: PlayerCharacterUpdateWithWhereUniqueWithoutGameSessionInput | PlayerCharacterUpdateWithWhereUniqueWithoutGameSessionInput[]
    updateMany?: PlayerCharacterUpdateManyWithWhereWithoutGameSessionInput | PlayerCharacterUpdateManyWithWhereWithoutGameSessionInput[]
    deleteMany?: PlayerCharacterScalarWhereInput | PlayerCharacterScalarWhereInput[]
  }

  export type GameSessionUncheckedUpdateOneWithoutFollowUpSessionNestedInput = {
    create?: XOR<GameSessionCreateWithoutFollowUpSessionInput, GameSessionUncheckedCreateWithoutFollowUpSessionInput>
    connectOrCreate?: GameSessionCreateOrConnectWithoutFollowUpSessionInput
    upsert?: GameSessionUpsertWithoutFollowUpSessionInput
    disconnect?: GameSessionWhereInput | boolean
    delete?: GameSessionWhereInput | boolean
    connect?: GameSessionWhereUniqueInput
    update?: XOR<XOR<GameSessionUpdateToOneWithWhereWithoutFollowUpSessionInput, GameSessionUpdateWithoutFollowUpSessionInput>, GameSessionUncheckedUpdateWithoutFollowUpSessionInput>
  }

  export type GMProfileCreateNestedOneWithoutInfoSessionInput = {
    create?: XOR<GMProfileCreateWithoutInfoSessionInput, GMProfileUncheckedCreateWithoutInfoSessionInput>
    connectOrCreate?: GMProfileCreateOrConnectWithoutInfoSessionInput
    connect?: GMProfileWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutInfoSessionInput = {
    create?: XOR<UserCreateWithoutInfoSessionInput, UserUncheckedCreateWithoutInfoSessionInput> | UserCreateWithoutInfoSessionInput[] | UserUncheckedCreateWithoutInfoSessionInput[]
    connectOrCreate?: UserCreateOrConnectWithoutInfoSessionInput | UserCreateOrConnectWithoutInfoSessionInput[]
    createMany?: UserCreateManyInfoSessionInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type CampaignCreateNestedOneWithoutInfoSessionsInput = {
    create?: XOR<CampaignCreateWithoutInfoSessionsInput, CampaignUncheckedCreateWithoutInfoSessionsInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutInfoSessionsInput
    connect?: CampaignWhereUniqueInput
  }

  export type UserUncheckedCreateNestedManyWithoutInfoSessionInput = {
    create?: XOR<UserCreateWithoutInfoSessionInput, UserUncheckedCreateWithoutInfoSessionInput> | UserCreateWithoutInfoSessionInput[] | UserUncheckedCreateWithoutInfoSessionInput[]
    connectOrCreate?: UserCreateOrConnectWithoutInfoSessionInput | UserCreateOrConnectWithoutInfoSessionInput[]
    createMany?: UserCreateManyInfoSessionInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type GMProfileUpdateOneRequiredWithoutInfoSessionNestedInput = {
    create?: XOR<GMProfileCreateWithoutInfoSessionInput, GMProfileUncheckedCreateWithoutInfoSessionInput>
    connectOrCreate?: GMProfileCreateOrConnectWithoutInfoSessionInput
    upsert?: GMProfileUpsertWithoutInfoSessionInput
    connect?: GMProfileWhereUniqueInput
    update?: XOR<XOR<GMProfileUpdateToOneWithWhereWithoutInfoSessionInput, GMProfileUpdateWithoutInfoSessionInput>, GMProfileUncheckedUpdateWithoutInfoSessionInput>
  }

  export type UserUpdateManyWithoutInfoSessionNestedInput = {
    create?: XOR<UserCreateWithoutInfoSessionInput, UserUncheckedCreateWithoutInfoSessionInput> | UserCreateWithoutInfoSessionInput[] | UserUncheckedCreateWithoutInfoSessionInput[]
    connectOrCreate?: UserCreateOrConnectWithoutInfoSessionInput | UserCreateOrConnectWithoutInfoSessionInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutInfoSessionInput | UserUpsertWithWhereUniqueWithoutInfoSessionInput[]
    createMany?: UserCreateManyInfoSessionInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutInfoSessionInput | UserUpdateWithWhereUniqueWithoutInfoSessionInput[]
    updateMany?: UserUpdateManyWithWhereWithoutInfoSessionInput | UserUpdateManyWithWhereWithoutInfoSessionInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type CampaignUpdateOneWithoutInfoSessionsNestedInput = {
    create?: XOR<CampaignCreateWithoutInfoSessionsInput, CampaignUncheckedCreateWithoutInfoSessionsInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutInfoSessionsInput
    upsert?: CampaignUpsertWithoutInfoSessionsInput
    disconnect?: CampaignWhereInput | boolean
    delete?: CampaignWhereInput | boolean
    connect?: CampaignWhereUniqueInput
    update?: XOR<XOR<CampaignUpdateToOneWithWhereWithoutInfoSessionsInput, CampaignUpdateWithoutInfoSessionsInput>, CampaignUncheckedUpdateWithoutInfoSessionsInput>
  }

  export type UserUncheckedUpdateManyWithoutInfoSessionNestedInput = {
    create?: XOR<UserCreateWithoutInfoSessionInput, UserUncheckedCreateWithoutInfoSessionInput> | UserCreateWithoutInfoSessionInput[] | UserUncheckedCreateWithoutInfoSessionInput[]
    connectOrCreate?: UserCreateOrConnectWithoutInfoSessionInput | UserCreateOrConnectWithoutInfoSessionInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutInfoSessionInput | UserUpsertWithWhereUniqueWithoutInfoSessionInput[]
    createMany?: UserCreateManyInfoSessionInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutInfoSessionInput | UserUpdateWithWhereUniqueWithoutInfoSessionInput[]
    updateMany?: UserUpdateManyWithWhereWithoutInfoSessionInput | UserUpdateManyWithWhereWithoutInfoSessionInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type GMProfileCreateNestedManyWithoutCampaignInput = {
    create?: XOR<GMProfileCreateWithoutCampaignInput, GMProfileUncheckedCreateWithoutCampaignInput> | GMProfileCreateWithoutCampaignInput[] | GMProfileUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: GMProfileCreateOrConnectWithoutCampaignInput | GMProfileCreateOrConnectWithoutCampaignInput[]
    connect?: GMProfileWhereUniqueInput | GMProfileWhereUniqueInput[]
  }

  export type PlayerCharacterCreateNestedManyWithoutCampaignInput = {
    create?: XOR<PlayerCharacterCreateWithoutCampaignInput, PlayerCharacterUncheckedCreateWithoutCampaignInput> | PlayerCharacterCreateWithoutCampaignInput[] | PlayerCharacterUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: PlayerCharacterCreateOrConnectWithoutCampaignInput | PlayerCharacterCreateOrConnectWithoutCampaignInput[]
    createMany?: PlayerCharacterCreateManyCampaignInputEnvelope
    connect?: PlayerCharacterWhereUniqueInput | PlayerCharacterWhereUniqueInput[]
  }

  export type GameSessionCreateNestedManyWithoutCampaignInput = {
    create?: XOR<GameSessionCreateWithoutCampaignInput, GameSessionUncheckedCreateWithoutCampaignInput> | GameSessionCreateWithoutCampaignInput[] | GameSessionUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: GameSessionCreateOrConnectWithoutCampaignInput | GameSessionCreateOrConnectWithoutCampaignInput[]
    createMany?: GameSessionCreateManyCampaignInputEnvelope
    connect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
  }

  export type InfoSessionCreateNestedManyWithoutCampaignInput = {
    create?: XOR<InfoSessionCreateWithoutCampaignInput, InfoSessionUncheckedCreateWithoutCampaignInput> | InfoSessionCreateWithoutCampaignInput[] | InfoSessionUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: InfoSessionCreateOrConnectWithoutCampaignInput | InfoSessionCreateOrConnectWithoutCampaignInput[]
    createMany?: InfoSessionCreateManyCampaignInputEnvelope
    connect?: InfoSessionWhereUniqueInput | InfoSessionWhereUniqueInput[]
  }

  export type PlayerProfileCreateNestedManyWithoutCampaignInput = {
    create?: XOR<PlayerProfileCreateWithoutCampaignInput, PlayerProfileUncheckedCreateWithoutCampaignInput> | PlayerProfileCreateWithoutCampaignInput[] | PlayerProfileUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: PlayerProfileCreateOrConnectWithoutCampaignInput | PlayerProfileCreateOrConnectWithoutCampaignInput[]
    createMany?: PlayerProfileCreateManyCampaignInputEnvelope
    connect?: PlayerProfileWhereUniqueInput | PlayerProfileWhereUniqueInput[]
  }

  export type GMProfileUncheckedCreateNestedManyWithoutCampaignInput = {
    create?: XOR<GMProfileCreateWithoutCampaignInput, GMProfileUncheckedCreateWithoutCampaignInput> | GMProfileCreateWithoutCampaignInput[] | GMProfileUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: GMProfileCreateOrConnectWithoutCampaignInput | GMProfileCreateOrConnectWithoutCampaignInput[]
    connect?: GMProfileWhereUniqueInput | GMProfileWhereUniqueInput[]
  }

  export type PlayerCharacterUncheckedCreateNestedManyWithoutCampaignInput = {
    create?: XOR<PlayerCharacterCreateWithoutCampaignInput, PlayerCharacterUncheckedCreateWithoutCampaignInput> | PlayerCharacterCreateWithoutCampaignInput[] | PlayerCharacterUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: PlayerCharacterCreateOrConnectWithoutCampaignInput | PlayerCharacterCreateOrConnectWithoutCampaignInput[]
    createMany?: PlayerCharacterCreateManyCampaignInputEnvelope
    connect?: PlayerCharacterWhereUniqueInput | PlayerCharacterWhereUniqueInput[]
  }

  export type GameSessionUncheckedCreateNestedManyWithoutCampaignInput = {
    create?: XOR<GameSessionCreateWithoutCampaignInput, GameSessionUncheckedCreateWithoutCampaignInput> | GameSessionCreateWithoutCampaignInput[] | GameSessionUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: GameSessionCreateOrConnectWithoutCampaignInput | GameSessionCreateOrConnectWithoutCampaignInput[]
    createMany?: GameSessionCreateManyCampaignInputEnvelope
    connect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
  }

  export type InfoSessionUncheckedCreateNestedManyWithoutCampaignInput = {
    create?: XOR<InfoSessionCreateWithoutCampaignInput, InfoSessionUncheckedCreateWithoutCampaignInput> | InfoSessionCreateWithoutCampaignInput[] | InfoSessionUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: InfoSessionCreateOrConnectWithoutCampaignInput | InfoSessionCreateOrConnectWithoutCampaignInput[]
    createMany?: InfoSessionCreateManyCampaignInputEnvelope
    connect?: InfoSessionWhereUniqueInput | InfoSessionWhereUniqueInput[]
  }

  export type PlayerProfileUncheckedCreateNestedManyWithoutCampaignInput = {
    create?: XOR<PlayerProfileCreateWithoutCampaignInput, PlayerProfileUncheckedCreateWithoutCampaignInput> | PlayerProfileCreateWithoutCampaignInput[] | PlayerProfileUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: PlayerProfileCreateOrConnectWithoutCampaignInput | PlayerProfileCreateOrConnectWithoutCampaignInput[]
    createMany?: PlayerProfileCreateManyCampaignInputEnvelope
    connect?: PlayerProfileWhereUniqueInput | PlayerProfileWhereUniqueInput[]
  }

  export type GMProfileUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<GMProfileCreateWithoutCampaignInput, GMProfileUncheckedCreateWithoutCampaignInput> | GMProfileCreateWithoutCampaignInput[] | GMProfileUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: GMProfileCreateOrConnectWithoutCampaignInput | GMProfileCreateOrConnectWithoutCampaignInput[]
    upsert?: GMProfileUpsertWithWhereUniqueWithoutCampaignInput | GMProfileUpsertWithWhereUniqueWithoutCampaignInput[]
    set?: GMProfileWhereUniqueInput | GMProfileWhereUniqueInput[]
    disconnect?: GMProfileWhereUniqueInput | GMProfileWhereUniqueInput[]
    delete?: GMProfileWhereUniqueInput | GMProfileWhereUniqueInput[]
    connect?: GMProfileWhereUniqueInput | GMProfileWhereUniqueInput[]
    update?: GMProfileUpdateWithWhereUniqueWithoutCampaignInput | GMProfileUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: GMProfileUpdateManyWithWhereWithoutCampaignInput | GMProfileUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: GMProfileScalarWhereInput | GMProfileScalarWhereInput[]
  }

  export type PlayerCharacterUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<PlayerCharacterCreateWithoutCampaignInput, PlayerCharacterUncheckedCreateWithoutCampaignInput> | PlayerCharacterCreateWithoutCampaignInput[] | PlayerCharacterUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: PlayerCharacterCreateOrConnectWithoutCampaignInput | PlayerCharacterCreateOrConnectWithoutCampaignInput[]
    upsert?: PlayerCharacterUpsertWithWhereUniqueWithoutCampaignInput | PlayerCharacterUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: PlayerCharacterCreateManyCampaignInputEnvelope
    set?: PlayerCharacterWhereUniqueInput | PlayerCharacterWhereUniqueInput[]
    disconnect?: PlayerCharacterWhereUniqueInput | PlayerCharacterWhereUniqueInput[]
    delete?: PlayerCharacterWhereUniqueInput | PlayerCharacterWhereUniqueInput[]
    connect?: PlayerCharacterWhereUniqueInput | PlayerCharacterWhereUniqueInput[]
    update?: PlayerCharacterUpdateWithWhereUniqueWithoutCampaignInput | PlayerCharacterUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: PlayerCharacterUpdateManyWithWhereWithoutCampaignInput | PlayerCharacterUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: PlayerCharacterScalarWhereInput | PlayerCharacterScalarWhereInput[]
  }

  export type GameSessionUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<GameSessionCreateWithoutCampaignInput, GameSessionUncheckedCreateWithoutCampaignInput> | GameSessionCreateWithoutCampaignInput[] | GameSessionUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: GameSessionCreateOrConnectWithoutCampaignInput | GameSessionCreateOrConnectWithoutCampaignInput[]
    upsert?: GameSessionUpsertWithWhereUniqueWithoutCampaignInput | GameSessionUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: GameSessionCreateManyCampaignInputEnvelope
    set?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    disconnect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    delete?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    connect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    update?: GameSessionUpdateWithWhereUniqueWithoutCampaignInput | GameSessionUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: GameSessionUpdateManyWithWhereWithoutCampaignInput | GameSessionUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: GameSessionScalarWhereInput | GameSessionScalarWhereInput[]
  }

  export type InfoSessionUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<InfoSessionCreateWithoutCampaignInput, InfoSessionUncheckedCreateWithoutCampaignInput> | InfoSessionCreateWithoutCampaignInput[] | InfoSessionUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: InfoSessionCreateOrConnectWithoutCampaignInput | InfoSessionCreateOrConnectWithoutCampaignInput[]
    upsert?: InfoSessionUpsertWithWhereUniqueWithoutCampaignInput | InfoSessionUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: InfoSessionCreateManyCampaignInputEnvelope
    set?: InfoSessionWhereUniqueInput | InfoSessionWhereUniqueInput[]
    disconnect?: InfoSessionWhereUniqueInput | InfoSessionWhereUniqueInput[]
    delete?: InfoSessionWhereUniqueInput | InfoSessionWhereUniqueInput[]
    connect?: InfoSessionWhereUniqueInput | InfoSessionWhereUniqueInput[]
    update?: InfoSessionUpdateWithWhereUniqueWithoutCampaignInput | InfoSessionUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: InfoSessionUpdateManyWithWhereWithoutCampaignInput | InfoSessionUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: InfoSessionScalarWhereInput | InfoSessionScalarWhereInput[]
  }

  export type PlayerProfileUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<PlayerProfileCreateWithoutCampaignInput, PlayerProfileUncheckedCreateWithoutCampaignInput> | PlayerProfileCreateWithoutCampaignInput[] | PlayerProfileUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: PlayerProfileCreateOrConnectWithoutCampaignInput | PlayerProfileCreateOrConnectWithoutCampaignInput[]
    upsert?: PlayerProfileUpsertWithWhereUniqueWithoutCampaignInput | PlayerProfileUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: PlayerProfileCreateManyCampaignInputEnvelope
    set?: PlayerProfileWhereUniqueInput | PlayerProfileWhereUniqueInput[]
    disconnect?: PlayerProfileWhereUniqueInput | PlayerProfileWhereUniqueInput[]
    delete?: PlayerProfileWhereUniqueInput | PlayerProfileWhereUniqueInput[]
    connect?: PlayerProfileWhereUniqueInput | PlayerProfileWhereUniqueInput[]
    update?: PlayerProfileUpdateWithWhereUniqueWithoutCampaignInput | PlayerProfileUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: PlayerProfileUpdateManyWithWhereWithoutCampaignInput | PlayerProfileUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: PlayerProfileScalarWhereInput | PlayerProfileScalarWhereInput[]
  }

  export type GMProfileUncheckedUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<GMProfileCreateWithoutCampaignInput, GMProfileUncheckedCreateWithoutCampaignInput> | GMProfileCreateWithoutCampaignInput[] | GMProfileUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: GMProfileCreateOrConnectWithoutCampaignInput | GMProfileCreateOrConnectWithoutCampaignInput[]
    upsert?: GMProfileUpsertWithWhereUniqueWithoutCampaignInput | GMProfileUpsertWithWhereUniqueWithoutCampaignInput[]
    set?: GMProfileWhereUniqueInput | GMProfileWhereUniqueInput[]
    disconnect?: GMProfileWhereUniqueInput | GMProfileWhereUniqueInput[]
    delete?: GMProfileWhereUniqueInput | GMProfileWhereUniqueInput[]
    connect?: GMProfileWhereUniqueInput | GMProfileWhereUniqueInput[]
    update?: GMProfileUpdateWithWhereUniqueWithoutCampaignInput | GMProfileUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: GMProfileUpdateManyWithWhereWithoutCampaignInput | GMProfileUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: GMProfileScalarWhereInput | GMProfileScalarWhereInput[]
  }

  export type PlayerCharacterUncheckedUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<PlayerCharacterCreateWithoutCampaignInput, PlayerCharacterUncheckedCreateWithoutCampaignInput> | PlayerCharacterCreateWithoutCampaignInput[] | PlayerCharacterUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: PlayerCharacterCreateOrConnectWithoutCampaignInput | PlayerCharacterCreateOrConnectWithoutCampaignInput[]
    upsert?: PlayerCharacterUpsertWithWhereUniqueWithoutCampaignInput | PlayerCharacterUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: PlayerCharacterCreateManyCampaignInputEnvelope
    set?: PlayerCharacterWhereUniqueInput | PlayerCharacterWhereUniqueInput[]
    disconnect?: PlayerCharacterWhereUniqueInput | PlayerCharacterWhereUniqueInput[]
    delete?: PlayerCharacterWhereUniqueInput | PlayerCharacterWhereUniqueInput[]
    connect?: PlayerCharacterWhereUniqueInput | PlayerCharacterWhereUniqueInput[]
    update?: PlayerCharacterUpdateWithWhereUniqueWithoutCampaignInput | PlayerCharacterUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: PlayerCharacterUpdateManyWithWhereWithoutCampaignInput | PlayerCharacterUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: PlayerCharacterScalarWhereInput | PlayerCharacterScalarWhereInput[]
  }

  export type GameSessionUncheckedUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<GameSessionCreateWithoutCampaignInput, GameSessionUncheckedCreateWithoutCampaignInput> | GameSessionCreateWithoutCampaignInput[] | GameSessionUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: GameSessionCreateOrConnectWithoutCampaignInput | GameSessionCreateOrConnectWithoutCampaignInput[]
    upsert?: GameSessionUpsertWithWhereUniqueWithoutCampaignInput | GameSessionUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: GameSessionCreateManyCampaignInputEnvelope
    set?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    disconnect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    delete?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    connect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    update?: GameSessionUpdateWithWhereUniqueWithoutCampaignInput | GameSessionUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: GameSessionUpdateManyWithWhereWithoutCampaignInput | GameSessionUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: GameSessionScalarWhereInput | GameSessionScalarWhereInput[]
  }

  export type InfoSessionUncheckedUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<InfoSessionCreateWithoutCampaignInput, InfoSessionUncheckedCreateWithoutCampaignInput> | InfoSessionCreateWithoutCampaignInput[] | InfoSessionUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: InfoSessionCreateOrConnectWithoutCampaignInput | InfoSessionCreateOrConnectWithoutCampaignInput[]
    upsert?: InfoSessionUpsertWithWhereUniqueWithoutCampaignInput | InfoSessionUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: InfoSessionCreateManyCampaignInputEnvelope
    set?: InfoSessionWhereUniqueInput | InfoSessionWhereUniqueInput[]
    disconnect?: InfoSessionWhereUniqueInput | InfoSessionWhereUniqueInput[]
    delete?: InfoSessionWhereUniqueInput | InfoSessionWhereUniqueInput[]
    connect?: InfoSessionWhereUniqueInput | InfoSessionWhereUniqueInput[]
    update?: InfoSessionUpdateWithWhereUniqueWithoutCampaignInput | InfoSessionUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: InfoSessionUpdateManyWithWhereWithoutCampaignInput | InfoSessionUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: InfoSessionScalarWhereInput | InfoSessionScalarWhereInput[]
  }

  export type PlayerProfileUncheckedUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<PlayerProfileCreateWithoutCampaignInput, PlayerProfileUncheckedCreateWithoutCampaignInput> | PlayerProfileCreateWithoutCampaignInput[] | PlayerProfileUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: PlayerProfileCreateOrConnectWithoutCampaignInput | PlayerProfileCreateOrConnectWithoutCampaignInput[]
    upsert?: PlayerProfileUpsertWithWhereUniqueWithoutCampaignInput | PlayerProfileUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: PlayerProfileCreateManyCampaignInputEnvelope
    set?: PlayerProfileWhereUniqueInput | PlayerProfileWhereUniqueInput[]
    disconnect?: PlayerProfileWhereUniqueInput | PlayerProfileWhereUniqueInput[]
    delete?: PlayerProfileWhereUniqueInput | PlayerProfileWhereUniqueInput[]
    connect?: PlayerProfileWhereUniqueInput | PlayerProfileWhereUniqueInput[]
    update?: PlayerProfileUpdateWithWhereUniqueWithoutCampaignInput | PlayerProfileUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: PlayerProfileUpdateManyWithWhereWithoutCampaignInput | PlayerProfileUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: PlayerProfileScalarWhereInput | PlayerProfileScalarWhereInput[]
  }

  export type GameSessionCreateNestedManyWithoutStoryInput = {
    create?: XOR<GameSessionCreateWithoutStoryInput, GameSessionUncheckedCreateWithoutStoryInput> | GameSessionCreateWithoutStoryInput[] | GameSessionUncheckedCreateWithoutStoryInput[]
    connectOrCreate?: GameSessionCreateOrConnectWithoutStoryInput | GameSessionCreateOrConnectWithoutStoryInput[]
    createMany?: GameSessionCreateManyStoryInputEnvelope
    connect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
  }

  export type GameSessionUncheckedCreateNestedManyWithoutStoryInput = {
    create?: XOR<GameSessionCreateWithoutStoryInput, GameSessionUncheckedCreateWithoutStoryInput> | GameSessionCreateWithoutStoryInput[] | GameSessionUncheckedCreateWithoutStoryInput[]
    connectOrCreate?: GameSessionCreateOrConnectWithoutStoryInput | GameSessionCreateOrConnectWithoutStoryInput[]
    createMany?: GameSessionCreateManyStoryInputEnvelope
    connect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
  }

  export type GameSessionUpdateManyWithoutStoryNestedInput = {
    create?: XOR<GameSessionCreateWithoutStoryInput, GameSessionUncheckedCreateWithoutStoryInput> | GameSessionCreateWithoutStoryInput[] | GameSessionUncheckedCreateWithoutStoryInput[]
    connectOrCreate?: GameSessionCreateOrConnectWithoutStoryInput | GameSessionCreateOrConnectWithoutStoryInput[]
    upsert?: GameSessionUpsertWithWhereUniqueWithoutStoryInput | GameSessionUpsertWithWhereUniqueWithoutStoryInput[]
    createMany?: GameSessionCreateManyStoryInputEnvelope
    set?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    disconnect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    delete?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    connect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    update?: GameSessionUpdateWithWhereUniqueWithoutStoryInput | GameSessionUpdateWithWhereUniqueWithoutStoryInput[]
    updateMany?: GameSessionUpdateManyWithWhereWithoutStoryInput | GameSessionUpdateManyWithWhereWithoutStoryInput[]
    deleteMany?: GameSessionScalarWhereInput | GameSessionScalarWhereInput[]
  }

  export type GameSessionUncheckedUpdateManyWithoutStoryNestedInput = {
    create?: XOR<GameSessionCreateWithoutStoryInput, GameSessionUncheckedCreateWithoutStoryInput> | GameSessionCreateWithoutStoryInput[] | GameSessionUncheckedCreateWithoutStoryInput[]
    connectOrCreate?: GameSessionCreateOrConnectWithoutStoryInput | GameSessionCreateOrConnectWithoutStoryInput[]
    upsert?: GameSessionUpsertWithWhereUniqueWithoutStoryInput | GameSessionUpsertWithWhereUniqueWithoutStoryInput[]
    createMany?: GameSessionCreateManyStoryInputEnvelope
    set?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    disconnect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    delete?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    connect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    update?: GameSessionUpdateWithWhereUniqueWithoutStoryInput | GameSessionUpdateWithWhereUniqueWithoutStoryInput[]
    updateMany?: GameSessionUpdateManyWithWhereWithoutStoryInput | GameSessionUpdateManyWithWhereWithoutStoryInput[]
    deleteMany?: GameSessionScalarWhereInput | GameSessionScalarWhereInput[]
  }

  export type GMProfileCreateNestedOneWithoutQuestInput = {
    create?: XOR<GMProfileCreateWithoutQuestInput, GMProfileUncheckedCreateWithoutQuestInput>
    connectOrCreate?: GMProfileCreateOrConnectWithoutQuestInput
    connect?: GMProfileWhereUniqueInput
  }

  export type QuestCreateNestedOneWithoutPreviousInput = {
    create?: XOR<QuestCreateWithoutPreviousInput, QuestUncheckedCreateWithoutPreviousInput>
    connectOrCreate?: QuestCreateOrConnectWithoutPreviousInput
    connect?: QuestWhereUniqueInput
  }

  export type QuestCreateNestedOneWithoutFollowUpInput = {
    create?: XOR<QuestCreateWithoutFollowUpInput, QuestUncheckedCreateWithoutFollowUpInput>
    connectOrCreate?: QuestCreateOrConnectWithoutFollowUpInput
    connect?: QuestWhereUniqueInput
  }

  export type GameSessionCreateNestedManyWithoutQuestInput = {
    create?: XOR<GameSessionCreateWithoutQuestInput, GameSessionUncheckedCreateWithoutQuestInput> | GameSessionCreateWithoutQuestInput[] | GameSessionUncheckedCreateWithoutQuestInput[]
    connectOrCreate?: GameSessionCreateOrConnectWithoutQuestInput | GameSessionCreateOrConnectWithoutQuestInput[]
    createMany?: GameSessionCreateManyQuestInputEnvelope
    connect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
  }

  export type QuestUncheckedCreateNestedOneWithoutFollowUpInput = {
    create?: XOR<QuestCreateWithoutFollowUpInput, QuestUncheckedCreateWithoutFollowUpInput>
    connectOrCreate?: QuestCreateOrConnectWithoutFollowUpInput
    connect?: QuestWhereUniqueInput
  }

  export type GameSessionUncheckedCreateNestedManyWithoutQuestInput = {
    create?: XOR<GameSessionCreateWithoutQuestInput, GameSessionUncheckedCreateWithoutQuestInput> | GameSessionCreateWithoutQuestInput[] | GameSessionUncheckedCreateWithoutQuestInput[]
    connectOrCreate?: GameSessionCreateOrConnectWithoutQuestInput | GameSessionCreateOrConnectWithoutQuestInput[]
    createMany?: GameSessionCreateManyQuestInputEnvelope
    connect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
  }

  export type GMProfileUpdateOneRequiredWithoutQuestNestedInput = {
    create?: XOR<GMProfileCreateWithoutQuestInput, GMProfileUncheckedCreateWithoutQuestInput>
    connectOrCreate?: GMProfileCreateOrConnectWithoutQuestInput
    upsert?: GMProfileUpsertWithoutQuestInput
    connect?: GMProfileWhereUniqueInput
    update?: XOR<XOR<GMProfileUpdateToOneWithWhereWithoutQuestInput, GMProfileUpdateWithoutQuestInput>, GMProfileUncheckedUpdateWithoutQuestInput>
  }

  export type QuestUpdateOneWithoutPreviousNestedInput = {
    create?: XOR<QuestCreateWithoutPreviousInput, QuestUncheckedCreateWithoutPreviousInput>
    connectOrCreate?: QuestCreateOrConnectWithoutPreviousInput
    upsert?: QuestUpsertWithoutPreviousInput
    disconnect?: QuestWhereInput | boolean
    delete?: QuestWhereInput | boolean
    connect?: QuestWhereUniqueInput
    update?: XOR<XOR<QuestUpdateToOneWithWhereWithoutPreviousInput, QuestUpdateWithoutPreviousInput>, QuestUncheckedUpdateWithoutPreviousInput>
  }

  export type QuestUpdateOneWithoutFollowUpNestedInput = {
    create?: XOR<QuestCreateWithoutFollowUpInput, QuestUncheckedCreateWithoutFollowUpInput>
    connectOrCreate?: QuestCreateOrConnectWithoutFollowUpInput
    upsert?: QuestUpsertWithoutFollowUpInput
    disconnect?: QuestWhereInput | boolean
    delete?: QuestWhereInput | boolean
    connect?: QuestWhereUniqueInput
    update?: XOR<XOR<QuestUpdateToOneWithWhereWithoutFollowUpInput, QuestUpdateWithoutFollowUpInput>, QuestUncheckedUpdateWithoutFollowUpInput>
  }

  export type GameSessionUpdateManyWithoutQuestNestedInput = {
    create?: XOR<GameSessionCreateWithoutQuestInput, GameSessionUncheckedCreateWithoutQuestInput> | GameSessionCreateWithoutQuestInput[] | GameSessionUncheckedCreateWithoutQuestInput[]
    connectOrCreate?: GameSessionCreateOrConnectWithoutQuestInput | GameSessionCreateOrConnectWithoutQuestInput[]
    upsert?: GameSessionUpsertWithWhereUniqueWithoutQuestInput | GameSessionUpsertWithWhereUniqueWithoutQuestInput[]
    createMany?: GameSessionCreateManyQuestInputEnvelope
    set?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    disconnect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    delete?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    connect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    update?: GameSessionUpdateWithWhereUniqueWithoutQuestInput | GameSessionUpdateWithWhereUniqueWithoutQuestInput[]
    updateMany?: GameSessionUpdateManyWithWhereWithoutQuestInput | GameSessionUpdateManyWithWhereWithoutQuestInput[]
    deleteMany?: GameSessionScalarWhereInput | GameSessionScalarWhereInput[]
  }

  export type QuestUncheckedUpdateOneWithoutFollowUpNestedInput = {
    create?: XOR<QuestCreateWithoutFollowUpInput, QuestUncheckedCreateWithoutFollowUpInput>
    connectOrCreate?: QuestCreateOrConnectWithoutFollowUpInput
    upsert?: QuestUpsertWithoutFollowUpInput
    disconnect?: QuestWhereInput | boolean
    delete?: QuestWhereInput | boolean
    connect?: QuestWhereUniqueInput
    update?: XOR<XOR<QuestUpdateToOneWithWhereWithoutFollowUpInput, QuestUpdateWithoutFollowUpInput>, QuestUncheckedUpdateWithoutFollowUpInput>
  }

  export type GameSessionUncheckedUpdateManyWithoutQuestNestedInput = {
    create?: XOR<GameSessionCreateWithoutQuestInput, GameSessionUncheckedCreateWithoutQuestInput> | GameSessionCreateWithoutQuestInput[] | GameSessionUncheckedCreateWithoutQuestInput[]
    connectOrCreate?: GameSessionCreateOrConnectWithoutQuestInput | GameSessionCreateOrConnectWithoutQuestInput[]
    upsert?: GameSessionUpsertWithWhereUniqueWithoutQuestInput | GameSessionUpsertWithWhereUniqueWithoutQuestInput[]
    createMany?: GameSessionCreateManyQuestInputEnvelope
    set?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    disconnect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    delete?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    connect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    update?: GameSessionUpdateWithWhereUniqueWithoutQuestInput | GameSessionUpdateWithWhereUniqueWithoutQuestInput[]
    updateMany?: GameSessionUpdateManyWithWhereWithoutQuestInput | GameSessionUpdateManyWithWhereWithoutQuestInput[]
    deleteMany?: GameSessionScalarWhereInput | GameSessionScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumROLEFilter<$PrismaModel = never> = {
    equals?: $Enums.ROLE | EnumROLEFieldRefInput<$PrismaModel>
    in?: $Enums.ROLE[]
    notIn?: $Enums.ROLE[]
    not?: NestedEnumROLEFilter<$PrismaModel> | $Enums.ROLE
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumROLEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ROLE | EnumROLEFieldRefInput<$PrismaModel>
    in?: $Enums.ROLE[]
    notIn?: $Enums.ROLE[]
    not?: NestedEnumROLEWithAggregatesFilter<$PrismaModel> | $Enums.ROLE
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumROLEFilter<$PrismaModel>
    _max?: NestedEnumROLEFilter<$PrismaModel>
  }

  export type NestedEnumHostTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.HostType | EnumHostTypeFieldRefInput<$PrismaModel>
    in?: $Enums.HostType[]
    notIn?: $Enums.HostType[]
    not?: NestedEnumHostTypeFilter<$PrismaModel> | $Enums.HostType
  }

  export type NestedEnumHostTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HostType | EnumHostTypeFieldRefInput<$PrismaModel>
    in?: $Enums.HostType[]
    notIn?: $Enums.HostType[]
    not?: NestedEnumHostTypeWithAggregatesFilter<$PrismaModel> | $Enums.HostType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumHostTypeFilter<$PrismaModel>
    _max?: NestedEnumHostTypeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumSessionStateFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionState | EnumSessionStateFieldRefInput<$PrismaModel>
    in?: $Enums.SessionState[]
    notIn?: $Enums.SessionState[]
    not?: NestedEnumSessionStateFilter<$PrismaModel> | $Enums.SessionState
  }

  export type NestedEnumSessionStateWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionState | EnumSessionStateFieldRefInput<$PrismaModel>
    in?: $Enums.SessionState[]
    notIn?: $Enums.SessionState[]
    not?: NestedEnumSessionStateWithAggregatesFilter<$PrismaModel> | $Enums.SessionState
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSessionStateFilter<$PrismaModel>
    _max?: NestedEnumSessionStateFilter<$PrismaModel>
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    age?: number | null
    fName?: string | null
    lName?: string | null
    bio?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: $Enums.ROLE
    gMProfileId?: string | null
    playerProfileId?: string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    gmProfile?: GMProfileCreateNestedOneWithoutUserInput
    playerProfile?: PlayerProfileCreateNestedOneWithoutUserInput
    InfoSession?: InfoSessionCreateNestedOneWithoutPlayersInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    age?: number | null
    fName?: string | null
    lName?: string | null
    bio?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: $Enums.ROLE
    gMProfileId?: string | null
    playerProfileId?: string | null
    infoSessionId?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    gmProfile?: GMProfileUncheckedCreateNestedOneWithoutUserInput
    playerProfile?: PlayerProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    fName?: NullableStringFieldUpdateOperationsInput | string | null
    lName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    gMProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    playerProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    gmProfile?: GMProfileUpdateOneWithoutUserNestedInput
    playerProfile?: PlayerProfileUpdateOneWithoutUserNestedInput
    InfoSession?: InfoSessionUpdateOneWithoutPlayersNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    fName?: NullableStringFieldUpdateOperationsInput | string | null
    lName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    gMProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    playerProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    infoSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    gmProfile?: GMProfileUncheckedUpdateOneWithoutUserNestedInput
    playerProfile?: PlayerProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    age?: number | null
    fName?: string | null
    lName?: string | null
    bio?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: $Enums.ROLE
    gMProfileId?: string | null
    playerProfileId?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    gmProfile?: GMProfileCreateNestedOneWithoutUserInput
    playerProfile?: PlayerProfileCreateNestedOneWithoutUserInput
    InfoSession?: InfoSessionCreateNestedOneWithoutPlayersInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    age?: number | null
    fName?: string | null
    lName?: string | null
    bio?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: $Enums.ROLE
    gMProfileId?: string | null
    playerProfileId?: string | null
    infoSessionId?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    gmProfile?: GMProfileUncheckedCreateNestedOneWithoutUserInput
    playerProfile?: PlayerProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    fName?: NullableStringFieldUpdateOperationsInput | string | null
    lName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    gMProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    playerProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    gmProfile?: GMProfileUpdateOneWithoutUserNestedInput
    playerProfile?: PlayerProfileUpdateOneWithoutUserNestedInput
    InfoSession?: InfoSessionUpdateOneWithoutPlayersNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    fName?: NullableStringFieldUpdateOperationsInput | string | null
    lName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    gMProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    playerProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    infoSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    gmProfile?: GMProfileUncheckedUpdateOneWithoutUserNestedInput
    playerProfile?: PlayerProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    refresh_token_expires_in?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    refresh_token_expires_in?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GMProfileCreateWithoutUserInput = {
    id?: string
    type: $Enums.HostType
    GameSession?: GameSessionCreateNestedManyWithoutHostInput
    Campaign?: CampaignCreateNestedManyWithoutGmsInput
    Quest?: QuestCreateNestedManyWithoutAuthorInput
    InfoSession?: InfoSessionCreateNestedManyWithoutHostInput
  }

  export type GMProfileUncheckedCreateWithoutUserInput = {
    id?: string
    type: $Enums.HostType
    GameSession?: GameSessionUncheckedCreateNestedManyWithoutHostInput
    Campaign?: CampaignUncheckedCreateNestedManyWithoutGmsInput
    Quest?: QuestUncheckedCreateNestedManyWithoutAuthorInput
    InfoSession?: InfoSessionUncheckedCreateNestedManyWithoutHostInput
  }

  export type GMProfileCreateOrConnectWithoutUserInput = {
    where: GMProfileWhereUniqueInput
    create: XOR<GMProfileCreateWithoutUserInput, GMProfileUncheckedCreateWithoutUserInput>
  }

  export type PlayerProfileCreateWithoutUserInput = {
    id?: string
    PlayerCharacter?: PlayerCharacterCreateNestedManyWithoutOwnerInput
    Campaign?: CampaignCreateNestedOneWithoutMembersInput
  }

  export type PlayerProfileUncheckedCreateWithoutUserInput = {
    id?: string
    campaignId?: number | null
    PlayerCharacter?: PlayerCharacterUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type PlayerProfileCreateOrConnectWithoutUserInput = {
    where: PlayerProfileWhereUniqueInput
    create: XOR<PlayerProfileCreateWithoutUserInput, PlayerProfileUncheckedCreateWithoutUserInput>
  }

  export type InfoSessionCreateWithoutPlayersInput = {
    id?: string
    date: Date | string
    duration: number
    description?: string | null
    private?: boolean
    host: GMProfileCreateNestedOneWithoutInfoSessionInput
    Campaign?: CampaignCreateNestedOneWithoutInfoSessionsInput
  }

  export type InfoSessionUncheckedCreateWithoutPlayersInput = {
    id?: string
    date: Date | string
    duration: number
    gMProfileId: string
    description?: string | null
    private?: boolean
    campaignId?: number | null
  }

  export type InfoSessionCreateOrConnectWithoutPlayersInput = {
    where: InfoSessionWhereUniqueInput
    create: XOR<InfoSessionCreateWithoutPlayersInput, InfoSessionUncheckedCreateWithoutPlayersInput>
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    refresh_token_expires_in?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type GMProfileUpsertWithoutUserInput = {
    update: XOR<GMProfileUpdateWithoutUserInput, GMProfileUncheckedUpdateWithoutUserInput>
    create: XOR<GMProfileCreateWithoutUserInput, GMProfileUncheckedCreateWithoutUserInput>
    where?: GMProfileWhereInput
  }

  export type GMProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: GMProfileWhereInput
    data: XOR<GMProfileUpdateWithoutUserInput, GMProfileUncheckedUpdateWithoutUserInput>
  }

  export type GMProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumHostTypeFieldUpdateOperationsInput | $Enums.HostType
    GameSession?: GameSessionUpdateManyWithoutHostNestedInput
    Campaign?: CampaignUpdateManyWithoutGmsNestedInput
    Quest?: QuestUpdateManyWithoutAuthorNestedInput
    InfoSession?: InfoSessionUpdateManyWithoutHostNestedInput
  }

  export type GMProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumHostTypeFieldUpdateOperationsInput | $Enums.HostType
    GameSession?: GameSessionUncheckedUpdateManyWithoutHostNestedInput
    Campaign?: CampaignUncheckedUpdateManyWithoutGmsNestedInput
    Quest?: QuestUncheckedUpdateManyWithoutAuthorNestedInput
    InfoSession?: InfoSessionUncheckedUpdateManyWithoutHostNestedInput
  }

  export type PlayerProfileUpsertWithoutUserInput = {
    update: XOR<PlayerProfileUpdateWithoutUserInput, PlayerProfileUncheckedUpdateWithoutUserInput>
    create: XOR<PlayerProfileCreateWithoutUserInput, PlayerProfileUncheckedCreateWithoutUserInput>
    where?: PlayerProfileWhereInput
  }

  export type PlayerProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: PlayerProfileWhereInput
    data: XOR<PlayerProfileUpdateWithoutUserInput, PlayerProfileUncheckedUpdateWithoutUserInput>
  }

  export type PlayerProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    PlayerCharacter?: PlayerCharacterUpdateManyWithoutOwnerNestedInput
    Campaign?: CampaignUpdateOneWithoutMembersNestedInput
  }

  export type PlayerProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: NullableIntFieldUpdateOperationsInput | number | null
    PlayerCharacter?: PlayerCharacterUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type InfoSessionUpsertWithoutPlayersInput = {
    update: XOR<InfoSessionUpdateWithoutPlayersInput, InfoSessionUncheckedUpdateWithoutPlayersInput>
    create: XOR<InfoSessionCreateWithoutPlayersInput, InfoSessionUncheckedCreateWithoutPlayersInput>
    where?: InfoSessionWhereInput
  }

  export type InfoSessionUpdateToOneWithWhereWithoutPlayersInput = {
    where?: InfoSessionWhereInput
    data: XOR<InfoSessionUpdateWithoutPlayersInput, InfoSessionUncheckedUpdateWithoutPlayersInput>
  }

  export type InfoSessionUpdateWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    private?: BoolFieldUpdateOperationsInput | boolean
    host?: GMProfileUpdateOneRequiredWithoutInfoSessionNestedInput
    Campaign?: CampaignUpdateOneWithoutInfoSessionsNestedInput
  }

  export type InfoSessionUncheckedUpdateWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    gMProfileId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    private?: BoolFieldUpdateOperationsInput | boolean
    campaignId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserCreateWithoutGmProfileInput = {
    id?: string
    name?: string | null
    age?: number | null
    fName?: string | null
    lName?: string | null
    bio?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: $Enums.ROLE
    gMProfileId?: string | null
    playerProfileId?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    playerProfile?: PlayerProfileCreateNestedOneWithoutUserInput
    InfoSession?: InfoSessionCreateNestedOneWithoutPlayersInput
  }

  export type UserUncheckedCreateWithoutGmProfileInput = {
    id?: string
    name?: string | null
    age?: number | null
    fName?: string | null
    lName?: string | null
    bio?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: $Enums.ROLE
    gMProfileId?: string | null
    playerProfileId?: string | null
    infoSessionId?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    playerProfile?: PlayerProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGmProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGmProfileInput, UserUncheckedCreateWithoutGmProfileInput>
  }

  export type GameSessionCreateWithoutHostInput = {
    id?: string
    date: Date | string
    duration: number
    description?: string | null
    notes?: string | null
    state?: $Enums.SessionState
    private?: boolean
    maxPlayers?: number
    platform?: string | null
    prework?: string | null
    players?: PlayerCharacterCreateNestedManyWithoutGameSessionInput
    Campaign: CampaignCreateNestedOneWithoutSessionsInput
    followUpSession?: GameSessionCreateNestedOneWithoutPreviousSessionInput
    previousSession?: GameSessionCreateNestedOneWithoutFollowUpSessionInput
    quest?: QuestCreateNestedOneWithoutGameSessionInput
    story?: StoryCreateNestedOneWithoutGameSessionInput
  }

  export type GameSessionUncheckedCreateWithoutHostInput = {
    id?: string
    date: Date | string
    duration: number
    description?: string | null
    notes?: string | null
    state?: $Enums.SessionState
    campaignId: number
    private?: boolean
    gameSessionId?: string | null
    questId?: number | null
    storyId?: number | null
    maxPlayers?: number
    platform?: string | null
    prework?: string | null
    players?: PlayerCharacterUncheckedCreateNestedManyWithoutGameSessionInput
    previousSession?: GameSessionUncheckedCreateNestedOneWithoutFollowUpSessionInput
  }

  export type GameSessionCreateOrConnectWithoutHostInput = {
    where: GameSessionWhereUniqueInput
    create: XOR<GameSessionCreateWithoutHostInput, GameSessionUncheckedCreateWithoutHostInput>
  }

  export type GameSessionCreateManyHostInputEnvelope = {
    data: GameSessionCreateManyHostInput | GameSessionCreateManyHostInput[]
    skipDuplicates?: boolean
  }

  export type CampaignCreateWithoutGmsInput = {
    description?: string | null
    name: string
    players?: PlayerCharacterCreateNestedManyWithoutCampaignInput
    sessions?: GameSessionCreateNestedManyWithoutCampaignInput
    infoSessions?: InfoSessionCreateNestedManyWithoutCampaignInput
    members?: PlayerProfileCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateWithoutGmsInput = {
    id?: number
    description?: string | null
    name: string
    players?: PlayerCharacterUncheckedCreateNestedManyWithoutCampaignInput
    sessions?: GameSessionUncheckedCreateNestedManyWithoutCampaignInput
    infoSessions?: InfoSessionUncheckedCreateNestedManyWithoutCampaignInput
    members?: PlayerProfileUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignCreateOrConnectWithoutGmsInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutGmsInput, CampaignUncheckedCreateWithoutGmsInput>
  }

  export type QuestCreateWithoutAuthorInput = {
    name: string
    description: string
    isPrivate: boolean
    dmNotes: string
    recLevel?: number | null
    followUp?: QuestCreateNestedOneWithoutPreviousInput
    previous?: QuestCreateNestedOneWithoutFollowUpInput
    GameSession?: GameSessionCreateNestedManyWithoutQuestInput
  }

  export type QuestUncheckedCreateWithoutAuthorInput = {
    id?: number
    name: string
    description: string
    isPrivate: boolean
    dmNotes: string
    recLevel?: number | null
    questID?: number | null
    previous?: QuestUncheckedCreateNestedOneWithoutFollowUpInput
    GameSession?: GameSessionUncheckedCreateNestedManyWithoutQuestInput
  }

  export type QuestCreateOrConnectWithoutAuthorInput = {
    where: QuestWhereUniqueInput
    create: XOR<QuestCreateWithoutAuthorInput, QuestUncheckedCreateWithoutAuthorInput>
  }

  export type QuestCreateManyAuthorInputEnvelope = {
    data: QuestCreateManyAuthorInput | QuestCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type InfoSessionCreateWithoutHostInput = {
    id?: string
    date: Date | string
    duration: number
    description?: string | null
    private?: boolean
    players?: UserCreateNestedManyWithoutInfoSessionInput
    Campaign?: CampaignCreateNestedOneWithoutInfoSessionsInput
  }

  export type InfoSessionUncheckedCreateWithoutHostInput = {
    id?: string
    date: Date | string
    duration: number
    description?: string | null
    private?: boolean
    campaignId?: number | null
    players?: UserUncheckedCreateNestedManyWithoutInfoSessionInput
  }

  export type InfoSessionCreateOrConnectWithoutHostInput = {
    where: InfoSessionWhereUniqueInput
    create: XOR<InfoSessionCreateWithoutHostInput, InfoSessionUncheckedCreateWithoutHostInput>
  }

  export type InfoSessionCreateManyHostInputEnvelope = {
    data: InfoSessionCreateManyHostInput | InfoSessionCreateManyHostInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutGmProfileInput = {
    update: XOR<UserUpdateWithoutGmProfileInput, UserUncheckedUpdateWithoutGmProfileInput>
    create: XOR<UserCreateWithoutGmProfileInput, UserUncheckedCreateWithoutGmProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGmProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGmProfileInput, UserUncheckedUpdateWithoutGmProfileInput>
  }

  export type UserUpdateWithoutGmProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    fName?: NullableStringFieldUpdateOperationsInput | string | null
    lName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    gMProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    playerProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    playerProfile?: PlayerProfileUpdateOneWithoutUserNestedInput
    InfoSession?: InfoSessionUpdateOneWithoutPlayersNestedInput
  }

  export type UserUncheckedUpdateWithoutGmProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    fName?: NullableStringFieldUpdateOperationsInput | string | null
    lName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    gMProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    playerProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    infoSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    playerProfile?: PlayerProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type GameSessionUpsertWithWhereUniqueWithoutHostInput = {
    where: GameSessionWhereUniqueInput
    update: XOR<GameSessionUpdateWithoutHostInput, GameSessionUncheckedUpdateWithoutHostInput>
    create: XOR<GameSessionCreateWithoutHostInput, GameSessionUncheckedCreateWithoutHostInput>
  }

  export type GameSessionUpdateWithWhereUniqueWithoutHostInput = {
    where: GameSessionWhereUniqueInput
    data: XOR<GameSessionUpdateWithoutHostInput, GameSessionUncheckedUpdateWithoutHostInput>
  }

  export type GameSessionUpdateManyWithWhereWithoutHostInput = {
    where: GameSessionScalarWhereInput
    data: XOR<GameSessionUpdateManyMutationInput, GameSessionUncheckedUpdateManyWithoutHostInput>
  }

  export type GameSessionScalarWhereInput = {
    AND?: GameSessionScalarWhereInput | GameSessionScalarWhereInput[]
    OR?: GameSessionScalarWhereInput[]
    NOT?: GameSessionScalarWhereInput | GameSessionScalarWhereInput[]
    id?: StringFilter<"GameSession"> | string
    date?: DateTimeFilter<"GameSession"> | Date | string
    duration?: IntFilter<"GameSession"> | number
    gMProfileId?: StringFilter<"GameSession"> | string
    description?: StringNullableFilter<"GameSession"> | string | null
    notes?: StringNullableFilter<"GameSession"> | string | null
    state?: EnumSessionStateFilter<"GameSession"> | $Enums.SessionState
    campaignId?: IntFilter<"GameSession"> | number
    private?: BoolFilter<"GameSession"> | boolean
    gameSessionId?: StringNullableFilter<"GameSession"> | string | null
    questId?: IntNullableFilter<"GameSession"> | number | null
    storyId?: IntNullableFilter<"GameSession"> | number | null
    maxPlayers?: IntFilter<"GameSession"> | number
    platform?: StringNullableFilter<"GameSession"> | string | null
    prework?: StringNullableFilter<"GameSession"> | string | null
  }

  export type CampaignUpsertWithWhereUniqueWithoutGmsInput = {
    where: CampaignWhereUniqueInput
    update: XOR<CampaignUpdateWithoutGmsInput, CampaignUncheckedUpdateWithoutGmsInput>
    create: XOR<CampaignCreateWithoutGmsInput, CampaignUncheckedCreateWithoutGmsInput>
  }

  export type CampaignUpdateWithWhereUniqueWithoutGmsInput = {
    where: CampaignWhereUniqueInput
    data: XOR<CampaignUpdateWithoutGmsInput, CampaignUncheckedUpdateWithoutGmsInput>
  }

  export type CampaignUpdateManyWithWhereWithoutGmsInput = {
    where: CampaignScalarWhereInput
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyWithoutGmsInput>
  }

  export type CampaignScalarWhereInput = {
    AND?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
    OR?: CampaignScalarWhereInput[]
    NOT?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
    id?: IntFilter<"Campaign"> | number
    description?: StringNullableFilter<"Campaign"> | string | null
    name?: StringFilter<"Campaign"> | string
  }

  export type QuestUpsertWithWhereUniqueWithoutAuthorInput = {
    where: QuestWhereUniqueInput
    update: XOR<QuestUpdateWithoutAuthorInput, QuestUncheckedUpdateWithoutAuthorInput>
    create: XOR<QuestCreateWithoutAuthorInput, QuestUncheckedCreateWithoutAuthorInput>
  }

  export type QuestUpdateWithWhereUniqueWithoutAuthorInput = {
    where: QuestWhereUniqueInput
    data: XOR<QuestUpdateWithoutAuthorInput, QuestUncheckedUpdateWithoutAuthorInput>
  }

  export type QuestUpdateManyWithWhereWithoutAuthorInput = {
    where: QuestScalarWhereInput
    data: XOR<QuestUpdateManyMutationInput, QuestUncheckedUpdateManyWithoutAuthorInput>
  }

  export type QuestScalarWhereInput = {
    AND?: QuestScalarWhereInput | QuestScalarWhereInput[]
    OR?: QuestScalarWhereInput[]
    NOT?: QuestScalarWhereInput | QuestScalarWhereInput[]
    id?: IntFilter<"Quest"> | number
    name?: StringFilter<"Quest"> | string
    description?: StringFilter<"Quest"> | string
    isPrivate?: BoolFilter<"Quest"> | boolean
    dmNotes?: StringFilter<"Quest"> | string
    recLevel?: IntNullableFilter<"Quest"> | number | null
    questID?: IntNullableFilter<"Quest"> | number | null
    gMProfileId?: StringFilter<"Quest"> | string
  }

  export type InfoSessionUpsertWithWhereUniqueWithoutHostInput = {
    where: InfoSessionWhereUniqueInput
    update: XOR<InfoSessionUpdateWithoutHostInput, InfoSessionUncheckedUpdateWithoutHostInput>
    create: XOR<InfoSessionCreateWithoutHostInput, InfoSessionUncheckedCreateWithoutHostInput>
  }

  export type InfoSessionUpdateWithWhereUniqueWithoutHostInput = {
    where: InfoSessionWhereUniqueInput
    data: XOR<InfoSessionUpdateWithoutHostInput, InfoSessionUncheckedUpdateWithoutHostInput>
  }

  export type InfoSessionUpdateManyWithWhereWithoutHostInput = {
    where: InfoSessionScalarWhereInput
    data: XOR<InfoSessionUpdateManyMutationInput, InfoSessionUncheckedUpdateManyWithoutHostInput>
  }

  export type InfoSessionScalarWhereInput = {
    AND?: InfoSessionScalarWhereInput | InfoSessionScalarWhereInput[]
    OR?: InfoSessionScalarWhereInput[]
    NOT?: InfoSessionScalarWhereInput | InfoSessionScalarWhereInput[]
    id?: StringFilter<"InfoSession"> | string
    date?: DateTimeFilter<"InfoSession"> | Date | string
    duration?: IntFilter<"InfoSession"> | number
    gMProfileId?: StringFilter<"InfoSession"> | string
    description?: StringNullableFilter<"InfoSession"> | string | null
    private?: BoolFilter<"InfoSession"> | boolean
    campaignId?: IntNullableFilter<"InfoSession"> | number | null
  }

  export type PlayerCharacterCreateWithoutOwnerInput = {
    id?: string
    name: string
    experience?: number
    level?: number
    gold?: number
    backStory?: string | null
    personality?: string | null
    race: string
    active?: boolean
    GameSession?: GameSessionCreateNestedManyWithoutPlayersInput
    Campaign: CampaignCreateNestedOneWithoutPlayersInput
    character: ClassedEntityCreateNestedOneWithoutPlayerCharacterInput
  }

  export type PlayerCharacterUncheckedCreateWithoutOwnerInput = {
    id?: string
    name: string
    campaignId: number
    experience?: number
    level?: number
    gold?: number
    classedEntityId: string
    backStory?: string | null
    personality?: string | null
    race: string
    active?: boolean
    GameSession?: GameSessionUncheckedCreateNestedManyWithoutPlayersInput
  }

  export type PlayerCharacterCreateOrConnectWithoutOwnerInput = {
    where: PlayerCharacterWhereUniqueInput
    create: XOR<PlayerCharacterCreateWithoutOwnerInput, PlayerCharacterUncheckedCreateWithoutOwnerInput>
  }

  export type PlayerCharacterCreateManyOwnerInputEnvelope = {
    data: PlayerCharacterCreateManyOwnerInput | PlayerCharacterCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutPlayerProfileInput = {
    id?: string
    name?: string | null
    age?: number | null
    fName?: string | null
    lName?: string | null
    bio?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: $Enums.ROLE
    gMProfileId?: string | null
    playerProfileId?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    gmProfile?: GMProfileCreateNestedOneWithoutUserInput
    InfoSession?: InfoSessionCreateNestedOneWithoutPlayersInput
  }

  export type UserUncheckedCreateWithoutPlayerProfileInput = {
    id?: string
    name?: string | null
    age?: number | null
    fName?: string | null
    lName?: string | null
    bio?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: $Enums.ROLE
    gMProfileId?: string | null
    playerProfileId?: string | null
    infoSessionId?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    gmProfile?: GMProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPlayerProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPlayerProfileInput, UserUncheckedCreateWithoutPlayerProfileInput>
  }

  export type CampaignCreateWithoutMembersInput = {
    description?: string | null
    name: string
    gms?: GMProfileCreateNestedManyWithoutCampaignInput
    players?: PlayerCharacterCreateNestedManyWithoutCampaignInput
    sessions?: GameSessionCreateNestedManyWithoutCampaignInput
    infoSessions?: InfoSessionCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateWithoutMembersInput = {
    id?: number
    description?: string | null
    name: string
    gms?: GMProfileUncheckedCreateNestedManyWithoutCampaignInput
    players?: PlayerCharacterUncheckedCreateNestedManyWithoutCampaignInput
    sessions?: GameSessionUncheckedCreateNestedManyWithoutCampaignInput
    infoSessions?: InfoSessionUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignCreateOrConnectWithoutMembersInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutMembersInput, CampaignUncheckedCreateWithoutMembersInput>
  }

  export type PlayerCharacterUpsertWithWhereUniqueWithoutOwnerInput = {
    where: PlayerCharacterWhereUniqueInput
    update: XOR<PlayerCharacterUpdateWithoutOwnerInput, PlayerCharacterUncheckedUpdateWithoutOwnerInput>
    create: XOR<PlayerCharacterCreateWithoutOwnerInput, PlayerCharacterUncheckedCreateWithoutOwnerInput>
  }

  export type PlayerCharacterUpdateWithWhereUniqueWithoutOwnerInput = {
    where: PlayerCharacterWhereUniqueInput
    data: XOR<PlayerCharacterUpdateWithoutOwnerInput, PlayerCharacterUncheckedUpdateWithoutOwnerInput>
  }

  export type PlayerCharacterUpdateManyWithWhereWithoutOwnerInput = {
    where: PlayerCharacterScalarWhereInput
    data: XOR<PlayerCharacterUpdateManyMutationInput, PlayerCharacterUncheckedUpdateManyWithoutOwnerInput>
  }

  export type PlayerCharacterScalarWhereInput = {
    AND?: PlayerCharacterScalarWhereInput | PlayerCharacterScalarWhereInput[]
    OR?: PlayerCharacterScalarWhereInput[]
    NOT?: PlayerCharacterScalarWhereInput | PlayerCharacterScalarWhereInput[]
    id?: StringFilter<"PlayerCharacter"> | string
    name?: StringFilter<"PlayerCharacter"> | string
    playerProfileId?: StringFilter<"PlayerCharacter"> | string
    campaignId?: IntFilter<"PlayerCharacter"> | number
    experience?: IntFilter<"PlayerCharacter"> | number
    level?: IntFilter<"PlayerCharacter"> | number
    gold?: IntFilter<"PlayerCharacter"> | number
    classedEntityId?: StringFilter<"PlayerCharacter"> | string
    backStory?: StringNullableFilter<"PlayerCharacter"> | string | null
    personality?: StringNullableFilter<"PlayerCharacter"> | string | null
    race?: StringFilter<"PlayerCharacter"> | string
    active?: BoolFilter<"PlayerCharacter"> | boolean
  }

  export type UserUpsertWithoutPlayerProfileInput = {
    update: XOR<UserUpdateWithoutPlayerProfileInput, UserUncheckedUpdateWithoutPlayerProfileInput>
    create: XOR<UserCreateWithoutPlayerProfileInput, UserUncheckedCreateWithoutPlayerProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPlayerProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPlayerProfileInput, UserUncheckedUpdateWithoutPlayerProfileInput>
  }

  export type UserUpdateWithoutPlayerProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    fName?: NullableStringFieldUpdateOperationsInput | string | null
    lName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    gMProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    playerProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    gmProfile?: GMProfileUpdateOneWithoutUserNestedInput
    InfoSession?: InfoSessionUpdateOneWithoutPlayersNestedInput
  }

  export type UserUncheckedUpdateWithoutPlayerProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    fName?: NullableStringFieldUpdateOperationsInput | string | null
    lName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    gMProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    playerProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    infoSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    gmProfile?: GMProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type CampaignUpsertWithoutMembersInput = {
    update: XOR<CampaignUpdateWithoutMembersInput, CampaignUncheckedUpdateWithoutMembersInput>
    create: XOR<CampaignCreateWithoutMembersInput, CampaignUncheckedCreateWithoutMembersInput>
    where?: CampaignWhereInput
  }

  export type CampaignUpdateToOneWithWhereWithoutMembersInput = {
    where?: CampaignWhereInput
    data: XOR<CampaignUpdateWithoutMembersInput, CampaignUncheckedUpdateWithoutMembersInput>
  }

  export type CampaignUpdateWithoutMembersInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    gms?: GMProfileUpdateManyWithoutCampaignNestedInput
    players?: PlayerCharacterUpdateManyWithoutCampaignNestedInput
    sessions?: GameSessionUpdateManyWithoutCampaignNestedInput
    infoSessions?: InfoSessionUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateWithoutMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    gms?: GMProfileUncheckedUpdateManyWithoutCampaignNestedInput
    players?: PlayerCharacterUncheckedUpdateManyWithoutCampaignNestedInput
    sessions?: GameSessionUncheckedUpdateManyWithoutCampaignNestedInput
    infoSessions?: InfoSessionUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type PlayerProfileCreateWithoutPlayerCharacterInput = {
    id?: string
    User: UserCreateNestedOneWithoutPlayerProfileInput
    Campaign?: CampaignCreateNestedOneWithoutMembersInput
  }

  export type PlayerProfileUncheckedCreateWithoutPlayerCharacterInput = {
    id?: string
    userId: string
    campaignId?: number | null
  }

  export type PlayerProfileCreateOrConnectWithoutPlayerCharacterInput = {
    where: PlayerProfileWhereUniqueInput
    create: XOR<PlayerProfileCreateWithoutPlayerCharacterInput, PlayerProfileUncheckedCreateWithoutPlayerCharacterInput>
  }

  export type GameSessionCreateWithoutPlayersInput = {
    id?: string
    date: Date | string
    duration: number
    description?: string | null
    notes?: string | null
    state?: $Enums.SessionState
    private?: boolean
    maxPlayers?: number
    platform?: string | null
    prework?: string | null
    host: GMProfileCreateNestedOneWithoutGameSessionInput
    Campaign: CampaignCreateNestedOneWithoutSessionsInput
    followUpSession?: GameSessionCreateNestedOneWithoutPreviousSessionInput
    previousSession?: GameSessionCreateNestedOneWithoutFollowUpSessionInput
    quest?: QuestCreateNestedOneWithoutGameSessionInput
    story?: StoryCreateNestedOneWithoutGameSessionInput
  }

  export type GameSessionUncheckedCreateWithoutPlayersInput = {
    id?: string
    date: Date | string
    duration: number
    gMProfileId: string
    description?: string | null
    notes?: string | null
    state?: $Enums.SessionState
    campaignId: number
    private?: boolean
    gameSessionId?: string | null
    questId?: number | null
    storyId?: number | null
    maxPlayers?: number
    platform?: string | null
    prework?: string | null
    previousSession?: GameSessionUncheckedCreateNestedOneWithoutFollowUpSessionInput
  }

  export type GameSessionCreateOrConnectWithoutPlayersInput = {
    where: GameSessionWhereUniqueInput
    create: XOR<GameSessionCreateWithoutPlayersInput, GameSessionUncheckedCreateWithoutPlayersInput>
  }

  export type CampaignCreateWithoutPlayersInput = {
    description?: string | null
    name: string
    gms?: GMProfileCreateNestedManyWithoutCampaignInput
    sessions?: GameSessionCreateNestedManyWithoutCampaignInput
    infoSessions?: InfoSessionCreateNestedManyWithoutCampaignInput
    members?: PlayerProfileCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateWithoutPlayersInput = {
    id?: number
    description?: string | null
    name: string
    gms?: GMProfileUncheckedCreateNestedManyWithoutCampaignInput
    sessions?: GameSessionUncheckedCreateNestedManyWithoutCampaignInput
    infoSessions?: InfoSessionUncheckedCreateNestedManyWithoutCampaignInput
    members?: PlayerProfileUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignCreateOrConnectWithoutPlayersInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutPlayersInput, CampaignUncheckedCreateWithoutPlayersInput>
  }

  export type ClassedEntityCreateWithoutPlayerCharacterInput = {
    id?: string
    classes?: ClassConfigsCreateNestedManyWithoutClassedEntityInput
  }

  export type ClassedEntityUncheckedCreateWithoutPlayerCharacterInput = {
    id?: string
    classes?: ClassConfigsUncheckedCreateNestedManyWithoutClassedEntityInput
  }

  export type ClassedEntityCreateOrConnectWithoutPlayerCharacterInput = {
    where: ClassedEntityWhereUniqueInput
    create: XOR<ClassedEntityCreateWithoutPlayerCharacterInput, ClassedEntityUncheckedCreateWithoutPlayerCharacterInput>
  }

  export type PlayerProfileUpsertWithoutPlayerCharacterInput = {
    update: XOR<PlayerProfileUpdateWithoutPlayerCharacterInput, PlayerProfileUncheckedUpdateWithoutPlayerCharacterInput>
    create: XOR<PlayerProfileCreateWithoutPlayerCharacterInput, PlayerProfileUncheckedCreateWithoutPlayerCharacterInput>
    where?: PlayerProfileWhereInput
  }

  export type PlayerProfileUpdateToOneWithWhereWithoutPlayerCharacterInput = {
    where?: PlayerProfileWhereInput
    data: XOR<PlayerProfileUpdateWithoutPlayerCharacterInput, PlayerProfileUncheckedUpdateWithoutPlayerCharacterInput>
  }

  export type PlayerProfileUpdateWithoutPlayerCharacterInput = {
    id?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateOneRequiredWithoutPlayerProfileNestedInput
    Campaign?: CampaignUpdateOneWithoutMembersNestedInput
  }

  export type PlayerProfileUncheckedUpdateWithoutPlayerCharacterInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    campaignId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GameSessionUpsertWithWhereUniqueWithoutPlayersInput = {
    where: GameSessionWhereUniqueInput
    update: XOR<GameSessionUpdateWithoutPlayersInput, GameSessionUncheckedUpdateWithoutPlayersInput>
    create: XOR<GameSessionCreateWithoutPlayersInput, GameSessionUncheckedCreateWithoutPlayersInput>
  }

  export type GameSessionUpdateWithWhereUniqueWithoutPlayersInput = {
    where: GameSessionWhereUniqueInput
    data: XOR<GameSessionUpdateWithoutPlayersInput, GameSessionUncheckedUpdateWithoutPlayersInput>
  }

  export type GameSessionUpdateManyWithWhereWithoutPlayersInput = {
    where: GameSessionScalarWhereInput
    data: XOR<GameSessionUpdateManyMutationInput, GameSessionUncheckedUpdateManyWithoutPlayersInput>
  }

  export type CampaignUpsertWithoutPlayersInput = {
    update: XOR<CampaignUpdateWithoutPlayersInput, CampaignUncheckedUpdateWithoutPlayersInput>
    create: XOR<CampaignCreateWithoutPlayersInput, CampaignUncheckedCreateWithoutPlayersInput>
    where?: CampaignWhereInput
  }

  export type CampaignUpdateToOneWithWhereWithoutPlayersInput = {
    where?: CampaignWhereInput
    data: XOR<CampaignUpdateWithoutPlayersInput, CampaignUncheckedUpdateWithoutPlayersInput>
  }

  export type CampaignUpdateWithoutPlayersInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    gms?: GMProfileUpdateManyWithoutCampaignNestedInput
    sessions?: GameSessionUpdateManyWithoutCampaignNestedInput
    infoSessions?: InfoSessionUpdateManyWithoutCampaignNestedInput
    members?: PlayerProfileUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateWithoutPlayersInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    gms?: GMProfileUncheckedUpdateManyWithoutCampaignNestedInput
    sessions?: GameSessionUncheckedUpdateManyWithoutCampaignNestedInput
    infoSessions?: InfoSessionUncheckedUpdateManyWithoutCampaignNestedInput
    members?: PlayerProfileUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type ClassedEntityUpsertWithoutPlayerCharacterInput = {
    update: XOR<ClassedEntityUpdateWithoutPlayerCharacterInput, ClassedEntityUncheckedUpdateWithoutPlayerCharacterInput>
    create: XOR<ClassedEntityCreateWithoutPlayerCharacterInput, ClassedEntityUncheckedCreateWithoutPlayerCharacterInput>
    where?: ClassedEntityWhereInput
  }

  export type ClassedEntityUpdateToOneWithWhereWithoutPlayerCharacterInput = {
    where?: ClassedEntityWhereInput
    data: XOR<ClassedEntityUpdateWithoutPlayerCharacterInput, ClassedEntityUncheckedUpdateWithoutPlayerCharacterInput>
  }

  export type ClassedEntityUpdateWithoutPlayerCharacterInput = {
    id?: StringFieldUpdateOperationsInput | string
    classes?: ClassConfigsUpdateManyWithoutClassedEntityNestedInput
  }

  export type ClassedEntityUncheckedUpdateWithoutPlayerCharacterInput = {
    id?: StringFieldUpdateOperationsInput | string
    classes?: ClassConfigsUncheckedUpdateManyWithoutClassedEntityNestedInput
  }

  export type ClassConfigsCreateWithoutClassedEntityInput = {
    id?: string
    Level?: number
    ClassChoice: ClassCreateNestedOneWithoutClassConfigsInput
  }

  export type ClassConfigsUncheckedCreateWithoutClassedEntityInput = {
    id?: string
    classId: string
    Level?: number
  }

  export type ClassConfigsCreateOrConnectWithoutClassedEntityInput = {
    where: ClassConfigsWhereUniqueInput
    create: XOR<ClassConfigsCreateWithoutClassedEntityInput, ClassConfigsUncheckedCreateWithoutClassedEntityInput>
  }

  export type ClassConfigsCreateManyClassedEntityInputEnvelope = {
    data: ClassConfigsCreateManyClassedEntityInput | ClassConfigsCreateManyClassedEntityInput[]
    skipDuplicates?: boolean
  }

  export type PlayerCharacterCreateWithoutCharacterInput = {
    id?: string
    name: string
    experience?: number
    level?: number
    gold?: number
    backStory?: string | null
    personality?: string | null
    race: string
    active?: boolean
    owner: PlayerProfileCreateNestedOneWithoutPlayerCharacterInput
    GameSession?: GameSessionCreateNestedManyWithoutPlayersInput
    Campaign: CampaignCreateNestedOneWithoutPlayersInput
  }

  export type PlayerCharacterUncheckedCreateWithoutCharacterInput = {
    id?: string
    name: string
    playerProfileId: string
    campaignId: number
    experience?: number
    level?: number
    gold?: number
    backStory?: string | null
    personality?: string | null
    race: string
    active?: boolean
    GameSession?: GameSessionUncheckedCreateNestedManyWithoutPlayersInput
  }

  export type PlayerCharacterCreateOrConnectWithoutCharacterInput = {
    where: PlayerCharacterWhereUniqueInput
    create: XOR<PlayerCharacterCreateWithoutCharacterInput, PlayerCharacterUncheckedCreateWithoutCharacterInput>
  }

  export type ClassConfigsUpsertWithWhereUniqueWithoutClassedEntityInput = {
    where: ClassConfigsWhereUniqueInput
    update: XOR<ClassConfigsUpdateWithoutClassedEntityInput, ClassConfigsUncheckedUpdateWithoutClassedEntityInput>
    create: XOR<ClassConfigsCreateWithoutClassedEntityInput, ClassConfigsUncheckedCreateWithoutClassedEntityInput>
  }

  export type ClassConfigsUpdateWithWhereUniqueWithoutClassedEntityInput = {
    where: ClassConfigsWhereUniqueInput
    data: XOR<ClassConfigsUpdateWithoutClassedEntityInput, ClassConfigsUncheckedUpdateWithoutClassedEntityInput>
  }

  export type ClassConfigsUpdateManyWithWhereWithoutClassedEntityInput = {
    where: ClassConfigsScalarWhereInput
    data: XOR<ClassConfigsUpdateManyMutationInput, ClassConfigsUncheckedUpdateManyWithoutClassedEntityInput>
  }

  export type ClassConfigsScalarWhereInput = {
    AND?: ClassConfigsScalarWhereInput | ClassConfigsScalarWhereInput[]
    OR?: ClassConfigsScalarWhereInput[]
    NOT?: ClassConfigsScalarWhereInput | ClassConfigsScalarWhereInput[]
    id?: StringFilter<"ClassConfigs"> | string
    classId?: StringFilter<"ClassConfigs"> | string
    Level?: IntFilter<"ClassConfigs"> | number
    classedEntityId?: StringFilter<"ClassConfigs"> | string
  }

  export type PlayerCharacterUpsertWithoutCharacterInput = {
    update: XOR<PlayerCharacterUpdateWithoutCharacterInput, PlayerCharacterUncheckedUpdateWithoutCharacterInput>
    create: XOR<PlayerCharacterCreateWithoutCharacterInput, PlayerCharacterUncheckedCreateWithoutCharacterInput>
    where?: PlayerCharacterWhereInput
  }

  export type PlayerCharacterUpdateToOneWithWhereWithoutCharacterInput = {
    where?: PlayerCharacterWhereInput
    data: XOR<PlayerCharacterUpdateWithoutCharacterInput, PlayerCharacterUncheckedUpdateWithoutCharacterInput>
  }

  export type PlayerCharacterUpdateWithoutCharacterInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    gold?: IntFieldUpdateOperationsInput | number
    backStory?: NullableStringFieldUpdateOperationsInput | string | null
    personality?: NullableStringFieldUpdateOperationsInput | string | null
    race?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    owner?: PlayerProfileUpdateOneRequiredWithoutPlayerCharacterNestedInput
    GameSession?: GameSessionUpdateManyWithoutPlayersNestedInput
    Campaign?: CampaignUpdateOneRequiredWithoutPlayersNestedInput
  }

  export type PlayerCharacterUncheckedUpdateWithoutCharacterInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    playerProfileId?: StringFieldUpdateOperationsInput | string
    campaignId?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    gold?: IntFieldUpdateOperationsInput | number
    backStory?: NullableStringFieldUpdateOperationsInput | string | null
    personality?: NullableStringFieldUpdateOperationsInput | string | null
    race?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    GameSession?: GameSessionUncheckedUpdateManyWithoutPlayersNestedInput
  }

  export type ClassedEntityCreateWithoutClassesInput = {
    id?: string
    PlayerCharacter?: PlayerCharacterCreateNestedOneWithoutCharacterInput
  }

  export type ClassedEntityUncheckedCreateWithoutClassesInput = {
    id?: string
    PlayerCharacter?: PlayerCharacterUncheckedCreateNestedOneWithoutCharacterInput
  }

  export type ClassedEntityCreateOrConnectWithoutClassesInput = {
    where: ClassedEntityWhereUniqueInput
    create: XOR<ClassedEntityCreateWithoutClassesInput, ClassedEntityUncheckedCreateWithoutClassesInput>
  }

  export type ClassCreateWithoutClassConfigsInput = {
    id?: string
    name: string
  }

  export type ClassUncheckedCreateWithoutClassConfigsInput = {
    id?: string
    name: string
  }

  export type ClassCreateOrConnectWithoutClassConfigsInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutClassConfigsInput, ClassUncheckedCreateWithoutClassConfigsInput>
  }

  export type ClassedEntityUpsertWithoutClassesInput = {
    update: XOR<ClassedEntityUpdateWithoutClassesInput, ClassedEntityUncheckedUpdateWithoutClassesInput>
    create: XOR<ClassedEntityCreateWithoutClassesInput, ClassedEntityUncheckedCreateWithoutClassesInput>
    where?: ClassedEntityWhereInput
  }

  export type ClassedEntityUpdateToOneWithWhereWithoutClassesInput = {
    where?: ClassedEntityWhereInput
    data: XOR<ClassedEntityUpdateWithoutClassesInput, ClassedEntityUncheckedUpdateWithoutClassesInput>
  }

  export type ClassedEntityUpdateWithoutClassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    PlayerCharacter?: PlayerCharacterUpdateOneWithoutCharacterNestedInput
  }

  export type ClassedEntityUncheckedUpdateWithoutClassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    PlayerCharacter?: PlayerCharacterUncheckedUpdateOneWithoutCharacterNestedInput
  }

  export type ClassUpsertWithoutClassConfigsInput = {
    update: XOR<ClassUpdateWithoutClassConfigsInput, ClassUncheckedUpdateWithoutClassConfigsInput>
    create: XOR<ClassCreateWithoutClassConfigsInput, ClassUncheckedCreateWithoutClassConfigsInput>
    where?: ClassWhereInput
  }

  export type ClassUpdateToOneWithWhereWithoutClassConfigsInput = {
    where?: ClassWhereInput
    data: XOR<ClassUpdateWithoutClassConfigsInput, ClassUncheckedUpdateWithoutClassConfigsInput>
  }

  export type ClassUpdateWithoutClassConfigsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ClassUncheckedUpdateWithoutClassConfigsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ClassConfigsCreateWithoutClassChoiceInput = {
    id?: string
    Level?: number
    ClassedEntity: ClassedEntityCreateNestedOneWithoutClassesInput
  }

  export type ClassConfigsUncheckedCreateWithoutClassChoiceInput = {
    id?: string
    Level?: number
    classedEntityId: string
  }

  export type ClassConfigsCreateOrConnectWithoutClassChoiceInput = {
    where: ClassConfigsWhereUniqueInput
    create: XOR<ClassConfigsCreateWithoutClassChoiceInput, ClassConfigsUncheckedCreateWithoutClassChoiceInput>
  }

  export type ClassConfigsCreateManyClassChoiceInputEnvelope = {
    data: ClassConfigsCreateManyClassChoiceInput | ClassConfigsCreateManyClassChoiceInput[]
    skipDuplicates?: boolean
  }

  export type ClassConfigsUpsertWithWhereUniqueWithoutClassChoiceInput = {
    where: ClassConfigsWhereUniqueInput
    update: XOR<ClassConfigsUpdateWithoutClassChoiceInput, ClassConfigsUncheckedUpdateWithoutClassChoiceInput>
    create: XOR<ClassConfigsCreateWithoutClassChoiceInput, ClassConfigsUncheckedCreateWithoutClassChoiceInput>
  }

  export type ClassConfigsUpdateWithWhereUniqueWithoutClassChoiceInput = {
    where: ClassConfigsWhereUniqueInput
    data: XOR<ClassConfigsUpdateWithoutClassChoiceInput, ClassConfigsUncheckedUpdateWithoutClassChoiceInput>
  }

  export type ClassConfigsUpdateManyWithWhereWithoutClassChoiceInput = {
    where: ClassConfigsScalarWhereInput
    data: XOR<ClassConfigsUpdateManyMutationInput, ClassConfigsUncheckedUpdateManyWithoutClassChoiceInput>
  }

  export type GMProfileCreateWithoutGameSessionInput = {
    id?: string
    type: $Enums.HostType
    User: UserCreateNestedOneWithoutGmProfileInput
    Campaign?: CampaignCreateNestedManyWithoutGmsInput
    Quest?: QuestCreateNestedManyWithoutAuthorInput
    InfoSession?: InfoSessionCreateNestedManyWithoutHostInput
  }

  export type GMProfileUncheckedCreateWithoutGameSessionInput = {
    id?: string
    userId: string
    type: $Enums.HostType
    Campaign?: CampaignUncheckedCreateNestedManyWithoutGmsInput
    Quest?: QuestUncheckedCreateNestedManyWithoutAuthorInput
    InfoSession?: InfoSessionUncheckedCreateNestedManyWithoutHostInput
  }

  export type GMProfileCreateOrConnectWithoutGameSessionInput = {
    where: GMProfileWhereUniqueInput
    create: XOR<GMProfileCreateWithoutGameSessionInput, GMProfileUncheckedCreateWithoutGameSessionInput>
  }

  export type PlayerCharacterCreateWithoutGameSessionInput = {
    id?: string
    name: string
    experience?: number
    level?: number
    gold?: number
    backStory?: string | null
    personality?: string | null
    race: string
    active?: boolean
    owner: PlayerProfileCreateNestedOneWithoutPlayerCharacterInput
    Campaign: CampaignCreateNestedOneWithoutPlayersInput
    character: ClassedEntityCreateNestedOneWithoutPlayerCharacterInput
  }

  export type PlayerCharacterUncheckedCreateWithoutGameSessionInput = {
    id?: string
    name: string
    playerProfileId: string
    campaignId: number
    experience?: number
    level?: number
    gold?: number
    classedEntityId: string
    backStory?: string | null
    personality?: string | null
    race: string
    active?: boolean
  }

  export type PlayerCharacterCreateOrConnectWithoutGameSessionInput = {
    where: PlayerCharacterWhereUniqueInput
    create: XOR<PlayerCharacterCreateWithoutGameSessionInput, PlayerCharacterUncheckedCreateWithoutGameSessionInput>
  }

  export type CampaignCreateWithoutSessionsInput = {
    description?: string | null
    name: string
    gms?: GMProfileCreateNestedManyWithoutCampaignInput
    players?: PlayerCharacterCreateNestedManyWithoutCampaignInput
    infoSessions?: InfoSessionCreateNestedManyWithoutCampaignInput
    members?: PlayerProfileCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateWithoutSessionsInput = {
    id?: number
    description?: string | null
    name: string
    gms?: GMProfileUncheckedCreateNestedManyWithoutCampaignInput
    players?: PlayerCharacterUncheckedCreateNestedManyWithoutCampaignInput
    infoSessions?: InfoSessionUncheckedCreateNestedManyWithoutCampaignInput
    members?: PlayerProfileUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignCreateOrConnectWithoutSessionsInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutSessionsInput, CampaignUncheckedCreateWithoutSessionsInput>
  }

  export type GameSessionCreateWithoutPreviousSessionInput = {
    id?: string
    date: Date | string
    duration: number
    description?: string | null
    notes?: string | null
    state?: $Enums.SessionState
    private?: boolean
    maxPlayers?: number
    platform?: string | null
    prework?: string | null
    host: GMProfileCreateNestedOneWithoutGameSessionInput
    players?: PlayerCharacterCreateNestedManyWithoutGameSessionInput
    Campaign: CampaignCreateNestedOneWithoutSessionsInput
    followUpSession?: GameSessionCreateNestedOneWithoutPreviousSessionInput
    quest?: QuestCreateNestedOneWithoutGameSessionInput
    story?: StoryCreateNestedOneWithoutGameSessionInput
  }

  export type GameSessionUncheckedCreateWithoutPreviousSessionInput = {
    id?: string
    date: Date | string
    duration: number
    gMProfileId: string
    description?: string | null
    notes?: string | null
    state?: $Enums.SessionState
    campaignId: number
    private?: boolean
    gameSessionId?: string | null
    questId?: number | null
    storyId?: number | null
    maxPlayers?: number
    platform?: string | null
    prework?: string | null
    players?: PlayerCharacterUncheckedCreateNestedManyWithoutGameSessionInput
  }

  export type GameSessionCreateOrConnectWithoutPreviousSessionInput = {
    where: GameSessionWhereUniqueInput
    create: XOR<GameSessionCreateWithoutPreviousSessionInput, GameSessionUncheckedCreateWithoutPreviousSessionInput>
  }

  export type GameSessionCreateWithoutFollowUpSessionInput = {
    id?: string
    date: Date | string
    duration: number
    description?: string | null
    notes?: string | null
    state?: $Enums.SessionState
    private?: boolean
    maxPlayers?: number
    platform?: string | null
    prework?: string | null
    host: GMProfileCreateNestedOneWithoutGameSessionInput
    players?: PlayerCharacterCreateNestedManyWithoutGameSessionInput
    Campaign: CampaignCreateNestedOneWithoutSessionsInput
    previousSession?: GameSessionCreateNestedOneWithoutFollowUpSessionInput
    quest?: QuestCreateNestedOneWithoutGameSessionInput
    story?: StoryCreateNestedOneWithoutGameSessionInput
  }

  export type GameSessionUncheckedCreateWithoutFollowUpSessionInput = {
    id?: string
    date: Date | string
    duration: number
    gMProfileId: string
    description?: string | null
    notes?: string | null
    state?: $Enums.SessionState
    campaignId: number
    private?: boolean
    questId?: number | null
    storyId?: number | null
    maxPlayers?: number
    platform?: string | null
    prework?: string | null
    players?: PlayerCharacterUncheckedCreateNestedManyWithoutGameSessionInput
    previousSession?: GameSessionUncheckedCreateNestedOneWithoutFollowUpSessionInput
  }

  export type GameSessionCreateOrConnectWithoutFollowUpSessionInput = {
    where: GameSessionWhereUniqueInput
    create: XOR<GameSessionCreateWithoutFollowUpSessionInput, GameSessionUncheckedCreateWithoutFollowUpSessionInput>
  }

  export type QuestCreateWithoutGameSessionInput = {
    name: string
    description: string
    isPrivate: boolean
    dmNotes: string
    recLevel?: number | null
    author: GMProfileCreateNestedOneWithoutQuestInput
    followUp?: QuestCreateNestedOneWithoutPreviousInput
    previous?: QuestCreateNestedOneWithoutFollowUpInput
  }

  export type QuestUncheckedCreateWithoutGameSessionInput = {
    id?: number
    name: string
    description: string
    isPrivate: boolean
    dmNotes: string
    recLevel?: number | null
    questID?: number | null
    gMProfileId: string
    previous?: QuestUncheckedCreateNestedOneWithoutFollowUpInput
  }

  export type QuestCreateOrConnectWithoutGameSessionInput = {
    where: QuestWhereUniqueInput
    create: XOR<QuestCreateWithoutGameSessionInput, QuestUncheckedCreateWithoutGameSessionInput>
  }

  export type StoryCreateWithoutGameSessionInput = {
    name: string
    description?: string | null
  }

  export type StoryUncheckedCreateWithoutGameSessionInput = {
    id?: number
    name: string
    description?: string | null
  }

  export type StoryCreateOrConnectWithoutGameSessionInput = {
    where: StoryWhereUniqueInput
    create: XOR<StoryCreateWithoutGameSessionInput, StoryUncheckedCreateWithoutGameSessionInput>
  }

  export type GMProfileUpsertWithoutGameSessionInput = {
    update: XOR<GMProfileUpdateWithoutGameSessionInput, GMProfileUncheckedUpdateWithoutGameSessionInput>
    create: XOR<GMProfileCreateWithoutGameSessionInput, GMProfileUncheckedCreateWithoutGameSessionInput>
    where?: GMProfileWhereInput
  }

  export type GMProfileUpdateToOneWithWhereWithoutGameSessionInput = {
    where?: GMProfileWhereInput
    data: XOR<GMProfileUpdateWithoutGameSessionInput, GMProfileUncheckedUpdateWithoutGameSessionInput>
  }

  export type GMProfileUpdateWithoutGameSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumHostTypeFieldUpdateOperationsInput | $Enums.HostType
    User?: UserUpdateOneRequiredWithoutGmProfileNestedInput
    Campaign?: CampaignUpdateManyWithoutGmsNestedInput
    Quest?: QuestUpdateManyWithoutAuthorNestedInput
    InfoSession?: InfoSessionUpdateManyWithoutHostNestedInput
  }

  export type GMProfileUncheckedUpdateWithoutGameSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumHostTypeFieldUpdateOperationsInput | $Enums.HostType
    Campaign?: CampaignUncheckedUpdateManyWithoutGmsNestedInput
    Quest?: QuestUncheckedUpdateManyWithoutAuthorNestedInput
    InfoSession?: InfoSessionUncheckedUpdateManyWithoutHostNestedInput
  }

  export type PlayerCharacterUpsertWithWhereUniqueWithoutGameSessionInput = {
    where: PlayerCharacterWhereUniqueInput
    update: XOR<PlayerCharacterUpdateWithoutGameSessionInput, PlayerCharacterUncheckedUpdateWithoutGameSessionInput>
    create: XOR<PlayerCharacterCreateWithoutGameSessionInput, PlayerCharacterUncheckedCreateWithoutGameSessionInput>
  }

  export type PlayerCharacterUpdateWithWhereUniqueWithoutGameSessionInput = {
    where: PlayerCharacterWhereUniqueInput
    data: XOR<PlayerCharacterUpdateWithoutGameSessionInput, PlayerCharacterUncheckedUpdateWithoutGameSessionInput>
  }

  export type PlayerCharacterUpdateManyWithWhereWithoutGameSessionInput = {
    where: PlayerCharacterScalarWhereInput
    data: XOR<PlayerCharacterUpdateManyMutationInput, PlayerCharacterUncheckedUpdateManyWithoutGameSessionInput>
  }

  export type CampaignUpsertWithoutSessionsInput = {
    update: XOR<CampaignUpdateWithoutSessionsInput, CampaignUncheckedUpdateWithoutSessionsInput>
    create: XOR<CampaignCreateWithoutSessionsInput, CampaignUncheckedCreateWithoutSessionsInput>
    where?: CampaignWhereInput
  }

  export type CampaignUpdateToOneWithWhereWithoutSessionsInput = {
    where?: CampaignWhereInput
    data: XOR<CampaignUpdateWithoutSessionsInput, CampaignUncheckedUpdateWithoutSessionsInput>
  }

  export type CampaignUpdateWithoutSessionsInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    gms?: GMProfileUpdateManyWithoutCampaignNestedInput
    players?: PlayerCharacterUpdateManyWithoutCampaignNestedInput
    infoSessions?: InfoSessionUpdateManyWithoutCampaignNestedInput
    members?: PlayerProfileUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateWithoutSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    gms?: GMProfileUncheckedUpdateManyWithoutCampaignNestedInput
    players?: PlayerCharacterUncheckedUpdateManyWithoutCampaignNestedInput
    infoSessions?: InfoSessionUncheckedUpdateManyWithoutCampaignNestedInput
    members?: PlayerProfileUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type GameSessionUpsertWithoutPreviousSessionInput = {
    update: XOR<GameSessionUpdateWithoutPreviousSessionInput, GameSessionUncheckedUpdateWithoutPreviousSessionInput>
    create: XOR<GameSessionCreateWithoutPreviousSessionInput, GameSessionUncheckedCreateWithoutPreviousSessionInput>
    where?: GameSessionWhereInput
  }

  export type GameSessionUpdateToOneWithWhereWithoutPreviousSessionInput = {
    where?: GameSessionWhereInput
    data: XOR<GameSessionUpdateWithoutPreviousSessionInput, GameSessionUncheckedUpdateWithoutPreviousSessionInput>
  }

  export type GameSessionUpdateWithoutPreviousSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    state?: EnumSessionStateFieldUpdateOperationsInput | $Enums.SessionState
    private?: BoolFieldUpdateOperationsInput | boolean
    maxPlayers?: IntFieldUpdateOperationsInput | number
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    prework?: NullableStringFieldUpdateOperationsInput | string | null
    host?: GMProfileUpdateOneRequiredWithoutGameSessionNestedInput
    players?: PlayerCharacterUpdateManyWithoutGameSessionNestedInput
    Campaign?: CampaignUpdateOneRequiredWithoutSessionsNestedInput
    followUpSession?: GameSessionUpdateOneWithoutPreviousSessionNestedInput
    quest?: QuestUpdateOneWithoutGameSessionNestedInput
    story?: StoryUpdateOneWithoutGameSessionNestedInput
  }

  export type GameSessionUncheckedUpdateWithoutPreviousSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    gMProfileId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    state?: EnumSessionStateFieldUpdateOperationsInput | $Enums.SessionState
    campaignId?: IntFieldUpdateOperationsInput | number
    private?: BoolFieldUpdateOperationsInput | boolean
    gameSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    questId?: NullableIntFieldUpdateOperationsInput | number | null
    storyId?: NullableIntFieldUpdateOperationsInput | number | null
    maxPlayers?: IntFieldUpdateOperationsInput | number
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    prework?: NullableStringFieldUpdateOperationsInput | string | null
    players?: PlayerCharacterUncheckedUpdateManyWithoutGameSessionNestedInput
  }

  export type GameSessionUpsertWithoutFollowUpSessionInput = {
    update: XOR<GameSessionUpdateWithoutFollowUpSessionInput, GameSessionUncheckedUpdateWithoutFollowUpSessionInput>
    create: XOR<GameSessionCreateWithoutFollowUpSessionInput, GameSessionUncheckedCreateWithoutFollowUpSessionInput>
    where?: GameSessionWhereInput
  }

  export type GameSessionUpdateToOneWithWhereWithoutFollowUpSessionInput = {
    where?: GameSessionWhereInput
    data: XOR<GameSessionUpdateWithoutFollowUpSessionInput, GameSessionUncheckedUpdateWithoutFollowUpSessionInput>
  }

  export type GameSessionUpdateWithoutFollowUpSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    state?: EnumSessionStateFieldUpdateOperationsInput | $Enums.SessionState
    private?: BoolFieldUpdateOperationsInput | boolean
    maxPlayers?: IntFieldUpdateOperationsInput | number
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    prework?: NullableStringFieldUpdateOperationsInput | string | null
    host?: GMProfileUpdateOneRequiredWithoutGameSessionNestedInput
    players?: PlayerCharacterUpdateManyWithoutGameSessionNestedInput
    Campaign?: CampaignUpdateOneRequiredWithoutSessionsNestedInput
    previousSession?: GameSessionUpdateOneWithoutFollowUpSessionNestedInput
    quest?: QuestUpdateOneWithoutGameSessionNestedInput
    story?: StoryUpdateOneWithoutGameSessionNestedInput
  }

  export type GameSessionUncheckedUpdateWithoutFollowUpSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    gMProfileId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    state?: EnumSessionStateFieldUpdateOperationsInput | $Enums.SessionState
    campaignId?: IntFieldUpdateOperationsInput | number
    private?: BoolFieldUpdateOperationsInput | boolean
    questId?: NullableIntFieldUpdateOperationsInput | number | null
    storyId?: NullableIntFieldUpdateOperationsInput | number | null
    maxPlayers?: IntFieldUpdateOperationsInput | number
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    prework?: NullableStringFieldUpdateOperationsInput | string | null
    players?: PlayerCharacterUncheckedUpdateManyWithoutGameSessionNestedInput
    previousSession?: GameSessionUncheckedUpdateOneWithoutFollowUpSessionNestedInput
  }

  export type QuestUpsertWithoutGameSessionInput = {
    update: XOR<QuestUpdateWithoutGameSessionInput, QuestUncheckedUpdateWithoutGameSessionInput>
    create: XOR<QuestCreateWithoutGameSessionInput, QuestUncheckedCreateWithoutGameSessionInput>
    where?: QuestWhereInput
  }

  export type QuestUpdateToOneWithWhereWithoutGameSessionInput = {
    where?: QuestWhereInput
    data: XOR<QuestUpdateWithoutGameSessionInput, QuestUncheckedUpdateWithoutGameSessionInput>
  }

  export type QuestUpdateWithoutGameSessionInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    dmNotes?: StringFieldUpdateOperationsInput | string
    recLevel?: NullableIntFieldUpdateOperationsInput | number | null
    author?: GMProfileUpdateOneRequiredWithoutQuestNestedInput
    followUp?: QuestUpdateOneWithoutPreviousNestedInput
    previous?: QuestUpdateOneWithoutFollowUpNestedInput
  }

  export type QuestUncheckedUpdateWithoutGameSessionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    dmNotes?: StringFieldUpdateOperationsInput | string
    recLevel?: NullableIntFieldUpdateOperationsInput | number | null
    questID?: NullableIntFieldUpdateOperationsInput | number | null
    gMProfileId?: StringFieldUpdateOperationsInput | string
    previous?: QuestUncheckedUpdateOneWithoutFollowUpNestedInput
  }

  export type StoryUpsertWithoutGameSessionInput = {
    update: XOR<StoryUpdateWithoutGameSessionInput, StoryUncheckedUpdateWithoutGameSessionInput>
    create: XOR<StoryCreateWithoutGameSessionInput, StoryUncheckedCreateWithoutGameSessionInput>
    where?: StoryWhereInput
  }

  export type StoryUpdateToOneWithWhereWithoutGameSessionInput = {
    where?: StoryWhereInput
    data: XOR<StoryUpdateWithoutGameSessionInput, StoryUncheckedUpdateWithoutGameSessionInput>
  }

  export type StoryUpdateWithoutGameSessionInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StoryUncheckedUpdateWithoutGameSessionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GMProfileCreateWithoutInfoSessionInput = {
    id?: string
    type: $Enums.HostType
    User: UserCreateNestedOneWithoutGmProfileInput
    GameSession?: GameSessionCreateNestedManyWithoutHostInput
    Campaign?: CampaignCreateNestedManyWithoutGmsInput
    Quest?: QuestCreateNestedManyWithoutAuthorInput
  }

  export type GMProfileUncheckedCreateWithoutInfoSessionInput = {
    id?: string
    userId: string
    type: $Enums.HostType
    GameSession?: GameSessionUncheckedCreateNestedManyWithoutHostInput
    Campaign?: CampaignUncheckedCreateNestedManyWithoutGmsInput
    Quest?: QuestUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type GMProfileCreateOrConnectWithoutInfoSessionInput = {
    where: GMProfileWhereUniqueInput
    create: XOR<GMProfileCreateWithoutInfoSessionInput, GMProfileUncheckedCreateWithoutInfoSessionInput>
  }

  export type UserCreateWithoutInfoSessionInput = {
    id?: string
    name?: string | null
    age?: number | null
    fName?: string | null
    lName?: string | null
    bio?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: $Enums.ROLE
    gMProfileId?: string | null
    playerProfileId?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    gmProfile?: GMProfileCreateNestedOneWithoutUserInput
    playerProfile?: PlayerProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInfoSessionInput = {
    id?: string
    name?: string | null
    age?: number | null
    fName?: string | null
    lName?: string | null
    bio?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: $Enums.ROLE
    gMProfileId?: string | null
    playerProfileId?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    gmProfile?: GMProfileUncheckedCreateNestedOneWithoutUserInput
    playerProfile?: PlayerProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInfoSessionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInfoSessionInput, UserUncheckedCreateWithoutInfoSessionInput>
  }

  export type UserCreateManyInfoSessionInputEnvelope = {
    data: UserCreateManyInfoSessionInput | UserCreateManyInfoSessionInput[]
    skipDuplicates?: boolean
  }

  export type CampaignCreateWithoutInfoSessionsInput = {
    description?: string | null
    name: string
    gms?: GMProfileCreateNestedManyWithoutCampaignInput
    players?: PlayerCharacterCreateNestedManyWithoutCampaignInput
    sessions?: GameSessionCreateNestedManyWithoutCampaignInput
    members?: PlayerProfileCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateWithoutInfoSessionsInput = {
    id?: number
    description?: string | null
    name: string
    gms?: GMProfileUncheckedCreateNestedManyWithoutCampaignInput
    players?: PlayerCharacterUncheckedCreateNestedManyWithoutCampaignInput
    sessions?: GameSessionUncheckedCreateNestedManyWithoutCampaignInput
    members?: PlayerProfileUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignCreateOrConnectWithoutInfoSessionsInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutInfoSessionsInput, CampaignUncheckedCreateWithoutInfoSessionsInput>
  }

  export type GMProfileUpsertWithoutInfoSessionInput = {
    update: XOR<GMProfileUpdateWithoutInfoSessionInput, GMProfileUncheckedUpdateWithoutInfoSessionInput>
    create: XOR<GMProfileCreateWithoutInfoSessionInput, GMProfileUncheckedCreateWithoutInfoSessionInput>
    where?: GMProfileWhereInput
  }

  export type GMProfileUpdateToOneWithWhereWithoutInfoSessionInput = {
    where?: GMProfileWhereInput
    data: XOR<GMProfileUpdateWithoutInfoSessionInput, GMProfileUncheckedUpdateWithoutInfoSessionInput>
  }

  export type GMProfileUpdateWithoutInfoSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumHostTypeFieldUpdateOperationsInput | $Enums.HostType
    User?: UserUpdateOneRequiredWithoutGmProfileNestedInput
    GameSession?: GameSessionUpdateManyWithoutHostNestedInput
    Campaign?: CampaignUpdateManyWithoutGmsNestedInput
    Quest?: QuestUpdateManyWithoutAuthorNestedInput
  }

  export type GMProfileUncheckedUpdateWithoutInfoSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumHostTypeFieldUpdateOperationsInput | $Enums.HostType
    GameSession?: GameSessionUncheckedUpdateManyWithoutHostNestedInput
    Campaign?: CampaignUncheckedUpdateManyWithoutGmsNestedInput
    Quest?: QuestUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutInfoSessionInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutInfoSessionInput, UserUncheckedUpdateWithoutInfoSessionInput>
    create: XOR<UserCreateWithoutInfoSessionInput, UserUncheckedCreateWithoutInfoSessionInput>
  }

  export type UserUpdateWithWhereUniqueWithoutInfoSessionInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutInfoSessionInput, UserUncheckedUpdateWithoutInfoSessionInput>
  }

  export type UserUpdateManyWithWhereWithoutInfoSessionInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutInfoSessionInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    age?: IntNullableFilter<"User"> | number | null
    fName?: StringNullableFilter<"User"> | string | null
    lName?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    role?: EnumROLEFilter<"User"> | $Enums.ROLE
    gMProfileId?: StringNullableFilter<"User"> | string | null
    playerProfileId?: StringNullableFilter<"User"> | string | null
    infoSessionId?: StringNullableFilter<"User"> | string | null
  }

  export type CampaignUpsertWithoutInfoSessionsInput = {
    update: XOR<CampaignUpdateWithoutInfoSessionsInput, CampaignUncheckedUpdateWithoutInfoSessionsInput>
    create: XOR<CampaignCreateWithoutInfoSessionsInput, CampaignUncheckedCreateWithoutInfoSessionsInput>
    where?: CampaignWhereInput
  }

  export type CampaignUpdateToOneWithWhereWithoutInfoSessionsInput = {
    where?: CampaignWhereInput
    data: XOR<CampaignUpdateWithoutInfoSessionsInput, CampaignUncheckedUpdateWithoutInfoSessionsInput>
  }

  export type CampaignUpdateWithoutInfoSessionsInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    gms?: GMProfileUpdateManyWithoutCampaignNestedInput
    players?: PlayerCharacterUpdateManyWithoutCampaignNestedInput
    sessions?: GameSessionUpdateManyWithoutCampaignNestedInput
    members?: PlayerProfileUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateWithoutInfoSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    gms?: GMProfileUncheckedUpdateManyWithoutCampaignNestedInput
    players?: PlayerCharacterUncheckedUpdateManyWithoutCampaignNestedInput
    sessions?: GameSessionUncheckedUpdateManyWithoutCampaignNestedInput
    members?: PlayerProfileUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type GMProfileCreateWithoutCampaignInput = {
    id?: string
    type: $Enums.HostType
    User: UserCreateNestedOneWithoutGmProfileInput
    GameSession?: GameSessionCreateNestedManyWithoutHostInput
    Quest?: QuestCreateNestedManyWithoutAuthorInput
    InfoSession?: InfoSessionCreateNestedManyWithoutHostInput
  }

  export type GMProfileUncheckedCreateWithoutCampaignInput = {
    id?: string
    userId: string
    type: $Enums.HostType
    GameSession?: GameSessionUncheckedCreateNestedManyWithoutHostInput
    Quest?: QuestUncheckedCreateNestedManyWithoutAuthorInput
    InfoSession?: InfoSessionUncheckedCreateNestedManyWithoutHostInput
  }

  export type GMProfileCreateOrConnectWithoutCampaignInput = {
    where: GMProfileWhereUniqueInput
    create: XOR<GMProfileCreateWithoutCampaignInput, GMProfileUncheckedCreateWithoutCampaignInput>
  }

  export type PlayerCharacterCreateWithoutCampaignInput = {
    id?: string
    name: string
    experience?: number
    level?: number
    gold?: number
    backStory?: string | null
    personality?: string | null
    race: string
    active?: boolean
    owner: PlayerProfileCreateNestedOneWithoutPlayerCharacterInput
    GameSession?: GameSessionCreateNestedManyWithoutPlayersInput
    character: ClassedEntityCreateNestedOneWithoutPlayerCharacterInput
  }

  export type PlayerCharacterUncheckedCreateWithoutCampaignInput = {
    id?: string
    name: string
    playerProfileId: string
    experience?: number
    level?: number
    gold?: number
    classedEntityId: string
    backStory?: string | null
    personality?: string | null
    race: string
    active?: boolean
    GameSession?: GameSessionUncheckedCreateNestedManyWithoutPlayersInput
  }

  export type PlayerCharacterCreateOrConnectWithoutCampaignInput = {
    where: PlayerCharacterWhereUniqueInput
    create: XOR<PlayerCharacterCreateWithoutCampaignInput, PlayerCharacterUncheckedCreateWithoutCampaignInput>
  }

  export type PlayerCharacterCreateManyCampaignInputEnvelope = {
    data: PlayerCharacterCreateManyCampaignInput | PlayerCharacterCreateManyCampaignInput[]
    skipDuplicates?: boolean
  }

  export type GameSessionCreateWithoutCampaignInput = {
    id?: string
    date: Date | string
    duration: number
    description?: string | null
    notes?: string | null
    state?: $Enums.SessionState
    private?: boolean
    maxPlayers?: number
    platform?: string | null
    prework?: string | null
    host: GMProfileCreateNestedOneWithoutGameSessionInput
    players?: PlayerCharacterCreateNestedManyWithoutGameSessionInput
    followUpSession?: GameSessionCreateNestedOneWithoutPreviousSessionInput
    previousSession?: GameSessionCreateNestedOneWithoutFollowUpSessionInput
    quest?: QuestCreateNestedOneWithoutGameSessionInput
    story?: StoryCreateNestedOneWithoutGameSessionInput
  }

  export type GameSessionUncheckedCreateWithoutCampaignInput = {
    id?: string
    date: Date | string
    duration: number
    gMProfileId: string
    description?: string | null
    notes?: string | null
    state?: $Enums.SessionState
    private?: boolean
    gameSessionId?: string | null
    questId?: number | null
    storyId?: number | null
    maxPlayers?: number
    platform?: string | null
    prework?: string | null
    players?: PlayerCharacterUncheckedCreateNestedManyWithoutGameSessionInput
    previousSession?: GameSessionUncheckedCreateNestedOneWithoutFollowUpSessionInput
  }

  export type GameSessionCreateOrConnectWithoutCampaignInput = {
    where: GameSessionWhereUniqueInput
    create: XOR<GameSessionCreateWithoutCampaignInput, GameSessionUncheckedCreateWithoutCampaignInput>
  }

  export type GameSessionCreateManyCampaignInputEnvelope = {
    data: GameSessionCreateManyCampaignInput | GameSessionCreateManyCampaignInput[]
    skipDuplicates?: boolean
  }

  export type InfoSessionCreateWithoutCampaignInput = {
    id?: string
    date: Date | string
    duration: number
    description?: string | null
    private?: boolean
    host: GMProfileCreateNestedOneWithoutInfoSessionInput
    players?: UserCreateNestedManyWithoutInfoSessionInput
  }

  export type InfoSessionUncheckedCreateWithoutCampaignInput = {
    id?: string
    date: Date | string
    duration: number
    gMProfileId: string
    description?: string | null
    private?: boolean
    players?: UserUncheckedCreateNestedManyWithoutInfoSessionInput
  }

  export type InfoSessionCreateOrConnectWithoutCampaignInput = {
    where: InfoSessionWhereUniqueInput
    create: XOR<InfoSessionCreateWithoutCampaignInput, InfoSessionUncheckedCreateWithoutCampaignInput>
  }

  export type InfoSessionCreateManyCampaignInputEnvelope = {
    data: InfoSessionCreateManyCampaignInput | InfoSessionCreateManyCampaignInput[]
    skipDuplicates?: boolean
  }

  export type PlayerProfileCreateWithoutCampaignInput = {
    id?: string
    PlayerCharacter?: PlayerCharacterCreateNestedManyWithoutOwnerInput
    User: UserCreateNestedOneWithoutPlayerProfileInput
  }

  export type PlayerProfileUncheckedCreateWithoutCampaignInput = {
    id?: string
    userId: string
    PlayerCharacter?: PlayerCharacterUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type PlayerProfileCreateOrConnectWithoutCampaignInput = {
    where: PlayerProfileWhereUniqueInput
    create: XOR<PlayerProfileCreateWithoutCampaignInput, PlayerProfileUncheckedCreateWithoutCampaignInput>
  }

  export type PlayerProfileCreateManyCampaignInputEnvelope = {
    data: PlayerProfileCreateManyCampaignInput | PlayerProfileCreateManyCampaignInput[]
    skipDuplicates?: boolean
  }

  export type GMProfileUpsertWithWhereUniqueWithoutCampaignInput = {
    where: GMProfileWhereUniqueInput
    update: XOR<GMProfileUpdateWithoutCampaignInput, GMProfileUncheckedUpdateWithoutCampaignInput>
    create: XOR<GMProfileCreateWithoutCampaignInput, GMProfileUncheckedCreateWithoutCampaignInput>
  }

  export type GMProfileUpdateWithWhereUniqueWithoutCampaignInput = {
    where: GMProfileWhereUniqueInput
    data: XOR<GMProfileUpdateWithoutCampaignInput, GMProfileUncheckedUpdateWithoutCampaignInput>
  }

  export type GMProfileUpdateManyWithWhereWithoutCampaignInput = {
    where: GMProfileScalarWhereInput
    data: XOR<GMProfileUpdateManyMutationInput, GMProfileUncheckedUpdateManyWithoutCampaignInput>
  }

  export type GMProfileScalarWhereInput = {
    AND?: GMProfileScalarWhereInput | GMProfileScalarWhereInput[]
    OR?: GMProfileScalarWhereInput[]
    NOT?: GMProfileScalarWhereInput | GMProfileScalarWhereInput[]
    id?: StringFilter<"GMProfile"> | string
    userId?: StringFilter<"GMProfile"> | string
    type?: EnumHostTypeFilter<"GMProfile"> | $Enums.HostType
  }

  export type PlayerCharacterUpsertWithWhereUniqueWithoutCampaignInput = {
    where: PlayerCharacterWhereUniqueInput
    update: XOR<PlayerCharacterUpdateWithoutCampaignInput, PlayerCharacterUncheckedUpdateWithoutCampaignInput>
    create: XOR<PlayerCharacterCreateWithoutCampaignInput, PlayerCharacterUncheckedCreateWithoutCampaignInput>
  }

  export type PlayerCharacterUpdateWithWhereUniqueWithoutCampaignInput = {
    where: PlayerCharacterWhereUniqueInput
    data: XOR<PlayerCharacterUpdateWithoutCampaignInput, PlayerCharacterUncheckedUpdateWithoutCampaignInput>
  }

  export type PlayerCharacterUpdateManyWithWhereWithoutCampaignInput = {
    where: PlayerCharacterScalarWhereInput
    data: XOR<PlayerCharacterUpdateManyMutationInput, PlayerCharacterUncheckedUpdateManyWithoutCampaignInput>
  }

  export type GameSessionUpsertWithWhereUniqueWithoutCampaignInput = {
    where: GameSessionWhereUniqueInput
    update: XOR<GameSessionUpdateWithoutCampaignInput, GameSessionUncheckedUpdateWithoutCampaignInput>
    create: XOR<GameSessionCreateWithoutCampaignInput, GameSessionUncheckedCreateWithoutCampaignInput>
  }

  export type GameSessionUpdateWithWhereUniqueWithoutCampaignInput = {
    where: GameSessionWhereUniqueInput
    data: XOR<GameSessionUpdateWithoutCampaignInput, GameSessionUncheckedUpdateWithoutCampaignInput>
  }

  export type GameSessionUpdateManyWithWhereWithoutCampaignInput = {
    where: GameSessionScalarWhereInput
    data: XOR<GameSessionUpdateManyMutationInput, GameSessionUncheckedUpdateManyWithoutCampaignInput>
  }

  export type InfoSessionUpsertWithWhereUniqueWithoutCampaignInput = {
    where: InfoSessionWhereUniqueInput
    update: XOR<InfoSessionUpdateWithoutCampaignInput, InfoSessionUncheckedUpdateWithoutCampaignInput>
    create: XOR<InfoSessionCreateWithoutCampaignInput, InfoSessionUncheckedCreateWithoutCampaignInput>
  }

  export type InfoSessionUpdateWithWhereUniqueWithoutCampaignInput = {
    where: InfoSessionWhereUniqueInput
    data: XOR<InfoSessionUpdateWithoutCampaignInput, InfoSessionUncheckedUpdateWithoutCampaignInput>
  }

  export type InfoSessionUpdateManyWithWhereWithoutCampaignInput = {
    where: InfoSessionScalarWhereInput
    data: XOR<InfoSessionUpdateManyMutationInput, InfoSessionUncheckedUpdateManyWithoutCampaignInput>
  }

  export type PlayerProfileUpsertWithWhereUniqueWithoutCampaignInput = {
    where: PlayerProfileWhereUniqueInput
    update: XOR<PlayerProfileUpdateWithoutCampaignInput, PlayerProfileUncheckedUpdateWithoutCampaignInput>
    create: XOR<PlayerProfileCreateWithoutCampaignInput, PlayerProfileUncheckedCreateWithoutCampaignInput>
  }

  export type PlayerProfileUpdateWithWhereUniqueWithoutCampaignInput = {
    where: PlayerProfileWhereUniqueInput
    data: XOR<PlayerProfileUpdateWithoutCampaignInput, PlayerProfileUncheckedUpdateWithoutCampaignInput>
  }

  export type PlayerProfileUpdateManyWithWhereWithoutCampaignInput = {
    where: PlayerProfileScalarWhereInput
    data: XOR<PlayerProfileUpdateManyMutationInput, PlayerProfileUncheckedUpdateManyWithoutCampaignInput>
  }

  export type PlayerProfileScalarWhereInput = {
    AND?: PlayerProfileScalarWhereInput | PlayerProfileScalarWhereInput[]
    OR?: PlayerProfileScalarWhereInput[]
    NOT?: PlayerProfileScalarWhereInput | PlayerProfileScalarWhereInput[]
    id?: StringFilter<"PlayerProfile"> | string
    userId?: StringFilter<"PlayerProfile"> | string
    campaignId?: IntNullableFilter<"PlayerProfile"> | number | null
  }

  export type GameSessionCreateWithoutStoryInput = {
    id?: string
    date: Date | string
    duration: number
    description?: string | null
    notes?: string | null
    state?: $Enums.SessionState
    private?: boolean
    maxPlayers?: number
    platform?: string | null
    prework?: string | null
    host: GMProfileCreateNestedOneWithoutGameSessionInput
    players?: PlayerCharacterCreateNestedManyWithoutGameSessionInput
    Campaign: CampaignCreateNestedOneWithoutSessionsInput
    followUpSession?: GameSessionCreateNestedOneWithoutPreviousSessionInput
    previousSession?: GameSessionCreateNestedOneWithoutFollowUpSessionInput
    quest?: QuestCreateNestedOneWithoutGameSessionInput
  }

  export type GameSessionUncheckedCreateWithoutStoryInput = {
    id?: string
    date: Date | string
    duration: number
    gMProfileId: string
    description?: string | null
    notes?: string | null
    state?: $Enums.SessionState
    campaignId: number
    private?: boolean
    gameSessionId?: string | null
    questId?: number | null
    maxPlayers?: number
    platform?: string | null
    prework?: string | null
    players?: PlayerCharacterUncheckedCreateNestedManyWithoutGameSessionInput
    previousSession?: GameSessionUncheckedCreateNestedOneWithoutFollowUpSessionInput
  }

  export type GameSessionCreateOrConnectWithoutStoryInput = {
    where: GameSessionWhereUniqueInput
    create: XOR<GameSessionCreateWithoutStoryInput, GameSessionUncheckedCreateWithoutStoryInput>
  }

  export type GameSessionCreateManyStoryInputEnvelope = {
    data: GameSessionCreateManyStoryInput | GameSessionCreateManyStoryInput[]
    skipDuplicates?: boolean
  }

  export type GameSessionUpsertWithWhereUniqueWithoutStoryInput = {
    where: GameSessionWhereUniqueInput
    update: XOR<GameSessionUpdateWithoutStoryInput, GameSessionUncheckedUpdateWithoutStoryInput>
    create: XOR<GameSessionCreateWithoutStoryInput, GameSessionUncheckedCreateWithoutStoryInput>
  }

  export type GameSessionUpdateWithWhereUniqueWithoutStoryInput = {
    where: GameSessionWhereUniqueInput
    data: XOR<GameSessionUpdateWithoutStoryInput, GameSessionUncheckedUpdateWithoutStoryInput>
  }

  export type GameSessionUpdateManyWithWhereWithoutStoryInput = {
    where: GameSessionScalarWhereInput
    data: XOR<GameSessionUpdateManyMutationInput, GameSessionUncheckedUpdateManyWithoutStoryInput>
  }

  export type GMProfileCreateWithoutQuestInput = {
    id?: string
    type: $Enums.HostType
    User: UserCreateNestedOneWithoutGmProfileInput
    GameSession?: GameSessionCreateNestedManyWithoutHostInput
    Campaign?: CampaignCreateNestedManyWithoutGmsInput
    InfoSession?: InfoSessionCreateNestedManyWithoutHostInput
  }

  export type GMProfileUncheckedCreateWithoutQuestInput = {
    id?: string
    userId: string
    type: $Enums.HostType
    GameSession?: GameSessionUncheckedCreateNestedManyWithoutHostInput
    Campaign?: CampaignUncheckedCreateNestedManyWithoutGmsInput
    InfoSession?: InfoSessionUncheckedCreateNestedManyWithoutHostInput
  }

  export type GMProfileCreateOrConnectWithoutQuestInput = {
    where: GMProfileWhereUniqueInput
    create: XOR<GMProfileCreateWithoutQuestInput, GMProfileUncheckedCreateWithoutQuestInput>
  }

  export type QuestCreateWithoutPreviousInput = {
    name: string
    description: string
    isPrivate: boolean
    dmNotes: string
    recLevel?: number | null
    author: GMProfileCreateNestedOneWithoutQuestInput
    followUp?: QuestCreateNestedOneWithoutPreviousInput
    GameSession?: GameSessionCreateNestedManyWithoutQuestInput
  }

  export type QuestUncheckedCreateWithoutPreviousInput = {
    id?: number
    name: string
    description: string
    isPrivate: boolean
    dmNotes: string
    recLevel?: number | null
    questID?: number | null
    gMProfileId: string
    GameSession?: GameSessionUncheckedCreateNestedManyWithoutQuestInput
  }

  export type QuestCreateOrConnectWithoutPreviousInput = {
    where: QuestWhereUniqueInput
    create: XOR<QuestCreateWithoutPreviousInput, QuestUncheckedCreateWithoutPreviousInput>
  }

  export type QuestCreateWithoutFollowUpInput = {
    name: string
    description: string
    isPrivate: boolean
    dmNotes: string
    recLevel?: number | null
    author: GMProfileCreateNestedOneWithoutQuestInput
    previous?: QuestCreateNestedOneWithoutFollowUpInput
    GameSession?: GameSessionCreateNestedManyWithoutQuestInput
  }

  export type QuestUncheckedCreateWithoutFollowUpInput = {
    id?: number
    name: string
    description: string
    isPrivate: boolean
    dmNotes: string
    recLevel?: number | null
    gMProfileId: string
    previous?: QuestUncheckedCreateNestedOneWithoutFollowUpInput
    GameSession?: GameSessionUncheckedCreateNestedManyWithoutQuestInput
  }

  export type QuestCreateOrConnectWithoutFollowUpInput = {
    where: QuestWhereUniqueInput
    create: XOR<QuestCreateWithoutFollowUpInput, QuestUncheckedCreateWithoutFollowUpInput>
  }

  export type GameSessionCreateWithoutQuestInput = {
    id?: string
    date: Date | string
    duration: number
    description?: string | null
    notes?: string | null
    state?: $Enums.SessionState
    private?: boolean
    maxPlayers?: number
    platform?: string | null
    prework?: string | null
    host: GMProfileCreateNestedOneWithoutGameSessionInput
    players?: PlayerCharacterCreateNestedManyWithoutGameSessionInput
    Campaign: CampaignCreateNestedOneWithoutSessionsInput
    followUpSession?: GameSessionCreateNestedOneWithoutPreviousSessionInput
    previousSession?: GameSessionCreateNestedOneWithoutFollowUpSessionInput
    story?: StoryCreateNestedOneWithoutGameSessionInput
  }

  export type GameSessionUncheckedCreateWithoutQuestInput = {
    id?: string
    date: Date | string
    duration: number
    gMProfileId: string
    description?: string | null
    notes?: string | null
    state?: $Enums.SessionState
    campaignId: number
    private?: boolean
    gameSessionId?: string | null
    storyId?: number | null
    maxPlayers?: number
    platform?: string | null
    prework?: string | null
    players?: PlayerCharacterUncheckedCreateNestedManyWithoutGameSessionInput
    previousSession?: GameSessionUncheckedCreateNestedOneWithoutFollowUpSessionInput
  }

  export type GameSessionCreateOrConnectWithoutQuestInput = {
    where: GameSessionWhereUniqueInput
    create: XOR<GameSessionCreateWithoutQuestInput, GameSessionUncheckedCreateWithoutQuestInput>
  }

  export type GameSessionCreateManyQuestInputEnvelope = {
    data: GameSessionCreateManyQuestInput | GameSessionCreateManyQuestInput[]
    skipDuplicates?: boolean
  }

  export type GMProfileUpsertWithoutQuestInput = {
    update: XOR<GMProfileUpdateWithoutQuestInput, GMProfileUncheckedUpdateWithoutQuestInput>
    create: XOR<GMProfileCreateWithoutQuestInput, GMProfileUncheckedCreateWithoutQuestInput>
    where?: GMProfileWhereInput
  }

  export type GMProfileUpdateToOneWithWhereWithoutQuestInput = {
    where?: GMProfileWhereInput
    data: XOR<GMProfileUpdateWithoutQuestInput, GMProfileUncheckedUpdateWithoutQuestInput>
  }

  export type GMProfileUpdateWithoutQuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumHostTypeFieldUpdateOperationsInput | $Enums.HostType
    User?: UserUpdateOneRequiredWithoutGmProfileNestedInput
    GameSession?: GameSessionUpdateManyWithoutHostNestedInput
    Campaign?: CampaignUpdateManyWithoutGmsNestedInput
    InfoSession?: InfoSessionUpdateManyWithoutHostNestedInput
  }

  export type GMProfileUncheckedUpdateWithoutQuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumHostTypeFieldUpdateOperationsInput | $Enums.HostType
    GameSession?: GameSessionUncheckedUpdateManyWithoutHostNestedInput
    Campaign?: CampaignUncheckedUpdateManyWithoutGmsNestedInput
    InfoSession?: InfoSessionUncheckedUpdateManyWithoutHostNestedInput
  }

  export type QuestUpsertWithoutPreviousInput = {
    update: XOR<QuestUpdateWithoutPreviousInput, QuestUncheckedUpdateWithoutPreviousInput>
    create: XOR<QuestCreateWithoutPreviousInput, QuestUncheckedCreateWithoutPreviousInput>
    where?: QuestWhereInput
  }

  export type QuestUpdateToOneWithWhereWithoutPreviousInput = {
    where?: QuestWhereInput
    data: XOR<QuestUpdateWithoutPreviousInput, QuestUncheckedUpdateWithoutPreviousInput>
  }

  export type QuestUpdateWithoutPreviousInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    dmNotes?: StringFieldUpdateOperationsInput | string
    recLevel?: NullableIntFieldUpdateOperationsInput | number | null
    author?: GMProfileUpdateOneRequiredWithoutQuestNestedInput
    followUp?: QuestUpdateOneWithoutPreviousNestedInput
    GameSession?: GameSessionUpdateManyWithoutQuestNestedInput
  }

  export type QuestUncheckedUpdateWithoutPreviousInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    dmNotes?: StringFieldUpdateOperationsInput | string
    recLevel?: NullableIntFieldUpdateOperationsInput | number | null
    questID?: NullableIntFieldUpdateOperationsInput | number | null
    gMProfileId?: StringFieldUpdateOperationsInput | string
    GameSession?: GameSessionUncheckedUpdateManyWithoutQuestNestedInput
  }

  export type QuestUpsertWithoutFollowUpInput = {
    update: XOR<QuestUpdateWithoutFollowUpInput, QuestUncheckedUpdateWithoutFollowUpInput>
    create: XOR<QuestCreateWithoutFollowUpInput, QuestUncheckedCreateWithoutFollowUpInput>
    where?: QuestWhereInput
  }

  export type QuestUpdateToOneWithWhereWithoutFollowUpInput = {
    where?: QuestWhereInput
    data: XOR<QuestUpdateWithoutFollowUpInput, QuestUncheckedUpdateWithoutFollowUpInput>
  }

  export type QuestUpdateWithoutFollowUpInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    dmNotes?: StringFieldUpdateOperationsInput | string
    recLevel?: NullableIntFieldUpdateOperationsInput | number | null
    author?: GMProfileUpdateOneRequiredWithoutQuestNestedInput
    previous?: QuestUpdateOneWithoutFollowUpNestedInput
    GameSession?: GameSessionUpdateManyWithoutQuestNestedInput
  }

  export type QuestUncheckedUpdateWithoutFollowUpInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    dmNotes?: StringFieldUpdateOperationsInput | string
    recLevel?: NullableIntFieldUpdateOperationsInput | number | null
    gMProfileId?: StringFieldUpdateOperationsInput | string
    previous?: QuestUncheckedUpdateOneWithoutFollowUpNestedInput
    GameSession?: GameSessionUncheckedUpdateManyWithoutQuestNestedInput
  }

  export type GameSessionUpsertWithWhereUniqueWithoutQuestInput = {
    where: GameSessionWhereUniqueInput
    update: XOR<GameSessionUpdateWithoutQuestInput, GameSessionUncheckedUpdateWithoutQuestInput>
    create: XOR<GameSessionCreateWithoutQuestInput, GameSessionUncheckedCreateWithoutQuestInput>
  }

  export type GameSessionUpdateWithWhereUniqueWithoutQuestInput = {
    where: GameSessionWhereUniqueInput
    data: XOR<GameSessionUpdateWithoutQuestInput, GameSessionUncheckedUpdateWithoutQuestInput>
  }

  export type GameSessionUpdateManyWithWhereWithoutQuestInput = {
    where: GameSessionScalarWhereInput
    data: XOR<GameSessionUpdateManyMutationInput, GameSessionUncheckedUpdateManyWithoutQuestInput>
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    refresh_token_expires_in?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameSessionCreateManyHostInput = {
    id?: string
    date: Date | string
    duration: number
    description?: string | null
    notes?: string | null
    state?: $Enums.SessionState
    campaignId: number
    private?: boolean
    gameSessionId?: string | null
    questId?: number | null
    storyId?: number | null
    maxPlayers?: number
    platform?: string | null
    prework?: string | null
  }

  export type QuestCreateManyAuthorInput = {
    id?: number
    name: string
    description: string
    isPrivate: boolean
    dmNotes: string
    recLevel?: number | null
    questID?: number | null
  }

  export type InfoSessionCreateManyHostInput = {
    id?: string
    date: Date | string
    duration: number
    description?: string | null
    private?: boolean
    campaignId?: number | null
  }

  export type GameSessionUpdateWithoutHostInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    state?: EnumSessionStateFieldUpdateOperationsInput | $Enums.SessionState
    private?: BoolFieldUpdateOperationsInput | boolean
    maxPlayers?: IntFieldUpdateOperationsInput | number
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    prework?: NullableStringFieldUpdateOperationsInput | string | null
    players?: PlayerCharacterUpdateManyWithoutGameSessionNestedInput
    Campaign?: CampaignUpdateOneRequiredWithoutSessionsNestedInput
    followUpSession?: GameSessionUpdateOneWithoutPreviousSessionNestedInput
    previousSession?: GameSessionUpdateOneWithoutFollowUpSessionNestedInput
    quest?: QuestUpdateOneWithoutGameSessionNestedInput
    story?: StoryUpdateOneWithoutGameSessionNestedInput
  }

  export type GameSessionUncheckedUpdateWithoutHostInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    state?: EnumSessionStateFieldUpdateOperationsInput | $Enums.SessionState
    campaignId?: IntFieldUpdateOperationsInput | number
    private?: BoolFieldUpdateOperationsInput | boolean
    gameSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    questId?: NullableIntFieldUpdateOperationsInput | number | null
    storyId?: NullableIntFieldUpdateOperationsInput | number | null
    maxPlayers?: IntFieldUpdateOperationsInput | number
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    prework?: NullableStringFieldUpdateOperationsInput | string | null
    players?: PlayerCharacterUncheckedUpdateManyWithoutGameSessionNestedInput
    previousSession?: GameSessionUncheckedUpdateOneWithoutFollowUpSessionNestedInput
  }

  export type GameSessionUncheckedUpdateManyWithoutHostInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    state?: EnumSessionStateFieldUpdateOperationsInput | $Enums.SessionState
    campaignId?: IntFieldUpdateOperationsInput | number
    private?: BoolFieldUpdateOperationsInput | boolean
    gameSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    questId?: NullableIntFieldUpdateOperationsInput | number | null
    storyId?: NullableIntFieldUpdateOperationsInput | number | null
    maxPlayers?: IntFieldUpdateOperationsInput | number
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    prework?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CampaignUpdateWithoutGmsInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    players?: PlayerCharacterUpdateManyWithoutCampaignNestedInput
    sessions?: GameSessionUpdateManyWithoutCampaignNestedInput
    infoSessions?: InfoSessionUpdateManyWithoutCampaignNestedInput
    members?: PlayerProfileUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateWithoutGmsInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    players?: PlayerCharacterUncheckedUpdateManyWithoutCampaignNestedInput
    sessions?: GameSessionUncheckedUpdateManyWithoutCampaignNestedInput
    infoSessions?: InfoSessionUncheckedUpdateManyWithoutCampaignNestedInput
    members?: PlayerProfileUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateManyWithoutGmsInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
  }

  export type QuestUpdateWithoutAuthorInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    dmNotes?: StringFieldUpdateOperationsInput | string
    recLevel?: NullableIntFieldUpdateOperationsInput | number | null
    followUp?: QuestUpdateOneWithoutPreviousNestedInput
    previous?: QuestUpdateOneWithoutFollowUpNestedInput
    GameSession?: GameSessionUpdateManyWithoutQuestNestedInput
  }

  export type QuestUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    dmNotes?: StringFieldUpdateOperationsInput | string
    recLevel?: NullableIntFieldUpdateOperationsInput | number | null
    questID?: NullableIntFieldUpdateOperationsInput | number | null
    previous?: QuestUncheckedUpdateOneWithoutFollowUpNestedInput
    GameSession?: GameSessionUncheckedUpdateManyWithoutQuestNestedInput
  }

  export type QuestUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    dmNotes?: StringFieldUpdateOperationsInput | string
    recLevel?: NullableIntFieldUpdateOperationsInput | number | null
    questID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type InfoSessionUpdateWithoutHostInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    private?: BoolFieldUpdateOperationsInput | boolean
    players?: UserUpdateManyWithoutInfoSessionNestedInput
    Campaign?: CampaignUpdateOneWithoutInfoSessionsNestedInput
  }

  export type InfoSessionUncheckedUpdateWithoutHostInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    private?: BoolFieldUpdateOperationsInput | boolean
    campaignId?: NullableIntFieldUpdateOperationsInput | number | null
    players?: UserUncheckedUpdateManyWithoutInfoSessionNestedInput
  }

  export type InfoSessionUncheckedUpdateManyWithoutHostInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    private?: BoolFieldUpdateOperationsInput | boolean
    campaignId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PlayerCharacterCreateManyOwnerInput = {
    id?: string
    name: string
    campaignId: number
    experience?: number
    level?: number
    gold?: number
    classedEntityId: string
    backStory?: string | null
    personality?: string | null
    race: string
    active?: boolean
  }

  export type PlayerCharacterUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    gold?: IntFieldUpdateOperationsInput | number
    backStory?: NullableStringFieldUpdateOperationsInput | string | null
    personality?: NullableStringFieldUpdateOperationsInput | string | null
    race?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    GameSession?: GameSessionUpdateManyWithoutPlayersNestedInput
    Campaign?: CampaignUpdateOneRequiredWithoutPlayersNestedInput
    character?: ClassedEntityUpdateOneRequiredWithoutPlayerCharacterNestedInput
  }

  export type PlayerCharacterUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    campaignId?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    gold?: IntFieldUpdateOperationsInput | number
    classedEntityId?: StringFieldUpdateOperationsInput | string
    backStory?: NullableStringFieldUpdateOperationsInput | string | null
    personality?: NullableStringFieldUpdateOperationsInput | string | null
    race?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    GameSession?: GameSessionUncheckedUpdateManyWithoutPlayersNestedInput
  }

  export type PlayerCharacterUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    campaignId?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    gold?: IntFieldUpdateOperationsInput | number
    classedEntityId?: StringFieldUpdateOperationsInput | string
    backStory?: NullableStringFieldUpdateOperationsInput | string | null
    personality?: NullableStringFieldUpdateOperationsInput | string | null
    race?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GameSessionUpdateWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    state?: EnumSessionStateFieldUpdateOperationsInput | $Enums.SessionState
    private?: BoolFieldUpdateOperationsInput | boolean
    maxPlayers?: IntFieldUpdateOperationsInput | number
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    prework?: NullableStringFieldUpdateOperationsInput | string | null
    host?: GMProfileUpdateOneRequiredWithoutGameSessionNestedInput
    Campaign?: CampaignUpdateOneRequiredWithoutSessionsNestedInput
    followUpSession?: GameSessionUpdateOneWithoutPreviousSessionNestedInput
    previousSession?: GameSessionUpdateOneWithoutFollowUpSessionNestedInput
    quest?: QuestUpdateOneWithoutGameSessionNestedInput
    story?: StoryUpdateOneWithoutGameSessionNestedInput
  }

  export type GameSessionUncheckedUpdateWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    gMProfileId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    state?: EnumSessionStateFieldUpdateOperationsInput | $Enums.SessionState
    campaignId?: IntFieldUpdateOperationsInput | number
    private?: BoolFieldUpdateOperationsInput | boolean
    gameSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    questId?: NullableIntFieldUpdateOperationsInput | number | null
    storyId?: NullableIntFieldUpdateOperationsInput | number | null
    maxPlayers?: IntFieldUpdateOperationsInput | number
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    prework?: NullableStringFieldUpdateOperationsInput | string | null
    previousSession?: GameSessionUncheckedUpdateOneWithoutFollowUpSessionNestedInput
  }

  export type GameSessionUncheckedUpdateManyWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    gMProfileId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    state?: EnumSessionStateFieldUpdateOperationsInput | $Enums.SessionState
    campaignId?: IntFieldUpdateOperationsInput | number
    private?: BoolFieldUpdateOperationsInput | boolean
    gameSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    questId?: NullableIntFieldUpdateOperationsInput | number | null
    storyId?: NullableIntFieldUpdateOperationsInput | number | null
    maxPlayers?: IntFieldUpdateOperationsInput | number
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    prework?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClassConfigsCreateManyClassedEntityInput = {
    id?: string
    classId: string
    Level?: number
  }

  export type ClassConfigsUpdateWithoutClassedEntityInput = {
    id?: StringFieldUpdateOperationsInput | string
    Level?: IntFieldUpdateOperationsInput | number
    ClassChoice?: ClassUpdateOneRequiredWithoutClassConfigsNestedInput
  }

  export type ClassConfigsUncheckedUpdateWithoutClassedEntityInput = {
    id?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    Level?: IntFieldUpdateOperationsInput | number
  }

  export type ClassConfigsUncheckedUpdateManyWithoutClassedEntityInput = {
    id?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    Level?: IntFieldUpdateOperationsInput | number
  }

  export type ClassConfigsCreateManyClassChoiceInput = {
    id?: string
    Level?: number
    classedEntityId: string
  }

  export type ClassConfigsUpdateWithoutClassChoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    Level?: IntFieldUpdateOperationsInput | number
    ClassedEntity?: ClassedEntityUpdateOneRequiredWithoutClassesNestedInput
  }

  export type ClassConfigsUncheckedUpdateWithoutClassChoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    Level?: IntFieldUpdateOperationsInput | number
    classedEntityId?: StringFieldUpdateOperationsInput | string
  }

  export type ClassConfigsUncheckedUpdateManyWithoutClassChoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    Level?: IntFieldUpdateOperationsInput | number
    classedEntityId?: StringFieldUpdateOperationsInput | string
  }

  export type PlayerCharacterUpdateWithoutGameSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    gold?: IntFieldUpdateOperationsInput | number
    backStory?: NullableStringFieldUpdateOperationsInput | string | null
    personality?: NullableStringFieldUpdateOperationsInput | string | null
    race?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    owner?: PlayerProfileUpdateOneRequiredWithoutPlayerCharacterNestedInput
    Campaign?: CampaignUpdateOneRequiredWithoutPlayersNestedInput
    character?: ClassedEntityUpdateOneRequiredWithoutPlayerCharacterNestedInput
  }

  export type PlayerCharacterUncheckedUpdateWithoutGameSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    playerProfileId?: StringFieldUpdateOperationsInput | string
    campaignId?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    gold?: IntFieldUpdateOperationsInput | number
    classedEntityId?: StringFieldUpdateOperationsInput | string
    backStory?: NullableStringFieldUpdateOperationsInput | string | null
    personality?: NullableStringFieldUpdateOperationsInput | string | null
    race?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PlayerCharacterUncheckedUpdateManyWithoutGameSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    playerProfileId?: StringFieldUpdateOperationsInput | string
    campaignId?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    gold?: IntFieldUpdateOperationsInput | number
    classedEntityId?: StringFieldUpdateOperationsInput | string
    backStory?: NullableStringFieldUpdateOperationsInput | string | null
    personality?: NullableStringFieldUpdateOperationsInput | string | null
    race?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserCreateManyInfoSessionInput = {
    id?: string
    name?: string | null
    age?: number | null
    fName?: string | null
    lName?: string | null
    bio?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: $Enums.ROLE
    gMProfileId?: string | null
    playerProfileId?: string | null
  }

  export type UserUpdateWithoutInfoSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    fName?: NullableStringFieldUpdateOperationsInput | string | null
    lName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    gMProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    playerProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    gmProfile?: GMProfileUpdateOneWithoutUserNestedInput
    playerProfile?: PlayerProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInfoSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    fName?: NullableStringFieldUpdateOperationsInput | string | null
    lName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    gMProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    playerProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    gmProfile?: GMProfileUncheckedUpdateOneWithoutUserNestedInput
    playerProfile?: PlayerProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutInfoSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    fName?: NullableStringFieldUpdateOperationsInput | string | null
    lName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    gMProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    playerProfileId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlayerCharacterCreateManyCampaignInput = {
    id?: string
    name: string
    playerProfileId: string
    experience?: number
    level?: number
    gold?: number
    classedEntityId: string
    backStory?: string | null
    personality?: string | null
    race: string
    active?: boolean
  }

  export type GameSessionCreateManyCampaignInput = {
    id?: string
    date: Date | string
    duration: number
    gMProfileId: string
    description?: string | null
    notes?: string | null
    state?: $Enums.SessionState
    private?: boolean
    gameSessionId?: string | null
    questId?: number | null
    storyId?: number | null
    maxPlayers?: number
    platform?: string | null
    prework?: string | null
  }

  export type InfoSessionCreateManyCampaignInput = {
    id?: string
    date: Date | string
    duration: number
    gMProfileId: string
    description?: string | null
    private?: boolean
  }

  export type PlayerProfileCreateManyCampaignInput = {
    id?: string
    userId: string
  }

  export type GMProfileUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumHostTypeFieldUpdateOperationsInput | $Enums.HostType
    User?: UserUpdateOneRequiredWithoutGmProfileNestedInput
    GameSession?: GameSessionUpdateManyWithoutHostNestedInput
    Quest?: QuestUpdateManyWithoutAuthorNestedInput
    InfoSession?: InfoSessionUpdateManyWithoutHostNestedInput
  }

  export type GMProfileUncheckedUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumHostTypeFieldUpdateOperationsInput | $Enums.HostType
    GameSession?: GameSessionUncheckedUpdateManyWithoutHostNestedInput
    Quest?: QuestUncheckedUpdateManyWithoutAuthorNestedInput
    InfoSession?: InfoSessionUncheckedUpdateManyWithoutHostNestedInput
  }

  export type GMProfileUncheckedUpdateManyWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumHostTypeFieldUpdateOperationsInput | $Enums.HostType
  }

  export type PlayerCharacterUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    gold?: IntFieldUpdateOperationsInput | number
    backStory?: NullableStringFieldUpdateOperationsInput | string | null
    personality?: NullableStringFieldUpdateOperationsInput | string | null
    race?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    owner?: PlayerProfileUpdateOneRequiredWithoutPlayerCharacterNestedInput
    GameSession?: GameSessionUpdateManyWithoutPlayersNestedInput
    character?: ClassedEntityUpdateOneRequiredWithoutPlayerCharacterNestedInput
  }

  export type PlayerCharacterUncheckedUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    playerProfileId?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    gold?: IntFieldUpdateOperationsInput | number
    classedEntityId?: StringFieldUpdateOperationsInput | string
    backStory?: NullableStringFieldUpdateOperationsInput | string | null
    personality?: NullableStringFieldUpdateOperationsInput | string | null
    race?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    GameSession?: GameSessionUncheckedUpdateManyWithoutPlayersNestedInput
  }

  export type PlayerCharacterUncheckedUpdateManyWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    playerProfileId?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    gold?: IntFieldUpdateOperationsInput | number
    classedEntityId?: StringFieldUpdateOperationsInput | string
    backStory?: NullableStringFieldUpdateOperationsInput | string | null
    personality?: NullableStringFieldUpdateOperationsInput | string | null
    race?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GameSessionUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    state?: EnumSessionStateFieldUpdateOperationsInput | $Enums.SessionState
    private?: BoolFieldUpdateOperationsInput | boolean
    maxPlayers?: IntFieldUpdateOperationsInput | number
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    prework?: NullableStringFieldUpdateOperationsInput | string | null
    host?: GMProfileUpdateOneRequiredWithoutGameSessionNestedInput
    players?: PlayerCharacterUpdateManyWithoutGameSessionNestedInput
    followUpSession?: GameSessionUpdateOneWithoutPreviousSessionNestedInput
    previousSession?: GameSessionUpdateOneWithoutFollowUpSessionNestedInput
    quest?: QuestUpdateOneWithoutGameSessionNestedInput
    story?: StoryUpdateOneWithoutGameSessionNestedInput
  }

  export type GameSessionUncheckedUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    gMProfileId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    state?: EnumSessionStateFieldUpdateOperationsInput | $Enums.SessionState
    private?: BoolFieldUpdateOperationsInput | boolean
    gameSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    questId?: NullableIntFieldUpdateOperationsInput | number | null
    storyId?: NullableIntFieldUpdateOperationsInput | number | null
    maxPlayers?: IntFieldUpdateOperationsInput | number
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    prework?: NullableStringFieldUpdateOperationsInput | string | null
    players?: PlayerCharacterUncheckedUpdateManyWithoutGameSessionNestedInput
    previousSession?: GameSessionUncheckedUpdateOneWithoutFollowUpSessionNestedInput
  }

  export type GameSessionUncheckedUpdateManyWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    gMProfileId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    state?: EnumSessionStateFieldUpdateOperationsInput | $Enums.SessionState
    private?: BoolFieldUpdateOperationsInput | boolean
    gameSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    questId?: NullableIntFieldUpdateOperationsInput | number | null
    storyId?: NullableIntFieldUpdateOperationsInput | number | null
    maxPlayers?: IntFieldUpdateOperationsInput | number
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    prework?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InfoSessionUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    private?: BoolFieldUpdateOperationsInput | boolean
    host?: GMProfileUpdateOneRequiredWithoutInfoSessionNestedInput
    players?: UserUpdateManyWithoutInfoSessionNestedInput
  }

  export type InfoSessionUncheckedUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    gMProfileId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    private?: BoolFieldUpdateOperationsInput | boolean
    players?: UserUncheckedUpdateManyWithoutInfoSessionNestedInput
  }

  export type InfoSessionUncheckedUpdateManyWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    gMProfileId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    private?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PlayerProfileUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    PlayerCharacter?: PlayerCharacterUpdateManyWithoutOwnerNestedInput
    User?: UserUpdateOneRequiredWithoutPlayerProfileNestedInput
  }

  export type PlayerProfileUncheckedUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    PlayerCharacter?: PlayerCharacterUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type PlayerProfileUncheckedUpdateManyWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type GameSessionCreateManyStoryInput = {
    id?: string
    date: Date | string
    duration: number
    gMProfileId: string
    description?: string | null
    notes?: string | null
    state?: $Enums.SessionState
    campaignId: number
    private?: boolean
    gameSessionId?: string | null
    questId?: number | null
    maxPlayers?: number
    platform?: string | null
    prework?: string | null
  }

  export type GameSessionUpdateWithoutStoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    state?: EnumSessionStateFieldUpdateOperationsInput | $Enums.SessionState
    private?: BoolFieldUpdateOperationsInput | boolean
    maxPlayers?: IntFieldUpdateOperationsInput | number
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    prework?: NullableStringFieldUpdateOperationsInput | string | null
    host?: GMProfileUpdateOneRequiredWithoutGameSessionNestedInput
    players?: PlayerCharacterUpdateManyWithoutGameSessionNestedInput
    Campaign?: CampaignUpdateOneRequiredWithoutSessionsNestedInput
    followUpSession?: GameSessionUpdateOneWithoutPreviousSessionNestedInput
    previousSession?: GameSessionUpdateOneWithoutFollowUpSessionNestedInput
    quest?: QuestUpdateOneWithoutGameSessionNestedInput
  }

  export type GameSessionUncheckedUpdateWithoutStoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    gMProfileId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    state?: EnumSessionStateFieldUpdateOperationsInput | $Enums.SessionState
    campaignId?: IntFieldUpdateOperationsInput | number
    private?: BoolFieldUpdateOperationsInput | boolean
    gameSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    questId?: NullableIntFieldUpdateOperationsInput | number | null
    maxPlayers?: IntFieldUpdateOperationsInput | number
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    prework?: NullableStringFieldUpdateOperationsInput | string | null
    players?: PlayerCharacterUncheckedUpdateManyWithoutGameSessionNestedInput
    previousSession?: GameSessionUncheckedUpdateOneWithoutFollowUpSessionNestedInput
  }

  export type GameSessionUncheckedUpdateManyWithoutStoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    gMProfileId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    state?: EnumSessionStateFieldUpdateOperationsInput | $Enums.SessionState
    campaignId?: IntFieldUpdateOperationsInput | number
    private?: BoolFieldUpdateOperationsInput | boolean
    gameSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    questId?: NullableIntFieldUpdateOperationsInput | number | null
    maxPlayers?: IntFieldUpdateOperationsInput | number
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    prework?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GameSessionCreateManyQuestInput = {
    id?: string
    date: Date | string
    duration: number
    gMProfileId: string
    description?: string | null
    notes?: string | null
    state?: $Enums.SessionState
    campaignId: number
    private?: boolean
    gameSessionId?: string | null
    storyId?: number | null
    maxPlayers?: number
    platform?: string | null
    prework?: string | null
  }

  export type GameSessionUpdateWithoutQuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    state?: EnumSessionStateFieldUpdateOperationsInput | $Enums.SessionState
    private?: BoolFieldUpdateOperationsInput | boolean
    maxPlayers?: IntFieldUpdateOperationsInput | number
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    prework?: NullableStringFieldUpdateOperationsInput | string | null
    host?: GMProfileUpdateOneRequiredWithoutGameSessionNestedInput
    players?: PlayerCharacterUpdateManyWithoutGameSessionNestedInput
    Campaign?: CampaignUpdateOneRequiredWithoutSessionsNestedInput
    followUpSession?: GameSessionUpdateOneWithoutPreviousSessionNestedInput
    previousSession?: GameSessionUpdateOneWithoutFollowUpSessionNestedInput
    story?: StoryUpdateOneWithoutGameSessionNestedInput
  }

  export type GameSessionUncheckedUpdateWithoutQuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    gMProfileId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    state?: EnumSessionStateFieldUpdateOperationsInput | $Enums.SessionState
    campaignId?: IntFieldUpdateOperationsInput | number
    private?: BoolFieldUpdateOperationsInput | boolean
    gameSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    storyId?: NullableIntFieldUpdateOperationsInput | number | null
    maxPlayers?: IntFieldUpdateOperationsInput | number
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    prework?: NullableStringFieldUpdateOperationsInput | string | null
    players?: PlayerCharacterUncheckedUpdateManyWithoutGameSessionNestedInput
    previousSession?: GameSessionUncheckedUpdateOneWithoutFollowUpSessionNestedInput
  }

  export type GameSessionUncheckedUpdateManyWithoutQuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    gMProfileId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    state?: EnumSessionStateFieldUpdateOperationsInput | $Enums.SessionState
    campaignId?: IntFieldUpdateOperationsInput | number
    private?: BoolFieldUpdateOperationsInput | boolean
    gameSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    storyId?: NullableIntFieldUpdateOperationsInput | number | null
    maxPlayers?: IntFieldUpdateOperationsInput | number
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    prework?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use AccountDefaultArgs instead
     */
    export type AccountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = AccountDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SessionDefaultArgs instead
     */
    export type SessionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = SessionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GMProfileDefaultArgs instead
     */
    export type GMProfileArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = GMProfileDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlayerProfileDefaultArgs instead
     */
    export type PlayerProfileArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = PlayerProfileDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlayerCharacterDefaultArgs instead
     */
    export type PlayerCharacterArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = PlayerCharacterDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClassedEntityDefaultArgs instead
     */
    export type ClassedEntityArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = ClassedEntityDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClassConfigsDefaultArgs instead
     */
    export type ClassConfigsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = ClassConfigsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClassDefaultArgs instead
     */
    export type ClassArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = ClassDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GameSessionDefaultArgs instead
     */
    export type GameSessionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = GameSessionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InfoSessionDefaultArgs instead
     */
    export type InfoSessionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = InfoSessionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CampaignDefaultArgs instead
     */
    export type CampaignArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = CampaignDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StoryDefaultArgs instead
     */
    export type StoryArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = StoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use QuestDefaultArgs instead
     */
    export type QuestArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = QuestDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}