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
  - [*GetClientById*](#getclientbyid)
  - [*GetClientAiBotConfigByAccessToken*](#getclientaibotconfigbyaccesstoken)
  - [*ListClientInboundContactsByClient*](#listclientinboundcontactsbyclient)
  - [*ListClients*](#listclients)
  - [*ListPlatformInboundContacts*](#listplatforminboundcontacts)
  - [*ListPlatformOutboundContacts*](#listplatformoutboundcontacts)
  - [*ListPlatformOutboundOutreachEvents*](#listplatformoutboundoutreachevents)
  - [*ListPlatformAgentActivities*](#listplatformagentactivities)
  - [*ListClientAiBotPerformanceEvents*](#listclientaibotperformanceevents)
  - [*GetClientConversation*](#getclientconversation)
  - [*ListClientConversationsByClientAndToken*](#listclientconversationsbyclientandtoken)
  - [*ListClientConversationsByAccessToken*](#listclientconversationsbyaccesstoken)
  - [*GetClientByLinkedAuthUidAdmin*](#getclientbylinkedauthuidadmin)
  - [*GetClientByPaddleSubscriptionIdAdmin*](#getclientbypaddlesubscriptionidadmin)
- [**Mutations**](#mutations)
  - [*UpsertPlatformOwner*](#upsertplatformowner)
  - [*CreateClient*](#createclient)
  - [*UpdateClient*](#updateclient)
  - [*CreateClientAiBotConfig*](#createclientaibotconfig)
  - [*UpdateClientAiBotConfig*](#updateclientaibotconfig)
  - [*CreateClientInboundContact*](#createclientinboundcontact)
  - [*UpdateClientInboundContact*](#updateclientinboundcontact)
  - [*CreatePlatformInboundContact*](#createplatforminboundcontact)
  - [*CreatePlatformOutboundContact*](#createplatformoutboundcontact)
  - [*CreatePlatformOutboundOutreachEvent*](#createplatformoutboundoutreachevent)
  - [*CreatePlatformAgentActivity*](#createplatformagentactivity)
  - [*CreateClientAiBotPerformanceEvent*](#createclientaibotperformanceevent)
  - [*CreateClientConversation*](#createclientconversation)
  - [*UpdateClientConversation*](#updateclientconversation)
  - [*CreateClientAdmin*](#createclientadmin)
  - [*UpdateClientAdmin*](#updateclientadmin)
  - [*WebhookCreateClientWithConfig*](#webhookcreateclientwithconfig)
  - [*CreateClientAiBotConfigAdmin*](#createclientaibotconfigadmin)
  - [*UpdateClientAiBotConfigAdmin*](#updateclientaibotconfigadmin)

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
    industry?: string | null;
    subscriptionStatus?: string | null;
    paddleSubscriptionId?: string | null;
    linkedAuthUid: string;
    createdAt: TimestampString;
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

## GetClientById
You can execute the `GetClientById` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getClientById(vars: GetClientByIdVariables): QueryPromise<GetClientByIdData, GetClientByIdVariables>;

interface GetClientByIdRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetClientByIdVariables): QueryRef<GetClientByIdData, GetClientByIdVariables>;
}
export const getClientByIdRef: GetClientByIdRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getClientById(dc: DataConnect, vars: GetClientByIdVariables): QueryPromise<GetClientByIdData, GetClientByIdVariables>;

interface GetClientByIdRef {
  ...
  (dc: DataConnect, vars: GetClientByIdVariables): QueryRef<GetClientByIdData, GetClientByIdVariables>;
}
export const getClientByIdRef: GetClientByIdRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getClientByIdRef:
```typescript
const name = getClientByIdRef.operationName;
console.log(name);
```

### Variables
The `GetClientById` query requires an argument of type `GetClientByIdVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetClientByIdVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `GetClientById` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetClientByIdData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetClientByIdData {
  client?: {
    id: UUIDString;
    companyName?: string | null;
    clientName?: string | null;
    email?: string | null;
    industry?: string | null;
    subscriptionStatus?: string | null;
    paddleSubscriptionId?: string | null;
    linkedAuthUid: string;
    createdAt: TimestampString;
  } & Client_Key;
}
```
### Using `GetClientById`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getClientById, GetClientByIdVariables } from '@dataconnect/generated';

// The `GetClientById` query requires an argument of type `GetClientByIdVariables`:
const getClientByIdVars: GetClientByIdVariables = {
  id: ..., 
};

// Call the `getClientById()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getClientById(getClientByIdVars);
// Variables can be defined inline as well.
const { data } = await getClientById({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getClientById(dataConnect, getClientByIdVars);

console.log(data.client);

// Or, you can use the `Promise` API.
getClientById(getClientByIdVars).then((response) => {
  const data = response.data;
  console.log(data.client);
});
```

### Using `GetClientById`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getClientByIdRef, GetClientByIdVariables } from '@dataconnect/generated';

// The `GetClientById` query requires an argument of type `GetClientByIdVariables`:
const getClientByIdVars: GetClientByIdVariables = {
  id: ..., 
};

// Call the `getClientByIdRef()` function to get a reference to the query.
const ref = getClientByIdRef(getClientByIdVars);
// Variables can be defined inline as well.
const ref = getClientByIdRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getClientByIdRef(dataConnect, getClientByIdVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.client);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.client);
});
```

## GetClientAiBotConfigByAccessToken
You can execute the `GetClientAiBotConfigByAccessToken` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getClientAiBotConfigByAccessToken(vars: GetClientAiBotConfigByAccessTokenVariables): QueryPromise<GetClientAiBotConfigByAccessTokenData, GetClientAiBotConfigByAccessTokenVariables>;

interface GetClientAiBotConfigByAccessTokenRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetClientAiBotConfigByAccessTokenVariables): QueryRef<GetClientAiBotConfigByAccessTokenData, GetClientAiBotConfigByAccessTokenVariables>;
}
export const getClientAiBotConfigByAccessTokenRef: GetClientAiBotConfigByAccessTokenRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getClientAiBotConfigByAccessToken(dc: DataConnect, vars: GetClientAiBotConfigByAccessTokenVariables): QueryPromise<GetClientAiBotConfigByAccessTokenData, GetClientAiBotConfigByAccessTokenVariables>;

interface GetClientAiBotConfigByAccessTokenRef {
  ...
  (dc: DataConnect, vars: GetClientAiBotConfigByAccessTokenVariables): QueryRef<GetClientAiBotConfigByAccessTokenData, GetClientAiBotConfigByAccessTokenVariables>;
}
export const getClientAiBotConfigByAccessTokenRef: GetClientAiBotConfigByAccessTokenRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getClientAiBotConfigByAccessTokenRef:
```typescript
const name = getClientAiBotConfigByAccessTokenRef.operationName;
console.log(name);
```

### Variables
The `GetClientAiBotConfigByAccessToken` query requires an argument of type `GetClientAiBotConfigByAccessTokenVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetClientAiBotConfigByAccessTokenVariables {
  accessToken: string;
}
```
### Return Type
Recall that executing the `GetClientAiBotConfigByAccessToken` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetClientAiBotConfigByAccessTokenData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetClientAiBotConfigByAccessTokenData {
  clientAiBotConfigs: ({
    id: UUIDString;
    botName?: string | null;
    accessToken: string;
    aiModelApiKey?: string | null;
    schedulingApiKey?: string | null;
    knowledgeBaseJson?: unknown | null;
    welcomeMessage?: string | null;
    customInstructions?: string | null;
    client: {
      id: UUIDString;
      subscriptionStatus?: string | null;
      companyName?: string | null;
    } & Client_Key;
  } & ClientAiBotConfig_Key)[];
}
```
### Using `GetClientAiBotConfigByAccessToken`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getClientAiBotConfigByAccessToken, GetClientAiBotConfigByAccessTokenVariables } from '@dataconnect/generated';

// The `GetClientAiBotConfigByAccessToken` query requires an argument of type `GetClientAiBotConfigByAccessTokenVariables`:
const getClientAiBotConfigByAccessTokenVars: GetClientAiBotConfigByAccessTokenVariables = {
  accessToken: ..., 
};

// Call the `getClientAiBotConfigByAccessToken()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getClientAiBotConfigByAccessToken(getClientAiBotConfigByAccessTokenVars);
// Variables can be defined inline as well.
const { data } = await getClientAiBotConfigByAccessToken({ accessToken: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getClientAiBotConfigByAccessToken(dataConnect, getClientAiBotConfigByAccessTokenVars);

console.log(data.clientAiBotConfigs);

// Or, you can use the `Promise` API.
getClientAiBotConfigByAccessToken(getClientAiBotConfigByAccessTokenVars).then((response) => {
  const data = response.data;
  console.log(data.clientAiBotConfigs);
});
```

### Using `GetClientAiBotConfigByAccessToken`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getClientAiBotConfigByAccessTokenRef, GetClientAiBotConfigByAccessTokenVariables } from '@dataconnect/generated';

// The `GetClientAiBotConfigByAccessToken` query requires an argument of type `GetClientAiBotConfigByAccessTokenVariables`:
const getClientAiBotConfigByAccessTokenVars: GetClientAiBotConfigByAccessTokenVariables = {
  accessToken: ..., 
};

// Call the `getClientAiBotConfigByAccessTokenRef()` function to get a reference to the query.
const ref = getClientAiBotConfigByAccessTokenRef(getClientAiBotConfigByAccessTokenVars);
// Variables can be defined inline as well.
const ref = getClientAiBotConfigByAccessTokenRef({ accessToken: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getClientAiBotConfigByAccessTokenRef(dataConnect, getClientAiBotConfigByAccessTokenVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.clientAiBotConfigs);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.clientAiBotConfigs);
});
```

## ListClientInboundContactsByClient
You can execute the `ListClientInboundContactsByClient` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listClientInboundContactsByClient(vars: ListClientInboundContactsByClientVariables): QueryPromise<ListClientInboundContactsByClientData, ListClientInboundContactsByClientVariables>;

interface ListClientInboundContactsByClientRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListClientInboundContactsByClientVariables): QueryRef<ListClientInboundContactsByClientData, ListClientInboundContactsByClientVariables>;
}
export const listClientInboundContactsByClientRef: ListClientInboundContactsByClientRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listClientInboundContactsByClient(dc: DataConnect, vars: ListClientInboundContactsByClientVariables): QueryPromise<ListClientInboundContactsByClientData, ListClientInboundContactsByClientVariables>;

interface ListClientInboundContactsByClientRef {
  ...
  (dc: DataConnect, vars: ListClientInboundContactsByClientVariables): QueryRef<ListClientInboundContactsByClientData, ListClientInboundContactsByClientVariables>;
}
export const listClientInboundContactsByClientRef: ListClientInboundContactsByClientRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listClientInboundContactsByClientRef:
```typescript
const name = listClientInboundContactsByClientRef.operationName;
console.log(name);
```

### Variables
The `ListClientInboundContactsByClient` query requires an argument of type `ListClientInboundContactsByClientVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ListClientInboundContactsByClientVariables {
  clientId: UUIDString;
}
```
### Return Type
Recall that executing the `ListClientInboundContactsByClient` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListClientInboundContactsByClientData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListClientInboundContactsByClientData {
  clientInboundContacts: ({
    id: UUIDString;
    companyName?: string | null;
    websiteUrl?: string | null;
    contactStatus?: string | null;
    contactEmail?: string | null;
    initialPitchDraft?: string | null;
    identifiedPainPoints?: string | null;
    createdAt: TimestampString;
  } & ClientInboundContact_Key)[];
}
```
### Using `ListClientInboundContactsByClient`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listClientInboundContactsByClient, ListClientInboundContactsByClientVariables } from '@dataconnect/generated';

// The `ListClientInboundContactsByClient` query requires an argument of type `ListClientInboundContactsByClientVariables`:
const listClientInboundContactsByClientVars: ListClientInboundContactsByClientVariables = {
  clientId: ..., 
};

// Call the `listClientInboundContactsByClient()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listClientInboundContactsByClient(listClientInboundContactsByClientVars);
// Variables can be defined inline as well.
const { data } = await listClientInboundContactsByClient({ clientId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listClientInboundContactsByClient(dataConnect, listClientInboundContactsByClientVars);

console.log(data.clientInboundContacts);

// Or, you can use the `Promise` API.
listClientInboundContactsByClient(listClientInboundContactsByClientVars).then((response) => {
  const data = response.data;
  console.log(data.clientInboundContacts);
});
```

### Using `ListClientInboundContactsByClient`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listClientInboundContactsByClientRef, ListClientInboundContactsByClientVariables } from '@dataconnect/generated';

// The `ListClientInboundContactsByClient` query requires an argument of type `ListClientInboundContactsByClientVariables`:
const listClientInboundContactsByClientVars: ListClientInboundContactsByClientVariables = {
  clientId: ..., 
};

// Call the `listClientInboundContactsByClientRef()` function to get a reference to the query.
const ref = listClientInboundContactsByClientRef(listClientInboundContactsByClientVars);
// Variables can be defined inline as well.
const ref = listClientInboundContactsByClientRef({ clientId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listClientInboundContactsByClientRef(dataConnect, listClientInboundContactsByClientVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.clientInboundContacts);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.clientInboundContacts);
});
```

## ListClients
You can execute the `ListClients` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listClients(): QueryPromise<ListClientsData, undefined>;

interface ListClientsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListClientsData, undefined>;
}
export const listClientsRef: ListClientsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listClients(dc: DataConnect): QueryPromise<ListClientsData, undefined>;

interface ListClientsRef {
  ...
  (dc: DataConnect): QueryRef<ListClientsData, undefined>;
}
export const listClientsRef: ListClientsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listClientsRef:
```typescript
const name = listClientsRef.operationName;
console.log(name);
```

### Variables
The `ListClients` query has no variables.
### Return Type
Recall that executing the `ListClients` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListClientsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListClientsData {
  clients: ({
    id: UUIDString;
    linkedAuthUid: string;
    companyName?: string | null;
    clientName?: string | null;
    email?: string | null;
    industry?: string | null;
    subscriptionStatus?: string | null;
    paddleSubscriptionId?: string | null;
    createdAt: TimestampString;
  } & Client_Key)[];
}
```
### Using `ListClients`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listClients } from '@dataconnect/generated';


// Call the `listClients()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listClients();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listClients(dataConnect);

console.log(data.clients);

// Or, you can use the `Promise` API.
listClients().then((response) => {
  const data = response.data;
  console.log(data.clients);
});
```

### Using `ListClients`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listClientsRef } from '@dataconnect/generated';


// Call the `listClientsRef()` function to get a reference to the query.
const ref = listClientsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listClientsRef(dataConnect);

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

## ListPlatformInboundContacts
You can execute the `ListPlatformInboundContacts` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listPlatformInboundContacts(): QueryPromise<ListPlatformInboundContactsData, undefined>;

interface ListPlatformInboundContactsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListPlatformInboundContactsData, undefined>;
}
export const listPlatformInboundContactsRef: ListPlatformInboundContactsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listPlatformInboundContacts(dc: DataConnect): QueryPromise<ListPlatformInboundContactsData, undefined>;

interface ListPlatformInboundContactsRef {
  ...
  (dc: DataConnect): QueryRef<ListPlatformInboundContactsData, undefined>;
}
export const listPlatformInboundContactsRef: ListPlatformInboundContactsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listPlatformInboundContactsRef:
```typescript
const name = listPlatformInboundContactsRef.operationName;
console.log(name);
```

### Variables
The `ListPlatformInboundContacts` query has no variables.
### Return Type
Recall that executing the `ListPlatformInboundContacts` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListPlatformInboundContactsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListPlatformInboundContactsData {
  platformInboundContacts: ({
    id: UUIDString;
    companyName?: string | null;
    websiteUrl?: string | null;
    contactStatus?: string | null;
    contactEmail?: string | null;
    initialPitchDraft?: string | null;
    identifiedPainPoints?: string | null;
    nativeAgent?: boolean | null;
    createdAt: TimestampString;
  } & PlatformInboundContact_Key)[];
}
```
### Using `ListPlatformInboundContacts`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listPlatformInboundContacts } from '@dataconnect/generated';


// Call the `listPlatformInboundContacts()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listPlatformInboundContacts();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listPlatformInboundContacts(dataConnect);

console.log(data.platformInboundContacts);

// Or, you can use the `Promise` API.
listPlatformInboundContacts().then((response) => {
  const data = response.data;
  console.log(data.platformInboundContacts);
});
```

### Using `ListPlatformInboundContacts`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listPlatformInboundContactsRef } from '@dataconnect/generated';


// Call the `listPlatformInboundContactsRef()` function to get a reference to the query.
const ref = listPlatformInboundContactsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listPlatformInboundContactsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.platformInboundContacts);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.platformInboundContacts);
});
```

## ListPlatformOutboundContacts
You can execute the `ListPlatformOutboundContacts` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listPlatformOutboundContacts(): QueryPromise<ListPlatformOutboundContactsData, undefined>;

interface ListPlatformOutboundContactsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListPlatformOutboundContactsData, undefined>;
}
export const listPlatformOutboundContactsRef: ListPlatformOutboundContactsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listPlatformOutboundContacts(dc: DataConnect): QueryPromise<ListPlatformOutboundContactsData, undefined>;

interface ListPlatformOutboundContactsRef {
  ...
  (dc: DataConnect): QueryRef<ListPlatformOutboundContactsData, undefined>;
}
export const listPlatformOutboundContactsRef: ListPlatformOutboundContactsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listPlatformOutboundContactsRef:
```typescript
const name = listPlatformOutboundContactsRef.operationName;
console.log(name);
```

### Variables
The `ListPlatformOutboundContacts` query has no variables.
### Return Type
Recall that executing the `ListPlatformOutboundContacts` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListPlatformOutboundContactsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListPlatformOutboundContactsData {
  platformOutboundContacts: ({
    id: UUIDString;
    scrapedData?: unknown | null;
    hasExistingAI?: boolean | null;
    auditDate?: DateString | null;
    aiDetectionDetails?: unknown | null;
    createdAt: TimestampString;
  } & PlatformOutboundContact_Key)[];
}
```
### Using `ListPlatformOutboundContacts`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listPlatformOutboundContacts } from '@dataconnect/generated';


// Call the `listPlatformOutboundContacts()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listPlatformOutboundContacts();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listPlatformOutboundContacts(dataConnect);

console.log(data.platformOutboundContacts);

// Or, you can use the `Promise` API.
listPlatformOutboundContacts().then((response) => {
  const data = response.data;
  console.log(data.platformOutboundContacts);
});
```

### Using `ListPlatformOutboundContacts`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listPlatformOutboundContactsRef } from '@dataconnect/generated';


// Call the `listPlatformOutboundContactsRef()` function to get a reference to the query.
const ref = listPlatformOutboundContactsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listPlatformOutboundContactsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.platformOutboundContacts);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.platformOutboundContacts);
});
```

## ListPlatformOutboundOutreachEvents
You can execute the `ListPlatformOutboundOutreachEvents` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listPlatformOutboundOutreachEvents(): QueryPromise<ListPlatformOutboundOutreachEventsData, undefined>;

interface ListPlatformOutboundOutreachEventsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListPlatformOutboundOutreachEventsData, undefined>;
}
export const listPlatformOutboundOutreachEventsRef: ListPlatformOutboundOutreachEventsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listPlatformOutboundOutreachEvents(dc: DataConnect): QueryPromise<ListPlatformOutboundOutreachEventsData, undefined>;

interface ListPlatformOutboundOutreachEventsRef {
  ...
  (dc: DataConnect): QueryRef<ListPlatformOutboundOutreachEventsData, undefined>;
}
export const listPlatformOutboundOutreachEventsRef: ListPlatformOutboundOutreachEventsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listPlatformOutboundOutreachEventsRef:
```typescript
const name = listPlatformOutboundOutreachEventsRef.operationName;
console.log(name);
```

### Variables
The `ListPlatformOutboundOutreachEvents` query has no variables.
### Return Type
Recall that executing the `ListPlatformOutboundOutreachEvents` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListPlatformOutboundOutreachEventsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListPlatformOutboundOutreachEventsData {
  platformOutboundOutreachEvents: ({
    id: UUIDString;
    outreachType?: string | null;
    status?: string | null;
    sendDate?: DateString | null;
    messageContent?: string | null;
    adminNotes?: string | null;
    createdAt: TimestampString;
    platformOutboundContact: {
      id: UUIDString;
    } & PlatformOutboundContact_Key;
  } & PlatformOutboundOutreachEvent_Key)[];
}
```
### Using `ListPlatformOutboundOutreachEvents`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listPlatformOutboundOutreachEvents } from '@dataconnect/generated';


// Call the `listPlatformOutboundOutreachEvents()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listPlatformOutboundOutreachEvents();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listPlatformOutboundOutreachEvents(dataConnect);

console.log(data.platformOutboundOutreachEvents);

// Or, you can use the `Promise` API.
listPlatformOutboundOutreachEvents().then((response) => {
  const data = response.data;
  console.log(data.platformOutboundOutreachEvents);
});
```

### Using `ListPlatformOutboundOutreachEvents`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listPlatformOutboundOutreachEventsRef } from '@dataconnect/generated';


// Call the `listPlatformOutboundOutreachEventsRef()` function to get a reference to the query.
const ref = listPlatformOutboundOutreachEventsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listPlatformOutboundOutreachEventsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.platformOutboundOutreachEvents);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.platformOutboundOutreachEvents);
});
```

## ListPlatformAgentActivities
You can execute the `ListPlatformAgentActivities` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listPlatformAgentActivities(): QueryPromise<ListPlatformAgentActivitiesData, undefined>;

interface ListPlatformAgentActivitiesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListPlatformAgentActivitiesData, undefined>;
}
export const listPlatformAgentActivitiesRef: ListPlatformAgentActivitiesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listPlatformAgentActivities(dc: DataConnect): QueryPromise<ListPlatformAgentActivitiesData, undefined>;

interface ListPlatformAgentActivitiesRef {
  ...
  (dc: DataConnect): QueryRef<ListPlatformAgentActivitiesData, undefined>;
}
export const listPlatformAgentActivitiesRef: ListPlatformAgentActivitiesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listPlatformAgentActivitiesRef:
```typescript
const name = listPlatformAgentActivitiesRef.operationName;
console.log(name);
```

### Variables
The `ListPlatformAgentActivities` query has no variables.
### Return Type
Recall that executing the `ListPlatformAgentActivities` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListPlatformAgentActivitiesData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListPlatformAgentActivitiesData {
  platformAgentActivities: ({
    id: UUIDString;
    occurredAt: TimestampString;
    agentType?: string | null;
    action?: string | null;
    targetUrl?: string | null;
    outcome?: string | null;
    tokensUsed?: number | null;
    durationMs?: number | null;
    metadata?: unknown | null;
  } & PlatformAgentActivity_Key)[];
}
```
### Using `ListPlatformAgentActivities`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listPlatformAgentActivities } from '@dataconnect/generated';


// Call the `listPlatformAgentActivities()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listPlatformAgentActivities();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listPlatformAgentActivities(dataConnect);

console.log(data.platformAgentActivities);

// Or, you can use the `Promise` API.
listPlatformAgentActivities().then((response) => {
  const data = response.data;
  console.log(data.platformAgentActivities);
});
```

### Using `ListPlatformAgentActivities`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listPlatformAgentActivitiesRef } from '@dataconnect/generated';


// Call the `listPlatformAgentActivitiesRef()` function to get a reference to the query.
const ref = listPlatformAgentActivitiesRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listPlatformAgentActivitiesRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.platformAgentActivities);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.platformAgentActivities);
});
```

## ListClientAiBotPerformanceEvents
You can execute the `ListClientAiBotPerformanceEvents` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listClientAiBotPerformanceEvents(vars: ListClientAiBotPerformanceEventsVariables): QueryPromise<ListClientAiBotPerformanceEventsData, ListClientAiBotPerformanceEventsVariables>;

interface ListClientAiBotPerformanceEventsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListClientAiBotPerformanceEventsVariables): QueryRef<ListClientAiBotPerformanceEventsData, ListClientAiBotPerformanceEventsVariables>;
}
export const listClientAiBotPerformanceEventsRef: ListClientAiBotPerformanceEventsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listClientAiBotPerformanceEvents(dc: DataConnect, vars: ListClientAiBotPerformanceEventsVariables): QueryPromise<ListClientAiBotPerformanceEventsData, ListClientAiBotPerformanceEventsVariables>;

interface ListClientAiBotPerformanceEventsRef {
  ...
  (dc: DataConnect, vars: ListClientAiBotPerformanceEventsVariables): QueryRef<ListClientAiBotPerformanceEventsData, ListClientAiBotPerformanceEventsVariables>;
}
export const listClientAiBotPerformanceEventsRef: ListClientAiBotPerformanceEventsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listClientAiBotPerformanceEventsRef:
```typescript
const name = listClientAiBotPerformanceEventsRef.operationName;
console.log(name);
```

### Variables
The `ListClientAiBotPerformanceEvents` query requires an argument of type `ListClientAiBotPerformanceEventsVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ListClientAiBotPerformanceEventsVariables {
  clientId: UUIDString;
}
```
### Return Type
Recall that executing the `ListClientAiBotPerformanceEvents` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListClientAiBotPerformanceEventsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListClientAiBotPerformanceEventsData {
  clientAiBotPerformanceEvents: ({
    id: UUIDString;
    occurredAt: TimestampString;
    eventType?: string | null;
    sessionDurationMs?: number | null;
    messageCount?: number | null;
    tokensUsed?: number | null;
    metadata?: unknown | null;
  } & ClientAiBotPerformanceEvent_Key)[];
}
```
### Using `ListClientAiBotPerformanceEvents`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listClientAiBotPerformanceEvents, ListClientAiBotPerformanceEventsVariables } from '@dataconnect/generated';

// The `ListClientAiBotPerformanceEvents` query requires an argument of type `ListClientAiBotPerformanceEventsVariables`:
const listClientAiBotPerformanceEventsVars: ListClientAiBotPerformanceEventsVariables = {
  clientId: ..., 
};

// Call the `listClientAiBotPerformanceEvents()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listClientAiBotPerformanceEvents(listClientAiBotPerformanceEventsVars);
// Variables can be defined inline as well.
const { data } = await listClientAiBotPerformanceEvents({ clientId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listClientAiBotPerformanceEvents(dataConnect, listClientAiBotPerformanceEventsVars);

console.log(data.clientAiBotPerformanceEvents);

// Or, you can use the `Promise` API.
listClientAiBotPerformanceEvents(listClientAiBotPerformanceEventsVars).then((response) => {
  const data = response.data;
  console.log(data.clientAiBotPerformanceEvents);
});
```

### Using `ListClientAiBotPerformanceEvents`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listClientAiBotPerformanceEventsRef, ListClientAiBotPerformanceEventsVariables } from '@dataconnect/generated';

// The `ListClientAiBotPerformanceEvents` query requires an argument of type `ListClientAiBotPerformanceEventsVariables`:
const listClientAiBotPerformanceEventsVars: ListClientAiBotPerformanceEventsVariables = {
  clientId: ..., 
};

// Call the `listClientAiBotPerformanceEventsRef()` function to get a reference to the query.
const ref = listClientAiBotPerformanceEventsRef(listClientAiBotPerformanceEventsVars);
// Variables can be defined inline as well.
const ref = listClientAiBotPerformanceEventsRef({ clientId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listClientAiBotPerformanceEventsRef(dataConnect, listClientAiBotPerformanceEventsVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.clientAiBotPerformanceEvents);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.clientAiBotPerformanceEvents);
});
```

## GetClientConversation
You can execute the `GetClientConversation` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getClientConversation(vars: GetClientConversationVariables): QueryPromise<GetClientConversationData, GetClientConversationVariables>;

interface GetClientConversationRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetClientConversationVariables): QueryRef<GetClientConversationData, GetClientConversationVariables>;
}
export const getClientConversationRef: GetClientConversationRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getClientConversation(dc: DataConnect, vars: GetClientConversationVariables): QueryPromise<GetClientConversationData, GetClientConversationVariables>;

interface GetClientConversationRef {
  ...
  (dc: DataConnect, vars: GetClientConversationVariables): QueryRef<GetClientConversationData, GetClientConversationVariables>;
}
export const getClientConversationRef: GetClientConversationRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getClientConversationRef:
```typescript
const name = getClientConversationRef.operationName;
console.log(name);
```

### Variables
The `GetClientConversation` query requires an argument of type `GetClientConversationVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetClientConversationVariables {
  id: UUIDString;
  accessToken: string;
}
```
### Return Type
Recall that executing the `GetClientConversation` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetClientConversationData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetClientConversationData {
  clientConversations: ({
    id: UUIDString;
    accessToken: string;
    messages?: unknown | null;
    createdAt: TimestampString;
    updatedAt: TimestampString;
    client: {
      id: UUIDString;
    } & Client_Key;
  } & ClientConversation_Key)[];
}
```
### Using `GetClientConversation`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getClientConversation, GetClientConversationVariables } from '@dataconnect/generated';

// The `GetClientConversation` query requires an argument of type `GetClientConversationVariables`:
const getClientConversationVars: GetClientConversationVariables = {
  id: ..., 
  accessToken: ..., 
};

// Call the `getClientConversation()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getClientConversation(getClientConversationVars);
// Variables can be defined inline as well.
const { data } = await getClientConversation({ id: ..., accessToken: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getClientConversation(dataConnect, getClientConversationVars);

console.log(data.clientConversations);

// Or, you can use the `Promise` API.
getClientConversation(getClientConversationVars).then((response) => {
  const data = response.data;
  console.log(data.clientConversations);
});
```

### Using `GetClientConversation`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getClientConversationRef, GetClientConversationVariables } from '@dataconnect/generated';

// The `GetClientConversation` query requires an argument of type `GetClientConversationVariables`:
const getClientConversationVars: GetClientConversationVariables = {
  id: ..., 
  accessToken: ..., 
};

// Call the `getClientConversationRef()` function to get a reference to the query.
const ref = getClientConversationRef(getClientConversationVars);
// Variables can be defined inline as well.
const ref = getClientConversationRef({ id: ..., accessToken: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getClientConversationRef(dataConnect, getClientConversationVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.clientConversations);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.clientConversations);
});
```

## ListClientConversationsByClientAndToken
You can execute the `ListClientConversationsByClientAndToken` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listClientConversationsByClientAndToken(vars: ListClientConversationsByClientAndTokenVariables): QueryPromise<ListClientConversationsByClientAndTokenData, ListClientConversationsByClientAndTokenVariables>;

interface ListClientConversationsByClientAndTokenRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListClientConversationsByClientAndTokenVariables): QueryRef<ListClientConversationsByClientAndTokenData, ListClientConversationsByClientAndTokenVariables>;
}
export const listClientConversationsByClientAndTokenRef: ListClientConversationsByClientAndTokenRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listClientConversationsByClientAndToken(dc: DataConnect, vars: ListClientConversationsByClientAndTokenVariables): QueryPromise<ListClientConversationsByClientAndTokenData, ListClientConversationsByClientAndTokenVariables>;

interface ListClientConversationsByClientAndTokenRef {
  ...
  (dc: DataConnect, vars: ListClientConversationsByClientAndTokenVariables): QueryRef<ListClientConversationsByClientAndTokenData, ListClientConversationsByClientAndTokenVariables>;
}
export const listClientConversationsByClientAndTokenRef: ListClientConversationsByClientAndTokenRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listClientConversationsByClientAndTokenRef:
```typescript
const name = listClientConversationsByClientAndTokenRef.operationName;
console.log(name);
```

### Variables
The `ListClientConversationsByClientAndToken` query requires an argument of type `ListClientConversationsByClientAndTokenVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ListClientConversationsByClientAndTokenVariables {
  clientId: UUIDString;
  accessToken: string;
}
```
### Return Type
Recall that executing the `ListClientConversationsByClientAndToken` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListClientConversationsByClientAndTokenData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListClientConversationsByClientAndTokenData {
  clientConversations: ({
    id: UUIDString;
    accessToken: string;
    messages?: unknown | null;
    createdAt: TimestampString;
    updatedAt: TimestampString;
  } & ClientConversation_Key)[];
}
```
### Using `ListClientConversationsByClientAndToken`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listClientConversationsByClientAndToken, ListClientConversationsByClientAndTokenVariables } from '@dataconnect/generated';

// The `ListClientConversationsByClientAndToken` query requires an argument of type `ListClientConversationsByClientAndTokenVariables`:
const listClientConversationsByClientAndTokenVars: ListClientConversationsByClientAndTokenVariables = {
  clientId: ..., 
  accessToken: ..., 
};

// Call the `listClientConversationsByClientAndToken()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listClientConversationsByClientAndToken(listClientConversationsByClientAndTokenVars);
// Variables can be defined inline as well.
const { data } = await listClientConversationsByClientAndToken({ clientId: ..., accessToken: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listClientConversationsByClientAndToken(dataConnect, listClientConversationsByClientAndTokenVars);

console.log(data.clientConversations);

// Or, you can use the `Promise` API.
listClientConversationsByClientAndToken(listClientConversationsByClientAndTokenVars).then((response) => {
  const data = response.data;
  console.log(data.clientConversations);
});
```

### Using `ListClientConversationsByClientAndToken`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listClientConversationsByClientAndTokenRef, ListClientConversationsByClientAndTokenVariables } from '@dataconnect/generated';

// The `ListClientConversationsByClientAndToken` query requires an argument of type `ListClientConversationsByClientAndTokenVariables`:
const listClientConversationsByClientAndTokenVars: ListClientConversationsByClientAndTokenVariables = {
  clientId: ..., 
  accessToken: ..., 
};

// Call the `listClientConversationsByClientAndTokenRef()` function to get a reference to the query.
const ref = listClientConversationsByClientAndTokenRef(listClientConversationsByClientAndTokenVars);
// Variables can be defined inline as well.
const ref = listClientConversationsByClientAndTokenRef({ clientId: ..., accessToken: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listClientConversationsByClientAndTokenRef(dataConnect, listClientConversationsByClientAndTokenVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.clientConversations);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.clientConversations);
});
```

## ListClientConversationsByAccessToken
You can execute the `ListClientConversationsByAccessToken` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listClientConversationsByAccessToken(vars: ListClientConversationsByAccessTokenVariables): QueryPromise<ListClientConversationsByAccessTokenData, ListClientConversationsByAccessTokenVariables>;

interface ListClientConversationsByAccessTokenRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListClientConversationsByAccessTokenVariables): QueryRef<ListClientConversationsByAccessTokenData, ListClientConversationsByAccessTokenVariables>;
}
export const listClientConversationsByAccessTokenRef: ListClientConversationsByAccessTokenRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listClientConversationsByAccessToken(dc: DataConnect, vars: ListClientConversationsByAccessTokenVariables): QueryPromise<ListClientConversationsByAccessTokenData, ListClientConversationsByAccessTokenVariables>;

interface ListClientConversationsByAccessTokenRef {
  ...
  (dc: DataConnect, vars: ListClientConversationsByAccessTokenVariables): QueryRef<ListClientConversationsByAccessTokenData, ListClientConversationsByAccessTokenVariables>;
}
export const listClientConversationsByAccessTokenRef: ListClientConversationsByAccessTokenRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listClientConversationsByAccessTokenRef:
```typescript
const name = listClientConversationsByAccessTokenRef.operationName;
console.log(name);
```

### Variables
The `ListClientConversationsByAccessToken` query requires an argument of type `ListClientConversationsByAccessTokenVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ListClientConversationsByAccessTokenVariables {
  accessToken: string;
}
```
### Return Type
Recall that executing the `ListClientConversationsByAccessToken` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListClientConversationsByAccessTokenData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListClientConversationsByAccessTokenData {
  clientConversations: ({
    id: UUIDString;
    accessToken: string;
    messages?: unknown | null;
    createdAt: TimestampString;
    updatedAt: TimestampString;
  } & ClientConversation_Key)[];
}
```
### Using `ListClientConversationsByAccessToken`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listClientConversationsByAccessToken, ListClientConversationsByAccessTokenVariables } from '@dataconnect/generated';

// The `ListClientConversationsByAccessToken` query requires an argument of type `ListClientConversationsByAccessTokenVariables`:
const listClientConversationsByAccessTokenVars: ListClientConversationsByAccessTokenVariables = {
  accessToken: ..., 
};

// Call the `listClientConversationsByAccessToken()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listClientConversationsByAccessToken(listClientConversationsByAccessTokenVars);
// Variables can be defined inline as well.
const { data } = await listClientConversationsByAccessToken({ accessToken: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listClientConversationsByAccessToken(dataConnect, listClientConversationsByAccessTokenVars);

console.log(data.clientConversations);

// Or, you can use the `Promise` API.
listClientConversationsByAccessToken(listClientConversationsByAccessTokenVars).then((response) => {
  const data = response.data;
  console.log(data.clientConversations);
});
```

### Using `ListClientConversationsByAccessToken`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listClientConversationsByAccessTokenRef, ListClientConversationsByAccessTokenVariables } from '@dataconnect/generated';

// The `ListClientConversationsByAccessToken` query requires an argument of type `ListClientConversationsByAccessTokenVariables`:
const listClientConversationsByAccessTokenVars: ListClientConversationsByAccessTokenVariables = {
  accessToken: ..., 
};

// Call the `listClientConversationsByAccessTokenRef()` function to get a reference to the query.
const ref = listClientConversationsByAccessTokenRef(listClientConversationsByAccessTokenVars);
// Variables can be defined inline as well.
const ref = listClientConversationsByAccessTokenRef({ accessToken: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listClientConversationsByAccessTokenRef(dataConnect, listClientConversationsByAccessTokenVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.clientConversations);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.clientConversations);
});
```

## GetClientByLinkedAuthUidAdmin
You can execute the `GetClientByLinkedAuthUidAdmin` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getClientByLinkedAuthUidAdmin(vars: GetClientByLinkedAuthUidAdminVariables): QueryPromise<GetClientByLinkedAuthUidAdminData, GetClientByLinkedAuthUidAdminVariables>;

interface GetClientByLinkedAuthUidAdminRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetClientByLinkedAuthUidAdminVariables): QueryRef<GetClientByLinkedAuthUidAdminData, GetClientByLinkedAuthUidAdminVariables>;
}
export const getClientByLinkedAuthUidAdminRef: GetClientByLinkedAuthUidAdminRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getClientByLinkedAuthUidAdmin(dc: DataConnect, vars: GetClientByLinkedAuthUidAdminVariables): QueryPromise<GetClientByLinkedAuthUidAdminData, GetClientByLinkedAuthUidAdminVariables>;

interface GetClientByLinkedAuthUidAdminRef {
  ...
  (dc: DataConnect, vars: GetClientByLinkedAuthUidAdminVariables): QueryRef<GetClientByLinkedAuthUidAdminData, GetClientByLinkedAuthUidAdminVariables>;
}
export const getClientByLinkedAuthUidAdminRef: GetClientByLinkedAuthUidAdminRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getClientByLinkedAuthUidAdminRef:
```typescript
const name = getClientByLinkedAuthUidAdminRef.operationName;
console.log(name);
```

### Variables
The `GetClientByLinkedAuthUidAdmin` query requires an argument of type `GetClientByLinkedAuthUidAdminVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetClientByLinkedAuthUidAdminVariables {
  authUid: string;
}
```
### Return Type
Recall that executing the `GetClientByLinkedAuthUidAdmin` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetClientByLinkedAuthUidAdminData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetClientByLinkedAuthUidAdminData {
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
### Using `GetClientByLinkedAuthUidAdmin`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getClientByLinkedAuthUidAdmin, GetClientByLinkedAuthUidAdminVariables } from '@dataconnect/generated';

// The `GetClientByLinkedAuthUidAdmin` query requires an argument of type `GetClientByLinkedAuthUidAdminVariables`:
const getClientByLinkedAuthUidAdminVars: GetClientByLinkedAuthUidAdminVariables = {
  authUid: ..., 
};

// Call the `getClientByLinkedAuthUidAdmin()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getClientByLinkedAuthUidAdmin(getClientByLinkedAuthUidAdminVars);
// Variables can be defined inline as well.
const { data } = await getClientByLinkedAuthUidAdmin({ authUid: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getClientByLinkedAuthUidAdmin(dataConnect, getClientByLinkedAuthUidAdminVars);

console.log(data.clients);

// Or, you can use the `Promise` API.
getClientByLinkedAuthUidAdmin(getClientByLinkedAuthUidAdminVars).then((response) => {
  const data = response.data;
  console.log(data.clients);
});
```

### Using `GetClientByLinkedAuthUidAdmin`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getClientByLinkedAuthUidAdminRef, GetClientByLinkedAuthUidAdminVariables } from '@dataconnect/generated';

// The `GetClientByLinkedAuthUidAdmin` query requires an argument of type `GetClientByLinkedAuthUidAdminVariables`:
const getClientByLinkedAuthUidAdminVars: GetClientByLinkedAuthUidAdminVariables = {
  authUid: ..., 
};

// Call the `getClientByLinkedAuthUidAdminRef()` function to get a reference to the query.
const ref = getClientByLinkedAuthUidAdminRef(getClientByLinkedAuthUidAdminVars);
// Variables can be defined inline as well.
const ref = getClientByLinkedAuthUidAdminRef({ authUid: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getClientByLinkedAuthUidAdminRef(dataConnect, getClientByLinkedAuthUidAdminVars);

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

## GetClientByPaddleSubscriptionIdAdmin
You can execute the `GetClientByPaddleSubscriptionIdAdmin` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getClientByPaddleSubscriptionIdAdmin(vars: GetClientByPaddleSubscriptionIdAdminVariables): QueryPromise<GetClientByPaddleSubscriptionIdAdminData, GetClientByPaddleSubscriptionIdAdminVariables>;

interface GetClientByPaddleSubscriptionIdAdminRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetClientByPaddleSubscriptionIdAdminVariables): QueryRef<GetClientByPaddleSubscriptionIdAdminData, GetClientByPaddleSubscriptionIdAdminVariables>;
}
export const getClientByPaddleSubscriptionIdAdminRef: GetClientByPaddleSubscriptionIdAdminRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getClientByPaddleSubscriptionIdAdmin(dc: DataConnect, vars: GetClientByPaddleSubscriptionIdAdminVariables): QueryPromise<GetClientByPaddleSubscriptionIdAdminData, GetClientByPaddleSubscriptionIdAdminVariables>;

interface GetClientByPaddleSubscriptionIdAdminRef {
  ...
  (dc: DataConnect, vars: GetClientByPaddleSubscriptionIdAdminVariables): QueryRef<GetClientByPaddleSubscriptionIdAdminData, GetClientByPaddleSubscriptionIdAdminVariables>;
}
export const getClientByPaddleSubscriptionIdAdminRef: GetClientByPaddleSubscriptionIdAdminRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getClientByPaddleSubscriptionIdAdminRef:
```typescript
const name = getClientByPaddleSubscriptionIdAdminRef.operationName;
console.log(name);
```

### Variables
The `GetClientByPaddleSubscriptionIdAdmin` query requires an argument of type `GetClientByPaddleSubscriptionIdAdminVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetClientByPaddleSubscriptionIdAdminVariables {
  paddleSubscriptionId: string;
}
```
### Return Type
Recall that executing the `GetClientByPaddleSubscriptionIdAdmin` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetClientByPaddleSubscriptionIdAdminData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetClientByPaddleSubscriptionIdAdminData {
  clients: ({
    id: UUIDString;
    linkedAuthUid: string;
    subscriptionStatus?: string | null;
    paddleSubscriptionId?: string | null;
  } & Client_Key)[];
}
```
### Using `GetClientByPaddleSubscriptionIdAdmin`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getClientByPaddleSubscriptionIdAdmin, GetClientByPaddleSubscriptionIdAdminVariables } from '@dataconnect/generated';

// The `GetClientByPaddleSubscriptionIdAdmin` query requires an argument of type `GetClientByPaddleSubscriptionIdAdminVariables`:
const getClientByPaddleSubscriptionIdAdminVars: GetClientByPaddleSubscriptionIdAdminVariables = {
  paddleSubscriptionId: ..., 
};

// Call the `getClientByPaddleSubscriptionIdAdmin()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getClientByPaddleSubscriptionIdAdmin(getClientByPaddleSubscriptionIdAdminVars);
// Variables can be defined inline as well.
const { data } = await getClientByPaddleSubscriptionIdAdmin({ paddleSubscriptionId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getClientByPaddleSubscriptionIdAdmin(dataConnect, getClientByPaddleSubscriptionIdAdminVars);

console.log(data.clients);

// Or, you can use the `Promise` API.
getClientByPaddleSubscriptionIdAdmin(getClientByPaddleSubscriptionIdAdminVars).then((response) => {
  const data = response.data;
  console.log(data.clients);
});
```

### Using `GetClientByPaddleSubscriptionIdAdmin`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getClientByPaddleSubscriptionIdAdminRef, GetClientByPaddleSubscriptionIdAdminVariables } from '@dataconnect/generated';

// The `GetClientByPaddleSubscriptionIdAdmin` query requires an argument of type `GetClientByPaddleSubscriptionIdAdminVariables`:
const getClientByPaddleSubscriptionIdAdminVars: GetClientByPaddleSubscriptionIdAdminVariables = {
  paddleSubscriptionId: ..., 
};

// Call the `getClientByPaddleSubscriptionIdAdminRef()` function to get a reference to the query.
const ref = getClientByPaddleSubscriptionIdAdminRef(getClientByPaddleSubscriptionIdAdminVars);
// Variables can be defined inline as well.
const ref = getClientByPaddleSubscriptionIdAdminRef({ paddleSubscriptionId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getClientByPaddleSubscriptionIdAdminRef(dataConnect, getClientByPaddleSubscriptionIdAdminVars);

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

## CreateClient
You can execute the `CreateClient` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createClient(vars?: CreateClientVariables): MutationPromise<CreateClientData, CreateClientVariables>;

interface CreateClientRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars?: CreateClientVariables): MutationRef<CreateClientData, CreateClientVariables>;
}
export const createClientRef: CreateClientRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createClient(dc: DataConnect, vars?: CreateClientVariables): MutationPromise<CreateClientData, CreateClientVariables>;

interface CreateClientRef {
  ...
  (dc: DataConnect, vars?: CreateClientVariables): MutationRef<CreateClientData, CreateClientVariables>;
}
export const createClientRef: CreateClientRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createClientRef:
```typescript
const name = createClientRef.operationName;
console.log(name);
```

### Variables
The `CreateClient` mutation has an optional argument of type `CreateClientVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateClientVariables {
  companyName?: string | null;
  clientName?: string | null;
  email?: string | null;
  industry?: string | null;
}
```
### Return Type
Recall that executing the `CreateClient` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateClientData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateClientData {
  client_insert: Client_Key;
}
```
### Using `CreateClient`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createClient, CreateClientVariables } from '@dataconnect/generated';

// The `CreateClient` mutation has an optional argument of type `CreateClientVariables`:
const createClientVars: CreateClientVariables = {
  companyName: ..., // optional
  clientName: ..., // optional
  email: ..., // optional
  industry: ..., // optional
};

// Call the `createClient()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createClient(createClientVars);
// Variables can be defined inline as well.
const { data } = await createClient({ companyName: ..., clientName: ..., email: ..., industry: ..., });
// Since all variables are optional for this mutation, you can omit the `CreateClientVariables` argument.
const { data } = await createClient();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createClient(dataConnect, createClientVars);

console.log(data.client_insert);

// Or, you can use the `Promise` API.
createClient(createClientVars).then((response) => {
  const data = response.data;
  console.log(data.client_insert);
});
```

### Using `CreateClient`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createClientRef, CreateClientVariables } from '@dataconnect/generated';

// The `CreateClient` mutation has an optional argument of type `CreateClientVariables`:
const createClientVars: CreateClientVariables = {
  companyName: ..., // optional
  clientName: ..., // optional
  email: ..., // optional
  industry: ..., // optional
};

// Call the `createClientRef()` function to get a reference to the mutation.
const ref = createClientRef(createClientVars);
// Variables can be defined inline as well.
const ref = createClientRef({ companyName: ..., clientName: ..., email: ..., industry: ..., });
// Since all variables are optional for this mutation, you can omit the `CreateClientVariables` argument.
const ref = createClientRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createClientRef(dataConnect, createClientVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.client_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.client_insert);
});
```

## UpdateClient
You can execute the `UpdateClient` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateClient(vars: UpdateClientVariables): MutationPromise<UpdateClientData, UpdateClientVariables>;

interface UpdateClientRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateClientVariables): MutationRef<UpdateClientData, UpdateClientVariables>;
}
export const updateClientRef: UpdateClientRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateClient(dc: DataConnect, vars: UpdateClientVariables): MutationPromise<UpdateClientData, UpdateClientVariables>;

interface UpdateClientRef {
  ...
  (dc: DataConnect, vars: UpdateClientVariables): MutationRef<UpdateClientData, UpdateClientVariables>;
}
export const updateClientRef: UpdateClientRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateClientRef:
```typescript
const name = updateClientRef.operationName;
console.log(name);
```

### Variables
The `UpdateClient` mutation requires an argument of type `UpdateClientVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateClientVariables {
  id: UUIDString;
  companyName?: string | null;
  clientName?: string | null;
  email?: string | null;
  industry?: string | null;
  subscriptionStatus?: string | null;
  paddleSubscriptionId?: string | null;
}
```
### Return Type
Recall that executing the `UpdateClient` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateClientData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateClientData {
  client_update?: Client_Key | null;
}
```
### Using `UpdateClient`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateClient, UpdateClientVariables } from '@dataconnect/generated';

// The `UpdateClient` mutation requires an argument of type `UpdateClientVariables`:
const updateClientVars: UpdateClientVariables = {
  id: ..., 
  companyName: ..., // optional
  clientName: ..., // optional
  email: ..., // optional
  industry: ..., // optional
  subscriptionStatus: ..., // optional
  paddleSubscriptionId: ..., // optional
};

// Call the `updateClient()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateClient(updateClientVars);
// Variables can be defined inline as well.
const { data } = await updateClient({ id: ..., companyName: ..., clientName: ..., email: ..., industry: ..., subscriptionStatus: ..., paddleSubscriptionId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateClient(dataConnect, updateClientVars);

console.log(data.client_update);

// Or, you can use the `Promise` API.
updateClient(updateClientVars).then((response) => {
  const data = response.data;
  console.log(data.client_update);
});
```

### Using `UpdateClient`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateClientRef, UpdateClientVariables } from '@dataconnect/generated';

// The `UpdateClient` mutation requires an argument of type `UpdateClientVariables`:
const updateClientVars: UpdateClientVariables = {
  id: ..., 
  companyName: ..., // optional
  clientName: ..., // optional
  email: ..., // optional
  industry: ..., // optional
  subscriptionStatus: ..., // optional
  paddleSubscriptionId: ..., // optional
};

// Call the `updateClientRef()` function to get a reference to the mutation.
const ref = updateClientRef(updateClientVars);
// Variables can be defined inline as well.
const ref = updateClientRef({ id: ..., companyName: ..., clientName: ..., email: ..., industry: ..., subscriptionStatus: ..., paddleSubscriptionId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateClientRef(dataConnect, updateClientVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.client_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.client_update);
});
```

## CreateClientAiBotConfig
You can execute the `CreateClientAiBotConfig` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createClientAiBotConfig(vars: CreateClientAiBotConfigVariables): MutationPromise<CreateClientAiBotConfigData, CreateClientAiBotConfigVariables>;

interface CreateClientAiBotConfigRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateClientAiBotConfigVariables): MutationRef<CreateClientAiBotConfigData, CreateClientAiBotConfigVariables>;
}
export const createClientAiBotConfigRef: CreateClientAiBotConfigRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createClientAiBotConfig(dc: DataConnect, vars: CreateClientAiBotConfigVariables): MutationPromise<CreateClientAiBotConfigData, CreateClientAiBotConfigVariables>;

interface CreateClientAiBotConfigRef {
  ...
  (dc: DataConnect, vars: CreateClientAiBotConfigVariables): MutationRef<CreateClientAiBotConfigData, CreateClientAiBotConfigVariables>;
}
export const createClientAiBotConfigRef: CreateClientAiBotConfigRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createClientAiBotConfigRef:
```typescript
const name = createClientAiBotConfigRef.operationName;
console.log(name);
```

### Variables
The `CreateClientAiBotConfig` mutation requires an argument of type `CreateClientAiBotConfigVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateClientAiBotConfigVariables {
  clientId: UUIDString;
  botName?: string | null;
  accessToken: string;
  aiModelApiKey?: string | null;
  schedulingApiKey?: string | null;
  knowledgeBaseJson?: unknown | null;
  welcomeMessage?: string | null;
  customInstructions?: string | null;
}
```
### Return Type
Recall that executing the `CreateClientAiBotConfig` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateClientAiBotConfigData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateClientAiBotConfigData {
  clientAiBotConfig_insert: ClientAiBotConfig_Key;
}
```
### Using `CreateClientAiBotConfig`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createClientAiBotConfig, CreateClientAiBotConfigVariables } from '@dataconnect/generated';

// The `CreateClientAiBotConfig` mutation requires an argument of type `CreateClientAiBotConfigVariables`:
const createClientAiBotConfigVars: CreateClientAiBotConfigVariables = {
  clientId: ..., 
  botName: ..., // optional
  accessToken: ..., 
  aiModelApiKey: ..., // optional
  schedulingApiKey: ..., // optional
  knowledgeBaseJson: ..., // optional
  welcomeMessage: ..., // optional
  customInstructions: ..., // optional
};

// Call the `createClientAiBotConfig()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createClientAiBotConfig(createClientAiBotConfigVars);
// Variables can be defined inline as well.
const { data } = await createClientAiBotConfig({ clientId: ..., botName: ..., accessToken: ..., aiModelApiKey: ..., schedulingApiKey: ..., knowledgeBaseJson: ..., welcomeMessage: ..., customInstructions: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createClientAiBotConfig(dataConnect, createClientAiBotConfigVars);

console.log(data.clientAiBotConfig_insert);

// Or, you can use the `Promise` API.
createClientAiBotConfig(createClientAiBotConfigVars).then((response) => {
  const data = response.data;
  console.log(data.clientAiBotConfig_insert);
});
```

### Using `CreateClientAiBotConfig`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createClientAiBotConfigRef, CreateClientAiBotConfigVariables } from '@dataconnect/generated';

// The `CreateClientAiBotConfig` mutation requires an argument of type `CreateClientAiBotConfigVariables`:
const createClientAiBotConfigVars: CreateClientAiBotConfigVariables = {
  clientId: ..., 
  botName: ..., // optional
  accessToken: ..., 
  aiModelApiKey: ..., // optional
  schedulingApiKey: ..., // optional
  knowledgeBaseJson: ..., // optional
  welcomeMessage: ..., // optional
  customInstructions: ..., // optional
};

// Call the `createClientAiBotConfigRef()` function to get a reference to the mutation.
const ref = createClientAiBotConfigRef(createClientAiBotConfigVars);
// Variables can be defined inline as well.
const ref = createClientAiBotConfigRef({ clientId: ..., botName: ..., accessToken: ..., aiModelApiKey: ..., schedulingApiKey: ..., knowledgeBaseJson: ..., welcomeMessage: ..., customInstructions: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createClientAiBotConfigRef(dataConnect, createClientAiBotConfigVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.clientAiBotConfig_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.clientAiBotConfig_insert);
});
```

## UpdateClientAiBotConfig
You can execute the `UpdateClientAiBotConfig` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateClientAiBotConfig(vars: UpdateClientAiBotConfigVariables): MutationPromise<UpdateClientAiBotConfigData, UpdateClientAiBotConfigVariables>;

interface UpdateClientAiBotConfigRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateClientAiBotConfigVariables): MutationRef<UpdateClientAiBotConfigData, UpdateClientAiBotConfigVariables>;
}
export const updateClientAiBotConfigRef: UpdateClientAiBotConfigRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateClientAiBotConfig(dc: DataConnect, vars: UpdateClientAiBotConfigVariables): MutationPromise<UpdateClientAiBotConfigData, UpdateClientAiBotConfigVariables>;

interface UpdateClientAiBotConfigRef {
  ...
  (dc: DataConnect, vars: UpdateClientAiBotConfigVariables): MutationRef<UpdateClientAiBotConfigData, UpdateClientAiBotConfigVariables>;
}
export const updateClientAiBotConfigRef: UpdateClientAiBotConfigRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateClientAiBotConfigRef:
```typescript
const name = updateClientAiBotConfigRef.operationName;
console.log(name);
```

### Variables
The `UpdateClientAiBotConfig` mutation requires an argument of type `UpdateClientAiBotConfigVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateClientAiBotConfigVariables {
  id: UUIDString;
  botName?: string | null;
  aiModelApiKey?: string | null;
  schedulingApiKey?: string | null;
  knowledgeBaseJson?: unknown | null;
  welcomeMessage?: string | null;
  customInstructions?: string | null;
}
```
### Return Type
Recall that executing the `UpdateClientAiBotConfig` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateClientAiBotConfigData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateClientAiBotConfigData {
  clientAiBotConfig_update?: ClientAiBotConfig_Key | null;
}
```
### Using `UpdateClientAiBotConfig`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateClientAiBotConfig, UpdateClientAiBotConfigVariables } from '@dataconnect/generated';

// The `UpdateClientAiBotConfig` mutation requires an argument of type `UpdateClientAiBotConfigVariables`:
const updateClientAiBotConfigVars: UpdateClientAiBotConfigVariables = {
  id: ..., 
  botName: ..., // optional
  aiModelApiKey: ..., // optional
  schedulingApiKey: ..., // optional
  knowledgeBaseJson: ..., // optional
  welcomeMessage: ..., // optional
  customInstructions: ..., // optional
};

// Call the `updateClientAiBotConfig()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateClientAiBotConfig(updateClientAiBotConfigVars);
// Variables can be defined inline as well.
const { data } = await updateClientAiBotConfig({ id: ..., botName: ..., aiModelApiKey: ..., schedulingApiKey: ..., knowledgeBaseJson: ..., welcomeMessage: ..., customInstructions: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateClientAiBotConfig(dataConnect, updateClientAiBotConfigVars);

console.log(data.clientAiBotConfig_update);

// Or, you can use the `Promise` API.
updateClientAiBotConfig(updateClientAiBotConfigVars).then((response) => {
  const data = response.data;
  console.log(data.clientAiBotConfig_update);
});
```

### Using `UpdateClientAiBotConfig`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateClientAiBotConfigRef, UpdateClientAiBotConfigVariables } from '@dataconnect/generated';

// The `UpdateClientAiBotConfig` mutation requires an argument of type `UpdateClientAiBotConfigVariables`:
const updateClientAiBotConfigVars: UpdateClientAiBotConfigVariables = {
  id: ..., 
  botName: ..., // optional
  aiModelApiKey: ..., // optional
  schedulingApiKey: ..., // optional
  knowledgeBaseJson: ..., // optional
  welcomeMessage: ..., // optional
  customInstructions: ..., // optional
};

// Call the `updateClientAiBotConfigRef()` function to get a reference to the mutation.
const ref = updateClientAiBotConfigRef(updateClientAiBotConfigVars);
// Variables can be defined inline as well.
const ref = updateClientAiBotConfigRef({ id: ..., botName: ..., aiModelApiKey: ..., schedulingApiKey: ..., knowledgeBaseJson: ..., welcomeMessage: ..., customInstructions: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateClientAiBotConfigRef(dataConnect, updateClientAiBotConfigVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.clientAiBotConfig_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.clientAiBotConfig_update);
});
```

## CreateClientInboundContact
You can execute the `CreateClientInboundContact` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createClientInboundContact(vars: CreateClientInboundContactVariables): MutationPromise<CreateClientInboundContactData, CreateClientInboundContactVariables>;

interface CreateClientInboundContactRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateClientInboundContactVariables): MutationRef<CreateClientInboundContactData, CreateClientInboundContactVariables>;
}
export const createClientInboundContactRef: CreateClientInboundContactRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createClientInboundContact(dc: DataConnect, vars: CreateClientInboundContactVariables): MutationPromise<CreateClientInboundContactData, CreateClientInboundContactVariables>;

interface CreateClientInboundContactRef {
  ...
  (dc: DataConnect, vars: CreateClientInboundContactVariables): MutationRef<CreateClientInboundContactData, CreateClientInboundContactVariables>;
}
export const createClientInboundContactRef: CreateClientInboundContactRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createClientInboundContactRef:
```typescript
const name = createClientInboundContactRef.operationName;
console.log(name);
```

### Variables
The `CreateClientInboundContact` mutation requires an argument of type `CreateClientInboundContactVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateClientInboundContactVariables {
  clientId: UUIDString;
  companyName?: string | null;
  websiteUrl?: string | null;
  contactEmail?: string | null;
  contactStatus?: string | null;
  initialPitchDraft?: string | null;
  identifiedPainPoints?: string | null;
}
```
### Return Type
Recall that executing the `CreateClientInboundContact` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateClientInboundContactData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateClientInboundContactData {
  clientInboundContact_insert: ClientInboundContact_Key;
}
```
### Using `CreateClientInboundContact`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createClientInboundContact, CreateClientInboundContactVariables } from '@dataconnect/generated';

// The `CreateClientInboundContact` mutation requires an argument of type `CreateClientInboundContactVariables`:
const createClientInboundContactVars: CreateClientInboundContactVariables = {
  clientId: ..., 
  companyName: ..., // optional
  websiteUrl: ..., // optional
  contactEmail: ..., // optional
  contactStatus: ..., // optional
  initialPitchDraft: ..., // optional
  identifiedPainPoints: ..., // optional
};

// Call the `createClientInboundContact()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createClientInboundContact(createClientInboundContactVars);
// Variables can be defined inline as well.
const { data } = await createClientInboundContact({ clientId: ..., companyName: ..., websiteUrl: ..., contactEmail: ..., contactStatus: ..., initialPitchDraft: ..., identifiedPainPoints: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createClientInboundContact(dataConnect, createClientInboundContactVars);

console.log(data.clientInboundContact_insert);

// Or, you can use the `Promise` API.
createClientInboundContact(createClientInboundContactVars).then((response) => {
  const data = response.data;
  console.log(data.clientInboundContact_insert);
});
```

### Using `CreateClientInboundContact`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createClientInboundContactRef, CreateClientInboundContactVariables } from '@dataconnect/generated';

// The `CreateClientInboundContact` mutation requires an argument of type `CreateClientInboundContactVariables`:
const createClientInboundContactVars: CreateClientInboundContactVariables = {
  clientId: ..., 
  companyName: ..., // optional
  websiteUrl: ..., // optional
  contactEmail: ..., // optional
  contactStatus: ..., // optional
  initialPitchDraft: ..., // optional
  identifiedPainPoints: ..., // optional
};

// Call the `createClientInboundContactRef()` function to get a reference to the mutation.
const ref = createClientInboundContactRef(createClientInboundContactVars);
// Variables can be defined inline as well.
const ref = createClientInboundContactRef({ clientId: ..., companyName: ..., websiteUrl: ..., contactEmail: ..., contactStatus: ..., initialPitchDraft: ..., identifiedPainPoints: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createClientInboundContactRef(dataConnect, createClientInboundContactVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.clientInboundContact_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.clientInboundContact_insert);
});
```

## UpdateClientInboundContact
You can execute the `UpdateClientInboundContact` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateClientInboundContact(vars: UpdateClientInboundContactVariables): MutationPromise<UpdateClientInboundContactData, UpdateClientInboundContactVariables>;

interface UpdateClientInboundContactRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateClientInboundContactVariables): MutationRef<UpdateClientInboundContactData, UpdateClientInboundContactVariables>;
}
export const updateClientInboundContactRef: UpdateClientInboundContactRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateClientInboundContact(dc: DataConnect, vars: UpdateClientInboundContactVariables): MutationPromise<UpdateClientInboundContactData, UpdateClientInboundContactVariables>;

interface UpdateClientInboundContactRef {
  ...
  (dc: DataConnect, vars: UpdateClientInboundContactVariables): MutationRef<UpdateClientInboundContactData, UpdateClientInboundContactVariables>;
}
export const updateClientInboundContactRef: UpdateClientInboundContactRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateClientInboundContactRef:
```typescript
const name = updateClientInboundContactRef.operationName;
console.log(name);
```

### Variables
The `UpdateClientInboundContact` mutation requires an argument of type `UpdateClientInboundContactVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateClientInboundContactVariables {
  id: UUIDString;
  companyName?: string | null;
  websiteUrl?: string | null;
  contactStatus?: string | null;
  contactEmail?: string | null;
  initialPitchDraft?: string | null;
  identifiedPainPoints?: string | null;
}
```
### Return Type
Recall that executing the `UpdateClientInboundContact` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateClientInboundContactData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateClientInboundContactData {
  clientInboundContact_update?: ClientInboundContact_Key | null;
}
```
### Using `UpdateClientInboundContact`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateClientInboundContact, UpdateClientInboundContactVariables } from '@dataconnect/generated';

// The `UpdateClientInboundContact` mutation requires an argument of type `UpdateClientInboundContactVariables`:
const updateClientInboundContactVars: UpdateClientInboundContactVariables = {
  id: ..., 
  companyName: ..., // optional
  websiteUrl: ..., // optional
  contactStatus: ..., // optional
  contactEmail: ..., // optional
  initialPitchDraft: ..., // optional
  identifiedPainPoints: ..., // optional
};

// Call the `updateClientInboundContact()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateClientInboundContact(updateClientInboundContactVars);
// Variables can be defined inline as well.
const { data } = await updateClientInboundContact({ id: ..., companyName: ..., websiteUrl: ..., contactStatus: ..., contactEmail: ..., initialPitchDraft: ..., identifiedPainPoints: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateClientInboundContact(dataConnect, updateClientInboundContactVars);

console.log(data.clientInboundContact_update);

// Or, you can use the `Promise` API.
updateClientInboundContact(updateClientInboundContactVars).then((response) => {
  const data = response.data;
  console.log(data.clientInboundContact_update);
});
```

### Using `UpdateClientInboundContact`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateClientInboundContactRef, UpdateClientInboundContactVariables } from '@dataconnect/generated';

// The `UpdateClientInboundContact` mutation requires an argument of type `UpdateClientInboundContactVariables`:
const updateClientInboundContactVars: UpdateClientInboundContactVariables = {
  id: ..., 
  companyName: ..., // optional
  websiteUrl: ..., // optional
  contactStatus: ..., // optional
  contactEmail: ..., // optional
  initialPitchDraft: ..., // optional
  identifiedPainPoints: ..., // optional
};

// Call the `updateClientInboundContactRef()` function to get a reference to the mutation.
const ref = updateClientInboundContactRef(updateClientInboundContactVars);
// Variables can be defined inline as well.
const ref = updateClientInboundContactRef({ id: ..., companyName: ..., websiteUrl: ..., contactStatus: ..., contactEmail: ..., initialPitchDraft: ..., identifiedPainPoints: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateClientInboundContactRef(dataConnect, updateClientInboundContactVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.clientInboundContact_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.clientInboundContact_update);
});
```

## CreatePlatformInboundContact
You can execute the `CreatePlatformInboundContact` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createPlatformInboundContact(vars?: CreatePlatformInboundContactVariables): MutationPromise<CreatePlatformInboundContactData, CreatePlatformInboundContactVariables>;

interface CreatePlatformInboundContactRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars?: CreatePlatformInboundContactVariables): MutationRef<CreatePlatformInboundContactData, CreatePlatformInboundContactVariables>;
}
export const createPlatformInboundContactRef: CreatePlatformInboundContactRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createPlatformInboundContact(dc: DataConnect, vars?: CreatePlatformInboundContactVariables): MutationPromise<CreatePlatformInboundContactData, CreatePlatformInboundContactVariables>;

interface CreatePlatformInboundContactRef {
  ...
  (dc: DataConnect, vars?: CreatePlatformInboundContactVariables): MutationRef<CreatePlatformInboundContactData, CreatePlatformInboundContactVariables>;
}
export const createPlatformInboundContactRef: CreatePlatformInboundContactRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createPlatformInboundContactRef:
```typescript
const name = createPlatformInboundContactRef.operationName;
console.log(name);
```

### Variables
The `CreatePlatformInboundContact` mutation has an optional argument of type `CreatePlatformInboundContactVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreatePlatformInboundContactVariables {
  companyName?: string | null;
  websiteUrl?: string | null;
  contactStatus?: string | null;
  contactEmail?: string | null;
  initialPitchDraft?: string | null;
  identifiedPainPoints?: string | null;
  nativeAgent?: boolean | null;
}
```
### Return Type
Recall that executing the `CreatePlatformInboundContact` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreatePlatformInboundContactData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreatePlatformInboundContactData {
  platformInboundContact_insert: PlatformInboundContact_Key;
}
```
### Using `CreatePlatformInboundContact`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createPlatformInboundContact, CreatePlatformInboundContactVariables } from '@dataconnect/generated';

// The `CreatePlatformInboundContact` mutation has an optional argument of type `CreatePlatformInboundContactVariables`:
const createPlatformInboundContactVars: CreatePlatformInboundContactVariables = {
  companyName: ..., // optional
  websiteUrl: ..., // optional
  contactStatus: ..., // optional
  contactEmail: ..., // optional
  initialPitchDraft: ..., // optional
  identifiedPainPoints: ..., // optional
  nativeAgent: ..., // optional
};

// Call the `createPlatformInboundContact()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createPlatformInboundContact(createPlatformInboundContactVars);
// Variables can be defined inline as well.
const { data } = await createPlatformInboundContact({ companyName: ..., websiteUrl: ..., contactStatus: ..., contactEmail: ..., initialPitchDraft: ..., identifiedPainPoints: ..., nativeAgent: ..., });
// Since all variables are optional for this mutation, you can omit the `CreatePlatformInboundContactVariables` argument.
const { data } = await createPlatformInboundContact();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createPlatformInboundContact(dataConnect, createPlatformInboundContactVars);

console.log(data.platformInboundContact_insert);

// Or, you can use the `Promise` API.
createPlatformInboundContact(createPlatformInboundContactVars).then((response) => {
  const data = response.data;
  console.log(data.platformInboundContact_insert);
});
```

### Using `CreatePlatformInboundContact`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createPlatformInboundContactRef, CreatePlatformInboundContactVariables } from '@dataconnect/generated';

// The `CreatePlatformInboundContact` mutation has an optional argument of type `CreatePlatformInboundContactVariables`:
const createPlatformInboundContactVars: CreatePlatformInboundContactVariables = {
  companyName: ..., // optional
  websiteUrl: ..., // optional
  contactStatus: ..., // optional
  contactEmail: ..., // optional
  initialPitchDraft: ..., // optional
  identifiedPainPoints: ..., // optional
  nativeAgent: ..., // optional
};

// Call the `createPlatformInboundContactRef()` function to get a reference to the mutation.
const ref = createPlatformInboundContactRef(createPlatformInboundContactVars);
// Variables can be defined inline as well.
const ref = createPlatformInboundContactRef({ companyName: ..., websiteUrl: ..., contactStatus: ..., contactEmail: ..., initialPitchDraft: ..., identifiedPainPoints: ..., nativeAgent: ..., });
// Since all variables are optional for this mutation, you can omit the `CreatePlatformInboundContactVariables` argument.
const ref = createPlatformInboundContactRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createPlatformInboundContactRef(dataConnect, createPlatformInboundContactVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.platformInboundContact_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.platformInboundContact_insert);
});
```

## CreatePlatformOutboundContact
You can execute the `CreatePlatformOutboundContact` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createPlatformOutboundContact(vars?: CreatePlatformOutboundContactVariables): MutationPromise<CreatePlatformOutboundContactData, CreatePlatformOutboundContactVariables>;

interface CreatePlatformOutboundContactRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars?: CreatePlatformOutboundContactVariables): MutationRef<CreatePlatformOutboundContactData, CreatePlatformOutboundContactVariables>;
}
export const createPlatformOutboundContactRef: CreatePlatformOutboundContactRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createPlatformOutboundContact(dc: DataConnect, vars?: CreatePlatformOutboundContactVariables): MutationPromise<CreatePlatformOutboundContactData, CreatePlatformOutboundContactVariables>;

interface CreatePlatformOutboundContactRef {
  ...
  (dc: DataConnect, vars?: CreatePlatformOutboundContactVariables): MutationRef<CreatePlatformOutboundContactData, CreatePlatformOutboundContactVariables>;
}
export const createPlatformOutboundContactRef: CreatePlatformOutboundContactRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createPlatformOutboundContactRef:
```typescript
const name = createPlatformOutboundContactRef.operationName;
console.log(name);
```

### Variables
The `CreatePlatformOutboundContact` mutation has an optional argument of type `CreatePlatformOutboundContactVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreatePlatformOutboundContactVariables {
  scrapedData?: unknown | null;
  hasExistingAI?: boolean | null;
  auditDate?: DateString | null;
  aiDetectionDetails?: unknown | null;
}
```
### Return Type
Recall that executing the `CreatePlatformOutboundContact` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreatePlatformOutboundContactData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreatePlatformOutboundContactData {
  platformOutboundContact_insert: PlatformOutboundContact_Key;
}
```
### Using `CreatePlatformOutboundContact`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createPlatformOutboundContact, CreatePlatformOutboundContactVariables } from '@dataconnect/generated';

// The `CreatePlatformOutboundContact` mutation has an optional argument of type `CreatePlatformOutboundContactVariables`:
const createPlatformOutboundContactVars: CreatePlatformOutboundContactVariables = {
  scrapedData: ..., // optional
  hasExistingAI: ..., // optional
  auditDate: ..., // optional
  aiDetectionDetails: ..., // optional
};

// Call the `createPlatformOutboundContact()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createPlatformOutboundContact(createPlatformOutboundContactVars);
// Variables can be defined inline as well.
const { data } = await createPlatformOutboundContact({ scrapedData: ..., hasExistingAI: ..., auditDate: ..., aiDetectionDetails: ..., });
// Since all variables are optional for this mutation, you can omit the `CreatePlatformOutboundContactVariables` argument.
const { data } = await createPlatformOutboundContact();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createPlatformOutboundContact(dataConnect, createPlatformOutboundContactVars);

console.log(data.platformOutboundContact_insert);

// Or, you can use the `Promise` API.
createPlatformOutboundContact(createPlatformOutboundContactVars).then((response) => {
  const data = response.data;
  console.log(data.platformOutboundContact_insert);
});
```

### Using `CreatePlatformOutboundContact`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createPlatformOutboundContactRef, CreatePlatformOutboundContactVariables } from '@dataconnect/generated';

// The `CreatePlatformOutboundContact` mutation has an optional argument of type `CreatePlatformOutboundContactVariables`:
const createPlatformOutboundContactVars: CreatePlatformOutboundContactVariables = {
  scrapedData: ..., // optional
  hasExistingAI: ..., // optional
  auditDate: ..., // optional
  aiDetectionDetails: ..., // optional
};

// Call the `createPlatformOutboundContactRef()` function to get a reference to the mutation.
const ref = createPlatformOutboundContactRef(createPlatformOutboundContactVars);
// Variables can be defined inline as well.
const ref = createPlatformOutboundContactRef({ scrapedData: ..., hasExistingAI: ..., auditDate: ..., aiDetectionDetails: ..., });
// Since all variables are optional for this mutation, you can omit the `CreatePlatformOutboundContactVariables` argument.
const ref = createPlatformOutboundContactRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createPlatformOutboundContactRef(dataConnect, createPlatformOutboundContactVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.platformOutboundContact_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.platformOutboundContact_insert);
});
```

## CreatePlatformOutboundOutreachEvent
You can execute the `CreatePlatformOutboundOutreachEvent` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createPlatformOutboundOutreachEvent(vars: CreatePlatformOutboundOutreachEventVariables): MutationPromise<CreatePlatformOutboundOutreachEventData, CreatePlatformOutboundOutreachEventVariables>;

interface CreatePlatformOutboundOutreachEventRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreatePlatformOutboundOutreachEventVariables): MutationRef<CreatePlatformOutboundOutreachEventData, CreatePlatformOutboundOutreachEventVariables>;
}
export const createPlatformOutboundOutreachEventRef: CreatePlatformOutboundOutreachEventRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createPlatformOutboundOutreachEvent(dc: DataConnect, vars: CreatePlatformOutboundOutreachEventVariables): MutationPromise<CreatePlatformOutboundOutreachEventData, CreatePlatformOutboundOutreachEventVariables>;

interface CreatePlatformOutboundOutreachEventRef {
  ...
  (dc: DataConnect, vars: CreatePlatformOutboundOutreachEventVariables): MutationRef<CreatePlatformOutboundOutreachEventData, CreatePlatformOutboundOutreachEventVariables>;
}
export const createPlatformOutboundOutreachEventRef: CreatePlatformOutboundOutreachEventRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createPlatformOutboundOutreachEventRef:
```typescript
const name = createPlatformOutboundOutreachEventRef.operationName;
console.log(name);
```

### Variables
The `CreatePlatformOutboundOutreachEvent` mutation requires an argument of type `CreatePlatformOutboundOutreachEventVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreatePlatformOutboundOutreachEventVariables {
  platformOutboundContactId: UUIDString;
  outreachType?: string | null;
  status?: string | null;
  sendDate?: DateString | null;
  messageContent?: string | null;
  adminNotes?: string | null;
}
```
### Return Type
Recall that executing the `CreatePlatformOutboundOutreachEvent` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreatePlatformOutboundOutreachEventData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreatePlatformOutboundOutreachEventData {
  platformOutboundOutreachEvent_insert: PlatformOutboundOutreachEvent_Key;
}
```
### Using `CreatePlatformOutboundOutreachEvent`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createPlatformOutboundOutreachEvent, CreatePlatformOutboundOutreachEventVariables } from '@dataconnect/generated';

// The `CreatePlatformOutboundOutreachEvent` mutation requires an argument of type `CreatePlatformOutboundOutreachEventVariables`:
const createPlatformOutboundOutreachEventVars: CreatePlatformOutboundOutreachEventVariables = {
  platformOutboundContactId: ..., 
  outreachType: ..., // optional
  status: ..., // optional
  sendDate: ..., // optional
  messageContent: ..., // optional
  adminNotes: ..., // optional
};

// Call the `createPlatformOutboundOutreachEvent()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createPlatformOutboundOutreachEvent(createPlatformOutboundOutreachEventVars);
// Variables can be defined inline as well.
const { data } = await createPlatformOutboundOutreachEvent({ platformOutboundContactId: ..., outreachType: ..., status: ..., sendDate: ..., messageContent: ..., adminNotes: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createPlatformOutboundOutreachEvent(dataConnect, createPlatformOutboundOutreachEventVars);

console.log(data.platformOutboundOutreachEvent_insert);

// Or, you can use the `Promise` API.
createPlatformOutboundOutreachEvent(createPlatformOutboundOutreachEventVars).then((response) => {
  const data = response.data;
  console.log(data.platformOutboundOutreachEvent_insert);
});
```

### Using `CreatePlatformOutboundOutreachEvent`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createPlatformOutboundOutreachEventRef, CreatePlatformOutboundOutreachEventVariables } from '@dataconnect/generated';

// The `CreatePlatformOutboundOutreachEvent` mutation requires an argument of type `CreatePlatformOutboundOutreachEventVariables`:
const createPlatformOutboundOutreachEventVars: CreatePlatformOutboundOutreachEventVariables = {
  platformOutboundContactId: ..., 
  outreachType: ..., // optional
  status: ..., // optional
  sendDate: ..., // optional
  messageContent: ..., // optional
  adminNotes: ..., // optional
};

// Call the `createPlatformOutboundOutreachEventRef()` function to get a reference to the mutation.
const ref = createPlatformOutboundOutreachEventRef(createPlatformOutboundOutreachEventVars);
// Variables can be defined inline as well.
const ref = createPlatformOutboundOutreachEventRef({ platformOutboundContactId: ..., outreachType: ..., status: ..., sendDate: ..., messageContent: ..., adminNotes: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createPlatformOutboundOutreachEventRef(dataConnect, createPlatformOutboundOutreachEventVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.platformOutboundOutreachEvent_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.platformOutboundOutreachEvent_insert);
});
```

## CreatePlatformAgentActivity
You can execute the `CreatePlatformAgentActivity` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createPlatformAgentActivity(vars?: CreatePlatformAgentActivityVariables): MutationPromise<CreatePlatformAgentActivityData, CreatePlatformAgentActivityVariables>;

interface CreatePlatformAgentActivityRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars?: CreatePlatformAgentActivityVariables): MutationRef<CreatePlatformAgentActivityData, CreatePlatformAgentActivityVariables>;
}
export const createPlatformAgentActivityRef: CreatePlatformAgentActivityRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createPlatformAgentActivity(dc: DataConnect, vars?: CreatePlatformAgentActivityVariables): MutationPromise<CreatePlatformAgentActivityData, CreatePlatformAgentActivityVariables>;

interface CreatePlatformAgentActivityRef {
  ...
  (dc: DataConnect, vars?: CreatePlatformAgentActivityVariables): MutationRef<CreatePlatformAgentActivityData, CreatePlatformAgentActivityVariables>;
}
export const createPlatformAgentActivityRef: CreatePlatformAgentActivityRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createPlatformAgentActivityRef:
```typescript
const name = createPlatformAgentActivityRef.operationName;
console.log(name);
```

### Variables
The `CreatePlatformAgentActivity` mutation has an optional argument of type `CreatePlatformAgentActivityVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreatePlatformAgentActivityVariables {
  agentType?: string | null;
  action?: string | null;
  targetUrl?: string | null;
  outcome?: string | null;
  tokensUsed?: number | null;
  durationMs?: number | null;
  metadata?: unknown | null;
  platformOutboundContactId?: UUIDString | null;
  platformInboundContactId?: UUIDString | null;
  platformOutboundOutreachEventId?: UUIDString | null;
}
```
### Return Type
Recall that executing the `CreatePlatformAgentActivity` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreatePlatformAgentActivityData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreatePlatformAgentActivityData {
  platformAgentActivity_insert: PlatformAgentActivity_Key;
}
```
### Using `CreatePlatformAgentActivity`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createPlatformAgentActivity, CreatePlatformAgentActivityVariables } from '@dataconnect/generated';

// The `CreatePlatformAgentActivity` mutation has an optional argument of type `CreatePlatformAgentActivityVariables`:
const createPlatformAgentActivityVars: CreatePlatformAgentActivityVariables = {
  agentType: ..., // optional
  action: ..., // optional
  targetUrl: ..., // optional
  outcome: ..., // optional
  tokensUsed: ..., // optional
  durationMs: ..., // optional
  metadata: ..., // optional
  platformOutboundContactId: ..., // optional
  platformInboundContactId: ..., // optional
  platformOutboundOutreachEventId: ..., // optional
};

// Call the `createPlatformAgentActivity()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createPlatformAgentActivity(createPlatformAgentActivityVars);
// Variables can be defined inline as well.
const { data } = await createPlatformAgentActivity({ agentType: ..., action: ..., targetUrl: ..., outcome: ..., tokensUsed: ..., durationMs: ..., metadata: ..., platformOutboundContactId: ..., platformInboundContactId: ..., platformOutboundOutreachEventId: ..., });
// Since all variables are optional for this mutation, you can omit the `CreatePlatformAgentActivityVariables` argument.
const { data } = await createPlatformAgentActivity();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createPlatformAgentActivity(dataConnect, createPlatformAgentActivityVars);

console.log(data.platformAgentActivity_insert);

// Or, you can use the `Promise` API.
createPlatformAgentActivity(createPlatformAgentActivityVars).then((response) => {
  const data = response.data;
  console.log(data.platformAgentActivity_insert);
});
```

### Using `CreatePlatformAgentActivity`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createPlatformAgentActivityRef, CreatePlatformAgentActivityVariables } from '@dataconnect/generated';

// The `CreatePlatformAgentActivity` mutation has an optional argument of type `CreatePlatformAgentActivityVariables`:
const createPlatformAgentActivityVars: CreatePlatformAgentActivityVariables = {
  agentType: ..., // optional
  action: ..., // optional
  targetUrl: ..., // optional
  outcome: ..., // optional
  tokensUsed: ..., // optional
  durationMs: ..., // optional
  metadata: ..., // optional
  platformOutboundContactId: ..., // optional
  platformInboundContactId: ..., // optional
  platformOutboundOutreachEventId: ..., // optional
};

// Call the `createPlatformAgentActivityRef()` function to get a reference to the mutation.
const ref = createPlatformAgentActivityRef(createPlatformAgentActivityVars);
// Variables can be defined inline as well.
const ref = createPlatformAgentActivityRef({ agentType: ..., action: ..., targetUrl: ..., outcome: ..., tokensUsed: ..., durationMs: ..., metadata: ..., platformOutboundContactId: ..., platformInboundContactId: ..., platformOutboundOutreachEventId: ..., });
// Since all variables are optional for this mutation, you can omit the `CreatePlatformAgentActivityVariables` argument.
const ref = createPlatformAgentActivityRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createPlatformAgentActivityRef(dataConnect, createPlatformAgentActivityVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.platformAgentActivity_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.platformAgentActivity_insert);
});
```

## CreateClientAiBotPerformanceEvent
You can execute the `CreateClientAiBotPerformanceEvent` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createClientAiBotPerformanceEvent(vars: CreateClientAiBotPerformanceEventVariables): MutationPromise<CreateClientAiBotPerformanceEventData, CreateClientAiBotPerformanceEventVariables>;

interface CreateClientAiBotPerformanceEventRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateClientAiBotPerformanceEventVariables): MutationRef<CreateClientAiBotPerformanceEventData, CreateClientAiBotPerformanceEventVariables>;
}
export const createClientAiBotPerformanceEventRef: CreateClientAiBotPerformanceEventRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createClientAiBotPerformanceEvent(dc: DataConnect, vars: CreateClientAiBotPerformanceEventVariables): MutationPromise<CreateClientAiBotPerformanceEventData, CreateClientAiBotPerformanceEventVariables>;

interface CreateClientAiBotPerformanceEventRef {
  ...
  (dc: DataConnect, vars: CreateClientAiBotPerformanceEventVariables): MutationRef<CreateClientAiBotPerformanceEventData, CreateClientAiBotPerformanceEventVariables>;
}
export const createClientAiBotPerformanceEventRef: CreateClientAiBotPerformanceEventRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createClientAiBotPerformanceEventRef:
```typescript
const name = createClientAiBotPerformanceEventRef.operationName;
console.log(name);
```

### Variables
The `CreateClientAiBotPerformanceEvent` mutation requires an argument of type `CreateClientAiBotPerformanceEventVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateClientAiBotPerformanceEventVariables {
  clientId: UUIDString;
  eventType?: string | null;
  sessionDurationMs?: number | null;
  messageCount?: number | null;
  tokensUsed?: number | null;
  metadata?: unknown | null;
  clientInboundContactId?: UUIDString | null;
}
```
### Return Type
Recall that executing the `CreateClientAiBotPerformanceEvent` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateClientAiBotPerformanceEventData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateClientAiBotPerformanceEventData {
  clientAiBotPerformanceEvent_insert: ClientAiBotPerformanceEvent_Key;
}
```
### Using `CreateClientAiBotPerformanceEvent`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createClientAiBotPerformanceEvent, CreateClientAiBotPerformanceEventVariables } from '@dataconnect/generated';

// The `CreateClientAiBotPerformanceEvent` mutation requires an argument of type `CreateClientAiBotPerformanceEventVariables`:
const createClientAiBotPerformanceEventVars: CreateClientAiBotPerformanceEventVariables = {
  clientId: ..., 
  eventType: ..., // optional
  sessionDurationMs: ..., // optional
  messageCount: ..., // optional
  tokensUsed: ..., // optional
  metadata: ..., // optional
  clientInboundContactId: ..., // optional
};

// Call the `createClientAiBotPerformanceEvent()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createClientAiBotPerformanceEvent(createClientAiBotPerformanceEventVars);
// Variables can be defined inline as well.
const { data } = await createClientAiBotPerformanceEvent({ clientId: ..., eventType: ..., sessionDurationMs: ..., messageCount: ..., tokensUsed: ..., metadata: ..., clientInboundContactId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createClientAiBotPerformanceEvent(dataConnect, createClientAiBotPerformanceEventVars);

console.log(data.clientAiBotPerformanceEvent_insert);

// Or, you can use the `Promise` API.
createClientAiBotPerformanceEvent(createClientAiBotPerformanceEventVars).then((response) => {
  const data = response.data;
  console.log(data.clientAiBotPerformanceEvent_insert);
});
```

### Using `CreateClientAiBotPerformanceEvent`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createClientAiBotPerformanceEventRef, CreateClientAiBotPerformanceEventVariables } from '@dataconnect/generated';

// The `CreateClientAiBotPerformanceEvent` mutation requires an argument of type `CreateClientAiBotPerformanceEventVariables`:
const createClientAiBotPerformanceEventVars: CreateClientAiBotPerformanceEventVariables = {
  clientId: ..., 
  eventType: ..., // optional
  sessionDurationMs: ..., // optional
  messageCount: ..., // optional
  tokensUsed: ..., // optional
  metadata: ..., // optional
  clientInboundContactId: ..., // optional
};

// Call the `createClientAiBotPerformanceEventRef()` function to get a reference to the mutation.
const ref = createClientAiBotPerformanceEventRef(createClientAiBotPerformanceEventVars);
// Variables can be defined inline as well.
const ref = createClientAiBotPerformanceEventRef({ clientId: ..., eventType: ..., sessionDurationMs: ..., messageCount: ..., tokensUsed: ..., metadata: ..., clientInboundContactId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createClientAiBotPerformanceEventRef(dataConnect, createClientAiBotPerformanceEventVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.clientAiBotPerformanceEvent_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.clientAiBotPerformanceEvent_insert);
});
```

## CreateClientConversation
You can execute the `CreateClientConversation` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createClientConversation(vars: CreateClientConversationVariables): MutationPromise<CreateClientConversationData, CreateClientConversationVariables>;

interface CreateClientConversationRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateClientConversationVariables): MutationRef<CreateClientConversationData, CreateClientConversationVariables>;
}
export const createClientConversationRef: CreateClientConversationRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createClientConversation(dc: DataConnect, vars: CreateClientConversationVariables): MutationPromise<CreateClientConversationData, CreateClientConversationVariables>;

interface CreateClientConversationRef {
  ...
  (dc: DataConnect, vars: CreateClientConversationVariables): MutationRef<CreateClientConversationData, CreateClientConversationVariables>;
}
export const createClientConversationRef: CreateClientConversationRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createClientConversationRef:
```typescript
const name = createClientConversationRef.operationName;
console.log(name);
```

### Variables
The `CreateClientConversation` mutation requires an argument of type `CreateClientConversationVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateClientConversationVariables {
  clientId: UUIDString;
  accessToken: string;
  messages?: unknown | null;
}
```
### Return Type
Recall that executing the `CreateClientConversation` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateClientConversationData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateClientConversationData {
  clientConversation_insert: ClientConversation_Key;
}
```
### Using `CreateClientConversation`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createClientConversation, CreateClientConversationVariables } from '@dataconnect/generated';

// The `CreateClientConversation` mutation requires an argument of type `CreateClientConversationVariables`:
const createClientConversationVars: CreateClientConversationVariables = {
  clientId: ..., 
  accessToken: ..., 
  messages: ..., // optional
};

// Call the `createClientConversation()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createClientConversation(createClientConversationVars);
// Variables can be defined inline as well.
const { data } = await createClientConversation({ clientId: ..., accessToken: ..., messages: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createClientConversation(dataConnect, createClientConversationVars);

console.log(data.clientConversation_insert);

// Or, you can use the `Promise` API.
createClientConversation(createClientConversationVars).then((response) => {
  const data = response.data;
  console.log(data.clientConversation_insert);
});
```

### Using `CreateClientConversation`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createClientConversationRef, CreateClientConversationVariables } from '@dataconnect/generated';

// The `CreateClientConversation` mutation requires an argument of type `CreateClientConversationVariables`:
const createClientConversationVars: CreateClientConversationVariables = {
  clientId: ..., 
  accessToken: ..., 
  messages: ..., // optional
};

// Call the `createClientConversationRef()` function to get a reference to the mutation.
const ref = createClientConversationRef(createClientConversationVars);
// Variables can be defined inline as well.
const ref = createClientConversationRef({ clientId: ..., accessToken: ..., messages: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createClientConversationRef(dataConnect, createClientConversationVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.clientConversation_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.clientConversation_insert);
});
```

## UpdateClientConversation
You can execute the `UpdateClientConversation` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateClientConversation(vars: UpdateClientConversationVariables): MutationPromise<UpdateClientConversationData, UpdateClientConversationVariables>;

interface UpdateClientConversationRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateClientConversationVariables): MutationRef<UpdateClientConversationData, UpdateClientConversationVariables>;
}
export const updateClientConversationRef: UpdateClientConversationRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateClientConversation(dc: DataConnect, vars: UpdateClientConversationVariables): MutationPromise<UpdateClientConversationData, UpdateClientConversationVariables>;

interface UpdateClientConversationRef {
  ...
  (dc: DataConnect, vars: UpdateClientConversationVariables): MutationRef<UpdateClientConversationData, UpdateClientConversationVariables>;
}
export const updateClientConversationRef: UpdateClientConversationRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateClientConversationRef:
```typescript
const name = updateClientConversationRef.operationName;
console.log(name);
```

### Variables
The `UpdateClientConversation` mutation requires an argument of type `UpdateClientConversationVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateClientConversationVariables {
  id: UUIDString;
  accessToken: string;
  messages?: unknown | null;
}
```
### Return Type
Recall that executing the `UpdateClientConversation` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateClientConversationData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateClientConversationData {
  clientConversation_update?: ClientConversation_Key | null;
}
```
### Using `UpdateClientConversation`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateClientConversation, UpdateClientConversationVariables } from '@dataconnect/generated';

// The `UpdateClientConversation` mutation requires an argument of type `UpdateClientConversationVariables`:
const updateClientConversationVars: UpdateClientConversationVariables = {
  id: ..., 
  accessToken: ..., 
  messages: ..., // optional
};

// Call the `updateClientConversation()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateClientConversation(updateClientConversationVars);
// Variables can be defined inline as well.
const { data } = await updateClientConversation({ id: ..., accessToken: ..., messages: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateClientConversation(dataConnect, updateClientConversationVars);

console.log(data.clientConversation_update);

// Or, you can use the `Promise` API.
updateClientConversation(updateClientConversationVars).then((response) => {
  const data = response.data;
  console.log(data.clientConversation_update);
});
```

### Using `UpdateClientConversation`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateClientConversationRef, UpdateClientConversationVariables } from '@dataconnect/generated';

// The `UpdateClientConversation` mutation requires an argument of type `UpdateClientConversationVariables`:
const updateClientConversationVars: UpdateClientConversationVariables = {
  id: ..., 
  accessToken: ..., 
  messages: ..., // optional
};

// Call the `updateClientConversationRef()` function to get a reference to the mutation.
const ref = updateClientConversationRef(updateClientConversationVars);
// Variables can be defined inline as well.
const ref = updateClientConversationRef({ id: ..., accessToken: ..., messages: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateClientConversationRef(dataConnect, updateClientConversationVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.clientConversation_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.clientConversation_update);
});
```

## CreateClientAdmin
You can execute the `CreateClientAdmin` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createClientAdmin(vars: CreateClientAdminVariables): MutationPromise<CreateClientAdminData, CreateClientAdminVariables>;

interface CreateClientAdminRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateClientAdminVariables): MutationRef<CreateClientAdminData, CreateClientAdminVariables>;
}
export const createClientAdminRef: CreateClientAdminRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createClientAdmin(dc: DataConnect, vars: CreateClientAdminVariables): MutationPromise<CreateClientAdminData, CreateClientAdminVariables>;

interface CreateClientAdminRef {
  ...
  (dc: DataConnect, vars: CreateClientAdminVariables): MutationRef<CreateClientAdminData, CreateClientAdminVariables>;
}
export const createClientAdminRef: CreateClientAdminRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createClientAdminRef:
```typescript
const name = createClientAdminRef.operationName;
console.log(name);
```

### Variables
The `CreateClientAdmin` mutation requires an argument of type `CreateClientAdminVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateClientAdminVariables {
  linkedAuthUid: string;
  companyName?: string | null;
  clientName?: string | null;
  email?: string | null;
  industry?: string | null;
  subscriptionStatus?: string | null;
  paddleSubscriptionId?: string | null;
}
```
### Return Type
Recall that executing the `CreateClientAdmin` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateClientAdminData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateClientAdminData {
  client_insert: Client_Key;
}
```
### Using `CreateClientAdmin`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createClientAdmin, CreateClientAdminVariables } from '@dataconnect/generated';

// The `CreateClientAdmin` mutation requires an argument of type `CreateClientAdminVariables`:
const createClientAdminVars: CreateClientAdminVariables = {
  linkedAuthUid: ..., 
  companyName: ..., // optional
  clientName: ..., // optional
  email: ..., // optional
  industry: ..., // optional
  subscriptionStatus: ..., // optional
  paddleSubscriptionId: ..., // optional
};

// Call the `createClientAdmin()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createClientAdmin(createClientAdminVars);
// Variables can be defined inline as well.
const { data } = await createClientAdmin({ linkedAuthUid: ..., companyName: ..., clientName: ..., email: ..., industry: ..., subscriptionStatus: ..., paddleSubscriptionId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createClientAdmin(dataConnect, createClientAdminVars);

console.log(data.client_insert);

// Or, you can use the `Promise` API.
createClientAdmin(createClientAdminVars).then((response) => {
  const data = response.data;
  console.log(data.client_insert);
});
```

### Using `CreateClientAdmin`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createClientAdminRef, CreateClientAdminVariables } from '@dataconnect/generated';

// The `CreateClientAdmin` mutation requires an argument of type `CreateClientAdminVariables`:
const createClientAdminVars: CreateClientAdminVariables = {
  linkedAuthUid: ..., 
  companyName: ..., // optional
  clientName: ..., // optional
  email: ..., // optional
  industry: ..., // optional
  subscriptionStatus: ..., // optional
  paddleSubscriptionId: ..., // optional
};

// Call the `createClientAdminRef()` function to get a reference to the mutation.
const ref = createClientAdminRef(createClientAdminVars);
// Variables can be defined inline as well.
const ref = createClientAdminRef({ linkedAuthUid: ..., companyName: ..., clientName: ..., email: ..., industry: ..., subscriptionStatus: ..., paddleSubscriptionId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createClientAdminRef(dataConnect, createClientAdminVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.client_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.client_insert);
});
```

## UpdateClientAdmin
You can execute the `UpdateClientAdmin` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateClientAdmin(vars: UpdateClientAdminVariables): MutationPromise<UpdateClientAdminData, UpdateClientAdminVariables>;

interface UpdateClientAdminRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateClientAdminVariables): MutationRef<UpdateClientAdminData, UpdateClientAdminVariables>;
}
export const updateClientAdminRef: UpdateClientAdminRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateClientAdmin(dc: DataConnect, vars: UpdateClientAdminVariables): MutationPromise<UpdateClientAdminData, UpdateClientAdminVariables>;

interface UpdateClientAdminRef {
  ...
  (dc: DataConnect, vars: UpdateClientAdminVariables): MutationRef<UpdateClientAdminData, UpdateClientAdminVariables>;
}
export const updateClientAdminRef: UpdateClientAdminRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateClientAdminRef:
```typescript
const name = updateClientAdminRef.operationName;
console.log(name);
```

### Variables
The `UpdateClientAdmin` mutation requires an argument of type `UpdateClientAdminVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateClientAdminVariables {
  id: UUIDString;
  companyName?: string | null;
  clientName?: string | null;
  email?: string | null;
  subscriptionStatus?: string | null;
  paddleSubscriptionId?: string | null;
}
```
### Return Type
Recall that executing the `UpdateClientAdmin` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateClientAdminData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateClientAdminData {
  client_update?: Client_Key | null;
}
```
### Using `UpdateClientAdmin`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateClientAdmin, UpdateClientAdminVariables } from '@dataconnect/generated';

// The `UpdateClientAdmin` mutation requires an argument of type `UpdateClientAdminVariables`:
const updateClientAdminVars: UpdateClientAdminVariables = {
  id: ..., 
  companyName: ..., // optional
  clientName: ..., // optional
  email: ..., // optional
  subscriptionStatus: ..., // optional
  paddleSubscriptionId: ..., // optional
};

// Call the `updateClientAdmin()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateClientAdmin(updateClientAdminVars);
// Variables can be defined inline as well.
const { data } = await updateClientAdmin({ id: ..., companyName: ..., clientName: ..., email: ..., subscriptionStatus: ..., paddleSubscriptionId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateClientAdmin(dataConnect, updateClientAdminVars);

console.log(data.client_update);

// Or, you can use the `Promise` API.
updateClientAdmin(updateClientAdminVars).then((response) => {
  const data = response.data;
  console.log(data.client_update);
});
```

### Using `UpdateClientAdmin`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateClientAdminRef, UpdateClientAdminVariables } from '@dataconnect/generated';

// The `UpdateClientAdmin` mutation requires an argument of type `UpdateClientAdminVariables`:
const updateClientAdminVars: UpdateClientAdminVariables = {
  id: ..., 
  companyName: ..., // optional
  clientName: ..., // optional
  email: ..., // optional
  subscriptionStatus: ..., // optional
  paddleSubscriptionId: ..., // optional
};

// Call the `updateClientAdminRef()` function to get a reference to the mutation.
const ref = updateClientAdminRef(updateClientAdminVars);
// Variables can be defined inline as well.
const ref = updateClientAdminRef({ id: ..., companyName: ..., clientName: ..., email: ..., subscriptionStatus: ..., paddleSubscriptionId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateClientAdminRef(dataConnect, updateClientAdminVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.client_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.client_update);
});
```

## WebhookCreateClientWithConfig
You can execute the `WebhookCreateClientWithConfig` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
webhookCreateClientWithConfig(vars: WebhookCreateClientWithConfigVariables): MutationPromise<WebhookCreateClientWithConfigData, WebhookCreateClientWithConfigVariables>;

interface WebhookCreateClientWithConfigRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: WebhookCreateClientWithConfigVariables): MutationRef<WebhookCreateClientWithConfigData, WebhookCreateClientWithConfigVariables>;
}
export const webhookCreateClientWithConfigRef: WebhookCreateClientWithConfigRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
webhookCreateClientWithConfig(dc: DataConnect, vars: WebhookCreateClientWithConfigVariables): MutationPromise<WebhookCreateClientWithConfigData, WebhookCreateClientWithConfigVariables>;

interface WebhookCreateClientWithConfigRef {
  ...
  (dc: DataConnect, vars: WebhookCreateClientWithConfigVariables): MutationRef<WebhookCreateClientWithConfigData, WebhookCreateClientWithConfigVariables>;
}
export const webhookCreateClientWithConfigRef: WebhookCreateClientWithConfigRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the webhookCreateClientWithConfigRef:
```typescript
const name = webhookCreateClientWithConfigRef.operationName;
console.log(name);
```

### Variables
The `WebhookCreateClientWithConfig` mutation requires an argument of type `WebhookCreateClientWithConfigVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface WebhookCreateClientWithConfigVariables {
  linkedAuthUid: string;
  companyName?: string | null;
  clientName?: string | null;
  email?: string | null;
  subscriptionStatus: string;
  paddleSubscriptionId?: string | null;
  botName?: string | null;
  accessToken: string;
  aiModelApiKey?: string | null;
  welcomeMessage?: string | null;
  customInstructions?: string | null;
}
```
### Return Type
Recall that executing the `WebhookCreateClientWithConfig` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `WebhookCreateClientWithConfigData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface WebhookCreateClientWithConfigData {
  client_insert: Client_Key;
  clientAiBotConfig_insert: ClientAiBotConfig_Key;
}
```
### Using `WebhookCreateClientWithConfig`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, webhookCreateClientWithConfig, WebhookCreateClientWithConfigVariables } from '@dataconnect/generated';

// The `WebhookCreateClientWithConfig` mutation requires an argument of type `WebhookCreateClientWithConfigVariables`:
const webhookCreateClientWithConfigVars: WebhookCreateClientWithConfigVariables = {
  linkedAuthUid: ..., 
  companyName: ..., // optional
  clientName: ..., // optional
  email: ..., // optional
  subscriptionStatus: ..., 
  paddleSubscriptionId: ..., // optional
  botName: ..., // optional
  accessToken: ..., 
  aiModelApiKey: ..., // optional
  welcomeMessage: ..., // optional
  customInstructions: ..., // optional
};

// Call the `webhookCreateClientWithConfig()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await webhookCreateClientWithConfig(webhookCreateClientWithConfigVars);
// Variables can be defined inline as well.
const { data } = await webhookCreateClientWithConfig({ linkedAuthUid: ..., companyName: ..., clientName: ..., email: ..., subscriptionStatus: ..., paddleSubscriptionId: ..., botName: ..., accessToken: ..., aiModelApiKey: ..., welcomeMessage: ..., customInstructions: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await webhookCreateClientWithConfig(dataConnect, webhookCreateClientWithConfigVars);

console.log(data.client_insert);
console.log(data.clientAiBotConfig_insert);

// Or, you can use the `Promise` API.
webhookCreateClientWithConfig(webhookCreateClientWithConfigVars).then((response) => {
  const data = response.data;
  console.log(data.client_insert);
  console.log(data.clientAiBotConfig_insert);
});
```

### Using `WebhookCreateClientWithConfig`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, webhookCreateClientWithConfigRef, WebhookCreateClientWithConfigVariables } from '@dataconnect/generated';

// The `WebhookCreateClientWithConfig` mutation requires an argument of type `WebhookCreateClientWithConfigVariables`:
const webhookCreateClientWithConfigVars: WebhookCreateClientWithConfigVariables = {
  linkedAuthUid: ..., 
  companyName: ..., // optional
  clientName: ..., // optional
  email: ..., // optional
  subscriptionStatus: ..., 
  paddleSubscriptionId: ..., // optional
  botName: ..., // optional
  accessToken: ..., 
  aiModelApiKey: ..., // optional
  welcomeMessage: ..., // optional
  customInstructions: ..., // optional
};

// Call the `webhookCreateClientWithConfigRef()` function to get a reference to the mutation.
const ref = webhookCreateClientWithConfigRef(webhookCreateClientWithConfigVars);
// Variables can be defined inline as well.
const ref = webhookCreateClientWithConfigRef({ linkedAuthUid: ..., companyName: ..., clientName: ..., email: ..., subscriptionStatus: ..., paddleSubscriptionId: ..., botName: ..., accessToken: ..., aiModelApiKey: ..., welcomeMessage: ..., customInstructions: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = webhookCreateClientWithConfigRef(dataConnect, webhookCreateClientWithConfigVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.client_insert);
console.log(data.clientAiBotConfig_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.client_insert);
  console.log(data.clientAiBotConfig_insert);
});
```

## CreateClientAiBotConfigAdmin
You can execute the `CreateClientAiBotConfigAdmin` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createClientAiBotConfigAdmin(vars: CreateClientAiBotConfigAdminVariables): MutationPromise<CreateClientAiBotConfigAdminData, CreateClientAiBotConfigAdminVariables>;

interface CreateClientAiBotConfigAdminRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateClientAiBotConfigAdminVariables): MutationRef<CreateClientAiBotConfigAdminData, CreateClientAiBotConfigAdminVariables>;
}
export const createClientAiBotConfigAdminRef: CreateClientAiBotConfigAdminRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createClientAiBotConfigAdmin(dc: DataConnect, vars: CreateClientAiBotConfigAdminVariables): MutationPromise<CreateClientAiBotConfigAdminData, CreateClientAiBotConfigAdminVariables>;

interface CreateClientAiBotConfigAdminRef {
  ...
  (dc: DataConnect, vars: CreateClientAiBotConfigAdminVariables): MutationRef<CreateClientAiBotConfigAdminData, CreateClientAiBotConfigAdminVariables>;
}
export const createClientAiBotConfigAdminRef: CreateClientAiBotConfigAdminRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createClientAiBotConfigAdminRef:
```typescript
const name = createClientAiBotConfigAdminRef.operationName;
console.log(name);
```

### Variables
The `CreateClientAiBotConfigAdmin` mutation requires an argument of type `CreateClientAiBotConfigAdminVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateClientAiBotConfigAdminVariables {
  clientId: UUIDString;
  botName?: string | null;
  accessToken: string;
  aiModelApiKey?: string | null;
  schedulingApiKey?: string | null;
  welcomeMessage?: string | null;
  customInstructions?: string | null;
}
```
### Return Type
Recall that executing the `CreateClientAiBotConfigAdmin` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateClientAiBotConfigAdminData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateClientAiBotConfigAdminData {
  clientAiBotConfig_insert: ClientAiBotConfig_Key;
}
```
### Using `CreateClientAiBotConfigAdmin`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createClientAiBotConfigAdmin, CreateClientAiBotConfigAdminVariables } from '@dataconnect/generated';

// The `CreateClientAiBotConfigAdmin` mutation requires an argument of type `CreateClientAiBotConfigAdminVariables`:
const createClientAiBotConfigAdminVars: CreateClientAiBotConfigAdminVariables = {
  clientId: ..., 
  botName: ..., // optional
  accessToken: ..., 
  aiModelApiKey: ..., // optional
  schedulingApiKey: ..., // optional
  welcomeMessage: ..., // optional
  customInstructions: ..., // optional
};

// Call the `createClientAiBotConfigAdmin()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createClientAiBotConfigAdmin(createClientAiBotConfigAdminVars);
// Variables can be defined inline as well.
const { data } = await createClientAiBotConfigAdmin({ clientId: ..., botName: ..., accessToken: ..., aiModelApiKey: ..., schedulingApiKey: ..., welcomeMessage: ..., customInstructions: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createClientAiBotConfigAdmin(dataConnect, createClientAiBotConfigAdminVars);

console.log(data.clientAiBotConfig_insert);

// Or, you can use the `Promise` API.
createClientAiBotConfigAdmin(createClientAiBotConfigAdminVars).then((response) => {
  const data = response.data;
  console.log(data.clientAiBotConfig_insert);
});
```

### Using `CreateClientAiBotConfigAdmin`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createClientAiBotConfigAdminRef, CreateClientAiBotConfigAdminVariables } from '@dataconnect/generated';

// The `CreateClientAiBotConfigAdmin` mutation requires an argument of type `CreateClientAiBotConfigAdminVariables`:
const createClientAiBotConfigAdminVars: CreateClientAiBotConfigAdminVariables = {
  clientId: ..., 
  botName: ..., // optional
  accessToken: ..., 
  aiModelApiKey: ..., // optional
  schedulingApiKey: ..., // optional
  welcomeMessage: ..., // optional
  customInstructions: ..., // optional
};

// Call the `createClientAiBotConfigAdminRef()` function to get a reference to the mutation.
const ref = createClientAiBotConfigAdminRef(createClientAiBotConfigAdminVars);
// Variables can be defined inline as well.
const ref = createClientAiBotConfigAdminRef({ clientId: ..., botName: ..., accessToken: ..., aiModelApiKey: ..., schedulingApiKey: ..., welcomeMessage: ..., customInstructions: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createClientAiBotConfigAdminRef(dataConnect, createClientAiBotConfigAdminVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.clientAiBotConfig_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.clientAiBotConfig_insert);
});
```

## UpdateClientAiBotConfigAdmin
You can execute the `UpdateClientAiBotConfigAdmin` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateClientAiBotConfigAdmin(vars: UpdateClientAiBotConfigAdminVariables): MutationPromise<UpdateClientAiBotConfigAdminData, UpdateClientAiBotConfigAdminVariables>;

interface UpdateClientAiBotConfigAdminRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateClientAiBotConfigAdminVariables): MutationRef<UpdateClientAiBotConfigAdminData, UpdateClientAiBotConfigAdminVariables>;
}
export const updateClientAiBotConfigAdminRef: UpdateClientAiBotConfigAdminRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateClientAiBotConfigAdmin(dc: DataConnect, vars: UpdateClientAiBotConfigAdminVariables): MutationPromise<UpdateClientAiBotConfigAdminData, UpdateClientAiBotConfigAdminVariables>;

interface UpdateClientAiBotConfigAdminRef {
  ...
  (dc: DataConnect, vars: UpdateClientAiBotConfigAdminVariables): MutationRef<UpdateClientAiBotConfigAdminData, UpdateClientAiBotConfigAdminVariables>;
}
export const updateClientAiBotConfigAdminRef: UpdateClientAiBotConfigAdminRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateClientAiBotConfigAdminRef:
```typescript
const name = updateClientAiBotConfigAdminRef.operationName;
console.log(name);
```

### Variables
The `UpdateClientAiBotConfigAdmin` mutation requires an argument of type `UpdateClientAiBotConfigAdminVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateClientAiBotConfigAdminVariables {
  id: UUIDString;
  botName?: string | null;
  aiModelApiKey?: string | null;
  schedulingApiKey?: string | null;
  welcomeMessage?: string | null;
  customInstructions?: string | null;
}
```
### Return Type
Recall that executing the `UpdateClientAiBotConfigAdmin` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateClientAiBotConfigAdminData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateClientAiBotConfigAdminData {
  clientAiBotConfig_update?: ClientAiBotConfig_Key | null;
}
```
### Using `UpdateClientAiBotConfigAdmin`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateClientAiBotConfigAdmin, UpdateClientAiBotConfigAdminVariables } from '@dataconnect/generated';

// The `UpdateClientAiBotConfigAdmin` mutation requires an argument of type `UpdateClientAiBotConfigAdminVariables`:
const updateClientAiBotConfigAdminVars: UpdateClientAiBotConfigAdminVariables = {
  id: ..., 
  botName: ..., // optional
  aiModelApiKey: ..., // optional
  schedulingApiKey: ..., // optional
  welcomeMessage: ..., // optional
  customInstructions: ..., // optional
};

// Call the `updateClientAiBotConfigAdmin()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateClientAiBotConfigAdmin(updateClientAiBotConfigAdminVars);
// Variables can be defined inline as well.
const { data } = await updateClientAiBotConfigAdmin({ id: ..., botName: ..., aiModelApiKey: ..., schedulingApiKey: ..., welcomeMessage: ..., customInstructions: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateClientAiBotConfigAdmin(dataConnect, updateClientAiBotConfigAdminVars);

console.log(data.clientAiBotConfig_update);

// Or, you can use the `Promise` API.
updateClientAiBotConfigAdmin(updateClientAiBotConfigAdminVars).then((response) => {
  const data = response.data;
  console.log(data.clientAiBotConfig_update);
});
```

### Using `UpdateClientAiBotConfigAdmin`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateClientAiBotConfigAdminRef, UpdateClientAiBotConfigAdminVariables } from '@dataconnect/generated';

// The `UpdateClientAiBotConfigAdmin` mutation requires an argument of type `UpdateClientAiBotConfigAdminVariables`:
const updateClientAiBotConfigAdminVars: UpdateClientAiBotConfigAdminVariables = {
  id: ..., 
  botName: ..., // optional
  aiModelApiKey: ..., // optional
  schedulingApiKey: ..., // optional
  welcomeMessage: ..., // optional
  customInstructions: ..., // optional
};

// Call the `updateClientAiBotConfigAdminRef()` function to get a reference to the mutation.
const ref = updateClientAiBotConfigAdminRef(updateClientAiBotConfigAdminVars);
// Variables can be defined inline as well.
const ref = updateClientAiBotConfigAdminRef({ id: ..., botName: ..., aiModelApiKey: ..., schedulingApiKey: ..., welcomeMessage: ..., customInstructions: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateClientAiBotConfigAdminRef(dataConnect, updateClientAiBotConfigAdminVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.clientAiBotConfig_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.clientAiBotConfig_update);
});
```

