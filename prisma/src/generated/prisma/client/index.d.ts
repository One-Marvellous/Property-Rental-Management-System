
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model bookings
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type bookings = $Result.DefaultSelection<Prisma.$bookingsPayload>
/**
 * Model categories
 * 
 */
export type categories = $Result.DefaultSelection<Prisma.$categoriesPayload>
/**
 * Model payments
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type payments = $Result.DefaultSelection<Prisma.$paymentsPayload>
/**
 * Model properties
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type properties = $Result.DefaultSelection<Prisma.$propertiesPayload>
/**
 * Model property_images
 * 
 */
export type property_images = $Result.DefaultSelection<Prisma.$property_imagesPayload>
/**
 * Model property_manager_applications
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type property_manager_applications = $Result.DefaultSelection<Prisma.$property_manager_applicationsPayload>
/**
 * Model rentals
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type rentals = $Result.DefaultSelection<Prisma.$rentalsPayload>
/**
 * Model roles
 * 
 */
export type roles = $Result.DefaultSelection<Prisma.$rolesPayload>
/**
 * Model user_roles
 * 
 */
export type user_roles = $Result.DefaultSelection<Prisma.$user_rolesPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const booking_status: {
  pending: 'pending',
  approved: 'approved',
  rejected: 'rejected',
  cancelled: 'cancelled'
};

export type booking_status = (typeof booking_status)[keyof typeof booking_status]


export const manager_application_status: {
  pending: 'pending',
  approved: 'approved',
  rejected: 'rejected',
  cancelled: 'cancelled'
};

export type manager_application_status = (typeof manager_application_status)[keyof typeof manager_application_status]


export const payment_category: {
  deposit: 'deposit',
  full_payment: 'full_payment',
  part_payment: 'part_payment',
  monthly: 'monthly'
};

export type payment_category = (typeof payment_category)[keyof typeof payment_category]


export const payment_status: {
  pending: 'pending',
  successful: 'successful',
  failed: 'failed',
  refunded: 'refunded'
};

export type payment_status = (typeof payment_status)[keyof typeof payment_status]


export const pricing_unit: {
  month: 'month',
  night: 'night',
  day: 'day',
  event: 'event'
};

export type pricing_unit = (typeof pricing_unit)[keyof typeof pricing_unit]


export const rental_status: {
  active: 'active',
  completed: 'completed',
  terminated: 'terminated'
};

export type rental_status = (typeof rental_status)[keyof typeof rental_status]


export const property_approval_status: {
  draft: 'draft',
  pending: 'pending',
  approved: 'approved',
  rejected: 'rejected',
  suspended: 'suspended'
};

export type property_approval_status = (typeof property_approval_status)[keyof typeof property_approval_status]


export const property_availability_status: {
  available: 'available',
  occupied: 'occupied',
  maintenance: 'maintenance'
};

export type property_availability_status = (typeof property_availability_status)[keyof typeof property_availability_status]

}

export type booking_status = $Enums.booking_status

export const booking_status: typeof $Enums.booking_status

export type manager_application_status = $Enums.manager_application_status

export const manager_application_status: typeof $Enums.manager_application_status

export type payment_category = $Enums.payment_category

export const payment_category: typeof $Enums.payment_category

export type payment_status = $Enums.payment_status

export const payment_status: typeof $Enums.payment_status

export type pricing_unit = $Enums.pricing_unit

export const pricing_unit: typeof $Enums.pricing_unit

export type rental_status = $Enums.rental_status

export const rental_status: typeof $Enums.rental_status

export type property_approval_status = $Enums.property_approval_status

export const property_approval_status: typeof $Enums.property_approval_status

export type property_availability_status = $Enums.property_availability_status

export const property_availability_status: typeof $Enums.property_availability_status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Bookings
 * const bookings = await prisma.bookings.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Bookings
   * const bookings = await prisma.bookings.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.bookings`: Exposes CRUD operations for the **bookings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.bookings.findMany()
    * ```
    */
  get bookings(): Prisma.bookingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categories`: Exposes CRUD operations for the **categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categories.findMany()
    * ```
    */
  get categories(): Prisma.categoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payments`: Exposes CRUD operations for the **payments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payments.findMany()
    * ```
    */
  get payments(): Prisma.paymentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.properties`: Exposes CRUD operations for the **properties** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Properties
    * const properties = await prisma.properties.findMany()
    * ```
    */
  get properties(): Prisma.propertiesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.property_images`: Exposes CRUD operations for the **property_images** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Property_images
    * const property_images = await prisma.property_images.findMany()
    * ```
    */
  get property_images(): Prisma.property_imagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.property_manager_applications`: Exposes CRUD operations for the **property_manager_applications** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Property_manager_applications
    * const property_manager_applications = await prisma.property_manager_applications.findMany()
    * ```
    */
  get property_manager_applications(): Prisma.property_manager_applicationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rentals`: Exposes CRUD operations for the **rentals** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rentals
    * const rentals = await prisma.rentals.findMany()
    * ```
    */
  get rentals(): Prisma.rentalsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roles`: Exposes CRUD operations for the **roles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.roles.findMany()
    * ```
    */
  get roles(): Prisma.rolesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_roles`: Exposes CRUD operations for the **user_roles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_roles
    * const user_roles = await prisma.user_roles.findMany()
    * ```
    */
  get user_roles(): Prisma.user_rolesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    bookings: 'bookings',
    categories: 'categories',
    payments: 'payments',
    properties: 'properties',
    property_images: 'property_images',
    property_manager_applications: 'property_manager_applications',
    rentals: 'rentals',
    roles: 'roles',
    user_roles: 'user_roles',
    users: 'users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "bookings" | "categories" | "payments" | "properties" | "property_images" | "property_manager_applications" | "rentals" | "roles" | "user_roles" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      bookings: {
        payload: Prisma.$bookingsPayload<ExtArgs>
        fields: Prisma.bookingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.bookingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.bookingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>
          }
          findFirst: {
            args: Prisma.bookingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.bookingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>
          }
          findMany: {
            args: Prisma.bookingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>[]
          }
          create: {
            args: Prisma.bookingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>
          }
          createMany: {
            args: Prisma.bookingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.bookingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>[]
          }
          delete: {
            args: Prisma.bookingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>
          }
          update: {
            args: Prisma.bookingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>
          }
          deleteMany: {
            args: Prisma.bookingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.bookingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.bookingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>[]
          }
          upsert: {
            args: Prisma.bookingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>
          }
          aggregate: {
            args: Prisma.BookingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookings>
          }
          groupBy: {
            args: Prisma.bookingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.bookingsCountArgs<ExtArgs>
            result: $Utils.Optional<BookingsCountAggregateOutputType> | number
          }
        }
      }
      categories: {
        payload: Prisma.$categoriesPayload<ExtArgs>
        fields: Prisma.categoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findFirst: {
            args: Prisma.categoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findMany: {
            args: Prisma.categoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          create: {
            args: Prisma.categoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          createMany: {
            args: Prisma.categoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.categoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          delete: {
            args: Prisma.categoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          update: {
            args: Prisma.categoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          deleteMany: {
            args: Prisma.categoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.categoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          upsert: {
            args: Prisma.categoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          aggregate: {
            args: Prisma.CategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategories>
          }
          groupBy: {
            args: Prisma.categoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoriesCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriesCountAggregateOutputType> | number
          }
        }
      }
      payments: {
        payload: Prisma.$paymentsPayload<ExtArgs>
        fields: Prisma.paymentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.paymentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.paymentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          findFirst: {
            args: Prisma.paymentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.paymentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          findMany: {
            args: Prisma.paymentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>[]
          }
          create: {
            args: Prisma.paymentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          createMany: {
            args: Prisma.paymentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.paymentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>[]
          }
          delete: {
            args: Prisma.paymentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          update: {
            args: Prisma.paymentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          deleteMany: {
            args: Prisma.paymentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.paymentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.paymentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>[]
          }
          upsert: {
            args: Prisma.paymentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          aggregate: {
            args: Prisma.PaymentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayments>
          }
          groupBy: {
            args: Prisma.paymentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.paymentsCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentsCountAggregateOutputType> | number
          }
        }
      }
      properties: {
        payload: Prisma.$propertiesPayload<ExtArgs>
        fields: Prisma.propertiesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.propertiesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$propertiesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.propertiesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$propertiesPayload>
          }
          findFirst: {
            args: Prisma.propertiesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$propertiesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.propertiesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$propertiesPayload>
          }
          findMany: {
            args: Prisma.propertiesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$propertiesPayload>[]
          }
          create: {
            args: Prisma.propertiesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$propertiesPayload>
          }
          createMany: {
            args: Prisma.propertiesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.propertiesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$propertiesPayload>[]
          }
          delete: {
            args: Prisma.propertiesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$propertiesPayload>
          }
          update: {
            args: Prisma.propertiesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$propertiesPayload>
          }
          deleteMany: {
            args: Prisma.propertiesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.propertiesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.propertiesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$propertiesPayload>[]
          }
          upsert: {
            args: Prisma.propertiesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$propertiesPayload>
          }
          aggregate: {
            args: Prisma.PropertiesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProperties>
          }
          groupBy: {
            args: Prisma.propertiesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropertiesGroupByOutputType>[]
          }
          count: {
            args: Prisma.propertiesCountArgs<ExtArgs>
            result: $Utils.Optional<PropertiesCountAggregateOutputType> | number
          }
        }
      }
      property_images: {
        payload: Prisma.$property_imagesPayload<ExtArgs>
        fields: Prisma.property_imagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.property_imagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$property_imagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.property_imagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$property_imagesPayload>
          }
          findFirst: {
            args: Prisma.property_imagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$property_imagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.property_imagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$property_imagesPayload>
          }
          findMany: {
            args: Prisma.property_imagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$property_imagesPayload>[]
          }
          create: {
            args: Prisma.property_imagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$property_imagesPayload>
          }
          createMany: {
            args: Prisma.property_imagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.property_imagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$property_imagesPayload>[]
          }
          delete: {
            args: Prisma.property_imagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$property_imagesPayload>
          }
          update: {
            args: Prisma.property_imagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$property_imagesPayload>
          }
          deleteMany: {
            args: Prisma.property_imagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.property_imagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.property_imagesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$property_imagesPayload>[]
          }
          upsert: {
            args: Prisma.property_imagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$property_imagesPayload>
          }
          aggregate: {
            args: Prisma.Property_imagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProperty_images>
          }
          groupBy: {
            args: Prisma.property_imagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Property_imagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.property_imagesCountArgs<ExtArgs>
            result: $Utils.Optional<Property_imagesCountAggregateOutputType> | number
          }
        }
      }
      property_manager_applications: {
        payload: Prisma.$property_manager_applicationsPayload<ExtArgs>
        fields: Prisma.property_manager_applicationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.property_manager_applicationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$property_manager_applicationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.property_manager_applicationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$property_manager_applicationsPayload>
          }
          findFirst: {
            args: Prisma.property_manager_applicationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$property_manager_applicationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.property_manager_applicationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$property_manager_applicationsPayload>
          }
          findMany: {
            args: Prisma.property_manager_applicationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$property_manager_applicationsPayload>[]
          }
          create: {
            args: Prisma.property_manager_applicationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$property_manager_applicationsPayload>
          }
          createMany: {
            args: Prisma.property_manager_applicationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.property_manager_applicationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$property_manager_applicationsPayload>[]
          }
          delete: {
            args: Prisma.property_manager_applicationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$property_manager_applicationsPayload>
          }
          update: {
            args: Prisma.property_manager_applicationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$property_manager_applicationsPayload>
          }
          deleteMany: {
            args: Prisma.property_manager_applicationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.property_manager_applicationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.property_manager_applicationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$property_manager_applicationsPayload>[]
          }
          upsert: {
            args: Prisma.property_manager_applicationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$property_manager_applicationsPayload>
          }
          aggregate: {
            args: Prisma.Property_manager_applicationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProperty_manager_applications>
          }
          groupBy: {
            args: Prisma.property_manager_applicationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Property_manager_applicationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.property_manager_applicationsCountArgs<ExtArgs>
            result: $Utils.Optional<Property_manager_applicationsCountAggregateOutputType> | number
          }
        }
      }
      rentals: {
        payload: Prisma.$rentalsPayload<ExtArgs>
        fields: Prisma.rentalsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.rentalsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rentalsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.rentalsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rentalsPayload>
          }
          findFirst: {
            args: Prisma.rentalsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rentalsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.rentalsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rentalsPayload>
          }
          findMany: {
            args: Prisma.rentalsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rentalsPayload>[]
          }
          create: {
            args: Prisma.rentalsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rentalsPayload>
          }
          createMany: {
            args: Prisma.rentalsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.rentalsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rentalsPayload>[]
          }
          delete: {
            args: Prisma.rentalsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rentalsPayload>
          }
          update: {
            args: Prisma.rentalsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rentalsPayload>
          }
          deleteMany: {
            args: Prisma.rentalsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.rentalsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.rentalsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rentalsPayload>[]
          }
          upsert: {
            args: Prisma.rentalsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rentalsPayload>
          }
          aggregate: {
            args: Prisma.RentalsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRentals>
          }
          groupBy: {
            args: Prisma.rentalsGroupByArgs<ExtArgs>
            result: $Utils.Optional<RentalsGroupByOutputType>[]
          }
          count: {
            args: Prisma.rentalsCountArgs<ExtArgs>
            result: $Utils.Optional<RentalsCountAggregateOutputType> | number
          }
        }
      }
      roles: {
        payload: Prisma.$rolesPayload<ExtArgs>
        fields: Prisma.rolesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.rolesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.rolesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          findFirst: {
            args: Prisma.rolesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.rolesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          findMany: {
            args: Prisma.rolesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>[]
          }
          create: {
            args: Prisma.rolesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          createMany: {
            args: Prisma.rolesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.rolesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>[]
          }
          delete: {
            args: Prisma.rolesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          update: {
            args: Prisma.rolesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          deleteMany: {
            args: Prisma.rolesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.rolesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.rolesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>[]
          }
          upsert: {
            args: Prisma.rolesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          aggregate: {
            args: Prisma.RolesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoles>
          }
          groupBy: {
            args: Prisma.rolesGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolesGroupByOutputType>[]
          }
          count: {
            args: Prisma.rolesCountArgs<ExtArgs>
            result: $Utils.Optional<RolesCountAggregateOutputType> | number
          }
        }
      }
      user_roles: {
        payload: Prisma.$user_rolesPayload<ExtArgs>
        fields: Prisma.user_rolesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_rolesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_rolesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_rolesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_rolesPayload>
          }
          findFirst: {
            args: Prisma.user_rolesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_rolesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_rolesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_rolesPayload>
          }
          findMany: {
            args: Prisma.user_rolesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_rolesPayload>[]
          }
          create: {
            args: Prisma.user_rolesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_rolesPayload>
          }
          createMany: {
            args: Prisma.user_rolesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.user_rolesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_rolesPayload>[]
          }
          delete: {
            args: Prisma.user_rolesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_rolesPayload>
          }
          update: {
            args: Prisma.user_rolesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_rolesPayload>
          }
          deleteMany: {
            args: Prisma.user_rolesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_rolesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.user_rolesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_rolesPayload>[]
          }
          upsert: {
            args: Prisma.user_rolesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_rolesPayload>
          }
          aggregate: {
            args: Prisma.User_rolesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_roles>
          }
          groupBy: {
            args: Prisma.user_rolesGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_rolesGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_rolesCountArgs<ExtArgs>
            result: $Utils.Optional<User_rolesCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    bookings?: bookingsOmit
    categories?: categoriesOmit
    payments?: paymentsOmit
    properties?: propertiesOmit
    property_images?: property_imagesOmit
    property_manager_applications?: property_manager_applicationsOmit
    rentals?: rentalsOmit
    roles?: rolesOmit
    user_roles?: user_rolesOmit
    users?: usersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type CategoriesCountOutputType
   */

  export type CategoriesCountOutputType = {
    properties: number
  }

  export type CategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    properties?: boolean | CategoriesCountOutputTypeCountPropertiesArgs
  }

  // Custom InputTypes
  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesCountOutputType
     */
    select?: CategoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountPropertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: propertiesWhereInput
  }


  /**
   * Count Type PropertiesCountOutputType
   */

  export type PropertiesCountOutputType = {
    bookings: number
    property_images: number
    rentals: number
  }

  export type PropertiesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | PropertiesCountOutputTypeCountBookingsArgs
    property_images?: boolean | PropertiesCountOutputTypeCountProperty_imagesArgs
    rentals?: boolean | PropertiesCountOutputTypeCountRentalsArgs
  }

  // Custom InputTypes
  /**
   * PropertiesCountOutputType without action
   */
  export type PropertiesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertiesCountOutputType
     */
    select?: PropertiesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PropertiesCountOutputType without action
   */
  export type PropertiesCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookingsWhereInput
  }

  /**
   * PropertiesCountOutputType without action
   */
  export type PropertiesCountOutputTypeCountProperty_imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: property_imagesWhereInput
  }

  /**
   * PropertiesCountOutputType without action
   */
  export type PropertiesCountOutputTypeCountRentalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rentalsWhereInput
  }


  /**
   * Count Type RentalsCountOutputType
   */

  export type RentalsCountOutputType = {
    payments: number
  }

  export type RentalsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | RentalsCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * RentalsCountOutputType without action
   */
  export type RentalsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalsCountOutputType
     */
    select?: RentalsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RentalsCountOutputType without action
   */
  export type RentalsCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paymentsWhereInput
  }


  /**
   * Count Type RolesCountOutputType
   */

  export type RolesCountOutputType = {
    user_roles: number
  }

  export type RolesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_roles?: boolean | RolesCountOutputTypeCountUser_rolesArgs
  }

  // Custom InputTypes
  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolesCountOutputType
     */
    select?: RolesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeCountUser_rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_rolesWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    bookings: number
    properties_properties_approved_byTousers: number
    properties_properties_manager_idTousers: number
    property_manager_applications_property_manager_applications_reviewed_byTousers: number
    property_manager_applications_property_manager_applications_user_idTousers: number
    rentals: number
    user_roles_user_roles_assigned_byTousers: number
    user_roles_user_roles_revoked_byTousers: number
    user_roles_user_roles_user_idTousers: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | UsersCountOutputTypeCountBookingsArgs
    properties_properties_approved_byTousers?: boolean | UsersCountOutputTypeCountProperties_properties_approved_byTousersArgs
    properties_properties_manager_idTousers?: boolean | UsersCountOutputTypeCountProperties_properties_manager_idTousersArgs
    property_manager_applications_property_manager_applications_reviewed_byTousers?: boolean | UsersCountOutputTypeCountProperty_manager_applications_property_manager_applications_reviewed_byTousersArgs
    property_manager_applications_property_manager_applications_user_idTousers?: boolean | UsersCountOutputTypeCountProperty_manager_applications_property_manager_applications_user_idTousersArgs
    rentals?: boolean | UsersCountOutputTypeCountRentalsArgs
    user_roles_user_roles_assigned_byTousers?: boolean | UsersCountOutputTypeCountUser_roles_user_roles_assigned_byTousersArgs
    user_roles_user_roles_revoked_byTousers?: boolean | UsersCountOutputTypeCountUser_roles_user_roles_revoked_byTousersArgs
    user_roles_user_roles_user_idTousers?: boolean | UsersCountOutputTypeCountUser_roles_user_roles_user_idTousersArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookingsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountProperties_properties_approved_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: propertiesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountProperties_properties_manager_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: propertiesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountProperty_manager_applications_property_manager_applications_reviewed_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: property_manager_applicationsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountProperty_manager_applications_property_manager_applications_user_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: property_manager_applicationsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountRentalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rentalsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUser_roles_user_roles_assigned_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_rolesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUser_roles_user_roles_revoked_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_rolesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUser_roles_user_roles_user_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_rolesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model bookings
   */

  export type AggregateBookings = {
    _count: BookingsCountAggregateOutputType | null
    _avg: BookingsAvgAggregateOutputType | null
    _sum: BookingsSumAggregateOutputType | null
    _min: BookingsMinAggregateOutputType | null
    _max: BookingsMaxAggregateOutputType | null
  }

  export type BookingsAvgAggregateOutputType = {
    proposed_amount: Decimal | null
  }

  export type BookingsSumAggregateOutputType = {
    proposed_amount: Decimal | null
  }

  export type BookingsMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    property_id: string | null
    start_date: Date | null
    end_date: Date | null
    proposed_amount: Decimal | null
    status: $Enums.booking_status | null
    cancelled_at: Date | null
    cancellation_reason: string | null
    created_at: Date | null
  }

  export type BookingsMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    property_id: string | null
    start_date: Date | null
    end_date: Date | null
    proposed_amount: Decimal | null
    status: $Enums.booking_status | null
    cancelled_at: Date | null
    cancellation_reason: string | null
    created_at: Date | null
  }

  export type BookingsCountAggregateOutputType = {
    id: number
    user_id: number
    property_id: number
    start_date: number
    end_date: number
    proposed_amount: number
    status: number
    cancelled_at: number
    cancellation_reason: number
    created_at: number
    _all: number
  }


  export type BookingsAvgAggregateInputType = {
    proposed_amount?: true
  }

  export type BookingsSumAggregateInputType = {
    proposed_amount?: true
  }

  export type BookingsMinAggregateInputType = {
    id?: true
    user_id?: true
    property_id?: true
    start_date?: true
    end_date?: true
    proposed_amount?: true
    status?: true
    cancelled_at?: true
    cancellation_reason?: true
    created_at?: true
  }

  export type BookingsMaxAggregateInputType = {
    id?: true
    user_id?: true
    property_id?: true
    start_date?: true
    end_date?: true
    proposed_amount?: true
    status?: true
    cancelled_at?: true
    cancellation_reason?: true
    created_at?: true
  }

  export type BookingsCountAggregateInputType = {
    id?: true
    user_id?: true
    property_id?: true
    start_date?: true
    end_date?: true
    proposed_amount?: true
    status?: true
    cancelled_at?: true
    cancellation_reason?: true
    created_at?: true
    _all?: true
  }

  export type BookingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bookings to aggregate.
     */
    where?: bookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingsOrderByWithRelationInput | bookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: bookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned bookings
    **/
    _count?: true | BookingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingsMaxAggregateInputType
  }

  export type GetBookingsAggregateType<T extends BookingsAggregateArgs> = {
        [P in keyof T & keyof AggregateBookings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookings[P]>
      : GetScalarType<T[P], AggregateBookings[P]>
  }




  export type bookingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookingsWhereInput
    orderBy?: bookingsOrderByWithAggregationInput | bookingsOrderByWithAggregationInput[]
    by: BookingsScalarFieldEnum[] | BookingsScalarFieldEnum
    having?: bookingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingsCountAggregateInputType | true
    _avg?: BookingsAvgAggregateInputType
    _sum?: BookingsSumAggregateInputType
    _min?: BookingsMinAggregateInputType
    _max?: BookingsMaxAggregateInputType
  }

  export type BookingsGroupByOutputType = {
    id: string
    user_id: string
    property_id: string
    start_date: Date
    end_date: Date
    proposed_amount: Decimal | null
    status: $Enums.booking_status
    cancelled_at: Date | null
    cancellation_reason: string | null
    created_at: Date
    _count: BookingsCountAggregateOutputType | null
    _avg: BookingsAvgAggregateOutputType | null
    _sum: BookingsSumAggregateOutputType | null
    _min: BookingsMinAggregateOutputType | null
    _max: BookingsMaxAggregateOutputType | null
  }

  type GetBookingsGroupByPayload<T extends bookingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingsGroupByOutputType[P]>
            : GetScalarType<T[P], BookingsGroupByOutputType[P]>
        }
      >
    >


  export type bookingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    property_id?: boolean
    start_date?: boolean
    end_date?: boolean
    proposed_amount?: boolean
    status?: boolean
    cancelled_at?: boolean
    cancellation_reason?: boolean
    created_at?: boolean
    properties?: boolean | propertiesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    rentals?: boolean | bookings$rentalsArgs<ExtArgs>
  }, ExtArgs["result"]["bookings"]>

  export type bookingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    property_id?: boolean
    start_date?: boolean
    end_date?: boolean
    proposed_amount?: boolean
    status?: boolean
    cancelled_at?: boolean
    cancellation_reason?: boolean
    created_at?: boolean
    properties?: boolean | propertiesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookings"]>

  export type bookingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    property_id?: boolean
    start_date?: boolean
    end_date?: boolean
    proposed_amount?: boolean
    status?: boolean
    cancelled_at?: boolean
    cancellation_reason?: boolean
    created_at?: boolean
    properties?: boolean | propertiesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookings"]>

  export type bookingsSelectScalar = {
    id?: boolean
    user_id?: boolean
    property_id?: boolean
    start_date?: boolean
    end_date?: boolean
    proposed_amount?: boolean
    status?: boolean
    cancelled_at?: boolean
    cancellation_reason?: boolean
    created_at?: boolean
  }

  export type bookingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "property_id" | "start_date" | "end_date" | "proposed_amount" | "status" | "cancelled_at" | "cancellation_reason" | "created_at", ExtArgs["result"]["bookings"]>
  export type bookingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    properties?: boolean | propertiesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    rentals?: boolean | bookings$rentalsArgs<ExtArgs>
  }
  export type bookingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    properties?: boolean | propertiesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type bookingsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    properties?: boolean | propertiesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $bookingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "bookings"
    objects: {
      properties: Prisma.$propertiesPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>
      rentals: Prisma.$rentalsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      property_id: string
      start_date: Date
      end_date: Date
      proposed_amount: Prisma.Decimal | null
      status: $Enums.booking_status
      cancelled_at: Date | null
      cancellation_reason: string | null
      created_at: Date
    }, ExtArgs["result"]["bookings"]>
    composites: {}
  }

  type bookingsGetPayload<S extends boolean | null | undefined | bookingsDefaultArgs> = $Result.GetResult<Prisma.$bookingsPayload, S>

  type bookingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<bookingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingsCountAggregateInputType | true
    }

  export interface bookingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['bookings'], meta: { name: 'bookings' } }
    /**
     * Find zero or one Bookings that matches the filter.
     * @param {bookingsFindUniqueArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends bookingsFindUniqueArgs>(args: SelectSubset<T, bookingsFindUniqueArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bookings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {bookingsFindUniqueOrThrowArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends bookingsFindUniqueOrThrowArgs>(args: SelectSubset<T, bookingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingsFindFirstArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends bookingsFindFirstArgs>(args?: SelectSubset<T, bookingsFindFirstArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bookings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingsFindFirstOrThrowArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends bookingsFindFirstOrThrowArgs>(args?: SelectSubset<T, bookingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.bookings.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.bookings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingsWithIdOnly = await prisma.bookings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends bookingsFindManyArgs>(args?: SelectSubset<T, bookingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bookings.
     * @param {bookingsCreateArgs} args - Arguments to create a Bookings.
     * @example
     * // Create one Bookings
     * const Bookings = await prisma.bookings.create({
     *   data: {
     *     // ... data to create a Bookings
     *   }
     * })
     * 
     */
    create<T extends bookingsCreateArgs>(args: SelectSubset<T, bookingsCreateArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {bookingsCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const bookings = await prisma.bookings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends bookingsCreateManyArgs>(args?: SelectSubset<T, bookingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {bookingsCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const bookings = await prisma.bookings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookings and only return the `id`
     * const bookingsWithIdOnly = await prisma.bookings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends bookingsCreateManyAndReturnArgs>(args?: SelectSubset<T, bookingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bookings.
     * @param {bookingsDeleteArgs} args - Arguments to delete one Bookings.
     * @example
     * // Delete one Bookings
     * const Bookings = await prisma.bookings.delete({
     *   where: {
     *     // ... filter to delete one Bookings
     *   }
     * })
     * 
     */
    delete<T extends bookingsDeleteArgs>(args: SelectSubset<T, bookingsDeleteArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bookings.
     * @param {bookingsUpdateArgs} args - Arguments to update one Bookings.
     * @example
     * // Update one Bookings
     * const bookings = await prisma.bookings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends bookingsUpdateArgs>(args: SelectSubset<T, bookingsUpdateArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {bookingsDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.bookings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends bookingsDeleteManyArgs>(args?: SelectSubset<T, bookingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const bookings = await prisma.bookings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends bookingsUpdateManyArgs>(args: SelectSubset<T, bookingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings and returns the data updated in the database.
     * @param {bookingsUpdateManyAndReturnArgs} args - Arguments to update many Bookings.
     * @example
     * // Update many Bookings
     * const bookings = await prisma.bookings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookings and only return the `id`
     * const bookingsWithIdOnly = await prisma.bookings.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends bookingsUpdateManyAndReturnArgs>(args: SelectSubset<T, bookingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bookings.
     * @param {bookingsUpsertArgs} args - Arguments to update or create a Bookings.
     * @example
     * // Update or create a Bookings
     * const bookings = await prisma.bookings.upsert({
     *   create: {
     *     // ... data to create a Bookings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bookings we want to update
     *   }
     * })
     */
    upsert<T extends bookingsUpsertArgs>(args: SelectSubset<T, bookingsUpsertArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingsCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.bookings.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends bookingsCountArgs>(
      args?: Subset<T, bookingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingsAggregateArgs>(args: Subset<T, BookingsAggregateArgs>): Prisma.PrismaPromise<GetBookingsAggregateType<T>>

    /**
     * Group by Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingsGroupByArgs} args - Group by arguments.
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
      T extends bookingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bookingsGroupByArgs['orderBy'] }
        : { orderBy?: bookingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, bookingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the bookings model
   */
  readonly fields: bookingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for bookings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bookingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    properties<T extends propertiesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, propertiesDefaultArgs<ExtArgs>>): Prisma__propertiesClient<$Result.GetResult<Prisma.$propertiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    rentals<T extends bookings$rentalsArgs<ExtArgs> = {}>(args?: Subset<T, bookings$rentalsArgs<ExtArgs>>): Prisma__rentalsClient<$Result.GetResult<Prisma.$rentalsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the bookings model
   */
  interface bookingsFieldRefs {
    readonly id: FieldRef<"bookings", 'String'>
    readonly user_id: FieldRef<"bookings", 'String'>
    readonly property_id: FieldRef<"bookings", 'String'>
    readonly start_date: FieldRef<"bookings", 'DateTime'>
    readonly end_date: FieldRef<"bookings", 'DateTime'>
    readonly proposed_amount: FieldRef<"bookings", 'Decimal'>
    readonly status: FieldRef<"bookings", 'booking_status'>
    readonly cancelled_at: FieldRef<"bookings", 'DateTime'>
    readonly cancellation_reason: FieldRef<"bookings", 'String'>
    readonly created_at: FieldRef<"bookings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * bookings findUnique
   */
  export type bookingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * Filter, which bookings to fetch.
     */
    where: bookingsWhereUniqueInput
  }

  /**
   * bookings findUniqueOrThrow
   */
  export type bookingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * Filter, which bookings to fetch.
     */
    where: bookingsWhereUniqueInput
  }

  /**
   * bookings findFirst
   */
  export type bookingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * Filter, which bookings to fetch.
     */
    where?: bookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingsOrderByWithRelationInput | bookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bookings.
     */
    cursor?: bookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bookings.
     */
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * bookings findFirstOrThrow
   */
  export type bookingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * Filter, which bookings to fetch.
     */
    where?: bookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingsOrderByWithRelationInput | bookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bookings.
     */
    cursor?: bookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bookings.
     */
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * bookings findMany
   */
  export type bookingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * Filter, which bookings to fetch.
     */
    where?: bookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingsOrderByWithRelationInput | bookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing bookings.
     */
    cursor?: bookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookings.
     */
    skip?: number
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * bookings create
   */
  export type bookingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * The data needed to create a bookings.
     */
    data: XOR<bookingsCreateInput, bookingsUncheckedCreateInput>
  }

  /**
   * bookings createMany
   */
  export type bookingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many bookings.
     */
    data: bookingsCreateManyInput | bookingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * bookings createManyAndReturn
   */
  export type bookingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * The data used to create many bookings.
     */
    data: bookingsCreateManyInput | bookingsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * bookings update
   */
  export type bookingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * The data needed to update a bookings.
     */
    data: XOR<bookingsUpdateInput, bookingsUncheckedUpdateInput>
    /**
     * Choose, which bookings to update.
     */
    where: bookingsWhereUniqueInput
  }

  /**
   * bookings updateMany
   */
  export type bookingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update bookings.
     */
    data: XOR<bookingsUpdateManyMutationInput, bookingsUncheckedUpdateManyInput>
    /**
     * Filter which bookings to update
     */
    where?: bookingsWhereInput
    /**
     * Limit how many bookings to update.
     */
    limit?: number
  }

  /**
   * bookings updateManyAndReturn
   */
  export type bookingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * The data used to update bookings.
     */
    data: XOR<bookingsUpdateManyMutationInput, bookingsUncheckedUpdateManyInput>
    /**
     * Filter which bookings to update
     */
    where?: bookingsWhereInput
    /**
     * Limit how many bookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * bookings upsert
   */
  export type bookingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * The filter to search for the bookings to update in case it exists.
     */
    where: bookingsWhereUniqueInput
    /**
     * In case the bookings found by the `where` argument doesn't exist, create a new bookings with this data.
     */
    create: XOR<bookingsCreateInput, bookingsUncheckedCreateInput>
    /**
     * In case the bookings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bookingsUpdateInput, bookingsUncheckedUpdateInput>
  }

  /**
   * bookings delete
   */
  export type bookingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * Filter which bookings to delete.
     */
    where: bookingsWhereUniqueInput
  }

  /**
   * bookings deleteMany
   */
  export type bookingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bookings to delete
     */
    where?: bookingsWhereInput
    /**
     * Limit how many bookings to delete.
     */
    limit?: number
  }

  /**
   * bookings.rentals
   */
  export type bookings$rentalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rentals
     */
    select?: rentalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rentals
     */
    omit?: rentalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rentalsInclude<ExtArgs> | null
    where?: rentalsWhereInput
  }

  /**
   * bookings without action
   */
  export type bookingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
  }


  /**
   * Model categories
   */

  export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  export type CategoriesMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
  }

  export type CategoriesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
  }

  export type CategoriesCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type CategoriesMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type CategoriesMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type CategoriesCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type CategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to aggregate.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
    **/
    _count?: true | CategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesMaxAggregateInputType
  }

  export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategories[P]>
      : GetScalarType<T[P], AggregateCategories[P]>
  }




  export type categoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriesWhereInput
    orderBy?: categoriesOrderByWithAggregationInput | categoriesOrderByWithAggregationInput[]
    by: CategoriesScalarFieldEnum[] | CategoriesScalarFieldEnum
    having?: categoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesCountAggregateInputType | true
    _min?: CategoriesMinAggregateInputType
    _max?: CategoriesMaxAggregateInputType
  }

  export type CategoriesGroupByOutputType = {
    id: string
    name: string
    description: string | null
    _count: CategoriesCountAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  type GetCategoriesGroupByPayload<T extends categoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
        }
      >
    >


  export type categoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    properties?: boolean | categories$propertiesArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
  }

  export type categoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description", ExtArgs["result"]["categories"]>
  export type categoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    properties?: boolean | categories$propertiesArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type categoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type categoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $categoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "categories"
    objects: {
      properties: Prisma.$propertiesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
    }, ExtArgs["result"]["categories"]>
    composites: {}
  }

  type categoriesGetPayload<S extends boolean | null | undefined | categoriesDefaultArgs> = $Result.GetResult<Prisma.$categoriesPayload, S>

  type categoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriesCountAggregateInputType | true
    }

  export interface categoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['categories'], meta: { name: 'categories' } }
    /**
     * Find zero or one Categories that matches the filter.
     * @param {categoriesFindUniqueArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoriesFindUniqueArgs>(args: SelectSubset<T, categoriesFindUniqueArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoriesFindUniqueOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, categoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoriesFindFirstArgs>(args?: SelectSubset<T, categoriesFindFirstArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, categoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categories.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriesWithIdOnly = await prisma.categories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends categoriesFindManyArgs>(args?: SelectSubset<T, categoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categories.
     * @param {categoriesCreateArgs} args - Arguments to create a Categories.
     * @example
     * // Create one Categories
     * const Categories = await prisma.categories.create({
     *   data: {
     *     // ... data to create a Categories
     *   }
     * })
     * 
     */
    create<T extends categoriesCreateArgs>(args: SelectSubset<T, categoriesCreateArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {categoriesCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoriesCreateManyArgs>(args?: SelectSubset<T, categoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {categoriesCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends categoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, categoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categories.
     * @param {categoriesDeleteArgs} args - Arguments to delete one Categories.
     * @example
     * // Delete one Categories
     * const Categories = await prisma.categories.delete({
     *   where: {
     *     // ... filter to delete one Categories
     *   }
     * })
     * 
     */
    delete<T extends categoriesDeleteArgs>(args: SelectSubset<T, categoriesDeleteArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categories.
     * @param {categoriesUpdateArgs} args - Arguments to update one Categories.
     * @example
     * // Update one Categories
     * const categories = await prisma.categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoriesUpdateArgs>(args: SelectSubset<T, categoriesUpdateArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {categoriesDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoriesDeleteManyArgs>(args?: SelectSubset<T, categoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoriesUpdateManyArgs>(args: SelectSubset<T, categoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {categoriesUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends categoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, categoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categories.
     * @param {categoriesUpsertArgs} args - Arguments to update or create a Categories.
     * @example
     * // Update or create a Categories
     * const categories = await prisma.categories.upsert({
     *   create: {
     *     // ... data to create a Categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categories we want to update
     *   }
     * })
     */
    upsert<T extends categoriesUpsertArgs>(args: SelectSubset<T, categoriesUpsertArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categories.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends categoriesCountArgs>(
      args?: Subset<T, categoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriesAggregateArgs>(args: Subset<T, CategoriesAggregateArgs>): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>

    /**
     * Group by Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesGroupByArgs} args - Group by arguments.
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
      T extends categoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoriesGroupByArgs['orderBy'] }
        : { orderBy?: categoriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, categoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the categories model
   */
  readonly fields: categoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    properties<T extends categories$propertiesArgs<ExtArgs> = {}>(args?: Subset<T, categories$propertiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$propertiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the categories model
   */
  interface categoriesFieldRefs {
    readonly id: FieldRef<"categories", 'String'>
    readonly name: FieldRef<"categories", 'String'>
    readonly description: FieldRef<"categories", 'String'>
  }
    

  // Custom InputTypes
  /**
   * categories findUnique
   */
  export type categoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories findUniqueOrThrow
   */
  export type categoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories findFirst
   */
  export type categoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories findFirstOrThrow
   */
  export type categoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories findMany
   */
  export type categoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories create
   */
  export type categoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a categories.
     */
    data: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
  }

  /**
   * categories createMany
   */
  export type categoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categories.
     */
    data: categoriesCreateManyInput | categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categories createManyAndReturn
   */
  export type categoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * The data used to create many categories.
     */
    data: categoriesCreateManyInput | categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categories update
   */
  export type categoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a categories.
     */
    data: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
    /**
     * Choose, which categories to update.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories updateMany
   */
  export type categoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categories.
     */
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * categories updateManyAndReturn
   */
  export type categoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * The data used to update categories.
     */
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * categories upsert
   */
  export type categoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the categories to update in case it exists.
     */
    where: categoriesWhereUniqueInput
    /**
     * In case the categories found by the `where` argument doesn't exist, create a new categories with this data.
     */
    create: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
    /**
     * In case the categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
  }

  /**
   * categories delete
   */
  export type categoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter which categories to delete.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories deleteMany
   */
  export type categoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to delete
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to delete.
     */
    limit?: number
  }

  /**
   * categories.properties
   */
  export type categories$propertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the properties
     */
    select?: propertiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the properties
     */
    omit?: propertiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: propertiesInclude<ExtArgs> | null
    where?: propertiesWhereInput
    orderBy?: propertiesOrderByWithRelationInput | propertiesOrderByWithRelationInput[]
    cursor?: propertiesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertiesScalarFieldEnum | PropertiesScalarFieldEnum[]
  }

  /**
   * categories without action
   */
  export type categoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
  }


  /**
   * Model payments
   */

  export type AggregatePayments = {
    _count: PaymentsCountAggregateOutputType | null
    _avg: PaymentsAvgAggregateOutputType | null
    _sum: PaymentsSumAggregateOutputType | null
    _min: PaymentsMinAggregateOutputType | null
    _max: PaymentsMaxAggregateOutputType | null
  }

  export type PaymentsAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type PaymentsSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type PaymentsMinAggregateOutputType = {
    id: string | null
    rental_id: string | null
    amount: Decimal | null
    category: $Enums.payment_category | null
    payment_method: string | null
    payment_status: $Enums.payment_status | null
    transaction_reference: string | null
    paid_at: Date | null
    created_at: Date | null
  }

  export type PaymentsMaxAggregateOutputType = {
    id: string | null
    rental_id: string | null
    amount: Decimal | null
    category: $Enums.payment_category | null
    payment_method: string | null
    payment_status: $Enums.payment_status | null
    transaction_reference: string | null
    paid_at: Date | null
    created_at: Date | null
  }

  export type PaymentsCountAggregateOutputType = {
    id: number
    rental_id: number
    amount: number
    category: number
    payment_method: number
    payment_status: number
    transaction_reference: number
    paid_at: number
    created_at: number
    _all: number
  }


  export type PaymentsAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentsSumAggregateInputType = {
    amount?: true
  }

  export type PaymentsMinAggregateInputType = {
    id?: true
    rental_id?: true
    amount?: true
    category?: true
    payment_method?: true
    payment_status?: true
    transaction_reference?: true
    paid_at?: true
    created_at?: true
  }

  export type PaymentsMaxAggregateInputType = {
    id?: true
    rental_id?: true
    amount?: true
    category?: true
    payment_method?: true
    payment_status?: true
    transaction_reference?: true
    paid_at?: true
    created_at?: true
  }

  export type PaymentsCountAggregateInputType = {
    id?: true
    rental_id?: true
    amount?: true
    category?: true
    payment_method?: true
    payment_status?: true
    transaction_reference?: true
    paid_at?: true
    created_at?: true
    _all?: true
  }

  export type PaymentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payments to aggregate.
     */
    where?: paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned payments
    **/
    _count?: true | PaymentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentsMaxAggregateInputType
  }

  export type GetPaymentsAggregateType<T extends PaymentsAggregateArgs> = {
        [P in keyof T & keyof AggregatePayments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayments[P]>
      : GetScalarType<T[P], AggregatePayments[P]>
  }




  export type paymentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paymentsWhereInput
    orderBy?: paymentsOrderByWithAggregationInput | paymentsOrderByWithAggregationInput[]
    by: PaymentsScalarFieldEnum[] | PaymentsScalarFieldEnum
    having?: paymentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentsCountAggregateInputType | true
    _avg?: PaymentsAvgAggregateInputType
    _sum?: PaymentsSumAggregateInputType
    _min?: PaymentsMinAggregateInputType
    _max?: PaymentsMaxAggregateInputType
  }

  export type PaymentsGroupByOutputType = {
    id: string
    rental_id: string
    amount: Decimal
    category: $Enums.payment_category
    payment_method: string | null
    payment_status: $Enums.payment_status
    transaction_reference: string | null
    paid_at: Date | null
    created_at: Date
    _count: PaymentsCountAggregateOutputType | null
    _avg: PaymentsAvgAggregateOutputType | null
    _sum: PaymentsSumAggregateOutputType | null
    _min: PaymentsMinAggregateOutputType | null
    _max: PaymentsMaxAggregateOutputType | null
  }

  type GetPaymentsGroupByPayload<T extends paymentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentsGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentsGroupByOutputType[P]>
        }
      >
    >


  export type paymentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rental_id?: boolean
    amount?: boolean
    category?: boolean
    payment_method?: boolean
    payment_status?: boolean
    transaction_reference?: boolean
    paid_at?: boolean
    created_at?: boolean
    rentals?: boolean | rentalsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payments"]>

  export type paymentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rental_id?: boolean
    amount?: boolean
    category?: boolean
    payment_method?: boolean
    payment_status?: boolean
    transaction_reference?: boolean
    paid_at?: boolean
    created_at?: boolean
    rentals?: boolean | rentalsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payments"]>

  export type paymentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rental_id?: boolean
    amount?: boolean
    category?: boolean
    payment_method?: boolean
    payment_status?: boolean
    transaction_reference?: boolean
    paid_at?: boolean
    created_at?: boolean
    rentals?: boolean | rentalsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payments"]>

  export type paymentsSelectScalar = {
    id?: boolean
    rental_id?: boolean
    amount?: boolean
    category?: boolean
    payment_method?: boolean
    payment_status?: boolean
    transaction_reference?: boolean
    paid_at?: boolean
    created_at?: boolean
  }

  export type paymentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rental_id" | "amount" | "category" | "payment_method" | "payment_status" | "transaction_reference" | "paid_at" | "created_at", ExtArgs["result"]["payments"]>
  export type paymentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rentals?: boolean | rentalsDefaultArgs<ExtArgs>
  }
  export type paymentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rentals?: boolean | rentalsDefaultArgs<ExtArgs>
  }
  export type paymentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rentals?: boolean | rentalsDefaultArgs<ExtArgs>
  }

  export type $paymentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "payments"
    objects: {
      rentals: Prisma.$rentalsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      rental_id: string
      amount: Prisma.Decimal
      category: $Enums.payment_category
      payment_method: string | null
      payment_status: $Enums.payment_status
      transaction_reference: string | null
      paid_at: Date | null
      created_at: Date
    }, ExtArgs["result"]["payments"]>
    composites: {}
  }

  type paymentsGetPayload<S extends boolean | null | undefined | paymentsDefaultArgs> = $Result.GetResult<Prisma.$paymentsPayload, S>

  type paymentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<paymentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentsCountAggregateInputType | true
    }

  export interface paymentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['payments'], meta: { name: 'payments' } }
    /**
     * Find zero or one Payments that matches the filter.
     * @param {paymentsFindUniqueArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends paymentsFindUniqueArgs>(args: SelectSubset<T, paymentsFindUniqueArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {paymentsFindUniqueOrThrowArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends paymentsFindUniqueOrThrowArgs>(args: SelectSubset<T, paymentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsFindFirstArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends paymentsFindFirstArgs>(args?: SelectSubset<T, paymentsFindFirstArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsFindFirstOrThrowArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends paymentsFindFirstOrThrowArgs>(args?: SelectSubset<T, paymentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payments.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentsWithIdOnly = await prisma.payments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends paymentsFindManyArgs>(args?: SelectSubset<T, paymentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payments.
     * @param {paymentsCreateArgs} args - Arguments to create a Payments.
     * @example
     * // Create one Payments
     * const Payments = await prisma.payments.create({
     *   data: {
     *     // ... data to create a Payments
     *   }
     * })
     * 
     */
    create<T extends paymentsCreateArgs>(args: SelectSubset<T, paymentsCreateArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {paymentsCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payments = await prisma.payments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends paymentsCreateManyArgs>(args?: SelectSubset<T, paymentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {paymentsCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payments = await prisma.payments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentsWithIdOnly = await prisma.payments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends paymentsCreateManyAndReturnArgs>(args?: SelectSubset<T, paymentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payments.
     * @param {paymentsDeleteArgs} args - Arguments to delete one Payments.
     * @example
     * // Delete one Payments
     * const Payments = await prisma.payments.delete({
     *   where: {
     *     // ... filter to delete one Payments
     *   }
     * })
     * 
     */
    delete<T extends paymentsDeleteArgs>(args: SelectSubset<T, paymentsDeleteArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payments.
     * @param {paymentsUpdateArgs} args - Arguments to update one Payments.
     * @example
     * // Update one Payments
     * const payments = await prisma.payments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends paymentsUpdateArgs>(args: SelectSubset<T, paymentsUpdateArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {paymentsDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends paymentsDeleteManyArgs>(args?: SelectSubset<T, paymentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payments = await prisma.payments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends paymentsUpdateManyArgs>(args: SelectSubset<T, paymentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {paymentsUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payments = await prisma.payments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentsWithIdOnly = await prisma.payments.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends paymentsUpdateManyAndReturnArgs>(args: SelectSubset<T, paymentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payments.
     * @param {paymentsUpsertArgs} args - Arguments to update or create a Payments.
     * @example
     * // Update or create a Payments
     * const payments = await prisma.payments.upsert({
     *   create: {
     *     // ... data to create a Payments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payments we want to update
     *   }
     * })
     */
    upsert<T extends paymentsUpsertArgs>(args: SelectSubset<T, paymentsUpsertArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payments.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends paymentsCountArgs>(
      args?: Subset<T, paymentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentsAggregateArgs>(args: Subset<T, PaymentsAggregateArgs>): Prisma.PrismaPromise<GetPaymentsAggregateType<T>>

    /**
     * Group by Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsGroupByArgs} args - Group by arguments.
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
      T extends paymentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: paymentsGroupByArgs['orderBy'] }
        : { orderBy?: paymentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, paymentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the payments model
   */
  readonly fields: paymentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for payments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__paymentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rentals<T extends rentalsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, rentalsDefaultArgs<ExtArgs>>): Prisma__rentalsClient<$Result.GetResult<Prisma.$rentalsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the payments model
   */
  interface paymentsFieldRefs {
    readonly id: FieldRef<"payments", 'String'>
    readonly rental_id: FieldRef<"payments", 'String'>
    readonly amount: FieldRef<"payments", 'Decimal'>
    readonly category: FieldRef<"payments", 'payment_category'>
    readonly payment_method: FieldRef<"payments", 'String'>
    readonly payment_status: FieldRef<"payments", 'payment_status'>
    readonly transaction_reference: FieldRef<"payments", 'String'>
    readonly paid_at: FieldRef<"payments", 'DateTime'>
    readonly created_at: FieldRef<"payments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * payments findUnique
   */
  export type paymentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where: paymentsWhereUniqueInput
  }

  /**
   * payments findUniqueOrThrow
   */
  export type paymentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where: paymentsWhereUniqueInput
  }

  /**
   * payments findFirst
   */
  export type paymentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where?: paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payments.
     */
    cursor?: paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payments.
     */
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * payments findFirstOrThrow
   */
  export type paymentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where?: paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payments.
     */
    cursor?: paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payments.
     */
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * payments findMany
   */
  export type paymentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where?: paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing payments.
     */
    cursor?: paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * payments create
   */
  export type paymentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * The data needed to create a payments.
     */
    data: XOR<paymentsCreateInput, paymentsUncheckedCreateInput>
  }

  /**
   * payments createMany
   */
  export type paymentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many payments.
     */
    data: paymentsCreateManyInput | paymentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * payments createManyAndReturn
   */
  export type paymentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * The data used to create many payments.
     */
    data: paymentsCreateManyInput | paymentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * payments update
   */
  export type paymentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * The data needed to update a payments.
     */
    data: XOR<paymentsUpdateInput, paymentsUncheckedUpdateInput>
    /**
     * Choose, which payments to update.
     */
    where: paymentsWhereUniqueInput
  }

  /**
   * payments updateMany
   */
  export type paymentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update payments.
     */
    data: XOR<paymentsUpdateManyMutationInput, paymentsUncheckedUpdateManyInput>
    /**
     * Filter which payments to update
     */
    where?: paymentsWhereInput
    /**
     * Limit how many payments to update.
     */
    limit?: number
  }

  /**
   * payments updateManyAndReturn
   */
  export type paymentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * The data used to update payments.
     */
    data: XOR<paymentsUpdateManyMutationInput, paymentsUncheckedUpdateManyInput>
    /**
     * Filter which payments to update
     */
    where?: paymentsWhereInput
    /**
     * Limit how many payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * payments upsert
   */
  export type paymentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * The filter to search for the payments to update in case it exists.
     */
    where: paymentsWhereUniqueInput
    /**
     * In case the payments found by the `where` argument doesn't exist, create a new payments with this data.
     */
    create: XOR<paymentsCreateInput, paymentsUncheckedCreateInput>
    /**
     * In case the payments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<paymentsUpdateInput, paymentsUncheckedUpdateInput>
  }

  /**
   * payments delete
   */
  export type paymentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter which payments to delete.
     */
    where: paymentsWhereUniqueInput
  }

  /**
   * payments deleteMany
   */
  export type paymentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payments to delete
     */
    where?: paymentsWhereInput
    /**
     * Limit how many payments to delete.
     */
    limit?: number
  }

  /**
   * payments without action
   */
  export type paymentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
  }


  /**
   * Model properties
   */

  export type AggregateProperties = {
    _count: PropertiesCountAggregateOutputType | null
    _avg: PropertiesAvgAggregateOutputType | null
    _sum: PropertiesSumAggregateOutputType | null
    _min: PropertiesMinAggregateOutputType | null
    _max: PropertiesMaxAggregateOutputType | null
  }

  export type PropertiesAvgAggregateOutputType = {
    base_price: Decimal | null
  }

  export type PropertiesSumAggregateOutputType = {
    base_price: Decimal | null
  }

  export type PropertiesMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    address: string | null
    city: string | null
    state: string | null
    pricing_unit: $Enums.pricing_unit | null
    base_price: Decimal | null
    approval_status: $Enums.property_approval_status | null
    availability_status: $Enums.property_availability_status | null
    category_id: string | null
    manager_id: string | null
    approved_by: string | null
    approved_at: Date | null
    rejection_reason: string | null
    created_at: Date | null
  }

  export type PropertiesMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    address: string | null
    city: string | null
    state: string | null
    pricing_unit: $Enums.pricing_unit | null
    base_price: Decimal | null
    approval_status: $Enums.property_approval_status | null
    availability_status: $Enums.property_availability_status | null
    category_id: string | null
    manager_id: string | null
    approved_by: string | null
    approved_at: Date | null
    rejection_reason: string | null
    created_at: Date | null
  }

  export type PropertiesCountAggregateOutputType = {
    id: number
    title: number
    description: number
    address: number
    city: number
    state: number
    pricing_unit: number
    base_price: number
    approval_status: number
    availability_status: number
    category_id: number
    manager_id: number
    approved_by: number
    approved_at: number
    rejection_reason: number
    created_at: number
    _all: number
  }


  export type PropertiesAvgAggregateInputType = {
    base_price?: true
  }

  export type PropertiesSumAggregateInputType = {
    base_price?: true
  }

  export type PropertiesMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    address?: true
    city?: true
    state?: true
    pricing_unit?: true
    base_price?: true
    approval_status?: true
    availability_status?: true
    category_id?: true
    manager_id?: true
    approved_by?: true
    approved_at?: true
    rejection_reason?: true
    created_at?: true
  }

  export type PropertiesMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    address?: true
    city?: true
    state?: true
    pricing_unit?: true
    base_price?: true
    approval_status?: true
    availability_status?: true
    category_id?: true
    manager_id?: true
    approved_by?: true
    approved_at?: true
    rejection_reason?: true
    created_at?: true
  }

  export type PropertiesCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    address?: true
    city?: true
    state?: true
    pricing_unit?: true
    base_price?: true
    approval_status?: true
    availability_status?: true
    category_id?: true
    manager_id?: true
    approved_by?: true
    approved_at?: true
    rejection_reason?: true
    created_at?: true
    _all?: true
  }

  export type PropertiesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which properties to aggregate.
     */
    where?: propertiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of properties to fetch.
     */
    orderBy?: propertiesOrderByWithRelationInput | propertiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: propertiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned properties
    **/
    _count?: true | PropertiesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropertiesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropertiesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertiesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertiesMaxAggregateInputType
  }

  export type GetPropertiesAggregateType<T extends PropertiesAggregateArgs> = {
        [P in keyof T & keyof AggregateProperties]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProperties[P]>
      : GetScalarType<T[P], AggregateProperties[P]>
  }




  export type propertiesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: propertiesWhereInput
    orderBy?: propertiesOrderByWithAggregationInput | propertiesOrderByWithAggregationInput[]
    by: PropertiesScalarFieldEnum[] | PropertiesScalarFieldEnum
    having?: propertiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertiesCountAggregateInputType | true
    _avg?: PropertiesAvgAggregateInputType
    _sum?: PropertiesSumAggregateInputType
    _min?: PropertiesMinAggregateInputType
    _max?: PropertiesMaxAggregateInputType
  }

  export type PropertiesGroupByOutputType = {
    id: string
    title: string
    description: string | null
    address: string
    city: string
    state: string
    pricing_unit: $Enums.pricing_unit
    base_price: Decimal
    approval_status: $Enums.property_approval_status
    availability_status: $Enums.property_availability_status
    category_id: string | null
    manager_id: string
    approved_by: string | null
    approved_at: Date | null
    rejection_reason: string | null
    created_at: Date
    _count: PropertiesCountAggregateOutputType | null
    _avg: PropertiesAvgAggregateOutputType | null
    _sum: PropertiesSumAggregateOutputType | null
    _min: PropertiesMinAggregateOutputType | null
    _max: PropertiesMaxAggregateOutputType | null
  }

  type GetPropertiesGroupByPayload<T extends propertiesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropertiesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertiesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertiesGroupByOutputType[P]>
            : GetScalarType<T[P], PropertiesGroupByOutputType[P]>
        }
      >
    >


  export type propertiesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    pricing_unit?: boolean
    base_price?: boolean
    approval_status?: boolean
    availability_status?: boolean
    category_id?: boolean
    manager_id?: boolean
    approved_by?: boolean
    approved_at?: boolean
    rejection_reason?: boolean
    created_at?: boolean
    bookings?: boolean | properties$bookingsArgs<ExtArgs>
    users_properties_approved_byTousers?: boolean | properties$users_properties_approved_byTousersArgs<ExtArgs>
    categories?: boolean | properties$categoriesArgs<ExtArgs>
    users_properties_manager_idTousers?: boolean | usersDefaultArgs<ExtArgs>
    property_images?: boolean | properties$property_imagesArgs<ExtArgs>
    rentals?: boolean | properties$rentalsArgs<ExtArgs>
    _count?: boolean | PropertiesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["properties"]>

  export type propertiesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    pricing_unit?: boolean
    base_price?: boolean
    approval_status?: boolean
    availability_status?: boolean
    category_id?: boolean
    manager_id?: boolean
    approved_by?: boolean
    approved_at?: boolean
    rejection_reason?: boolean
    created_at?: boolean
    users_properties_approved_byTousers?: boolean | properties$users_properties_approved_byTousersArgs<ExtArgs>
    categories?: boolean | properties$categoriesArgs<ExtArgs>
    users_properties_manager_idTousers?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["properties"]>

  export type propertiesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    pricing_unit?: boolean
    base_price?: boolean
    approval_status?: boolean
    availability_status?: boolean
    category_id?: boolean
    manager_id?: boolean
    approved_by?: boolean
    approved_at?: boolean
    rejection_reason?: boolean
    created_at?: boolean
    users_properties_approved_byTousers?: boolean | properties$users_properties_approved_byTousersArgs<ExtArgs>
    categories?: boolean | properties$categoriesArgs<ExtArgs>
    users_properties_manager_idTousers?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["properties"]>

  export type propertiesSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    pricing_unit?: boolean
    base_price?: boolean
    approval_status?: boolean
    availability_status?: boolean
    category_id?: boolean
    manager_id?: boolean
    approved_by?: boolean
    approved_at?: boolean
    rejection_reason?: boolean
    created_at?: boolean
  }

  export type propertiesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "address" | "city" | "state" | "pricing_unit" | "base_price" | "approval_status" | "availability_status" | "category_id" | "manager_id" | "approved_by" | "approved_at" | "rejection_reason" | "created_at", ExtArgs["result"]["properties"]>
  export type propertiesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | properties$bookingsArgs<ExtArgs>
    users_properties_approved_byTousers?: boolean | properties$users_properties_approved_byTousersArgs<ExtArgs>
    categories?: boolean | properties$categoriesArgs<ExtArgs>
    users_properties_manager_idTousers?: boolean | usersDefaultArgs<ExtArgs>
    property_images?: boolean | properties$property_imagesArgs<ExtArgs>
    rentals?: boolean | properties$rentalsArgs<ExtArgs>
    _count?: boolean | PropertiesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type propertiesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_properties_approved_byTousers?: boolean | properties$users_properties_approved_byTousersArgs<ExtArgs>
    categories?: boolean | properties$categoriesArgs<ExtArgs>
    users_properties_manager_idTousers?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type propertiesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_properties_approved_byTousers?: boolean | properties$users_properties_approved_byTousersArgs<ExtArgs>
    categories?: boolean | properties$categoriesArgs<ExtArgs>
    users_properties_manager_idTousers?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $propertiesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "properties"
    objects: {
      bookings: Prisma.$bookingsPayload<ExtArgs>[]
      users_properties_approved_byTousers: Prisma.$usersPayload<ExtArgs> | null
      categories: Prisma.$categoriesPayload<ExtArgs> | null
      users_properties_manager_idTousers: Prisma.$usersPayload<ExtArgs>
      property_images: Prisma.$property_imagesPayload<ExtArgs>[]
      rentals: Prisma.$rentalsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      address: string
      city: string
      state: string
      pricing_unit: $Enums.pricing_unit
      base_price: Prisma.Decimal
      approval_status: $Enums.property_approval_status
      availability_status: $Enums.property_availability_status
      category_id: string | null
      manager_id: string
      approved_by: string | null
      approved_at: Date | null
      rejection_reason: string | null
      created_at: Date
    }, ExtArgs["result"]["properties"]>
    composites: {}
  }

  type propertiesGetPayload<S extends boolean | null | undefined | propertiesDefaultArgs> = $Result.GetResult<Prisma.$propertiesPayload, S>

  type propertiesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<propertiesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PropertiesCountAggregateInputType | true
    }

  export interface propertiesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['properties'], meta: { name: 'properties' } }
    /**
     * Find zero or one Properties that matches the filter.
     * @param {propertiesFindUniqueArgs} args - Arguments to find a Properties
     * @example
     * // Get one Properties
     * const properties = await prisma.properties.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends propertiesFindUniqueArgs>(args: SelectSubset<T, propertiesFindUniqueArgs<ExtArgs>>): Prisma__propertiesClient<$Result.GetResult<Prisma.$propertiesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Properties that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {propertiesFindUniqueOrThrowArgs} args - Arguments to find a Properties
     * @example
     * // Get one Properties
     * const properties = await prisma.properties.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends propertiesFindUniqueOrThrowArgs>(args: SelectSubset<T, propertiesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__propertiesClient<$Result.GetResult<Prisma.$propertiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Properties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {propertiesFindFirstArgs} args - Arguments to find a Properties
     * @example
     * // Get one Properties
     * const properties = await prisma.properties.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends propertiesFindFirstArgs>(args?: SelectSubset<T, propertiesFindFirstArgs<ExtArgs>>): Prisma__propertiesClient<$Result.GetResult<Prisma.$propertiesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Properties that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {propertiesFindFirstOrThrowArgs} args - Arguments to find a Properties
     * @example
     * // Get one Properties
     * const properties = await prisma.properties.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends propertiesFindFirstOrThrowArgs>(args?: SelectSubset<T, propertiesFindFirstOrThrowArgs<ExtArgs>>): Prisma__propertiesClient<$Result.GetResult<Prisma.$propertiesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Properties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {propertiesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Properties
     * const properties = await prisma.properties.findMany()
     * 
     * // Get first 10 Properties
     * const properties = await prisma.properties.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertiesWithIdOnly = await prisma.properties.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends propertiesFindManyArgs>(args?: SelectSubset<T, propertiesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$propertiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Properties.
     * @param {propertiesCreateArgs} args - Arguments to create a Properties.
     * @example
     * // Create one Properties
     * const Properties = await prisma.properties.create({
     *   data: {
     *     // ... data to create a Properties
     *   }
     * })
     * 
     */
    create<T extends propertiesCreateArgs>(args: SelectSubset<T, propertiesCreateArgs<ExtArgs>>): Prisma__propertiesClient<$Result.GetResult<Prisma.$propertiesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Properties.
     * @param {propertiesCreateManyArgs} args - Arguments to create many Properties.
     * @example
     * // Create many Properties
     * const properties = await prisma.properties.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends propertiesCreateManyArgs>(args?: SelectSubset<T, propertiesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Properties and returns the data saved in the database.
     * @param {propertiesCreateManyAndReturnArgs} args - Arguments to create many Properties.
     * @example
     * // Create many Properties
     * const properties = await prisma.properties.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Properties and only return the `id`
     * const propertiesWithIdOnly = await prisma.properties.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends propertiesCreateManyAndReturnArgs>(args?: SelectSubset<T, propertiesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$propertiesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Properties.
     * @param {propertiesDeleteArgs} args - Arguments to delete one Properties.
     * @example
     * // Delete one Properties
     * const Properties = await prisma.properties.delete({
     *   where: {
     *     // ... filter to delete one Properties
     *   }
     * })
     * 
     */
    delete<T extends propertiesDeleteArgs>(args: SelectSubset<T, propertiesDeleteArgs<ExtArgs>>): Prisma__propertiesClient<$Result.GetResult<Prisma.$propertiesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Properties.
     * @param {propertiesUpdateArgs} args - Arguments to update one Properties.
     * @example
     * // Update one Properties
     * const properties = await prisma.properties.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends propertiesUpdateArgs>(args: SelectSubset<T, propertiesUpdateArgs<ExtArgs>>): Prisma__propertiesClient<$Result.GetResult<Prisma.$propertiesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Properties.
     * @param {propertiesDeleteManyArgs} args - Arguments to filter Properties to delete.
     * @example
     * // Delete a few Properties
     * const { count } = await prisma.properties.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends propertiesDeleteManyArgs>(args?: SelectSubset<T, propertiesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {propertiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Properties
     * const properties = await prisma.properties.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends propertiesUpdateManyArgs>(args: SelectSubset<T, propertiesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Properties and returns the data updated in the database.
     * @param {propertiesUpdateManyAndReturnArgs} args - Arguments to update many Properties.
     * @example
     * // Update many Properties
     * const properties = await prisma.properties.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Properties and only return the `id`
     * const propertiesWithIdOnly = await prisma.properties.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends propertiesUpdateManyAndReturnArgs>(args: SelectSubset<T, propertiesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$propertiesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Properties.
     * @param {propertiesUpsertArgs} args - Arguments to update or create a Properties.
     * @example
     * // Update or create a Properties
     * const properties = await prisma.properties.upsert({
     *   create: {
     *     // ... data to create a Properties
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Properties we want to update
     *   }
     * })
     */
    upsert<T extends propertiesUpsertArgs>(args: SelectSubset<T, propertiesUpsertArgs<ExtArgs>>): Prisma__propertiesClient<$Result.GetResult<Prisma.$propertiesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {propertiesCountArgs} args - Arguments to filter Properties to count.
     * @example
     * // Count the number of Properties
     * const count = await prisma.properties.count({
     *   where: {
     *     // ... the filter for the Properties we want to count
     *   }
     * })
    **/
    count<T extends propertiesCountArgs>(
      args?: Subset<T, propertiesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertiesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertiesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PropertiesAggregateArgs>(args: Subset<T, PropertiesAggregateArgs>): Prisma.PrismaPromise<GetPropertiesAggregateType<T>>

    /**
     * Group by Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {propertiesGroupByArgs} args - Group by arguments.
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
      T extends propertiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: propertiesGroupByArgs['orderBy'] }
        : { orderBy?: propertiesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, propertiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertiesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the properties model
   */
  readonly fields: propertiesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for properties.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__propertiesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookings<T extends properties$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, properties$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users_properties_approved_byTousers<T extends properties$users_properties_approved_byTousersArgs<ExtArgs> = {}>(args?: Subset<T, properties$users_properties_approved_byTousersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    categories<T extends properties$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, properties$categoriesArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users_properties_manager_idTousers<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    property_images<T extends properties$property_imagesArgs<ExtArgs> = {}>(args?: Subset<T, properties$property_imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$property_imagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rentals<T extends properties$rentalsArgs<ExtArgs> = {}>(args?: Subset<T, properties$rentalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rentalsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the properties model
   */
  interface propertiesFieldRefs {
    readonly id: FieldRef<"properties", 'String'>
    readonly title: FieldRef<"properties", 'String'>
    readonly description: FieldRef<"properties", 'String'>
    readonly address: FieldRef<"properties", 'String'>
    readonly city: FieldRef<"properties", 'String'>
    readonly state: FieldRef<"properties", 'String'>
    readonly pricing_unit: FieldRef<"properties", 'pricing_unit'>
    readonly base_price: FieldRef<"properties", 'Decimal'>
    readonly approval_status: FieldRef<"properties", 'property_approval_status'>
    readonly availability_status: FieldRef<"properties", 'property_availability_status'>
    readonly category_id: FieldRef<"properties", 'String'>
    readonly manager_id: FieldRef<"properties", 'String'>
    readonly approved_by: FieldRef<"properties", 'String'>
    readonly approved_at: FieldRef<"properties", 'DateTime'>
    readonly rejection_reason: FieldRef<"properties", 'String'>
    readonly created_at: FieldRef<"properties", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * properties findUnique
   */
  export type propertiesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the properties
     */
    select?: propertiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the properties
     */
    omit?: propertiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: propertiesInclude<ExtArgs> | null
    /**
     * Filter, which properties to fetch.
     */
    where: propertiesWhereUniqueInput
  }

  /**
   * properties findUniqueOrThrow
   */
  export type propertiesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the properties
     */
    select?: propertiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the properties
     */
    omit?: propertiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: propertiesInclude<ExtArgs> | null
    /**
     * Filter, which properties to fetch.
     */
    where: propertiesWhereUniqueInput
  }

  /**
   * properties findFirst
   */
  export type propertiesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the properties
     */
    select?: propertiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the properties
     */
    omit?: propertiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: propertiesInclude<ExtArgs> | null
    /**
     * Filter, which properties to fetch.
     */
    where?: propertiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of properties to fetch.
     */
    orderBy?: propertiesOrderByWithRelationInput | propertiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for properties.
     */
    cursor?: propertiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of properties.
     */
    distinct?: PropertiesScalarFieldEnum | PropertiesScalarFieldEnum[]
  }

  /**
   * properties findFirstOrThrow
   */
  export type propertiesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the properties
     */
    select?: propertiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the properties
     */
    omit?: propertiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: propertiesInclude<ExtArgs> | null
    /**
     * Filter, which properties to fetch.
     */
    where?: propertiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of properties to fetch.
     */
    orderBy?: propertiesOrderByWithRelationInput | propertiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for properties.
     */
    cursor?: propertiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of properties.
     */
    distinct?: PropertiesScalarFieldEnum | PropertiesScalarFieldEnum[]
  }

  /**
   * properties findMany
   */
  export type propertiesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the properties
     */
    select?: propertiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the properties
     */
    omit?: propertiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: propertiesInclude<ExtArgs> | null
    /**
     * Filter, which properties to fetch.
     */
    where?: propertiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of properties to fetch.
     */
    orderBy?: propertiesOrderByWithRelationInput | propertiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing properties.
     */
    cursor?: propertiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` properties.
     */
    skip?: number
    distinct?: PropertiesScalarFieldEnum | PropertiesScalarFieldEnum[]
  }

  /**
   * properties create
   */
  export type propertiesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the properties
     */
    select?: propertiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the properties
     */
    omit?: propertiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: propertiesInclude<ExtArgs> | null
    /**
     * The data needed to create a properties.
     */
    data: XOR<propertiesCreateInput, propertiesUncheckedCreateInput>
  }

  /**
   * properties createMany
   */
  export type propertiesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many properties.
     */
    data: propertiesCreateManyInput | propertiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * properties createManyAndReturn
   */
  export type propertiesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the properties
     */
    select?: propertiesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the properties
     */
    omit?: propertiesOmit<ExtArgs> | null
    /**
     * The data used to create many properties.
     */
    data: propertiesCreateManyInput | propertiesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: propertiesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * properties update
   */
  export type propertiesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the properties
     */
    select?: propertiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the properties
     */
    omit?: propertiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: propertiesInclude<ExtArgs> | null
    /**
     * The data needed to update a properties.
     */
    data: XOR<propertiesUpdateInput, propertiesUncheckedUpdateInput>
    /**
     * Choose, which properties to update.
     */
    where: propertiesWhereUniqueInput
  }

  /**
   * properties updateMany
   */
  export type propertiesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update properties.
     */
    data: XOR<propertiesUpdateManyMutationInput, propertiesUncheckedUpdateManyInput>
    /**
     * Filter which properties to update
     */
    where?: propertiesWhereInput
    /**
     * Limit how many properties to update.
     */
    limit?: number
  }

  /**
   * properties updateManyAndReturn
   */
  export type propertiesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the properties
     */
    select?: propertiesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the properties
     */
    omit?: propertiesOmit<ExtArgs> | null
    /**
     * The data used to update properties.
     */
    data: XOR<propertiesUpdateManyMutationInput, propertiesUncheckedUpdateManyInput>
    /**
     * Filter which properties to update
     */
    where?: propertiesWhereInput
    /**
     * Limit how many properties to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: propertiesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * properties upsert
   */
  export type propertiesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the properties
     */
    select?: propertiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the properties
     */
    omit?: propertiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: propertiesInclude<ExtArgs> | null
    /**
     * The filter to search for the properties to update in case it exists.
     */
    where: propertiesWhereUniqueInput
    /**
     * In case the properties found by the `where` argument doesn't exist, create a new properties with this data.
     */
    create: XOR<propertiesCreateInput, propertiesUncheckedCreateInput>
    /**
     * In case the properties was found with the provided `where` argument, update it with this data.
     */
    update: XOR<propertiesUpdateInput, propertiesUncheckedUpdateInput>
  }

  /**
   * properties delete
   */
  export type propertiesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the properties
     */
    select?: propertiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the properties
     */
    omit?: propertiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: propertiesInclude<ExtArgs> | null
    /**
     * Filter which properties to delete.
     */
    where: propertiesWhereUniqueInput
  }

  /**
   * properties deleteMany
   */
  export type propertiesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which properties to delete
     */
    where?: propertiesWhereInput
    /**
     * Limit how many properties to delete.
     */
    limit?: number
  }

  /**
   * properties.bookings
   */
  export type properties$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    where?: bookingsWhereInput
    orderBy?: bookingsOrderByWithRelationInput | bookingsOrderByWithRelationInput[]
    cursor?: bookingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * properties.users_properties_approved_byTousers
   */
  export type properties$users_properties_approved_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * properties.categories
   */
  export type properties$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    where?: categoriesWhereInput
  }

  /**
   * properties.property_images
   */
  export type properties$property_imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the property_images
     */
    select?: property_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the property_images
     */
    omit?: property_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: property_imagesInclude<ExtArgs> | null
    where?: property_imagesWhereInput
    orderBy?: property_imagesOrderByWithRelationInput | property_imagesOrderByWithRelationInput[]
    cursor?: property_imagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Property_imagesScalarFieldEnum | Property_imagesScalarFieldEnum[]
  }

  /**
   * properties.rentals
   */
  export type properties$rentalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rentals
     */
    select?: rentalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rentals
     */
    omit?: rentalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rentalsInclude<ExtArgs> | null
    where?: rentalsWhereInput
    orderBy?: rentalsOrderByWithRelationInput | rentalsOrderByWithRelationInput[]
    cursor?: rentalsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RentalsScalarFieldEnum | RentalsScalarFieldEnum[]
  }

  /**
   * properties without action
   */
  export type propertiesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the properties
     */
    select?: propertiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the properties
     */
    omit?: propertiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: propertiesInclude<ExtArgs> | null
  }


  /**
   * Model property_images
   */

  export type AggregateProperty_images = {
    _count: Property_imagesCountAggregateOutputType | null
    _min: Property_imagesMinAggregateOutputType | null
    _max: Property_imagesMaxAggregateOutputType | null
  }

  export type Property_imagesMinAggregateOutputType = {
    id: string | null
    property_id: string | null
    image_url: string | null
    created_at: Date | null
  }

  export type Property_imagesMaxAggregateOutputType = {
    id: string | null
    property_id: string | null
    image_url: string | null
    created_at: Date | null
  }

  export type Property_imagesCountAggregateOutputType = {
    id: number
    property_id: number
    image_url: number
    created_at: number
    _all: number
  }


  export type Property_imagesMinAggregateInputType = {
    id?: true
    property_id?: true
    image_url?: true
    created_at?: true
  }

  export type Property_imagesMaxAggregateInputType = {
    id?: true
    property_id?: true
    image_url?: true
    created_at?: true
  }

  export type Property_imagesCountAggregateInputType = {
    id?: true
    property_id?: true
    image_url?: true
    created_at?: true
    _all?: true
  }

  export type Property_imagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which property_images to aggregate.
     */
    where?: property_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of property_images to fetch.
     */
    orderBy?: property_imagesOrderByWithRelationInput | property_imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: property_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` property_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` property_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned property_images
    **/
    _count?: true | Property_imagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Property_imagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Property_imagesMaxAggregateInputType
  }

  export type GetProperty_imagesAggregateType<T extends Property_imagesAggregateArgs> = {
        [P in keyof T & keyof AggregateProperty_images]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProperty_images[P]>
      : GetScalarType<T[P], AggregateProperty_images[P]>
  }




  export type property_imagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: property_imagesWhereInput
    orderBy?: property_imagesOrderByWithAggregationInput | property_imagesOrderByWithAggregationInput[]
    by: Property_imagesScalarFieldEnum[] | Property_imagesScalarFieldEnum
    having?: property_imagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Property_imagesCountAggregateInputType | true
    _min?: Property_imagesMinAggregateInputType
    _max?: Property_imagesMaxAggregateInputType
  }

  export type Property_imagesGroupByOutputType = {
    id: string
    property_id: string
    image_url: string
    created_at: Date
    _count: Property_imagesCountAggregateOutputType | null
    _min: Property_imagesMinAggregateOutputType | null
    _max: Property_imagesMaxAggregateOutputType | null
  }

  type GetProperty_imagesGroupByPayload<T extends property_imagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Property_imagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Property_imagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Property_imagesGroupByOutputType[P]>
            : GetScalarType<T[P], Property_imagesGroupByOutputType[P]>
        }
      >
    >


  export type property_imagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    property_id?: boolean
    image_url?: boolean
    created_at?: boolean
    properties?: boolean | propertiesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["property_images"]>

  export type property_imagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    property_id?: boolean
    image_url?: boolean
    created_at?: boolean
    properties?: boolean | propertiesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["property_images"]>

  export type property_imagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    property_id?: boolean
    image_url?: boolean
    created_at?: boolean
    properties?: boolean | propertiesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["property_images"]>

  export type property_imagesSelectScalar = {
    id?: boolean
    property_id?: boolean
    image_url?: boolean
    created_at?: boolean
  }

  export type property_imagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "property_id" | "image_url" | "created_at", ExtArgs["result"]["property_images"]>
  export type property_imagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    properties?: boolean | propertiesDefaultArgs<ExtArgs>
  }
  export type property_imagesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    properties?: boolean | propertiesDefaultArgs<ExtArgs>
  }
  export type property_imagesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    properties?: boolean | propertiesDefaultArgs<ExtArgs>
  }

  export type $property_imagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "property_images"
    objects: {
      properties: Prisma.$propertiesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      property_id: string
      image_url: string
      created_at: Date
    }, ExtArgs["result"]["property_images"]>
    composites: {}
  }

  type property_imagesGetPayload<S extends boolean | null | undefined | property_imagesDefaultArgs> = $Result.GetResult<Prisma.$property_imagesPayload, S>

  type property_imagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<property_imagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Property_imagesCountAggregateInputType | true
    }

  export interface property_imagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['property_images'], meta: { name: 'property_images' } }
    /**
     * Find zero or one Property_images that matches the filter.
     * @param {property_imagesFindUniqueArgs} args - Arguments to find a Property_images
     * @example
     * // Get one Property_images
     * const property_images = await prisma.property_images.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends property_imagesFindUniqueArgs>(args: SelectSubset<T, property_imagesFindUniqueArgs<ExtArgs>>): Prisma__property_imagesClient<$Result.GetResult<Prisma.$property_imagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Property_images that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {property_imagesFindUniqueOrThrowArgs} args - Arguments to find a Property_images
     * @example
     * // Get one Property_images
     * const property_images = await prisma.property_images.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends property_imagesFindUniqueOrThrowArgs>(args: SelectSubset<T, property_imagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__property_imagesClient<$Result.GetResult<Prisma.$property_imagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Property_images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {property_imagesFindFirstArgs} args - Arguments to find a Property_images
     * @example
     * // Get one Property_images
     * const property_images = await prisma.property_images.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends property_imagesFindFirstArgs>(args?: SelectSubset<T, property_imagesFindFirstArgs<ExtArgs>>): Prisma__property_imagesClient<$Result.GetResult<Prisma.$property_imagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Property_images that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {property_imagesFindFirstOrThrowArgs} args - Arguments to find a Property_images
     * @example
     * // Get one Property_images
     * const property_images = await prisma.property_images.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends property_imagesFindFirstOrThrowArgs>(args?: SelectSubset<T, property_imagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__property_imagesClient<$Result.GetResult<Prisma.$property_imagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Property_images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {property_imagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Property_images
     * const property_images = await prisma.property_images.findMany()
     * 
     * // Get first 10 Property_images
     * const property_images = await prisma.property_images.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const property_imagesWithIdOnly = await prisma.property_images.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends property_imagesFindManyArgs>(args?: SelectSubset<T, property_imagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$property_imagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Property_images.
     * @param {property_imagesCreateArgs} args - Arguments to create a Property_images.
     * @example
     * // Create one Property_images
     * const Property_images = await prisma.property_images.create({
     *   data: {
     *     // ... data to create a Property_images
     *   }
     * })
     * 
     */
    create<T extends property_imagesCreateArgs>(args: SelectSubset<T, property_imagesCreateArgs<ExtArgs>>): Prisma__property_imagesClient<$Result.GetResult<Prisma.$property_imagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Property_images.
     * @param {property_imagesCreateManyArgs} args - Arguments to create many Property_images.
     * @example
     * // Create many Property_images
     * const property_images = await prisma.property_images.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends property_imagesCreateManyArgs>(args?: SelectSubset<T, property_imagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Property_images and returns the data saved in the database.
     * @param {property_imagesCreateManyAndReturnArgs} args - Arguments to create many Property_images.
     * @example
     * // Create many Property_images
     * const property_images = await prisma.property_images.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Property_images and only return the `id`
     * const property_imagesWithIdOnly = await prisma.property_images.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends property_imagesCreateManyAndReturnArgs>(args?: SelectSubset<T, property_imagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$property_imagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Property_images.
     * @param {property_imagesDeleteArgs} args - Arguments to delete one Property_images.
     * @example
     * // Delete one Property_images
     * const Property_images = await prisma.property_images.delete({
     *   where: {
     *     // ... filter to delete one Property_images
     *   }
     * })
     * 
     */
    delete<T extends property_imagesDeleteArgs>(args: SelectSubset<T, property_imagesDeleteArgs<ExtArgs>>): Prisma__property_imagesClient<$Result.GetResult<Prisma.$property_imagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Property_images.
     * @param {property_imagesUpdateArgs} args - Arguments to update one Property_images.
     * @example
     * // Update one Property_images
     * const property_images = await prisma.property_images.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends property_imagesUpdateArgs>(args: SelectSubset<T, property_imagesUpdateArgs<ExtArgs>>): Prisma__property_imagesClient<$Result.GetResult<Prisma.$property_imagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Property_images.
     * @param {property_imagesDeleteManyArgs} args - Arguments to filter Property_images to delete.
     * @example
     * // Delete a few Property_images
     * const { count } = await prisma.property_images.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends property_imagesDeleteManyArgs>(args?: SelectSubset<T, property_imagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Property_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {property_imagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Property_images
     * const property_images = await prisma.property_images.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends property_imagesUpdateManyArgs>(args: SelectSubset<T, property_imagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Property_images and returns the data updated in the database.
     * @param {property_imagesUpdateManyAndReturnArgs} args - Arguments to update many Property_images.
     * @example
     * // Update many Property_images
     * const property_images = await prisma.property_images.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Property_images and only return the `id`
     * const property_imagesWithIdOnly = await prisma.property_images.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends property_imagesUpdateManyAndReturnArgs>(args: SelectSubset<T, property_imagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$property_imagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Property_images.
     * @param {property_imagesUpsertArgs} args - Arguments to update or create a Property_images.
     * @example
     * // Update or create a Property_images
     * const property_images = await prisma.property_images.upsert({
     *   create: {
     *     // ... data to create a Property_images
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Property_images we want to update
     *   }
     * })
     */
    upsert<T extends property_imagesUpsertArgs>(args: SelectSubset<T, property_imagesUpsertArgs<ExtArgs>>): Prisma__property_imagesClient<$Result.GetResult<Prisma.$property_imagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Property_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {property_imagesCountArgs} args - Arguments to filter Property_images to count.
     * @example
     * // Count the number of Property_images
     * const count = await prisma.property_images.count({
     *   where: {
     *     // ... the filter for the Property_images we want to count
     *   }
     * })
    **/
    count<T extends property_imagesCountArgs>(
      args?: Subset<T, property_imagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Property_imagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Property_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Property_imagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Property_imagesAggregateArgs>(args: Subset<T, Property_imagesAggregateArgs>): Prisma.PrismaPromise<GetProperty_imagesAggregateType<T>>

    /**
     * Group by Property_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {property_imagesGroupByArgs} args - Group by arguments.
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
      T extends property_imagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: property_imagesGroupByArgs['orderBy'] }
        : { orderBy?: property_imagesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, property_imagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProperty_imagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the property_images model
   */
  readonly fields: property_imagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for property_images.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__property_imagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    properties<T extends propertiesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, propertiesDefaultArgs<ExtArgs>>): Prisma__propertiesClient<$Result.GetResult<Prisma.$propertiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the property_images model
   */
  interface property_imagesFieldRefs {
    readonly id: FieldRef<"property_images", 'String'>
    readonly property_id: FieldRef<"property_images", 'String'>
    readonly image_url: FieldRef<"property_images", 'String'>
    readonly created_at: FieldRef<"property_images", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * property_images findUnique
   */
  export type property_imagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the property_images
     */
    select?: property_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the property_images
     */
    omit?: property_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: property_imagesInclude<ExtArgs> | null
    /**
     * Filter, which property_images to fetch.
     */
    where: property_imagesWhereUniqueInput
  }

  /**
   * property_images findUniqueOrThrow
   */
  export type property_imagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the property_images
     */
    select?: property_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the property_images
     */
    omit?: property_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: property_imagesInclude<ExtArgs> | null
    /**
     * Filter, which property_images to fetch.
     */
    where: property_imagesWhereUniqueInput
  }

  /**
   * property_images findFirst
   */
  export type property_imagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the property_images
     */
    select?: property_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the property_images
     */
    omit?: property_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: property_imagesInclude<ExtArgs> | null
    /**
     * Filter, which property_images to fetch.
     */
    where?: property_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of property_images to fetch.
     */
    orderBy?: property_imagesOrderByWithRelationInput | property_imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for property_images.
     */
    cursor?: property_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` property_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` property_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of property_images.
     */
    distinct?: Property_imagesScalarFieldEnum | Property_imagesScalarFieldEnum[]
  }

  /**
   * property_images findFirstOrThrow
   */
  export type property_imagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the property_images
     */
    select?: property_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the property_images
     */
    omit?: property_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: property_imagesInclude<ExtArgs> | null
    /**
     * Filter, which property_images to fetch.
     */
    where?: property_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of property_images to fetch.
     */
    orderBy?: property_imagesOrderByWithRelationInput | property_imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for property_images.
     */
    cursor?: property_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` property_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` property_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of property_images.
     */
    distinct?: Property_imagesScalarFieldEnum | Property_imagesScalarFieldEnum[]
  }

  /**
   * property_images findMany
   */
  export type property_imagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the property_images
     */
    select?: property_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the property_images
     */
    omit?: property_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: property_imagesInclude<ExtArgs> | null
    /**
     * Filter, which property_images to fetch.
     */
    where?: property_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of property_images to fetch.
     */
    orderBy?: property_imagesOrderByWithRelationInput | property_imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing property_images.
     */
    cursor?: property_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` property_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` property_images.
     */
    skip?: number
    distinct?: Property_imagesScalarFieldEnum | Property_imagesScalarFieldEnum[]
  }

  /**
   * property_images create
   */
  export type property_imagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the property_images
     */
    select?: property_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the property_images
     */
    omit?: property_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: property_imagesInclude<ExtArgs> | null
    /**
     * The data needed to create a property_images.
     */
    data: XOR<property_imagesCreateInput, property_imagesUncheckedCreateInput>
  }

  /**
   * property_images createMany
   */
  export type property_imagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many property_images.
     */
    data: property_imagesCreateManyInput | property_imagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * property_images createManyAndReturn
   */
  export type property_imagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the property_images
     */
    select?: property_imagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the property_images
     */
    omit?: property_imagesOmit<ExtArgs> | null
    /**
     * The data used to create many property_images.
     */
    data: property_imagesCreateManyInput | property_imagesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: property_imagesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * property_images update
   */
  export type property_imagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the property_images
     */
    select?: property_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the property_images
     */
    omit?: property_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: property_imagesInclude<ExtArgs> | null
    /**
     * The data needed to update a property_images.
     */
    data: XOR<property_imagesUpdateInput, property_imagesUncheckedUpdateInput>
    /**
     * Choose, which property_images to update.
     */
    where: property_imagesWhereUniqueInput
  }

  /**
   * property_images updateMany
   */
  export type property_imagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update property_images.
     */
    data: XOR<property_imagesUpdateManyMutationInput, property_imagesUncheckedUpdateManyInput>
    /**
     * Filter which property_images to update
     */
    where?: property_imagesWhereInput
    /**
     * Limit how many property_images to update.
     */
    limit?: number
  }

  /**
   * property_images updateManyAndReturn
   */
  export type property_imagesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the property_images
     */
    select?: property_imagesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the property_images
     */
    omit?: property_imagesOmit<ExtArgs> | null
    /**
     * The data used to update property_images.
     */
    data: XOR<property_imagesUpdateManyMutationInput, property_imagesUncheckedUpdateManyInput>
    /**
     * Filter which property_images to update
     */
    where?: property_imagesWhereInput
    /**
     * Limit how many property_images to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: property_imagesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * property_images upsert
   */
  export type property_imagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the property_images
     */
    select?: property_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the property_images
     */
    omit?: property_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: property_imagesInclude<ExtArgs> | null
    /**
     * The filter to search for the property_images to update in case it exists.
     */
    where: property_imagesWhereUniqueInput
    /**
     * In case the property_images found by the `where` argument doesn't exist, create a new property_images with this data.
     */
    create: XOR<property_imagesCreateInput, property_imagesUncheckedCreateInput>
    /**
     * In case the property_images was found with the provided `where` argument, update it with this data.
     */
    update: XOR<property_imagesUpdateInput, property_imagesUncheckedUpdateInput>
  }

  /**
   * property_images delete
   */
  export type property_imagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the property_images
     */
    select?: property_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the property_images
     */
    omit?: property_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: property_imagesInclude<ExtArgs> | null
    /**
     * Filter which property_images to delete.
     */
    where: property_imagesWhereUniqueInput
  }

  /**
   * property_images deleteMany
   */
  export type property_imagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which property_images to delete
     */
    where?: property_imagesWhereInput
    /**
     * Limit how many property_images to delete.
     */
    limit?: number
  }

  /**
   * property_images without action
   */
  export type property_imagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the property_images
     */
    select?: property_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the property_images
     */
    omit?: property_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: property_imagesInclude<ExtArgs> | null
  }


  /**
   * Model property_manager_applications
   */

  export type AggregateProperty_manager_applications = {
    _count: Property_manager_applicationsCountAggregateOutputType | null
    _min: Property_manager_applicationsMinAggregateOutputType | null
    _max: Property_manager_applicationsMaxAggregateOutputType | null
  }

  export type Property_manager_applicationsMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    reason: string | null
    status: $Enums.manager_application_status | null
    reviewed_by: string | null
    reviewed_at: Date | null
    created_at: Date | null
  }

  export type Property_manager_applicationsMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    reason: string | null
    status: $Enums.manager_application_status | null
    reviewed_by: string | null
    reviewed_at: Date | null
    created_at: Date | null
  }

  export type Property_manager_applicationsCountAggregateOutputType = {
    id: number
    user_id: number
    reason: number
    status: number
    reviewed_by: number
    reviewed_at: number
    created_at: number
    _all: number
  }


  export type Property_manager_applicationsMinAggregateInputType = {
    id?: true
    user_id?: true
    reason?: true
    status?: true
    reviewed_by?: true
    reviewed_at?: true
    created_at?: true
  }

  export type Property_manager_applicationsMaxAggregateInputType = {
    id?: true
    user_id?: true
    reason?: true
    status?: true
    reviewed_by?: true
    reviewed_at?: true
    created_at?: true
  }

  export type Property_manager_applicationsCountAggregateInputType = {
    id?: true
    user_id?: true
    reason?: true
    status?: true
    reviewed_by?: true
    reviewed_at?: true
    created_at?: true
    _all?: true
  }

  export type Property_manager_applicationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which property_manager_applications to aggregate.
     */
    where?: property_manager_applicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of property_manager_applications to fetch.
     */
    orderBy?: property_manager_applicationsOrderByWithRelationInput | property_manager_applicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: property_manager_applicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` property_manager_applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` property_manager_applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned property_manager_applications
    **/
    _count?: true | Property_manager_applicationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Property_manager_applicationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Property_manager_applicationsMaxAggregateInputType
  }

  export type GetProperty_manager_applicationsAggregateType<T extends Property_manager_applicationsAggregateArgs> = {
        [P in keyof T & keyof AggregateProperty_manager_applications]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProperty_manager_applications[P]>
      : GetScalarType<T[P], AggregateProperty_manager_applications[P]>
  }




  export type property_manager_applicationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: property_manager_applicationsWhereInput
    orderBy?: property_manager_applicationsOrderByWithAggregationInput | property_manager_applicationsOrderByWithAggregationInput[]
    by: Property_manager_applicationsScalarFieldEnum[] | Property_manager_applicationsScalarFieldEnum
    having?: property_manager_applicationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Property_manager_applicationsCountAggregateInputType | true
    _min?: Property_manager_applicationsMinAggregateInputType
    _max?: Property_manager_applicationsMaxAggregateInputType
  }

  export type Property_manager_applicationsGroupByOutputType = {
    id: string
    user_id: string
    reason: string
    status: $Enums.manager_application_status
    reviewed_by: string | null
    reviewed_at: Date | null
    created_at: Date
    _count: Property_manager_applicationsCountAggregateOutputType | null
    _min: Property_manager_applicationsMinAggregateOutputType | null
    _max: Property_manager_applicationsMaxAggregateOutputType | null
  }

  type GetProperty_manager_applicationsGroupByPayload<T extends property_manager_applicationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Property_manager_applicationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Property_manager_applicationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Property_manager_applicationsGroupByOutputType[P]>
            : GetScalarType<T[P], Property_manager_applicationsGroupByOutputType[P]>
        }
      >
    >


  export type property_manager_applicationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    reason?: boolean
    status?: boolean
    reviewed_by?: boolean
    reviewed_at?: boolean
    created_at?: boolean
    users_property_manager_applications_reviewed_byTousers?: boolean | property_manager_applications$users_property_manager_applications_reviewed_byTousersArgs<ExtArgs>
    users_property_manager_applications_user_idTousers?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["property_manager_applications"]>

  export type property_manager_applicationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    reason?: boolean
    status?: boolean
    reviewed_by?: boolean
    reviewed_at?: boolean
    created_at?: boolean
    users_property_manager_applications_reviewed_byTousers?: boolean | property_manager_applications$users_property_manager_applications_reviewed_byTousersArgs<ExtArgs>
    users_property_manager_applications_user_idTousers?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["property_manager_applications"]>

  export type property_manager_applicationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    reason?: boolean
    status?: boolean
    reviewed_by?: boolean
    reviewed_at?: boolean
    created_at?: boolean
    users_property_manager_applications_reviewed_byTousers?: boolean | property_manager_applications$users_property_manager_applications_reviewed_byTousersArgs<ExtArgs>
    users_property_manager_applications_user_idTousers?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["property_manager_applications"]>

  export type property_manager_applicationsSelectScalar = {
    id?: boolean
    user_id?: boolean
    reason?: boolean
    status?: boolean
    reviewed_by?: boolean
    reviewed_at?: boolean
    created_at?: boolean
  }

  export type property_manager_applicationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "reason" | "status" | "reviewed_by" | "reviewed_at" | "created_at", ExtArgs["result"]["property_manager_applications"]>
  export type property_manager_applicationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_property_manager_applications_reviewed_byTousers?: boolean | property_manager_applications$users_property_manager_applications_reviewed_byTousersArgs<ExtArgs>
    users_property_manager_applications_user_idTousers?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type property_manager_applicationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_property_manager_applications_reviewed_byTousers?: boolean | property_manager_applications$users_property_manager_applications_reviewed_byTousersArgs<ExtArgs>
    users_property_manager_applications_user_idTousers?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type property_manager_applicationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_property_manager_applications_reviewed_byTousers?: boolean | property_manager_applications$users_property_manager_applications_reviewed_byTousersArgs<ExtArgs>
    users_property_manager_applications_user_idTousers?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $property_manager_applicationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "property_manager_applications"
    objects: {
      users_property_manager_applications_reviewed_byTousers: Prisma.$usersPayload<ExtArgs> | null
      users_property_manager_applications_user_idTousers: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      reason: string
      status: $Enums.manager_application_status
      reviewed_by: string | null
      reviewed_at: Date | null
      created_at: Date
    }, ExtArgs["result"]["property_manager_applications"]>
    composites: {}
  }

  type property_manager_applicationsGetPayload<S extends boolean | null | undefined | property_manager_applicationsDefaultArgs> = $Result.GetResult<Prisma.$property_manager_applicationsPayload, S>

  type property_manager_applicationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<property_manager_applicationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Property_manager_applicationsCountAggregateInputType | true
    }

  export interface property_manager_applicationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['property_manager_applications'], meta: { name: 'property_manager_applications' } }
    /**
     * Find zero or one Property_manager_applications that matches the filter.
     * @param {property_manager_applicationsFindUniqueArgs} args - Arguments to find a Property_manager_applications
     * @example
     * // Get one Property_manager_applications
     * const property_manager_applications = await prisma.property_manager_applications.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends property_manager_applicationsFindUniqueArgs>(args: SelectSubset<T, property_manager_applicationsFindUniqueArgs<ExtArgs>>): Prisma__property_manager_applicationsClient<$Result.GetResult<Prisma.$property_manager_applicationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Property_manager_applications that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {property_manager_applicationsFindUniqueOrThrowArgs} args - Arguments to find a Property_manager_applications
     * @example
     * // Get one Property_manager_applications
     * const property_manager_applications = await prisma.property_manager_applications.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends property_manager_applicationsFindUniqueOrThrowArgs>(args: SelectSubset<T, property_manager_applicationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__property_manager_applicationsClient<$Result.GetResult<Prisma.$property_manager_applicationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Property_manager_applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {property_manager_applicationsFindFirstArgs} args - Arguments to find a Property_manager_applications
     * @example
     * // Get one Property_manager_applications
     * const property_manager_applications = await prisma.property_manager_applications.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends property_manager_applicationsFindFirstArgs>(args?: SelectSubset<T, property_manager_applicationsFindFirstArgs<ExtArgs>>): Prisma__property_manager_applicationsClient<$Result.GetResult<Prisma.$property_manager_applicationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Property_manager_applications that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {property_manager_applicationsFindFirstOrThrowArgs} args - Arguments to find a Property_manager_applications
     * @example
     * // Get one Property_manager_applications
     * const property_manager_applications = await prisma.property_manager_applications.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends property_manager_applicationsFindFirstOrThrowArgs>(args?: SelectSubset<T, property_manager_applicationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__property_manager_applicationsClient<$Result.GetResult<Prisma.$property_manager_applicationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Property_manager_applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {property_manager_applicationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Property_manager_applications
     * const property_manager_applications = await prisma.property_manager_applications.findMany()
     * 
     * // Get first 10 Property_manager_applications
     * const property_manager_applications = await prisma.property_manager_applications.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const property_manager_applicationsWithIdOnly = await prisma.property_manager_applications.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends property_manager_applicationsFindManyArgs>(args?: SelectSubset<T, property_manager_applicationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$property_manager_applicationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Property_manager_applications.
     * @param {property_manager_applicationsCreateArgs} args - Arguments to create a Property_manager_applications.
     * @example
     * // Create one Property_manager_applications
     * const Property_manager_applications = await prisma.property_manager_applications.create({
     *   data: {
     *     // ... data to create a Property_manager_applications
     *   }
     * })
     * 
     */
    create<T extends property_manager_applicationsCreateArgs>(args: SelectSubset<T, property_manager_applicationsCreateArgs<ExtArgs>>): Prisma__property_manager_applicationsClient<$Result.GetResult<Prisma.$property_manager_applicationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Property_manager_applications.
     * @param {property_manager_applicationsCreateManyArgs} args - Arguments to create many Property_manager_applications.
     * @example
     * // Create many Property_manager_applications
     * const property_manager_applications = await prisma.property_manager_applications.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends property_manager_applicationsCreateManyArgs>(args?: SelectSubset<T, property_manager_applicationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Property_manager_applications and returns the data saved in the database.
     * @param {property_manager_applicationsCreateManyAndReturnArgs} args - Arguments to create many Property_manager_applications.
     * @example
     * // Create many Property_manager_applications
     * const property_manager_applications = await prisma.property_manager_applications.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Property_manager_applications and only return the `id`
     * const property_manager_applicationsWithIdOnly = await prisma.property_manager_applications.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends property_manager_applicationsCreateManyAndReturnArgs>(args?: SelectSubset<T, property_manager_applicationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$property_manager_applicationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Property_manager_applications.
     * @param {property_manager_applicationsDeleteArgs} args - Arguments to delete one Property_manager_applications.
     * @example
     * // Delete one Property_manager_applications
     * const Property_manager_applications = await prisma.property_manager_applications.delete({
     *   where: {
     *     // ... filter to delete one Property_manager_applications
     *   }
     * })
     * 
     */
    delete<T extends property_manager_applicationsDeleteArgs>(args: SelectSubset<T, property_manager_applicationsDeleteArgs<ExtArgs>>): Prisma__property_manager_applicationsClient<$Result.GetResult<Prisma.$property_manager_applicationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Property_manager_applications.
     * @param {property_manager_applicationsUpdateArgs} args - Arguments to update one Property_manager_applications.
     * @example
     * // Update one Property_manager_applications
     * const property_manager_applications = await prisma.property_manager_applications.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends property_manager_applicationsUpdateArgs>(args: SelectSubset<T, property_manager_applicationsUpdateArgs<ExtArgs>>): Prisma__property_manager_applicationsClient<$Result.GetResult<Prisma.$property_manager_applicationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Property_manager_applications.
     * @param {property_manager_applicationsDeleteManyArgs} args - Arguments to filter Property_manager_applications to delete.
     * @example
     * // Delete a few Property_manager_applications
     * const { count } = await prisma.property_manager_applications.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends property_manager_applicationsDeleteManyArgs>(args?: SelectSubset<T, property_manager_applicationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Property_manager_applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {property_manager_applicationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Property_manager_applications
     * const property_manager_applications = await prisma.property_manager_applications.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends property_manager_applicationsUpdateManyArgs>(args: SelectSubset<T, property_manager_applicationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Property_manager_applications and returns the data updated in the database.
     * @param {property_manager_applicationsUpdateManyAndReturnArgs} args - Arguments to update many Property_manager_applications.
     * @example
     * // Update many Property_manager_applications
     * const property_manager_applications = await prisma.property_manager_applications.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Property_manager_applications and only return the `id`
     * const property_manager_applicationsWithIdOnly = await prisma.property_manager_applications.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends property_manager_applicationsUpdateManyAndReturnArgs>(args: SelectSubset<T, property_manager_applicationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$property_manager_applicationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Property_manager_applications.
     * @param {property_manager_applicationsUpsertArgs} args - Arguments to update or create a Property_manager_applications.
     * @example
     * // Update or create a Property_manager_applications
     * const property_manager_applications = await prisma.property_manager_applications.upsert({
     *   create: {
     *     // ... data to create a Property_manager_applications
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Property_manager_applications we want to update
     *   }
     * })
     */
    upsert<T extends property_manager_applicationsUpsertArgs>(args: SelectSubset<T, property_manager_applicationsUpsertArgs<ExtArgs>>): Prisma__property_manager_applicationsClient<$Result.GetResult<Prisma.$property_manager_applicationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Property_manager_applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {property_manager_applicationsCountArgs} args - Arguments to filter Property_manager_applications to count.
     * @example
     * // Count the number of Property_manager_applications
     * const count = await prisma.property_manager_applications.count({
     *   where: {
     *     // ... the filter for the Property_manager_applications we want to count
     *   }
     * })
    **/
    count<T extends property_manager_applicationsCountArgs>(
      args?: Subset<T, property_manager_applicationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Property_manager_applicationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Property_manager_applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Property_manager_applicationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Property_manager_applicationsAggregateArgs>(args: Subset<T, Property_manager_applicationsAggregateArgs>): Prisma.PrismaPromise<GetProperty_manager_applicationsAggregateType<T>>

    /**
     * Group by Property_manager_applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {property_manager_applicationsGroupByArgs} args - Group by arguments.
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
      T extends property_manager_applicationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: property_manager_applicationsGroupByArgs['orderBy'] }
        : { orderBy?: property_manager_applicationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, property_manager_applicationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProperty_manager_applicationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the property_manager_applications model
   */
  readonly fields: property_manager_applicationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for property_manager_applications.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__property_manager_applicationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users_property_manager_applications_reviewed_byTousers<T extends property_manager_applications$users_property_manager_applications_reviewed_byTousersArgs<ExtArgs> = {}>(args?: Subset<T, property_manager_applications$users_property_manager_applications_reviewed_byTousersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users_property_manager_applications_user_idTousers<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the property_manager_applications model
   */
  interface property_manager_applicationsFieldRefs {
    readonly id: FieldRef<"property_manager_applications", 'String'>
    readonly user_id: FieldRef<"property_manager_applications", 'String'>
    readonly reason: FieldRef<"property_manager_applications", 'String'>
    readonly status: FieldRef<"property_manager_applications", 'manager_application_status'>
    readonly reviewed_by: FieldRef<"property_manager_applications", 'String'>
    readonly reviewed_at: FieldRef<"property_manager_applications", 'DateTime'>
    readonly created_at: FieldRef<"property_manager_applications", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * property_manager_applications findUnique
   */
  export type property_manager_applicationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the property_manager_applications
     */
    select?: property_manager_applicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the property_manager_applications
     */
    omit?: property_manager_applicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: property_manager_applicationsInclude<ExtArgs> | null
    /**
     * Filter, which property_manager_applications to fetch.
     */
    where: property_manager_applicationsWhereUniqueInput
  }

  /**
   * property_manager_applications findUniqueOrThrow
   */
  export type property_manager_applicationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the property_manager_applications
     */
    select?: property_manager_applicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the property_manager_applications
     */
    omit?: property_manager_applicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: property_manager_applicationsInclude<ExtArgs> | null
    /**
     * Filter, which property_manager_applications to fetch.
     */
    where: property_manager_applicationsWhereUniqueInput
  }

  /**
   * property_manager_applications findFirst
   */
  export type property_manager_applicationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the property_manager_applications
     */
    select?: property_manager_applicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the property_manager_applications
     */
    omit?: property_manager_applicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: property_manager_applicationsInclude<ExtArgs> | null
    /**
     * Filter, which property_manager_applications to fetch.
     */
    where?: property_manager_applicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of property_manager_applications to fetch.
     */
    orderBy?: property_manager_applicationsOrderByWithRelationInput | property_manager_applicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for property_manager_applications.
     */
    cursor?: property_manager_applicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` property_manager_applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` property_manager_applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of property_manager_applications.
     */
    distinct?: Property_manager_applicationsScalarFieldEnum | Property_manager_applicationsScalarFieldEnum[]
  }

  /**
   * property_manager_applications findFirstOrThrow
   */
  export type property_manager_applicationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the property_manager_applications
     */
    select?: property_manager_applicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the property_manager_applications
     */
    omit?: property_manager_applicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: property_manager_applicationsInclude<ExtArgs> | null
    /**
     * Filter, which property_manager_applications to fetch.
     */
    where?: property_manager_applicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of property_manager_applications to fetch.
     */
    orderBy?: property_manager_applicationsOrderByWithRelationInput | property_manager_applicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for property_manager_applications.
     */
    cursor?: property_manager_applicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` property_manager_applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` property_manager_applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of property_manager_applications.
     */
    distinct?: Property_manager_applicationsScalarFieldEnum | Property_manager_applicationsScalarFieldEnum[]
  }

  /**
   * property_manager_applications findMany
   */
  export type property_manager_applicationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the property_manager_applications
     */
    select?: property_manager_applicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the property_manager_applications
     */
    omit?: property_manager_applicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: property_manager_applicationsInclude<ExtArgs> | null
    /**
     * Filter, which property_manager_applications to fetch.
     */
    where?: property_manager_applicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of property_manager_applications to fetch.
     */
    orderBy?: property_manager_applicationsOrderByWithRelationInput | property_manager_applicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing property_manager_applications.
     */
    cursor?: property_manager_applicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` property_manager_applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` property_manager_applications.
     */
    skip?: number
    distinct?: Property_manager_applicationsScalarFieldEnum | Property_manager_applicationsScalarFieldEnum[]
  }

  /**
   * property_manager_applications create
   */
  export type property_manager_applicationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the property_manager_applications
     */
    select?: property_manager_applicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the property_manager_applications
     */
    omit?: property_manager_applicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: property_manager_applicationsInclude<ExtArgs> | null
    /**
     * The data needed to create a property_manager_applications.
     */
    data: XOR<property_manager_applicationsCreateInput, property_manager_applicationsUncheckedCreateInput>
  }

  /**
   * property_manager_applications createMany
   */
  export type property_manager_applicationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many property_manager_applications.
     */
    data: property_manager_applicationsCreateManyInput | property_manager_applicationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * property_manager_applications createManyAndReturn
   */
  export type property_manager_applicationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the property_manager_applications
     */
    select?: property_manager_applicationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the property_manager_applications
     */
    omit?: property_manager_applicationsOmit<ExtArgs> | null
    /**
     * The data used to create many property_manager_applications.
     */
    data: property_manager_applicationsCreateManyInput | property_manager_applicationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: property_manager_applicationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * property_manager_applications update
   */
  export type property_manager_applicationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the property_manager_applications
     */
    select?: property_manager_applicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the property_manager_applications
     */
    omit?: property_manager_applicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: property_manager_applicationsInclude<ExtArgs> | null
    /**
     * The data needed to update a property_manager_applications.
     */
    data: XOR<property_manager_applicationsUpdateInput, property_manager_applicationsUncheckedUpdateInput>
    /**
     * Choose, which property_manager_applications to update.
     */
    where: property_manager_applicationsWhereUniqueInput
  }

  /**
   * property_manager_applications updateMany
   */
  export type property_manager_applicationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update property_manager_applications.
     */
    data: XOR<property_manager_applicationsUpdateManyMutationInput, property_manager_applicationsUncheckedUpdateManyInput>
    /**
     * Filter which property_manager_applications to update
     */
    where?: property_manager_applicationsWhereInput
    /**
     * Limit how many property_manager_applications to update.
     */
    limit?: number
  }

  /**
   * property_manager_applications updateManyAndReturn
   */
  export type property_manager_applicationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the property_manager_applications
     */
    select?: property_manager_applicationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the property_manager_applications
     */
    omit?: property_manager_applicationsOmit<ExtArgs> | null
    /**
     * The data used to update property_manager_applications.
     */
    data: XOR<property_manager_applicationsUpdateManyMutationInput, property_manager_applicationsUncheckedUpdateManyInput>
    /**
     * Filter which property_manager_applications to update
     */
    where?: property_manager_applicationsWhereInput
    /**
     * Limit how many property_manager_applications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: property_manager_applicationsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * property_manager_applications upsert
   */
  export type property_manager_applicationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the property_manager_applications
     */
    select?: property_manager_applicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the property_manager_applications
     */
    omit?: property_manager_applicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: property_manager_applicationsInclude<ExtArgs> | null
    /**
     * The filter to search for the property_manager_applications to update in case it exists.
     */
    where: property_manager_applicationsWhereUniqueInput
    /**
     * In case the property_manager_applications found by the `where` argument doesn't exist, create a new property_manager_applications with this data.
     */
    create: XOR<property_manager_applicationsCreateInput, property_manager_applicationsUncheckedCreateInput>
    /**
     * In case the property_manager_applications was found with the provided `where` argument, update it with this data.
     */
    update: XOR<property_manager_applicationsUpdateInput, property_manager_applicationsUncheckedUpdateInput>
  }

  /**
   * property_manager_applications delete
   */
  export type property_manager_applicationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the property_manager_applications
     */
    select?: property_manager_applicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the property_manager_applications
     */
    omit?: property_manager_applicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: property_manager_applicationsInclude<ExtArgs> | null
    /**
     * Filter which property_manager_applications to delete.
     */
    where: property_manager_applicationsWhereUniqueInput
  }

  /**
   * property_manager_applications deleteMany
   */
  export type property_manager_applicationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which property_manager_applications to delete
     */
    where?: property_manager_applicationsWhereInput
    /**
     * Limit how many property_manager_applications to delete.
     */
    limit?: number
  }

  /**
   * property_manager_applications.users_property_manager_applications_reviewed_byTousers
   */
  export type property_manager_applications$users_property_manager_applications_reviewed_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * property_manager_applications without action
   */
  export type property_manager_applicationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the property_manager_applications
     */
    select?: property_manager_applicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the property_manager_applications
     */
    omit?: property_manager_applicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: property_manager_applicationsInclude<ExtArgs> | null
  }


  /**
   * Model rentals
   */

  export type AggregateRentals = {
    _count: RentalsCountAggregateOutputType | null
    _avg: RentalsAvgAggregateOutputType | null
    _sum: RentalsSumAggregateOutputType | null
    _min: RentalsMinAggregateOutputType | null
    _max: RentalsMaxAggregateOutputType | null
  }

  export type RentalsAvgAggregateOutputType = {
    agreed_price: Decimal | null
  }

  export type RentalsSumAggregateOutputType = {
    agreed_price: Decimal | null
  }

  export type RentalsMinAggregateOutputType = {
    id: string | null
    booking_id: string | null
    user_id: string | null
    property_id: string | null
    lease_start: Date | null
    lease_end: Date | null
    pricing_unit: $Enums.pricing_unit | null
    agreed_price: Decimal | null
    status: $Enums.rental_status | null
    created_at: Date | null
  }

  export type RentalsMaxAggregateOutputType = {
    id: string | null
    booking_id: string | null
    user_id: string | null
    property_id: string | null
    lease_start: Date | null
    lease_end: Date | null
    pricing_unit: $Enums.pricing_unit | null
    agreed_price: Decimal | null
    status: $Enums.rental_status | null
    created_at: Date | null
  }

  export type RentalsCountAggregateOutputType = {
    id: number
    booking_id: number
    user_id: number
    property_id: number
    lease_start: number
    lease_end: number
    pricing_unit: number
    agreed_price: number
    status: number
    created_at: number
    _all: number
  }


  export type RentalsAvgAggregateInputType = {
    agreed_price?: true
  }

  export type RentalsSumAggregateInputType = {
    agreed_price?: true
  }

  export type RentalsMinAggregateInputType = {
    id?: true
    booking_id?: true
    user_id?: true
    property_id?: true
    lease_start?: true
    lease_end?: true
    pricing_unit?: true
    agreed_price?: true
    status?: true
    created_at?: true
  }

  export type RentalsMaxAggregateInputType = {
    id?: true
    booking_id?: true
    user_id?: true
    property_id?: true
    lease_start?: true
    lease_end?: true
    pricing_unit?: true
    agreed_price?: true
    status?: true
    created_at?: true
  }

  export type RentalsCountAggregateInputType = {
    id?: true
    booking_id?: true
    user_id?: true
    property_id?: true
    lease_start?: true
    lease_end?: true
    pricing_unit?: true
    agreed_price?: true
    status?: true
    created_at?: true
    _all?: true
  }

  export type RentalsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rentals to aggregate.
     */
    where?: rentalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rentals to fetch.
     */
    orderBy?: rentalsOrderByWithRelationInput | rentalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rentalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rentals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rentals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned rentals
    **/
    _count?: true | RentalsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RentalsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RentalsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RentalsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RentalsMaxAggregateInputType
  }

  export type GetRentalsAggregateType<T extends RentalsAggregateArgs> = {
        [P in keyof T & keyof AggregateRentals]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRentals[P]>
      : GetScalarType<T[P], AggregateRentals[P]>
  }




  export type rentalsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rentalsWhereInput
    orderBy?: rentalsOrderByWithAggregationInput | rentalsOrderByWithAggregationInput[]
    by: RentalsScalarFieldEnum[] | RentalsScalarFieldEnum
    having?: rentalsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RentalsCountAggregateInputType | true
    _avg?: RentalsAvgAggregateInputType
    _sum?: RentalsSumAggregateInputType
    _min?: RentalsMinAggregateInputType
    _max?: RentalsMaxAggregateInputType
  }

  export type RentalsGroupByOutputType = {
    id: string
    booking_id: string
    user_id: string
    property_id: string
    lease_start: Date
    lease_end: Date
    pricing_unit: $Enums.pricing_unit
    agreed_price: Decimal
    status: $Enums.rental_status
    created_at: Date
    _count: RentalsCountAggregateOutputType | null
    _avg: RentalsAvgAggregateOutputType | null
    _sum: RentalsSumAggregateOutputType | null
    _min: RentalsMinAggregateOutputType | null
    _max: RentalsMaxAggregateOutputType | null
  }

  type GetRentalsGroupByPayload<T extends rentalsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RentalsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RentalsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RentalsGroupByOutputType[P]>
            : GetScalarType<T[P], RentalsGroupByOutputType[P]>
        }
      >
    >


  export type rentalsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    booking_id?: boolean
    user_id?: boolean
    property_id?: boolean
    lease_start?: boolean
    lease_end?: boolean
    pricing_unit?: boolean
    agreed_price?: boolean
    status?: boolean
    created_at?: boolean
    payments?: boolean | rentals$paymentsArgs<ExtArgs>
    bookings?: boolean | bookingsDefaultArgs<ExtArgs>
    properties?: boolean | propertiesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | RentalsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rentals"]>

  export type rentalsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    booking_id?: boolean
    user_id?: boolean
    property_id?: boolean
    lease_start?: boolean
    lease_end?: boolean
    pricing_unit?: boolean
    agreed_price?: boolean
    status?: boolean
    created_at?: boolean
    bookings?: boolean | bookingsDefaultArgs<ExtArgs>
    properties?: boolean | propertiesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rentals"]>

  export type rentalsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    booking_id?: boolean
    user_id?: boolean
    property_id?: boolean
    lease_start?: boolean
    lease_end?: boolean
    pricing_unit?: boolean
    agreed_price?: boolean
    status?: boolean
    created_at?: boolean
    bookings?: boolean | bookingsDefaultArgs<ExtArgs>
    properties?: boolean | propertiesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rentals"]>

  export type rentalsSelectScalar = {
    id?: boolean
    booking_id?: boolean
    user_id?: boolean
    property_id?: boolean
    lease_start?: boolean
    lease_end?: boolean
    pricing_unit?: boolean
    agreed_price?: boolean
    status?: boolean
    created_at?: boolean
  }

  export type rentalsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "booking_id" | "user_id" | "property_id" | "lease_start" | "lease_end" | "pricing_unit" | "agreed_price" | "status" | "created_at", ExtArgs["result"]["rentals"]>
  export type rentalsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | rentals$paymentsArgs<ExtArgs>
    bookings?: boolean | bookingsDefaultArgs<ExtArgs>
    properties?: boolean | propertiesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | RentalsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type rentalsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | bookingsDefaultArgs<ExtArgs>
    properties?: boolean | propertiesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type rentalsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | bookingsDefaultArgs<ExtArgs>
    properties?: boolean | propertiesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $rentalsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "rentals"
    objects: {
      payments: Prisma.$paymentsPayload<ExtArgs>[]
      bookings: Prisma.$bookingsPayload<ExtArgs>
      properties: Prisma.$propertiesPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      booking_id: string
      user_id: string
      property_id: string
      lease_start: Date
      lease_end: Date
      pricing_unit: $Enums.pricing_unit
      agreed_price: Prisma.Decimal
      status: $Enums.rental_status
      created_at: Date
    }, ExtArgs["result"]["rentals"]>
    composites: {}
  }

  type rentalsGetPayload<S extends boolean | null | undefined | rentalsDefaultArgs> = $Result.GetResult<Prisma.$rentalsPayload, S>

  type rentalsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<rentalsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RentalsCountAggregateInputType | true
    }

  export interface rentalsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['rentals'], meta: { name: 'rentals' } }
    /**
     * Find zero or one Rentals that matches the filter.
     * @param {rentalsFindUniqueArgs} args - Arguments to find a Rentals
     * @example
     * // Get one Rentals
     * const rentals = await prisma.rentals.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends rentalsFindUniqueArgs>(args: SelectSubset<T, rentalsFindUniqueArgs<ExtArgs>>): Prisma__rentalsClient<$Result.GetResult<Prisma.$rentalsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rentals that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {rentalsFindUniqueOrThrowArgs} args - Arguments to find a Rentals
     * @example
     * // Get one Rentals
     * const rentals = await prisma.rentals.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends rentalsFindUniqueOrThrowArgs>(args: SelectSubset<T, rentalsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__rentalsClient<$Result.GetResult<Prisma.$rentalsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rentals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rentalsFindFirstArgs} args - Arguments to find a Rentals
     * @example
     * // Get one Rentals
     * const rentals = await prisma.rentals.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends rentalsFindFirstArgs>(args?: SelectSubset<T, rentalsFindFirstArgs<ExtArgs>>): Prisma__rentalsClient<$Result.GetResult<Prisma.$rentalsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rentals that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rentalsFindFirstOrThrowArgs} args - Arguments to find a Rentals
     * @example
     * // Get one Rentals
     * const rentals = await prisma.rentals.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends rentalsFindFirstOrThrowArgs>(args?: SelectSubset<T, rentalsFindFirstOrThrowArgs<ExtArgs>>): Prisma__rentalsClient<$Result.GetResult<Prisma.$rentalsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rentals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rentalsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rentals
     * const rentals = await prisma.rentals.findMany()
     * 
     * // Get first 10 Rentals
     * const rentals = await prisma.rentals.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rentalsWithIdOnly = await prisma.rentals.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends rentalsFindManyArgs>(args?: SelectSubset<T, rentalsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rentalsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rentals.
     * @param {rentalsCreateArgs} args - Arguments to create a Rentals.
     * @example
     * // Create one Rentals
     * const Rentals = await prisma.rentals.create({
     *   data: {
     *     // ... data to create a Rentals
     *   }
     * })
     * 
     */
    create<T extends rentalsCreateArgs>(args: SelectSubset<T, rentalsCreateArgs<ExtArgs>>): Prisma__rentalsClient<$Result.GetResult<Prisma.$rentalsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rentals.
     * @param {rentalsCreateManyArgs} args - Arguments to create many Rentals.
     * @example
     * // Create many Rentals
     * const rentals = await prisma.rentals.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends rentalsCreateManyArgs>(args?: SelectSubset<T, rentalsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rentals and returns the data saved in the database.
     * @param {rentalsCreateManyAndReturnArgs} args - Arguments to create many Rentals.
     * @example
     * // Create many Rentals
     * const rentals = await prisma.rentals.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rentals and only return the `id`
     * const rentalsWithIdOnly = await prisma.rentals.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends rentalsCreateManyAndReturnArgs>(args?: SelectSubset<T, rentalsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rentalsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rentals.
     * @param {rentalsDeleteArgs} args - Arguments to delete one Rentals.
     * @example
     * // Delete one Rentals
     * const Rentals = await prisma.rentals.delete({
     *   where: {
     *     // ... filter to delete one Rentals
     *   }
     * })
     * 
     */
    delete<T extends rentalsDeleteArgs>(args: SelectSubset<T, rentalsDeleteArgs<ExtArgs>>): Prisma__rentalsClient<$Result.GetResult<Prisma.$rentalsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rentals.
     * @param {rentalsUpdateArgs} args - Arguments to update one Rentals.
     * @example
     * // Update one Rentals
     * const rentals = await prisma.rentals.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends rentalsUpdateArgs>(args: SelectSubset<T, rentalsUpdateArgs<ExtArgs>>): Prisma__rentalsClient<$Result.GetResult<Prisma.$rentalsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rentals.
     * @param {rentalsDeleteManyArgs} args - Arguments to filter Rentals to delete.
     * @example
     * // Delete a few Rentals
     * const { count } = await prisma.rentals.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends rentalsDeleteManyArgs>(args?: SelectSubset<T, rentalsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rentals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rentalsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rentals
     * const rentals = await prisma.rentals.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends rentalsUpdateManyArgs>(args: SelectSubset<T, rentalsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rentals and returns the data updated in the database.
     * @param {rentalsUpdateManyAndReturnArgs} args - Arguments to update many Rentals.
     * @example
     * // Update many Rentals
     * const rentals = await prisma.rentals.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rentals and only return the `id`
     * const rentalsWithIdOnly = await prisma.rentals.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends rentalsUpdateManyAndReturnArgs>(args: SelectSubset<T, rentalsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rentalsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rentals.
     * @param {rentalsUpsertArgs} args - Arguments to update or create a Rentals.
     * @example
     * // Update or create a Rentals
     * const rentals = await prisma.rentals.upsert({
     *   create: {
     *     // ... data to create a Rentals
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rentals we want to update
     *   }
     * })
     */
    upsert<T extends rentalsUpsertArgs>(args: SelectSubset<T, rentalsUpsertArgs<ExtArgs>>): Prisma__rentalsClient<$Result.GetResult<Prisma.$rentalsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rentals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rentalsCountArgs} args - Arguments to filter Rentals to count.
     * @example
     * // Count the number of Rentals
     * const count = await prisma.rentals.count({
     *   where: {
     *     // ... the filter for the Rentals we want to count
     *   }
     * })
    **/
    count<T extends rentalsCountArgs>(
      args?: Subset<T, rentalsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RentalsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rentals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RentalsAggregateArgs>(args: Subset<T, RentalsAggregateArgs>): Prisma.PrismaPromise<GetRentalsAggregateType<T>>

    /**
     * Group by Rentals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rentalsGroupByArgs} args - Group by arguments.
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
      T extends rentalsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rentalsGroupByArgs['orderBy'] }
        : { orderBy?: rentalsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, rentalsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRentalsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the rentals model
   */
  readonly fields: rentalsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for rentals.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rentalsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    payments<T extends rentals$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, rentals$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookings<T extends bookingsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, bookingsDefaultArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    properties<T extends propertiesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, propertiesDefaultArgs<ExtArgs>>): Prisma__propertiesClient<$Result.GetResult<Prisma.$propertiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the rentals model
   */
  interface rentalsFieldRefs {
    readonly id: FieldRef<"rentals", 'String'>
    readonly booking_id: FieldRef<"rentals", 'String'>
    readonly user_id: FieldRef<"rentals", 'String'>
    readonly property_id: FieldRef<"rentals", 'String'>
    readonly lease_start: FieldRef<"rentals", 'DateTime'>
    readonly lease_end: FieldRef<"rentals", 'DateTime'>
    readonly pricing_unit: FieldRef<"rentals", 'pricing_unit'>
    readonly agreed_price: FieldRef<"rentals", 'Decimal'>
    readonly status: FieldRef<"rentals", 'rental_status'>
    readonly created_at: FieldRef<"rentals", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * rentals findUnique
   */
  export type rentalsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rentals
     */
    select?: rentalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rentals
     */
    omit?: rentalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rentalsInclude<ExtArgs> | null
    /**
     * Filter, which rentals to fetch.
     */
    where: rentalsWhereUniqueInput
  }

  /**
   * rentals findUniqueOrThrow
   */
  export type rentalsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rentals
     */
    select?: rentalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rentals
     */
    omit?: rentalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rentalsInclude<ExtArgs> | null
    /**
     * Filter, which rentals to fetch.
     */
    where: rentalsWhereUniqueInput
  }

  /**
   * rentals findFirst
   */
  export type rentalsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rentals
     */
    select?: rentalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rentals
     */
    omit?: rentalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rentalsInclude<ExtArgs> | null
    /**
     * Filter, which rentals to fetch.
     */
    where?: rentalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rentals to fetch.
     */
    orderBy?: rentalsOrderByWithRelationInput | rentalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rentals.
     */
    cursor?: rentalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rentals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rentals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rentals.
     */
    distinct?: RentalsScalarFieldEnum | RentalsScalarFieldEnum[]
  }

  /**
   * rentals findFirstOrThrow
   */
  export type rentalsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rentals
     */
    select?: rentalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rentals
     */
    omit?: rentalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rentalsInclude<ExtArgs> | null
    /**
     * Filter, which rentals to fetch.
     */
    where?: rentalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rentals to fetch.
     */
    orderBy?: rentalsOrderByWithRelationInput | rentalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rentals.
     */
    cursor?: rentalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rentals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rentals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rentals.
     */
    distinct?: RentalsScalarFieldEnum | RentalsScalarFieldEnum[]
  }

  /**
   * rentals findMany
   */
  export type rentalsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rentals
     */
    select?: rentalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rentals
     */
    omit?: rentalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rentalsInclude<ExtArgs> | null
    /**
     * Filter, which rentals to fetch.
     */
    where?: rentalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rentals to fetch.
     */
    orderBy?: rentalsOrderByWithRelationInput | rentalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing rentals.
     */
    cursor?: rentalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rentals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rentals.
     */
    skip?: number
    distinct?: RentalsScalarFieldEnum | RentalsScalarFieldEnum[]
  }

  /**
   * rentals create
   */
  export type rentalsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rentals
     */
    select?: rentalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rentals
     */
    omit?: rentalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rentalsInclude<ExtArgs> | null
    /**
     * The data needed to create a rentals.
     */
    data: XOR<rentalsCreateInput, rentalsUncheckedCreateInput>
  }

  /**
   * rentals createMany
   */
  export type rentalsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many rentals.
     */
    data: rentalsCreateManyInput | rentalsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * rentals createManyAndReturn
   */
  export type rentalsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rentals
     */
    select?: rentalsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the rentals
     */
    omit?: rentalsOmit<ExtArgs> | null
    /**
     * The data used to create many rentals.
     */
    data: rentalsCreateManyInput | rentalsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rentalsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * rentals update
   */
  export type rentalsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rentals
     */
    select?: rentalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rentals
     */
    omit?: rentalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rentalsInclude<ExtArgs> | null
    /**
     * The data needed to update a rentals.
     */
    data: XOR<rentalsUpdateInput, rentalsUncheckedUpdateInput>
    /**
     * Choose, which rentals to update.
     */
    where: rentalsWhereUniqueInput
  }

  /**
   * rentals updateMany
   */
  export type rentalsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update rentals.
     */
    data: XOR<rentalsUpdateManyMutationInput, rentalsUncheckedUpdateManyInput>
    /**
     * Filter which rentals to update
     */
    where?: rentalsWhereInput
    /**
     * Limit how many rentals to update.
     */
    limit?: number
  }

  /**
   * rentals updateManyAndReturn
   */
  export type rentalsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rentals
     */
    select?: rentalsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the rentals
     */
    omit?: rentalsOmit<ExtArgs> | null
    /**
     * The data used to update rentals.
     */
    data: XOR<rentalsUpdateManyMutationInput, rentalsUncheckedUpdateManyInput>
    /**
     * Filter which rentals to update
     */
    where?: rentalsWhereInput
    /**
     * Limit how many rentals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rentalsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * rentals upsert
   */
  export type rentalsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rentals
     */
    select?: rentalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rentals
     */
    omit?: rentalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rentalsInclude<ExtArgs> | null
    /**
     * The filter to search for the rentals to update in case it exists.
     */
    where: rentalsWhereUniqueInput
    /**
     * In case the rentals found by the `where` argument doesn't exist, create a new rentals with this data.
     */
    create: XOR<rentalsCreateInput, rentalsUncheckedCreateInput>
    /**
     * In case the rentals was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rentalsUpdateInput, rentalsUncheckedUpdateInput>
  }

  /**
   * rentals delete
   */
  export type rentalsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rentals
     */
    select?: rentalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rentals
     */
    omit?: rentalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rentalsInclude<ExtArgs> | null
    /**
     * Filter which rentals to delete.
     */
    where: rentalsWhereUniqueInput
  }

  /**
   * rentals deleteMany
   */
  export type rentalsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rentals to delete
     */
    where?: rentalsWhereInput
    /**
     * Limit how many rentals to delete.
     */
    limit?: number
  }

  /**
   * rentals.payments
   */
  export type rentals$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    where?: paymentsWhereInput
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    cursor?: paymentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * rentals without action
   */
  export type rentalsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rentals
     */
    select?: rentalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rentals
     */
    omit?: rentalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rentalsInclude<ExtArgs> | null
  }


  /**
   * Model roles
   */

  export type AggregateRoles = {
    _count: RolesCountAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  export type RolesMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type RolesMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type RolesCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type RolesMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type RolesMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type RolesCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type RolesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which roles to aggregate.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned roles
    **/
    _count?: true | RolesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolesMaxAggregateInputType
  }

  export type GetRolesAggregateType<T extends RolesAggregateArgs> = {
        [P in keyof T & keyof AggregateRoles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoles[P]>
      : GetScalarType<T[P], AggregateRoles[P]>
  }




  export type rolesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rolesWhereInput
    orderBy?: rolesOrderByWithAggregationInput | rolesOrderByWithAggregationInput[]
    by: RolesScalarFieldEnum[] | RolesScalarFieldEnum
    having?: rolesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolesCountAggregateInputType | true
    _min?: RolesMinAggregateInputType
    _max?: RolesMaxAggregateInputType
  }

  export type RolesGroupByOutputType = {
    id: string
    name: string
    _count: RolesCountAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  type GetRolesGroupByPayload<T extends rolesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolesGroupByOutputType[P]>
            : GetScalarType<T[P], RolesGroupByOutputType[P]>
        }
      >
    >


  export type rolesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    user_roles?: boolean | roles$user_rolesArgs<ExtArgs>
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roles"]>

  export type rolesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["roles"]>

  export type rolesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["roles"]>

  export type rolesSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type rolesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["roles"]>
  export type rolesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_roles?: boolean | roles$user_rolesArgs<ExtArgs>
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type rolesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type rolesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $rolesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "roles"
    objects: {
      user_roles: Prisma.$user_rolesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["roles"]>
    composites: {}
  }

  type rolesGetPayload<S extends boolean | null | undefined | rolesDefaultArgs> = $Result.GetResult<Prisma.$rolesPayload, S>

  type rolesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<rolesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RolesCountAggregateInputType | true
    }

  export interface rolesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['roles'], meta: { name: 'roles' } }
    /**
     * Find zero or one Roles that matches the filter.
     * @param {rolesFindUniqueArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends rolesFindUniqueArgs>(args: SelectSubset<T, rolesFindUniqueArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Roles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {rolesFindUniqueOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends rolesFindUniqueOrThrowArgs>(args: SelectSubset<T, rolesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesFindFirstArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends rolesFindFirstArgs>(args?: SelectSubset<T, rolesFindFirstArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesFindFirstOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends rolesFindFirstOrThrowArgs>(args?: SelectSubset<T, rolesFindFirstOrThrowArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.roles.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.roles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rolesWithIdOnly = await prisma.roles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends rolesFindManyArgs>(args?: SelectSubset<T, rolesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Roles.
     * @param {rolesCreateArgs} args - Arguments to create a Roles.
     * @example
     * // Create one Roles
     * const Roles = await prisma.roles.create({
     *   data: {
     *     // ... data to create a Roles
     *   }
     * })
     * 
     */
    create<T extends rolesCreateArgs>(args: SelectSubset<T, rolesCreateArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {rolesCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const roles = await prisma.roles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends rolesCreateManyArgs>(args?: SelectSubset<T, rolesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {rolesCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const roles = await prisma.roles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const rolesWithIdOnly = await prisma.roles.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends rolesCreateManyAndReturnArgs>(args?: SelectSubset<T, rolesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Roles.
     * @param {rolesDeleteArgs} args - Arguments to delete one Roles.
     * @example
     * // Delete one Roles
     * const Roles = await prisma.roles.delete({
     *   where: {
     *     // ... filter to delete one Roles
     *   }
     * })
     * 
     */
    delete<T extends rolesDeleteArgs>(args: SelectSubset<T, rolesDeleteArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Roles.
     * @param {rolesUpdateArgs} args - Arguments to update one Roles.
     * @example
     * // Update one Roles
     * const roles = await prisma.roles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends rolesUpdateArgs>(args: SelectSubset<T, rolesUpdateArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {rolesDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.roles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends rolesDeleteManyArgs>(args?: SelectSubset<T, rolesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const roles = await prisma.roles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends rolesUpdateManyArgs>(args: SelectSubset<T, rolesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {rolesUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const roles = await prisma.roles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const rolesWithIdOnly = await prisma.roles.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends rolesUpdateManyAndReturnArgs>(args: SelectSubset<T, rolesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Roles.
     * @param {rolesUpsertArgs} args - Arguments to update or create a Roles.
     * @example
     * // Update or create a Roles
     * const roles = await prisma.roles.upsert({
     *   create: {
     *     // ... data to create a Roles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Roles we want to update
     *   }
     * })
     */
    upsert<T extends rolesUpsertArgs>(args: SelectSubset<T, rolesUpsertArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.roles.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends rolesCountArgs>(
      args?: Subset<T, rolesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RolesAggregateArgs>(args: Subset<T, RolesAggregateArgs>): Prisma.PrismaPromise<GetRolesAggregateType<T>>

    /**
     * Group by Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesGroupByArgs} args - Group by arguments.
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
      T extends rolesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rolesGroupByArgs['orderBy'] }
        : { orderBy?: rolesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, rolesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the roles model
   */
  readonly fields: rolesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for roles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rolesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_roles<T extends roles$user_rolesArgs<ExtArgs> = {}>(args?: Subset<T, roles$user_rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_rolesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the roles model
   */
  interface rolesFieldRefs {
    readonly id: FieldRef<"roles", 'String'>
    readonly name: FieldRef<"roles", 'String'>
  }
    

  // Custom InputTypes
  /**
   * roles findUnique
   */
  export type rolesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles findUniqueOrThrow
   */
  export type rolesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles findFirst
   */
  export type rolesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * roles findFirstOrThrow
   */
  export type rolesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * roles findMany
   */
  export type rolesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing roles.
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * roles create
   */
  export type rolesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * The data needed to create a roles.
     */
    data: XOR<rolesCreateInput, rolesUncheckedCreateInput>
  }

  /**
   * roles createMany
   */
  export type rolesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many roles.
     */
    data: rolesCreateManyInput | rolesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * roles createManyAndReturn
   */
  export type rolesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * The data used to create many roles.
     */
    data: rolesCreateManyInput | rolesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * roles update
   */
  export type rolesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * The data needed to update a roles.
     */
    data: XOR<rolesUpdateInput, rolesUncheckedUpdateInput>
    /**
     * Choose, which roles to update.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles updateMany
   */
  export type rolesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update roles.
     */
    data: XOR<rolesUpdateManyMutationInput, rolesUncheckedUpdateManyInput>
    /**
     * Filter which roles to update
     */
    where?: rolesWhereInput
    /**
     * Limit how many roles to update.
     */
    limit?: number
  }

  /**
   * roles updateManyAndReturn
   */
  export type rolesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * The data used to update roles.
     */
    data: XOR<rolesUpdateManyMutationInput, rolesUncheckedUpdateManyInput>
    /**
     * Filter which roles to update
     */
    where?: rolesWhereInput
    /**
     * Limit how many roles to update.
     */
    limit?: number
  }

  /**
   * roles upsert
   */
  export type rolesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * The filter to search for the roles to update in case it exists.
     */
    where: rolesWhereUniqueInput
    /**
     * In case the roles found by the `where` argument doesn't exist, create a new roles with this data.
     */
    create: XOR<rolesCreateInput, rolesUncheckedCreateInput>
    /**
     * In case the roles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rolesUpdateInput, rolesUncheckedUpdateInput>
  }

  /**
   * roles delete
   */
  export type rolesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter which roles to delete.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles deleteMany
   */
  export type rolesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which roles to delete
     */
    where?: rolesWhereInput
    /**
     * Limit how many roles to delete.
     */
    limit?: number
  }

  /**
   * roles.user_roles
   */
  export type roles$user_rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_roles
     */
    omit?: user_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_rolesInclude<ExtArgs> | null
    where?: user_rolesWhereInput
    orderBy?: user_rolesOrderByWithRelationInput | user_rolesOrderByWithRelationInput[]
    cursor?: user_rolesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_rolesScalarFieldEnum | User_rolesScalarFieldEnum[]
  }

  /**
   * roles without action
   */
  export type rolesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
  }


  /**
   * Model user_roles
   */

  export type AggregateUser_roles = {
    _count: User_rolesCountAggregateOutputType | null
    _min: User_rolesMinAggregateOutputType | null
    _max: User_rolesMaxAggregateOutputType | null
  }

  export type User_rolesMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    role_id: string | null
    assigned_by: string | null
    assigned_at: Date | null
    revoked_by: string | null
    revoked_at: Date | null
    created_at: Date | null
  }

  export type User_rolesMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    role_id: string | null
    assigned_by: string | null
    assigned_at: Date | null
    revoked_by: string | null
    revoked_at: Date | null
    created_at: Date | null
  }

  export type User_rolesCountAggregateOutputType = {
    id: number
    user_id: number
    role_id: number
    assigned_by: number
    assigned_at: number
    revoked_by: number
    revoked_at: number
    created_at: number
    _all: number
  }


  export type User_rolesMinAggregateInputType = {
    id?: true
    user_id?: true
    role_id?: true
    assigned_by?: true
    assigned_at?: true
    revoked_by?: true
    revoked_at?: true
    created_at?: true
  }

  export type User_rolesMaxAggregateInputType = {
    id?: true
    user_id?: true
    role_id?: true
    assigned_by?: true
    assigned_at?: true
    revoked_by?: true
    revoked_at?: true
    created_at?: true
  }

  export type User_rolesCountAggregateInputType = {
    id?: true
    user_id?: true
    role_id?: true
    assigned_by?: true
    assigned_at?: true
    revoked_by?: true
    revoked_at?: true
    created_at?: true
    _all?: true
  }

  export type User_rolesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_roles to aggregate.
     */
    where?: user_rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_roles to fetch.
     */
    orderBy?: user_rolesOrderByWithRelationInput | user_rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_roles
    **/
    _count?: true | User_rolesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_rolesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_rolesMaxAggregateInputType
  }

  export type GetUser_rolesAggregateType<T extends User_rolesAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_roles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_roles[P]>
      : GetScalarType<T[P], AggregateUser_roles[P]>
  }




  export type user_rolesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_rolesWhereInput
    orderBy?: user_rolesOrderByWithAggregationInput | user_rolesOrderByWithAggregationInput[]
    by: User_rolesScalarFieldEnum[] | User_rolesScalarFieldEnum
    having?: user_rolesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_rolesCountAggregateInputType | true
    _min?: User_rolesMinAggregateInputType
    _max?: User_rolesMaxAggregateInputType
  }

  export type User_rolesGroupByOutputType = {
    id: string
    user_id: string
    role_id: string
    assigned_by: string | null
    assigned_at: Date
    revoked_by: string | null
    revoked_at: Date | null
    created_at: Date
    _count: User_rolesCountAggregateOutputType | null
    _min: User_rolesMinAggregateOutputType | null
    _max: User_rolesMaxAggregateOutputType | null
  }

  type GetUser_rolesGroupByPayload<T extends user_rolesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_rolesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_rolesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_rolesGroupByOutputType[P]>
            : GetScalarType<T[P], User_rolesGroupByOutputType[P]>
        }
      >
    >


  export type user_rolesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    role_id?: boolean
    assigned_by?: boolean
    assigned_at?: boolean
    revoked_by?: boolean
    revoked_at?: boolean
    created_at?: boolean
    users_user_roles_assigned_byTousers?: boolean | user_roles$users_user_roles_assigned_byTousersArgs<ExtArgs>
    users_user_roles_revoked_byTousers?: boolean | user_roles$users_user_roles_revoked_byTousersArgs<ExtArgs>
    roles?: boolean | rolesDefaultArgs<ExtArgs>
    users_user_roles_user_idTousers?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_roles"]>

  export type user_rolesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    role_id?: boolean
    assigned_by?: boolean
    assigned_at?: boolean
    revoked_by?: boolean
    revoked_at?: boolean
    created_at?: boolean
    users_user_roles_assigned_byTousers?: boolean | user_roles$users_user_roles_assigned_byTousersArgs<ExtArgs>
    users_user_roles_revoked_byTousers?: boolean | user_roles$users_user_roles_revoked_byTousersArgs<ExtArgs>
    roles?: boolean | rolesDefaultArgs<ExtArgs>
    users_user_roles_user_idTousers?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_roles"]>

  export type user_rolesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    role_id?: boolean
    assigned_by?: boolean
    assigned_at?: boolean
    revoked_by?: boolean
    revoked_at?: boolean
    created_at?: boolean
    users_user_roles_assigned_byTousers?: boolean | user_roles$users_user_roles_assigned_byTousersArgs<ExtArgs>
    users_user_roles_revoked_byTousers?: boolean | user_roles$users_user_roles_revoked_byTousersArgs<ExtArgs>
    roles?: boolean | rolesDefaultArgs<ExtArgs>
    users_user_roles_user_idTousers?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_roles"]>

  export type user_rolesSelectScalar = {
    id?: boolean
    user_id?: boolean
    role_id?: boolean
    assigned_by?: boolean
    assigned_at?: boolean
    revoked_by?: boolean
    revoked_at?: boolean
    created_at?: boolean
  }

  export type user_rolesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "role_id" | "assigned_by" | "assigned_at" | "revoked_by" | "revoked_at" | "created_at", ExtArgs["result"]["user_roles"]>
  export type user_rolesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_user_roles_assigned_byTousers?: boolean | user_roles$users_user_roles_assigned_byTousersArgs<ExtArgs>
    users_user_roles_revoked_byTousers?: boolean | user_roles$users_user_roles_revoked_byTousersArgs<ExtArgs>
    roles?: boolean | rolesDefaultArgs<ExtArgs>
    users_user_roles_user_idTousers?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type user_rolesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_user_roles_assigned_byTousers?: boolean | user_roles$users_user_roles_assigned_byTousersArgs<ExtArgs>
    users_user_roles_revoked_byTousers?: boolean | user_roles$users_user_roles_revoked_byTousersArgs<ExtArgs>
    roles?: boolean | rolesDefaultArgs<ExtArgs>
    users_user_roles_user_idTousers?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type user_rolesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_user_roles_assigned_byTousers?: boolean | user_roles$users_user_roles_assigned_byTousersArgs<ExtArgs>
    users_user_roles_revoked_byTousers?: boolean | user_roles$users_user_roles_revoked_byTousersArgs<ExtArgs>
    roles?: boolean | rolesDefaultArgs<ExtArgs>
    users_user_roles_user_idTousers?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $user_rolesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_roles"
    objects: {
      users_user_roles_assigned_byTousers: Prisma.$usersPayload<ExtArgs> | null
      users_user_roles_revoked_byTousers: Prisma.$usersPayload<ExtArgs> | null
      roles: Prisma.$rolesPayload<ExtArgs>
      users_user_roles_user_idTousers: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      role_id: string
      assigned_by: string | null
      assigned_at: Date
      revoked_by: string | null
      revoked_at: Date | null
      created_at: Date
    }, ExtArgs["result"]["user_roles"]>
    composites: {}
  }

  type user_rolesGetPayload<S extends boolean | null | undefined | user_rolesDefaultArgs> = $Result.GetResult<Prisma.$user_rolesPayload, S>

  type user_rolesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_rolesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_rolesCountAggregateInputType | true
    }

  export interface user_rolesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_roles'], meta: { name: 'user_roles' } }
    /**
     * Find zero or one User_roles that matches the filter.
     * @param {user_rolesFindUniqueArgs} args - Arguments to find a User_roles
     * @example
     * // Get one User_roles
     * const user_roles = await prisma.user_roles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_rolesFindUniqueArgs>(args: SelectSubset<T, user_rolesFindUniqueArgs<ExtArgs>>): Prisma__user_rolesClient<$Result.GetResult<Prisma.$user_rolesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_roles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_rolesFindUniqueOrThrowArgs} args - Arguments to find a User_roles
     * @example
     * // Get one User_roles
     * const user_roles = await prisma.user_roles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_rolesFindUniqueOrThrowArgs>(args: SelectSubset<T, user_rolesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_rolesClient<$Result.GetResult<Prisma.$user_rolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_rolesFindFirstArgs} args - Arguments to find a User_roles
     * @example
     * // Get one User_roles
     * const user_roles = await prisma.user_roles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_rolesFindFirstArgs>(args?: SelectSubset<T, user_rolesFindFirstArgs<ExtArgs>>): Prisma__user_rolesClient<$Result.GetResult<Prisma.$user_rolesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_roles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_rolesFindFirstOrThrowArgs} args - Arguments to find a User_roles
     * @example
     * // Get one User_roles
     * const user_roles = await prisma.user_roles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_rolesFindFirstOrThrowArgs>(args?: SelectSubset<T, user_rolesFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_rolesClient<$Result.GetResult<Prisma.$user_rolesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_rolesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_roles
     * const user_roles = await prisma.user_roles.findMany()
     * 
     * // Get first 10 User_roles
     * const user_roles = await prisma.user_roles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_rolesWithIdOnly = await prisma.user_roles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends user_rolesFindManyArgs>(args?: SelectSubset<T, user_rolesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_rolesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_roles.
     * @param {user_rolesCreateArgs} args - Arguments to create a User_roles.
     * @example
     * // Create one User_roles
     * const User_roles = await prisma.user_roles.create({
     *   data: {
     *     // ... data to create a User_roles
     *   }
     * })
     * 
     */
    create<T extends user_rolesCreateArgs>(args: SelectSubset<T, user_rolesCreateArgs<ExtArgs>>): Prisma__user_rolesClient<$Result.GetResult<Prisma.$user_rolesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_roles.
     * @param {user_rolesCreateManyArgs} args - Arguments to create many User_roles.
     * @example
     * // Create many User_roles
     * const user_roles = await prisma.user_roles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_rolesCreateManyArgs>(args?: SelectSubset<T, user_rolesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_roles and returns the data saved in the database.
     * @param {user_rolesCreateManyAndReturnArgs} args - Arguments to create many User_roles.
     * @example
     * // Create many User_roles
     * const user_roles = await prisma.user_roles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_roles and only return the `id`
     * const user_rolesWithIdOnly = await prisma.user_roles.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends user_rolesCreateManyAndReturnArgs>(args?: SelectSubset<T, user_rolesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_rolesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_roles.
     * @param {user_rolesDeleteArgs} args - Arguments to delete one User_roles.
     * @example
     * // Delete one User_roles
     * const User_roles = await prisma.user_roles.delete({
     *   where: {
     *     // ... filter to delete one User_roles
     *   }
     * })
     * 
     */
    delete<T extends user_rolesDeleteArgs>(args: SelectSubset<T, user_rolesDeleteArgs<ExtArgs>>): Prisma__user_rolesClient<$Result.GetResult<Prisma.$user_rolesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_roles.
     * @param {user_rolesUpdateArgs} args - Arguments to update one User_roles.
     * @example
     * // Update one User_roles
     * const user_roles = await prisma.user_roles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_rolesUpdateArgs>(args: SelectSubset<T, user_rolesUpdateArgs<ExtArgs>>): Prisma__user_rolesClient<$Result.GetResult<Prisma.$user_rolesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_roles.
     * @param {user_rolesDeleteManyArgs} args - Arguments to filter User_roles to delete.
     * @example
     * // Delete a few User_roles
     * const { count } = await prisma.user_roles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_rolesDeleteManyArgs>(args?: SelectSubset<T, user_rolesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_rolesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_roles
     * const user_roles = await prisma.user_roles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_rolesUpdateManyArgs>(args: SelectSubset<T, user_rolesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_roles and returns the data updated in the database.
     * @param {user_rolesUpdateManyAndReturnArgs} args - Arguments to update many User_roles.
     * @example
     * // Update many User_roles
     * const user_roles = await prisma.user_roles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_roles and only return the `id`
     * const user_rolesWithIdOnly = await prisma.user_roles.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends user_rolesUpdateManyAndReturnArgs>(args: SelectSubset<T, user_rolesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_rolesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_roles.
     * @param {user_rolesUpsertArgs} args - Arguments to update or create a User_roles.
     * @example
     * // Update or create a User_roles
     * const user_roles = await prisma.user_roles.upsert({
     *   create: {
     *     // ... data to create a User_roles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_roles we want to update
     *   }
     * })
     */
    upsert<T extends user_rolesUpsertArgs>(args: SelectSubset<T, user_rolesUpsertArgs<ExtArgs>>): Prisma__user_rolesClient<$Result.GetResult<Prisma.$user_rolesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_rolesCountArgs} args - Arguments to filter User_roles to count.
     * @example
     * // Count the number of User_roles
     * const count = await prisma.user_roles.count({
     *   where: {
     *     // ... the filter for the User_roles we want to count
     *   }
     * })
    **/
    count<T extends user_rolesCountArgs>(
      args?: Subset<T, user_rolesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_rolesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_rolesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_rolesAggregateArgs>(args: Subset<T, User_rolesAggregateArgs>): Prisma.PrismaPromise<GetUser_rolesAggregateType<T>>

    /**
     * Group by User_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_rolesGroupByArgs} args - Group by arguments.
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
      T extends user_rolesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_rolesGroupByArgs['orderBy'] }
        : { orderBy?: user_rolesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, user_rolesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_rolesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_roles model
   */
  readonly fields: user_rolesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_roles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_rolesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users_user_roles_assigned_byTousers<T extends user_roles$users_user_roles_assigned_byTousersArgs<ExtArgs> = {}>(args?: Subset<T, user_roles$users_user_roles_assigned_byTousersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users_user_roles_revoked_byTousers<T extends user_roles$users_user_roles_revoked_byTousersArgs<ExtArgs> = {}>(args?: Subset<T, user_roles$users_user_roles_revoked_byTousersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    roles<T extends rolesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, rolesDefaultArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users_user_roles_user_idTousers<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user_roles model
   */
  interface user_rolesFieldRefs {
    readonly id: FieldRef<"user_roles", 'String'>
    readonly user_id: FieldRef<"user_roles", 'String'>
    readonly role_id: FieldRef<"user_roles", 'String'>
    readonly assigned_by: FieldRef<"user_roles", 'String'>
    readonly assigned_at: FieldRef<"user_roles", 'DateTime'>
    readonly revoked_by: FieldRef<"user_roles", 'String'>
    readonly revoked_at: FieldRef<"user_roles", 'DateTime'>
    readonly created_at: FieldRef<"user_roles", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user_roles findUnique
   */
  export type user_rolesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_roles
     */
    omit?: user_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_rolesInclude<ExtArgs> | null
    /**
     * Filter, which user_roles to fetch.
     */
    where: user_rolesWhereUniqueInput
  }

  /**
   * user_roles findUniqueOrThrow
   */
  export type user_rolesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_roles
     */
    omit?: user_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_rolesInclude<ExtArgs> | null
    /**
     * Filter, which user_roles to fetch.
     */
    where: user_rolesWhereUniqueInput
  }

  /**
   * user_roles findFirst
   */
  export type user_rolesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_roles
     */
    omit?: user_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_rolesInclude<ExtArgs> | null
    /**
     * Filter, which user_roles to fetch.
     */
    where?: user_rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_roles to fetch.
     */
    orderBy?: user_rolesOrderByWithRelationInput | user_rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_roles.
     */
    cursor?: user_rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_roles.
     */
    distinct?: User_rolesScalarFieldEnum | User_rolesScalarFieldEnum[]
  }

  /**
   * user_roles findFirstOrThrow
   */
  export type user_rolesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_roles
     */
    omit?: user_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_rolesInclude<ExtArgs> | null
    /**
     * Filter, which user_roles to fetch.
     */
    where?: user_rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_roles to fetch.
     */
    orderBy?: user_rolesOrderByWithRelationInput | user_rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_roles.
     */
    cursor?: user_rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_roles.
     */
    distinct?: User_rolesScalarFieldEnum | User_rolesScalarFieldEnum[]
  }

  /**
   * user_roles findMany
   */
  export type user_rolesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_roles
     */
    omit?: user_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_rolesInclude<ExtArgs> | null
    /**
     * Filter, which user_roles to fetch.
     */
    where?: user_rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_roles to fetch.
     */
    orderBy?: user_rolesOrderByWithRelationInput | user_rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_roles.
     */
    cursor?: user_rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_roles.
     */
    skip?: number
    distinct?: User_rolesScalarFieldEnum | User_rolesScalarFieldEnum[]
  }

  /**
   * user_roles create
   */
  export type user_rolesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_roles
     */
    omit?: user_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_rolesInclude<ExtArgs> | null
    /**
     * The data needed to create a user_roles.
     */
    data: XOR<user_rolesCreateInput, user_rolesUncheckedCreateInput>
  }

  /**
   * user_roles createMany
   */
  export type user_rolesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_roles.
     */
    data: user_rolesCreateManyInput | user_rolesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_roles createManyAndReturn
   */
  export type user_rolesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_roles
     */
    omit?: user_rolesOmit<ExtArgs> | null
    /**
     * The data used to create many user_roles.
     */
    data: user_rolesCreateManyInput | user_rolesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_rolesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_roles update
   */
  export type user_rolesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_roles
     */
    omit?: user_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_rolesInclude<ExtArgs> | null
    /**
     * The data needed to update a user_roles.
     */
    data: XOR<user_rolesUpdateInput, user_rolesUncheckedUpdateInput>
    /**
     * Choose, which user_roles to update.
     */
    where: user_rolesWhereUniqueInput
  }

  /**
   * user_roles updateMany
   */
  export type user_rolesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_roles.
     */
    data: XOR<user_rolesUpdateManyMutationInput, user_rolesUncheckedUpdateManyInput>
    /**
     * Filter which user_roles to update
     */
    where?: user_rolesWhereInput
    /**
     * Limit how many user_roles to update.
     */
    limit?: number
  }

  /**
   * user_roles updateManyAndReturn
   */
  export type user_rolesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_roles
     */
    omit?: user_rolesOmit<ExtArgs> | null
    /**
     * The data used to update user_roles.
     */
    data: XOR<user_rolesUpdateManyMutationInput, user_rolesUncheckedUpdateManyInput>
    /**
     * Filter which user_roles to update
     */
    where?: user_rolesWhereInput
    /**
     * Limit how many user_roles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_rolesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_roles upsert
   */
  export type user_rolesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_roles
     */
    omit?: user_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_rolesInclude<ExtArgs> | null
    /**
     * The filter to search for the user_roles to update in case it exists.
     */
    where: user_rolesWhereUniqueInput
    /**
     * In case the user_roles found by the `where` argument doesn't exist, create a new user_roles with this data.
     */
    create: XOR<user_rolesCreateInput, user_rolesUncheckedCreateInput>
    /**
     * In case the user_roles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_rolesUpdateInput, user_rolesUncheckedUpdateInput>
  }

  /**
   * user_roles delete
   */
  export type user_rolesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_roles
     */
    omit?: user_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_rolesInclude<ExtArgs> | null
    /**
     * Filter which user_roles to delete.
     */
    where: user_rolesWhereUniqueInput
  }

  /**
   * user_roles deleteMany
   */
  export type user_rolesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_roles to delete
     */
    where?: user_rolesWhereInput
    /**
     * Limit how many user_roles to delete.
     */
    limit?: number
  }

  /**
   * user_roles.users_user_roles_assigned_byTousers
   */
  export type user_roles$users_user_roles_assigned_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * user_roles.users_user_roles_revoked_byTousers
   */
  export type user_roles$users_user_roles_revoked_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * user_roles without action
   */
  export type user_rolesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_roles
     */
    omit?: user_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_rolesInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    first_name: string | null
    last_name: string | null
    email: string | null
    password_hash: string | null
    phone_number: string | null
    is_suspended: boolean | null
    created_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    first_name: string | null
    last_name: string | null
    email: string | null
    password_hash: string | null
    phone_number: string | null
    is_suspended: boolean | null
    created_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    first_name: number
    last_name: number
    email: number
    password_hash: number
    phone_number: number
    is_suspended: number
    created_at: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    password_hash?: true
    phone_number?: true
    is_suspended?: true
    created_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    password_hash?: true
    phone_number?: true
    is_suspended?: true
    created_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    password_hash?: true
    phone_number?: true
    is_suspended?: true
    created_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    first_name: string
    last_name: string
    email: string
    password_hash: string
    phone_number: string | null
    is_suspended: boolean
    created_at: Date
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password_hash?: boolean
    phone_number?: boolean
    is_suspended?: boolean
    created_at?: boolean
    bookings?: boolean | users$bookingsArgs<ExtArgs>
    properties_properties_approved_byTousers?: boolean | users$properties_properties_approved_byTousersArgs<ExtArgs>
    properties_properties_manager_idTousers?: boolean | users$properties_properties_manager_idTousersArgs<ExtArgs>
    property_manager_applications_property_manager_applications_reviewed_byTousers?: boolean | users$property_manager_applications_property_manager_applications_reviewed_byTousersArgs<ExtArgs>
    property_manager_applications_property_manager_applications_user_idTousers?: boolean | users$property_manager_applications_property_manager_applications_user_idTousersArgs<ExtArgs>
    rentals?: boolean | users$rentalsArgs<ExtArgs>
    user_roles_user_roles_assigned_byTousers?: boolean | users$user_roles_user_roles_assigned_byTousersArgs<ExtArgs>
    user_roles_user_roles_revoked_byTousers?: boolean | users$user_roles_user_roles_revoked_byTousersArgs<ExtArgs>
    user_roles_user_roles_user_idTousers?: boolean | users$user_roles_user_roles_user_idTousersArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password_hash?: boolean
    phone_number?: boolean
    is_suspended?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password_hash?: boolean
    phone_number?: boolean
    is_suspended?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password_hash?: boolean
    phone_number?: boolean
    is_suspended?: boolean
    created_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "first_name" | "last_name" | "email" | "password_hash" | "phone_number" | "is_suspended" | "created_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | users$bookingsArgs<ExtArgs>
    properties_properties_approved_byTousers?: boolean | users$properties_properties_approved_byTousersArgs<ExtArgs>
    properties_properties_manager_idTousers?: boolean | users$properties_properties_manager_idTousersArgs<ExtArgs>
    property_manager_applications_property_manager_applications_reviewed_byTousers?: boolean | users$property_manager_applications_property_manager_applications_reviewed_byTousersArgs<ExtArgs>
    property_manager_applications_property_manager_applications_user_idTousers?: boolean | users$property_manager_applications_property_manager_applications_user_idTousersArgs<ExtArgs>
    rentals?: boolean | users$rentalsArgs<ExtArgs>
    user_roles_user_roles_assigned_byTousers?: boolean | users$user_roles_user_roles_assigned_byTousersArgs<ExtArgs>
    user_roles_user_roles_revoked_byTousers?: boolean | users$user_roles_user_roles_revoked_byTousersArgs<ExtArgs>
    user_roles_user_roles_user_idTousers?: boolean | users$user_roles_user_roles_user_idTousersArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      bookings: Prisma.$bookingsPayload<ExtArgs>[]
      properties_properties_approved_byTousers: Prisma.$propertiesPayload<ExtArgs>[]
      properties_properties_manager_idTousers: Prisma.$propertiesPayload<ExtArgs>[]
      property_manager_applications_property_manager_applications_reviewed_byTousers: Prisma.$property_manager_applicationsPayload<ExtArgs>[]
      property_manager_applications_property_manager_applications_user_idTousers: Prisma.$property_manager_applicationsPayload<ExtArgs>[]
      rentals: Prisma.$rentalsPayload<ExtArgs>[]
      user_roles_user_roles_assigned_byTousers: Prisma.$user_rolesPayload<ExtArgs>[]
      user_roles_user_roles_revoked_byTousers: Prisma.$user_rolesPayload<ExtArgs>[]
      user_roles_user_roles_user_idTousers: Prisma.$user_rolesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      first_name: string
      last_name: string
      email: string
      password_hash: string
      phone_number: string | null
      is_suspended: boolean
      created_at: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookings<T extends users$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, users$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    properties_properties_approved_byTousers<T extends users$properties_properties_approved_byTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$properties_properties_approved_byTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$propertiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    properties_properties_manager_idTousers<T extends users$properties_properties_manager_idTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$properties_properties_manager_idTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$propertiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    property_manager_applications_property_manager_applications_reviewed_byTousers<T extends users$property_manager_applications_property_manager_applications_reviewed_byTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$property_manager_applications_property_manager_applications_reviewed_byTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$property_manager_applicationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    property_manager_applications_property_manager_applications_user_idTousers<T extends users$property_manager_applications_property_manager_applications_user_idTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$property_manager_applications_property_manager_applications_user_idTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$property_manager_applicationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rentals<T extends users$rentalsArgs<ExtArgs> = {}>(args?: Subset<T, users$rentalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rentalsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_roles_user_roles_assigned_byTousers<T extends users$user_roles_user_roles_assigned_byTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$user_roles_user_roles_assigned_byTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_rolesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_roles_user_roles_revoked_byTousers<T extends users$user_roles_user_roles_revoked_byTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$user_roles_user_roles_revoked_byTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_rolesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_roles_user_roles_user_idTousers<T extends users$user_roles_user_roles_user_idTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$user_roles_user_roles_user_idTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_rolesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'String'>
    readonly first_name: FieldRef<"users", 'String'>
    readonly last_name: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password_hash: FieldRef<"users", 'String'>
    readonly phone_number: FieldRef<"users", 'String'>
    readonly is_suspended: FieldRef<"users", 'Boolean'>
    readonly created_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.bookings
   */
  export type users$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    where?: bookingsWhereInput
    orderBy?: bookingsOrderByWithRelationInput | bookingsOrderByWithRelationInput[]
    cursor?: bookingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * users.properties_properties_approved_byTousers
   */
  export type users$properties_properties_approved_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the properties
     */
    select?: propertiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the properties
     */
    omit?: propertiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: propertiesInclude<ExtArgs> | null
    where?: propertiesWhereInput
    orderBy?: propertiesOrderByWithRelationInput | propertiesOrderByWithRelationInput[]
    cursor?: propertiesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertiesScalarFieldEnum | PropertiesScalarFieldEnum[]
  }

  /**
   * users.properties_properties_manager_idTousers
   */
  export type users$properties_properties_manager_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the properties
     */
    select?: propertiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the properties
     */
    omit?: propertiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: propertiesInclude<ExtArgs> | null
    where?: propertiesWhereInput
    orderBy?: propertiesOrderByWithRelationInput | propertiesOrderByWithRelationInput[]
    cursor?: propertiesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertiesScalarFieldEnum | PropertiesScalarFieldEnum[]
  }

  /**
   * users.property_manager_applications_property_manager_applications_reviewed_byTousers
   */
  export type users$property_manager_applications_property_manager_applications_reviewed_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the property_manager_applications
     */
    select?: property_manager_applicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the property_manager_applications
     */
    omit?: property_manager_applicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: property_manager_applicationsInclude<ExtArgs> | null
    where?: property_manager_applicationsWhereInput
    orderBy?: property_manager_applicationsOrderByWithRelationInput | property_manager_applicationsOrderByWithRelationInput[]
    cursor?: property_manager_applicationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Property_manager_applicationsScalarFieldEnum | Property_manager_applicationsScalarFieldEnum[]
  }

  /**
   * users.property_manager_applications_property_manager_applications_user_idTousers
   */
  export type users$property_manager_applications_property_manager_applications_user_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the property_manager_applications
     */
    select?: property_manager_applicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the property_manager_applications
     */
    omit?: property_manager_applicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: property_manager_applicationsInclude<ExtArgs> | null
    where?: property_manager_applicationsWhereInput
    orderBy?: property_manager_applicationsOrderByWithRelationInput | property_manager_applicationsOrderByWithRelationInput[]
    cursor?: property_manager_applicationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Property_manager_applicationsScalarFieldEnum | Property_manager_applicationsScalarFieldEnum[]
  }

  /**
   * users.rentals
   */
  export type users$rentalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rentals
     */
    select?: rentalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rentals
     */
    omit?: rentalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rentalsInclude<ExtArgs> | null
    where?: rentalsWhereInput
    orderBy?: rentalsOrderByWithRelationInput | rentalsOrderByWithRelationInput[]
    cursor?: rentalsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RentalsScalarFieldEnum | RentalsScalarFieldEnum[]
  }

  /**
   * users.user_roles_user_roles_assigned_byTousers
   */
  export type users$user_roles_user_roles_assigned_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_roles
     */
    omit?: user_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_rolesInclude<ExtArgs> | null
    where?: user_rolesWhereInput
    orderBy?: user_rolesOrderByWithRelationInput | user_rolesOrderByWithRelationInput[]
    cursor?: user_rolesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_rolesScalarFieldEnum | User_rolesScalarFieldEnum[]
  }

  /**
   * users.user_roles_user_roles_revoked_byTousers
   */
  export type users$user_roles_user_roles_revoked_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_roles
     */
    omit?: user_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_rolesInclude<ExtArgs> | null
    where?: user_rolesWhereInput
    orderBy?: user_rolesOrderByWithRelationInput | user_rolesOrderByWithRelationInput[]
    cursor?: user_rolesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_rolesScalarFieldEnum | User_rolesScalarFieldEnum[]
  }

  /**
   * users.user_roles_user_roles_user_idTousers
   */
  export type users$user_roles_user_roles_user_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_roles
     */
    omit?: user_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_rolesInclude<ExtArgs> | null
    where?: user_rolesWhereInput
    orderBy?: user_rolesOrderByWithRelationInput | user_rolesOrderByWithRelationInput[]
    cursor?: user_rolesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_rolesScalarFieldEnum | User_rolesScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
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


  export const BookingsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    property_id: 'property_id',
    start_date: 'start_date',
    end_date: 'end_date',
    proposed_amount: 'proposed_amount',
    status: 'status',
    cancelled_at: 'cancelled_at',
    cancellation_reason: 'cancellation_reason',
    created_at: 'created_at'
  };

  export type BookingsScalarFieldEnum = (typeof BookingsScalarFieldEnum)[keyof typeof BookingsScalarFieldEnum]


  export const CategoriesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum]


  export const PaymentsScalarFieldEnum: {
    id: 'id',
    rental_id: 'rental_id',
    amount: 'amount',
    category: 'category',
    payment_method: 'payment_method',
    payment_status: 'payment_status',
    transaction_reference: 'transaction_reference',
    paid_at: 'paid_at',
    created_at: 'created_at'
  };

  export type PaymentsScalarFieldEnum = (typeof PaymentsScalarFieldEnum)[keyof typeof PaymentsScalarFieldEnum]


  export const PropertiesScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    address: 'address',
    city: 'city',
    state: 'state',
    pricing_unit: 'pricing_unit',
    base_price: 'base_price',
    approval_status: 'approval_status',
    availability_status: 'availability_status',
    category_id: 'category_id',
    manager_id: 'manager_id',
    approved_by: 'approved_by',
    approved_at: 'approved_at',
    rejection_reason: 'rejection_reason',
    created_at: 'created_at'
  };

  export type PropertiesScalarFieldEnum = (typeof PropertiesScalarFieldEnum)[keyof typeof PropertiesScalarFieldEnum]


  export const Property_imagesScalarFieldEnum: {
    id: 'id',
    property_id: 'property_id',
    image_url: 'image_url',
    created_at: 'created_at'
  };

  export type Property_imagesScalarFieldEnum = (typeof Property_imagesScalarFieldEnum)[keyof typeof Property_imagesScalarFieldEnum]


  export const Property_manager_applicationsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    reason: 'reason',
    status: 'status',
    reviewed_by: 'reviewed_by',
    reviewed_at: 'reviewed_at',
    created_at: 'created_at'
  };

  export type Property_manager_applicationsScalarFieldEnum = (typeof Property_manager_applicationsScalarFieldEnum)[keyof typeof Property_manager_applicationsScalarFieldEnum]


  export const RentalsScalarFieldEnum: {
    id: 'id',
    booking_id: 'booking_id',
    user_id: 'user_id',
    property_id: 'property_id',
    lease_start: 'lease_start',
    lease_end: 'lease_end',
    pricing_unit: 'pricing_unit',
    agreed_price: 'agreed_price',
    status: 'status',
    created_at: 'created_at'
  };

  export type RentalsScalarFieldEnum = (typeof RentalsScalarFieldEnum)[keyof typeof RentalsScalarFieldEnum]


  export const RolesScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type RolesScalarFieldEnum = (typeof RolesScalarFieldEnum)[keyof typeof RolesScalarFieldEnum]


  export const User_rolesScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    role_id: 'role_id',
    assigned_by: 'assigned_by',
    assigned_at: 'assigned_at',
    revoked_by: 'revoked_by',
    revoked_at: 'revoked_at',
    created_at: 'created_at'
  };

  export type User_rolesScalarFieldEnum = (typeof User_rolesScalarFieldEnum)[keyof typeof User_rolesScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    first_name: 'first_name',
    last_name: 'last_name',
    email: 'email',
    password_hash: 'password_hash',
    phone_number: 'phone_number',
    is_suspended: 'is_suspended',
    created_at: 'created_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'booking_status'
   */
  export type Enumbooking_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'booking_status'>
    


  /**
   * Reference to a field of type 'booking_status[]'
   */
  export type ListEnumbooking_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'booking_status[]'>
    


  /**
   * Reference to a field of type 'payment_category'
   */
  export type Enumpayment_categoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'payment_category'>
    


  /**
   * Reference to a field of type 'payment_category[]'
   */
  export type ListEnumpayment_categoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'payment_category[]'>
    


  /**
   * Reference to a field of type 'payment_status'
   */
  export type Enumpayment_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'payment_status'>
    


  /**
   * Reference to a field of type 'payment_status[]'
   */
  export type ListEnumpayment_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'payment_status[]'>
    


  /**
   * Reference to a field of type 'pricing_unit'
   */
  export type Enumpricing_unitFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'pricing_unit'>
    


  /**
   * Reference to a field of type 'pricing_unit[]'
   */
  export type ListEnumpricing_unitFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'pricing_unit[]'>
    


  /**
   * Reference to a field of type 'property_approval_status'
   */
  export type Enumproperty_approval_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'property_approval_status'>
    


  /**
   * Reference to a field of type 'property_approval_status[]'
   */
  export type ListEnumproperty_approval_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'property_approval_status[]'>
    


  /**
   * Reference to a field of type 'property_availability_status'
   */
  export type Enumproperty_availability_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'property_availability_status'>
    


  /**
   * Reference to a field of type 'property_availability_status[]'
   */
  export type ListEnumproperty_availability_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'property_availability_status[]'>
    


  /**
   * Reference to a field of type 'manager_application_status'
   */
  export type Enummanager_application_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'manager_application_status'>
    


  /**
   * Reference to a field of type 'manager_application_status[]'
   */
  export type ListEnummanager_application_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'manager_application_status[]'>
    


  /**
   * Reference to a field of type 'rental_status'
   */
  export type Enumrental_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'rental_status'>
    


  /**
   * Reference to a field of type 'rental_status[]'
   */
  export type ListEnumrental_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'rental_status[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type bookingsWhereInput = {
    AND?: bookingsWhereInput | bookingsWhereInput[]
    OR?: bookingsWhereInput[]
    NOT?: bookingsWhereInput | bookingsWhereInput[]
    id?: UuidFilter<"bookings"> | string
    user_id?: UuidFilter<"bookings"> | string
    property_id?: UuidFilter<"bookings"> | string
    start_date?: DateTimeFilter<"bookings"> | Date | string
    end_date?: DateTimeFilter<"bookings"> | Date | string
    proposed_amount?: DecimalNullableFilter<"bookings"> | Decimal | DecimalJsLike | number | string | null
    status?: Enumbooking_statusFilter<"bookings"> | $Enums.booking_status
    cancelled_at?: DateTimeNullableFilter<"bookings"> | Date | string | null
    cancellation_reason?: StringNullableFilter<"bookings"> | string | null
    created_at?: DateTimeFilter<"bookings"> | Date | string
    properties?: XOR<PropertiesScalarRelationFilter, propertiesWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    rentals?: XOR<RentalsNullableScalarRelationFilter, rentalsWhereInput> | null
  }

  export type bookingsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    property_id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    proposed_amount?: SortOrderInput | SortOrder
    status?: SortOrder
    cancelled_at?: SortOrderInput | SortOrder
    cancellation_reason?: SortOrderInput | SortOrder
    created_at?: SortOrder
    properties?: propertiesOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
    rentals?: rentalsOrderByWithRelationInput
  }

  export type bookingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: bookingsWhereInput | bookingsWhereInput[]
    OR?: bookingsWhereInput[]
    NOT?: bookingsWhereInput | bookingsWhereInput[]
    user_id?: UuidFilter<"bookings"> | string
    property_id?: UuidFilter<"bookings"> | string
    start_date?: DateTimeFilter<"bookings"> | Date | string
    end_date?: DateTimeFilter<"bookings"> | Date | string
    proposed_amount?: DecimalNullableFilter<"bookings"> | Decimal | DecimalJsLike | number | string | null
    status?: Enumbooking_statusFilter<"bookings"> | $Enums.booking_status
    cancelled_at?: DateTimeNullableFilter<"bookings"> | Date | string | null
    cancellation_reason?: StringNullableFilter<"bookings"> | string | null
    created_at?: DateTimeFilter<"bookings"> | Date | string
    properties?: XOR<PropertiesScalarRelationFilter, propertiesWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    rentals?: XOR<RentalsNullableScalarRelationFilter, rentalsWhereInput> | null
  }, "id">

  export type bookingsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    property_id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    proposed_amount?: SortOrderInput | SortOrder
    status?: SortOrder
    cancelled_at?: SortOrderInput | SortOrder
    cancellation_reason?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: bookingsCountOrderByAggregateInput
    _avg?: bookingsAvgOrderByAggregateInput
    _max?: bookingsMaxOrderByAggregateInput
    _min?: bookingsMinOrderByAggregateInput
    _sum?: bookingsSumOrderByAggregateInput
  }

  export type bookingsScalarWhereWithAggregatesInput = {
    AND?: bookingsScalarWhereWithAggregatesInput | bookingsScalarWhereWithAggregatesInput[]
    OR?: bookingsScalarWhereWithAggregatesInput[]
    NOT?: bookingsScalarWhereWithAggregatesInput | bookingsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"bookings"> | string
    user_id?: UuidWithAggregatesFilter<"bookings"> | string
    property_id?: UuidWithAggregatesFilter<"bookings"> | string
    start_date?: DateTimeWithAggregatesFilter<"bookings"> | Date | string
    end_date?: DateTimeWithAggregatesFilter<"bookings"> | Date | string
    proposed_amount?: DecimalNullableWithAggregatesFilter<"bookings"> | Decimal | DecimalJsLike | number | string | null
    status?: Enumbooking_statusWithAggregatesFilter<"bookings"> | $Enums.booking_status
    cancelled_at?: DateTimeNullableWithAggregatesFilter<"bookings"> | Date | string | null
    cancellation_reason?: StringNullableWithAggregatesFilter<"bookings"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"bookings"> | Date | string
  }

  export type categoriesWhereInput = {
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    id?: UuidFilter<"categories"> | string
    name?: StringFilter<"categories"> | string
    description?: StringNullableFilter<"categories"> | string | null
    properties?: PropertiesListRelationFilter
  }

  export type categoriesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    properties?: propertiesOrderByRelationAggregateInput
  }

  export type categoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    description?: StringNullableFilter<"categories"> | string | null
    properties?: PropertiesListRelationFilter
  }, "id" | "name">

  export type categoriesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: categoriesCountOrderByAggregateInput
    _max?: categoriesMaxOrderByAggregateInput
    _min?: categoriesMinOrderByAggregateInput
  }

  export type categoriesScalarWhereWithAggregatesInput = {
    AND?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    OR?: categoriesScalarWhereWithAggregatesInput[]
    NOT?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"categories"> | string
    name?: StringWithAggregatesFilter<"categories"> | string
    description?: StringNullableWithAggregatesFilter<"categories"> | string | null
  }

  export type paymentsWhereInput = {
    AND?: paymentsWhereInput | paymentsWhereInput[]
    OR?: paymentsWhereInput[]
    NOT?: paymentsWhereInput | paymentsWhereInput[]
    id?: UuidFilter<"payments"> | string
    rental_id?: UuidFilter<"payments"> | string
    amount?: DecimalFilter<"payments"> | Decimal | DecimalJsLike | number | string
    category?: Enumpayment_categoryFilter<"payments"> | $Enums.payment_category
    payment_method?: StringNullableFilter<"payments"> | string | null
    payment_status?: Enumpayment_statusFilter<"payments"> | $Enums.payment_status
    transaction_reference?: StringNullableFilter<"payments"> | string | null
    paid_at?: DateTimeNullableFilter<"payments"> | Date | string | null
    created_at?: DateTimeFilter<"payments"> | Date | string
    rentals?: XOR<RentalsScalarRelationFilter, rentalsWhereInput>
  }

  export type paymentsOrderByWithRelationInput = {
    id?: SortOrder
    rental_id?: SortOrder
    amount?: SortOrder
    category?: SortOrder
    payment_method?: SortOrderInput | SortOrder
    payment_status?: SortOrder
    transaction_reference?: SortOrderInput | SortOrder
    paid_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    rentals?: rentalsOrderByWithRelationInput
  }

  export type paymentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    transaction_reference?: string
    AND?: paymentsWhereInput | paymentsWhereInput[]
    OR?: paymentsWhereInput[]
    NOT?: paymentsWhereInput | paymentsWhereInput[]
    rental_id?: UuidFilter<"payments"> | string
    amount?: DecimalFilter<"payments"> | Decimal | DecimalJsLike | number | string
    category?: Enumpayment_categoryFilter<"payments"> | $Enums.payment_category
    payment_method?: StringNullableFilter<"payments"> | string | null
    payment_status?: Enumpayment_statusFilter<"payments"> | $Enums.payment_status
    paid_at?: DateTimeNullableFilter<"payments"> | Date | string | null
    created_at?: DateTimeFilter<"payments"> | Date | string
    rentals?: XOR<RentalsScalarRelationFilter, rentalsWhereInput>
  }, "id" | "transaction_reference">

  export type paymentsOrderByWithAggregationInput = {
    id?: SortOrder
    rental_id?: SortOrder
    amount?: SortOrder
    category?: SortOrder
    payment_method?: SortOrderInput | SortOrder
    payment_status?: SortOrder
    transaction_reference?: SortOrderInput | SortOrder
    paid_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: paymentsCountOrderByAggregateInput
    _avg?: paymentsAvgOrderByAggregateInput
    _max?: paymentsMaxOrderByAggregateInput
    _min?: paymentsMinOrderByAggregateInput
    _sum?: paymentsSumOrderByAggregateInput
  }

  export type paymentsScalarWhereWithAggregatesInput = {
    AND?: paymentsScalarWhereWithAggregatesInput | paymentsScalarWhereWithAggregatesInput[]
    OR?: paymentsScalarWhereWithAggregatesInput[]
    NOT?: paymentsScalarWhereWithAggregatesInput | paymentsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"payments"> | string
    rental_id?: UuidWithAggregatesFilter<"payments"> | string
    amount?: DecimalWithAggregatesFilter<"payments"> | Decimal | DecimalJsLike | number | string
    category?: Enumpayment_categoryWithAggregatesFilter<"payments"> | $Enums.payment_category
    payment_method?: StringNullableWithAggregatesFilter<"payments"> | string | null
    payment_status?: Enumpayment_statusWithAggregatesFilter<"payments"> | $Enums.payment_status
    transaction_reference?: StringNullableWithAggregatesFilter<"payments"> | string | null
    paid_at?: DateTimeNullableWithAggregatesFilter<"payments"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"payments"> | Date | string
  }

  export type propertiesWhereInput = {
    AND?: propertiesWhereInput | propertiesWhereInput[]
    OR?: propertiesWhereInput[]
    NOT?: propertiesWhereInput | propertiesWhereInput[]
    id?: UuidFilter<"properties"> | string
    title?: StringFilter<"properties"> | string
    description?: StringNullableFilter<"properties"> | string | null
    address?: StringFilter<"properties"> | string
    city?: StringFilter<"properties"> | string
    state?: StringFilter<"properties"> | string
    pricing_unit?: Enumpricing_unitFilter<"properties"> | $Enums.pricing_unit
    base_price?: DecimalFilter<"properties"> | Decimal | DecimalJsLike | number | string
    approval_status?: Enumproperty_approval_statusFilter<"properties"> | $Enums.property_approval_status
    availability_status?: Enumproperty_availability_statusFilter<"properties"> | $Enums.property_availability_status
    category_id?: UuidNullableFilter<"properties"> | string | null
    manager_id?: UuidFilter<"properties"> | string
    approved_by?: UuidNullableFilter<"properties"> | string | null
    approved_at?: DateTimeNullableFilter<"properties"> | Date | string | null
    rejection_reason?: StringNullableFilter<"properties"> | string | null
    created_at?: DateTimeFilter<"properties"> | Date | string
    bookings?: BookingsListRelationFilter
    users_properties_approved_byTousers?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    categories?: XOR<CategoriesNullableScalarRelationFilter, categoriesWhereInput> | null
    users_properties_manager_idTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
    property_images?: Property_imagesListRelationFilter
    rentals?: RentalsListRelationFilter
  }

  export type propertiesOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    pricing_unit?: SortOrder
    base_price?: SortOrder
    approval_status?: SortOrder
    availability_status?: SortOrder
    category_id?: SortOrderInput | SortOrder
    manager_id?: SortOrder
    approved_by?: SortOrderInput | SortOrder
    approved_at?: SortOrderInput | SortOrder
    rejection_reason?: SortOrderInput | SortOrder
    created_at?: SortOrder
    bookings?: bookingsOrderByRelationAggregateInput
    users_properties_approved_byTousers?: usersOrderByWithRelationInput
    categories?: categoriesOrderByWithRelationInput
    users_properties_manager_idTousers?: usersOrderByWithRelationInput
    property_images?: property_imagesOrderByRelationAggregateInput
    rentals?: rentalsOrderByRelationAggregateInput
  }

  export type propertiesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: propertiesWhereInput | propertiesWhereInput[]
    OR?: propertiesWhereInput[]
    NOT?: propertiesWhereInput | propertiesWhereInput[]
    title?: StringFilter<"properties"> | string
    description?: StringNullableFilter<"properties"> | string | null
    address?: StringFilter<"properties"> | string
    city?: StringFilter<"properties"> | string
    state?: StringFilter<"properties"> | string
    pricing_unit?: Enumpricing_unitFilter<"properties"> | $Enums.pricing_unit
    base_price?: DecimalFilter<"properties"> | Decimal | DecimalJsLike | number | string
    approval_status?: Enumproperty_approval_statusFilter<"properties"> | $Enums.property_approval_status
    availability_status?: Enumproperty_availability_statusFilter<"properties"> | $Enums.property_availability_status
    category_id?: UuidNullableFilter<"properties"> | string | null
    manager_id?: UuidFilter<"properties"> | string
    approved_by?: UuidNullableFilter<"properties"> | string | null
    approved_at?: DateTimeNullableFilter<"properties"> | Date | string | null
    rejection_reason?: StringNullableFilter<"properties"> | string | null
    created_at?: DateTimeFilter<"properties"> | Date | string
    bookings?: BookingsListRelationFilter
    users_properties_approved_byTousers?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    categories?: XOR<CategoriesNullableScalarRelationFilter, categoriesWhereInput> | null
    users_properties_manager_idTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
    property_images?: Property_imagesListRelationFilter
    rentals?: RentalsListRelationFilter
  }, "id">

  export type propertiesOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    pricing_unit?: SortOrder
    base_price?: SortOrder
    approval_status?: SortOrder
    availability_status?: SortOrder
    category_id?: SortOrderInput | SortOrder
    manager_id?: SortOrder
    approved_by?: SortOrderInput | SortOrder
    approved_at?: SortOrderInput | SortOrder
    rejection_reason?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: propertiesCountOrderByAggregateInput
    _avg?: propertiesAvgOrderByAggregateInput
    _max?: propertiesMaxOrderByAggregateInput
    _min?: propertiesMinOrderByAggregateInput
    _sum?: propertiesSumOrderByAggregateInput
  }

  export type propertiesScalarWhereWithAggregatesInput = {
    AND?: propertiesScalarWhereWithAggregatesInput | propertiesScalarWhereWithAggregatesInput[]
    OR?: propertiesScalarWhereWithAggregatesInput[]
    NOT?: propertiesScalarWhereWithAggregatesInput | propertiesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"properties"> | string
    title?: StringWithAggregatesFilter<"properties"> | string
    description?: StringNullableWithAggregatesFilter<"properties"> | string | null
    address?: StringWithAggregatesFilter<"properties"> | string
    city?: StringWithAggregatesFilter<"properties"> | string
    state?: StringWithAggregatesFilter<"properties"> | string
    pricing_unit?: Enumpricing_unitWithAggregatesFilter<"properties"> | $Enums.pricing_unit
    base_price?: DecimalWithAggregatesFilter<"properties"> | Decimal | DecimalJsLike | number | string
    approval_status?: Enumproperty_approval_statusWithAggregatesFilter<"properties"> | $Enums.property_approval_status
    availability_status?: Enumproperty_availability_statusWithAggregatesFilter<"properties"> | $Enums.property_availability_status
    category_id?: UuidNullableWithAggregatesFilter<"properties"> | string | null
    manager_id?: UuidWithAggregatesFilter<"properties"> | string
    approved_by?: UuidNullableWithAggregatesFilter<"properties"> | string | null
    approved_at?: DateTimeNullableWithAggregatesFilter<"properties"> | Date | string | null
    rejection_reason?: StringNullableWithAggregatesFilter<"properties"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"properties"> | Date | string
  }

  export type property_imagesWhereInput = {
    AND?: property_imagesWhereInput | property_imagesWhereInput[]
    OR?: property_imagesWhereInput[]
    NOT?: property_imagesWhereInput | property_imagesWhereInput[]
    id?: UuidFilter<"property_images"> | string
    property_id?: UuidFilter<"property_images"> | string
    image_url?: StringFilter<"property_images"> | string
    created_at?: DateTimeFilter<"property_images"> | Date | string
    properties?: XOR<PropertiesScalarRelationFilter, propertiesWhereInput>
  }

  export type property_imagesOrderByWithRelationInput = {
    id?: SortOrder
    property_id?: SortOrder
    image_url?: SortOrder
    created_at?: SortOrder
    properties?: propertiesOrderByWithRelationInput
  }

  export type property_imagesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: property_imagesWhereInput | property_imagesWhereInput[]
    OR?: property_imagesWhereInput[]
    NOT?: property_imagesWhereInput | property_imagesWhereInput[]
    property_id?: UuidFilter<"property_images"> | string
    image_url?: StringFilter<"property_images"> | string
    created_at?: DateTimeFilter<"property_images"> | Date | string
    properties?: XOR<PropertiesScalarRelationFilter, propertiesWhereInput>
  }, "id">

  export type property_imagesOrderByWithAggregationInput = {
    id?: SortOrder
    property_id?: SortOrder
    image_url?: SortOrder
    created_at?: SortOrder
    _count?: property_imagesCountOrderByAggregateInput
    _max?: property_imagesMaxOrderByAggregateInput
    _min?: property_imagesMinOrderByAggregateInput
  }

  export type property_imagesScalarWhereWithAggregatesInput = {
    AND?: property_imagesScalarWhereWithAggregatesInput | property_imagesScalarWhereWithAggregatesInput[]
    OR?: property_imagesScalarWhereWithAggregatesInput[]
    NOT?: property_imagesScalarWhereWithAggregatesInput | property_imagesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"property_images"> | string
    property_id?: UuidWithAggregatesFilter<"property_images"> | string
    image_url?: StringWithAggregatesFilter<"property_images"> | string
    created_at?: DateTimeWithAggregatesFilter<"property_images"> | Date | string
  }

  export type property_manager_applicationsWhereInput = {
    AND?: property_manager_applicationsWhereInput | property_manager_applicationsWhereInput[]
    OR?: property_manager_applicationsWhereInput[]
    NOT?: property_manager_applicationsWhereInput | property_manager_applicationsWhereInput[]
    id?: UuidFilter<"property_manager_applications"> | string
    user_id?: UuidFilter<"property_manager_applications"> | string
    reason?: StringFilter<"property_manager_applications"> | string
    status?: Enummanager_application_statusFilter<"property_manager_applications"> | $Enums.manager_application_status
    reviewed_by?: UuidNullableFilter<"property_manager_applications"> | string | null
    reviewed_at?: DateTimeNullableFilter<"property_manager_applications"> | Date | string | null
    created_at?: DateTimeFilter<"property_manager_applications"> | Date | string
    users_property_manager_applications_reviewed_byTousers?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    users_property_manager_applications_user_idTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type property_manager_applicationsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    reviewed_by?: SortOrderInput | SortOrder
    reviewed_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    users_property_manager_applications_reviewed_byTousers?: usersOrderByWithRelationInput
    users_property_manager_applications_user_idTousers?: usersOrderByWithRelationInput
  }

  export type property_manager_applicationsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: property_manager_applicationsWhereInput | property_manager_applicationsWhereInput[]
    OR?: property_manager_applicationsWhereInput[]
    NOT?: property_manager_applicationsWhereInput | property_manager_applicationsWhereInput[]
    user_id?: UuidFilter<"property_manager_applications"> | string
    reason?: StringFilter<"property_manager_applications"> | string
    status?: Enummanager_application_statusFilter<"property_manager_applications"> | $Enums.manager_application_status
    reviewed_by?: UuidNullableFilter<"property_manager_applications"> | string | null
    reviewed_at?: DateTimeNullableFilter<"property_manager_applications"> | Date | string | null
    created_at?: DateTimeFilter<"property_manager_applications"> | Date | string
    users_property_manager_applications_reviewed_byTousers?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    users_property_manager_applications_user_idTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type property_manager_applicationsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    reviewed_by?: SortOrderInput | SortOrder
    reviewed_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: property_manager_applicationsCountOrderByAggregateInput
    _max?: property_manager_applicationsMaxOrderByAggregateInput
    _min?: property_manager_applicationsMinOrderByAggregateInput
  }

  export type property_manager_applicationsScalarWhereWithAggregatesInput = {
    AND?: property_manager_applicationsScalarWhereWithAggregatesInput | property_manager_applicationsScalarWhereWithAggregatesInput[]
    OR?: property_manager_applicationsScalarWhereWithAggregatesInput[]
    NOT?: property_manager_applicationsScalarWhereWithAggregatesInput | property_manager_applicationsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"property_manager_applications"> | string
    user_id?: UuidWithAggregatesFilter<"property_manager_applications"> | string
    reason?: StringWithAggregatesFilter<"property_manager_applications"> | string
    status?: Enummanager_application_statusWithAggregatesFilter<"property_manager_applications"> | $Enums.manager_application_status
    reviewed_by?: UuidNullableWithAggregatesFilter<"property_manager_applications"> | string | null
    reviewed_at?: DateTimeNullableWithAggregatesFilter<"property_manager_applications"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"property_manager_applications"> | Date | string
  }

  export type rentalsWhereInput = {
    AND?: rentalsWhereInput | rentalsWhereInput[]
    OR?: rentalsWhereInput[]
    NOT?: rentalsWhereInput | rentalsWhereInput[]
    id?: UuidFilter<"rentals"> | string
    booking_id?: UuidFilter<"rentals"> | string
    user_id?: UuidFilter<"rentals"> | string
    property_id?: UuidFilter<"rentals"> | string
    lease_start?: DateTimeFilter<"rentals"> | Date | string
    lease_end?: DateTimeFilter<"rentals"> | Date | string
    pricing_unit?: Enumpricing_unitFilter<"rentals"> | $Enums.pricing_unit
    agreed_price?: DecimalFilter<"rentals"> | Decimal | DecimalJsLike | number | string
    status?: Enumrental_statusFilter<"rentals"> | $Enums.rental_status
    created_at?: DateTimeFilter<"rentals"> | Date | string
    payments?: PaymentsListRelationFilter
    bookings?: XOR<BookingsScalarRelationFilter, bookingsWhereInput>
    properties?: XOR<PropertiesScalarRelationFilter, propertiesWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type rentalsOrderByWithRelationInput = {
    id?: SortOrder
    booking_id?: SortOrder
    user_id?: SortOrder
    property_id?: SortOrder
    lease_start?: SortOrder
    lease_end?: SortOrder
    pricing_unit?: SortOrder
    agreed_price?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    payments?: paymentsOrderByRelationAggregateInput
    bookings?: bookingsOrderByWithRelationInput
    properties?: propertiesOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type rentalsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    booking_id?: string
    AND?: rentalsWhereInput | rentalsWhereInput[]
    OR?: rentalsWhereInput[]
    NOT?: rentalsWhereInput | rentalsWhereInput[]
    user_id?: UuidFilter<"rentals"> | string
    property_id?: UuidFilter<"rentals"> | string
    lease_start?: DateTimeFilter<"rentals"> | Date | string
    lease_end?: DateTimeFilter<"rentals"> | Date | string
    pricing_unit?: Enumpricing_unitFilter<"rentals"> | $Enums.pricing_unit
    agreed_price?: DecimalFilter<"rentals"> | Decimal | DecimalJsLike | number | string
    status?: Enumrental_statusFilter<"rentals"> | $Enums.rental_status
    created_at?: DateTimeFilter<"rentals"> | Date | string
    payments?: PaymentsListRelationFilter
    bookings?: XOR<BookingsScalarRelationFilter, bookingsWhereInput>
    properties?: XOR<PropertiesScalarRelationFilter, propertiesWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id" | "booking_id">

  export type rentalsOrderByWithAggregationInput = {
    id?: SortOrder
    booking_id?: SortOrder
    user_id?: SortOrder
    property_id?: SortOrder
    lease_start?: SortOrder
    lease_end?: SortOrder
    pricing_unit?: SortOrder
    agreed_price?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    _count?: rentalsCountOrderByAggregateInput
    _avg?: rentalsAvgOrderByAggregateInput
    _max?: rentalsMaxOrderByAggregateInput
    _min?: rentalsMinOrderByAggregateInput
    _sum?: rentalsSumOrderByAggregateInput
  }

  export type rentalsScalarWhereWithAggregatesInput = {
    AND?: rentalsScalarWhereWithAggregatesInput | rentalsScalarWhereWithAggregatesInput[]
    OR?: rentalsScalarWhereWithAggregatesInput[]
    NOT?: rentalsScalarWhereWithAggregatesInput | rentalsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"rentals"> | string
    booking_id?: UuidWithAggregatesFilter<"rentals"> | string
    user_id?: UuidWithAggregatesFilter<"rentals"> | string
    property_id?: UuidWithAggregatesFilter<"rentals"> | string
    lease_start?: DateTimeWithAggregatesFilter<"rentals"> | Date | string
    lease_end?: DateTimeWithAggregatesFilter<"rentals"> | Date | string
    pricing_unit?: Enumpricing_unitWithAggregatesFilter<"rentals"> | $Enums.pricing_unit
    agreed_price?: DecimalWithAggregatesFilter<"rentals"> | Decimal | DecimalJsLike | number | string
    status?: Enumrental_statusWithAggregatesFilter<"rentals"> | $Enums.rental_status
    created_at?: DateTimeWithAggregatesFilter<"rentals"> | Date | string
  }

  export type rolesWhereInput = {
    AND?: rolesWhereInput | rolesWhereInput[]
    OR?: rolesWhereInput[]
    NOT?: rolesWhereInput | rolesWhereInput[]
    id?: UuidFilter<"roles"> | string
    name?: StringFilter<"roles"> | string
    user_roles?: User_rolesListRelationFilter
  }

  export type rolesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    user_roles?: user_rolesOrderByRelationAggregateInput
  }

  export type rolesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: rolesWhereInput | rolesWhereInput[]
    OR?: rolesWhereInput[]
    NOT?: rolesWhereInput | rolesWhereInput[]
    user_roles?: User_rolesListRelationFilter
  }, "id" | "name">

  export type rolesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: rolesCountOrderByAggregateInput
    _max?: rolesMaxOrderByAggregateInput
    _min?: rolesMinOrderByAggregateInput
  }

  export type rolesScalarWhereWithAggregatesInput = {
    AND?: rolesScalarWhereWithAggregatesInput | rolesScalarWhereWithAggregatesInput[]
    OR?: rolesScalarWhereWithAggregatesInput[]
    NOT?: rolesScalarWhereWithAggregatesInput | rolesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"roles"> | string
    name?: StringWithAggregatesFilter<"roles"> | string
  }

  export type user_rolesWhereInput = {
    AND?: user_rolesWhereInput | user_rolesWhereInput[]
    OR?: user_rolesWhereInput[]
    NOT?: user_rolesWhereInput | user_rolesWhereInput[]
    id?: UuidFilter<"user_roles"> | string
    user_id?: UuidFilter<"user_roles"> | string
    role_id?: UuidFilter<"user_roles"> | string
    assigned_by?: UuidNullableFilter<"user_roles"> | string | null
    assigned_at?: DateTimeFilter<"user_roles"> | Date | string
    revoked_by?: UuidNullableFilter<"user_roles"> | string | null
    revoked_at?: DateTimeNullableFilter<"user_roles"> | Date | string | null
    created_at?: DateTimeFilter<"user_roles"> | Date | string
    users_user_roles_assigned_byTousers?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    users_user_roles_revoked_byTousers?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    roles?: XOR<RolesScalarRelationFilter, rolesWhereInput>
    users_user_roles_user_idTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type user_rolesOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    role_id?: SortOrder
    assigned_by?: SortOrderInput | SortOrder
    assigned_at?: SortOrder
    revoked_by?: SortOrderInput | SortOrder
    revoked_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    users_user_roles_assigned_byTousers?: usersOrderByWithRelationInput
    users_user_roles_revoked_byTousers?: usersOrderByWithRelationInput
    roles?: rolesOrderByWithRelationInput
    users_user_roles_user_idTousers?: usersOrderByWithRelationInput
  }

  export type user_rolesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    user_id_role_id_revoked_at?: user_rolesUser_idRole_idRevoked_atCompoundUniqueInput
    AND?: user_rolesWhereInput | user_rolesWhereInput[]
    OR?: user_rolesWhereInput[]
    NOT?: user_rolesWhereInput | user_rolesWhereInput[]
    user_id?: UuidFilter<"user_roles"> | string
    role_id?: UuidFilter<"user_roles"> | string
    assigned_by?: UuidNullableFilter<"user_roles"> | string | null
    assigned_at?: DateTimeFilter<"user_roles"> | Date | string
    revoked_by?: UuidNullableFilter<"user_roles"> | string | null
    revoked_at?: DateTimeNullableFilter<"user_roles"> | Date | string | null
    created_at?: DateTimeFilter<"user_roles"> | Date | string
    users_user_roles_assigned_byTousers?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    users_user_roles_revoked_byTousers?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    roles?: XOR<RolesScalarRelationFilter, rolesWhereInput>
    users_user_roles_user_idTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id" | "user_id_role_id_revoked_at">

  export type user_rolesOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    role_id?: SortOrder
    assigned_by?: SortOrderInput | SortOrder
    assigned_at?: SortOrder
    revoked_by?: SortOrderInput | SortOrder
    revoked_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: user_rolesCountOrderByAggregateInput
    _max?: user_rolesMaxOrderByAggregateInput
    _min?: user_rolesMinOrderByAggregateInput
  }

  export type user_rolesScalarWhereWithAggregatesInput = {
    AND?: user_rolesScalarWhereWithAggregatesInput | user_rolesScalarWhereWithAggregatesInput[]
    OR?: user_rolesScalarWhereWithAggregatesInput[]
    NOT?: user_rolesScalarWhereWithAggregatesInput | user_rolesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"user_roles"> | string
    user_id?: UuidWithAggregatesFilter<"user_roles"> | string
    role_id?: UuidWithAggregatesFilter<"user_roles"> | string
    assigned_by?: UuidNullableWithAggregatesFilter<"user_roles"> | string | null
    assigned_at?: DateTimeWithAggregatesFilter<"user_roles"> | Date | string
    revoked_by?: UuidNullableWithAggregatesFilter<"user_roles"> | string | null
    revoked_at?: DateTimeNullableWithAggregatesFilter<"user_roles"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"user_roles"> | Date | string
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: UuidFilter<"users"> | string
    first_name?: StringFilter<"users"> | string
    last_name?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    password_hash?: StringFilter<"users"> | string
    phone_number?: StringNullableFilter<"users"> | string | null
    is_suspended?: BoolFilter<"users"> | boolean
    created_at?: DateTimeFilter<"users"> | Date | string
    bookings?: BookingsListRelationFilter
    properties_properties_approved_byTousers?: PropertiesListRelationFilter
    properties_properties_manager_idTousers?: PropertiesListRelationFilter
    property_manager_applications_property_manager_applications_reviewed_byTousers?: Property_manager_applicationsListRelationFilter
    property_manager_applications_property_manager_applications_user_idTousers?: Property_manager_applicationsListRelationFilter
    rentals?: RentalsListRelationFilter
    user_roles_user_roles_assigned_byTousers?: User_rolesListRelationFilter
    user_roles_user_roles_revoked_byTousers?: User_rolesListRelationFilter
    user_roles_user_roles_user_idTousers?: User_rolesListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    phone_number?: SortOrderInput | SortOrder
    is_suspended?: SortOrder
    created_at?: SortOrder
    bookings?: bookingsOrderByRelationAggregateInput
    properties_properties_approved_byTousers?: propertiesOrderByRelationAggregateInput
    properties_properties_manager_idTousers?: propertiesOrderByRelationAggregateInput
    property_manager_applications_property_manager_applications_reviewed_byTousers?: property_manager_applicationsOrderByRelationAggregateInput
    property_manager_applications_property_manager_applications_user_idTousers?: property_manager_applicationsOrderByRelationAggregateInput
    rentals?: rentalsOrderByRelationAggregateInput
    user_roles_user_roles_assigned_byTousers?: user_rolesOrderByRelationAggregateInput
    user_roles_user_roles_revoked_byTousers?: user_rolesOrderByRelationAggregateInput
    user_roles_user_roles_user_idTousers?: user_rolesOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    first_name?: StringFilter<"users"> | string
    last_name?: StringFilter<"users"> | string
    password_hash?: StringFilter<"users"> | string
    phone_number?: StringNullableFilter<"users"> | string | null
    is_suspended?: BoolFilter<"users"> | boolean
    created_at?: DateTimeFilter<"users"> | Date | string
    bookings?: BookingsListRelationFilter
    properties_properties_approved_byTousers?: PropertiesListRelationFilter
    properties_properties_manager_idTousers?: PropertiesListRelationFilter
    property_manager_applications_property_manager_applications_reviewed_byTousers?: Property_manager_applicationsListRelationFilter
    property_manager_applications_property_manager_applications_user_idTousers?: Property_manager_applicationsListRelationFilter
    rentals?: RentalsListRelationFilter
    user_roles_user_roles_assigned_byTousers?: User_rolesListRelationFilter
    user_roles_user_roles_revoked_byTousers?: User_rolesListRelationFilter
    user_roles_user_roles_user_idTousers?: User_rolesListRelationFilter
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    phone_number?: SortOrderInput | SortOrder
    is_suspended?: SortOrder
    created_at?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"users"> | string
    first_name?: StringWithAggregatesFilter<"users"> | string
    last_name?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    password_hash?: StringWithAggregatesFilter<"users"> | string
    phone_number?: StringNullableWithAggregatesFilter<"users"> | string | null
    is_suspended?: BoolWithAggregatesFilter<"users"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
  }

  export type bookingsCreateInput = {
    id?: string
    start_date: Date | string
    end_date: Date | string
    proposed_amount?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.booking_status
    cancelled_at?: Date | string | null
    cancellation_reason?: string | null
    created_at?: Date | string
    properties: propertiesCreateNestedOneWithoutBookingsInput
    users: usersCreateNestedOneWithoutBookingsInput
    rentals?: rentalsCreateNestedOneWithoutBookingsInput
  }

  export type bookingsUncheckedCreateInput = {
    id?: string
    user_id: string
    property_id: string
    start_date: Date | string
    end_date: Date | string
    proposed_amount?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.booking_status
    cancelled_at?: Date | string | null
    cancellation_reason?: string | null
    created_at?: Date | string
    rentals?: rentalsUncheckedCreateNestedOneWithoutBookingsInput
  }

  export type bookingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    proposed_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellation_reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: propertiesUpdateOneRequiredWithoutBookingsNestedInput
    users?: usersUpdateOneRequiredWithoutBookingsNestedInput
    rentals?: rentalsUpdateOneWithoutBookingsNestedInput
  }

  export type bookingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    property_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    proposed_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellation_reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    rentals?: rentalsUncheckedUpdateOneWithoutBookingsNestedInput
  }

  export type bookingsCreateManyInput = {
    id?: string
    user_id: string
    property_id: string
    start_date: Date | string
    end_date: Date | string
    proposed_amount?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.booking_status
    cancelled_at?: Date | string | null
    cancellation_reason?: string | null
    created_at?: Date | string
  }

  export type bookingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    proposed_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellation_reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bookingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    property_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    proposed_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellation_reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type categoriesCreateInput = {
    id?: string
    name: string
    description?: string | null
    properties?: propertiesCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    properties?: propertiesUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    properties?: propertiesUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    properties?: propertiesUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesCreateManyInput = {
    id?: string
    name: string
    description?: string | null
  }

  export type categoriesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type categoriesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type paymentsCreateInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    category: $Enums.payment_category
    payment_method?: string | null
    payment_status: $Enums.payment_status
    transaction_reference?: string | null
    paid_at?: Date | string | null
    created_at?: Date | string
    rentals: rentalsCreateNestedOneWithoutPaymentsInput
  }

  export type paymentsUncheckedCreateInput = {
    id?: string
    rental_id: string
    amount: Decimal | DecimalJsLike | number | string
    category: $Enums.payment_category
    payment_method?: string | null
    payment_status: $Enums.payment_status
    transaction_reference?: string | null
    paid_at?: Date | string | null
    created_at?: Date | string
  }

  export type paymentsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: Enumpayment_categoryFieldUpdateOperationsInput | $Enums.payment_category
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    payment_status?: Enumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status
    transaction_reference?: NullableStringFieldUpdateOperationsInput | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    rentals?: rentalsUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type paymentsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rental_id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: Enumpayment_categoryFieldUpdateOperationsInput | $Enums.payment_category
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    payment_status?: Enumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status
    transaction_reference?: NullableStringFieldUpdateOperationsInput | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paymentsCreateManyInput = {
    id?: string
    rental_id: string
    amount: Decimal | DecimalJsLike | number | string
    category: $Enums.payment_category
    payment_method?: string | null
    payment_status: $Enums.payment_status
    transaction_reference?: string | null
    paid_at?: Date | string | null
    created_at?: Date | string
  }

  export type paymentsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: Enumpayment_categoryFieldUpdateOperationsInput | $Enums.payment_category
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    payment_status?: Enumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status
    transaction_reference?: NullableStringFieldUpdateOperationsInput | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paymentsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    rental_id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: Enumpayment_categoryFieldUpdateOperationsInput | $Enums.payment_category
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    payment_status?: Enumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status
    transaction_reference?: NullableStringFieldUpdateOperationsInput | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type propertiesCreateInput = {
    id?: string
    title: string
    description?: string | null
    address: string
    city: string
    state: string
    pricing_unit: $Enums.pricing_unit
    base_price: Decimal | DecimalJsLike | number | string
    approval_status?: $Enums.property_approval_status
    availability_status?: $Enums.property_availability_status
    approved_at?: Date | string | null
    rejection_reason?: string | null
    created_at?: Date | string
    bookings?: bookingsCreateNestedManyWithoutPropertiesInput
    users_properties_approved_byTousers?: usersCreateNestedOneWithoutProperties_properties_approved_byTousersInput
    categories?: categoriesCreateNestedOneWithoutPropertiesInput
    users_properties_manager_idTousers: usersCreateNestedOneWithoutProperties_properties_manager_idTousersInput
    property_images?: property_imagesCreateNestedManyWithoutPropertiesInput
    rentals?: rentalsCreateNestedManyWithoutPropertiesInput
  }

  export type propertiesUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    address: string
    city: string
    state: string
    pricing_unit: $Enums.pricing_unit
    base_price: Decimal | DecimalJsLike | number | string
    approval_status?: $Enums.property_approval_status
    availability_status?: $Enums.property_availability_status
    category_id?: string | null
    manager_id: string
    approved_by?: string | null
    approved_at?: Date | string | null
    rejection_reason?: string | null
    created_at?: Date | string
    bookings?: bookingsUncheckedCreateNestedManyWithoutPropertiesInput
    property_images?: property_imagesUncheckedCreateNestedManyWithoutPropertiesInput
    rentals?: rentalsUncheckedCreateNestedManyWithoutPropertiesInput
  }

  export type propertiesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pricing_unit?: Enumpricing_unitFieldUpdateOperationsInput | $Enums.pricing_unit
    base_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    approval_status?: Enumproperty_approval_statusFieldUpdateOperationsInput | $Enums.property_approval_status
    availability_status?: Enumproperty_availability_statusFieldUpdateOperationsInput | $Enums.property_availability_status
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejection_reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: bookingsUpdateManyWithoutPropertiesNestedInput
    users_properties_approved_byTousers?: usersUpdateOneWithoutProperties_properties_approved_byTousersNestedInput
    categories?: categoriesUpdateOneWithoutPropertiesNestedInput
    users_properties_manager_idTousers?: usersUpdateOneRequiredWithoutProperties_properties_manager_idTousersNestedInput
    property_images?: property_imagesUpdateManyWithoutPropertiesNestedInput
    rentals?: rentalsUpdateManyWithoutPropertiesNestedInput
  }

  export type propertiesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pricing_unit?: Enumpricing_unitFieldUpdateOperationsInput | $Enums.pricing_unit
    base_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    approval_status?: Enumproperty_approval_statusFieldUpdateOperationsInput | $Enums.property_approval_status
    availability_status?: Enumproperty_availability_statusFieldUpdateOperationsInput | $Enums.property_availability_status
    category_id?: NullableStringFieldUpdateOperationsInput | string | null
    manager_id?: StringFieldUpdateOperationsInput | string
    approved_by?: NullableStringFieldUpdateOperationsInput | string | null
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejection_reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: bookingsUncheckedUpdateManyWithoutPropertiesNestedInput
    property_images?: property_imagesUncheckedUpdateManyWithoutPropertiesNestedInput
    rentals?: rentalsUncheckedUpdateManyWithoutPropertiesNestedInput
  }

  export type propertiesCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    address: string
    city: string
    state: string
    pricing_unit: $Enums.pricing_unit
    base_price: Decimal | DecimalJsLike | number | string
    approval_status?: $Enums.property_approval_status
    availability_status?: $Enums.property_availability_status
    category_id?: string | null
    manager_id: string
    approved_by?: string | null
    approved_at?: Date | string | null
    rejection_reason?: string | null
    created_at?: Date | string
  }

  export type propertiesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pricing_unit?: Enumpricing_unitFieldUpdateOperationsInput | $Enums.pricing_unit
    base_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    approval_status?: Enumproperty_approval_statusFieldUpdateOperationsInput | $Enums.property_approval_status
    availability_status?: Enumproperty_availability_statusFieldUpdateOperationsInput | $Enums.property_availability_status
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejection_reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type propertiesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pricing_unit?: Enumpricing_unitFieldUpdateOperationsInput | $Enums.pricing_unit
    base_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    approval_status?: Enumproperty_approval_statusFieldUpdateOperationsInput | $Enums.property_approval_status
    availability_status?: Enumproperty_availability_statusFieldUpdateOperationsInput | $Enums.property_availability_status
    category_id?: NullableStringFieldUpdateOperationsInput | string | null
    manager_id?: StringFieldUpdateOperationsInput | string
    approved_by?: NullableStringFieldUpdateOperationsInput | string | null
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejection_reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type property_imagesCreateInput = {
    id?: string
    image_url: string
    created_at?: Date | string
    properties: propertiesCreateNestedOneWithoutProperty_imagesInput
  }

  export type property_imagesUncheckedCreateInput = {
    id?: string
    property_id: string
    image_url: string
    created_at?: Date | string
  }

  export type property_imagesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: propertiesUpdateOneRequiredWithoutProperty_imagesNestedInput
  }

  export type property_imagesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    property_id?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type property_imagesCreateManyInput = {
    id?: string
    property_id: string
    image_url: string
    created_at?: Date | string
  }

  export type property_imagesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type property_imagesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    property_id?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type property_manager_applicationsCreateInput = {
    id?: string
    reason: string
    status?: $Enums.manager_application_status
    reviewed_at?: Date | string | null
    created_at?: Date | string
    users_property_manager_applications_reviewed_byTousers?: usersCreateNestedOneWithoutProperty_manager_applications_property_manager_applications_reviewed_byTousersInput
    users_property_manager_applications_user_idTousers: usersCreateNestedOneWithoutProperty_manager_applications_property_manager_applications_user_idTousersInput
  }

  export type property_manager_applicationsUncheckedCreateInput = {
    id?: string
    user_id: string
    reason: string
    status?: $Enums.manager_application_status
    reviewed_by?: string | null
    reviewed_at?: Date | string | null
    created_at?: Date | string
  }

  export type property_manager_applicationsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: Enummanager_application_statusFieldUpdateOperationsInput | $Enums.manager_application_status
    reviewed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users_property_manager_applications_reviewed_byTousers?: usersUpdateOneWithoutProperty_manager_applications_property_manager_applications_reviewed_byTousersNestedInput
    users_property_manager_applications_user_idTousers?: usersUpdateOneRequiredWithoutProperty_manager_applications_property_manager_applications_user_idTousersNestedInput
  }

  export type property_manager_applicationsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: Enummanager_application_statusFieldUpdateOperationsInput | $Enums.manager_application_status
    reviewed_by?: NullableStringFieldUpdateOperationsInput | string | null
    reviewed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type property_manager_applicationsCreateManyInput = {
    id?: string
    user_id: string
    reason: string
    status?: $Enums.manager_application_status
    reviewed_by?: string | null
    reviewed_at?: Date | string | null
    created_at?: Date | string
  }

  export type property_manager_applicationsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: Enummanager_application_statusFieldUpdateOperationsInput | $Enums.manager_application_status
    reviewed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type property_manager_applicationsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: Enummanager_application_statusFieldUpdateOperationsInput | $Enums.manager_application_status
    reviewed_by?: NullableStringFieldUpdateOperationsInput | string | null
    reviewed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rentalsCreateInput = {
    id?: string
    lease_start: Date | string
    lease_end: Date | string
    pricing_unit: $Enums.pricing_unit
    agreed_price: Decimal | DecimalJsLike | number | string
    status?: $Enums.rental_status
    created_at?: Date | string
    payments?: paymentsCreateNestedManyWithoutRentalsInput
    bookings: bookingsCreateNestedOneWithoutRentalsInput
    properties: propertiesCreateNestedOneWithoutRentalsInput
    users: usersCreateNestedOneWithoutRentalsInput
  }

  export type rentalsUncheckedCreateInput = {
    id?: string
    booking_id: string
    user_id: string
    property_id: string
    lease_start: Date | string
    lease_end: Date | string
    pricing_unit: $Enums.pricing_unit
    agreed_price: Decimal | DecimalJsLike | number | string
    status?: $Enums.rental_status
    created_at?: Date | string
    payments?: paymentsUncheckedCreateNestedManyWithoutRentalsInput
  }

  export type rentalsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lease_start?: DateTimeFieldUpdateOperationsInput | Date | string
    lease_end?: DateTimeFieldUpdateOperationsInput | Date | string
    pricing_unit?: Enumpricing_unitFieldUpdateOperationsInput | $Enums.pricing_unit
    agreed_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: Enumrental_statusFieldUpdateOperationsInput | $Enums.rental_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: paymentsUpdateManyWithoutRentalsNestedInput
    bookings?: bookingsUpdateOneRequiredWithoutRentalsNestedInput
    properties?: propertiesUpdateOneRequiredWithoutRentalsNestedInput
    users?: usersUpdateOneRequiredWithoutRentalsNestedInput
  }

  export type rentalsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    booking_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    property_id?: StringFieldUpdateOperationsInput | string
    lease_start?: DateTimeFieldUpdateOperationsInput | Date | string
    lease_end?: DateTimeFieldUpdateOperationsInput | Date | string
    pricing_unit?: Enumpricing_unitFieldUpdateOperationsInput | $Enums.pricing_unit
    agreed_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: Enumrental_statusFieldUpdateOperationsInput | $Enums.rental_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: paymentsUncheckedUpdateManyWithoutRentalsNestedInput
  }

  export type rentalsCreateManyInput = {
    id?: string
    booking_id: string
    user_id: string
    property_id: string
    lease_start: Date | string
    lease_end: Date | string
    pricing_unit: $Enums.pricing_unit
    agreed_price: Decimal | DecimalJsLike | number | string
    status?: $Enums.rental_status
    created_at?: Date | string
  }

  export type rentalsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    lease_start?: DateTimeFieldUpdateOperationsInput | Date | string
    lease_end?: DateTimeFieldUpdateOperationsInput | Date | string
    pricing_unit?: Enumpricing_unitFieldUpdateOperationsInput | $Enums.pricing_unit
    agreed_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: Enumrental_statusFieldUpdateOperationsInput | $Enums.rental_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rentalsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    booking_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    property_id?: StringFieldUpdateOperationsInput | string
    lease_start?: DateTimeFieldUpdateOperationsInput | Date | string
    lease_end?: DateTimeFieldUpdateOperationsInput | Date | string
    pricing_unit?: Enumpricing_unitFieldUpdateOperationsInput | $Enums.pricing_unit
    agreed_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: Enumrental_statusFieldUpdateOperationsInput | $Enums.rental_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rolesCreateInput = {
    id?: string
    name: string
    user_roles?: user_rolesCreateNestedManyWithoutRolesInput
  }

  export type rolesUncheckedCreateInput = {
    id?: string
    name: string
    user_roles?: user_rolesUncheckedCreateNestedManyWithoutRolesInput
  }

  export type rolesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    user_roles?: user_rolesUpdateManyWithoutRolesNestedInput
  }

  export type rolesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    user_roles?: user_rolesUncheckedUpdateManyWithoutRolesNestedInput
  }

  export type rolesCreateManyInput = {
    id?: string
    name: string
  }

  export type rolesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type rolesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type user_rolesCreateInput = {
    id?: string
    assigned_at?: Date | string
    revoked_at?: Date | string | null
    created_at?: Date | string
    users_user_roles_assigned_byTousers?: usersCreateNestedOneWithoutUser_roles_user_roles_assigned_byTousersInput
    users_user_roles_revoked_byTousers?: usersCreateNestedOneWithoutUser_roles_user_roles_revoked_byTousersInput
    roles: rolesCreateNestedOneWithoutUser_rolesInput
    users_user_roles_user_idTousers: usersCreateNestedOneWithoutUser_roles_user_roles_user_idTousersInput
  }

  export type user_rolesUncheckedCreateInput = {
    id?: string
    user_id: string
    role_id: string
    assigned_by?: string | null
    assigned_at?: Date | string
    revoked_by?: string | null
    revoked_at?: Date | string | null
    created_at?: Date | string
  }

  export type user_rolesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users_user_roles_assigned_byTousers?: usersUpdateOneWithoutUser_roles_user_roles_assigned_byTousersNestedInput
    users_user_roles_revoked_byTousers?: usersUpdateOneWithoutUser_roles_user_roles_revoked_byTousersNestedInput
    roles?: rolesUpdateOneRequiredWithoutUser_rolesNestedInput
    users_user_roles_user_idTousers?: usersUpdateOneRequiredWithoutUser_roles_user_roles_user_idTousersNestedInput
  }

  export type user_rolesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    role_id?: StringFieldUpdateOperationsInput | string
    assigned_by?: NullableStringFieldUpdateOperationsInput | string | null
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked_by?: NullableStringFieldUpdateOperationsInput | string | null
    revoked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_rolesCreateManyInput = {
    id?: string
    user_id: string
    role_id: string
    assigned_by?: string | null
    assigned_at?: Date | string
    revoked_by?: string | null
    revoked_at?: Date | string | null
    created_at?: Date | string
  }

  export type user_rolesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_rolesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    role_id?: StringFieldUpdateOperationsInput | string
    assigned_by?: NullableStringFieldUpdateOperationsInput | string | null
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked_by?: NullableStringFieldUpdateOperationsInput | string | null
    revoked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersCreateInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    password_hash: string
    phone_number?: string | null
    is_suspended?: boolean
    created_at?: Date | string
    bookings?: bookingsCreateNestedManyWithoutUsersInput
    properties_properties_approved_byTousers?: propertiesCreateNestedManyWithoutUsers_properties_approved_byTousersInput
    properties_properties_manager_idTousers?: propertiesCreateNestedManyWithoutUsers_properties_manager_idTousersInput
    property_manager_applications_property_manager_applications_reviewed_byTousers?: property_manager_applicationsCreateNestedManyWithoutUsers_property_manager_applications_reviewed_byTousersInput
    property_manager_applications_property_manager_applications_user_idTousers?: property_manager_applicationsCreateNestedManyWithoutUsers_property_manager_applications_user_idTousersInput
    rentals?: rentalsCreateNestedManyWithoutUsersInput
    user_roles_user_roles_assigned_byTousers?: user_rolesCreateNestedManyWithoutUsers_user_roles_assigned_byTousersInput
    user_roles_user_roles_revoked_byTousers?: user_rolesCreateNestedManyWithoutUsers_user_roles_revoked_byTousersInput
    user_roles_user_roles_user_idTousers?: user_rolesCreateNestedManyWithoutUsers_user_roles_user_idTousersInput
  }

  export type usersUncheckedCreateInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    password_hash: string
    phone_number?: string | null
    is_suspended?: boolean
    created_at?: Date | string
    bookings?: bookingsUncheckedCreateNestedManyWithoutUsersInput
    properties_properties_approved_byTousers?: propertiesUncheckedCreateNestedManyWithoutUsers_properties_approved_byTousersInput
    properties_properties_manager_idTousers?: propertiesUncheckedCreateNestedManyWithoutUsers_properties_manager_idTousersInput
    property_manager_applications_property_manager_applications_reviewed_byTousers?: property_manager_applicationsUncheckedCreateNestedManyWithoutUsers_property_manager_applications_reviewed_byTousersInput
    property_manager_applications_property_manager_applications_user_idTousers?: property_manager_applicationsUncheckedCreateNestedManyWithoutUsers_property_manager_applications_user_idTousersInput
    rentals?: rentalsUncheckedCreateNestedManyWithoutUsersInput
    user_roles_user_roles_assigned_byTousers?: user_rolesUncheckedCreateNestedManyWithoutUsers_user_roles_assigned_byTousersInput
    user_roles_user_roles_revoked_byTousers?: user_rolesUncheckedCreateNestedManyWithoutUsers_user_roles_revoked_byTousersInput
    user_roles_user_roles_user_idTousers?: user_rolesUncheckedCreateNestedManyWithoutUsers_user_roles_user_idTousersInput
  }

  export type usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    is_suspended?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: bookingsUpdateManyWithoutUsersNestedInput
    properties_properties_approved_byTousers?: propertiesUpdateManyWithoutUsers_properties_approved_byTousersNestedInput
    properties_properties_manager_idTousers?: propertiesUpdateManyWithoutUsers_properties_manager_idTousersNestedInput
    property_manager_applications_property_manager_applications_reviewed_byTousers?: property_manager_applicationsUpdateManyWithoutUsers_property_manager_applications_reviewed_byTousersNestedInput
    property_manager_applications_property_manager_applications_user_idTousers?: property_manager_applicationsUpdateManyWithoutUsers_property_manager_applications_user_idTousersNestedInput
    rentals?: rentalsUpdateManyWithoutUsersNestedInput
    user_roles_user_roles_assigned_byTousers?: user_rolesUpdateManyWithoutUsers_user_roles_assigned_byTousersNestedInput
    user_roles_user_roles_revoked_byTousers?: user_rolesUpdateManyWithoutUsers_user_roles_revoked_byTousersNestedInput
    user_roles_user_roles_user_idTousers?: user_rolesUpdateManyWithoutUsers_user_roles_user_idTousersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    is_suspended?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: bookingsUncheckedUpdateManyWithoutUsersNestedInput
    properties_properties_approved_byTousers?: propertiesUncheckedUpdateManyWithoutUsers_properties_approved_byTousersNestedInput
    properties_properties_manager_idTousers?: propertiesUncheckedUpdateManyWithoutUsers_properties_manager_idTousersNestedInput
    property_manager_applications_property_manager_applications_reviewed_byTousers?: property_manager_applicationsUncheckedUpdateManyWithoutUsers_property_manager_applications_reviewed_byTousersNestedInput
    property_manager_applications_property_manager_applications_user_idTousers?: property_manager_applicationsUncheckedUpdateManyWithoutUsers_property_manager_applications_user_idTousersNestedInput
    rentals?: rentalsUncheckedUpdateManyWithoutUsersNestedInput
    user_roles_user_roles_assigned_byTousers?: user_rolesUncheckedUpdateManyWithoutUsers_user_roles_assigned_byTousersNestedInput
    user_roles_user_roles_revoked_byTousers?: user_rolesUncheckedUpdateManyWithoutUsers_user_roles_revoked_byTousersNestedInput
    user_roles_user_roles_user_idTousers?: user_rolesUncheckedUpdateManyWithoutUsers_user_roles_user_idTousersNestedInput
  }

  export type usersCreateManyInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    password_hash: string
    phone_number?: string | null
    is_suspended?: boolean
    created_at?: Date | string
  }

  export type usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    is_suspended?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    is_suspended?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type Enumbooking_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.booking_status | Enumbooking_statusFieldRefInput<$PrismaModel>
    in?: $Enums.booking_status[] | ListEnumbooking_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.booking_status[] | ListEnumbooking_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumbooking_statusFilter<$PrismaModel> | $Enums.booking_status
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type PropertiesScalarRelationFilter = {
    is?: propertiesWhereInput
    isNot?: propertiesWhereInput
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type RentalsNullableScalarRelationFilter = {
    is?: rentalsWhereInput | null
    isNot?: rentalsWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type bookingsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    property_id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    proposed_amount?: SortOrder
    status?: SortOrder
    cancelled_at?: SortOrder
    cancellation_reason?: SortOrder
    created_at?: SortOrder
  }

  export type bookingsAvgOrderByAggregateInput = {
    proposed_amount?: SortOrder
  }

  export type bookingsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    property_id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    proposed_amount?: SortOrder
    status?: SortOrder
    cancelled_at?: SortOrder
    cancellation_reason?: SortOrder
    created_at?: SortOrder
  }

  export type bookingsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    property_id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    proposed_amount?: SortOrder
    status?: SortOrder
    cancelled_at?: SortOrder
    cancellation_reason?: SortOrder
    created_at?: SortOrder
  }

  export type bookingsSumOrderByAggregateInput = {
    proposed_amount?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type Enumbooking_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.booking_status | Enumbooking_statusFieldRefInput<$PrismaModel>
    in?: $Enums.booking_status[] | ListEnumbooking_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.booking_status[] | ListEnumbooking_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumbooking_statusWithAggregatesFilter<$PrismaModel> | $Enums.booking_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumbooking_statusFilter<$PrismaModel>
    _max?: NestedEnumbooking_statusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type PropertiesListRelationFilter = {
    every?: propertiesWhereInput
    some?: propertiesWhereInput
    none?: propertiesWhereInput
  }

  export type propertiesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categoriesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type categoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type categoriesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type Enumpayment_categoryFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_category | Enumpayment_categoryFieldRefInput<$PrismaModel>
    in?: $Enums.payment_category[] | ListEnumpayment_categoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.payment_category[] | ListEnumpayment_categoryFieldRefInput<$PrismaModel>
    not?: NestedEnumpayment_categoryFilter<$PrismaModel> | $Enums.payment_category
  }

  export type Enumpayment_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_status | Enumpayment_statusFieldRefInput<$PrismaModel>
    in?: $Enums.payment_status[] | ListEnumpayment_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.payment_status[] | ListEnumpayment_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumpayment_statusFilter<$PrismaModel> | $Enums.payment_status
  }

  export type RentalsScalarRelationFilter = {
    is?: rentalsWhereInput
    isNot?: rentalsWhereInput
  }

  export type paymentsCountOrderByAggregateInput = {
    id?: SortOrder
    rental_id?: SortOrder
    amount?: SortOrder
    category?: SortOrder
    payment_method?: SortOrder
    payment_status?: SortOrder
    transaction_reference?: SortOrder
    paid_at?: SortOrder
    created_at?: SortOrder
  }

  export type paymentsAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type paymentsMaxOrderByAggregateInput = {
    id?: SortOrder
    rental_id?: SortOrder
    amount?: SortOrder
    category?: SortOrder
    payment_method?: SortOrder
    payment_status?: SortOrder
    transaction_reference?: SortOrder
    paid_at?: SortOrder
    created_at?: SortOrder
  }

  export type paymentsMinOrderByAggregateInput = {
    id?: SortOrder
    rental_id?: SortOrder
    amount?: SortOrder
    category?: SortOrder
    payment_method?: SortOrder
    payment_status?: SortOrder
    transaction_reference?: SortOrder
    paid_at?: SortOrder
    created_at?: SortOrder
  }

  export type paymentsSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type Enumpayment_categoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_category | Enumpayment_categoryFieldRefInput<$PrismaModel>
    in?: $Enums.payment_category[] | ListEnumpayment_categoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.payment_category[] | ListEnumpayment_categoryFieldRefInput<$PrismaModel>
    not?: NestedEnumpayment_categoryWithAggregatesFilter<$PrismaModel> | $Enums.payment_category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpayment_categoryFilter<$PrismaModel>
    _max?: NestedEnumpayment_categoryFilter<$PrismaModel>
  }

  export type Enumpayment_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_status | Enumpayment_statusFieldRefInput<$PrismaModel>
    in?: $Enums.payment_status[] | ListEnumpayment_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.payment_status[] | ListEnumpayment_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumpayment_statusWithAggregatesFilter<$PrismaModel> | $Enums.payment_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpayment_statusFilter<$PrismaModel>
    _max?: NestedEnumpayment_statusFilter<$PrismaModel>
  }

  export type Enumpricing_unitFilter<$PrismaModel = never> = {
    equals?: $Enums.pricing_unit | Enumpricing_unitFieldRefInput<$PrismaModel>
    in?: $Enums.pricing_unit[] | ListEnumpricing_unitFieldRefInput<$PrismaModel>
    notIn?: $Enums.pricing_unit[] | ListEnumpricing_unitFieldRefInput<$PrismaModel>
    not?: NestedEnumpricing_unitFilter<$PrismaModel> | $Enums.pricing_unit
  }

  export type Enumproperty_approval_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.property_approval_status | Enumproperty_approval_statusFieldRefInput<$PrismaModel>
    in?: $Enums.property_approval_status[] | ListEnumproperty_approval_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.property_approval_status[] | ListEnumproperty_approval_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumproperty_approval_statusFilter<$PrismaModel> | $Enums.property_approval_status
  }

  export type Enumproperty_availability_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.property_availability_status | Enumproperty_availability_statusFieldRefInput<$PrismaModel>
    in?: $Enums.property_availability_status[] | ListEnumproperty_availability_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.property_availability_status[] | ListEnumproperty_availability_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumproperty_availability_statusFilter<$PrismaModel> | $Enums.property_availability_status
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type BookingsListRelationFilter = {
    every?: bookingsWhereInput
    some?: bookingsWhereInput
    none?: bookingsWhereInput
  }

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type CategoriesNullableScalarRelationFilter = {
    is?: categoriesWhereInput | null
    isNot?: categoriesWhereInput | null
  }

  export type Property_imagesListRelationFilter = {
    every?: property_imagesWhereInput
    some?: property_imagesWhereInput
    none?: property_imagesWhereInput
  }

  export type RentalsListRelationFilter = {
    every?: rentalsWhereInput
    some?: rentalsWhereInput
    none?: rentalsWhereInput
  }

  export type bookingsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type property_imagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type rentalsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type propertiesCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    pricing_unit?: SortOrder
    base_price?: SortOrder
    approval_status?: SortOrder
    availability_status?: SortOrder
    category_id?: SortOrder
    manager_id?: SortOrder
    approved_by?: SortOrder
    approved_at?: SortOrder
    rejection_reason?: SortOrder
    created_at?: SortOrder
  }

  export type propertiesAvgOrderByAggregateInput = {
    base_price?: SortOrder
  }

  export type propertiesMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    pricing_unit?: SortOrder
    base_price?: SortOrder
    approval_status?: SortOrder
    availability_status?: SortOrder
    category_id?: SortOrder
    manager_id?: SortOrder
    approved_by?: SortOrder
    approved_at?: SortOrder
    rejection_reason?: SortOrder
    created_at?: SortOrder
  }

  export type propertiesMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    pricing_unit?: SortOrder
    base_price?: SortOrder
    approval_status?: SortOrder
    availability_status?: SortOrder
    category_id?: SortOrder
    manager_id?: SortOrder
    approved_by?: SortOrder
    approved_at?: SortOrder
    rejection_reason?: SortOrder
    created_at?: SortOrder
  }

  export type propertiesSumOrderByAggregateInput = {
    base_price?: SortOrder
  }

  export type Enumpricing_unitWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.pricing_unit | Enumpricing_unitFieldRefInput<$PrismaModel>
    in?: $Enums.pricing_unit[] | ListEnumpricing_unitFieldRefInput<$PrismaModel>
    notIn?: $Enums.pricing_unit[] | ListEnumpricing_unitFieldRefInput<$PrismaModel>
    not?: NestedEnumpricing_unitWithAggregatesFilter<$PrismaModel> | $Enums.pricing_unit
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpricing_unitFilter<$PrismaModel>
    _max?: NestedEnumpricing_unitFilter<$PrismaModel>
  }

  export type Enumproperty_approval_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.property_approval_status | Enumproperty_approval_statusFieldRefInput<$PrismaModel>
    in?: $Enums.property_approval_status[] | ListEnumproperty_approval_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.property_approval_status[] | ListEnumproperty_approval_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumproperty_approval_statusWithAggregatesFilter<$PrismaModel> | $Enums.property_approval_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumproperty_approval_statusFilter<$PrismaModel>
    _max?: NestedEnumproperty_approval_statusFilter<$PrismaModel>
  }

  export type Enumproperty_availability_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.property_availability_status | Enumproperty_availability_statusFieldRefInput<$PrismaModel>
    in?: $Enums.property_availability_status[] | ListEnumproperty_availability_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.property_availability_status[] | ListEnumproperty_availability_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumproperty_availability_statusWithAggregatesFilter<$PrismaModel> | $Enums.property_availability_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumproperty_availability_statusFilter<$PrismaModel>
    _max?: NestedEnumproperty_availability_statusFilter<$PrismaModel>
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type property_imagesCountOrderByAggregateInput = {
    id?: SortOrder
    property_id?: SortOrder
    image_url?: SortOrder
    created_at?: SortOrder
  }

  export type property_imagesMaxOrderByAggregateInput = {
    id?: SortOrder
    property_id?: SortOrder
    image_url?: SortOrder
    created_at?: SortOrder
  }

  export type property_imagesMinOrderByAggregateInput = {
    id?: SortOrder
    property_id?: SortOrder
    image_url?: SortOrder
    created_at?: SortOrder
  }

  export type Enummanager_application_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.manager_application_status | Enummanager_application_statusFieldRefInput<$PrismaModel>
    in?: $Enums.manager_application_status[] | ListEnummanager_application_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.manager_application_status[] | ListEnummanager_application_statusFieldRefInput<$PrismaModel>
    not?: NestedEnummanager_application_statusFilter<$PrismaModel> | $Enums.manager_application_status
  }

  export type property_manager_applicationsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    reviewed_by?: SortOrder
    reviewed_at?: SortOrder
    created_at?: SortOrder
  }

  export type property_manager_applicationsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    reviewed_by?: SortOrder
    reviewed_at?: SortOrder
    created_at?: SortOrder
  }

  export type property_manager_applicationsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    reviewed_by?: SortOrder
    reviewed_at?: SortOrder
    created_at?: SortOrder
  }

  export type Enummanager_application_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.manager_application_status | Enummanager_application_statusFieldRefInput<$PrismaModel>
    in?: $Enums.manager_application_status[] | ListEnummanager_application_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.manager_application_status[] | ListEnummanager_application_statusFieldRefInput<$PrismaModel>
    not?: NestedEnummanager_application_statusWithAggregatesFilter<$PrismaModel> | $Enums.manager_application_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnummanager_application_statusFilter<$PrismaModel>
    _max?: NestedEnummanager_application_statusFilter<$PrismaModel>
  }

  export type Enumrental_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.rental_status | Enumrental_statusFieldRefInput<$PrismaModel>
    in?: $Enums.rental_status[] | ListEnumrental_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.rental_status[] | ListEnumrental_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumrental_statusFilter<$PrismaModel> | $Enums.rental_status
  }

  export type PaymentsListRelationFilter = {
    every?: paymentsWhereInput
    some?: paymentsWhereInput
    none?: paymentsWhereInput
  }

  export type BookingsScalarRelationFilter = {
    is?: bookingsWhereInput
    isNot?: bookingsWhereInput
  }

  export type paymentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type rentalsCountOrderByAggregateInput = {
    id?: SortOrder
    booking_id?: SortOrder
    user_id?: SortOrder
    property_id?: SortOrder
    lease_start?: SortOrder
    lease_end?: SortOrder
    pricing_unit?: SortOrder
    agreed_price?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type rentalsAvgOrderByAggregateInput = {
    agreed_price?: SortOrder
  }

  export type rentalsMaxOrderByAggregateInput = {
    id?: SortOrder
    booking_id?: SortOrder
    user_id?: SortOrder
    property_id?: SortOrder
    lease_start?: SortOrder
    lease_end?: SortOrder
    pricing_unit?: SortOrder
    agreed_price?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type rentalsMinOrderByAggregateInput = {
    id?: SortOrder
    booking_id?: SortOrder
    user_id?: SortOrder
    property_id?: SortOrder
    lease_start?: SortOrder
    lease_end?: SortOrder
    pricing_unit?: SortOrder
    agreed_price?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type rentalsSumOrderByAggregateInput = {
    agreed_price?: SortOrder
  }

  export type Enumrental_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.rental_status | Enumrental_statusFieldRefInput<$PrismaModel>
    in?: $Enums.rental_status[] | ListEnumrental_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.rental_status[] | ListEnumrental_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumrental_statusWithAggregatesFilter<$PrismaModel> | $Enums.rental_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumrental_statusFilter<$PrismaModel>
    _max?: NestedEnumrental_statusFilter<$PrismaModel>
  }

  export type User_rolesListRelationFilter = {
    every?: user_rolesWhereInput
    some?: user_rolesWhereInput
    none?: user_rolesWhereInput
  }

  export type user_rolesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type rolesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type rolesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type rolesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RolesScalarRelationFilter = {
    is?: rolesWhereInput
    isNot?: rolesWhereInput
  }

  export type user_rolesUser_idRole_idRevoked_atCompoundUniqueInput = {
    user_id: string
    role_id: string
    revoked_at: Date | string
  }

  export type user_rolesCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    role_id?: SortOrder
    assigned_by?: SortOrder
    assigned_at?: SortOrder
    revoked_by?: SortOrder
    revoked_at?: SortOrder
    created_at?: SortOrder
  }

  export type user_rolesMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    role_id?: SortOrder
    assigned_by?: SortOrder
    assigned_at?: SortOrder
    revoked_by?: SortOrder
    revoked_at?: SortOrder
    created_at?: SortOrder
  }

  export type user_rolesMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    role_id?: SortOrder
    assigned_by?: SortOrder
    assigned_at?: SortOrder
    revoked_by?: SortOrder
    revoked_at?: SortOrder
    created_at?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type Property_manager_applicationsListRelationFilter = {
    every?: property_manager_applicationsWhereInput
    some?: property_manager_applicationsWhereInput
    none?: property_manager_applicationsWhereInput
  }

  export type property_manager_applicationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    phone_number?: SortOrder
    is_suspended?: SortOrder
    created_at?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    phone_number?: SortOrder
    is_suspended?: SortOrder
    created_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    phone_number?: SortOrder
    is_suspended?: SortOrder
    created_at?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type propertiesCreateNestedOneWithoutBookingsInput = {
    create?: XOR<propertiesCreateWithoutBookingsInput, propertiesUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: propertiesCreateOrConnectWithoutBookingsInput
    connect?: propertiesWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutBookingsInput = {
    create?: XOR<usersCreateWithoutBookingsInput, usersUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: usersCreateOrConnectWithoutBookingsInput
    connect?: usersWhereUniqueInput
  }

  export type rentalsCreateNestedOneWithoutBookingsInput = {
    create?: XOR<rentalsCreateWithoutBookingsInput, rentalsUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: rentalsCreateOrConnectWithoutBookingsInput
    connect?: rentalsWhereUniqueInput
  }

  export type rentalsUncheckedCreateNestedOneWithoutBookingsInput = {
    create?: XOR<rentalsCreateWithoutBookingsInput, rentalsUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: rentalsCreateOrConnectWithoutBookingsInput
    connect?: rentalsWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type Enumbooking_statusFieldUpdateOperationsInput = {
    set?: $Enums.booking_status
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type propertiesUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<propertiesCreateWithoutBookingsInput, propertiesUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: propertiesCreateOrConnectWithoutBookingsInput
    upsert?: propertiesUpsertWithoutBookingsInput
    connect?: propertiesWhereUniqueInput
    update?: XOR<XOR<propertiesUpdateToOneWithWhereWithoutBookingsInput, propertiesUpdateWithoutBookingsInput>, propertiesUncheckedUpdateWithoutBookingsInput>
  }

  export type usersUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<usersCreateWithoutBookingsInput, usersUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: usersCreateOrConnectWithoutBookingsInput
    upsert?: usersUpsertWithoutBookingsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutBookingsInput, usersUpdateWithoutBookingsInput>, usersUncheckedUpdateWithoutBookingsInput>
  }

  export type rentalsUpdateOneWithoutBookingsNestedInput = {
    create?: XOR<rentalsCreateWithoutBookingsInput, rentalsUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: rentalsCreateOrConnectWithoutBookingsInput
    upsert?: rentalsUpsertWithoutBookingsInput
    disconnect?: rentalsWhereInput | boolean
    delete?: rentalsWhereInput | boolean
    connect?: rentalsWhereUniqueInput
    update?: XOR<XOR<rentalsUpdateToOneWithWhereWithoutBookingsInput, rentalsUpdateWithoutBookingsInput>, rentalsUncheckedUpdateWithoutBookingsInput>
  }

  export type rentalsUncheckedUpdateOneWithoutBookingsNestedInput = {
    create?: XOR<rentalsCreateWithoutBookingsInput, rentalsUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: rentalsCreateOrConnectWithoutBookingsInput
    upsert?: rentalsUpsertWithoutBookingsInput
    disconnect?: rentalsWhereInput | boolean
    delete?: rentalsWhereInput | boolean
    connect?: rentalsWhereUniqueInput
    update?: XOR<XOR<rentalsUpdateToOneWithWhereWithoutBookingsInput, rentalsUpdateWithoutBookingsInput>, rentalsUncheckedUpdateWithoutBookingsInput>
  }

  export type propertiesCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<propertiesCreateWithoutCategoriesInput, propertiesUncheckedCreateWithoutCategoriesInput> | propertiesCreateWithoutCategoriesInput[] | propertiesUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: propertiesCreateOrConnectWithoutCategoriesInput | propertiesCreateOrConnectWithoutCategoriesInput[]
    createMany?: propertiesCreateManyCategoriesInputEnvelope
    connect?: propertiesWhereUniqueInput | propertiesWhereUniqueInput[]
  }

  export type propertiesUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<propertiesCreateWithoutCategoriesInput, propertiesUncheckedCreateWithoutCategoriesInput> | propertiesCreateWithoutCategoriesInput[] | propertiesUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: propertiesCreateOrConnectWithoutCategoriesInput | propertiesCreateOrConnectWithoutCategoriesInput[]
    createMany?: propertiesCreateManyCategoriesInputEnvelope
    connect?: propertiesWhereUniqueInput | propertiesWhereUniqueInput[]
  }

  export type propertiesUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<propertiesCreateWithoutCategoriesInput, propertiesUncheckedCreateWithoutCategoriesInput> | propertiesCreateWithoutCategoriesInput[] | propertiesUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: propertiesCreateOrConnectWithoutCategoriesInput | propertiesCreateOrConnectWithoutCategoriesInput[]
    upsert?: propertiesUpsertWithWhereUniqueWithoutCategoriesInput | propertiesUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: propertiesCreateManyCategoriesInputEnvelope
    set?: propertiesWhereUniqueInput | propertiesWhereUniqueInput[]
    disconnect?: propertiesWhereUniqueInput | propertiesWhereUniqueInput[]
    delete?: propertiesWhereUniqueInput | propertiesWhereUniqueInput[]
    connect?: propertiesWhereUniqueInput | propertiesWhereUniqueInput[]
    update?: propertiesUpdateWithWhereUniqueWithoutCategoriesInput | propertiesUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: propertiesUpdateManyWithWhereWithoutCategoriesInput | propertiesUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: propertiesScalarWhereInput | propertiesScalarWhereInput[]
  }

  export type propertiesUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<propertiesCreateWithoutCategoriesInput, propertiesUncheckedCreateWithoutCategoriesInput> | propertiesCreateWithoutCategoriesInput[] | propertiesUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: propertiesCreateOrConnectWithoutCategoriesInput | propertiesCreateOrConnectWithoutCategoriesInput[]
    upsert?: propertiesUpsertWithWhereUniqueWithoutCategoriesInput | propertiesUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: propertiesCreateManyCategoriesInputEnvelope
    set?: propertiesWhereUniqueInput | propertiesWhereUniqueInput[]
    disconnect?: propertiesWhereUniqueInput | propertiesWhereUniqueInput[]
    delete?: propertiesWhereUniqueInput | propertiesWhereUniqueInput[]
    connect?: propertiesWhereUniqueInput | propertiesWhereUniqueInput[]
    update?: propertiesUpdateWithWhereUniqueWithoutCategoriesInput | propertiesUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: propertiesUpdateManyWithWhereWithoutCategoriesInput | propertiesUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: propertiesScalarWhereInput | propertiesScalarWhereInput[]
  }

  export type rentalsCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<rentalsCreateWithoutPaymentsInput, rentalsUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: rentalsCreateOrConnectWithoutPaymentsInput
    connect?: rentalsWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type Enumpayment_categoryFieldUpdateOperationsInput = {
    set?: $Enums.payment_category
  }

  export type Enumpayment_statusFieldUpdateOperationsInput = {
    set?: $Enums.payment_status
  }

  export type rentalsUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<rentalsCreateWithoutPaymentsInput, rentalsUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: rentalsCreateOrConnectWithoutPaymentsInput
    upsert?: rentalsUpsertWithoutPaymentsInput
    connect?: rentalsWhereUniqueInput
    update?: XOR<XOR<rentalsUpdateToOneWithWhereWithoutPaymentsInput, rentalsUpdateWithoutPaymentsInput>, rentalsUncheckedUpdateWithoutPaymentsInput>
  }

  export type bookingsCreateNestedManyWithoutPropertiesInput = {
    create?: XOR<bookingsCreateWithoutPropertiesInput, bookingsUncheckedCreateWithoutPropertiesInput> | bookingsCreateWithoutPropertiesInput[] | bookingsUncheckedCreateWithoutPropertiesInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutPropertiesInput | bookingsCreateOrConnectWithoutPropertiesInput[]
    createMany?: bookingsCreateManyPropertiesInputEnvelope
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutProperties_properties_approved_byTousersInput = {
    create?: XOR<usersCreateWithoutProperties_properties_approved_byTousersInput, usersUncheckedCreateWithoutProperties_properties_approved_byTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutProperties_properties_approved_byTousersInput
    connect?: usersWhereUniqueInput
  }

  export type categoriesCreateNestedOneWithoutPropertiesInput = {
    create?: XOR<categoriesCreateWithoutPropertiesInput, categoriesUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutPropertiesInput
    connect?: categoriesWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutProperties_properties_manager_idTousersInput = {
    create?: XOR<usersCreateWithoutProperties_properties_manager_idTousersInput, usersUncheckedCreateWithoutProperties_properties_manager_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutProperties_properties_manager_idTousersInput
    connect?: usersWhereUniqueInput
  }

  export type property_imagesCreateNestedManyWithoutPropertiesInput = {
    create?: XOR<property_imagesCreateWithoutPropertiesInput, property_imagesUncheckedCreateWithoutPropertiesInput> | property_imagesCreateWithoutPropertiesInput[] | property_imagesUncheckedCreateWithoutPropertiesInput[]
    connectOrCreate?: property_imagesCreateOrConnectWithoutPropertiesInput | property_imagesCreateOrConnectWithoutPropertiesInput[]
    createMany?: property_imagesCreateManyPropertiesInputEnvelope
    connect?: property_imagesWhereUniqueInput | property_imagesWhereUniqueInput[]
  }

  export type rentalsCreateNestedManyWithoutPropertiesInput = {
    create?: XOR<rentalsCreateWithoutPropertiesInput, rentalsUncheckedCreateWithoutPropertiesInput> | rentalsCreateWithoutPropertiesInput[] | rentalsUncheckedCreateWithoutPropertiesInput[]
    connectOrCreate?: rentalsCreateOrConnectWithoutPropertiesInput | rentalsCreateOrConnectWithoutPropertiesInput[]
    createMany?: rentalsCreateManyPropertiesInputEnvelope
    connect?: rentalsWhereUniqueInput | rentalsWhereUniqueInput[]
  }

  export type bookingsUncheckedCreateNestedManyWithoutPropertiesInput = {
    create?: XOR<bookingsCreateWithoutPropertiesInput, bookingsUncheckedCreateWithoutPropertiesInput> | bookingsCreateWithoutPropertiesInput[] | bookingsUncheckedCreateWithoutPropertiesInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutPropertiesInput | bookingsCreateOrConnectWithoutPropertiesInput[]
    createMany?: bookingsCreateManyPropertiesInputEnvelope
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
  }

  export type property_imagesUncheckedCreateNestedManyWithoutPropertiesInput = {
    create?: XOR<property_imagesCreateWithoutPropertiesInput, property_imagesUncheckedCreateWithoutPropertiesInput> | property_imagesCreateWithoutPropertiesInput[] | property_imagesUncheckedCreateWithoutPropertiesInput[]
    connectOrCreate?: property_imagesCreateOrConnectWithoutPropertiesInput | property_imagesCreateOrConnectWithoutPropertiesInput[]
    createMany?: property_imagesCreateManyPropertiesInputEnvelope
    connect?: property_imagesWhereUniqueInput | property_imagesWhereUniqueInput[]
  }

  export type rentalsUncheckedCreateNestedManyWithoutPropertiesInput = {
    create?: XOR<rentalsCreateWithoutPropertiesInput, rentalsUncheckedCreateWithoutPropertiesInput> | rentalsCreateWithoutPropertiesInput[] | rentalsUncheckedCreateWithoutPropertiesInput[]
    connectOrCreate?: rentalsCreateOrConnectWithoutPropertiesInput | rentalsCreateOrConnectWithoutPropertiesInput[]
    createMany?: rentalsCreateManyPropertiesInputEnvelope
    connect?: rentalsWhereUniqueInput | rentalsWhereUniqueInput[]
  }

  export type Enumpricing_unitFieldUpdateOperationsInput = {
    set?: $Enums.pricing_unit
  }

  export type Enumproperty_approval_statusFieldUpdateOperationsInput = {
    set?: $Enums.property_approval_status
  }

  export type Enumproperty_availability_statusFieldUpdateOperationsInput = {
    set?: $Enums.property_availability_status
  }

  export type bookingsUpdateManyWithoutPropertiesNestedInput = {
    create?: XOR<bookingsCreateWithoutPropertiesInput, bookingsUncheckedCreateWithoutPropertiesInput> | bookingsCreateWithoutPropertiesInput[] | bookingsUncheckedCreateWithoutPropertiesInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutPropertiesInput | bookingsCreateOrConnectWithoutPropertiesInput[]
    upsert?: bookingsUpsertWithWhereUniqueWithoutPropertiesInput | bookingsUpsertWithWhereUniqueWithoutPropertiesInput[]
    createMany?: bookingsCreateManyPropertiesInputEnvelope
    set?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    disconnect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    delete?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    update?: bookingsUpdateWithWhereUniqueWithoutPropertiesInput | bookingsUpdateWithWhereUniqueWithoutPropertiesInput[]
    updateMany?: bookingsUpdateManyWithWhereWithoutPropertiesInput | bookingsUpdateManyWithWhereWithoutPropertiesInput[]
    deleteMany?: bookingsScalarWhereInput | bookingsScalarWhereInput[]
  }

  export type usersUpdateOneWithoutProperties_properties_approved_byTousersNestedInput = {
    create?: XOR<usersCreateWithoutProperties_properties_approved_byTousersInput, usersUncheckedCreateWithoutProperties_properties_approved_byTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutProperties_properties_approved_byTousersInput
    upsert?: usersUpsertWithoutProperties_properties_approved_byTousersInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutProperties_properties_approved_byTousersInput, usersUpdateWithoutProperties_properties_approved_byTousersInput>, usersUncheckedUpdateWithoutProperties_properties_approved_byTousersInput>
  }

  export type categoriesUpdateOneWithoutPropertiesNestedInput = {
    create?: XOR<categoriesCreateWithoutPropertiesInput, categoriesUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutPropertiesInput
    upsert?: categoriesUpsertWithoutPropertiesInput
    disconnect?: categoriesWhereInput | boolean
    delete?: categoriesWhereInput | boolean
    connect?: categoriesWhereUniqueInput
    update?: XOR<XOR<categoriesUpdateToOneWithWhereWithoutPropertiesInput, categoriesUpdateWithoutPropertiesInput>, categoriesUncheckedUpdateWithoutPropertiesInput>
  }

  export type usersUpdateOneRequiredWithoutProperties_properties_manager_idTousersNestedInput = {
    create?: XOR<usersCreateWithoutProperties_properties_manager_idTousersInput, usersUncheckedCreateWithoutProperties_properties_manager_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutProperties_properties_manager_idTousersInput
    upsert?: usersUpsertWithoutProperties_properties_manager_idTousersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutProperties_properties_manager_idTousersInput, usersUpdateWithoutProperties_properties_manager_idTousersInput>, usersUncheckedUpdateWithoutProperties_properties_manager_idTousersInput>
  }

  export type property_imagesUpdateManyWithoutPropertiesNestedInput = {
    create?: XOR<property_imagesCreateWithoutPropertiesInput, property_imagesUncheckedCreateWithoutPropertiesInput> | property_imagesCreateWithoutPropertiesInput[] | property_imagesUncheckedCreateWithoutPropertiesInput[]
    connectOrCreate?: property_imagesCreateOrConnectWithoutPropertiesInput | property_imagesCreateOrConnectWithoutPropertiesInput[]
    upsert?: property_imagesUpsertWithWhereUniqueWithoutPropertiesInput | property_imagesUpsertWithWhereUniqueWithoutPropertiesInput[]
    createMany?: property_imagesCreateManyPropertiesInputEnvelope
    set?: property_imagesWhereUniqueInput | property_imagesWhereUniqueInput[]
    disconnect?: property_imagesWhereUniqueInput | property_imagesWhereUniqueInput[]
    delete?: property_imagesWhereUniqueInput | property_imagesWhereUniqueInput[]
    connect?: property_imagesWhereUniqueInput | property_imagesWhereUniqueInput[]
    update?: property_imagesUpdateWithWhereUniqueWithoutPropertiesInput | property_imagesUpdateWithWhereUniqueWithoutPropertiesInput[]
    updateMany?: property_imagesUpdateManyWithWhereWithoutPropertiesInput | property_imagesUpdateManyWithWhereWithoutPropertiesInput[]
    deleteMany?: property_imagesScalarWhereInput | property_imagesScalarWhereInput[]
  }

  export type rentalsUpdateManyWithoutPropertiesNestedInput = {
    create?: XOR<rentalsCreateWithoutPropertiesInput, rentalsUncheckedCreateWithoutPropertiesInput> | rentalsCreateWithoutPropertiesInput[] | rentalsUncheckedCreateWithoutPropertiesInput[]
    connectOrCreate?: rentalsCreateOrConnectWithoutPropertiesInput | rentalsCreateOrConnectWithoutPropertiesInput[]
    upsert?: rentalsUpsertWithWhereUniqueWithoutPropertiesInput | rentalsUpsertWithWhereUniqueWithoutPropertiesInput[]
    createMany?: rentalsCreateManyPropertiesInputEnvelope
    set?: rentalsWhereUniqueInput | rentalsWhereUniqueInput[]
    disconnect?: rentalsWhereUniqueInput | rentalsWhereUniqueInput[]
    delete?: rentalsWhereUniqueInput | rentalsWhereUniqueInput[]
    connect?: rentalsWhereUniqueInput | rentalsWhereUniqueInput[]
    update?: rentalsUpdateWithWhereUniqueWithoutPropertiesInput | rentalsUpdateWithWhereUniqueWithoutPropertiesInput[]
    updateMany?: rentalsUpdateManyWithWhereWithoutPropertiesInput | rentalsUpdateManyWithWhereWithoutPropertiesInput[]
    deleteMany?: rentalsScalarWhereInput | rentalsScalarWhereInput[]
  }

  export type bookingsUncheckedUpdateManyWithoutPropertiesNestedInput = {
    create?: XOR<bookingsCreateWithoutPropertiesInput, bookingsUncheckedCreateWithoutPropertiesInput> | bookingsCreateWithoutPropertiesInput[] | bookingsUncheckedCreateWithoutPropertiesInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutPropertiesInput | bookingsCreateOrConnectWithoutPropertiesInput[]
    upsert?: bookingsUpsertWithWhereUniqueWithoutPropertiesInput | bookingsUpsertWithWhereUniqueWithoutPropertiesInput[]
    createMany?: bookingsCreateManyPropertiesInputEnvelope
    set?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    disconnect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    delete?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    update?: bookingsUpdateWithWhereUniqueWithoutPropertiesInput | bookingsUpdateWithWhereUniqueWithoutPropertiesInput[]
    updateMany?: bookingsUpdateManyWithWhereWithoutPropertiesInput | bookingsUpdateManyWithWhereWithoutPropertiesInput[]
    deleteMany?: bookingsScalarWhereInput | bookingsScalarWhereInput[]
  }

  export type property_imagesUncheckedUpdateManyWithoutPropertiesNestedInput = {
    create?: XOR<property_imagesCreateWithoutPropertiesInput, property_imagesUncheckedCreateWithoutPropertiesInput> | property_imagesCreateWithoutPropertiesInput[] | property_imagesUncheckedCreateWithoutPropertiesInput[]
    connectOrCreate?: property_imagesCreateOrConnectWithoutPropertiesInput | property_imagesCreateOrConnectWithoutPropertiesInput[]
    upsert?: property_imagesUpsertWithWhereUniqueWithoutPropertiesInput | property_imagesUpsertWithWhereUniqueWithoutPropertiesInput[]
    createMany?: property_imagesCreateManyPropertiesInputEnvelope
    set?: property_imagesWhereUniqueInput | property_imagesWhereUniqueInput[]
    disconnect?: property_imagesWhereUniqueInput | property_imagesWhereUniqueInput[]
    delete?: property_imagesWhereUniqueInput | property_imagesWhereUniqueInput[]
    connect?: property_imagesWhereUniqueInput | property_imagesWhereUniqueInput[]
    update?: property_imagesUpdateWithWhereUniqueWithoutPropertiesInput | property_imagesUpdateWithWhereUniqueWithoutPropertiesInput[]
    updateMany?: property_imagesUpdateManyWithWhereWithoutPropertiesInput | property_imagesUpdateManyWithWhereWithoutPropertiesInput[]
    deleteMany?: property_imagesScalarWhereInput | property_imagesScalarWhereInput[]
  }

  export type rentalsUncheckedUpdateManyWithoutPropertiesNestedInput = {
    create?: XOR<rentalsCreateWithoutPropertiesInput, rentalsUncheckedCreateWithoutPropertiesInput> | rentalsCreateWithoutPropertiesInput[] | rentalsUncheckedCreateWithoutPropertiesInput[]
    connectOrCreate?: rentalsCreateOrConnectWithoutPropertiesInput | rentalsCreateOrConnectWithoutPropertiesInput[]
    upsert?: rentalsUpsertWithWhereUniqueWithoutPropertiesInput | rentalsUpsertWithWhereUniqueWithoutPropertiesInput[]
    createMany?: rentalsCreateManyPropertiesInputEnvelope
    set?: rentalsWhereUniqueInput | rentalsWhereUniqueInput[]
    disconnect?: rentalsWhereUniqueInput | rentalsWhereUniqueInput[]
    delete?: rentalsWhereUniqueInput | rentalsWhereUniqueInput[]
    connect?: rentalsWhereUniqueInput | rentalsWhereUniqueInput[]
    update?: rentalsUpdateWithWhereUniqueWithoutPropertiesInput | rentalsUpdateWithWhereUniqueWithoutPropertiesInput[]
    updateMany?: rentalsUpdateManyWithWhereWithoutPropertiesInput | rentalsUpdateManyWithWhereWithoutPropertiesInput[]
    deleteMany?: rentalsScalarWhereInput | rentalsScalarWhereInput[]
  }

  export type propertiesCreateNestedOneWithoutProperty_imagesInput = {
    create?: XOR<propertiesCreateWithoutProperty_imagesInput, propertiesUncheckedCreateWithoutProperty_imagesInput>
    connectOrCreate?: propertiesCreateOrConnectWithoutProperty_imagesInput
    connect?: propertiesWhereUniqueInput
  }

  export type propertiesUpdateOneRequiredWithoutProperty_imagesNestedInput = {
    create?: XOR<propertiesCreateWithoutProperty_imagesInput, propertiesUncheckedCreateWithoutProperty_imagesInput>
    connectOrCreate?: propertiesCreateOrConnectWithoutProperty_imagesInput
    upsert?: propertiesUpsertWithoutProperty_imagesInput
    connect?: propertiesWhereUniqueInput
    update?: XOR<XOR<propertiesUpdateToOneWithWhereWithoutProperty_imagesInput, propertiesUpdateWithoutProperty_imagesInput>, propertiesUncheckedUpdateWithoutProperty_imagesInput>
  }

  export type usersCreateNestedOneWithoutProperty_manager_applications_property_manager_applications_reviewed_byTousersInput = {
    create?: XOR<usersCreateWithoutProperty_manager_applications_property_manager_applications_reviewed_byTousersInput, usersUncheckedCreateWithoutProperty_manager_applications_property_manager_applications_reviewed_byTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutProperty_manager_applications_property_manager_applications_reviewed_byTousersInput
    connect?: usersWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutProperty_manager_applications_property_manager_applications_user_idTousersInput = {
    create?: XOR<usersCreateWithoutProperty_manager_applications_property_manager_applications_user_idTousersInput, usersUncheckedCreateWithoutProperty_manager_applications_property_manager_applications_user_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutProperty_manager_applications_property_manager_applications_user_idTousersInput
    connect?: usersWhereUniqueInput
  }

  export type Enummanager_application_statusFieldUpdateOperationsInput = {
    set?: $Enums.manager_application_status
  }

  export type usersUpdateOneWithoutProperty_manager_applications_property_manager_applications_reviewed_byTousersNestedInput = {
    create?: XOR<usersCreateWithoutProperty_manager_applications_property_manager_applications_reviewed_byTousersInput, usersUncheckedCreateWithoutProperty_manager_applications_property_manager_applications_reviewed_byTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutProperty_manager_applications_property_manager_applications_reviewed_byTousersInput
    upsert?: usersUpsertWithoutProperty_manager_applications_property_manager_applications_reviewed_byTousersInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutProperty_manager_applications_property_manager_applications_reviewed_byTousersInput, usersUpdateWithoutProperty_manager_applications_property_manager_applications_reviewed_byTousersInput>, usersUncheckedUpdateWithoutProperty_manager_applications_property_manager_applications_reviewed_byTousersInput>
  }

  export type usersUpdateOneRequiredWithoutProperty_manager_applications_property_manager_applications_user_idTousersNestedInput = {
    create?: XOR<usersCreateWithoutProperty_manager_applications_property_manager_applications_user_idTousersInput, usersUncheckedCreateWithoutProperty_manager_applications_property_manager_applications_user_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutProperty_manager_applications_property_manager_applications_user_idTousersInput
    upsert?: usersUpsertWithoutProperty_manager_applications_property_manager_applications_user_idTousersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutProperty_manager_applications_property_manager_applications_user_idTousersInput, usersUpdateWithoutProperty_manager_applications_property_manager_applications_user_idTousersInput>, usersUncheckedUpdateWithoutProperty_manager_applications_property_manager_applications_user_idTousersInput>
  }

  export type paymentsCreateNestedManyWithoutRentalsInput = {
    create?: XOR<paymentsCreateWithoutRentalsInput, paymentsUncheckedCreateWithoutRentalsInput> | paymentsCreateWithoutRentalsInput[] | paymentsUncheckedCreateWithoutRentalsInput[]
    connectOrCreate?: paymentsCreateOrConnectWithoutRentalsInput | paymentsCreateOrConnectWithoutRentalsInput[]
    createMany?: paymentsCreateManyRentalsInputEnvelope
    connect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
  }

  export type bookingsCreateNestedOneWithoutRentalsInput = {
    create?: XOR<bookingsCreateWithoutRentalsInput, bookingsUncheckedCreateWithoutRentalsInput>
    connectOrCreate?: bookingsCreateOrConnectWithoutRentalsInput
    connect?: bookingsWhereUniqueInput
  }

  export type propertiesCreateNestedOneWithoutRentalsInput = {
    create?: XOR<propertiesCreateWithoutRentalsInput, propertiesUncheckedCreateWithoutRentalsInput>
    connectOrCreate?: propertiesCreateOrConnectWithoutRentalsInput
    connect?: propertiesWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutRentalsInput = {
    create?: XOR<usersCreateWithoutRentalsInput, usersUncheckedCreateWithoutRentalsInput>
    connectOrCreate?: usersCreateOrConnectWithoutRentalsInput
    connect?: usersWhereUniqueInput
  }

  export type paymentsUncheckedCreateNestedManyWithoutRentalsInput = {
    create?: XOR<paymentsCreateWithoutRentalsInput, paymentsUncheckedCreateWithoutRentalsInput> | paymentsCreateWithoutRentalsInput[] | paymentsUncheckedCreateWithoutRentalsInput[]
    connectOrCreate?: paymentsCreateOrConnectWithoutRentalsInput | paymentsCreateOrConnectWithoutRentalsInput[]
    createMany?: paymentsCreateManyRentalsInputEnvelope
    connect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
  }

  export type Enumrental_statusFieldUpdateOperationsInput = {
    set?: $Enums.rental_status
  }

  export type paymentsUpdateManyWithoutRentalsNestedInput = {
    create?: XOR<paymentsCreateWithoutRentalsInput, paymentsUncheckedCreateWithoutRentalsInput> | paymentsCreateWithoutRentalsInput[] | paymentsUncheckedCreateWithoutRentalsInput[]
    connectOrCreate?: paymentsCreateOrConnectWithoutRentalsInput | paymentsCreateOrConnectWithoutRentalsInput[]
    upsert?: paymentsUpsertWithWhereUniqueWithoutRentalsInput | paymentsUpsertWithWhereUniqueWithoutRentalsInput[]
    createMany?: paymentsCreateManyRentalsInputEnvelope
    set?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    disconnect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    delete?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    connect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    update?: paymentsUpdateWithWhereUniqueWithoutRentalsInput | paymentsUpdateWithWhereUniqueWithoutRentalsInput[]
    updateMany?: paymentsUpdateManyWithWhereWithoutRentalsInput | paymentsUpdateManyWithWhereWithoutRentalsInput[]
    deleteMany?: paymentsScalarWhereInput | paymentsScalarWhereInput[]
  }

  export type bookingsUpdateOneRequiredWithoutRentalsNestedInput = {
    create?: XOR<bookingsCreateWithoutRentalsInput, bookingsUncheckedCreateWithoutRentalsInput>
    connectOrCreate?: bookingsCreateOrConnectWithoutRentalsInput
    upsert?: bookingsUpsertWithoutRentalsInput
    connect?: bookingsWhereUniqueInput
    update?: XOR<XOR<bookingsUpdateToOneWithWhereWithoutRentalsInput, bookingsUpdateWithoutRentalsInput>, bookingsUncheckedUpdateWithoutRentalsInput>
  }

  export type propertiesUpdateOneRequiredWithoutRentalsNestedInput = {
    create?: XOR<propertiesCreateWithoutRentalsInput, propertiesUncheckedCreateWithoutRentalsInput>
    connectOrCreate?: propertiesCreateOrConnectWithoutRentalsInput
    upsert?: propertiesUpsertWithoutRentalsInput
    connect?: propertiesWhereUniqueInput
    update?: XOR<XOR<propertiesUpdateToOneWithWhereWithoutRentalsInput, propertiesUpdateWithoutRentalsInput>, propertiesUncheckedUpdateWithoutRentalsInput>
  }

  export type usersUpdateOneRequiredWithoutRentalsNestedInput = {
    create?: XOR<usersCreateWithoutRentalsInput, usersUncheckedCreateWithoutRentalsInput>
    connectOrCreate?: usersCreateOrConnectWithoutRentalsInput
    upsert?: usersUpsertWithoutRentalsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutRentalsInput, usersUpdateWithoutRentalsInput>, usersUncheckedUpdateWithoutRentalsInput>
  }

  export type paymentsUncheckedUpdateManyWithoutRentalsNestedInput = {
    create?: XOR<paymentsCreateWithoutRentalsInput, paymentsUncheckedCreateWithoutRentalsInput> | paymentsCreateWithoutRentalsInput[] | paymentsUncheckedCreateWithoutRentalsInput[]
    connectOrCreate?: paymentsCreateOrConnectWithoutRentalsInput | paymentsCreateOrConnectWithoutRentalsInput[]
    upsert?: paymentsUpsertWithWhereUniqueWithoutRentalsInput | paymentsUpsertWithWhereUniqueWithoutRentalsInput[]
    createMany?: paymentsCreateManyRentalsInputEnvelope
    set?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    disconnect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    delete?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    connect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    update?: paymentsUpdateWithWhereUniqueWithoutRentalsInput | paymentsUpdateWithWhereUniqueWithoutRentalsInput[]
    updateMany?: paymentsUpdateManyWithWhereWithoutRentalsInput | paymentsUpdateManyWithWhereWithoutRentalsInput[]
    deleteMany?: paymentsScalarWhereInput | paymentsScalarWhereInput[]
  }

  export type user_rolesCreateNestedManyWithoutRolesInput = {
    create?: XOR<user_rolesCreateWithoutRolesInput, user_rolesUncheckedCreateWithoutRolesInput> | user_rolesCreateWithoutRolesInput[] | user_rolesUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: user_rolesCreateOrConnectWithoutRolesInput | user_rolesCreateOrConnectWithoutRolesInput[]
    createMany?: user_rolesCreateManyRolesInputEnvelope
    connect?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
  }

  export type user_rolesUncheckedCreateNestedManyWithoutRolesInput = {
    create?: XOR<user_rolesCreateWithoutRolesInput, user_rolesUncheckedCreateWithoutRolesInput> | user_rolesCreateWithoutRolesInput[] | user_rolesUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: user_rolesCreateOrConnectWithoutRolesInput | user_rolesCreateOrConnectWithoutRolesInput[]
    createMany?: user_rolesCreateManyRolesInputEnvelope
    connect?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
  }

  export type user_rolesUpdateManyWithoutRolesNestedInput = {
    create?: XOR<user_rolesCreateWithoutRolesInput, user_rolesUncheckedCreateWithoutRolesInput> | user_rolesCreateWithoutRolesInput[] | user_rolesUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: user_rolesCreateOrConnectWithoutRolesInput | user_rolesCreateOrConnectWithoutRolesInput[]
    upsert?: user_rolesUpsertWithWhereUniqueWithoutRolesInput | user_rolesUpsertWithWhereUniqueWithoutRolesInput[]
    createMany?: user_rolesCreateManyRolesInputEnvelope
    set?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    disconnect?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    delete?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    connect?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    update?: user_rolesUpdateWithWhereUniqueWithoutRolesInput | user_rolesUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: user_rolesUpdateManyWithWhereWithoutRolesInput | user_rolesUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: user_rolesScalarWhereInput | user_rolesScalarWhereInput[]
  }

  export type user_rolesUncheckedUpdateManyWithoutRolesNestedInput = {
    create?: XOR<user_rolesCreateWithoutRolesInput, user_rolesUncheckedCreateWithoutRolesInput> | user_rolesCreateWithoutRolesInput[] | user_rolesUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: user_rolesCreateOrConnectWithoutRolesInput | user_rolesCreateOrConnectWithoutRolesInput[]
    upsert?: user_rolesUpsertWithWhereUniqueWithoutRolesInput | user_rolesUpsertWithWhereUniqueWithoutRolesInput[]
    createMany?: user_rolesCreateManyRolesInputEnvelope
    set?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    disconnect?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    delete?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    connect?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    update?: user_rolesUpdateWithWhereUniqueWithoutRolesInput | user_rolesUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: user_rolesUpdateManyWithWhereWithoutRolesInput | user_rolesUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: user_rolesScalarWhereInput | user_rolesScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutUser_roles_user_roles_assigned_byTousersInput = {
    create?: XOR<usersCreateWithoutUser_roles_user_roles_assigned_byTousersInput, usersUncheckedCreateWithoutUser_roles_user_roles_assigned_byTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_roles_user_roles_assigned_byTousersInput
    connect?: usersWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutUser_roles_user_roles_revoked_byTousersInput = {
    create?: XOR<usersCreateWithoutUser_roles_user_roles_revoked_byTousersInput, usersUncheckedCreateWithoutUser_roles_user_roles_revoked_byTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_roles_user_roles_revoked_byTousersInput
    connect?: usersWhereUniqueInput
  }

  export type rolesCreateNestedOneWithoutUser_rolesInput = {
    create?: XOR<rolesCreateWithoutUser_rolesInput, rolesUncheckedCreateWithoutUser_rolesInput>
    connectOrCreate?: rolesCreateOrConnectWithoutUser_rolesInput
    connect?: rolesWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutUser_roles_user_roles_user_idTousersInput = {
    create?: XOR<usersCreateWithoutUser_roles_user_roles_user_idTousersInput, usersUncheckedCreateWithoutUser_roles_user_roles_user_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_roles_user_roles_user_idTousersInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneWithoutUser_roles_user_roles_assigned_byTousersNestedInput = {
    create?: XOR<usersCreateWithoutUser_roles_user_roles_assigned_byTousersInput, usersUncheckedCreateWithoutUser_roles_user_roles_assigned_byTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_roles_user_roles_assigned_byTousersInput
    upsert?: usersUpsertWithoutUser_roles_user_roles_assigned_byTousersInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutUser_roles_user_roles_assigned_byTousersInput, usersUpdateWithoutUser_roles_user_roles_assigned_byTousersInput>, usersUncheckedUpdateWithoutUser_roles_user_roles_assigned_byTousersInput>
  }

  export type usersUpdateOneWithoutUser_roles_user_roles_revoked_byTousersNestedInput = {
    create?: XOR<usersCreateWithoutUser_roles_user_roles_revoked_byTousersInput, usersUncheckedCreateWithoutUser_roles_user_roles_revoked_byTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_roles_user_roles_revoked_byTousersInput
    upsert?: usersUpsertWithoutUser_roles_user_roles_revoked_byTousersInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutUser_roles_user_roles_revoked_byTousersInput, usersUpdateWithoutUser_roles_user_roles_revoked_byTousersInput>, usersUncheckedUpdateWithoutUser_roles_user_roles_revoked_byTousersInput>
  }

  export type rolesUpdateOneRequiredWithoutUser_rolesNestedInput = {
    create?: XOR<rolesCreateWithoutUser_rolesInput, rolesUncheckedCreateWithoutUser_rolesInput>
    connectOrCreate?: rolesCreateOrConnectWithoutUser_rolesInput
    upsert?: rolesUpsertWithoutUser_rolesInput
    connect?: rolesWhereUniqueInput
    update?: XOR<XOR<rolesUpdateToOneWithWhereWithoutUser_rolesInput, rolesUpdateWithoutUser_rolesInput>, rolesUncheckedUpdateWithoutUser_rolesInput>
  }

  export type usersUpdateOneRequiredWithoutUser_roles_user_roles_user_idTousersNestedInput = {
    create?: XOR<usersCreateWithoutUser_roles_user_roles_user_idTousersInput, usersUncheckedCreateWithoutUser_roles_user_roles_user_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_roles_user_roles_user_idTousersInput
    upsert?: usersUpsertWithoutUser_roles_user_roles_user_idTousersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutUser_roles_user_roles_user_idTousersInput, usersUpdateWithoutUser_roles_user_roles_user_idTousersInput>, usersUncheckedUpdateWithoutUser_roles_user_roles_user_idTousersInput>
  }

  export type bookingsCreateNestedManyWithoutUsersInput = {
    create?: XOR<bookingsCreateWithoutUsersInput, bookingsUncheckedCreateWithoutUsersInput> | bookingsCreateWithoutUsersInput[] | bookingsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutUsersInput | bookingsCreateOrConnectWithoutUsersInput[]
    createMany?: bookingsCreateManyUsersInputEnvelope
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
  }

  export type propertiesCreateNestedManyWithoutUsers_properties_approved_byTousersInput = {
    create?: XOR<propertiesCreateWithoutUsers_properties_approved_byTousersInput, propertiesUncheckedCreateWithoutUsers_properties_approved_byTousersInput> | propertiesCreateWithoutUsers_properties_approved_byTousersInput[] | propertiesUncheckedCreateWithoutUsers_properties_approved_byTousersInput[]
    connectOrCreate?: propertiesCreateOrConnectWithoutUsers_properties_approved_byTousersInput | propertiesCreateOrConnectWithoutUsers_properties_approved_byTousersInput[]
    createMany?: propertiesCreateManyUsers_properties_approved_byTousersInputEnvelope
    connect?: propertiesWhereUniqueInput | propertiesWhereUniqueInput[]
  }

  export type propertiesCreateNestedManyWithoutUsers_properties_manager_idTousersInput = {
    create?: XOR<propertiesCreateWithoutUsers_properties_manager_idTousersInput, propertiesUncheckedCreateWithoutUsers_properties_manager_idTousersInput> | propertiesCreateWithoutUsers_properties_manager_idTousersInput[] | propertiesUncheckedCreateWithoutUsers_properties_manager_idTousersInput[]
    connectOrCreate?: propertiesCreateOrConnectWithoutUsers_properties_manager_idTousersInput | propertiesCreateOrConnectWithoutUsers_properties_manager_idTousersInput[]
    createMany?: propertiesCreateManyUsers_properties_manager_idTousersInputEnvelope
    connect?: propertiesWhereUniqueInput | propertiesWhereUniqueInput[]
  }

  export type property_manager_applicationsCreateNestedManyWithoutUsers_property_manager_applications_reviewed_byTousersInput = {
    create?: XOR<property_manager_applicationsCreateWithoutUsers_property_manager_applications_reviewed_byTousersInput, property_manager_applicationsUncheckedCreateWithoutUsers_property_manager_applications_reviewed_byTousersInput> | property_manager_applicationsCreateWithoutUsers_property_manager_applications_reviewed_byTousersInput[] | property_manager_applicationsUncheckedCreateWithoutUsers_property_manager_applications_reviewed_byTousersInput[]
    connectOrCreate?: property_manager_applicationsCreateOrConnectWithoutUsers_property_manager_applications_reviewed_byTousersInput | property_manager_applicationsCreateOrConnectWithoutUsers_property_manager_applications_reviewed_byTousersInput[]
    createMany?: property_manager_applicationsCreateManyUsers_property_manager_applications_reviewed_byTousersInputEnvelope
    connect?: property_manager_applicationsWhereUniqueInput | property_manager_applicationsWhereUniqueInput[]
  }

  export type property_manager_applicationsCreateNestedManyWithoutUsers_property_manager_applications_user_idTousersInput = {
    create?: XOR<property_manager_applicationsCreateWithoutUsers_property_manager_applications_user_idTousersInput, property_manager_applicationsUncheckedCreateWithoutUsers_property_manager_applications_user_idTousersInput> | property_manager_applicationsCreateWithoutUsers_property_manager_applications_user_idTousersInput[] | property_manager_applicationsUncheckedCreateWithoutUsers_property_manager_applications_user_idTousersInput[]
    connectOrCreate?: property_manager_applicationsCreateOrConnectWithoutUsers_property_manager_applications_user_idTousersInput | property_manager_applicationsCreateOrConnectWithoutUsers_property_manager_applications_user_idTousersInput[]
    createMany?: property_manager_applicationsCreateManyUsers_property_manager_applications_user_idTousersInputEnvelope
    connect?: property_manager_applicationsWhereUniqueInput | property_manager_applicationsWhereUniqueInput[]
  }

  export type rentalsCreateNestedManyWithoutUsersInput = {
    create?: XOR<rentalsCreateWithoutUsersInput, rentalsUncheckedCreateWithoutUsersInput> | rentalsCreateWithoutUsersInput[] | rentalsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: rentalsCreateOrConnectWithoutUsersInput | rentalsCreateOrConnectWithoutUsersInput[]
    createMany?: rentalsCreateManyUsersInputEnvelope
    connect?: rentalsWhereUniqueInput | rentalsWhereUniqueInput[]
  }

  export type user_rolesCreateNestedManyWithoutUsers_user_roles_assigned_byTousersInput = {
    create?: XOR<user_rolesCreateWithoutUsers_user_roles_assigned_byTousersInput, user_rolesUncheckedCreateWithoutUsers_user_roles_assigned_byTousersInput> | user_rolesCreateWithoutUsers_user_roles_assigned_byTousersInput[] | user_rolesUncheckedCreateWithoutUsers_user_roles_assigned_byTousersInput[]
    connectOrCreate?: user_rolesCreateOrConnectWithoutUsers_user_roles_assigned_byTousersInput | user_rolesCreateOrConnectWithoutUsers_user_roles_assigned_byTousersInput[]
    createMany?: user_rolesCreateManyUsers_user_roles_assigned_byTousersInputEnvelope
    connect?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
  }

  export type user_rolesCreateNestedManyWithoutUsers_user_roles_revoked_byTousersInput = {
    create?: XOR<user_rolesCreateWithoutUsers_user_roles_revoked_byTousersInput, user_rolesUncheckedCreateWithoutUsers_user_roles_revoked_byTousersInput> | user_rolesCreateWithoutUsers_user_roles_revoked_byTousersInput[] | user_rolesUncheckedCreateWithoutUsers_user_roles_revoked_byTousersInput[]
    connectOrCreate?: user_rolesCreateOrConnectWithoutUsers_user_roles_revoked_byTousersInput | user_rolesCreateOrConnectWithoutUsers_user_roles_revoked_byTousersInput[]
    createMany?: user_rolesCreateManyUsers_user_roles_revoked_byTousersInputEnvelope
    connect?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
  }

  export type user_rolesCreateNestedManyWithoutUsers_user_roles_user_idTousersInput = {
    create?: XOR<user_rolesCreateWithoutUsers_user_roles_user_idTousersInput, user_rolesUncheckedCreateWithoutUsers_user_roles_user_idTousersInput> | user_rolesCreateWithoutUsers_user_roles_user_idTousersInput[] | user_rolesUncheckedCreateWithoutUsers_user_roles_user_idTousersInput[]
    connectOrCreate?: user_rolesCreateOrConnectWithoutUsers_user_roles_user_idTousersInput | user_rolesCreateOrConnectWithoutUsers_user_roles_user_idTousersInput[]
    createMany?: user_rolesCreateManyUsers_user_roles_user_idTousersInputEnvelope
    connect?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
  }

  export type bookingsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<bookingsCreateWithoutUsersInput, bookingsUncheckedCreateWithoutUsersInput> | bookingsCreateWithoutUsersInput[] | bookingsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutUsersInput | bookingsCreateOrConnectWithoutUsersInput[]
    createMany?: bookingsCreateManyUsersInputEnvelope
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
  }

  export type propertiesUncheckedCreateNestedManyWithoutUsers_properties_approved_byTousersInput = {
    create?: XOR<propertiesCreateWithoutUsers_properties_approved_byTousersInput, propertiesUncheckedCreateWithoutUsers_properties_approved_byTousersInput> | propertiesCreateWithoutUsers_properties_approved_byTousersInput[] | propertiesUncheckedCreateWithoutUsers_properties_approved_byTousersInput[]
    connectOrCreate?: propertiesCreateOrConnectWithoutUsers_properties_approved_byTousersInput | propertiesCreateOrConnectWithoutUsers_properties_approved_byTousersInput[]
    createMany?: propertiesCreateManyUsers_properties_approved_byTousersInputEnvelope
    connect?: propertiesWhereUniqueInput | propertiesWhereUniqueInput[]
  }

  export type propertiesUncheckedCreateNestedManyWithoutUsers_properties_manager_idTousersInput = {
    create?: XOR<propertiesCreateWithoutUsers_properties_manager_idTousersInput, propertiesUncheckedCreateWithoutUsers_properties_manager_idTousersInput> | propertiesCreateWithoutUsers_properties_manager_idTousersInput[] | propertiesUncheckedCreateWithoutUsers_properties_manager_idTousersInput[]
    connectOrCreate?: propertiesCreateOrConnectWithoutUsers_properties_manager_idTousersInput | propertiesCreateOrConnectWithoutUsers_properties_manager_idTousersInput[]
    createMany?: propertiesCreateManyUsers_properties_manager_idTousersInputEnvelope
    connect?: propertiesWhereUniqueInput | propertiesWhereUniqueInput[]
  }

  export type property_manager_applicationsUncheckedCreateNestedManyWithoutUsers_property_manager_applications_reviewed_byTousersInput = {
    create?: XOR<property_manager_applicationsCreateWithoutUsers_property_manager_applications_reviewed_byTousersInput, property_manager_applicationsUncheckedCreateWithoutUsers_property_manager_applications_reviewed_byTousersInput> | property_manager_applicationsCreateWithoutUsers_property_manager_applications_reviewed_byTousersInput[] | property_manager_applicationsUncheckedCreateWithoutUsers_property_manager_applications_reviewed_byTousersInput[]
    connectOrCreate?: property_manager_applicationsCreateOrConnectWithoutUsers_property_manager_applications_reviewed_byTousersInput | property_manager_applicationsCreateOrConnectWithoutUsers_property_manager_applications_reviewed_byTousersInput[]
    createMany?: property_manager_applicationsCreateManyUsers_property_manager_applications_reviewed_byTousersInputEnvelope
    connect?: property_manager_applicationsWhereUniqueInput | property_manager_applicationsWhereUniqueInput[]
  }

  export type property_manager_applicationsUncheckedCreateNestedManyWithoutUsers_property_manager_applications_user_idTousersInput = {
    create?: XOR<property_manager_applicationsCreateWithoutUsers_property_manager_applications_user_idTousersInput, property_manager_applicationsUncheckedCreateWithoutUsers_property_manager_applications_user_idTousersInput> | property_manager_applicationsCreateWithoutUsers_property_manager_applications_user_idTousersInput[] | property_manager_applicationsUncheckedCreateWithoutUsers_property_manager_applications_user_idTousersInput[]
    connectOrCreate?: property_manager_applicationsCreateOrConnectWithoutUsers_property_manager_applications_user_idTousersInput | property_manager_applicationsCreateOrConnectWithoutUsers_property_manager_applications_user_idTousersInput[]
    createMany?: property_manager_applicationsCreateManyUsers_property_manager_applications_user_idTousersInputEnvelope
    connect?: property_manager_applicationsWhereUniqueInput | property_manager_applicationsWhereUniqueInput[]
  }

  export type rentalsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<rentalsCreateWithoutUsersInput, rentalsUncheckedCreateWithoutUsersInput> | rentalsCreateWithoutUsersInput[] | rentalsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: rentalsCreateOrConnectWithoutUsersInput | rentalsCreateOrConnectWithoutUsersInput[]
    createMany?: rentalsCreateManyUsersInputEnvelope
    connect?: rentalsWhereUniqueInput | rentalsWhereUniqueInput[]
  }

  export type user_rolesUncheckedCreateNestedManyWithoutUsers_user_roles_assigned_byTousersInput = {
    create?: XOR<user_rolesCreateWithoutUsers_user_roles_assigned_byTousersInput, user_rolesUncheckedCreateWithoutUsers_user_roles_assigned_byTousersInput> | user_rolesCreateWithoutUsers_user_roles_assigned_byTousersInput[] | user_rolesUncheckedCreateWithoutUsers_user_roles_assigned_byTousersInput[]
    connectOrCreate?: user_rolesCreateOrConnectWithoutUsers_user_roles_assigned_byTousersInput | user_rolesCreateOrConnectWithoutUsers_user_roles_assigned_byTousersInput[]
    createMany?: user_rolesCreateManyUsers_user_roles_assigned_byTousersInputEnvelope
    connect?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
  }

  export type user_rolesUncheckedCreateNestedManyWithoutUsers_user_roles_revoked_byTousersInput = {
    create?: XOR<user_rolesCreateWithoutUsers_user_roles_revoked_byTousersInput, user_rolesUncheckedCreateWithoutUsers_user_roles_revoked_byTousersInput> | user_rolesCreateWithoutUsers_user_roles_revoked_byTousersInput[] | user_rolesUncheckedCreateWithoutUsers_user_roles_revoked_byTousersInput[]
    connectOrCreate?: user_rolesCreateOrConnectWithoutUsers_user_roles_revoked_byTousersInput | user_rolesCreateOrConnectWithoutUsers_user_roles_revoked_byTousersInput[]
    createMany?: user_rolesCreateManyUsers_user_roles_revoked_byTousersInputEnvelope
    connect?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
  }

  export type user_rolesUncheckedCreateNestedManyWithoutUsers_user_roles_user_idTousersInput = {
    create?: XOR<user_rolesCreateWithoutUsers_user_roles_user_idTousersInput, user_rolesUncheckedCreateWithoutUsers_user_roles_user_idTousersInput> | user_rolesCreateWithoutUsers_user_roles_user_idTousersInput[] | user_rolesUncheckedCreateWithoutUsers_user_roles_user_idTousersInput[]
    connectOrCreate?: user_rolesCreateOrConnectWithoutUsers_user_roles_user_idTousersInput | user_rolesCreateOrConnectWithoutUsers_user_roles_user_idTousersInput[]
    createMany?: user_rolesCreateManyUsers_user_roles_user_idTousersInputEnvelope
    connect?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type bookingsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<bookingsCreateWithoutUsersInput, bookingsUncheckedCreateWithoutUsersInput> | bookingsCreateWithoutUsersInput[] | bookingsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutUsersInput | bookingsCreateOrConnectWithoutUsersInput[]
    upsert?: bookingsUpsertWithWhereUniqueWithoutUsersInput | bookingsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: bookingsCreateManyUsersInputEnvelope
    set?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    disconnect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    delete?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    update?: bookingsUpdateWithWhereUniqueWithoutUsersInput | bookingsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: bookingsUpdateManyWithWhereWithoutUsersInput | bookingsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: bookingsScalarWhereInput | bookingsScalarWhereInput[]
  }

  export type propertiesUpdateManyWithoutUsers_properties_approved_byTousersNestedInput = {
    create?: XOR<propertiesCreateWithoutUsers_properties_approved_byTousersInput, propertiesUncheckedCreateWithoutUsers_properties_approved_byTousersInput> | propertiesCreateWithoutUsers_properties_approved_byTousersInput[] | propertiesUncheckedCreateWithoutUsers_properties_approved_byTousersInput[]
    connectOrCreate?: propertiesCreateOrConnectWithoutUsers_properties_approved_byTousersInput | propertiesCreateOrConnectWithoutUsers_properties_approved_byTousersInput[]
    upsert?: propertiesUpsertWithWhereUniqueWithoutUsers_properties_approved_byTousersInput | propertiesUpsertWithWhereUniqueWithoutUsers_properties_approved_byTousersInput[]
    createMany?: propertiesCreateManyUsers_properties_approved_byTousersInputEnvelope
    set?: propertiesWhereUniqueInput | propertiesWhereUniqueInput[]
    disconnect?: propertiesWhereUniqueInput | propertiesWhereUniqueInput[]
    delete?: propertiesWhereUniqueInput | propertiesWhereUniqueInput[]
    connect?: propertiesWhereUniqueInput | propertiesWhereUniqueInput[]
    update?: propertiesUpdateWithWhereUniqueWithoutUsers_properties_approved_byTousersInput | propertiesUpdateWithWhereUniqueWithoutUsers_properties_approved_byTousersInput[]
    updateMany?: propertiesUpdateManyWithWhereWithoutUsers_properties_approved_byTousersInput | propertiesUpdateManyWithWhereWithoutUsers_properties_approved_byTousersInput[]
    deleteMany?: propertiesScalarWhereInput | propertiesScalarWhereInput[]
  }

  export type propertiesUpdateManyWithoutUsers_properties_manager_idTousersNestedInput = {
    create?: XOR<propertiesCreateWithoutUsers_properties_manager_idTousersInput, propertiesUncheckedCreateWithoutUsers_properties_manager_idTousersInput> | propertiesCreateWithoutUsers_properties_manager_idTousersInput[] | propertiesUncheckedCreateWithoutUsers_properties_manager_idTousersInput[]
    connectOrCreate?: propertiesCreateOrConnectWithoutUsers_properties_manager_idTousersInput | propertiesCreateOrConnectWithoutUsers_properties_manager_idTousersInput[]
    upsert?: propertiesUpsertWithWhereUniqueWithoutUsers_properties_manager_idTousersInput | propertiesUpsertWithWhereUniqueWithoutUsers_properties_manager_idTousersInput[]
    createMany?: propertiesCreateManyUsers_properties_manager_idTousersInputEnvelope
    set?: propertiesWhereUniqueInput | propertiesWhereUniqueInput[]
    disconnect?: propertiesWhereUniqueInput | propertiesWhereUniqueInput[]
    delete?: propertiesWhereUniqueInput | propertiesWhereUniqueInput[]
    connect?: propertiesWhereUniqueInput | propertiesWhereUniqueInput[]
    update?: propertiesUpdateWithWhereUniqueWithoutUsers_properties_manager_idTousersInput | propertiesUpdateWithWhereUniqueWithoutUsers_properties_manager_idTousersInput[]
    updateMany?: propertiesUpdateManyWithWhereWithoutUsers_properties_manager_idTousersInput | propertiesUpdateManyWithWhereWithoutUsers_properties_manager_idTousersInput[]
    deleteMany?: propertiesScalarWhereInput | propertiesScalarWhereInput[]
  }

  export type property_manager_applicationsUpdateManyWithoutUsers_property_manager_applications_reviewed_byTousersNestedInput = {
    create?: XOR<property_manager_applicationsCreateWithoutUsers_property_manager_applications_reviewed_byTousersInput, property_manager_applicationsUncheckedCreateWithoutUsers_property_manager_applications_reviewed_byTousersInput> | property_manager_applicationsCreateWithoutUsers_property_manager_applications_reviewed_byTousersInput[] | property_manager_applicationsUncheckedCreateWithoutUsers_property_manager_applications_reviewed_byTousersInput[]
    connectOrCreate?: property_manager_applicationsCreateOrConnectWithoutUsers_property_manager_applications_reviewed_byTousersInput | property_manager_applicationsCreateOrConnectWithoutUsers_property_manager_applications_reviewed_byTousersInput[]
    upsert?: property_manager_applicationsUpsertWithWhereUniqueWithoutUsers_property_manager_applications_reviewed_byTousersInput | property_manager_applicationsUpsertWithWhereUniqueWithoutUsers_property_manager_applications_reviewed_byTousersInput[]
    createMany?: property_manager_applicationsCreateManyUsers_property_manager_applications_reviewed_byTousersInputEnvelope
    set?: property_manager_applicationsWhereUniqueInput | property_manager_applicationsWhereUniqueInput[]
    disconnect?: property_manager_applicationsWhereUniqueInput | property_manager_applicationsWhereUniqueInput[]
    delete?: property_manager_applicationsWhereUniqueInput | property_manager_applicationsWhereUniqueInput[]
    connect?: property_manager_applicationsWhereUniqueInput | property_manager_applicationsWhereUniqueInput[]
    update?: property_manager_applicationsUpdateWithWhereUniqueWithoutUsers_property_manager_applications_reviewed_byTousersInput | property_manager_applicationsUpdateWithWhereUniqueWithoutUsers_property_manager_applications_reviewed_byTousersInput[]
    updateMany?: property_manager_applicationsUpdateManyWithWhereWithoutUsers_property_manager_applications_reviewed_byTousersInput | property_manager_applicationsUpdateManyWithWhereWithoutUsers_property_manager_applications_reviewed_byTousersInput[]
    deleteMany?: property_manager_applicationsScalarWhereInput | property_manager_applicationsScalarWhereInput[]
  }

  export type property_manager_applicationsUpdateManyWithoutUsers_property_manager_applications_user_idTousersNestedInput = {
    create?: XOR<property_manager_applicationsCreateWithoutUsers_property_manager_applications_user_idTousersInput, property_manager_applicationsUncheckedCreateWithoutUsers_property_manager_applications_user_idTousersInput> | property_manager_applicationsCreateWithoutUsers_property_manager_applications_user_idTousersInput[] | property_manager_applicationsUncheckedCreateWithoutUsers_property_manager_applications_user_idTousersInput[]
    connectOrCreate?: property_manager_applicationsCreateOrConnectWithoutUsers_property_manager_applications_user_idTousersInput | property_manager_applicationsCreateOrConnectWithoutUsers_property_manager_applications_user_idTousersInput[]
    upsert?: property_manager_applicationsUpsertWithWhereUniqueWithoutUsers_property_manager_applications_user_idTousersInput | property_manager_applicationsUpsertWithWhereUniqueWithoutUsers_property_manager_applications_user_idTousersInput[]
    createMany?: property_manager_applicationsCreateManyUsers_property_manager_applications_user_idTousersInputEnvelope
    set?: property_manager_applicationsWhereUniqueInput | property_manager_applicationsWhereUniqueInput[]
    disconnect?: property_manager_applicationsWhereUniqueInput | property_manager_applicationsWhereUniqueInput[]
    delete?: property_manager_applicationsWhereUniqueInput | property_manager_applicationsWhereUniqueInput[]
    connect?: property_manager_applicationsWhereUniqueInput | property_manager_applicationsWhereUniqueInput[]
    update?: property_manager_applicationsUpdateWithWhereUniqueWithoutUsers_property_manager_applications_user_idTousersInput | property_manager_applicationsUpdateWithWhereUniqueWithoutUsers_property_manager_applications_user_idTousersInput[]
    updateMany?: property_manager_applicationsUpdateManyWithWhereWithoutUsers_property_manager_applications_user_idTousersInput | property_manager_applicationsUpdateManyWithWhereWithoutUsers_property_manager_applications_user_idTousersInput[]
    deleteMany?: property_manager_applicationsScalarWhereInput | property_manager_applicationsScalarWhereInput[]
  }

  export type rentalsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<rentalsCreateWithoutUsersInput, rentalsUncheckedCreateWithoutUsersInput> | rentalsCreateWithoutUsersInput[] | rentalsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: rentalsCreateOrConnectWithoutUsersInput | rentalsCreateOrConnectWithoutUsersInput[]
    upsert?: rentalsUpsertWithWhereUniqueWithoutUsersInput | rentalsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: rentalsCreateManyUsersInputEnvelope
    set?: rentalsWhereUniqueInput | rentalsWhereUniqueInput[]
    disconnect?: rentalsWhereUniqueInput | rentalsWhereUniqueInput[]
    delete?: rentalsWhereUniqueInput | rentalsWhereUniqueInput[]
    connect?: rentalsWhereUniqueInput | rentalsWhereUniqueInput[]
    update?: rentalsUpdateWithWhereUniqueWithoutUsersInput | rentalsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: rentalsUpdateManyWithWhereWithoutUsersInput | rentalsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: rentalsScalarWhereInput | rentalsScalarWhereInput[]
  }

  export type user_rolesUpdateManyWithoutUsers_user_roles_assigned_byTousersNestedInput = {
    create?: XOR<user_rolesCreateWithoutUsers_user_roles_assigned_byTousersInput, user_rolesUncheckedCreateWithoutUsers_user_roles_assigned_byTousersInput> | user_rolesCreateWithoutUsers_user_roles_assigned_byTousersInput[] | user_rolesUncheckedCreateWithoutUsers_user_roles_assigned_byTousersInput[]
    connectOrCreate?: user_rolesCreateOrConnectWithoutUsers_user_roles_assigned_byTousersInput | user_rolesCreateOrConnectWithoutUsers_user_roles_assigned_byTousersInput[]
    upsert?: user_rolesUpsertWithWhereUniqueWithoutUsers_user_roles_assigned_byTousersInput | user_rolesUpsertWithWhereUniqueWithoutUsers_user_roles_assigned_byTousersInput[]
    createMany?: user_rolesCreateManyUsers_user_roles_assigned_byTousersInputEnvelope
    set?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    disconnect?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    delete?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    connect?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    update?: user_rolesUpdateWithWhereUniqueWithoutUsers_user_roles_assigned_byTousersInput | user_rolesUpdateWithWhereUniqueWithoutUsers_user_roles_assigned_byTousersInput[]
    updateMany?: user_rolesUpdateManyWithWhereWithoutUsers_user_roles_assigned_byTousersInput | user_rolesUpdateManyWithWhereWithoutUsers_user_roles_assigned_byTousersInput[]
    deleteMany?: user_rolesScalarWhereInput | user_rolesScalarWhereInput[]
  }

  export type user_rolesUpdateManyWithoutUsers_user_roles_revoked_byTousersNestedInput = {
    create?: XOR<user_rolesCreateWithoutUsers_user_roles_revoked_byTousersInput, user_rolesUncheckedCreateWithoutUsers_user_roles_revoked_byTousersInput> | user_rolesCreateWithoutUsers_user_roles_revoked_byTousersInput[] | user_rolesUncheckedCreateWithoutUsers_user_roles_revoked_byTousersInput[]
    connectOrCreate?: user_rolesCreateOrConnectWithoutUsers_user_roles_revoked_byTousersInput | user_rolesCreateOrConnectWithoutUsers_user_roles_revoked_byTousersInput[]
    upsert?: user_rolesUpsertWithWhereUniqueWithoutUsers_user_roles_revoked_byTousersInput | user_rolesUpsertWithWhereUniqueWithoutUsers_user_roles_revoked_byTousersInput[]
    createMany?: user_rolesCreateManyUsers_user_roles_revoked_byTousersInputEnvelope
    set?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    disconnect?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    delete?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    connect?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    update?: user_rolesUpdateWithWhereUniqueWithoutUsers_user_roles_revoked_byTousersInput | user_rolesUpdateWithWhereUniqueWithoutUsers_user_roles_revoked_byTousersInput[]
    updateMany?: user_rolesUpdateManyWithWhereWithoutUsers_user_roles_revoked_byTousersInput | user_rolesUpdateManyWithWhereWithoutUsers_user_roles_revoked_byTousersInput[]
    deleteMany?: user_rolesScalarWhereInput | user_rolesScalarWhereInput[]
  }

  export type user_rolesUpdateManyWithoutUsers_user_roles_user_idTousersNestedInput = {
    create?: XOR<user_rolesCreateWithoutUsers_user_roles_user_idTousersInput, user_rolesUncheckedCreateWithoutUsers_user_roles_user_idTousersInput> | user_rolesCreateWithoutUsers_user_roles_user_idTousersInput[] | user_rolesUncheckedCreateWithoutUsers_user_roles_user_idTousersInput[]
    connectOrCreate?: user_rolesCreateOrConnectWithoutUsers_user_roles_user_idTousersInput | user_rolesCreateOrConnectWithoutUsers_user_roles_user_idTousersInput[]
    upsert?: user_rolesUpsertWithWhereUniqueWithoutUsers_user_roles_user_idTousersInput | user_rolesUpsertWithWhereUniqueWithoutUsers_user_roles_user_idTousersInput[]
    createMany?: user_rolesCreateManyUsers_user_roles_user_idTousersInputEnvelope
    set?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    disconnect?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    delete?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    connect?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    update?: user_rolesUpdateWithWhereUniqueWithoutUsers_user_roles_user_idTousersInput | user_rolesUpdateWithWhereUniqueWithoutUsers_user_roles_user_idTousersInput[]
    updateMany?: user_rolesUpdateManyWithWhereWithoutUsers_user_roles_user_idTousersInput | user_rolesUpdateManyWithWhereWithoutUsers_user_roles_user_idTousersInput[]
    deleteMany?: user_rolesScalarWhereInput | user_rolesScalarWhereInput[]
  }

  export type bookingsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<bookingsCreateWithoutUsersInput, bookingsUncheckedCreateWithoutUsersInput> | bookingsCreateWithoutUsersInput[] | bookingsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutUsersInput | bookingsCreateOrConnectWithoutUsersInput[]
    upsert?: bookingsUpsertWithWhereUniqueWithoutUsersInput | bookingsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: bookingsCreateManyUsersInputEnvelope
    set?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    disconnect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    delete?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    update?: bookingsUpdateWithWhereUniqueWithoutUsersInput | bookingsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: bookingsUpdateManyWithWhereWithoutUsersInput | bookingsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: bookingsScalarWhereInput | bookingsScalarWhereInput[]
  }

  export type propertiesUncheckedUpdateManyWithoutUsers_properties_approved_byTousersNestedInput = {
    create?: XOR<propertiesCreateWithoutUsers_properties_approved_byTousersInput, propertiesUncheckedCreateWithoutUsers_properties_approved_byTousersInput> | propertiesCreateWithoutUsers_properties_approved_byTousersInput[] | propertiesUncheckedCreateWithoutUsers_properties_approved_byTousersInput[]
    connectOrCreate?: propertiesCreateOrConnectWithoutUsers_properties_approved_byTousersInput | propertiesCreateOrConnectWithoutUsers_properties_approved_byTousersInput[]
    upsert?: propertiesUpsertWithWhereUniqueWithoutUsers_properties_approved_byTousersInput | propertiesUpsertWithWhereUniqueWithoutUsers_properties_approved_byTousersInput[]
    createMany?: propertiesCreateManyUsers_properties_approved_byTousersInputEnvelope
    set?: propertiesWhereUniqueInput | propertiesWhereUniqueInput[]
    disconnect?: propertiesWhereUniqueInput | propertiesWhereUniqueInput[]
    delete?: propertiesWhereUniqueInput | propertiesWhereUniqueInput[]
    connect?: propertiesWhereUniqueInput | propertiesWhereUniqueInput[]
    update?: propertiesUpdateWithWhereUniqueWithoutUsers_properties_approved_byTousersInput | propertiesUpdateWithWhereUniqueWithoutUsers_properties_approved_byTousersInput[]
    updateMany?: propertiesUpdateManyWithWhereWithoutUsers_properties_approved_byTousersInput | propertiesUpdateManyWithWhereWithoutUsers_properties_approved_byTousersInput[]
    deleteMany?: propertiesScalarWhereInput | propertiesScalarWhereInput[]
  }

  export type propertiesUncheckedUpdateManyWithoutUsers_properties_manager_idTousersNestedInput = {
    create?: XOR<propertiesCreateWithoutUsers_properties_manager_idTousersInput, propertiesUncheckedCreateWithoutUsers_properties_manager_idTousersInput> | propertiesCreateWithoutUsers_properties_manager_idTousersInput[] | propertiesUncheckedCreateWithoutUsers_properties_manager_idTousersInput[]
    connectOrCreate?: propertiesCreateOrConnectWithoutUsers_properties_manager_idTousersInput | propertiesCreateOrConnectWithoutUsers_properties_manager_idTousersInput[]
    upsert?: propertiesUpsertWithWhereUniqueWithoutUsers_properties_manager_idTousersInput | propertiesUpsertWithWhereUniqueWithoutUsers_properties_manager_idTousersInput[]
    createMany?: propertiesCreateManyUsers_properties_manager_idTousersInputEnvelope
    set?: propertiesWhereUniqueInput | propertiesWhereUniqueInput[]
    disconnect?: propertiesWhereUniqueInput | propertiesWhereUniqueInput[]
    delete?: propertiesWhereUniqueInput | propertiesWhereUniqueInput[]
    connect?: propertiesWhereUniqueInput | propertiesWhereUniqueInput[]
    update?: propertiesUpdateWithWhereUniqueWithoutUsers_properties_manager_idTousersInput | propertiesUpdateWithWhereUniqueWithoutUsers_properties_manager_idTousersInput[]
    updateMany?: propertiesUpdateManyWithWhereWithoutUsers_properties_manager_idTousersInput | propertiesUpdateManyWithWhereWithoutUsers_properties_manager_idTousersInput[]
    deleteMany?: propertiesScalarWhereInput | propertiesScalarWhereInput[]
  }

  export type property_manager_applicationsUncheckedUpdateManyWithoutUsers_property_manager_applications_reviewed_byTousersNestedInput = {
    create?: XOR<property_manager_applicationsCreateWithoutUsers_property_manager_applications_reviewed_byTousersInput, property_manager_applicationsUncheckedCreateWithoutUsers_property_manager_applications_reviewed_byTousersInput> | property_manager_applicationsCreateWithoutUsers_property_manager_applications_reviewed_byTousersInput[] | property_manager_applicationsUncheckedCreateWithoutUsers_property_manager_applications_reviewed_byTousersInput[]
    connectOrCreate?: property_manager_applicationsCreateOrConnectWithoutUsers_property_manager_applications_reviewed_byTousersInput | property_manager_applicationsCreateOrConnectWithoutUsers_property_manager_applications_reviewed_byTousersInput[]
    upsert?: property_manager_applicationsUpsertWithWhereUniqueWithoutUsers_property_manager_applications_reviewed_byTousersInput | property_manager_applicationsUpsertWithWhereUniqueWithoutUsers_property_manager_applications_reviewed_byTousersInput[]
    createMany?: property_manager_applicationsCreateManyUsers_property_manager_applications_reviewed_byTousersInputEnvelope
    set?: property_manager_applicationsWhereUniqueInput | property_manager_applicationsWhereUniqueInput[]
    disconnect?: property_manager_applicationsWhereUniqueInput | property_manager_applicationsWhereUniqueInput[]
    delete?: property_manager_applicationsWhereUniqueInput | property_manager_applicationsWhereUniqueInput[]
    connect?: property_manager_applicationsWhereUniqueInput | property_manager_applicationsWhereUniqueInput[]
    update?: property_manager_applicationsUpdateWithWhereUniqueWithoutUsers_property_manager_applications_reviewed_byTousersInput | property_manager_applicationsUpdateWithWhereUniqueWithoutUsers_property_manager_applications_reviewed_byTousersInput[]
    updateMany?: property_manager_applicationsUpdateManyWithWhereWithoutUsers_property_manager_applications_reviewed_byTousersInput | property_manager_applicationsUpdateManyWithWhereWithoutUsers_property_manager_applications_reviewed_byTousersInput[]
    deleteMany?: property_manager_applicationsScalarWhereInput | property_manager_applicationsScalarWhereInput[]
  }

  export type property_manager_applicationsUncheckedUpdateManyWithoutUsers_property_manager_applications_user_idTousersNestedInput = {
    create?: XOR<property_manager_applicationsCreateWithoutUsers_property_manager_applications_user_idTousersInput, property_manager_applicationsUncheckedCreateWithoutUsers_property_manager_applications_user_idTousersInput> | property_manager_applicationsCreateWithoutUsers_property_manager_applications_user_idTousersInput[] | property_manager_applicationsUncheckedCreateWithoutUsers_property_manager_applications_user_idTousersInput[]
    connectOrCreate?: property_manager_applicationsCreateOrConnectWithoutUsers_property_manager_applications_user_idTousersInput | property_manager_applicationsCreateOrConnectWithoutUsers_property_manager_applications_user_idTousersInput[]
    upsert?: property_manager_applicationsUpsertWithWhereUniqueWithoutUsers_property_manager_applications_user_idTousersInput | property_manager_applicationsUpsertWithWhereUniqueWithoutUsers_property_manager_applications_user_idTousersInput[]
    createMany?: property_manager_applicationsCreateManyUsers_property_manager_applications_user_idTousersInputEnvelope
    set?: property_manager_applicationsWhereUniqueInput | property_manager_applicationsWhereUniqueInput[]
    disconnect?: property_manager_applicationsWhereUniqueInput | property_manager_applicationsWhereUniqueInput[]
    delete?: property_manager_applicationsWhereUniqueInput | property_manager_applicationsWhereUniqueInput[]
    connect?: property_manager_applicationsWhereUniqueInput | property_manager_applicationsWhereUniqueInput[]
    update?: property_manager_applicationsUpdateWithWhereUniqueWithoutUsers_property_manager_applications_user_idTousersInput | property_manager_applicationsUpdateWithWhereUniqueWithoutUsers_property_manager_applications_user_idTousersInput[]
    updateMany?: property_manager_applicationsUpdateManyWithWhereWithoutUsers_property_manager_applications_user_idTousersInput | property_manager_applicationsUpdateManyWithWhereWithoutUsers_property_manager_applications_user_idTousersInput[]
    deleteMany?: property_manager_applicationsScalarWhereInput | property_manager_applicationsScalarWhereInput[]
  }

  export type rentalsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<rentalsCreateWithoutUsersInput, rentalsUncheckedCreateWithoutUsersInput> | rentalsCreateWithoutUsersInput[] | rentalsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: rentalsCreateOrConnectWithoutUsersInput | rentalsCreateOrConnectWithoutUsersInput[]
    upsert?: rentalsUpsertWithWhereUniqueWithoutUsersInput | rentalsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: rentalsCreateManyUsersInputEnvelope
    set?: rentalsWhereUniqueInput | rentalsWhereUniqueInput[]
    disconnect?: rentalsWhereUniqueInput | rentalsWhereUniqueInput[]
    delete?: rentalsWhereUniqueInput | rentalsWhereUniqueInput[]
    connect?: rentalsWhereUniqueInput | rentalsWhereUniqueInput[]
    update?: rentalsUpdateWithWhereUniqueWithoutUsersInput | rentalsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: rentalsUpdateManyWithWhereWithoutUsersInput | rentalsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: rentalsScalarWhereInput | rentalsScalarWhereInput[]
  }

  export type user_rolesUncheckedUpdateManyWithoutUsers_user_roles_assigned_byTousersNestedInput = {
    create?: XOR<user_rolesCreateWithoutUsers_user_roles_assigned_byTousersInput, user_rolesUncheckedCreateWithoutUsers_user_roles_assigned_byTousersInput> | user_rolesCreateWithoutUsers_user_roles_assigned_byTousersInput[] | user_rolesUncheckedCreateWithoutUsers_user_roles_assigned_byTousersInput[]
    connectOrCreate?: user_rolesCreateOrConnectWithoutUsers_user_roles_assigned_byTousersInput | user_rolesCreateOrConnectWithoutUsers_user_roles_assigned_byTousersInput[]
    upsert?: user_rolesUpsertWithWhereUniqueWithoutUsers_user_roles_assigned_byTousersInput | user_rolesUpsertWithWhereUniqueWithoutUsers_user_roles_assigned_byTousersInput[]
    createMany?: user_rolesCreateManyUsers_user_roles_assigned_byTousersInputEnvelope
    set?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    disconnect?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    delete?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    connect?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    update?: user_rolesUpdateWithWhereUniqueWithoutUsers_user_roles_assigned_byTousersInput | user_rolesUpdateWithWhereUniqueWithoutUsers_user_roles_assigned_byTousersInput[]
    updateMany?: user_rolesUpdateManyWithWhereWithoutUsers_user_roles_assigned_byTousersInput | user_rolesUpdateManyWithWhereWithoutUsers_user_roles_assigned_byTousersInput[]
    deleteMany?: user_rolesScalarWhereInput | user_rolesScalarWhereInput[]
  }

  export type user_rolesUncheckedUpdateManyWithoutUsers_user_roles_revoked_byTousersNestedInput = {
    create?: XOR<user_rolesCreateWithoutUsers_user_roles_revoked_byTousersInput, user_rolesUncheckedCreateWithoutUsers_user_roles_revoked_byTousersInput> | user_rolesCreateWithoutUsers_user_roles_revoked_byTousersInput[] | user_rolesUncheckedCreateWithoutUsers_user_roles_revoked_byTousersInput[]
    connectOrCreate?: user_rolesCreateOrConnectWithoutUsers_user_roles_revoked_byTousersInput | user_rolesCreateOrConnectWithoutUsers_user_roles_revoked_byTousersInput[]
    upsert?: user_rolesUpsertWithWhereUniqueWithoutUsers_user_roles_revoked_byTousersInput | user_rolesUpsertWithWhereUniqueWithoutUsers_user_roles_revoked_byTousersInput[]
    createMany?: user_rolesCreateManyUsers_user_roles_revoked_byTousersInputEnvelope
    set?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    disconnect?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    delete?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    connect?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    update?: user_rolesUpdateWithWhereUniqueWithoutUsers_user_roles_revoked_byTousersInput | user_rolesUpdateWithWhereUniqueWithoutUsers_user_roles_revoked_byTousersInput[]
    updateMany?: user_rolesUpdateManyWithWhereWithoutUsers_user_roles_revoked_byTousersInput | user_rolesUpdateManyWithWhereWithoutUsers_user_roles_revoked_byTousersInput[]
    deleteMany?: user_rolesScalarWhereInput | user_rolesScalarWhereInput[]
  }

  export type user_rolesUncheckedUpdateManyWithoutUsers_user_roles_user_idTousersNestedInput = {
    create?: XOR<user_rolesCreateWithoutUsers_user_roles_user_idTousersInput, user_rolesUncheckedCreateWithoutUsers_user_roles_user_idTousersInput> | user_rolesCreateWithoutUsers_user_roles_user_idTousersInput[] | user_rolesUncheckedCreateWithoutUsers_user_roles_user_idTousersInput[]
    connectOrCreate?: user_rolesCreateOrConnectWithoutUsers_user_roles_user_idTousersInput | user_rolesCreateOrConnectWithoutUsers_user_roles_user_idTousersInput[]
    upsert?: user_rolesUpsertWithWhereUniqueWithoutUsers_user_roles_user_idTousersInput | user_rolesUpsertWithWhereUniqueWithoutUsers_user_roles_user_idTousersInput[]
    createMany?: user_rolesCreateManyUsers_user_roles_user_idTousersInputEnvelope
    set?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    disconnect?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    delete?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    connect?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    update?: user_rolesUpdateWithWhereUniqueWithoutUsers_user_roles_user_idTousersInput | user_rolesUpdateWithWhereUniqueWithoutUsers_user_roles_user_idTousersInput[]
    updateMany?: user_rolesUpdateManyWithWhereWithoutUsers_user_roles_user_idTousersInput | user_rolesUpdateManyWithWhereWithoutUsers_user_roles_user_idTousersInput[]
    deleteMany?: user_rolesScalarWhereInput | user_rolesScalarWhereInput[]
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedEnumbooking_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.booking_status | Enumbooking_statusFieldRefInput<$PrismaModel>
    in?: $Enums.booking_status[] | ListEnumbooking_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.booking_status[] | ListEnumbooking_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumbooking_statusFilter<$PrismaModel> | $Enums.booking_status
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumbooking_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.booking_status | Enumbooking_statusFieldRefInput<$PrismaModel>
    in?: $Enums.booking_status[] | ListEnumbooking_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.booking_status[] | ListEnumbooking_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumbooking_statusWithAggregatesFilter<$PrismaModel> | $Enums.booking_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumbooking_statusFilter<$PrismaModel>
    _max?: NestedEnumbooking_statusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumpayment_categoryFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_category | Enumpayment_categoryFieldRefInput<$PrismaModel>
    in?: $Enums.payment_category[] | ListEnumpayment_categoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.payment_category[] | ListEnumpayment_categoryFieldRefInput<$PrismaModel>
    not?: NestedEnumpayment_categoryFilter<$PrismaModel> | $Enums.payment_category
  }

  export type NestedEnumpayment_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_status | Enumpayment_statusFieldRefInput<$PrismaModel>
    in?: $Enums.payment_status[] | ListEnumpayment_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.payment_status[] | ListEnumpayment_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumpayment_statusFilter<$PrismaModel> | $Enums.payment_status
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumpayment_categoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_category | Enumpayment_categoryFieldRefInput<$PrismaModel>
    in?: $Enums.payment_category[] | ListEnumpayment_categoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.payment_category[] | ListEnumpayment_categoryFieldRefInput<$PrismaModel>
    not?: NestedEnumpayment_categoryWithAggregatesFilter<$PrismaModel> | $Enums.payment_category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpayment_categoryFilter<$PrismaModel>
    _max?: NestedEnumpayment_categoryFilter<$PrismaModel>
  }

  export type NestedEnumpayment_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_status | Enumpayment_statusFieldRefInput<$PrismaModel>
    in?: $Enums.payment_status[] | ListEnumpayment_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.payment_status[] | ListEnumpayment_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumpayment_statusWithAggregatesFilter<$PrismaModel> | $Enums.payment_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpayment_statusFilter<$PrismaModel>
    _max?: NestedEnumpayment_statusFilter<$PrismaModel>
  }

  export type NestedEnumpricing_unitFilter<$PrismaModel = never> = {
    equals?: $Enums.pricing_unit | Enumpricing_unitFieldRefInput<$PrismaModel>
    in?: $Enums.pricing_unit[] | ListEnumpricing_unitFieldRefInput<$PrismaModel>
    notIn?: $Enums.pricing_unit[] | ListEnumpricing_unitFieldRefInput<$PrismaModel>
    not?: NestedEnumpricing_unitFilter<$PrismaModel> | $Enums.pricing_unit
  }

  export type NestedEnumproperty_approval_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.property_approval_status | Enumproperty_approval_statusFieldRefInput<$PrismaModel>
    in?: $Enums.property_approval_status[] | ListEnumproperty_approval_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.property_approval_status[] | ListEnumproperty_approval_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumproperty_approval_statusFilter<$PrismaModel> | $Enums.property_approval_status
  }

  export type NestedEnumproperty_availability_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.property_availability_status | Enumproperty_availability_statusFieldRefInput<$PrismaModel>
    in?: $Enums.property_availability_status[] | ListEnumproperty_availability_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.property_availability_status[] | ListEnumproperty_availability_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumproperty_availability_statusFilter<$PrismaModel> | $Enums.property_availability_status
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumpricing_unitWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.pricing_unit | Enumpricing_unitFieldRefInput<$PrismaModel>
    in?: $Enums.pricing_unit[] | ListEnumpricing_unitFieldRefInput<$PrismaModel>
    notIn?: $Enums.pricing_unit[] | ListEnumpricing_unitFieldRefInput<$PrismaModel>
    not?: NestedEnumpricing_unitWithAggregatesFilter<$PrismaModel> | $Enums.pricing_unit
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpricing_unitFilter<$PrismaModel>
    _max?: NestedEnumpricing_unitFilter<$PrismaModel>
  }

  export type NestedEnumproperty_approval_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.property_approval_status | Enumproperty_approval_statusFieldRefInput<$PrismaModel>
    in?: $Enums.property_approval_status[] | ListEnumproperty_approval_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.property_approval_status[] | ListEnumproperty_approval_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumproperty_approval_statusWithAggregatesFilter<$PrismaModel> | $Enums.property_approval_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumproperty_approval_statusFilter<$PrismaModel>
    _max?: NestedEnumproperty_approval_statusFilter<$PrismaModel>
  }

  export type NestedEnumproperty_availability_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.property_availability_status | Enumproperty_availability_statusFieldRefInput<$PrismaModel>
    in?: $Enums.property_availability_status[] | ListEnumproperty_availability_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.property_availability_status[] | ListEnumproperty_availability_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumproperty_availability_statusWithAggregatesFilter<$PrismaModel> | $Enums.property_availability_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumproperty_availability_statusFilter<$PrismaModel>
    _max?: NestedEnumproperty_availability_statusFilter<$PrismaModel>
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnummanager_application_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.manager_application_status | Enummanager_application_statusFieldRefInput<$PrismaModel>
    in?: $Enums.manager_application_status[] | ListEnummanager_application_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.manager_application_status[] | ListEnummanager_application_statusFieldRefInput<$PrismaModel>
    not?: NestedEnummanager_application_statusFilter<$PrismaModel> | $Enums.manager_application_status
  }

  export type NestedEnummanager_application_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.manager_application_status | Enummanager_application_statusFieldRefInput<$PrismaModel>
    in?: $Enums.manager_application_status[] | ListEnummanager_application_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.manager_application_status[] | ListEnummanager_application_statusFieldRefInput<$PrismaModel>
    not?: NestedEnummanager_application_statusWithAggregatesFilter<$PrismaModel> | $Enums.manager_application_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnummanager_application_statusFilter<$PrismaModel>
    _max?: NestedEnummanager_application_statusFilter<$PrismaModel>
  }

  export type NestedEnumrental_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.rental_status | Enumrental_statusFieldRefInput<$PrismaModel>
    in?: $Enums.rental_status[] | ListEnumrental_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.rental_status[] | ListEnumrental_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumrental_statusFilter<$PrismaModel> | $Enums.rental_status
  }

  export type NestedEnumrental_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.rental_status | Enumrental_statusFieldRefInput<$PrismaModel>
    in?: $Enums.rental_status[] | ListEnumrental_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.rental_status[] | ListEnumrental_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumrental_statusWithAggregatesFilter<$PrismaModel> | $Enums.rental_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumrental_statusFilter<$PrismaModel>
    _max?: NestedEnumrental_statusFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type propertiesCreateWithoutBookingsInput = {
    id?: string
    title: string
    description?: string | null
    address: string
    city: string
    state: string
    pricing_unit: $Enums.pricing_unit
    base_price: Decimal | DecimalJsLike | number | string
    approval_status?: $Enums.property_approval_status
    availability_status?: $Enums.property_availability_status
    approved_at?: Date | string | null
    rejection_reason?: string | null
    created_at?: Date | string
    users_properties_approved_byTousers?: usersCreateNestedOneWithoutProperties_properties_approved_byTousersInput
    categories?: categoriesCreateNestedOneWithoutPropertiesInput
    users_properties_manager_idTousers: usersCreateNestedOneWithoutProperties_properties_manager_idTousersInput
    property_images?: property_imagesCreateNestedManyWithoutPropertiesInput
    rentals?: rentalsCreateNestedManyWithoutPropertiesInput
  }

  export type propertiesUncheckedCreateWithoutBookingsInput = {
    id?: string
    title: string
    description?: string | null
    address: string
    city: string
    state: string
    pricing_unit: $Enums.pricing_unit
    base_price: Decimal | DecimalJsLike | number | string
    approval_status?: $Enums.property_approval_status
    availability_status?: $Enums.property_availability_status
    category_id?: string | null
    manager_id: string
    approved_by?: string | null
    approved_at?: Date | string | null
    rejection_reason?: string | null
    created_at?: Date | string
    property_images?: property_imagesUncheckedCreateNestedManyWithoutPropertiesInput
    rentals?: rentalsUncheckedCreateNestedManyWithoutPropertiesInput
  }

  export type propertiesCreateOrConnectWithoutBookingsInput = {
    where: propertiesWhereUniqueInput
    create: XOR<propertiesCreateWithoutBookingsInput, propertiesUncheckedCreateWithoutBookingsInput>
  }

  export type usersCreateWithoutBookingsInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    password_hash: string
    phone_number?: string | null
    is_suspended?: boolean
    created_at?: Date | string
    properties_properties_approved_byTousers?: propertiesCreateNestedManyWithoutUsers_properties_approved_byTousersInput
    properties_properties_manager_idTousers?: propertiesCreateNestedManyWithoutUsers_properties_manager_idTousersInput
    property_manager_applications_property_manager_applications_reviewed_byTousers?: property_manager_applicationsCreateNestedManyWithoutUsers_property_manager_applications_reviewed_byTousersInput
    property_manager_applications_property_manager_applications_user_idTousers?: property_manager_applicationsCreateNestedManyWithoutUsers_property_manager_applications_user_idTousersInput
    rentals?: rentalsCreateNestedManyWithoutUsersInput
    user_roles_user_roles_assigned_byTousers?: user_rolesCreateNestedManyWithoutUsers_user_roles_assigned_byTousersInput
    user_roles_user_roles_revoked_byTousers?: user_rolesCreateNestedManyWithoutUsers_user_roles_revoked_byTousersInput
    user_roles_user_roles_user_idTousers?: user_rolesCreateNestedManyWithoutUsers_user_roles_user_idTousersInput
  }

  export type usersUncheckedCreateWithoutBookingsInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    password_hash: string
    phone_number?: string | null
    is_suspended?: boolean
    created_at?: Date | string
    properties_properties_approved_byTousers?: propertiesUncheckedCreateNestedManyWithoutUsers_properties_approved_byTousersInput
    properties_properties_manager_idTousers?: propertiesUncheckedCreateNestedManyWithoutUsers_properties_manager_idTousersInput
    property_manager_applications_property_manager_applications_reviewed_byTousers?: property_manager_applicationsUncheckedCreateNestedManyWithoutUsers_property_manager_applications_reviewed_byTousersInput
    property_manager_applications_property_manager_applications_user_idTousers?: property_manager_applicationsUncheckedCreateNestedManyWithoutUsers_property_manager_applications_user_idTousersInput
    rentals?: rentalsUncheckedCreateNestedManyWithoutUsersInput
    user_roles_user_roles_assigned_byTousers?: user_rolesUncheckedCreateNestedManyWithoutUsers_user_roles_assigned_byTousersInput
    user_roles_user_roles_revoked_byTousers?: user_rolesUncheckedCreateNestedManyWithoutUsers_user_roles_revoked_byTousersInput
    user_roles_user_roles_user_idTousers?: user_rolesUncheckedCreateNestedManyWithoutUsers_user_roles_user_idTousersInput
  }

  export type usersCreateOrConnectWithoutBookingsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutBookingsInput, usersUncheckedCreateWithoutBookingsInput>
  }

  export type rentalsCreateWithoutBookingsInput = {
    id?: string
    lease_start: Date | string
    lease_end: Date | string
    pricing_unit: $Enums.pricing_unit
    agreed_price: Decimal | DecimalJsLike | number | string
    status?: $Enums.rental_status
    created_at?: Date | string
    payments?: paymentsCreateNestedManyWithoutRentalsInput
    properties: propertiesCreateNestedOneWithoutRentalsInput
    users: usersCreateNestedOneWithoutRentalsInput
  }

  export type rentalsUncheckedCreateWithoutBookingsInput = {
    id?: string
    user_id: string
    property_id: string
    lease_start: Date | string
    lease_end: Date | string
    pricing_unit: $Enums.pricing_unit
    agreed_price: Decimal | DecimalJsLike | number | string
    status?: $Enums.rental_status
    created_at?: Date | string
    payments?: paymentsUncheckedCreateNestedManyWithoutRentalsInput
  }

  export type rentalsCreateOrConnectWithoutBookingsInput = {
    where: rentalsWhereUniqueInput
    create: XOR<rentalsCreateWithoutBookingsInput, rentalsUncheckedCreateWithoutBookingsInput>
  }

  export type propertiesUpsertWithoutBookingsInput = {
    update: XOR<propertiesUpdateWithoutBookingsInput, propertiesUncheckedUpdateWithoutBookingsInput>
    create: XOR<propertiesCreateWithoutBookingsInput, propertiesUncheckedCreateWithoutBookingsInput>
    where?: propertiesWhereInput
  }

  export type propertiesUpdateToOneWithWhereWithoutBookingsInput = {
    where?: propertiesWhereInput
    data: XOR<propertiesUpdateWithoutBookingsInput, propertiesUncheckedUpdateWithoutBookingsInput>
  }

  export type propertiesUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pricing_unit?: Enumpricing_unitFieldUpdateOperationsInput | $Enums.pricing_unit
    base_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    approval_status?: Enumproperty_approval_statusFieldUpdateOperationsInput | $Enums.property_approval_status
    availability_status?: Enumproperty_availability_statusFieldUpdateOperationsInput | $Enums.property_availability_status
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejection_reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users_properties_approved_byTousers?: usersUpdateOneWithoutProperties_properties_approved_byTousersNestedInput
    categories?: categoriesUpdateOneWithoutPropertiesNestedInput
    users_properties_manager_idTousers?: usersUpdateOneRequiredWithoutProperties_properties_manager_idTousersNestedInput
    property_images?: property_imagesUpdateManyWithoutPropertiesNestedInput
    rentals?: rentalsUpdateManyWithoutPropertiesNestedInput
  }

  export type propertiesUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pricing_unit?: Enumpricing_unitFieldUpdateOperationsInput | $Enums.pricing_unit
    base_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    approval_status?: Enumproperty_approval_statusFieldUpdateOperationsInput | $Enums.property_approval_status
    availability_status?: Enumproperty_availability_statusFieldUpdateOperationsInput | $Enums.property_availability_status
    category_id?: NullableStringFieldUpdateOperationsInput | string | null
    manager_id?: StringFieldUpdateOperationsInput | string
    approved_by?: NullableStringFieldUpdateOperationsInput | string | null
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejection_reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    property_images?: property_imagesUncheckedUpdateManyWithoutPropertiesNestedInput
    rentals?: rentalsUncheckedUpdateManyWithoutPropertiesNestedInput
  }

  export type usersUpsertWithoutBookingsInput = {
    update: XOR<usersUpdateWithoutBookingsInput, usersUncheckedUpdateWithoutBookingsInput>
    create: XOR<usersCreateWithoutBookingsInput, usersUncheckedCreateWithoutBookingsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutBookingsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutBookingsInput, usersUncheckedUpdateWithoutBookingsInput>
  }

  export type usersUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    is_suspended?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    properties_properties_approved_byTousers?: propertiesUpdateManyWithoutUsers_properties_approved_byTousersNestedInput
    properties_properties_manager_idTousers?: propertiesUpdateManyWithoutUsers_properties_manager_idTousersNestedInput
    property_manager_applications_property_manager_applications_reviewed_byTousers?: property_manager_applicationsUpdateManyWithoutUsers_property_manager_applications_reviewed_byTousersNestedInput
    property_manager_applications_property_manager_applications_user_idTousers?: property_manager_applicationsUpdateManyWithoutUsers_property_manager_applications_user_idTousersNestedInput
    rentals?: rentalsUpdateManyWithoutUsersNestedInput
    user_roles_user_roles_assigned_byTousers?: user_rolesUpdateManyWithoutUsers_user_roles_assigned_byTousersNestedInput
    user_roles_user_roles_revoked_byTousers?: user_rolesUpdateManyWithoutUsers_user_roles_revoked_byTousersNestedInput
    user_roles_user_roles_user_idTousers?: user_rolesUpdateManyWithoutUsers_user_roles_user_idTousersNestedInput
  }

  export type usersUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    is_suspended?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    properties_properties_approved_byTousers?: propertiesUncheckedUpdateManyWithoutUsers_properties_approved_byTousersNestedInput
    properties_properties_manager_idTousers?: propertiesUncheckedUpdateManyWithoutUsers_properties_manager_idTousersNestedInput
    property_manager_applications_property_manager_applications_reviewed_byTousers?: property_manager_applicationsUncheckedUpdateManyWithoutUsers_property_manager_applications_reviewed_byTousersNestedInput
    property_manager_applications_property_manager_applications_user_idTousers?: property_manager_applicationsUncheckedUpdateManyWithoutUsers_property_manager_applications_user_idTousersNestedInput
    rentals?: rentalsUncheckedUpdateManyWithoutUsersNestedInput
    user_roles_user_roles_assigned_byTousers?: user_rolesUncheckedUpdateManyWithoutUsers_user_roles_assigned_byTousersNestedInput
    user_roles_user_roles_revoked_byTousers?: user_rolesUncheckedUpdateManyWithoutUsers_user_roles_revoked_byTousersNestedInput
    user_roles_user_roles_user_idTousers?: user_rolesUncheckedUpdateManyWithoutUsers_user_roles_user_idTousersNestedInput
  }

  export type rentalsUpsertWithoutBookingsInput = {
    update: XOR<rentalsUpdateWithoutBookingsInput, rentalsUncheckedUpdateWithoutBookingsInput>
    create: XOR<rentalsCreateWithoutBookingsInput, rentalsUncheckedCreateWithoutBookingsInput>
    where?: rentalsWhereInput
  }

  export type rentalsUpdateToOneWithWhereWithoutBookingsInput = {
    where?: rentalsWhereInput
    data: XOR<rentalsUpdateWithoutBookingsInput, rentalsUncheckedUpdateWithoutBookingsInput>
  }

  export type rentalsUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    lease_start?: DateTimeFieldUpdateOperationsInput | Date | string
    lease_end?: DateTimeFieldUpdateOperationsInput | Date | string
    pricing_unit?: Enumpricing_unitFieldUpdateOperationsInput | $Enums.pricing_unit
    agreed_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: Enumrental_statusFieldUpdateOperationsInput | $Enums.rental_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: paymentsUpdateManyWithoutRentalsNestedInput
    properties?: propertiesUpdateOneRequiredWithoutRentalsNestedInput
    users?: usersUpdateOneRequiredWithoutRentalsNestedInput
  }

  export type rentalsUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    property_id?: StringFieldUpdateOperationsInput | string
    lease_start?: DateTimeFieldUpdateOperationsInput | Date | string
    lease_end?: DateTimeFieldUpdateOperationsInput | Date | string
    pricing_unit?: Enumpricing_unitFieldUpdateOperationsInput | $Enums.pricing_unit
    agreed_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: Enumrental_statusFieldUpdateOperationsInput | $Enums.rental_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: paymentsUncheckedUpdateManyWithoutRentalsNestedInput
  }

  export type propertiesCreateWithoutCategoriesInput = {
    id?: string
    title: string
    description?: string | null
    address: string
    city: string
    state: string
    pricing_unit: $Enums.pricing_unit
    base_price: Decimal | DecimalJsLike | number | string
    approval_status?: $Enums.property_approval_status
    availability_status?: $Enums.property_availability_status
    approved_at?: Date | string | null
    rejection_reason?: string | null
    created_at?: Date | string
    bookings?: bookingsCreateNestedManyWithoutPropertiesInput
    users_properties_approved_byTousers?: usersCreateNestedOneWithoutProperties_properties_approved_byTousersInput
    users_properties_manager_idTousers: usersCreateNestedOneWithoutProperties_properties_manager_idTousersInput
    property_images?: property_imagesCreateNestedManyWithoutPropertiesInput
    rentals?: rentalsCreateNestedManyWithoutPropertiesInput
  }

  export type propertiesUncheckedCreateWithoutCategoriesInput = {
    id?: string
    title: string
    description?: string | null
    address: string
    city: string
    state: string
    pricing_unit: $Enums.pricing_unit
    base_price: Decimal | DecimalJsLike | number | string
    approval_status?: $Enums.property_approval_status
    availability_status?: $Enums.property_availability_status
    manager_id: string
    approved_by?: string | null
    approved_at?: Date | string | null
    rejection_reason?: string | null
    created_at?: Date | string
    bookings?: bookingsUncheckedCreateNestedManyWithoutPropertiesInput
    property_images?: property_imagesUncheckedCreateNestedManyWithoutPropertiesInput
    rentals?: rentalsUncheckedCreateNestedManyWithoutPropertiesInput
  }

  export type propertiesCreateOrConnectWithoutCategoriesInput = {
    where: propertiesWhereUniqueInput
    create: XOR<propertiesCreateWithoutCategoriesInput, propertiesUncheckedCreateWithoutCategoriesInput>
  }

  export type propertiesCreateManyCategoriesInputEnvelope = {
    data: propertiesCreateManyCategoriesInput | propertiesCreateManyCategoriesInput[]
    skipDuplicates?: boolean
  }

  export type propertiesUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: propertiesWhereUniqueInput
    update: XOR<propertiesUpdateWithoutCategoriesInput, propertiesUncheckedUpdateWithoutCategoriesInput>
    create: XOR<propertiesCreateWithoutCategoriesInput, propertiesUncheckedCreateWithoutCategoriesInput>
  }

  export type propertiesUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: propertiesWhereUniqueInput
    data: XOR<propertiesUpdateWithoutCategoriesInput, propertiesUncheckedUpdateWithoutCategoriesInput>
  }

  export type propertiesUpdateManyWithWhereWithoutCategoriesInput = {
    where: propertiesScalarWhereInput
    data: XOR<propertiesUpdateManyMutationInput, propertiesUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type propertiesScalarWhereInput = {
    AND?: propertiesScalarWhereInput | propertiesScalarWhereInput[]
    OR?: propertiesScalarWhereInput[]
    NOT?: propertiesScalarWhereInput | propertiesScalarWhereInput[]
    id?: UuidFilter<"properties"> | string
    title?: StringFilter<"properties"> | string
    description?: StringNullableFilter<"properties"> | string | null
    address?: StringFilter<"properties"> | string
    city?: StringFilter<"properties"> | string
    state?: StringFilter<"properties"> | string
    pricing_unit?: Enumpricing_unitFilter<"properties"> | $Enums.pricing_unit
    base_price?: DecimalFilter<"properties"> | Decimal | DecimalJsLike | number | string
    approval_status?: Enumproperty_approval_statusFilter<"properties"> | $Enums.property_approval_status
    availability_status?: Enumproperty_availability_statusFilter<"properties"> | $Enums.property_availability_status
    category_id?: UuidNullableFilter<"properties"> | string | null
    manager_id?: UuidFilter<"properties"> | string
    approved_by?: UuidNullableFilter<"properties"> | string | null
    approved_at?: DateTimeNullableFilter<"properties"> | Date | string | null
    rejection_reason?: StringNullableFilter<"properties"> | string | null
    created_at?: DateTimeFilter<"properties"> | Date | string
  }

  export type rentalsCreateWithoutPaymentsInput = {
    id?: string
    lease_start: Date | string
    lease_end: Date | string
    pricing_unit: $Enums.pricing_unit
    agreed_price: Decimal | DecimalJsLike | number | string
    status?: $Enums.rental_status
    created_at?: Date | string
    bookings: bookingsCreateNestedOneWithoutRentalsInput
    properties: propertiesCreateNestedOneWithoutRentalsInput
    users: usersCreateNestedOneWithoutRentalsInput
  }

  export type rentalsUncheckedCreateWithoutPaymentsInput = {
    id?: string
    booking_id: string
    user_id: string
    property_id: string
    lease_start: Date | string
    lease_end: Date | string
    pricing_unit: $Enums.pricing_unit
    agreed_price: Decimal | DecimalJsLike | number | string
    status?: $Enums.rental_status
    created_at?: Date | string
  }

  export type rentalsCreateOrConnectWithoutPaymentsInput = {
    where: rentalsWhereUniqueInput
    create: XOR<rentalsCreateWithoutPaymentsInput, rentalsUncheckedCreateWithoutPaymentsInput>
  }

  export type rentalsUpsertWithoutPaymentsInput = {
    update: XOR<rentalsUpdateWithoutPaymentsInput, rentalsUncheckedUpdateWithoutPaymentsInput>
    create: XOR<rentalsCreateWithoutPaymentsInput, rentalsUncheckedCreateWithoutPaymentsInput>
    where?: rentalsWhereInput
  }

  export type rentalsUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: rentalsWhereInput
    data: XOR<rentalsUpdateWithoutPaymentsInput, rentalsUncheckedUpdateWithoutPaymentsInput>
  }

  export type rentalsUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    lease_start?: DateTimeFieldUpdateOperationsInput | Date | string
    lease_end?: DateTimeFieldUpdateOperationsInput | Date | string
    pricing_unit?: Enumpricing_unitFieldUpdateOperationsInput | $Enums.pricing_unit
    agreed_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: Enumrental_statusFieldUpdateOperationsInput | $Enums.rental_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: bookingsUpdateOneRequiredWithoutRentalsNestedInput
    properties?: propertiesUpdateOneRequiredWithoutRentalsNestedInput
    users?: usersUpdateOneRequiredWithoutRentalsNestedInput
  }

  export type rentalsUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    booking_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    property_id?: StringFieldUpdateOperationsInput | string
    lease_start?: DateTimeFieldUpdateOperationsInput | Date | string
    lease_end?: DateTimeFieldUpdateOperationsInput | Date | string
    pricing_unit?: Enumpricing_unitFieldUpdateOperationsInput | $Enums.pricing_unit
    agreed_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: Enumrental_statusFieldUpdateOperationsInput | $Enums.rental_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bookingsCreateWithoutPropertiesInput = {
    id?: string
    start_date: Date | string
    end_date: Date | string
    proposed_amount?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.booking_status
    cancelled_at?: Date | string | null
    cancellation_reason?: string | null
    created_at?: Date | string
    users: usersCreateNestedOneWithoutBookingsInput
    rentals?: rentalsCreateNestedOneWithoutBookingsInput
  }

  export type bookingsUncheckedCreateWithoutPropertiesInput = {
    id?: string
    user_id: string
    start_date: Date | string
    end_date: Date | string
    proposed_amount?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.booking_status
    cancelled_at?: Date | string | null
    cancellation_reason?: string | null
    created_at?: Date | string
    rentals?: rentalsUncheckedCreateNestedOneWithoutBookingsInput
  }

  export type bookingsCreateOrConnectWithoutPropertiesInput = {
    where: bookingsWhereUniqueInput
    create: XOR<bookingsCreateWithoutPropertiesInput, bookingsUncheckedCreateWithoutPropertiesInput>
  }

  export type bookingsCreateManyPropertiesInputEnvelope = {
    data: bookingsCreateManyPropertiesInput | bookingsCreateManyPropertiesInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutProperties_properties_approved_byTousersInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    password_hash: string
    phone_number?: string | null
    is_suspended?: boolean
    created_at?: Date | string
    bookings?: bookingsCreateNestedManyWithoutUsersInput
    properties_properties_manager_idTousers?: propertiesCreateNestedManyWithoutUsers_properties_manager_idTousersInput
    property_manager_applications_property_manager_applications_reviewed_byTousers?: property_manager_applicationsCreateNestedManyWithoutUsers_property_manager_applications_reviewed_byTousersInput
    property_manager_applications_property_manager_applications_user_idTousers?: property_manager_applicationsCreateNestedManyWithoutUsers_property_manager_applications_user_idTousersInput
    rentals?: rentalsCreateNestedManyWithoutUsersInput
    user_roles_user_roles_assigned_byTousers?: user_rolesCreateNestedManyWithoutUsers_user_roles_assigned_byTousersInput
    user_roles_user_roles_revoked_byTousers?: user_rolesCreateNestedManyWithoutUsers_user_roles_revoked_byTousersInput
    user_roles_user_roles_user_idTousers?: user_rolesCreateNestedManyWithoutUsers_user_roles_user_idTousersInput
  }

  export type usersUncheckedCreateWithoutProperties_properties_approved_byTousersInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    password_hash: string
    phone_number?: string | null
    is_suspended?: boolean
    created_at?: Date | string
    bookings?: bookingsUncheckedCreateNestedManyWithoutUsersInput
    properties_properties_manager_idTousers?: propertiesUncheckedCreateNestedManyWithoutUsers_properties_manager_idTousersInput
    property_manager_applications_property_manager_applications_reviewed_byTousers?: property_manager_applicationsUncheckedCreateNestedManyWithoutUsers_property_manager_applications_reviewed_byTousersInput
    property_manager_applications_property_manager_applications_user_idTousers?: property_manager_applicationsUncheckedCreateNestedManyWithoutUsers_property_manager_applications_user_idTousersInput
    rentals?: rentalsUncheckedCreateNestedManyWithoutUsersInput
    user_roles_user_roles_assigned_byTousers?: user_rolesUncheckedCreateNestedManyWithoutUsers_user_roles_assigned_byTousersInput
    user_roles_user_roles_revoked_byTousers?: user_rolesUncheckedCreateNestedManyWithoutUsers_user_roles_revoked_byTousersInput
    user_roles_user_roles_user_idTousers?: user_rolesUncheckedCreateNestedManyWithoutUsers_user_roles_user_idTousersInput
  }

  export type usersCreateOrConnectWithoutProperties_properties_approved_byTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutProperties_properties_approved_byTousersInput, usersUncheckedCreateWithoutProperties_properties_approved_byTousersInput>
  }

  export type categoriesCreateWithoutPropertiesInput = {
    id?: string
    name: string
    description?: string | null
  }

  export type categoriesUncheckedCreateWithoutPropertiesInput = {
    id?: string
    name: string
    description?: string | null
  }

  export type categoriesCreateOrConnectWithoutPropertiesInput = {
    where: categoriesWhereUniqueInput
    create: XOR<categoriesCreateWithoutPropertiesInput, categoriesUncheckedCreateWithoutPropertiesInput>
  }

  export type usersCreateWithoutProperties_properties_manager_idTousersInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    password_hash: string
    phone_number?: string | null
    is_suspended?: boolean
    created_at?: Date | string
    bookings?: bookingsCreateNestedManyWithoutUsersInput
    properties_properties_approved_byTousers?: propertiesCreateNestedManyWithoutUsers_properties_approved_byTousersInput
    property_manager_applications_property_manager_applications_reviewed_byTousers?: property_manager_applicationsCreateNestedManyWithoutUsers_property_manager_applications_reviewed_byTousersInput
    property_manager_applications_property_manager_applications_user_idTousers?: property_manager_applicationsCreateNestedManyWithoutUsers_property_manager_applications_user_idTousersInput
    rentals?: rentalsCreateNestedManyWithoutUsersInput
    user_roles_user_roles_assigned_byTousers?: user_rolesCreateNestedManyWithoutUsers_user_roles_assigned_byTousersInput
    user_roles_user_roles_revoked_byTousers?: user_rolesCreateNestedManyWithoutUsers_user_roles_revoked_byTousersInput
    user_roles_user_roles_user_idTousers?: user_rolesCreateNestedManyWithoutUsers_user_roles_user_idTousersInput
  }

  export type usersUncheckedCreateWithoutProperties_properties_manager_idTousersInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    password_hash: string
    phone_number?: string | null
    is_suspended?: boolean
    created_at?: Date | string
    bookings?: bookingsUncheckedCreateNestedManyWithoutUsersInput
    properties_properties_approved_byTousers?: propertiesUncheckedCreateNestedManyWithoutUsers_properties_approved_byTousersInput
    property_manager_applications_property_manager_applications_reviewed_byTousers?: property_manager_applicationsUncheckedCreateNestedManyWithoutUsers_property_manager_applications_reviewed_byTousersInput
    property_manager_applications_property_manager_applications_user_idTousers?: property_manager_applicationsUncheckedCreateNestedManyWithoutUsers_property_manager_applications_user_idTousersInput
    rentals?: rentalsUncheckedCreateNestedManyWithoutUsersInput
    user_roles_user_roles_assigned_byTousers?: user_rolesUncheckedCreateNestedManyWithoutUsers_user_roles_assigned_byTousersInput
    user_roles_user_roles_revoked_byTousers?: user_rolesUncheckedCreateNestedManyWithoutUsers_user_roles_revoked_byTousersInput
    user_roles_user_roles_user_idTousers?: user_rolesUncheckedCreateNestedManyWithoutUsers_user_roles_user_idTousersInput
  }

  export type usersCreateOrConnectWithoutProperties_properties_manager_idTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutProperties_properties_manager_idTousersInput, usersUncheckedCreateWithoutProperties_properties_manager_idTousersInput>
  }

  export type property_imagesCreateWithoutPropertiesInput = {
    id?: string
    image_url: string
    created_at?: Date | string
  }

  export type property_imagesUncheckedCreateWithoutPropertiesInput = {
    id?: string
    image_url: string
    created_at?: Date | string
  }

  export type property_imagesCreateOrConnectWithoutPropertiesInput = {
    where: property_imagesWhereUniqueInput
    create: XOR<property_imagesCreateWithoutPropertiesInput, property_imagesUncheckedCreateWithoutPropertiesInput>
  }

  export type property_imagesCreateManyPropertiesInputEnvelope = {
    data: property_imagesCreateManyPropertiesInput | property_imagesCreateManyPropertiesInput[]
    skipDuplicates?: boolean
  }

  export type rentalsCreateWithoutPropertiesInput = {
    id?: string
    lease_start: Date | string
    lease_end: Date | string
    pricing_unit: $Enums.pricing_unit
    agreed_price: Decimal | DecimalJsLike | number | string
    status?: $Enums.rental_status
    created_at?: Date | string
    payments?: paymentsCreateNestedManyWithoutRentalsInput
    bookings: bookingsCreateNestedOneWithoutRentalsInput
    users: usersCreateNestedOneWithoutRentalsInput
  }

  export type rentalsUncheckedCreateWithoutPropertiesInput = {
    id?: string
    booking_id: string
    user_id: string
    lease_start: Date | string
    lease_end: Date | string
    pricing_unit: $Enums.pricing_unit
    agreed_price: Decimal | DecimalJsLike | number | string
    status?: $Enums.rental_status
    created_at?: Date | string
    payments?: paymentsUncheckedCreateNestedManyWithoutRentalsInput
  }

  export type rentalsCreateOrConnectWithoutPropertiesInput = {
    where: rentalsWhereUniqueInput
    create: XOR<rentalsCreateWithoutPropertiesInput, rentalsUncheckedCreateWithoutPropertiesInput>
  }

  export type rentalsCreateManyPropertiesInputEnvelope = {
    data: rentalsCreateManyPropertiesInput | rentalsCreateManyPropertiesInput[]
    skipDuplicates?: boolean
  }

  export type bookingsUpsertWithWhereUniqueWithoutPropertiesInput = {
    where: bookingsWhereUniqueInput
    update: XOR<bookingsUpdateWithoutPropertiesInput, bookingsUncheckedUpdateWithoutPropertiesInput>
    create: XOR<bookingsCreateWithoutPropertiesInput, bookingsUncheckedCreateWithoutPropertiesInput>
  }

  export type bookingsUpdateWithWhereUniqueWithoutPropertiesInput = {
    where: bookingsWhereUniqueInput
    data: XOR<bookingsUpdateWithoutPropertiesInput, bookingsUncheckedUpdateWithoutPropertiesInput>
  }

  export type bookingsUpdateManyWithWhereWithoutPropertiesInput = {
    where: bookingsScalarWhereInput
    data: XOR<bookingsUpdateManyMutationInput, bookingsUncheckedUpdateManyWithoutPropertiesInput>
  }

  export type bookingsScalarWhereInput = {
    AND?: bookingsScalarWhereInput | bookingsScalarWhereInput[]
    OR?: bookingsScalarWhereInput[]
    NOT?: bookingsScalarWhereInput | bookingsScalarWhereInput[]
    id?: UuidFilter<"bookings"> | string
    user_id?: UuidFilter<"bookings"> | string
    property_id?: UuidFilter<"bookings"> | string
    start_date?: DateTimeFilter<"bookings"> | Date | string
    end_date?: DateTimeFilter<"bookings"> | Date | string
    proposed_amount?: DecimalNullableFilter<"bookings"> | Decimal | DecimalJsLike | number | string | null
    status?: Enumbooking_statusFilter<"bookings"> | $Enums.booking_status
    cancelled_at?: DateTimeNullableFilter<"bookings"> | Date | string | null
    cancellation_reason?: StringNullableFilter<"bookings"> | string | null
    created_at?: DateTimeFilter<"bookings"> | Date | string
  }

  export type usersUpsertWithoutProperties_properties_approved_byTousersInput = {
    update: XOR<usersUpdateWithoutProperties_properties_approved_byTousersInput, usersUncheckedUpdateWithoutProperties_properties_approved_byTousersInput>
    create: XOR<usersCreateWithoutProperties_properties_approved_byTousersInput, usersUncheckedCreateWithoutProperties_properties_approved_byTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutProperties_properties_approved_byTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutProperties_properties_approved_byTousersInput, usersUncheckedUpdateWithoutProperties_properties_approved_byTousersInput>
  }

  export type usersUpdateWithoutProperties_properties_approved_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    is_suspended?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: bookingsUpdateManyWithoutUsersNestedInput
    properties_properties_manager_idTousers?: propertiesUpdateManyWithoutUsers_properties_manager_idTousersNestedInput
    property_manager_applications_property_manager_applications_reviewed_byTousers?: property_manager_applicationsUpdateManyWithoutUsers_property_manager_applications_reviewed_byTousersNestedInput
    property_manager_applications_property_manager_applications_user_idTousers?: property_manager_applicationsUpdateManyWithoutUsers_property_manager_applications_user_idTousersNestedInput
    rentals?: rentalsUpdateManyWithoutUsersNestedInput
    user_roles_user_roles_assigned_byTousers?: user_rolesUpdateManyWithoutUsers_user_roles_assigned_byTousersNestedInput
    user_roles_user_roles_revoked_byTousers?: user_rolesUpdateManyWithoutUsers_user_roles_revoked_byTousersNestedInput
    user_roles_user_roles_user_idTousers?: user_rolesUpdateManyWithoutUsers_user_roles_user_idTousersNestedInput
  }

  export type usersUncheckedUpdateWithoutProperties_properties_approved_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    is_suspended?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: bookingsUncheckedUpdateManyWithoutUsersNestedInput
    properties_properties_manager_idTousers?: propertiesUncheckedUpdateManyWithoutUsers_properties_manager_idTousersNestedInput
    property_manager_applications_property_manager_applications_reviewed_byTousers?: property_manager_applicationsUncheckedUpdateManyWithoutUsers_property_manager_applications_reviewed_byTousersNestedInput
    property_manager_applications_property_manager_applications_user_idTousers?: property_manager_applicationsUncheckedUpdateManyWithoutUsers_property_manager_applications_user_idTousersNestedInput
    rentals?: rentalsUncheckedUpdateManyWithoutUsersNestedInput
    user_roles_user_roles_assigned_byTousers?: user_rolesUncheckedUpdateManyWithoutUsers_user_roles_assigned_byTousersNestedInput
    user_roles_user_roles_revoked_byTousers?: user_rolesUncheckedUpdateManyWithoutUsers_user_roles_revoked_byTousersNestedInput
    user_roles_user_roles_user_idTousers?: user_rolesUncheckedUpdateManyWithoutUsers_user_roles_user_idTousersNestedInput
  }

  export type categoriesUpsertWithoutPropertiesInput = {
    update: XOR<categoriesUpdateWithoutPropertiesInput, categoriesUncheckedUpdateWithoutPropertiesInput>
    create: XOR<categoriesCreateWithoutPropertiesInput, categoriesUncheckedCreateWithoutPropertiesInput>
    where?: categoriesWhereInput
  }

  export type categoriesUpdateToOneWithWhereWithoutPropertiesInput = {
    where?: categoriesWhereInput
    data: XOR<categoriesUpdateWithoutPropertiesInput, categoriesUncheckedUpdateWithoutPropertiesInput>
  }

  export type categoriesUpdateWithoutPropertiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type categoriesUncheckedUpdateWithoutPropertiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersUpsertWithoutProperties_properties_manager_idTousersInput = {
    update: XOR<usersUpdateWithoutProperties_properties_manager_idTousersInput, usersUncheckedUpdateWithoutProperties_properties_manager_idTousersInput>
    create: XOR<usersCreateWithoutProperties_properties_manager_idTousersInput, usersUncheckedCreateWithoutProperties_properties_manager_idTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutProperties_properties_manager_idTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutProperties_properties_manager_idTousersInput, usersUncheckedUpdateWithoutProperties_properties_manager_idTousersInput>
  }

  export type usersUpdateWithoutProperties_properties_manager_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    is_suspended?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: bookingsUpdateManyWithoutUsersNestedInput
    properties_properties_approved_byTousers?: propertiesUpdateManyWithoutUsers_properties_approved_byTousersNestedInput
    property_manager_applications_property_manager_applications_reviewed_byTousers?: property_manager_applicationsUpdateManyWithoutUsers_property_manager_applications_reviewed_byTousersNestedInput
    property_manager_applications_property_manager_applications_user_idTousers?: property_manager_applicationsUpdateManyWithoutUsers_property_manager_applications_user_idTousersNestedInput
    rentals?: rentalsUpdateManyWithoutUsersNestedInput
    user_roles_user_roles_assigned_byTousers?: user_rolesUpdateManyWithoutUsers_user_roles_assigned_byTousersNestedInput
    user_roles_user_roles_revoked_byTousers?: user_rolesUpdateManyWithoutUsers_user_roles_revoked_byTousersNestedInput
    user_roles_user_roles_user_idTousers?: user_rolesUpdateManyWithoutUsers_user_roles_user_idTousersNestedInput
  }

  export type usersUncheckedUpdateWithoutProperties_properties_manager_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    is_suspended?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: bookingsUncheckedUpdateManyWithoutUsersNestedInput
    properties_properties_approved_byTousers?: propertiesUncheckedUpdateManyWithoutUsers_properties_approved_byTousersNestedInput
    property_manager_applications_property_manager_applications_reviewed_byTousers?: property_manager_applicationsUncheckedUpdateManyWithoutUsers_property_manager_applications_reviewed_byTousersNestedInput
    property_manager_applications_property_manager_applications_user_idTousers?: property_manager_applicationsUncheckedUpdateManyWithoutUsers_property_manager_applications_user_idTousersNestedInput
    rentals?: rentalsUncheckedUpdateManyWithoutUsersNestedInput
    user_roles_user_roles_assigned_byTousers?: user_rolesUncheckedUpdateManyWithoutUsers_user_roles_assigned_byTousersNestedInput
    user_roles_user_roles_revoked_byTousers?: user_rolesUncheckedUpdateManyWithoutUsers_user_roles_revoked_byTousersNestedInput
    user_roles_user_roles_user_idTousers?: user_rolesUncheckedUpdateManyWithoutUsers_user_roles_user_idTousersNestedInput
  }

  export type property_imagesUpsertWithWhereUniqueWithoutPropertiesInput = {
    where: property_imagesWhereUniqueInput
    update: XOR<property_imagesUpdateWithoutPropertiesInput, property_imagesUncheckedUpdateWithoutPropertiesInput>
    create: XOR<property_imagesCreateWithoutPropertiesInput, property_imagesUncheckedCreateWithoutPropertiesInput>
  }

  export type property_imagesUpdateWithWhereUniqueWithoutPropertiesInput = {
    where: property_imagesWhereUniqueInput
    data: XOR<property_imagesUpdateWithoutPropertiesInput, property_imagesUncheckedUpdateWithoutPropertiesInput>
  }

  export type property_imagesUpdateManyWithWhereWithoutPropertiesInput = {
    where: property_imagesScalarWhereInput
    data: XOR<property_imagesUpdateManyMutationInput, property_imagesUncheckedUpdateManyWithoutPropertiesInput>
  }

  export type property_imagesScalarWhereInput = {
    AND?: property_imagesScalarWhereInput | property_imagesScalarWhereInput[]
    OR?: property_imagesScalarWhereInput[]
    NOT?: property_imagesScalarWhereInput | property_imagesScalarWhereInput[]
    id?: UuidFilter<"property_images"> | string
    property_id?: UuidFilter<"property_images"> | string
    image_url?: StringFilter<"property_images"> | string
    created_at?: DateTimeFilter<"property_images"> | Date | string
  }

  export type rentalsUpsertWithWhereUniqueWithoutPropertiesInput = {
    where: rentalsWhereUniqueInput
    update: XOR<rentalsUpdateWithoutPropertiesInput, rentalsUncheckedUpdateWithoutPropertiesInput>
    create: XOR<rentalsCreateWithoutPropertiesInput, rentalsUncheckedCreateWithoutPropertiesInput>
  }

  export type rentalsUpdateWithWhereUniqueWithoutPropertiesInput = {
    where: rentalsWhereUniqueInput
    data: XOR<rentalsUpdateWithoutPropertiesInput, rentalsUncheckedUpdateWithoutPropertiesInput>
  }

  export type rentalsUpdateManyWithWhereWithoutPropertiesInput = {
    where: rentalsScalarWhereInput
    data: XOR<rentalsUpdateManyMutationInput, rentalsUncheckedUpdateManyWithoutPropertiesInput>
  }

  export type rentalsScalarWhereInput = {
    AND?: rentalsScalarWhereInput | rentalsScalarWhereInput[]
    OR?: rentalsScalarWhereInput[]
    NOT?: rentalsScalarWhereInput | rentalsScalarWhereInput[]
    id?: UuidFilter<"rentals"> | string
    booking_id?: UuidFilter<"rentals"> | string
    user_id?: UuidFilter<"rentals"> | string
    property_id?: UuidFilter<"rentals"> | string
    lease_start?: DateTimeFilter<"rentals"> | Date | string
    lease_end?: DateTimeFilter<"rentals"> | Date | string
    pricing_unit?: Enumpricing_unitFilter<"rentals"> | $Enums.pricing_unit
    agreed_price?: DecimalFilter<"rentals"> | Decimal | DecimalJsLike | number | string
    status?: Enumrental_statusFilter<"rentals"> | $Enums.rental_status
    created_at?: DateTimeFilter<"rentals"> | Date | string
  }

  export type propertiesCreateWithoutProperty_imagesInput = {
    id?: string
    title: string
    description?: string | null
    address: string
    city: string
    state: string
    pricing_unit: $Enums.pricing_unit
    base_price: Decimal | DecimalJsLike | number | string
    approval_status?: $Enums.property_approval_status
    availability_status?: $Enums.property_availability_status
    approved_at?: Date | string | null
    rejection_reason?: string | null
    created_at?: Date | string
    bookings?: bookingsCreateNestedManyWithoutPropertiesInput
    users_properties_approved_byTousers?: usersCreateNestedOneWithoutProperties_properties_approved_byTousersInput
    categories?: categoriesCreateNestedOneWithoutPropertiesInput
    users_properties_manager_idTousers: usersCreateNestedOneWithoutProperties_properties_manager_idTousersInput
    rentals?: rentalsCreateNestedManyWithoutPropertiesInput
  }

  export type propertiesUncheckedCreateWithoutProperty_imagesInput = {
    id?: string
    title: string
    description?: string | null
    address: string
    city: string
    state: string
    pricing_unit: $Enums.pricing_unit
    base_price: Decimal | DecimalJsLike | number | string
    approval_status?: $Enums.property_approval_status
    availability_status?: $Enums.property_availability_status
    category_id?: string | null
    manager_id: string
    approved_by?: string | null
    approved_at?: Date | string | null
    rejection_reason?: string | null
    created_at?: Date | string
    bookings?: bookingsUncheckedCreateNestedManyWithoutPropertiesInput
    rentals?: rentalsUncheckedCreateNestedManyWithoutPropertiesInput
  }

  export type propertiesCreateOrConnectWithoutProperty_imagesInput = {
    where: propertiesWhereUniqueInput
    create: XOR<propertiesCreateWithoutProperty_imagesInput, propertiesUncheckedCreateWithoutProperty_imagesInput>
  }

  export type propertiesUpsertWithoutProperty_imagesInput = {
    update: XOR<propertiesUpdateWithoutProperty_imagesInput, propertiesUncheckedUpdateWithoutProperty_imagesInput>
    create: XOR<propertiesCreateWithoutProperty_imagesInput, propertiesUncheckedCreateWithoutProperty_imagesInput>
    where?: propertiesWhereInput
  }

  export type propertiesUpdateToOneWithWhereWithoutProperty_imagesInput = {
    where?: propertiesWhereInput
    data: XOR<propertiesUpdateWithoutProperty_imagesInput, propertiesUncheckedUpdateWithoutProperty_imagesInput>
  }

  export type propertiesUpdateWithoutProperty_imagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pricing_unit?: Enumpricing_unitFieldUpdateOperationsInput | $Enums.pricing_unit
    base_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    approval_status?: Enumproperty_approval_statusFieldUpdateOperationsInput | $Enums.property_approval_status
    availability_status?: Enumproperty_availability_statusFieldUpdateOperationsInput | $Enums.property_availability_status
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejection_reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: bookingsUpdateManyWithoutPropertiesNestedInput
    users_properties_approved_byTousers?: usersUpdateOneWithoutProperties_properties_approved_byTousersNestedInput
    categories?: categoriesUpdateOneWithoutPropertiesNestedInput
    users_properties_manager_idTousers?: usersUpdateOneRequiredWithoutProperties_properties_manager_idTousersNestedInput
    rentals?: rentalsUpdateManyWithoutPropertiesNestedInput
  }

  export type propertiesUncheckedUpdateWithoutProperty_imagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pricing_unit?: Enumpricing_unitFieldUpdateOperationsInput | $Enums.pricing_unit
    base_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    approval_status?: Enumproperty_approval_statusFieldUpdateOperationsInput | $Enums.property_approval_status
    availability_status?: Enumproperty_availability_statusFieldUpdateOperationsInput | $Enums.property_availability_status
    category_id?: NullableStringFieldUpdateOperationsInput | string | null
    manager_id?: StringFieldUpdateOperationsInput | string
    approved_by?: NullableStringFieldUpdateOperationsInput | string | null
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejection_reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: bookingsUncheckedUpdateManyWithoutPropertiesNestedInput
    rentals?: rentalsUncheckedUpdateManyWithoutPropertiesNestedInput
  }

  export type usersCreateWithoutProperty_manager_applications_property_manager_applications_reviewed_byTousersInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    password_hash: string
    phone_number?: string | null
    is_suspended?: boolean
    created_at?: Date | string
    bookings?: bookingsCreateNestedManyWithoutUsersInput
    properties_properties_approved_byTousers?: propertiesCreateNestedManyWithoutUsers_properties_approved_byTousersInput
    properties_properties_manager_idTousers?: propertiesCreateNestedManyWithoutUsers_properties_manager_idTousersInput
    property_manager_applications_property_manager_applications_user_idTousers?: property_manager_applicationsCreateNestedManyWithoutUsers_property_manager_applications_user_idTousersInput
    rentals?: rentalsCreateNestedManyWithoutUsersInput
    user_roles_user_roles_assigned_byTousers?: user_rolesCreateNestedManyWithoutUsers_user_roles_assigned_byTousersInput
    user_roles_user_roles_revoked_byTousers?: user_rolesCreateNestedManyWithoutUsers_user_roles_revoked_byTousersInput
    user_roles_user_roles_user_idTousers?: user_rolesCreateNestedManyWithoutUsers_user_roles_user_idTousersInput
  }

  export type usersUncheckedCreateWithoutProperty_manager_applications_property_manager_applications_reviewed_byTousersInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    password_hash: string
    phone_number?: string | null
    is_suspended?: boolean
    created_at?: Date | string
    bookings?: bookingsUncheckedCreateNestedManyWithoutUsersInput
    properties_properties_approved_byTousers?: propertiesUncheckedCreateNestedManyWithoutUsers_properties_approved_byTousersInput
    properties_properties_manager_idTousers?: propertiesUncheckedCreateNestedManyWithoutUsers_properties_manager_idTousersInput
    property_manager_applications_property_manager_applications_user_idTousers?: property_manager_applicationsUncheckedCreateNestedManyWithoutUsers_property_manager_applications_user_idTousersInput
    rentals?: rentalsUncheckedCreateNestedManyWithoutUsersInput
    user_roles_user_roles_assigned_byTousers?: user_rolesUncheckedCreateNestedManyWithoutUsers_user_roles_assigned_byTousersInput
    user_roles_user_roles_revoked_byTousers?: user_rolesUncheckedCreateNestedManyWithoutUsers_user_roles_revoked_byTousersInput
    user_roles_user_roles_user_idTousers?: user_rolesUncheckedCreateNestedManyWithoutUsers_user_roles_user_idTousersInput
  }

  export type usersCreateOrConnectWithoutProperty_manager_applications_property_manager_applications_reviewed_byTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutProperty_manager_applications_property_manager_applications_reviewed_byTousersInput, usersUncheckedCreateWithoutProperty_manager_applications_property_manager_applications_reviewed_byTousersInput>
  }

  export type usersCreateWithoutProperty_manager_applications_property_manager_applications_user_idTousersInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    password_hash: string
    phone_number?: string | null
    is_suspended?: boolean
    created_at?: Date | string
    bookings?: bookingsCreateNestedManyWithoutUsersInput
    properties_properties_approved_byTousers?: propertiesCreateNestedManyWithoutUsers_properties_approved_byTousersInput
    properties_properties_manager_idTousers?: propertiesCreateNestedManyWithoutUsers_properties_manager_idTousersInput
    property_manager_applications_property_manager_applications_reviewed_byTousers?: property_manager_applicationsCreateNestedManyWithoutUsers_property_manager_applications_reviewed_byTousersInput
    rentals?: rentalsCreateNestedManyWithoutUsersInput
    user_roles_user_roles_assigned_byTousers?: user_rolesCreateNestedManyWithoutUsers_user_roles_assigned_byTousersInput
    user_roles_user_roles_revoked_byTousers?: user_rolesCreateNestedManyWithoutUsers_user_roles_revoked_byTousersInput
    user_roles_user_roles_user_idTousers?: user_rolesCreateNestedManyWithoutUsers_user_roles_user_idTousersInput
  }

  export type usersUncheckedCreateWithoutProperty_manager_applications_property_manager_applications_user_idTousersInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    password_hash: string
    phone_number?: string | null
    is_suspended?: boolean
    created_at?: Date | string
    bookings?: bookingsUncheckedCreateNestedManyWithoutUsersInput
    properties_properties_approved_byTousers?: propertiesUncheckedCreateNestedManyWithoutUsers_properties_approved_byTousersInput
    properties_properties_manager_idTousers?: propertiesUncheckedCreateNestedManyWithoutUsers_properties_manager_idTousersInput
    property_manager_applications_property_manager_applications_reviewed_byTousers?: property_manager_applicationsUncheckedCreateNestedManyWithoutUsers_property_manager_applications_reviewed_byTousersInput
    rentals?: rentalsUncheckedCreateNestedManyWithoutUsersInput
    user_roles_user_roles_assigned_byTousers?: user_rolesUncheckedCreateNestedManyWithoutUsers_user_roles_assigned_byTousersInput
    user_roles_user_roles_revoked_byTousers?: user_rolesUncheckedCreateNestedManyWithoutUsers_user_roles_revoked_byTousersInput
    user_roles_user_roles_user_idTousers?: user_rolesUncheckedCreateNestedManyWithoutUsers_user_roles_user_idTousersInput
  }

  export type usersCreateOrConnectWithoutProperty_manager_applications_property_manager_applications_user_idTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutProperty_manager_applications_property_manager_applications_user_idTousersInput, usersUncheckedCreateWithoutProperty_manager_applications_property_manager_applications_user_idTousersInput>
  }

  export type usersUpsertWithoutProperty_manager_applications_property_manager_applications_reviewed_byTousersInput = {
    update: XOR<usersUpdateWithoutProperty_manager_applications_property_manager_applications_reviewed_byTousersInput, usersUncheckedUpdateWithoutProperty_manager_applications_property_manager_applications_reviewed_byTousersInput>
    create: XOR<usersCreateWithoutProperty_manager_applications_property_manager_applications_reviewed_byTousersInput, usersUncheckedCreateWithoutProperty_manager_applications_property_manager_applications_reviewed_byTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutProperty_manager_applications_property_manager_applications_reviewed_byTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutProperty_manager_applications_property_manager_applications_reviewed_byTousersInput, usersUncheckedUpdateWithoutProperty_manager_applications_property_manager_applications_reviewed_byTousersInput>
  }

  export type usersUpdateWithoutProperty_manager_applications_property_manager_applications_reviewed_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    is_suspended?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: bookingsUpdateManyWithoutUsersNestedInput
    properties_properties_approved_byTousers?: propertiesUpdateManyWithoutUsers_properties_approved_byTousersNestedInput
    properties_properties_manager_idTousers?: propertiesUpdateManyWithoutUsers_properties_manager_idTousersNestedInput
    property_manager_applications_property_manager_applications_user_idTousers?: property_manager_applicationsUpdateManyWithoutUsers_property_manager_applications_user_idTousersNestedInput
    rentals?: rentalsUpdateManyWithoutUsersNestedInput
    user_roles_user_roles_assigned_byTousers?: user_rolesUpdateManyWithoutUsers_user_roles_assigned_byTousersNestedInput
    user_roles_user_roles_revoked_byTousers?: user_rolesUpdateManyWithoutUsers_user_roles_revoked_byTousersNestedInput
    user_roles_user_roles_user_idTousers?: user_rolesUpdateManyWithoutUsers_user_roles_user_idTousersNestedInput
  }

  export type usersUncheckedUpdateWithoutProperty_manager_applications_property_manager_applications_reviewed_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    is_suspended?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: bookingsUncheckedUpdateManyWithoutUsersNestedInput
    properties_properties_approved_byTousers?: propertiesUncheckedUpdateManyWithoutUsers_properties_approved_byTousersNestedInput
    properties_properties_manager_idTousers?: propertiesUncheckedUpdateManyWithoutUsers_properties_manager_idTousersNestedInput
    property_manager_applications_property_manager_applications_user_idTousers?: property_manager_applicationsUncheckedUpdateManyWithoutUsers_property_manager_applications_user_idTousersNestedInput
    rentals?: rentalsUncheckedUpdateManyWithoutUsersNestedInput
    user_roles_user_roles_assigned_byTousers?: user_rolesUncheckedUpdateManyWithoutUsers_user_roles_assigned_byTousersNestedInput
    user_roles_user_roles_revoked_byTousers?: user_rolesUncheckedUpdateManyWithoutUsers_user_roles_revoked_byTousersNestedInput
    user_roles_user_roles_user_idTousers?: user_rolesUncheckedUpdateManyWithoutUsers_user_roles_user_idTousersNestedInput
  }

  export type usersUpsertWithoutProperty_manager_applications_property_manager_applications_user_idTousersInput = {
    update: XOR<usersUpdateWithoutProperty_manager_applications_property_manager_applications_user_idTousersInput, usersUncheckedUpdateWithoutProperty_manager_applications_property_manager_applications_user_idTousersInput>
    create: XOR<usersCreateWithoutProperty_manager_applications_property_manager_applications_user_idTousersInput, usersUncheckedCreateWithoutProperty_manager_applications_property_manager_applications_user_idTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutProperty_manager_applications_property_manager_applications_user_idTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutProperty_manager_applications_property_manager_applications_user_idTousersInput, usersUncheckedUpdateWithoutProperty_manager_applications_property_manager_applications_user_idTousersInput>
  }

  export type usersUpdateWithoutProperty_manager_applications_property_manager_applications_user_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    is_suspended?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: bookingsUpdateManyWithoutUsersNestedInput
    properties_properties_approved_byTousers?: propertiesUpdateManyWithoutUsers_properties_approved_byTousersNestedInput
    properties_properties_manager_idTousers?: propertiesUpdateManyWithoutUsers_properties_manager_idTousersNestedInput
    property_manager_applications_property_manager_applications_reviewed_byTousers?: property_manager_applicationsUpdateManyWithoutUsers_property_manager_applications_reviewed_byTousersNestedInput
    rentals?: rentalsUpdateManyWithoutUsersNestedInput
    user_roles_user_roles_assigned_byTousers?: user_rolesUpdateManyWithoutUsers_user_roles_assigned_byTousersNestedInput
    user_roles_user_roles_revoked_byTousers?: user_rolesUpdateManyWithoutUsers_user_roles_revoked_byTousersNestedInput
    user_roles_user_roles_user_idTousers?: user_rolesUpdateManyWithoutUsers_user_roles_user_idTousersNestedInput
  }

  export type usersUncheckedUpdateWithoutProperty_manager_applications_property_manager_applications_user_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    is_suspended?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: bookingsUncheckedUpdateManyWithoutUsersNestedInput
    properties_properties_approved_byTousers?: propertiesUncheckedUpdateManyWithoutUsers_properties_approved_byTousersNestedInput
    properties_properties_manager_idTousers?: propertiesUncheckedUpdateManyWithoutUsers_properties_manager_idTousersNestedInput
    property_manager_applications_property_manager_applications_reviewed_byTousers?: property_manager_applicationsUncheckedUpdateManyWithoutUsers_property_manager_applications_reviewed_byTousersNestedInput
    rentals?: rentalsUncheckedUpdateManyWithoutUsersNestedInput
    user_roles_user_roles_assigned_byTousers?: user_rolesUncheckedUpdateManyWithoutUsers_user_roles_assigned_byTousersNestedInput
    user_roles_user_roles_revoked_byTousers?: user_rolesUncheckedUpdateManyWithoutUsers_user_roles_revoked_byTousersNestedInput
    user_roles_user_roles_user_idTousers?: user_rolesUncheckedUpdateManyWithoutUsers_user_roles_user_idTousersNestedInput
  }

  export type paymentsCreateWithoutRentalsInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    category: $Enums.payment_category
    payment_method?: string | null
    payment_status: $Enums.payment_status
    transaction_reference?: string | null
    paid_at?: Date | string | null
    created_at?: Date | string
  }

  export type paymentsUncheckedCreateWithoutRentalsInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    category: $Enums.payment_category
    payment_method?: string | null
    payment_status: $Enums.payment_status
    transaction_reference?: string | null
    paid_at?: Date | string | null
    created_at?: Date | string
  }

  export type paymentsCreateOrConnectWithoutRentalsInput = {
    where: paymentsWhereUniqueInput
    create: XOR<paymentsCreateWithoutRentalsInput, paymentsUncheckedCreateWithoutRentalsInput>
  }

  export type paymentsCreateManyRentalsInputEnvelope = {
    data: paymentsCreateManyRentalsInput | paymentsCreateManyRentalsInput[]
    skipDuplicates?: boolean
  }

  export type bookingsCreateWithoutRentalsInput = {
    id?: string
    start_date: Date | string
    end_date: Date | string
    proposed_amount?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.booking_status
    cancelled_at?: Date | string | null
    cancellation_reason?: string | null
    created_at?: Date | string
    properties: propertiesCreateNestedOneWithoutBookingsInput
    users: usersCreateNestedOneWithoutBookingsInput
  }

  export type bookingsUncheckedCreateWithoutRentalsInput = {
    id?: string
    user_id: string
    property_id: string
    start_date: Date | string
    end_date: Date | string
    proposed_amount?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.booking_status
    cancelled_at?: Date | string | null
    cancellation_reason?: string | null
    created_at?: Date | string
  }

  export type bookingsCreateOrConnectWithoutRentalsInput = {
    where: bookingsWhereUniqueInput
    create: XOR<bookingsCreateWithoutRentalsInput, bookingsUncheckedCreateWithoutRentalsInput>
  }

  export type propertiesCreateWithoutRentalsInput = {
    id?: string
    title: string
    description?: string | null
    address: string
    city: string
    state: string
    pricing_unit: $Enums.pricing_unit
    base_price: Decimal | DecimalJsLike | number | string
    approval_status?: $Enums.property_approval_status
    availability_status?: $Enums.property_availability_status
    approved_at?: Date | string | null
    rejection_reason?: string | null
    created_at?: Date | string
    bookings?: bookingsCreateNestedManyWithoutPropertiesInput
    users_properties_approved_byTousers?: usersCreateNestedOneWithoutProperties_properties_approved_byTousersInput
    categories?: categoriesCreateNestedOneWithoutPropertiesInput
    users_properties_manager_idTousers: usersCreateNestedOneWithoutProperties_properties_manager_idTousersInput
    property_images?: property_imagesCreateNestedManyWithoutPropertiesInput
  }

  export type propertiesUncheckedCreateWithoutRentalsInput = {
    id?: string
    title: string
    description?: string | null
    address: string
    city: string
    state: string
    pricing_unit: $Enums.pricing_unit
    base_price: Decimal | DecimalJsLike | number | string
    approval_status?: $Enums.property_approval_status
    availability_status?: $Enums.property_availability_status
    category_id?: string | null
    manager_id: string
    approved_by?: string | null
    approved_at?: Date | string | null
    rejection_reason?: string | null
    created_at?: Date | string
    bookings?: bookingsUncheckedCreateNestedManyWithoutPropertiesInput
    property_images?: property_imagesUncheckedCreateNestedManyWithoutPropertiesInput
  }

  export type propertiesCreateOrConnectWithoutRentalsInput = {
    where: propertiesWhereUniqueInput
    create: XOR<propertiesCreateWithoutRentalsInput, propertiesUncheckedCreateWithoutRentalsInput>
  }

  export type usersCreateWithoutRentalsInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    password_hash: string
    phone_number?: string | null
    is_suspended?: boolean
    created_at?: Date | string
    bookings?: bookingsCreateNestedManyWithoutUsersInput
    properties_properties_approved_byTousers?: propertiesCreateNestedManyWithoutUsers_properties_approved_byTousersInput
    properties_properties_manager_idTousers?: propertiesCreateNestedManyWithoutUsers_properties_manager_idTousersInput
    property_manager_applications_property_manager_applications_reviewed_byTousers?: property_manager_applicationsCreateNestedManyWithoutUsers_property_manager_applications_reviewed_byTousersInput
    property_manager_applications_property_manager_applications_user_idTousers?: property_manager_applicationsCreateNestedManyWithoutUsers_property_manager_applications_user_idTousersInput
    user_roles_user_roles_assigned_byTousers?: user_rolesCreateNestedManyWithoutUsers_user_roles_assigned_byTousersInput
    user_roles_user_roles_revoked_byTousers?: user_rolesCreateNestedManyWithoutUsers_user_roles_revoked_byTousersInput
    user_roles_user_roles_user_idTousers?: user_rolesCreateNestedManyWithoutUsers_user_roles_user_idTousersInput
  }

  export type usersUncheckedCreateWithoutRentalsInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    password_hash: string
    phone_number?: string | null
    is_suspended?: boolean
    created_at?: Date | string
    bookings?: bookingsUncheckedCreateNestedManyWithoutUsersInput
    properties_properties_approved_byTousers?: propertiesUncheckedCreateNestedManyWithoutUsers_properties_approved_byTousersInput
    properties_properties_manager_idTousers?: propertiesUncheckedCreateNestedManyWithoutUsers_properties_manager_idTousersInput
    property_manager_applications_property_manager_applications_reviewed_byTousers?: property_manager_applicationsUncheckedCreateNestedManyWithoutUsers_property_manager_applications_reviewed_byTousersInput
    property_manager_applications_property_manager_applications_user_idTousers?: property_manager_applicationsUncheckedCreateNestedManyWithoutUsers_property_manager_applications_user_idTousersInput
    user_roles_user_roles_assigned_byTousers?: user_rolesUncheckedCreateNestedManyWithoutUsers_user_roles_assigned_byTousersInput
    user_roles_user_roles_revoked_byTousers?: user_rolesUncheckedCreateNestedManyWithoutUsers_user_roles_revoked_byTousersInput
    user_roles_user_roles_user_idTousers?: user_rolesUncheckedCreateNestedManyWithoutUsers_user_roles_user_idTousersInput
  }

  export type usersCreateOrConnectWithoutRentalsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutRentalsInput, usersUncheckedCreateWithoutRentalsInput>
  }

  export type paymentsUpsertWithWhereUniqueWithoutRentalsInput = {
    where: paymentsWhereUniqueInput
    update: XOR<paymentsUpdateWithoutRentalsInput, paymentsUncheckedUpdateWithoutRentalsInput>
    create: XOR<paymentsCreateWithoutRentalsInput, paymentsUncheckedCreateWithoutRentalsInput>
  }

  export type paymentsUpdateWithWhereUniqueWithoutRentalsInput = {
    where: paymentsWhereUniqueInput
    data: XOR<paymentsUpdateWithoutRentalsInput, paymentsUncheckedUpdateWithoutRentalsInput>
  }

  export type paymentsUpdateManyWithWhereWithoutRentalsInput = {
    where: paymentsScalarWhereInput
    data: XOR<paymentsUpdateManyMutationInput, paymentsUncheckedUpdateManyWithoutRentalsInput>
  }

  export type paymentsScalarWhereInput = {
    AND?: paymentsScalarWhereInput | paymentsScalarWhereInput[]
    OR?: paymentsScalarWhereInput[]
    NOT?: paymentsScalarWhereInput | paymentsScalarWhereInput[]
    id?: UuidFilter<"payments"> | string
    rental_id?: UuidFilter<"payments"> | string
    amount?: DecimalFilter<"payments"> | Decimal | DecimalJsLike | number | string
    category?: Enumpayment_categoryFilter<"payments"> | $Enums.payment_category
    payment_method?: StringNullableFilter<"payments"> | string | null
    payment_status?: Enumpayment_statusFilter<"payments"> | $Enums.payment_status
    transaction_reference?: StringNullableFilter<"payments"> | string | null
    paid_at?: DateTimeNullableFilter<"payments"> | Date | string | null
    created_at?: DateTimeFilter<"payments"> | Date | string
  }

  export type bookingsUpsertWithoutRentalsInput = {
    update: XOR<bookingsUpdateWithoutRentalsInput, bookingsUncheckedUpdateWithoutRentalsInput>
    create: XOR<bookingsCreateWithoutRentalsInput, bookingsUncheckedCreateWithoutRentalsInput>
    where?: bookingsWhereInput
  }

  export type bookingsUpdateToOneWithWhereWithoutRentalsInput = {
    where?: bookingsWhereInput
    data: XOR<bookingsUpdateWithoutRentalsInput, bookingsUncheckedUpdateWithoutRentalsInput>
  }

  export type bookingsUpdateWithoutRentalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    proposed_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellation_reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: propertiesUpdateOneRequiredWithoutBookingsNestedInput
    users?: usersUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type bookingsUncheckedUpdateWithoutRentalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    property_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    proposed_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellation_reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type propertiesUpsertWithoutRentalsInput = {
    update: XOR<propertiesUpdateWithoutRentalsInput, propertiesUncheckedUpdateWithoutRentalsInput>
    create: XOR<propertiesCreateWithoutRentalsInput, propertiesUncheckedCreateWithoutRentalsInput>
    where?: propertiesWhereInput
  }

  export type propertiesUpdateToOneWithWhereWithoutRentalsInput = {
    where?: propertiesWhereInput
    data: XOR<propertiesUpdateWithoutRentalsInput, propertiesUncheckedUpdateWithoutRentalsInput>
  }

  export type propertiesUpdateWithoutRentalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pricing_unit?: Enumpricing_unitFieldUpdateOperationsInput | $Enums.pricing_unit
    base_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    approval_status?: Enumproperty_approval_statusFieldUpdateOperationsInput | $Enums.property_approval_status
    availability_status?: Enumproperty_availability_statusFieldUpdateOperationsInput | $Enums.property_availability_status
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejection_reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: bookingsUpdateManyWithoutPropertiesNestedInput
    users_properties_approved_byTousers?: usersUpdateOneWithoutProperties_properties_approved_byTousersNestedInput
    categories?: categoriesUpdateOneWithoutPropertiesNestedInput
    users_properties_manager_idTousers?: usersUpdateOneRequiredWithoutProperties_properties_manager_idTousersNestedInput
    property_images?: property_imagesUpdateManyWithoutPropertiesNestedInput
  }

  export type propertiesUncheckedUpdateWithoutRentalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pricing_unit?: Enumpricing_unitFieldUpdateOperationsInput | $Enums.pricing_unit
    base_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    approval_status?: Enumproperty_approval_statusFieldUpdateOperationsInput | $Enums.property_approval_status
    availability_status?: Enumproperty_availability_statusFieldUpdateOperationsInput | $Enums.property_availability_status
    category_id?: NullableStringFieldUpdateOperationsInput | string | null
    manager_id?: StringFieldUpdateOperationsInput | string
    approved_by?: NullableStringFieldUpdateOperationsInput | string | null
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejection_reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: bookingsUncheckedUpdateManyWithoutPropertiesNestedInput
    property_images?: property_imagesUncheckedUpdateManyWithoutPropertiesNestedInput
  }

  export type usersUpsertWithoutRentalsInput = {
    update: XOR<usersUpdateWithoutRentalsInput, usersUncheckedUpdateWithoutRentalsInput>
    create: XOR<usersCreateWithoutRentalsInput, usersUncheckedCreateWithoutRentalsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutRentalsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutRentalsInput, usersUncheckedUpdateWithoutRentalsInput>
  }

  export type usersUpdateWithoutRentalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    is_suspended?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: bookingsUpdateManyWithoutUsersNestedInput
    properties_properties_approved_byTousers?: propertiesUpdateManyWithoutUsers_properties_approved_byTousersNestedInput
    properties_properties_manager_idTousers?: propertiesUpdateManyWithoutUsers_properties_manager_idTousersNestedInput
    property_manager_applications_property_manager_applications_reviewed_byTousers?: property_manager_applicationsUpdateManyWithoutUsers_property_manager_applications_reviewed_byTousersNestedInput
    property_manager_applications_property_manager_applications_user_idTousers?: property_manager_applicationsUpdateManyWithoutUsers_property_manager_applications_user_idTousersNestedInput
    user_roles_user_roles_assigned_byTousers?: user_rolesUpdateManyWithoutUsers_user_roles_assigned_byTousersNestedInput
    user_roles_user_roles_revoked_byTousers?: user_rolesUpdateManyWithoutUsers_user_roles_revoked_byTousersNestedInput
    user_roles_user_roles_user_idTousers?: user_rolesUpdateManyWithoutUsers_user_roles_user_idTousersNestedInput
  }

  export type usersUncheckedUpdateWithoutRentalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    is_suspended?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: bookingsUncheckedUpdateManyWithoutUsersNestedInput
    properties_properties_approved_byTousers?: propertiesUncheckedUpdateManyWithoutUsers_properties_approved_byTousersNestedInput
    properties_properties_manager_idTousers?: propertiesUncheckedUpdateManyWithoutUsers_properties_manager_idTousersNestedInput
    property_manager_applications_property_manager_applications_reviewed_byTousers?: property_manager_applicationsUncheckedUpdateManyWithoutUsers_property_manager_applications_reviewed_byTousersNestedInput
    property_manager_applications_property_manager_applications_user_idTousers?: property_manager_applicationsUncheckedUpdateManyWithoutUsers_property_manager_applications_user_idTousersNestedInput
    user_roles_user_roles_assigned_byTousers?: user_rolesUncheckedUpdateManyWithoutUsers_user_roles_assigned_byTousersNestedInput
    user_roles_user_roles_revoked_byTousers?: user_rolesUncheckedUpdateManyWithoutUsers_user_roles_revoked_byTousersNestedInput
    user_roles_user_roles_user_idTousers?: user_rolesUncheckedUpdateManyWithoutUsers_user_roles_user_idTousersNestedInput
  }

  export type user_rolesCreateWithoutRolesInput = {
    id?: string
    assigned_at?: Date | string
    revoked_at?: Date | string | null
    created_at?: Date | string
    users_user_roles_assigned_byTousers?: usersCreateNestedOneWithoutUser_roles_user_roles_assigned_byTousersInput
    users_user_roles_revoked_byTousers?: usersCreateNestedOneWithoutUser_roles_user_roles_revoked_byTousersInput
    users_user_roles_user_idTousers: usersCreateNestedOneWithoutUser_roles_user_roles_user_idTousersInput
  }

  export type user_rolesUncheckedCreateWithoutRolesInput = {
    id?: string
    user_id: string
    assigned_by?: string | null
    assigned_at?: Date | string
    revoked_by?: string | null
    revoked_at?: Date | string | null
    created_at?: Date | string
  }

  export type user_rolesCreateOrConnectWithoutRolesInput = {
    where: user_rolesWhereUniqueInput
    create: XOR<user_rolesCreateWithoutRolesInput, user_rolesUncheckedCreateWithoutRolesInput>
  }

  export type user_rolesCreateManyRolesInputEnvelope = {
    data: user_rolesCreateManyRolesInput | user_rolesCreateManyRolesInput[]
    skipDuplicates?: boolean
  }

  export type user_rolesUpsertWithWhereUniqueWithoutRolesInput = {
    where: user_rolesWhereUniqueInput
    update: XOR<user_rolesUpdateWithoutRolesInput, user_rolesUncheckedUpdateWithoutRolesInput>
    create: XOR<user_rolesCreateWithoutRolesInput, user_rolesUncheckedCreateWithoutRolesInput>
  }

  export type user_rolesUpdateWithWhereUniqueWithoutRolesInput = {
    where: user_rolesWhereUniqueInput
    data: XOR<user_rolesUpdateWithoutRolesInput, user_rolesUncheckedUpdateWithoutRolesInput>
  }

  export type user_rolesUpdateManyWithWhereWithoutRolesInput = {
    where: user_rolesScalarWhereInput
    data: XOR<user_rolesUpdateManyMutationInput, user_rolesUncheckedUpdateManyWithoutRolesInput>
  }

  export type user_rolesScalarWhereInput = {
    AND?: user_rolesScalarWhereInput | user_rolesScalarWhereInput[]
    OR?: user_rolesScalarWhereInput[]
    NOT?: user_rolesScalarWhereInput | user_rolesScalarWhereInput[]
    id?: UuidFilter<"user_roles"> | string
    user_id?: UuidFilter<"user_roles"> | string
    role_id?: UuidFilter<"user_roles"> | string
    assigned_by?: UuidNullableFilter<"user_roles"> | string | null
    assigned_at?: DateTimeFilter<"user_roles"> | Date | string
    revoked_by?: UuidNullableFilter<"user_roles"> | string | null
    revoked_at?: DateTimeNullableFilter<"user_roles"> | Date | string | null
    created_at?: DateTimeFilter<"user_roles"> | Date | string
  }

  export type usersCreateWithoutUser_roles_user_roles_assigned_byTousersInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    password_hash: string
    phone_number?: string | null
    is_suspended?: boolean
    created_at?: Date | string
    bookings?: bookingsCreateNestedManyWithoutUsersInput
    properties_properties_approved_byTousers?: propertiesCreateNestedManyWithoutUsers_properties_approved_byTousersInput
    properties_properties_manager_idTousers?: propertiesCreateNestedManyWithoutUsers_properties_manager_idTousersInput
    property_manager_applications_property_manager_applications_reviewed_byTousers?: property_manager_applicationsCreateNestedManyWithoutUsers_property_manager_applications_reviewed_byTousersInput
    property_manager_applications_property_manager_applications_user_idTousers?: property_manager_applicationsCreateNestedManyWithoutUsers_property_manager_applications_user_idTousersInput
    rentals?: rentalsCreateNestedManyWithoutUsersInput
    user_roles_user_roles_revoked_byTousers?: user_rolesCreateNestedManyWithoutUsers_user_roles_revoked_byTousersInput
    user_roles_user_roles_user_idTousers?: user_rolesCreateNestedManyWithoutUsers_user_roles_user_idTousersInput
  }

  export type usersUncheckedCreateWithoutUser_roles_user_roles_assigned_byTousersInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    password_hash: string
    phone_number?: string | null
    is_suspended?: boolean
    created_at?: Date | string
    bookings?: bookingsUncheckedCreateNestedManyWithoutUsersInput
    properties_properties_approved_byTousers?: propertiesUncheckedCreateNestedManyWithoutUsers_properties_approved_byTousersInput
    properties_properties_manager_idTousers?: propertiesUncheckedCreateNestedManyWithoutUsers_properties_manager_idTousersInput
    property_manager_applications_property_manager_applications_reviewed_byTousers?: property_manager_applicationsUncheckedCreateNestedManyWithoutUsers_property_manager_applications_reviewed_byTousersInput
    property_manager_applications_property_manager_applications_user_idTousers?: property_manager_applicationsUncheckedCreateNestedManyWithoutUsers_property_manager_applications_user_idTousersInput
    rentals?: rentalsUncheckedCreateNestedManyWithoutUsersInput
    user_roles_user_roles_revoked_byTousers?: user_rolesUncheckedCreateNestedManyWithoutUsers_user_roles_revoked_byTousersInput
    user_roles_user_roles_user_idTousers?: user_rolesUncheckedCreateNestedManyWithoutUsers_user_roles_user_idTousersInput
  }

  export type usersCreateOrConnectWithoutUser_roles_user_roles_assigned_byTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUser_roles_user_roles_assigned_byTousersInput, usersUncheckedCreateWithoutUser_roles_user_roles_assigned_byTousersInput>
  }

  export type usersCreateWithoutUser_roles_user_roles_revoked_byTousersInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    password_hash: string
    phone_number?: string | null
    is_suspended?: boolean
    created_at?: Date | string
    bookings?: bookingsCreateNestedManyWithoutUsersInput
    properties_properties_approved_byTousers?: propertiesCreateNestedManyWithoutUsers_properties_approved_byTousersInput
    properties_properties_manager_idTousers?: propertiesCreateNestedManyWithoutUsers_properties_manager_idTousersInput
    property_manager_applications_property_manager_applications_reviewed_byTousers?: property_manager_applicationsCreateNestedManyWithoutUsers_property_manager_applications_reviewed_byTousersInput
    property_manager_applications_property_manager_applications_user_idTousers?: property_manager_applicationsCreateNestedManyWithoutUsers_property_manager_applications_user_idTousersInput
    rentals?: rentalsCreateNestedManyWithoutUsersInput
    user_roles_user_roles_assigned_byTousers?: user_rolesCreateNestedManyWithoutUsers_user_roles_assigned_byTousersInput
    user_roles_user_roles_user_idTousers?: user_rolesCreateNestedManyWithoutUsers_user_roles_user_idTousersInput
  }

  export type usersUncheckedCreateWithoutUser_roles_user_roles_revoked_byTousersInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    password_hash: string
    phone_number?: string | null
    is_suspended?: boolean
    created_at?: Date | string
    bookings?: bookingsUncheckedCreateNestedManyWithoutUsersInput
    properties_properties_approved_byTousers?: propertiesUncheckedCreateNestedManyWithoutUsers_properties_approved_byTousersInput
    properties_properties_manager_idTousers?: propertiesUncheckedCreateNestedManyWithoutUsers_properties_manager_idTousersInput
    property_manager_applications_property_manager_applications_reviewed_byTousers?: property_manager_applicationsUncheckedCreateNestedManyWithoutUsers_property_manager_applications_reviewed_byTousersInput
    property_manager_applications_property_manager_applications_user_idTousers?: property_manager_applicationsUncheckedCreateNestedManyWithoutUsers_property_manager_applications_user_idTousersInput
    rentals?: rentalsUncheckedCreateNestedManyWithoutUsersInput
    user_roles_user_roles_assigned_byTousers?: user_rolesUncheckedCreateNestedManyWithoutUsers_user_roles_assigned_byTousersInput
    user_roles_user_roles_user_idTousers?: user_rolesUncheckedCreateNestedManyWithoutUsers_user_roles_user_idTousersInput
  }

  export type usersCreateOrConnectWithoutUser_roles_user_roles_revoked_byTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUser_roles_user_roles_revoked_byTousersInput, usersUncheckedCreateWithoutUser_roles_user_roles_revoked_byTousersInput>
  }

  export type rolesCreateWithoutUser_rolesInput = {
    id?: string
    name: string
  }

  export type rolesUncheckedCreateWithoutUser_rolesInput = {
    id?: string
    name: string
  }

  export type rolesCreateOrConnectWithoutUser_rolesInput = {
    where: rolesWhereUniqueInput
    create: XOR<rolesCreateWithoutUser_rolesInput, rolesUncheckedCreateWithoutUser_rolesInput>
  }

  export type usersCreateWithoutUser_roles_user_roles_user_idTousersInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    password_hash: string
    phone_number?: string | null
    is_suspended?: boolean
    created_at?: Date | string
    bookings?: bookingsCreateNestedManyWithoutUsersInput
    properties_properties_approved_byTousers?: propertiesCreateNestedManyWithoutUsers_properties_approved_byTousersInput
    properties_properties_manager_idTousers?: propertiesCreateNestedManyWithoutUsers_properties_manager_idTousersInput
    property_manager_applications_property_manager_applications_reviewed_byTousers?: property_manager_applicationsCreateNestedManyWithoutUsers_property_manager_applications_reviewed_byTousersInput
    property_manager_applications_property_manager_applications_user_idTousers?: property_manager_applicationsCreateNestedManyWithoutUsers_property_manager_applications_user_idTousersInput
    rentals?: rentalsCreateNestedManyWithoutUsersInput
    user_roles_user_roles_assigned_byTousers?: user_rolesCreateNestedManyWithoutUsers_user_roles_assigned_byTousersInput
    user_roles_user_roles_revoked_byTousers?: user_rolesCreateNestedManyWithoutUsers_user_roles_revoked_byTousersInput
  }

  export type usersUncheckedCreateWithoutUser_roles_user_roles_user_idTousersInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    password_hash: string
    phone_number?: string | null
    is_suspended?: boolean
    created_at?: Date | string
    bookings?: bookingsUncheckedCreateNestedManyWithoutUsersInput
    properties_properties_approved_byTousers?: propertiesUncheckedCreateNestedManyWithoutUsers_properties_approved_byTousersInput
    properties_properties_manager_idTousers?: propertiesUncheckedCreateNestedManyWithoutUsers_properties_manager_idTousersInput
    property_manager_applications_property_manager_applications_reviewed_byTousers?: property_manager_applicationsUncheckedCreateNestedManyWithoutUsers_property_manager_applications_reviewed_byTousersInput
    property_manager_applications_property_manager_applications_user_idTousers?: property_manager_applicationsUncheckedCreateNestedManyWithoutUsers_property_manager_applications_user_idTousersInput
    rentals?: rentalsUncheckedCreateNestedManyWithoutUsersInput
    user_roles_user_roles_assigned_byTousers?: user_rolesUncheckedCreateNestedManyWithoutUsers_user_roles_assigned_byTousersInput
    user_roles_user_roles_revoked_byTousers?: user_rolesUncheckedCreateNestedManyWithoutUsers_user_roles_revoked_byTousersInput
  }

  export type usersCreateOrConnectWithoutUser_roles_user_roles_user_idTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUser_roles_user_roles_user_idTousersInput, usersUncheckedCreateWithoutUser_roles_user_roles_user_idTousersInput>
  }

  export type usersUpsertWithoutUser_roles_user_roles_assigned_byTousersInput = {
    update: XOR<usersUpdateWithoutUser_roles_user_roles_assigned_byTousersInput, usersUncheckedUpdateWithoutUser_roles_user_roles_assigned_byTousersInput>
    create: XOR<usersCreateWithoutUser_roles_user_roles_assigned_byTousersInput, usersUncheckedCreateWithoutUser_roles_user_roles_assigned_byTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutUser_roles_user_roles_assigned_byTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutUser_roles_user_roles_assigned_byTousersInput, usersUncheckedUpdateWithoutUser_roles_user_roles_assigned_byTousersInput>
  }

  export type usersUpdateWithoutUser_roles_user_roles_assigned_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    is_suspended?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: bookingsUpdateManyWithoutUsersNestedInput
    properties_properties_approved_byTousers?: propertiesUpdateManyWithoutUsers_properties_approved_byTousersNestedInput
    properties_properties_manager_idTousers?: propertiesUpdateManyWithoutUsers_properties_manager_idTousersNestedInput
    property_manager_applications_property_manager_applications_reviewed_byTousers?: property_manager_applicationsUpdateManyWithoutUsers_property_manager_applications_reviewed_byTousersNestedInput
    property_manager_applications_property_manager_applications_user_idTousers?: property_manager_applicationsUpdateManyWithoutUsers_property_manager_applications_user_idTousersNestedInput
    rentals?: rentalsUpdateManyWithoutUsersNestedInput
    user_roles_user_roles_revoked_byTousers?: user_rolesUpdateManyWithoutUsers_user_roles_revoked_byTousersNestedInput
    user_roles_user_roles_user_idTousers?: user_rolesUpdateManyWithoutUsers_user_roles_user_idTousersNestedInput
  }

  export type usersUncheckedUpdateWithoutUser_roles_user_roles_assigned_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    is_suspended?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: bookingsUncheckedUpdateManyWithoutUsersNestedInput
    properties_properties_approved_byTousers?: propertiesUncheckedUpdateManyWithoutUsers_properties_approved_byTousersNestedInput
    properties_properties_manager_idTousers?: propertiesUncheckedUpdateManyWithoutUsers_properties_manager_idTousersNestedInput
    property_manager_applications_property_manager_applications_reviewed_byTousers?: property_manager_applicationsUncheckedUpdateManyWithoutUsers_property_manager_applications_reviewed_byTousersNestedInput
    property_manager_applications_property_manager_applications_user_idTousers?: property_manager_applicationsUncheckedUpdateManyWithoutUsers_property_manager_applications_user_idTousersNestedInput
    rentals?: rentalsUncheckedUpdateManyWithoutUsersNestedInput
    user_roles_user_roles_revoked_byTousers?: user_rolesUncheckedUpdateManyWithoutUsers_user_roles_revoked_byTousersNestedInput
    user_roles_user_roles_user_idTousers?: user_rolesUncheckedUpdateManyWithoutUsers_user_roles_user_idTousersNestedInput
  }

  export type usersUpsertWithoutUser_roles_user_roles_revoked_byTousersInput = {
    update: XOR<usersUpdateWithoutUser_roles_user_roles_revoked_byTousersInput, usersUncheckedUpdateWithoutUser_roles_user_roles_revoked_byTousersInput>
    create: XOR<usersCreateWithoutUser_roles_user_roles_revoked_byTousersInput, usersUncheckedCreateWithoutUser_roles_user_roles_revoked_byTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutUser_roles_user_roles_revoked_byTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutUser_roles_user_roles_revoked_byTousersInput, usersUncheckedUpdateWithoutUser_roles_user_roles_revoked_byTousersInput>
  }

  export type usersUpdateWithoutUser_roles_user_roles_revoked_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    is_suspended?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: bookingsUpdateManyWithoutUsersNestedInput
    properties_properties_approved_byTousers?: propertiesUpdateManyWithoutUsers_properties_approved_byTousersNestedInput
    properties_properties_manager_idTousers?: propertiesUpdateManyWithoutUsers_properties_manager_idTousersNestedInput
    property_manager_applications_property_manager_applications_reviewed_byTousers?: property_manager_applicationsUpdateManyWithoutUsers_property_manager_applications_reviewed_byTousersNestedInput
    property_manager_applications_property_manager_applications_user_idTousers?: property_manager_applicationsUpdateManyWithoutUsers_property_manager_applications_user_idTousersNestedInput
    rentals?: rentalsUpdateManyWithoutUsersNestedInput
    user_roles_user_roles_assigned_byTousers?: user_rolesUpdateManyWithoutUsers_user_roles_assigned_byTousersNestedInput
    user_roles_user_roles_user_idTousers?: user_rolesUpdateManyWithoutUsers_user_roles_user_idTousersNestedInput
  }

  export type usersUncheckedUpdateWithoutUser_roles_user_roles_revoked_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    is_suspended?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: bookingsUncheckedUpdateManyWithoutUsersNestedInput
    properties_properties_approved_byTousers?: propertiesUncheckedUpdateManyWithoutUsers_properties_approved_byTousersNestedInput
    properties_properties_manager_idTousers?: propertiesUncheckedUpdateManyWithoutUsers_properties_manager_idTousersNestedInput
    property_manager_applications_property_manager_applications_reviewed_byTousers?: property_manager_applicationsUncheckedUpdateManyWithoutUsers_property_manager_applications_reviewed_byTousersNestedInput
    property_manager_applications_property_manager_applications_user_idTousers?: property_manager_applicationsUncheckedUpdateManyWithoutUsers_property_manager_applications_user_idTousersNestedInput
    rentals?: rentalsUncheckedUpdateManyWithoutUsersNestedInput
    user_roles_user_roles_assigned_byTousers?: user_rolesUncheckedUpdateManyWithoutUsers_user_roles_assigned_byTousersNestedInput
    user_roles_user_roles_user_idTousers?: user_rolesUncheckedUpdateManyWithoutUsers_user_roles_user_idTousersNestedInput
  }

  export type rolesUpsertWithoutUser_rolesInput = {
    update: XOR<rolesUpdateWithoutUser_rolesInput, rolesUncheckedUpdateWithoutUser_rolesInput>
    create: XOR<rolesCreateWithoutUser_rolesInput, rolesUncheckedCreateWithoutUser_rolesInput>
    where?: rolesWhereInput
  }

  export type rolesUpdateToOneWithWhereWithoutUser_rolesInput = {
    where?: rolesWhereInput
    data: XOR<rolesUpdateWithoutUser_rolesInput, rolesUncheckedUpdateWithoutUser_rolesInput>
  }

  export type rolesUpdateWithoutUser_rolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type rolesUncheckedUpdateWithoutUser_rolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type usersUpsertWithoutUser_roles_user_roles_user_idTousersInput = {
    update: XOR<usersUpdateWithoutUser_roles_user_roles_user_idTousersInput, usersUncheckedUpdateWithoutUser_roles_user_roles_user_idTousersInput>
    create: XOR<usersCreateWithoutUser_roles_user_roles_user_idTousersInput, usersUncheckedCreateWithoutUser_roles_user_roles_user_idTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutUser_roles_user_roles_user_idTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutUser_roles_user_roles_user_idTousersInput, usersUncheckedUpdateWithoutUser_roles_user_roles_user_idTousersInput>
  }

  export type usersUpdateWithoutUser_roles_user_roles_user_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    is_suspended?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: bookingsUpdateManyWithoutUsersNestedInput
    properties_properties_approved_byTousers?: propertiesUpdateManyWithoutUsers_properties_approved_byTousersNestedInput
    properties_properties_manager_idTousers?: propertiesUpdateManyWithoutUsers_properties_manager_idTousersNestedInput
    property_manager_applications_property_manager_applications_reviewed_byTousers?: property_manager_applicationsUpdateManyWithoutUsers_property_manager_applications_reviewed_byTousersNestedInput
    property_manager_applications_property_manager_applications_user_idTousers?: property_manager_applicationsUpdateManyWithoutUsers_property_manager_applications_user_idTousersNestedInput
    rentals?: rentalsUpdateManyWithoutUsersNestedInput
    user_roles_user_roles_assigned_byTousers?: user_rolesUpdateManyWithoutUsers_user_roles_assigned_byTousersNestedInput
    user_roles_user_roles_revoked_byTousers?: user_rolesUpdateManyWithoutUsers_user_roles_revoked_byTousersNestedInput
  }

  export type usersUncheckedUpdateWithoutUser_roles_user_roles_user_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    is_suspended?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: bookingsUncheckedUpdateManyWithoutUsersNestedInput
    properties_properties_approved_byTousers?: propertiesUncheckedUpdateManyWithoutUsers_properties_approved_byTousersNestedInput
    properties_properties_manager_idTousers?: propertiesUncheckedUpdateManyWithoutUsers_properties_manager_idTousersNestedInput
    property_manager_applications_property_manager_applications_reviewed_byTousers?: property_manager_applicationsUncheckedUpdateManyWithoutUsers_property_manager_applications_reviewed_byTousersNestedInput
    property_manager_applications_property_manager_applications_user_idTousers?: property_manager_applicationsUncheckedUpdateManyWithoutUsers_property_manager_applications_user_idTousersNestedInput
    rentals?: rentalsUncheckedUpdateManyWithoutUsersNestedInput
    user_roles_user_roles_assigned_byTousers?: user_rolesUncheckedUpdateManyWithoutUsers_user_roles_assigned_byTousersNestedInput
    user_roles_user_roles_revoked_byTousers?: user_rolesUncheckedUpdateManyWithoutUsers_user_roles_revoked_byTousersNestedInput
  }

  export type bookingsCreateWithoutUsersInput = {
    id?: string
    start_date: Date | string
    end_date: Date | string
    proposed_amount?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.booking_status
    cancelled_at?: Date | string | null
    cancellation_reason?: string | null
    created_at?: Date | string
    properties: propertiesCreateNestedOneWithoutBookingsInput
    rentals?: rentalsCreateNestedOneWithoutBookingsInput
  }

  export type bookingsUncheckedCreateWithoutUsersInput = {
    id?: string
    property_id: string
    start_date: Date | string
    end_date: Date | string
    proposed_amount?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.booking_status
    cancelled_at?: Date | string | null
    cancellation_reason?: string | null
    created_at?: Date | string
    rentals?: rentalsUncheckedCreateNestedOneWithoutBookingsInput
  }

  export type bookingsCreateOrConnectWithoutUsersInput = {
    where: bookingsWhereUniqueInput
    create: XOR<bookingsCreateWithoutUsersInput, bookingsUncheckedCreateWithoutUsersInput>
  }

  export type bookingsCreateManyUsersInputEnvelope = {
    data: bookingsCreateManyUsersInput | bookingsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type propertiesCreateWithoutUsers_properties_approved_byTousersInput = {
    id?: string
    title: string
    description?: string | null
    address: string
    city: string
    state: string
    pricing_unit: $Enums.pricing_unit
    base_price: Decimal | DecimalJsLike | number | string
    approval_status?: $Enums.property_approval_status
    availability_status?: $Enums.property_availability_status
    approved_at?: Date | string | null
    rejection_reason?: string | null
    created_at?: Date | string
    bookings?: bookingsCreateNestedManyWithoutPropertiesInput
    categories?: categoriesCreateNestedOneWithoutPropertiesInput
    users_properties_manager_idTousers: usersCreateNestedOneWithoutProperties_properties_manager_idTousersInput
    property_images?: property_imagesCreateNestedManyWithoutPropertiesInput
    rentals?: rentalsCreateNestedManyWithoutPropertiesInput
  }

  export type propertiesUncheckedCreateWithoutUsers_properties_approved_byTousersInput = {
    id?: string
    title: string
    description?: string | null
    address: string
    city: string
    state: string
    pricing_unit: $Enums.pricing_unit
    base_price: Decimal | DecimalJsLike | number | string
    approval_status?: $Enums.property_approval_status
    availability_status?: $Enums.property_availability_status
    category_id?: string | null
    manager_id: string
    approved_at?: Date | string | null
    rejection_reason?: string | null
    created_at?: Date | string
    bookings?: bookingsUncheckedCreateNestedManyWithoutPropertiesInput
    property_images?: property_imagesUncheckedCreateNestedManyWithoutPropertiesInput
    rentals?: rentalsUncheckedCreateNestedManyWithoutPropertiesInput
  }

  export type propertiesCreateOrConnectWithoutUsers_properties_approved_byTousersInput = {
    where: propertiesWhereUniqueInput
    create: XOR<propertiesCreateWithoutUsers_properties_approved_byTousersInput, propertiesUncheckedCreateWithoutUsers_properties_approved_byTousersInput>
  }

  export type propertiesCreateManyUsers_properties_approved_byTousersInputEnvelope = {
    data: propertiesCreateManyUsers_properties_approved_byTousersInput | propertiesCreateManyUsers_properties_approved_byTousersInput[]
    skipDuplicates?: boolean
  }

  export type propertiesCreateWithoutUsers_properties_manager_idTousersInput = {
    id?: string
    title: string
    description?: string | null
    address: string
    city: string
    state: string
    pricing_unit: $Enums.pricing_unit
    base_price: Decimal | DecimalJsLike | number | string
    approval_status?: $Enums.property_approval_status
    availability_status?: $Enums.property_availability_status
    approved_at?: Date | string | null
    rejection_reason?: string | null
    created_at?: Date | string
    bookings?: bookingsCreateNestedManyWithoutPropertiesInput
    users_properties_approved_byTousers?: usersCreateNestedOneWithoutProperties_properties_approved_byTousersInput
    categories?: categoriesCreateNestedOneWithoutPropertiesInput
    property_images?: property_imagesCreateNestedManyWithoutPropertiesInput
    rentals?: rentalsCreateNestedManyWithoutPropertiesInput
  }

  export type propertiesUncheckedCreateWithoutUsers_properties_manager_idTousersInput = {
    id?: string
    title: string
    description?: string | null
    address: string
    city: string
    state: string
    pricing_unit: $Enums.pricing_unit
    base_price: Decimal | DecimalJsLike | number | string
    approval_status?: $Enums.property_approval_status
    availability_status?: $Enums.property_availability_status
    category_id?: string | null
    approved_by?: string | null
    approved_at?: Date | string | null
    rejection_reason?: string | null
    created_at?: Date | string
    bookings?: bookingsUncheckedCreateNestedManyWithoutPropertiesInput
    property_images?: property_imagesUncheckedCreateNestedManyWithoutPropertiesInput
    rentals?: rentalsUncheckedCreateNestedManyWithoutPropertiesInput
  }

  export type propertiesCreateOrConnectWithoutUsers_properties_manager_idTousersInput = {
    where: propertiesWhereUniqueInput
    create: XOR<propertiesCreateWithoutUsers_properties_manager_idTousersInput, propertiesUncheckedCreateWithoutUsers_properties_manager_idTousersInput>
  }

  export type propertiesCreateManyUsers_properties_manager_idTousersInputEnvelope = {
    data: propertiesCreateManyUsers_properties_manager_idTousersInput | propertiesCreateManyUsers_properties_manager_idTousersInput[]
    skipDuplicates?: boolean
  }

  export type property_manager_applicationsCreateWithoutUsers_property_manager_applications_reviewed_byTousersInput = {
    id?: string
    reason: string
    status?: $Enums.manager_application_status
    reviewed_at?: Date | string | null
    created_at?: Date | string
    users_property_manager_applications_user_idTousers: usersCreateNestedOneWithoutProperty_manager_applications_property_manager_applications_user_idTousersInput
  }

  export type property_manager_applicationsUncheckedCreateWithoutUsers_property_manager_applications_reviewed_byTousersInput = {
    id?: string
    user_id: string
    reason: string
    status?: $Enums.manager_application_status
    reviewed_at?: Date | string | null
    created_at?: Date | string
  }

  export type property_manager_applicationsCreateOrConnectWithoutUsers_property_manager_applications_reviewed_byTousersInput = {
    where: property_manager_applicationsWhereUniqueInput
    create: XOR<property_manager_applicationsCreateWithoutUsers_property_manager_applications_reviewed_byTousersInput, property_manager_applicationsUncheckedCreateWithoutUsers_property_manager_applications_reviewed_byTousersInput>
  }

  export type property_manager_applicationsCreateManyUsers_property_manager_applications_reviewed_byTousersInputEnvelope = {
    data: property_manager_applicationsCreateManyUsers_property_manager_applications_reviewed_byTousersInput | property_manager_applicationsCreateManyUsers_property_manager_applications_reviewed_byTousersInput[]
    skipDuplicates?: boolean
  }

  export type property_manager_applicationsCreateWithoutUsers_property_manager_applications_user_idTousersInput = {
    id?: string
    reason: string
    status?: $Enums.manager_application_status
    reviewed_at?: Date | string | null
    created_at?: Date | string
    users_property_manager_applications_reviewed_byTousers?: usersCreateNestedOneWithoutProperty_manager_applications_property_manager_applications_reviewed_byTousersInput
  }

  export type property_manager_applicationsUncheckedCreateWithoutUsers_property_manager_applications_user_idTousersInput = {
    id?: string
    reason: string
    status?: $Enums.manager_application_status
    reviewed_by?: string | null
    reviewed_at?: Date | string | null
    created_at?: Date | string
  }

  export type property_manager_applicationsCreateOrConnectWithoutUsers_property_manager_applications_user_idTousersInput = {
    where: property_manager_applicationsWhereUniqueInput
    create: XOR<property_manager_applicationsCreateWithoutUsers_property_manager_applications_user_idTousersInput, property_manager_applicationsUncheckedCreateWithoutUsers_property_manager_applications_user_idTousersInput>
  }

  export type property_manager_applicationsCreateManyUsers_property_manager_applications_user_idTousersInputEnvelope = {
    data: property_manager_applicationsCreateManyUsers_property_manager_applications_user_idTousersInput | property_manager_applicationsCreateManyUsers_property_manager_applications_user_idTousersInput[]
    skipDuplicates?: boolean
  }

  export type rentalsCreateWithoutUsersInput = {
    id?: string
    lease_start: Date | string
    lease_end: Date | string
    pricing_unit: $Enums.pricing_unit
    agreed_price: Decimal | DecimalJsLike | number | string
    status?: $Enums.rental_status
    created_at?: Date | string
    payments?: paymentsCreateNestedManyWithoutRentalsInput
    bookings: bookingsCreateNestedOneWithoutRentalsInput
    properties: propertiesCreateNestedOneWithoutRentalsInput
  }

  export type rentalsUncheckedCreateWithoutUsersInput = {
    id?: string
    booking_id: string
    property_id: string
    lease_start: Date | string
    lease_end: Date | string
    pricing_unit: $Enums.pricing_unit
    agreed_price: Decimal | DecimalJsLike | number | string
    status?: $Enums.rental_status
    created_at?: Date | string
    payments?: paymentsUncheckedCreateNestedManyWithoutRentalsInput
  }

  export type rentalsCreateOrConnectWithoutUsersInput = {
    where: rentalsWhereUniqueInput
    create: XOR<rentalsCreateWithoutUsersInput, rentalsUncheckedCreateWithoutUsersInput>
  }

  export type rentalsCreateManyUsersInputEnvelope = {
    data: rentalsCreateManyUsersInput | rentalsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type user_rolesCreateWithoutUsers_user_roles_assigned_byTousersInput = {
    id?: string
    assigned_at?: Date | string
    revoked_at?: Date | string | null
    created_at?: Date | string
    users_user_roles_revoked_byTousers?: usersCreateNestedOneWithoutUser_roles_user_roles_revoked_byTousersInput
    roles: rolesCreateNestedOneWithoutUser_rolesInput
    users_user_roles_user_idTousers: usersCreateNestedOneWithoutUser_roles_user_roles_user_idTousersInput
  }

  export type user_rolesUncheckedCreateWithoutUsers_user_roles_assigned_byTousersInput = {
    id?: string
    user_id: string
    role_id: string
    assigned_at?: Date | string
    revoked_by?: string | null
    revoked_at?: Date | string | null
    created_at?: Date | string
  }

  export type user_rolesCreateOrConnectWithoutUsers_user_roles_assigned_byTousersInput = {
    where: user_rolesWhereUniqueInput
    create: XOR<user_rolesCreateWithoutUsers_user_roles_assigned_byTousersInput, user_rolesUncheckedCreateWithoutUsers_user_roles_assigned_byTousersInput>
  }

  export type user_rolesCreateManyUsers_user_roles_assigned_byTousersInputEnvelope = {
    data: user_rolesCreateManyUsers_user_roles_assigned_byTousersInput | user_rolesCreateManyUsers_user_roles_assigned_byTousersInput[]
    skipDuplicates?: boolean
  }

  export type user_rolesCreateWithoutUsers_user_roles_revoked_byTousersInput = {
    id?: string
    assigned_at?: Date | string
    revoked_at?: Date | string | null
    created_at?: Date | string
    users_user_roles_assigned_byTousers?: usersCreateNestedOneWithoutUser_roles_user_roles_assigned_byTousersInput
    roles: rolesCreateNestedOneWithoutUser_rolesInput
    users_user_roles_user_idTousers: usersCreateNestedOneWithoutUser_roles_user_roles_user_idTousersInput
  }

  export type user_rolesUncheckedCreateWithoutUsers_user_roles_revoked_byTousersInput = {
    id?: string
    user_id: string
    role_id: string
    assigned_by?: string | null
    assigned_at?: Date | string
    revoked_at?: Date | string | null
    created_at?: Date | string
  }

  export type user_rolesCreateOrConnectWithoutUsers_user_roles_revoked_byTousersInput = {
    where: user_rolesWhereUniqueInput
    create: XOR<user_rolesCreateWithoutUsers_user_roles_revoked_byTousersInput, user_rolesUncheckedCreateWithoutUsers_user_roles_revoked_byTousersInput>
  }

  export type user_rolesCreateManyUsers_user_roles_revoked_byTousersInputEnvelope = {
    data: user_rolesCreateManyUsers_user_roles_revoked_byTousersInput | user_rolesCreateManyUsers_user_roles_revoked_byTousersInput[]
    skipDuplicates?: boolean
  }

  export type user_rolesCreateWithoutUsers_user_roles_user_idTousersInput = {
    id?: string
    assigned_at?: Date | string
    revoked_at?: Date | string | null
    created_at?: Date | string
    users_user_roles_assigned_byTousers?: usersCreateNestedOneWithoutUser_roles_user_roles_assigned_byTousersInput
    users_user_roles_revoked_byTousers?: usersCreateNestedOneWithoutUser_roles_user_roles_revoked_byTousersInput
    roles: rolesCreateNestedOneWithoutUser_rolesInput
  }

  export type user_rolesUncheckedCreateWithoutUsers_user_roles_user_idTousersInput = {
    id?: string
    role_id: string
    assigned_by?: string | null
    assigned_at?: Date | string
    revoked_by?: string | null
    revoked_at?: Date | string | null
    created_at?: Date | string
  }

  export type user_rolesCreateOrConnectWithoutUsers_user_roles_user_idTousersInput = {
    where: user_rolesWhereUniqueInput
    create: XOR<user_rolesCreateWithoutUsers_user_roles_user_idTousersInput, user_rolesUncheckedCreateWithoutUsers_user_roles_user_idTousersInput>
  }

  export type user_rolesCreateManyUsers_user_roles_user_idTousersInputEnvelope = {
    data: user_rolesCreateManyUsers_user_roles_user_idTousersInput | user_rolesCreateManyUsers_user_roles_user_idTousersInput[]
    skipDuplicates?: boolean
  }

  export type bookingsUpsertWithWhereUniqueWithoutUsersInput = {
    where: bookingsWhereUniqueInput
    update: XOR<bookingsUpdateWithoutUsersInput, bookingsUncheckedUpdateWithoutUsersInput>
    create: XOR<bookingsCreateWithoutUsersInput, bookingsUncheckedCreateWithoutUsersInput>
  }

  export type bookingsUpdateWithWhereUniqueWithoutUsersInput = {
    where: bookingsWhereUniqueInput
    data: XOR<bookingsUpdateWithoutUsersInput, bookingsUncheckedUpdateWithoutUsersInput>
  }

  export type bookingsUpdateManyWithWhereWithoutUsersInput = {
    where: bookingsScalarWhereInput
    data: XOR<bookingsUpdateManyMutationInput, bookingsUncheckedUpdateManyWithoutUsersInput>
  }

  export type propertiesUpsertWithWhereUniqueWithoutUsers_properties_approved_byTousersInput = {
    where: propertiesWhereUniqueInput
    update: XOR<propertiesUpdateWithoutUsers_properties_approved_byTousersInput, propertiesUncheckedUpdateWithoutUsers_properties_approved_byTousersInput>
    create: XOR<propertiesCreateWithoutUsers_properties_approved_byTousersInput, propertiesUncheckedCreateWithoutUsers_properties_approved_byTousersInput>
  }

  export type propertiesUpdateWithWhereUniqueWithoutUsers_properties_approved_byTousersInput = {
    where: propertiesWhereUniqueInput
    data: XOR<propertiesUpdateWithoutUsers_properties_approved_byTousersInput, propertiesUncheckedUpdateWithoutUsers_properties_approved_byTousersInput>
  }

  export type propertiesUpdateManyWithWhereWithoutUsers_properties_approved_byTousersInput = {
    where: propertiesScalarWhereInput
    data: XOR<propertiesUpdateManyMutationInput, propertiesUncheckedUpdateManyWithoutUsers_properties_approved_byTousersInput>
  }

  export type propertiesUpsertWithWhereUniqueWithoutUsers_properties_manager_idTousersInput = {
    where: propertiesWhereUniqueInput
    update: XOR<propertiesUpdateWithoutUsers_properties_manager_idTousersInput, propertiesUncheckedUpdateWithoutUsers_properties_manager_idTousersInput>
    create: XOR<propertiesCreateWithoutUsers_properties_manager_idTousersInput, propertiesUncheckedCreateWithoutUsers_properties_manager_idTousersInput>
  }

  export type propertiesUpdateWithWhereUniqueWithoutUsers_properties_manager_idTousersInput = {
    where: propertiesWhereUniqueInput
    data: XOR<propertiesUpdateWithoutUsers_properties_manager_idTousersInput, propertiesUncheckedUpdateWithoutUsers_properties_manager_idTousersInput>
  }

  export type propertiesUpdateManyWithWhereWithoutUsers_properties_manager_idTousersInput = {
    where: propertiesScalarWhereInput
    data: XOR<propertiesUpdateManyMutationInput, propertiesUncheckedUpdateManyWithoutUsers_properties_manager_idTousersInput>
  }

  export type property_manager_applicationsUpsertWithWhereUniqueWithoutUsers_property_manager_applications_reviewed_byTousersInput = {
    where: property_manager_applicationsWhereUniqueInput
    update: XOR<property_manager_applicationsUpdateWithoutUsers_property_manager_applications_reviewed_byTousersInput, property_manager_applicationsUncheckedUpdateWithoutUsers_property_manager_applications_reviewed_byTousersInput>
    create: XOR<property_manager_applicationsCreateWithoutUsers_property_manager_applications_reviewed_byTousersInput, property_manager_applicationsUncheckedCreateWithoutUsers_property_manager_applications_reviewed_byTousersInput>
  }

  export type property_manager_applicationsUpdateWithWhereUniqueWithoutUsers_property_manager_applications_reviewed_byTousersInput = {
    where: property_manager_applicationsWhereUniqueInput
    data: XOR<property_manager_applicationsUpdateWithoutUsers_property_manager_applications_reviewed_byTousersInput, property_manager_applicationsUncheckedUpdateWithoutUsers_property_manager_applications_reviewed_byTousersInput>
  }

  export type property_manager_applicationsUpdateManyWithWhereWithoutUsers_property_manager_applications_reviewed_byTousersInput = {
    where: property_manager_applicationsScalarWhereInput
    data: XOR<property_manager_applicationsUpdateManyMutationInput, property_manager_applicationsUncheckedUpdateManyWithoutUsers_property_manager_applications_reviewed_byTousersInput>
  }

  export type property_manager_applicationsScalarWhereInput = {
    AND?: property_manager_applicationsScalarWhereInput | property_manager_applicationsScalarWhereInput[]
    OR?: property_manager_applicationsScalarWhereInput[]
    NOT?: property_manager_applicationsScalarWhereInput | property_manager_applicationsScalarWhereInput[]
    id?: UuidFilter<"property_manager_applications"> | string
    user_id?: UuidFilter<"property_manager_applications"> | string
    reason?: StringFilter<"property_manager_applications"> | string
    status?: Enummanager_application_statusFilter<"property_manager_applications"> | $Enums.manager_application_status
    reviewed_by?: UuidNullableFilter<"property_manager_applications"> | string | null
    reviewed_at?: DateTimeNullableFilter<"property_manager_applications"> | Date | string | null
    created_at?: DateTimeFilter<"property_manager_applications"> | Date | string
  }

  export type property_manager_applicationsUpsertWithWhereUniqueWithoutUsers_property_manager_applications_user_idTousersInput = {
    where: property_manager_applicationsWhereUniqueInput
    update: XOR<property_manager_applicationsUpdateWithoutUsers_property_manager_applications_user_idTousersInput, property_manager_applicationsUncheckedUpdateWithoutUsers_property_manager_applications_user_idTousersInput>
    create: XOR<property_manager_applicationsCreateWithoutUsers_property_manager_applications_user_idTousersInput, property_manager_applicationsUncheckedCreateWithoutUsers_property_manager_applications_user_idTousersInput>
  }

  export type property_manager_applicationsUpdateWithWhereUniqueWithoutUsers_property_manager_applications_user_idTousersInput = {
    where: property_manager_applicationsWhereUniqueInput
    data: XOR<property_manager_applicationsUpdateWithoutUsers_property_manager_applications_user_idTousersInput, property_manager_applicationsUncheckedUpdateWithoutUsers_property_manager_applications_user_idTousersInput>
  }

  export type property_manager_applicationsUpdateManyWithWhereWithoutUsers_property_manager_applications_user_idTousersInput = {
    where: property_manager_applicationsScalarWhereInput
    data: XOR<property_manager_applicationsUpdateManyMutationInput, property_manager_applicationsUncheckedUpdateManyWithoutUsers_property_manager_applications_user_idTousersInput>
  }

  export type rentalsUpsertWithWhereUniqueWithoutUsersInput = {
    where: rentalsWhereUniqueInput
    update: XOR<rentalsUpdateWithoutUsersInput, rentalsUncheckedUpdateWithoutUsersInput>
    create: XOR<rentalsCreateWithoutUsersInput, rentalsUncheckedCreateWithoutUsersInput>
  }

  export type rentalsUpdateWithWhereUniqueWithoutUsersInput = {
    where: rentalsWhereUniqueInput
    data: XOR<rentalsUpdateWithoutUsersInput, rentalsUncheckedUpdateWithoutUsersInput>
  }

  export type rentalsUpdateManyWithWhereWithoutUsersInput = {
    where: rentalsScalarWhereInput
    data: XOR<rentalsUpdateManyMutationInput, rentalsUncheckedUpdateManyWithoutUsersInput>
  }

  export type user_rolesUpsertWithWhereUniqueWithoutUsers_user_roles_assigned_byTousersInput = {
    where: user_rolesWhereUniqueInput
    update: XOR<user_rolesUpdateWithoutUsers_user_roles_assigned_byTousersInput, user_rolesUncheckedUpdateWithoutUsers_user_roles_assigned_byTousersInput>
    create: XOR<user_rolesCreateWithoutUsers_user_roles_assigned_byTousersInput, user_rolesUncheckedCreateWithoutUsers_user_roles_assigned_byTousersInput>
  }

  export type user_rolesUpdateWithWhereUniqueWithoutUsers_user_roles_assigned_byTousersInput = {
    where: user_rolesWhereUniqueInput
    data: XOR<user_rolesUpdateWithoutUsers_user_roles_assigned_byTousersInput, user_rolesUncheckedUpdateWithoutUsers_user_roles_assigned_byTousersInput>
  }

  export type user_rolesUpdateManyWithWhereWithoutUsers_user_roles_assigned_byTousersInput = {
    where: user_rolesScalarWhereInput
    data: XOR<user_rolesUpdateManyMutationInput, user_rolesUncheckedUpdateManyWithoutUsers_user_roles_assigned_byTousersInput>
  }

  export type user_rolesUpsertWithWhereUniqueWithoutUsers_user_roles_revoked_byTousersInput = {
    where: user_rolesWhereUniqueInput
    update: XOR<user_rolesUpdateWithoutUsers_user_roles_revoked_byTousersInput, user_rolesUncheckedUpdateWithoutUsers_user_roles_revoked_byTousersInput>
    create: XOR<user_rolesCreateWithoutUsers_user_roles_revoked_byTousersInput, user_rolesUncheckedCreateWithoutUsers_user_roles_revoked_byTousersInput>
  }

  export type user_rolesUpdateWithWhereUniqueWithoutUsers_user_roles_revoked_byTousersInput = {
    where: user_rolesWhereUniqueInput
    data: XOR<user_rolesUpdateWithoutUsers_user_roles_revoked_byTousersInput, user_rolesUncheckedUpdateWithoutUsers_user_roles_revoked_byTousersInput>
  }

  export type user_rolesUpdateManyWithWhereWithoutUsers_user_roles_revoked_byTousersInput = {
    where: user_rolesScalarWhereInput
    data: XOR<user_rolesUpdateManyMutationInput, user_rolesUncheckedUpdateManyWithoutUsers_user_roles_revoked_byTousersInput>
  }

  export type user_rolesUpsertWithWhereUniqueWithoutUsers_user_roles_user_idTousersInput = {
    where: user_rolesWhereUniqueInput
    update: XOR<user_rolesUpdateWithoutUsers_user_roles_user_idTousersInput, user_rolesUncheckedUpdateWithoutUsers_user_roles_user_idTousersInput>
    create: XOR<user_rolesCreateWithoutUsers_user_roles_user_idTousersInput, user_rolesUncheckedCreateWithoutUsers_user_roles_user_idTousersInput>
  }

  export type user_rolesUpdateWithWhereUniqueWithoutUsers_user_roles_user_idTousersInput = {
    where: user_rolesWhereUniqueInput
    data: XOR<user_rolesUpdateWithoutUsers_user_roles_user_idTousersInput, user_rolesUncheckedUpdateWithoutUsers_user_roles_user_idTousersInput>
  }

  export type user_rolesUpdateManyWithWhereWithoutUsers_user_roles_user_idTousersInput = {
    where: user_rolesScalarWhereInput
    data: XOR<user_rolesUpdateManyMutationInput, user_rolesUncheckedUpdateManyWithoutUsers_user_roles_user_idTousersInput>
  }

  export type propertiesCreateManyCategoriesInput = {
    id?: string
    title: string
    description?: string | null
    address: string
    city: string
    state: string
    pricing_unit: $Enums.pricing_unit
    base_price: Decimal | DecimalJsLike | number | string
    approval_status?: $Enums.property_approval_status
    availability_status?: $Enums.property_availability_status
    manager_id: string
    approved_by?: string | null
    approved_at?: Date | string | null
    rejection_reason?: string | null
    created_at?: Date | string
  }

  export type propertiesUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pricing_unit?: Enumpricing_unitFieldUpdateOperationsInput | $Enums.pricing_unit
    base_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    approval_status?: Enumproperty_approval_statusFieldUpdateOperationsInput | $Enums.property_approval_status
    availability_status?: Enumproperty_availability_statusFieldUpdateOperationsInput | $Enums.property_availability_status
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejection_reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: bookingsUpdateManyWithoutPropertiesNestedInput
    users_properties_approved_byTousers?: usersUpdateOneWithoutProperties_properties_approved_byTousersNestedInput
    users_properties_manager_idTousers?: usersUpdateOneRequiredWithoutProperties_properties_manager_idTousersNestedInput
    property_images?: property_imagesUpdateManyWithoutPropertiesNestedInput
    rentals?: rentalsUpdateManyWithoutPropertiesNestedInput
  }

  export type propertiesUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pricing_unit?: Enumpricing_unitFieldUpdateOperationsInput | $Enums.pricing_unit
    base_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    approval_status?: Enumproperty_approval_statusFieldUpdateOperationsInput | $Enums.property_approval_status
    availability_status?: Enumproperty_availability_statusFieldUpdateOperationsInput | $Enums.property_availability_status
    manager_id?: StringFieldUpdateOperationsInput | string
    approved_by?: NullableStringFieldUpdateOperationsInput | string | null
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejection_reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: bookingsUncheckedUpdateManyWithoutPropertiesNestedInput
    property_images?: property_imagesUncheckedUpdateManyWithoutPropertiesNestedInput
    rentals?: rentalsUncheckedUpdateManyWithoutPropertiesNestedInput
  }

  export type propertiesUncheckedUpdateManyWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pricing_unit?: Enumpricing_unitFieldUpdateOperationsInput | $Enums.pricing_unit
    base_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    approval_status?: Enumproperty_approval_statusFieldUpdateOperationsInput | $Enums.property_approval_status
    availability_status?: Enumproperty_availability_statusFieldUpdateOperationsInput | $Enums.property_availability_status
    manager_id?: StringFieldUpdateOperationsInput | string
    approved_by?: NullableStringFieldUpdateOperationsInput | string | null
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejection_reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bookingsCreateManyPropertiesInput = {
    id?: string
    user_id: string
    start_date: Date | string
    end_date: Date | string
    proposed_amount?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.booking_status
    cancelled_at?: Date | string | null
    cancellation_reason?: string | null
    created_at?: Date | string
  }

  export type property_imagesCreateManyPropertiesInput = {
    id?: string
    image_url: string
    created_at?: Date | string
  }

  export type rentalsCreateManyPropertiesInput = {
    id?: string
    booking_id: string
    user_id: string
    lease_start: Date | string
    lease_end: Date | string
    pricing_unit: $Enums.pricing_unit
    agreed_price: Decimal | DecimalJsLike | number | string
    status?: $Enums.rental_status
    created_at?: Date | string
  }

  export type bookingsUpdateWithoutPropertiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    proposed_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellation_reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutBookingsNestedInput
    rentals?: rentalsUpdateOneWithoutBookingsNestedInput
  }

  export type bookingsUncheckedUpdateWithoutPropertiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    proposed_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellation_reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    rentals?: rentalsUncheckedUpdateOneWithoutBookingsNestedInput
  }

  export type bookingsUncheckedUpdateManyWithoutPropertiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    proposed_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellation_reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type property_imagesUpdateWithoutPropertiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type property_imagesUncheckedUpdateWithoutPropertiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type property_imagesUncheckedUpdateManyWithoutPropertiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rentalsUpdateWithoutPropertiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    lease_start?: DateTimeFieldUpdateOperationsInput | Date | string
    lease_end?: DateTimeFieldUpdateOperationsInput | Date | string
    pricing_unit?: Enumpricing_unitFieldUpdateOperationsInput | $Enums.pricing_unit
    agreed_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: Enumrental_statusFieldUpdateOperationsInput | $Enums.rental_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: paymentsUpdateManyWithoutRentalsNestedInput
    bookings?: bookingsUpdateOneRequiredWithoutRentalsNestedInput
    users?: usersUpdateOneRequiredWithoutRentalsNestedInput
  }

  export type rentalsUncheckedUpdateWithoutPropertiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    booking_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    lease_start?: DateTimeFieldUpdateOperationsInput | Date | string
    lease_end?: DateTimeFieldUpdateOperationsInput | Date | string
    pricing_unit?: Enumpricing_unitFieldUpdateOperationsInput | $Enums.pricing_unit
    agreed_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: Enumrental_statusFieldUpdateOperationsInput | $Enums.rental_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: paymentsUncheckedUpdateManyWithoutRentalsNestedInput
  }

  export type rentalsUncheckedUpdateManyWithoutPropertiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    booking_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    lease_start?: DateTimeFieldUpdateOperationsInput | Date | string
    lease_end?: DateTimeFieldUpdateOperationsInput | Date | string
    pricing_unit?: Enumpricing_unitFieldUpdateOperationsInput | $Enums.pricing_unit
    agreed_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: Enumrental_statusFieldUpdateOperationsInput | $Enums.rental_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paymentsCreateManyRentalsInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    category: $Enums.payment_category
    payment_method?: string | null
    payment_status: $Enums.payment_status
    transaction_reference?: string | null
    paid_at?: Date | string | null
    created_at?: Date | string
  }

  export type paymentsUpdateWithoutRentalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: Enumpayment_categoryFieldUpdateOperationsInput | $Enums.payment_category
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    payment_status?: Enumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status
    transaction_reference?: NullableStringFieldUpdateOperationsInput | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paymentsUncheckedUpdateWithoutRentalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: Enumpayment_categoryFieldUpdateOperationsInput | $Enums.payment_category
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    payment_status?: Enumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status
    transaction_reference?: NullableStringFieldUpdateOperationsInput | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paymentsUncheckedUpdateManyWithoutRentalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: Enumpayment_categoryFieldUpdateOperationsInput | $Enums.payment_category
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    payment_status?: Enumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status
    transaction_reference?: NullableStringFieldUpdateOperationsInput | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_rolesCreateManyRolesInput = {
    id?: string
    user_id: string
    assigned_by?: string | null
    assigned_at?: Date | string
    revoked_by?: string | null
    revoked_at?: Date | string | null
    created_at?: Date | string
  }

  export type user_rolesUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users_user_roles_assigned_byTousers?: usersUpdateOneWithoutUser_roles_user_roles_assigned_byTousersNestedInput
    users_user_roles_revoked_byTousers?: usersUpdateOneWithoutUser_roles_user_roles_revoked_byTousersNestedInput
    users_user_roles_user_idTousers?: usersUpdateOneRequiredWithoutUser_roles_user_roles_user_idTousersNestedInput
  }

  export type user_rolesUncheckedUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    assigned_by?: NullableStringFieldUpdateOperationsInput | string | null
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked_by?: NullableStringFieldUpdateOperationsInput | string | null
    revoked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_rolesUncheckedUpdateManyWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    assigned_by?: NullableStringFieldUpdateOperationsInput | string | null
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked_by?: NullableStringFieldUpdateOperationsInput | string | null
    revoked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bookingsCreateManyUsersInput = {
    id?: string
    property_id: string
    start_date: Date | string
    end_date: Date | string
    proposed_amount?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.booking_status
    cancelled_at?: Date | string | null
    cancellation_reason?: string | null
    created_at?: Date | string
  }

  export type propertiesCreateManyUsers_properties_approved_byTousersInput = {
    id?: string
    title: string
    description?: string | null
    address: string
    city: string
    state: string
    pricing_unit: $Enums.pricing_unit
    base_price: Decimal | DecimalJsLike | number | string
    approval_status?: $Enums.property_approval_status
    availability_status?: $Enums.property_availability_status
    category_id?: string | null
    manager_id: string
    approved_at?: Date | string | null
    rejection_reason?: string | null
    created_at?: Date | string
  }

  export type propertiesCreateManyUsers_properties_manager_idTousersInput = {
    id?: string
    title: string
    description?: string | null
    address: string
    city: string
    state: string
    pricing_unit: $Enums.pricing_unit
    base_price: Decimal | DecimalJsLike | number | string
    approval_status?: $Enums.property_approval_status
    availability_status?: $Enums.property_availability_status
    category_id?: string | null
    approved_by?: string | null
    approved_at?: Date | string | null
    rejection_reason?: string | null
    created_at?: Date | string
  }

  export type property_manager_applicationsCreateManyUsers_property_manager_applications_reviewed_byTousersInput = {
    id?: string
    user_id: string
    reason: string
    status?: $Enums.manager_application_status
    reviewed_at?: Date | string | null
    created_at?: Date | string
  }

  export type property_manager_applicationsCreateManyUsers_property_manager_applications_user_idTousersInput = {
    id?: string
    reason: string
    status?: $Enums.manager_application_status
    reviewed_by?: string | null
    reviewed_at?: Date | string | null
    created_at?: Date | string
  }

  export type rentalsCreateManyUsersInput = {
    id?: string
    booking_id: string
    property_id: string
    lease_start: Date | string
    lease_end: Date | string
    pricing_unit: $Enums.pricing_unit
    agreed_price: Decimal | DecimalJsLike | number | string
    status?: $Enums.rental_status
    created_at?: Date | string
  }

  export type user_rolesCreateManyUsers_user_roles_assigned_byTousersInput = {
    id?: string
    user_id: string
    role_id: string
    assigned_at?: Date | string
    revoked_by?: string | null
    revoked_at?: Date | string | null
    created_at?: Date | string
  }

  export type user_rolesCreateManyUsers_user_roles_revoked_byTousersInput = {
    id?: string
    user_id: string
    role_id: string
    assigned_by?: string | null
    assigned_at?: Date | string
    revoked_at?: Date | string | null
    created_at?: Date | string
  }

  export type user_rolesCreateManyUsers_user_roles_user_idTousersInput = {
    id?: string
    role_id: string
    assigned_by?: string | null
    assigned_at?: Date | string
    revoked_by?: string | null
    revoked_at?: Date | string | null
    created_at?: Date | string
  }

  export type bookingsUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    proposed_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellation_reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: propertiesUpdateOneRequiredWithoutBookingsNestedInput
    rentals?: rentalsUpdateOneWithoutBookingsNestedInput
  }

  export type bookingsUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    property_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    proposed_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellation_reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    rentals?: rentalsUncheckedUpdateOneWithoutBookingsNestedInput
  }

  export type bookingsUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    property_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    proposed_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellation_reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type propertiesUpdateWithoutUsers_properties_approved_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pricing_unit?: Enumpricing_unitFieldUpdateOperationsInput | $Enums.pricing_unit
    base_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    approval_status?: Enumproperty_approval_statusFieldUpdateOperationsInput | $Enums.property_approval_status
    availability_status?: Enumproperty_availability_statusFieldUpdateOperationsInput | $Enums.property_availability_status
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejection_reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: bookingsUpdateManyWithoutPropertiesNestedInput
    categories?: categoriesUpdateOneWithoutPropertiesNestedInput
    users_properties_manager_idTousers?: usersUpdateOneRequiredWithoutProperties_properties_manager_idTousersNestedInput
    property_images?: property_imagesUpdateManyWithoutPropertiesNestedInput
    rentals?: rentalsUpdateManyWithoutPropertiesNestedInput
  }

  export type propertiesUncheckedUpdateWithoutUsers_properties_approved_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pricing_unit?: Enumpricing_unitFieldUpdateOperationsInput | $Enums.pricing_unit
    base_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    approval_status?: Enumproperty_approval_statusFieldUpdateOperationsInput | $Enums.property_approval_status
    availability_status?: Enumproperty_availability_statusFieldUpdateOperationsInput | $Enums.property_availability_status
    category_id?: NullableStringFieldUpdateOperationsInput | string | null
    manager_id?: StringFieldUpdateOperationsInput | string
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejection_reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: bookingsUncheckedUpdateManyWithoutPropertiesNestedInput
    property_images?: property_imagesUncheckedUpdateManyWithoutPropertiesNestedInput
    rentals?: rentalsUncheckedUpdateManyWithoutPropertiesNestedInput
  }

  export type propertiesUncheckedUpdateManyWithoutUsers_properties_approved_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pricing_unit?: Enumpricing_unitFieldUpdateOperationsInput | $Enums.pricing_unit
    base_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    approval_status?: Enumproperty_approval_statusFieldUpdateOperationsInput | $Enums.property_approval_status
    availability_status?: Enumproperty_availability_statusFieldUpdateOperationsInput | $Enums.property_availability_status
    category_id?: NullableStringFieldUpdateOperationsInput | string | null
    manager_id?: StringFieldUpdateOperationsInput | string
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejection_reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type propertiesUpdateWithoutUsers_properties_manager_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pricing_unit?: Enumpricing_unitFieldUpdateOperationsInput | $Enums.pricing_unit
    base_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    approval_status?: Enumproperty_approval_statusFieldUpdateOperationsInput | $Enums.property_approval_status
    availability_status?: Enumproperty_availability_statusFieldUpdateOperationsInput | $Enums.property_availability_status
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejection_reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: bookingsUpdateManyWithoutPropertiesNestedInput
    users_properties_approved_byTousers?: usersUpdateOneWithoutProperties_properties_approved_byTousersNestedInput
    categories?: categoriesUpdateOneWithoutPropertiesNestedInput
    property_images?: property_imagesUpdateManyWithoutPropertiesNestedInput
    rentals?: rentalsUpdateManyWithoutPropertiesNestedInput
  }

  export type propertiesUncheckedUpdateWithoutUsers_properties_manager_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pricing_unit?: Enumpricing_unitFieldUpdateOperationsInput | $Enums.pricing_unit
    base_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    approval_status?: Enumproperty_approval_statusFieldUpdateOperationsInput | $Enums.property_approval_status
    availability_status?: Enumproperty_availability_statusFieldUpdateOperationsInput | $Enums.property_availability_status
    category_id?: NullableStringFieldUpdateOperationsInput | string | null
    approved_by?: NullableStringFieldUpdateOperationsInput | string | null
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejection_reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: bookingsUncheckedUpdateManyWithoutPropertiesNestedInput
    property_images?: property_imagesUncheckedUpdateManyWithoutPropertiesNestedInput
    rentals?: rentalsUncheckedUpdateManyWithoutPropertiesNestedInput
  }

  export type propertiesUncheckedUpdateManyWithoutUsers_properties_manager_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pricing_unit?: Enumpricing_unitFieldUpdateOperationsInput | $Enums.pricing_unit
    base_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    approval_status?: Enumproperty_approval_statusFieldUpdateOperationsInput | $Enums.property_approval_status
    availability_status?: Enumproperty_availability_statusFieldUpdateOperationsInput | $Enums.property_availability_status
    category_id?: NullableStringFieldUpdateOperationsInput | string | null
    approved_by?: NullableStringFieldUpdateOperationsInput | string | null
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejection_reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type property_manager_applicationsUpdateWithoutUsers_property_manager_applications_reviewed_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: Enummanager_application_statusFieldUpdateOperationsInput | $Enums.manager_application_status
    reviewed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users_property_manager_applications_user_idTousers?: usersUpdateOneRequiredWithoutProperty_manager_applications_property_manager_applications_user_idTousersNestedInput
  }

  export type property_manager_applicationsUncheckedUpdateWithoutUsers_property_manager_applications_reviewed_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: Enummanager_application_statusFieldUpdateOperationsInput | $Enums.manager_application_status
    reviewed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type property_manager_applicationsUncheckedUpdateManyWithoutUsers_property_manager_applications_reviewed_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: Enummanager_application_statusFieldUpdateOperationsInput | $Enums.manager_application_status
    reviewed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type property_manager_applicationsUpdateWithoutUsers_property_manager_applications_user_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: Enummanager_application_statusFieldUpdateOperationsInput | $Enums.manager_application_status
    reviewed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users_property_manager_applications_reviewed_byTousers?: usersUpdateOneWithoutProperty_manager_applications_property_manager_applications_reviewed_byTousersNestedInput
  }

  export type property_manager_applicationsUncheckedUpdateWithoutUsers_property_manager_applications_user_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: Enummanager_application_statusFieldUpdateOperationsInput | $Enums.manager_application_status
    reviewed_by?: NullableStringFieldUpdateOperationsInput | string | null
    reviewed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type property_manager_applicationsUncheckedUpdateManyWithoutUsers_property_manager_applications_user_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: Enummanager_application_statusFieldUpdateOperationsInput | $Enums.manager_application_status
    reviewed_by?: NullableStringFieldUpdateOperationsInput | string | null
    reviewed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rentalsUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    lease_start?: DateTimeFieldUpdateOperationsInput | Date | string
    lease_end?: DateTimeFieldUpdateOperationsInput | Date | string
    pricing_unit?: Enumpricing_unitFieldUpdateOperationsInput | $Enums.pricing_unit
    agreed_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: Enumrental_statusFieldUpdateOperationsInput | $Enums.rental_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: paymentsUpdateManyWithoutRentalsNestedInput
    bookings?: bookingsUpdateOneRequiredWithoutRentalsNestedInput
    properties?: propertiesUpdateOneRequiredWithoutRentalsNestedInput
  }

  export type rentalsUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    booking_id?: StringFieldUpdateOperationsInput | string
    property_id?: StringFieldUpdateOperationsInput | string
    lease_start?: DateTimeFieldUpdateOperationsInput | Date | string
    lease_end?: DateTimeFieldUpdateOperationsInput | Date | string
    pricing_unit?: Enumpricing_unitFieldUpdateOperationsInput | $Enums.pricing_unit
    agreed_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: Enumrental_statusFieldUpdateOperationsInput | $Enums.rental_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: paymentsUncheckedUpdateManyWithoutRentalsNestedInput
  }

  export type rentalsUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    booking_id?: StringFieldUpdateOperationsInput | string
    property_id?: StringFieldUpdateOperationsInput | string
    lease_start?: DateTimeFieldUpdateOperationsInput | Date | string
    lease_end?: DateTimeFieldUpdateOperationsInput | Date | string
    pricing_unit?: Enumpricing_unitFieldUpdateOperationsInput | $Enums.pricing_unit
    agreed_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: Enumrental_statusFieldUpdateOperationsInput | $Enums.rental_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_rolesUpdateWithoutUsers_user_roles_assigned_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users_user_roles_revoked_byTousers?: usersUpdateOneWithoutUser_roles_user_roles_revoked_byTousersNestedInput
    roles?: rolesUpdateOneRequiredWithoutUser_rolesNestedInput
    users_user_roles_user_idTousers?: usersUpdateOneRequiredWithoutUser_roles_user_roles_user_idTousersNestedInput
  }

  export type user_rolesUncheckedUpdateWithoutUsers_user_roles_assigned_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    role_id?: StringFieldUpdateOperationsInput | string
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked_by?: NullableStringFieldUpdateOperationsInput | string | null
    revoked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_rolesUncheckedUpdateManyWithoutUsers_user_roles_assigned_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    role_id?: StringFieldUpdateOperationsInput | string
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked_by?: NullableStringFieldUpdateOperationsInput | string | null
    revoked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_rolesUpdateWithoutUsers_user_roles_revoked_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users_user_roles_assigned_byTousers?: usersUpdateOneWithoutUser_roles_user_roles_assigned_byTousersNestedInput
    roles?: rolesUpdateOneRequiredWithoutUser_rolesNestedInput
    users_user_roles_user_idTousers?: usersUpdateOneRequiredWithoutUser_roles_user_roles_user_idTousersNestedInput
  }

  export type user_rolesUncheckedUpdateWithoutUsers_user_roles_revoked_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    role_id?: StringFieldUpdateOperationsInput | string
    assigned_by?: NullableStringFieldUpdateOperationsInput | string | null
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_rolesUncheckedUpdateManyWithoutUsers_user_roles_revoked_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    role_id?: StringFieldUpdateOperationsInput | string
    assigned_by?: NullableStringFieldUpdateOperationsInput | string | null
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_rolesUpdateWithoutUsers_user_roles_user_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users_user_roles_assigned_byTousers?: usersUpdateOneWithoutUser_roles_user_roles_assigned_byTousersNestedInput
    users_user_roles_revoked_byTousers?: usersUpdateOneWithoutUser_roles_user_roles_revoked_byTousersNestedInput
    roles?: rolesUpdateOneRequiredWithoutUser_rolesNestedInput
  }

  export type user_rolesUncheckedUpdateWithoutUsers_user_roles_user_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    role_id?: StringFieldUpdateOperationsInput | string
    assigned_by?: NullableStringFieldUpdateOperationsInput | string | null
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked_by?: NullableStringFieldUpdateOperationsInput | string | null
    revoked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_rolesUncheckedUpdateManyWithoutUsers_user_roles_user_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    role_id?: StringFieldUpdateOperationsInput | string
    assigned_by?: NullableStringFieldUpdateOperationsInput | string | null
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked_by?: NullableStringFieldUpdateOperationsInput | string | null
    revoked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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