# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `kona`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*GetClientByLinkedAuthUid*](#getclientbylinkedauthuid)
- [**Mutations**](#mutations)
  - [*UpsertPlatformOwner*](#upsertplatformowner)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `kona`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `kona` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## GetClientByLinkedAuthUid
You can execute the `GetClientByLinkedAuthUid` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getClientByLinkedAuthUid(vars: GetClientByLinkedAuthUidVariables): QueryPromise<GetClientByLinkedAuthUidData, GetClientByLinkedAuthUidVariables>;

interface GetClientByLinkedAuthUidRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetClientByLinkedAuthUidVariables): QueryRef<GetClientByLinkedAuthUidData, GetClientByLinkedAuthUidVariables>;
}
export const getClientByLinkedAuthUidRef: GetClientByLinkedAuthUidRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getClientByLinkedAuthUid(dc: DataConnect, vars: GetClientByLinkedAuthUidVariables): QueryPromise<GetClientByLinkedAuthUidData, GetClientByLinkedAuthUidVariables>;

interface GetClientByLinkedAuthUidRef {
  ...
  (dc: DataConnect, vars: GetClientByLinkedAuthUidVariables): QueryRef<GetClientByLinkedAuthUidData, GetClientByLinkedAuthUidVariables>;
}
export const getClientByLinkedAuthUidRef: GetClientByLinkedAuthUidRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getClientByLinkedAuthUidRef:
```typescript
const name = getClientByLinkedAuthUidRef.operationName;
console.log(name);
```

### Variables
The `GetClientByLinkedAuthUid` query requires an argument of type `GetClientByLinkedAuthUidVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetClientByLinkedAuthUidVariables {
  authUid: string;
}
```
### Return Type
Recall that executing the `GetClientByLinkedAuthUid` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetClientByLinkedAuthUidData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetClientByLinkedAuthUidData {
  clients: ({
    id: UUIDString;
    companyName?: string | null;
    clientName?: string | null;
    email?: string | null;
    subscriptionStatus?: string | null;
    paddleSubscriptionId?: string | null;
    linkedAuthUid: string;
  } & Client_Key)[];
}
```
### Using `GetClientByLinkedAuthUid`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getClientByLinkedAuthUid, GetClientByLinkedAuthUidVariables } from '@dataconnect/generated';

// The `GetClientByLinkedAuthUid` query requires an argument of type `GetClientByLinkedAuthUidVariables`:
const getClientByLinkedAuthUidVars: GetClientByLinkedAuthUidVariables = {
  authUid: ..., 
};

// Call the `getClientByLinkedAuthUid()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getClientByLinkedAuthUid(getClientByLinkedAuthUidVars);
// Variables can be defined inline as well.
const { data } = await getClientByLinkedAuthUid({ authUid: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getClientByLinkedAuthUid(dataConnect, getClientByLinkedAuthUidVars);

console.log(data.clients);

// Or, you can use the `Promise` API.
getClientByLinkedAuthUid(getClientByLinkedAuthUidVars).then((response) => {
  const data = response.data;
  console.log(data.clients);
});
```

### Using `GetClientByLinkedAuthUid`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getClientByLinkedAuthUidRef, GetClientByLinkedAuthUidVariables } from '@dataconnect/generated';

// The `GetClientByLinkedAuthUid` query requires an argument of type `GetClientByLinkedAuthUidVariables`:
const getClientByLinkedAuthUidVars: GetClientByLinkedAuthUidVariables = {
  authUid: ..., 
};

// Call the `getClientByLinkedAuthUidRef()` function to get a reference to the query.
const ref = getClientByLinkedAuthUidRef(getClientByLinkedAuthUidVars);
// Variables can be defined inline as well.
const ref = getClientByLinkedAuthUidRef({ authUid: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getClientByLinkedAuthUidRef(dataConnect, getClientByLinkedAuthUidVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.clients);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.clients);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `kona` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## UpsertPlatformOwner
You can execute the `UpsertPlatformOwner` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
upsertPlatformOwner(vars?: UpsertPlatformOwnerVariables): MutationPromise<UpsertPlatformOwnerData, UpsertPlatformOwnerVariables>;

interface UpsertPlatformOwnerRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars?: UpsertPlatformOwnerVariables): MutationRef<UpsertPlatformOwnerData, UpsertPlatformOwnerVariables>;
}
export const upsertPlatformOwnerRef: UpsertPlatformOwnerRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
upsertPlatformOwner(dc: DataConnect, vars?: UpsertPlatformOwnerVariables): MutationPromise<UpsertPlatformOwnerData, UpsertPlatformOwnerVariables>;

interface UpsertPlatformOwnerRef {
  ...
  (dc: DataConnect, vars?: UpsertPlatformOwnerVariables): MutationRef<UpsertPlatformOwnerData, UpsertPlatformOwnerVariables>;
}
export const upsertPlatformOwnerRef: UpsertPlatformOwnerRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the upsertPlatformOwnerRef:
```typescript
const name = upsertPlatformOwnerRef.operationName;
console.log(name);
```

### Variables
The `UpsertPlatformOwner` mutation has an optional argument of type `UpsertPlatformOwnerVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpsertPlatformOwnerVariables {
  email?: string | null;
  displayName?: string | null;
}
```
### Return Type
Recall that executing the `UpsertPlatformOwner` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpsertPlatformOwnerData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpsertPlatformOwnerData {
  platformOwner_upsert: PlatformOwner_Key;
}
```
### Using `UpsertPlatformOwner`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, upsertPlatformOwner, UpsertPlatformOwnerVariables } from '@dataconnect/generated';

// The `UpsertPlatformOwner` mutation has an optional argument of type `UpsertPlatformOwnerVariables`:
const upsertPlatformOwnerVars: UpsertPlatformOwnerVariables = {
  email: ..., // optional
  displayName: ..., // optional
};

// Call the `upsertPlatformOwner()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await upsertPlatformOwner(upsertPlatformOwnerVars);
// Variables can be defined inline as well.
const { data } = await upsertPlatformOwner({ email: ..., displayName: ..., });
// Since all variables are optional for this mutation, you can omit the `UpsertPlatformOwnerVariables` argument.
const { data } = await upsertPlatformOwner();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await upsertPlatformOwner(dataConnect, upsertPlatformOwnerVars);

console.log(data.platformOwner_upsert);

// Or, you can use the `Promise` API.
upsertPlatformOwner(upsertPlatformOwnerVars).then((response) => {
  const data = response.data;
  console.log(data.platformOwner_upsert);
});
```

### Using `UpsertPlatformOwner`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, upsertPlatformOwnerRef, UpsertPlatformOwnerVariables } from '@dataconnect/generated';

// The `UpsertPlatformOwner` mutation has an optional argument of type `UpsertPlatformOwnerVariables`:
const upsertPlatformOwnerVars: UpsertPlatformOwnerVariables = {
  email: ..., // optional
  displayName: ..., // optional
};

// Call the `upsertPlatformOwnerRef()` function to get a reference to the mutation.
const ref = upsertPlatformOwnerRef(upsertPlatformOwnerVars);
// Variables can be defined inline as well.
const ref = upsertPlatformOwnerRef({ email: ..., displayName: ..., });
// Since all variables are optional for this mutation, you can omit the `UpsertPlatformOwnerVariables` argument.
const ref = upsertPlatformOwnerRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = upsertPlatformOwnerRef(dataConnect, upsertPlatformOwnerVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.platformOwner_upsert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.platformOwner_upsert);
});
```

