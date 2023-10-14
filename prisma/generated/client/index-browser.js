
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.1.1
 * Query Engine version: 6a3747c37ff169c90047725a05a6ef02e32ac97e
 */
Prisma.prismaVersion = {
  client: "5.1.1",
  engine: "6a3747c37ff169c90047725a05a6ef02e32ac97e"
}


const runtimeDescription = (() => {
  // https://edge-runtime.vercel.app/features/available-apis#addressing-the-runtime
  if ("EdgeRuntime" in globalThis && typeof globalThis.EdgeRuntime === "string") {
    return "under the Vercel Edge Runtime";
  }
  // Deno
  if ("Deno" in globalThis && typeof globalThis.Deno === "object") {
    return "under the Deno runtime";
  }
  // Default to assuming browser
  return "in the browser";
})();


Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AccountScalarFieldEnum = {
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

exports.Prisma.SessionScalarFieldEnum = {
  id: 'id',
  sessionToken: 'sessionToken',
  userId: 'userId',
  expires: 'expires'
};

exports.Prisma.UserScalarFieldEnum = {
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

exports.Prisma.GMProfileScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  type: 'type'
};

exports.Prisma.PlayerProfileScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  campaignId: 'campaignId'
};

exports.Prisma.PlayerCharacterScalarFieldEnum = {
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

exports.Prisma.ClassedEntityScalarFieldEnum = {
  id: 'id'
};

exports.Prisma.ClassConfigsScalarFieldEnum = {
  id: 'id',
  classId: 'classId',
  Level: 'Level',
  classedEntityId: 'classedEntityId'
};

exports.Prisma.ClassScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.GameSessionScalarFieldEnum = {
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

exports.Prisma.InfoSessionScalarFieldEnum = {
  id: 'id',
  date: 'date',
  duration: 'duration',
  gMProfileId: 'gMProfileId',
  description: 'description',
  private: 'private',
  campaignId: 'campaignId'
};

exports.Prisma.CampaignScalarFieldEnum = {
  id: 'id',
  description: 'description',
  name: 'name'
};

exports.Prisma.StoryScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description'
};

exports.Prisma.QuestScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  isPrivate: 'isPrivate',
  dmNotes: 'dmNotes',
  recLevel: 'recLevel',
  questID: 'questID',
  gMProfileId: 'gMProfileId'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.ROLE = exports.$Enums.ROLE = {
  USER: 'USER',
  GM: 'GM',
  ADMIN: 'ADMIN'
};

exports.HostType = exports.$Enums.HostType = {
  REMOTE: 'REMOTE',
  HYBRID: 'HYBRID',
  INPERSON: 'INPERSON'
};

exports.SessionState = exports.$Enums.SessionState = {
  PLANNED: 'PLANNED',
  ACTIVE: 'ACTIVE',
  COMPLETE: 'COMPLETE'
};

exports.Prisma.ModelName = {
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

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
