# Generated React README
This README will guide you through the process of using the generated React SDK package for the connector `kona`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `JavaScript README`, you can find it at [`dataconnect-generated/README.md`](../README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

You can use this generated SDK by importing from the package `@dataconnect/generated/react` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#react).

# Table of Contents
- [**Overview**](#generated-react-readme)
- [**TanStack Query Firebase & TanStack React Query**](#tanstack-query-firebase-tanstack-react-query)
  - [*Package Installation*](#installing-tanstack-query-firebase-and-tanstack-react-query-packages)
  - [*Configuring TanStack Query*](#configuring-tanstack-query)
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

# TanStack Query Firebase & TanStack React Query
This SDK provides [React](https://react.dev/) hooks generated specific to your application, for the operations found in the connector `kona`. These hooks are generated using [TanStack Query Firebase](https://react-query-firebase.invertase.dev/) by our partners at Invertase, a library built on top of [TanStack React Query v5](https://tanstack.com/query/v5/docs/framework/react/overview).

***You do not need to be familiar with Tanstack Query or Tanstack Query Firebase to use this SDK.*** However, you may find it useful to learn more about them, as they will empower you as a user of this Generated React SDK.

## Installing TanStack Query Firebase and TanStack React Query Packages
In order to use the React generated SDK, you must install the `TanStack React Query` and `TanStack Query Firebase` packages.
```bash
npm i --save @tanstack/react-query @tanstack-query-firebase/react
```
```bash
npm i --save firebase@latest # Note: React has a peer dependency on ^11.3.0
```

You can also follow the installation instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#tanstack-install), or the [TanStack Query Firebase documentation](https://react-query-firebase.invertase.dev/react) and [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/installation).

## Configuring TanStack Query
In order to use the React generated SDK in your application, you must wrap your application's component tree in a `QueryClientProvider` component from TanStack React Query. None of your generated React SDK hooks will work without this provider.

```javascript
import { QueryClientProvider } from '@tanstack/react-query';

// Create a TanStack Query client instance
const queryClient = new QueryClient()

function App() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <MyApplication />
    </QueryClientProvider>
  )
}
```

To learn more about `QueryClientProvider`, see the [TanStack React Query documentation](https://tanstack.com/query/latest/docs/framework/react/quick-start) and the [TanStack Query Firebase documentation](https://invertase.docs.page/tanstack-query-firebase/react#usage).

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `kona`.

You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#emulator-react-angular).

```javascript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) using the hooks provided from your generated React SDK.

# Queries

The React generated SDK provides Query hook functions that call and return [`useDataConnectQuery`](https://react-query-firebase.invertase.dev/react/data-connect/querying) hooks from TanStack Query Firebase.

Calling these hook functions will return a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and the most recent data returned by the Query, among other things. To learn more about these hooks and how to use them, see the [TanStack Query Firebase documentation](https://react-query-firebase.invertase.dev/react/data-connect/querying).

TanStack React Query caches the results of your Queries, so using the same Query hook function in multiple places in your application allows the entire application to automatically see updates to that Query's data.

Query hooks execute their Queries automatically when called, and periodically refresh, unless you change the `queryOptions` for the Query. To learn how to stop a Query from automatically executing, including how to make a query "lazy", see the [TanStack React Query documentation](https://tanstack.com/query/latest/docs/framework/react/guides/disabling-queries).

To learn more about TanStack React Query's Queries, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/guides/queries).

## Using Query Hooks
Here's a general overview of how to use the generated Query hooks in your code:

- If the Query has no variables, the Query hook function does not require arguments.
- If the Query has any required variables, the Query hook function will require at least one argument: an object that contains all the required variables for the Query.
- If the Query has some required and some optional variables, only required variables are necessary in the variables argument object, and optional variables may be provided as well.
- If all of the Query's variables are optional, the Query hook function does not require any arguments.
- Query hook functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.
- Query hooks functions can be called with or without passing in an `options` argument of type `useDataConnectQueryOptions`. To learn more about the `options` argument, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/guides/query-options).
  - ***Special case:***  If the Query has all optional variables and you would like to provide an `options` argument to the Query hook function without providing any variables, you must pass `undefined` where you would normally pass the Query's variables, and then may provide the `options` argument.

Below are examples of how to use the `kona` connector's generated Query hook functions to execute each Query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#operations-react-angular).

## GetClientByLinkedAuthUid
You can execute the `GetClientByLinkedAuthUid` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetClientByLinkedAuthUid(dc: DataConnect, vars: GetClientByLinkedAuthUidVariables, options?: useDataConnectQueryOptions<GetClientByLinkedAuthUidData>): UseDataConnectQueryResult<GetClientByLinkedAuthUidData, GetClientByLinkedAuthUidVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetClientByLinkedAuthUid(vars: GetClientByLinkedAuthUidVariables, options?: useDataConnectQueryOptions<GetClientByLinkedAuthUidData>): UseDataConnectQueryResult<GetClientByLinkedAuthUidData, GetClientByLinkedAuthUidVariables>;
```

### Variables
The `GetClientByLinkedAuthUid` Query requires an argument of type `GetClientByLinkedAuthUidVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetClientByLinkedAuthUidVariables {
  authUid: string;
}
```
### Return Type
Recall that calling the `GetClientByLinkedAuthUid` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetClientByLinkedAuthUid` Query is of type `GetClientByLinkedAuthUidData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetClientByLinkedAuthUid`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetClientByLinkedAuthUidVariables } from '@dataconnect/generated';
import { useGetClientByLinkedAuthUid } from '@dataconnect/generated/react'

export default function GetClientByLinkedAuthUidComponent() {
  // The `useGetClientByLinkedAuthUid` Query hook requires an argument of type `GetClientByLinkedAuthUidVariables`:
  const getClientByLinkedAuthUidVars: GetClientByLinkedAuthUidVariables = {
    authUid: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetClientByLinkedAuthUid(getClientByLinkedAuthUidVars);
  // Variables can be defined inline as well.
  const query = useGetClientByLinkedAuthUid({ authUid: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetClientByLinkedAuthUid(dataConnect, getClientByLinkedAuthUidVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetClientByLinkedAuthUid(getClientByLinkedAuthUidVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetClientByLinkedAuthUid(dataConnect, getClientByLinkedAuthUidVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.clients);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetClientById
You can execute the `GetClientById` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetClientById(dc: DataConnect, vars: GetClientByIdVariables, options?: useDataConnectQueryOptions<GetClientByIdData>): UseDataConnectQueryResult<GetClientByIdData, GetClientByIdVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetClientById(vars: GetClientByIdVariables, options?: useDataConnectQueryOptions<GetClientByIdData>): UseDataConnectQueryResult<GetClientByIdData, GetClientByIdVariables>;
```

### Variables
The `GetClientById` Query requires an argument of type `GetClientByIdVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetClientByIdVariables {
  id: UUIDString;
}
```
### Return Type
Recall that calling the `GetClientById` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetClientById` Query is of type `GetClientByIdData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetClientById`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetClientByIdVariables } from '@dataconnect/generated';
import { useGetClientById } from '@dataconnect/generated/react'

export default function GetClientByIdComponent() {
  // The `useGetClientById` Query hook requires an argument of type `GetClientByIdVariables`:
  const getClientByIdVars: GetClientByIdVariables = {
    id: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetClientById(getClientByIdVars);
  // Variables can be defined inline as well.
  const query = useGetClientById({ id: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetClientById(dataConnect, getClientByIdVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetClientById(getClientByIdVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetClientById(dataConnect, getClientByIdVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.client);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetClientAiBotConfigByAccessToken
You can execute the `GetClientAiBotConfigByAccessToken` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetClientAiBotConfigByAccessToken(dc: DataConnect, vars: GetClientAiBotConfigByAccessTokenVariables, options?: useDataConnectQueryOptions<GetClientAiBotConfigByAccessTokenData>): UseDataConnectQueryResult<GetClientAiBotConfigByAccessTokenData, GetClientAiBotConfigByAccessTokenVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetClientAiBotConfigByAccessToken(vars: GetClientAiBotConfigByAccessTokenVariables, options?: useDataConnectQueryOptions<GetClientAiBotConfigByAccessTokenData>): UseDataConnectQueryResult<GetClientAiBotConfigByAccessTokenData, GetClientAiBotConfigByAccessTokenVariables>;
```

### Variables
The `GetClientAiBotConfigByAccessToken` Query requires an argument of type `GetClientAiBotConfigByAccessTokenVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetClientAiBotConfigByAccessTokenVariables {
  accessToken: string;
}
```
### Return Type
Recall that calling the `GetClientAiBotConfigByAccessToken` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetClientAiBotConfigByAccessToken` Query is of type `GetClientAiBotConfigByAccessTokenData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetClientAiBotConfigByAccessToken`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetClientAiBotConfigByAccessTokenVariables } from '@dataconnect/generated';
import { useGetClientAiBotConfigByAccessToken } from '@dataconnect/generated/react'

export default function GetClientAiBotConfigByAccessTokenComponent() {
  // The `useGetClientAiBotConfigByAccessToken` Query hook requires an argument of type `GetClientAiBotConfigByAccessTokenVariables`:
  const getClientAiBotConfigByAccessTokenVars: GetClientAiBotConfigByAccessTokenVariables = {
    accessToken: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetClientAiBotConfigByAccessToken(getClientAiBotConfigByAccessTokenVars);
  // Variables can be defined inline as well.
  const query = useGetClientAiBotConfigByAccessToken({ accessToken: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetClientAiBotConfigByAccessToken(dataConnect, getClientAiBotConfigByAccessTokenVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetClientAiBotConfigByAccessToken(getClientAiBotConfigByAccessTokenVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetClientAiBotConfigByAccessToken(dataConnect, getClientAiBotConfigByAccessTokenVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.clientAiBotConfigs);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ListClientInboundContactsByClient
You can execute the `ListClientInboundContactsByClient` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useListClientInboundContactsByClient(dc: DataConnect, vars: ListClientInboundContactsByClientVariables, options?: useDataConnectQueryOptions<ListClientInboundContactsByClientData>): UseDataConnectQueryResult<ListClientInboundContactsByClientData, ListClientInboundContactsByClientVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListClientInboundContactsByClient(vars: ListClientInboundContactsByClientVariables, options?: useDataConnectQueryOptions<ListClientInboundContactsByClientData>): UseDataConnectQueryResult<ListClientInboundContactsByClientData, ListClientInboundContactsByClientVariables>;
```

### Variables
The `ListClientInboundContactsByClient` Query requires an argument of type `ListClientInboundContactsByClientVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface ListClientInboundContactsByClientVariables {
  clientId: UUIDString;
}
```
### Return Type
Recall that calling the `ListClientInboundContactsByClient` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListClientInboundContactsByClient` Query is of type `ListClientInboundContactsByClientData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListClientInboundContactsByClient`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, ListClientInboundContactsByClientVariables } from '@dataconnect/generated';
import { useListClientInboundContactsByClient } from '@dataconnect/generated/react'

export default function ListClientInboundContactsByClientComponent() {
  // The `useListClientInboundContactsByClient` Query hook requires an argument of type `ListClientInboundContactsByClientVariables`:
  const listClientInboundContactsByClientVars: ListClientInboundContactsByClientVariables = {
    clientId: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListClientInboundContactsByClient(listClientInboundContactsByClientVars);
  // Variables can be defined inline as well.
  const query = useListClientInboundContactsByClient({ clientId: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListClientInboundContactsByClient(dataConnect, listClientInboundContactsByClientVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useListClientInboundContactsByClient(listClientInboundContactsByClientVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useListClientInboundContactsByClient(dataConnect, listClientInboundContactsByClientVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.clientInboundContacts);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ListClients
You can execute the `ListClients` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useListClients(dc: DataConnect, options?: useDataConnectQueryOptions<ListClientsData>): UseDataConnectQueryResult<ListClientsData, undefined>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListClients(options?: useDataConnectQueryOptions<ListClientsData>): UseDataConnectQueryResult<ListClientsData, undefined>;
```

### Variables
The `ListClients` Query has no variables.
### Return Type
Recall that calling the `ListClients` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListClients` Query is of type `ListClientsData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListClients`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';
import { useListClients } from '@dataconnect/generated/react'

export default function ListClientsComponent() {
  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListClients();

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListClients(dataConnect);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useListClients(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useListClients(dataConnect, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.clients);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ListPlatformInboundContacts
You can execute the `ListPlatformInboundContacts` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useListPlatformInboundContacts(dc: DataConnect, options?: useDataConnectQueryOptions<ListPlatformInboundContactsData>): UseDataConnectQueryResult<ListPlatformInboundContactsData, undefined>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListPlatformInboundContacts(options?: useDataConnectQueryOptions<ListPlatformInboundContactsData>): UseDataConnectQueryResult<ListPlatformInboundContactsData, undefined>;
```

### Variables
The `ListPlatformInboundContacts` Query has no variables.
### Return Type
Recall that calling the `ListPlatformInboundContacts` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListPlatformInboundContacts` Query is of type `ListPlatformInboundContactsData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListPlatformInboundContacts`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';
import { useListPlatformInboundContacts } from '@dataconnect/generated/react'

export default function ListPlatformInboundContactsComponent() {
  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListPlatformInboundContacts();

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListPlatformInboundContacts(dataConnect);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useListPlatformInboundContacts(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useListPlatformInboundContacts(dataConnect, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.platformInboundContacts);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ListPlatformOutboundContacts
You can execute the `ListPlatformOutboundContacts` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useListPlatformOutboundContacts(dc: DataConnect, options?: useDataConnectQueryOptions<ListPlatformOutboundContactsData>): UseDataConnectQueryResult<ListPlatformOutboundContactsData, undefined>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListPlatformOutboundContacts(options?: useDataConnectQueryOptions<ListPlatformOutboundContactsData>): UseDataConnectQueryResult<ListPlatformOutboundContactsData, undefined>;
```

### Variables
The `ListPlatformOutboundContacts` Query has no variables.
### Return Type
Recall that calling the `ListPlatformOutboundContacts` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListPlatformOutboundContacts` Query is of type `ListPlatformOutboundContactsData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListPlatformOutboundContacts`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';
import { useListPlatformOutboundContacts } from '@dataconnect/generated/react'

export default function ListPlatformOutboundContactsComponent() {
  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListPlatformOutboundContacts();

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListPlatformOutboundContacts(dataConnect);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useListPlatformOutboundContacts(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useListPlatformOutboundContacts(dataConnect, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.platformOutboundContacts);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ListPlatformOutboundOutreachEvents
You can execute the `ListPlatformOutboundOutreachEvents` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useListPlatformOutboundOutreachEvents(dc: DataConnect, options?: useDataConnectQueryOptions<ListPlatformOutboundOutreachEventsData>): UseDataConnectQueryResult<ListPlatformOutboundOutreachEventsData, undefined>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListPlatformOutboundOutreachEvents(options?: useDataConnectQueryOptions<ListPlatformOutboundOutreachEventsData>): UseDataConnectQueryResult<ListPlatformOutboundOutreachEventsData, undefined>;
```

### Variables
The `ListPlatformOutboundOutreachEvents` Query has no variables.
### Return Type
Recall that calling the `ListPlatformOutboundOutreachEvents` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListPlatformOutboundOutreachEvents` Query is of type `ListPlatformOutboundOutreachEventsData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListPlatformOutboundOutreachEvents`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';
import { useListPlatformOutboundOutreachEvents } from '@dataconnect/generated/react'

export default function ListPlatformOutboundOutreachEventsComponent() {
  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListPlatformOutboundOutreachEvents();

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListPlatformOutboundOutreachEvents(dataConnect);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useListPlatformOutboundOutreachEvents(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useListPlatformOutboundOutreachEvents(dataConnect, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.platformOutboundOutreachEvents);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ListPlatformAgentActivities
You can execute the `ListPlatformAgentActivities` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useListPlatformAgentActivities(dc: DataConnect, options?: useDataConnectQueryOptions<ListPlatformAgentActivitiesData>): UseDataConnectQueryResult<ListPlatformAgentActivitiesData, undefined>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListPlatformAgentActivities(options?: useDataConnectQueryOptions<ListPlatformAgentActivitiesData>): UseDataConnectQueryResult<ListPlatformAgentActivitiesData, undefined>;
```

### Variables
The `ListPlatformAgentActivities` Query has no variables.
### Return Type
Recall that calling the `ListPlatformAgentActivities` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListPlatformAgentActivities` Query is of type `ListPlatformAgentActivitiesData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListPlatformAgentActivities`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';
import { useListPlatformAgentActivities } from '@dataconnect/generated/react'

export default function ListPlatformAgentActivitiesComponent() {
  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListPlatformAgentActivities();

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListPlatformAgentActivities(dataConnect);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useListPlatformAgentActivities(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useListPlatformAgentActivities(dataConnect, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.platformAgentActivities);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ListClientAiBotPerformanceEvents
You can execute the `ListClientAiBotPerformanceEvents` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useListClientAiBotPerformanceEvents(dc: DataConnect, vars: ListClientAiBotPerformanceEventsVariables, options?: useDataConnectQueryOptions<ListClientAiBotPerformanceEventsData>): UseDataConnectQueryResult<ListClientAiBotPerformanceEventsData, ListClientAiBotPerformanceEventsVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListClientAiBotPerformanceEvents(vars: ListClientAiBotPerformanceEventsVariables, options?: useDataConnectQueryOptions<ListClientAiBotPerformanceEventsData>): UseDataConnectQueryResult<ListClientAiBotPerformanceEventsData, ListClientAiBotPerformanceEventsVariables>;
```

### Variables
The `ListClientAiBotPerformanceEvents` Query requires an argument of type `ListClientAiBotPerformanceEventsVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface ListClientAiBotPerformanceEventsVariables {
  clientId: UUIDString;
}
```
### Return Type
Recall that calling the `ListClientAiBotPerformanceEvents` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListClientAiBotPerformanceEvents` Query is of type `ListClientAiBotPerformanceEventsData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListClientAiBotPerformanceEvents`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, ListClientAiBotPerformanceEventsVariables } from '@dataconnect/generated';
import { useListClientAiBotPerformanceEvents } from '@dataconnect/generated/react'

export default function ListClientAiBotPerformanceEventsComponent() {
  // The `useListClientAiBotPerformanceEvents` Query hook requires an argument of type `ListClientAiBotPerformanceEventsVariables`:
  const listClientAiBotPerformanceEventsVars: ListClientAiBotPerformanceEventsVariables = {
    clientId: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListClientAiBotPerformanceEvents(listClientAiBotPerformanceEventsVars);
  // Variables can be defined inline as well.
  const query = useListClientAiBotPerformanceEvents({ clientId: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListClientAiBotPerformanceEvents(dataConnect, listClientAiBotPerformanceEventsVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useListClientAiBotPerformanceEvents(listClientAiBotPerformanceEventsVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useListClientAiBotPerformanceEvents(dataConnect, listClientAiBotPerformanceEventsVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.clientAiBotPerformanceEvents);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetClientConversation
You can execute the `GetClientConversation` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetClientConversation(dc: DataConnect, vars: GetClientConversationVariables, options?: useDataConnectQueryOptions<GetClientConversationData>): UseDataConnectQueryResult<GetClientConversationData, GetClientConversationVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetClientConversation(vars: GetClientConversationVariables, options?: useDataConnectQueryOptions<GetClientConversationData>): UseDataConnectQueryResult<GetClientConversationData, GetClientConversationVariables>;
```

### Variables
The `GetClientConversation` Query requires an argument of type `GetClientConversationVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetClientConversationVariables {
  id: UUIDString;
  accessToken: string;
}
```
### Return Type
Recall that calling the `GetClientConversation` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetClientConversation` Query is of type `GetClientConversationData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetClientConversation`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetClientConversationVariables } from '@dataconnect/generated';
import { useGetClientConversation } from '@dataconnect/generated/react'

export default function GetClientConversationComponent() {
  // The `useGetClientConversation` Query hook requires an argument of type `GetClientConversationVariables`:
  const getClientConversationVars: GetClientConversationVariables = {
    id: ..., 
    accessToken: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetClientConversation(getClientConversationVars);
  // Variables can be defined inline as well.
  const query = useGetClientConversation({ id: ..., accessToken: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetClientConversation(dataConnect, getClientConversationVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetClientConversation(getClientConversationVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetClientConversation(dataConnect, getClientConversationVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.clientConversations);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ListClientConversationsByClientAndToken
You can execute the `ListClientConversationsByClientAndToken` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useListClientConversationsByClientAndToken(dc: DataConnect, vars: ListClientConversationsByClientAndTokenVariables, options?: useDataConnectQueryOptions<ListClientConversationsByClientAndTokenData>): UseDataConnectQueryResult<ListClientConversationsByClientAndTokenData, ListClientConversationsByClientAndTokenVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListClientConversationsByClientAndToken(vars: ListClientConversationsByClientAndTokenVariables, options?: useDataConnectQueryOptions<ListClientConversationsByClientAndTokenData>): UseDataConnectQueryResult<ListClientConversationsByClientAndTokenData, ListClientConversationsByClientAndTokenVariables>;
```

### Variables
The `ListClientConversationsByClientAndToken` Query requires an argument of type `ListClientConversationsByClientAndTokenVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface ListClientConversationsByClientAndTokenVariables {
  clientId: UUIDString;
  accessToken: string;
}
```
### Return Type
Recall that calling the `ListClientConversationsByClientAndToken` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListClientConversationsByClientAndToken` Query is of type `ListClientConversationsByClientAndTokenData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListClientConversationsByClientAndToken`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, ListClientConversationsByClientAndTokenVariables } from '@dataconnect/generated';
import { useListClientConversationsByClientAndToken } from '@dataconnect/generated/react'

export default function ListClientConversationsByClientAndTokenComponent() {
  // The `useListClientConversationsByClientAndToken` Query hook requires an argument of type `ListClientConversationsByClientAndTokenVariables`:
  const listClientConversationsByClientAndTokenVars: ListClientConversationsByClientAndTokenVariables = {
    clientId: ..., 
    accessToken: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListClientConversationsByClientAndToken(listClientConversationsByClientAndTokenVars);
  // Variables can be defined inline as well.
  const query = useListClientConversationsByClientAndToken({ clientId: ..., accessToken: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListClientConversationsByClientAndToken(dataConnect, listClientConversationsByClientAndTokenVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useListClientConversationsByClientAndToken(listClientConversationsByClientAndTokenVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useListClientConversationsByClientAndToken(dataConnect, listClientConversationsByClientAndTokenVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.clientConversations);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ListClientConversationsByAccessToken
You can execute the `ListClientConversationsByAccessToken` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useListClientConversationsByAccessToken(dc: DataConnect, vars: ListClientConversationsByAccessTokenVariables, options?: useDataConnectQueryOptions<ListClientConversationsByAccessTokenData>): UseDataConnectQueryResult<ListClientConversationsByAccessTokenData, ListClientConversationsByAccessTokenVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListClientConversationsByAccessToken(vars: ListClientConversationsByAccessTokenVariables, options?: useDataConnectQueryOptions<ListClientConversationsByAccessTokenData>): UseDataConnectQueryResult<ListClientConversationsByAccessTokenData, ListClientConversationsByAccessTokenVariables>;
```

### Variables
The `ListClientConversationsByAccessToken` Query requires an argument of type `ListClientConversationsByAccessTokenVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface ListClientConversationsByAccessTokenVariables {
  accessToken: string;
}
```
### Return Type
Recall that calling the `ListClientConversationsByAccessToken` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListClientConversationsByAccessToken` Query is of type `ListClientConversationsByAccessTokenData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListClientConversationsByAccessToken`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, ListClientConversationsByAccessTokenVariables } from '@dataconnect/generated';
import { useListClientConversationsByAccessToken } from '@dataconnect/generated/react'

export default function ListClientConversationsByAccessTokenComponent() {
  // The `useListClientConversationsByAccessToken` Query hook requires an argument of type `ListClientConversationsByAccessTokenVariables`:
  const listClientConversationsByAccessTokenVars: ListClientConversationsByAccessTokenVariables = {
    accessToken: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListClientConversationsByAccessToken(listClientConversationsByAccessTokenVars);
  // Variables can be defined inline as well.
  const query = useListClientConversationsByAccessToken({ accessToken: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListClientConversationsByAccessToken(dataConnect, listClientConversationsByAccessTokenVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useListClientConversationsByAccessToken(listClientConversationsByAccessTokenVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useListClientConversationsByAccessToken(dataConnect, listClientConversationsByAccessTokenVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.clientConversations);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetClientByLinkedAuthUidAdmin
You can execute the `GetClientByLinkedAuthUidAdmin` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetClientByLinkedAuthUidAdmin(dc: DataConnect, vars: GetClientByLinkedAuthUidAdminVariables, options?: useDataConnectQueryOptions<GetClientByLinkedAuthUidAdminData>): UseDataConnectQueryResult<GetClientByLinkedAuthUidAdminData, GetClientByLinkedAuthUidAdminVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetClientByLinkedAuthUidAdmin(vars: GetClientByLinkedAuthUidAdminVariables, options?: useDataConnectQueryOptions<GetClientByLinkedAuthUidAdminData>): UseDataConnectQueryResult<GetClientByLinkedAuthUidAdminData, GetClientByLinkedAuthUidAdminVariables>;
```

### Variables
The `GetClientByLinkedAuthUidAdmin` Query requires an argument of type `GetClientByLinkedAuthUidAdminVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetClientByLinkedAuthUidAdminVariables {
  authUid: string;
}
```
### Return Type
Recall that calling the `GetClientByLinkedAuthUidAdmin` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetClientByLinkedAuthUidAdmin` Query is of type `GetClientByLinkedAuthUidAdminData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetClientByLinkedAuthUidAdmin`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetClientByLinkedAuthUidAdminVariables } from '@dataconnect/generated';
import { useGetClientByLinkedAuthUidAdmin } from '@dataconnect/generated/react'

export default function GetClientByLinkedAuthUidAdminComponent() {
  // The `useGetClientByLinkedAuthUidAdmin` Query hook requires an argument of type `GetClientByLinkedAuthUidAdminVariables`:
  const getClientByLinkedAuthUidAdminVars: GetClientByLinkedAuthUidAdminVariables = {
    authUid: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetClientByLinkedAuthUidAdmin(getClientByLinkedAuthUidAdminVars);
  // Variables can be defined inline as well.
  const query = useGetClientByLinkedAuthUidAdmin({ authUid: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetClientByLinkedAuthUidAdmin(dataConnect, getClientByLinkedAuthUidAdminVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetClientByLinkedAuthUidAdmin(getClientByLinkedAuthUidAdminVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetClientByLinkedAuthUidAdmin(dataConnect, getClientByLinkedAuthUidAdminVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.clients);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetClientByPaddleSubscriptionIdAdmin
You can execute the `GetClientByPaddleSubscriptionIdAdmin` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetClientByPaddleSubscriptionIdAdmin(dc: DataConnect, vars: GetClientByPaddleSubscriptionIdAdminVariables, options?: useDataConnectQueryOptions<GetClientByPaddleSubscriptionIdAdminData>): UseDataConnectQueryResult<GetClientByPaddleSubscriptionIdAdminData, GetClientByPaddleSubscriptionIdAdminVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetClientByPaddleSubscriptionIdAdmin(vars: GetClientByPaddleSubscriptionIdAdminVariables, options?: useDataConnectQueryOptions<GetClientByPaddleSubscriptionIdAdminData>): UseDataConnectQueryResult<GetClientByPaddleSubscriptionIdAdminData, GetClientByPaddleSubscriptionIdAdminVariables>;
```

### Variables
The `GetClientByPaddleSubscriptionIdAdmin` Query requires an argument of type `GetClientByPaddleSubscriptionIdAdminVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetClientByPaddleSubscriptionIdAdminVariables {
  paddleSubscriptionId: string;
}
```
### Return Type
Recall that calling the `GetClientByPaddleSubscriptionIdAdmin` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetClientByPaddleSubscriptionIdAdmin` Query is of type `GetClientByPaddleSubscriptionIdAdminData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface GetClientByPaddleSubscriptionIdAdminData {
  clients: ({
    id: UUIDString;
    linkedAuthUid: string;
    subscriptionStatus?: string | null;
    paddleSubscriptionId?: string | null;
  } & Client_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetClientByPaddleSubscriptionIdAdmin`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetClientByPaddleSubscriptionIdAdminVariables } from '@dataconnect/generated';
import { useGetClientByPaddleSubscriptionIdAdmin } from '@dataconnect/generated/react'

export default function GetClientByPaddleSubscriptionIdAdminComponent() {
  // The `useGetClientByPaddleSubscriptionIdAdmin` Query hook requires an argument of type `GetClientByPaddleSubscriptionIdAdminVariables`:
  const getClientByPaddleSubscriptionIdAdminVars: GetClientByPaddleSubscriptionIdAdminVariables = {
    paddleSubscriptionId: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetClientByPaddleSubscriptionIdAdmin(getClientByPaddleSubscriptionIdAdminVars);
  // Variables can be defined inline as well.
  const query = useGetClientByPaddleSubscriptionIdAdmin({ paddleSubscriptionId: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetClientByPaddleSubscriptionIdAdmin(dataConnect, getClientByPaddleSubscriptionIdAdminVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetClientByPaddleSubscriptionIdAdmin(getClientByPaddleSubscriptionIdAdminVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetClientByPaddleSubscriptionIdAdmin(dataConnect, getClientByPaddleSubscriptionIdAdminVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.clients);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

# Mutations

The React generated SDK provides Mutations hook functions that call and return [`useDataConnectMutation`](https://react-query-firebase.invertase.dev/react/data-connect/mutations) hooks from TanStack Query Firebase.

Calling these hook functions will return a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, and the most recent data returned by the Mutation, among other things. To learn more about these hooks and how to use them, see the [TanStack Query Firebase documentation](https://react-query-firebase.invertase.dev/react/data-connect/mutations).

Mutation hooks do not execute their Mutations automatically when called. Rather, after calling the Mutation hook function and getting a `UseMutationResult` object, you must call the `UseMutationResult.mutate()` function to execute the Mutation.

To learn more about TanStack React Query's Mutations, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/guides/mutations).

## Using Mutation Hooks
Here's a general overview of how to use the generated Mutation hooks in your code:

- Mutation hook functions are not called with the arguments to the Mutation. Instead, arguments are passed to `UseMutationResult.mutate()`.
- If the Mutation has no variables, the `mutate()` function does not require arguments.
- If the Mutation has any required variables, the `mutate()` function will require at least one argument: an object that contains all the required variables for the Mutation.
- If the Mutation has some required and some optional variables, only required variables are necessary in the variables argument object, and optional variables may be provided as well.
- If all of the Mutation's variables are optional, the Mutation hook function does not require any arguments.
- Mutation hook functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.
- Mutation hooks also accept an `options` argument of type `useDataConnectMutationOptions`. To learn more about the `options` argument, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/guides/mutations#mutation-side-effects).
  - `UseMutationResult.mutate()` also accepts an `options` argument of type `useDataConnectMutationOptions`.
  - ***Special case:*** If the Mutation has no arguments (or all optional arguments and you wish to provide none), and you want to pass `options` to `UseMutationResult.mutate()`, you must pass `undefined` where you would normally pass the Mutation's arguments, and then may provide the options argument.

Below are examples of how to use the `kona` connector's generated Mutation hook functions to execute each Mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#operations-react-angular).

## UpsertPlatformOwner
You can execute the `UpsertPlatformOwner` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useUpsertPlatformOwner(options?: useDataConnectMutationOptions<UpsertPlatformOwnerData, FirebaseError, UpsertPlatformOwnerVariables | void>): UseDataConnectMutationResult<UpsertPlatformOwnerData, UpsertPlatformOwnerVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useUpsertPlatformOwner(dc: DataConnect, options?: useDataConnectMutationOptions<UpsertPlatformOwnerData, FirebaseError, UpsertPlatformOwnerVariables | void>): UseDataConnectMutationResult<UpsertPlatformOwnerData, UpsertPlatformOwnerVariables>;
```

### Variables
The `UpsertPlatformOwner` Mutation has an optional argument of type `UpsertPlatformOwnerVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface UpsertPlatformOwnerVariables {
  email?: string | null;
  displayName?: string | null;
}
```
### Return Type
Recall that calling the `UpsertPlatformOwner` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `UpsertPlatformOwner` Mutation is of type `UpsertPlatformOwnerData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface UpsertPlatformOwnerData {
  platformOwner_upsert: PlatformOwner_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `UpsertPlatformOwner`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, UpsertPlatformOwnerVariables } from '@dataconnect/generated';
import { useUpsertPlatformOwner } from '@dataconnect/generated/react'

export default function UpsertPlatformOwnerComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useUpsertPlatformOwner();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useUpsertPlatformOwner(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpsertPlatformOwner(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpsertPlatformOwner(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useUpsertPlatformOwner` Mutation has an optional argument of type `UpsertPlatformOwnerVariables`:
  const upsertPlatformOwnerVars: UpsertPlatformOwnerVariables = {
    email: ..., // optional
    displayName: ..., // optional
  };
  mutation.mutate(upsertPlatformOwnerVars);
  // Variables can be defined inline as well.
  mutation.mutate({ email: ..., displayName: ..., });
  // Since all variables are optional for this Mutation, you can omit the `UpsertPlatformOwnerVariables` argument.
  mutation.mutate();

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  // Since all variables are optional for this Mutation, you can provide options without providing any variables.
  // To do so, you must pass `undefined` where you would normally pass the variables.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(upsertPlatformOwnerVars /** or undefined */, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.platformOwner_upsert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## CreateClient
You can execute the `CreateClient` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useCreateClient(options?: useDataConnectMutationOptions<CreateClientData, FirebaseError, CreateClientVariables | void>): UseDataConnectMutationResult<CreateClientData, CreateClientVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useCreateClient(dc: DataConnect, options?: useDataConnectMutationOptions<CreateClientData, FirebaseError, CreateClientVariables | void>): UseDataConnectMutationResult<CreateClientData, CreateClientVariables>;
```

### Variables
The `CreateClient` Mutation has an optional argument of type `CreateClientVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface CreateClientVariables {
  companyName?: string | null;
  clientName?: string | null;
  email?: string | null;
  industry?: string | null;
}
```
### Return Type
Recall that calling the `CreateClient` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `CreateClient` Mutation is of type `CreateClientData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface CreateClientData {
  client_insert: Client_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `CreateClient`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, CreateClientVariables } from '@dataconnect/generated';
import { useCreateClient } from '@dataconnect/generated/react'

export default function CreateClientComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useCreateClient();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useCreateClient(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateClient(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateClient(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useCreateClient` Mutation has an optional argument of type `CreateClientVariables`:
  const createClientVars: CreateClientVariables = {
    companyName: ..., // optional
    clientName: ..., // optional
    email: ..., // optional
    industry: ..., // optional
  };
  mutation.mutate(createClientVars);
  // Variables can be defined inline as well.
  mutation.mutate({ companyName: ..., clientName: ..., email: ..., industry: ..., });
  // Since all variables are optional for this Mutation, you can omit the `CreateClientVariables` argument.
  mutation.mutate();

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  // Since all variables are optional for this Mutation, you can provide options without providing any variables.
  // To do so, you must pass `undefined` where you would normally pass the variables.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(createClientVars /** or undefined */, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.client_insert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## UpdateClient
You can execute the `UpdateClient` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useUpdateClient(options?: useDataConnectMutationOptions<UpdateClientData, FirebaseError, UpdateClientVariables>): UseDataConnectMutationResult<UpdateClientData, UpdateClientVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useUpdateClient(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateClientData, FirebaseError, UpdateClientVariables>): UseDataConnectMutationResult<UpdateClientData, UpdateClientVariables>;
```

### Variables
The `UpdateClient` Mutation requires an argument of type `UpdateClientVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
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
Recall that calling the `UpdateClient` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `UpdateClient` Mutation is of type `UpdateClientData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface UpdateClientData {
  client_update?: Client_Key | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `UpdateClient`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, UpdateClientVariables } from '@dataconnect/generated';
import { useUpdateClient } from '@dataconnect/generated/react'

export default function UpdateClientComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useUpdateClient();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useUpdateClient(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpdateClient(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpdateClient(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useUpdateClient` Mutation requires an argument of type `UpdateClientVariables`:
  const updateClientVars: UpdateClientVariables = {
    id: ..., 
    companyName: ..., // optional
    clientName: ..., // optional
    email: ..., // optional
    industry: ..., // optional
    subscriptionStatus: ..., // optional
    paddleSubscriptionId: ..., // optional
  };
  mutation.mutate(updateClientVars);
  // Variables can be defined inline as well.
  mutation.mutate({ id: ..., companyName: ..., clientName: ..., email: ..., industry: ..., subscriptionStatus: ..., paddleSubscriptionId: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(updateClientVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.client_update);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## CreateClientAiBotConfig
You can execute the `CreateClientAiBotConfig` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useCreateClientAiBotConfig(options?: useDataConnectMutationOptions<CreateClientAiBotConfigData, FirebaseError, CreateClientAiBotConfigVariables>): UseDataConnectMutationResult<CreateClientAiBotConfigData, CreateClientAiBotConfigVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useCreateClientAiBotConfig(dc: DataConnect, options?: useDataConnectMutationOptions<CreateClientAiBotConfigData, FirebaseError, CreateClientAiBotConfigVariables>): UseDataConnectMutationResult<CreateClientAiBotConfigData, CreateClientAiBotConfigVariables>;
```

### Variables
The `CreateClientAiBotConfig` Mutation requires an argument of type `CreateClientAiBotConfigVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
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
Recall that calling the `CreateClientAiBotConfig` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `CreateClientAiBotConfig` Mutation is of type `CreateClientAiBotConfigData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface CreateClientAiBotConfigData {
  clientAiBotConfig_insert: ClientAiBotConfig_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `CreateClientAiBotConfig`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, CreateClientAiBotConfigVariables } from '@dataconnect/generated';
import { useCreateClientAiBotConfig } from '@dataconnect/generated/react'

export default function CreateClientAiBotConfigComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useCreateClientAiBotConfig();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useCreateClientAiBotConfig(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateClientAiBotConfig(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateClientAiBotConfig(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useCreateClientAiBotConfig` Mutation requires an argument of type `CreateClientAiBotConfigVariables`:
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
  mutation.mutate(createClientAiBotConfigVars);
  // Variables can be defined inline as well.
  mutation.mutate({ clientId: ..., botName: ..., accessToken: ..., aiModelApiKey: ..., schedulingApiKey: ..., knowledgeBaseJson: ..., welcomeMessage: ..., customInstructions: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(createClientAiBotConfigVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.clientAiBotConfig_insert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## UpdateClientAiBotConfig
You can execute the `UpdateClientAiBotConfig` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useUpdateClientAiBotConfig(options?: useDataConnectMutationOptions<UpdateClientAiBotConfigData, FirebaseError, UpdateClientAiBotConfigVariables>): UseDataConnectMutationResult<UpdateClientAiBotConfigData, UpdateClientAiBotConfigVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useUpdateClientAiBotConfig(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateClientAiBotConfigData, FirebaseError, UpdateClientAiBotConfigVariables>): UseDataConnectMutationResult<UpdateClientAiBotConfigData, UpdateClientAiBotConfigVariables>;
```

### Variables
The `UpdateClientAiBotConfig` Mutation requires an argument of type `UpdateClientAiBotConfigVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
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
Recall that calling the `UpdateClientAiBotConfig` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `UpdateClientAiBotConfig` Mutation is of type `UpdateClientAiBotConfigData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface UpdateClientAiBotConfigData {
  clientAiBotConfig_update?: ClientAiBotConfig_Key | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `UpdateClientAiBotConfig`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, UpdateClientAiBotConfigVariables } from '@dataconnect/generated';
import { useUpdateClientAiBotConfig } from '@dataconnect/generated/react'

export default function UpdateClientAiBotConfigComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useUpdateClientAiBotConfig();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useUpdateClientAiBotConfig(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpdateClientAiBotConfig(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpdateClientAiBotConfig(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useUpdateClientAiBotConfig` Mutation requires an argument of type `UpdateClientAiBotConfigVariables`:
  const updateClientAiBotConfigVars: UpdateClientAiBotConfigVariables = {
    id: ..., 
    botName: ..., // optional
    aiModelApiKey: ..., // optional
    schedulingApiKey: ..., // optional
    knowledgeBaseJson: ..., // optional
    welcomeMessage: ..., // optional
    customInstructions: ..., // optional
  };
  mutation.mutate(updateClientAiBotConfigVars);
  // Variables can be defined inline as well.
  mutation.mutate({ id: ..., botName: ..., aiModelApiKey: ..., schedulingApiKey: ..., knowledgeBaseJson: ..., welcomeMessage: ..., customInstructions: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(updateClientAiBotConfigVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.clientAiBotConfig_update);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## CreateClientInboundContact
You can execute the `CreateClientInboundContact` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useCreateClientInboundContact(options?: useDataConnectMutationOptions<CreateClientInboundContactData, FirebaseError, CreateClientInboundContactVariables>): UseDataConnectMutationResult<CreateClientInboundContactData, CreateClientInboundContactVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useCreateClientInboundContact(dc: DataConnect, options?: useDataConnectMutationOptions<CreateClientInboundContactData, FirebaseError, CreateClientInboundContactVariables>): UseDataConnectMutationResult<CreateClientInboundContactData, CreateClientInboundContactVariables>;
```

### Variables
The `CreateClientInboundContact` Mutation requires an argument of type `CreateClientInboundContactVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
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
Recall that calling the `CreateClientInboundContact` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `CreateClientInboundContact` Mutation is of type `CreateClientInboundContactData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface CreateClientInboundContactData {
  clientInboundContact_insert: ClientInboundContact_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `CreateClientInboundContact`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, CreateClientInboundContactVariables } from '@dataconnect/generated';
import { useCreateClientInboundContact } from '@dataconnect/generated/react'

export default function CreateClientInboundContactComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useCreateClientInboundContact();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useCreateClientInboundContact(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateClientInboundContact(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateClientInboundContact(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useCreateClientInboundContact` Mutation requires an argument of type `CreateClientInboundContactVariables`:
  const createClientInboundContactVars: CreateClientInboundContactVariables = {
    clientId: ..., 
    companyName: ..., // optional
    websiteUrl: ..., // optional
    contactEmail: ..., // optional
    contactStatus: ..., // optional
    initialPitchDraft: ..., // optional
    identifiedPainPoints: ..., // optional
  };
  mutation.mutate(createClientInboundContactVars);
  // Variables can be defined inline as well.
  mutation.mutate({ clientId: ..., companyName: ..., websiteUrl: ..., contactEmail: ..., contactStatus: ..., initialPitchDraft: ..., identifiedPainPoints: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(createClientInboundContactVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.clientInboundContact_insert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## UpdateClientInboundContact
You can execute the `UpdateClientInboundContact` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useUpdateClientInboundContact(options?: useDataConnectMutationOptions<UpdateClientInboundContactData, FirebaseError, UpdateClientInboundContactVariables>): UseDataConnectMutationResult<UpdateClientInboundContactData, UpdateClientInboundContactVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useUpdateClientInboundContact(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateClientInboundContactData, FirebaseError, UpdateClientInboundContactVariables>): UseDataConnectMutationResult<UpdateClientInboundContactData, UpdateClientInboundContactVariables>;
```

### Variables
The `UpdateClientInboundContact` Mutation requires an argument of type `UpdateClientInboundContactVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
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
Recall that calling the `UpdateClientInboundContact` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `UpdateClientInboundContact` Mutation is of type `UpdateClientInboundContactData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface UpdateClientInboundContactData {
  clientInboundContact_update?: ClientInboundContact_Key | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `UpdateClientInboundContact`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, UpdateClientInboundContactVariables } from '@dataconnect/generated';
import { useUpdateClientInboundContact } from '@dataconnect/generated/react'

export default function UpdateClientInboundContactComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useUpdateClientInboundContact();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useUpdateClientInboundContact(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpdateClientInboundContact(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpdateClientInboundContact(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useUpdateClientInboundContact` Mutation requires an argument of type `UpdateClientInboundContactVariables`:
  const updateClientInboundContactVars: UpdateClientInboundContactVariables = {
    id: ..., 
    companyName: ..., // optional
    websiteUrl: ..., // optional
    contactStatus: ..., // optional
    contactEmail: ..., // optional
    initialPitchDraft: ..., // optional
    identifiedPainPoints: ..., // optional
  };
  mutation.mutate(updateClientInboundContactVars);
  // Variables can be defined inline as well.
  mutation.mutate({ id: ..., companyName: ..., websiteUrl: ..., contactStatus: ..., contactEmail: ..., initialPitchDraft: ..., identifiedPainPoints: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(updateClientInboundContactVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.clientInboundContact_update);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## CreatePlatformInboundContact
You can execute the `CreatePlatformInboundContact` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useCreatePlatformInboundContact(options?: useDataConnectMutationOptions<CreatePlatformInboundContactData, FirebaseError, CreatePlatformInboundContactVariables | void>): UseDataConnectMutationResult<CreatePlatformInboundContactData, CreatePlatformInboundContactVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useCreatePlatformInboundContact(dc: DataConnect, options?: useDataConnectMutationOptions<CreatePlatformInboundContactData, FirebaseError, CreatePlatformInboundContactVariables | void>): UseDataConnectMutationResult<CreatePlatformInboundContactData, CreatePlatformInboundContactVariables>;
```

### Variables
The `CreatePlatformInboundContact` Mutation has an optional argument of type `CreatePlatformInboundContactVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
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
Recall that calling the `CreatePlatformInboundContact` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `CreatePlatformInboundContact` Mutation is of type `CreatePlatformInboundContactData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface CreatePlatformInboundContactData {
  platformInboundContact_insert: PlatformInboundContact_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `CreatePlatformInboundContact`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, CreatePlatformInboundContactVariables } from '@dataconnect/generated';
import { useCreatePlatformInboundContact } from '@dataconnect/generated/react'

export default function CreatePlatformInboundContactComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useCreatePlatformInboundContact();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useCreatePlatformInboundContact(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreatePlatformInboundContact(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreatePlatformInboundContact(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useCreatePlatformInboundContact` Mutation has an optional argument of type `CreatePlatformInboundContactVariables`:
  const createPlatformInboundContactVars: CreatePlatformInboundContactVariables = {
    companyName: ..., // optional
    websiteUrl: ..., // optional
    contactStatus: ..., // optional
    contactEmail: ..., // optional
    initialPitchDraft: ..., // optional
    identifiedPainPoints: ..., // optional
    nativeAgent: ..., // optional
  };
  mutation.mutate(createPlatformInboundContactVars);
  // Variables can be defined inline as well.
  mutation.mutate({ companyName: ..., websiteUrl: ..., contactStatus: ..., contactEmail: ..., initialPitchDraft: ..., identifiedPainPoints: ..., nativeAgent: ..., });
  // Since all variables are optional for this Mutation, you can omit the `CreatePlatformInboundContactVariables` argument.
  mutation.mutate();

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  // Since all variables are optional for this Mutation, you can provide options without providing any variables.
  // To do so, you must pass `undefined` where you would normally pass the variables.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(createPlatformInboundContactVars /** or undefined */, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.platformInboundContact_insert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## CreatePlatformOutboundContact
You can execute the `CreatePlatformOutboundContact` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useCreatePlatformOutboundContact(options?: useDataConnectMutationOptions<CreatePlatformOutboundContactData, FirebaseError, CreatePlatformOutboundContactVariables | void>): UseDataConnectMutationResult<CreatePlatformOutboundContactData, CreatePlatformOutboundContactVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useCreatePlatformOutboundContact(dc: DataConnect, options?: useDataConnectMutationOptions<CreatePlatformOutboundContactData, FirebaseError, CreatePlatformOutboundContactVariables | void>): UseDataConnectMutationResult<CreatePlatformOutboundContactData, CreatePlatformOutboundContactVariables>;
```

### Variables
The `CreatePlatformOutboundContact` Mutation has an optional argument of type `CreatePlatformOutboundContactVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface CreatePlatformOutboundContactVariables {
  scrapedData?: unknown | null;
  hasExistingAI?: boolean | null;
  auditDate?: DateString | null;
  aiDetectionDetails?: unknown | null;
}
```
### Return Type
Recall that calling the `CreatePlatformOutboundContact` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `CreatePlatformOutboundContact` Mutation is of type `CreatePlatformOutboundContactData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface CreatePlatformOutboundContactData {
  platformOutboundContact_insert: PlatformOutboundContact_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `CreatePlatformOutboundContact`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, CreatePlatformOutboundContactVariables } from '@dataconnect/generated';
import { useCreatePlatformOutboundContact } from '@dataconnect/generated/react'

export default function CreatePlatformOutboundContactComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useCreatePlatformOutboundContact();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useCreatePlatformOutboundContact(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreatePlatformOutboundContact(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreatePlatformOutboundContact(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useCreatePlatformOutboundContact` Mutation has an optional argument of type `CreatePlatformOutboundContactVariables`:
  const createPlatformOutboundContactVars: CreatePlatformOutboundContactVariables = {
    scrapedData: ..., // optional
    hasExistingAI: ..., // optional
    auditDate: ..., // optional
    aiDetectionDetails: ..., // optional
  };
  mutation.mutate(createPlatformOutboundContactVars);
  // Variables can be defined inline as well.
  mutation.mutate({ scrapedData: ..., hasExistingAI: ..., auditDate: ..., aiDetectionDetails: ..., });
  // Since all variables are optional for this Mutation, you can omit the `CreatePlatformOutboundContactVariables` argument.
  mutation.mutate();

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  // Since all variables are optional for this Mutation, you can provide options without providing any variables.
  // To do so, you must pass `undefined` where you would normally pass the variables.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(createPlatformOutboundContactVars /** or undefined */, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.platformOutboundContact_insert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## CreatePlatformOutboundOutreachEvent
You can execute the `CreatePlatformOutboundOutreachEvent` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useCreatePlatformOutboundOutreachEvent(options?: useDataConnectMutationOptions<CreatePlatformOutboundOutreachEventData, FirebaseError, CreatePlatformOutboundOutreachEventVariables>): UseDataConnectMutationResult<CreatePlatformOutboundOutreachEventData, CreatePlatformOutboundOutreachEventVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useCreatePlatformOutboundOutreachEvent(dc: DataConnect, options?: useDataConnectMutationOptions<CreatePlatformOutboundOutreachEventData, FirebaseError, CreatePlatformOutboundOutreachEventVariables>): UseDataConnectMutationResult<CreatePlatformOutboundOutreachEventData, CreatePlatformOutboundOutreachEventVariables>;
```

### Variables
The `CreatePlatformOutboundOutreachEvent` Mutation requires an argument of type `CreatePlatformOutboundOutreachEventVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
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
Recall that calling the `CreatePlatformOutboundOutreachEvent` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `CreatePlatformOutboundOutreachEvent` Mutation is of type `CreatePlatformOutboundOutreachEventData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface CreatePlatformOutboundOutreachEventData {
  platformOutboundOutreachEvent_insert: PlatformOutboundOutreachEvent_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `CreatePlatformOutboundOutreachEvent`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, CreatePlatformOutboundOutreachEventVariables } from '@dataconnect/generated';
import { useCreatePlatformOutboundOutreachEvent } from '@dataconnect/generated/react'

export default function CreatePlatformOutboundOutreachEventComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useCreatePlatformOutboundOutreachEvent();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useCreatePlatformOutboundOutreachEvent(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreatePlatformOutboundOutreachEvent(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreatePlatformOutboundOutreachEvent(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useCreatePlatformOutboundOutreachEvent` Mutation requires an argument of type `CreatePlatformOutboundOutreachEventVariables`:
  const createPlatformOutboundOutreachEventVars: CreatePlatformOutboundOutreachEventVariables = {
    platformOutboundContactId: ..., 
    outreachType: ..., // optional
    status: ..., // optional
    sendDate: ..., // optional
    messageContent: ..., // optional
    adminNotes: ..., // optional
  };
  mutation.mutate(createPlatformOutboundOutreachEventVars);
  // Variables can be defined inline as well.
  mutation.mutate({ platformOutboundContactId: ..., outreachType: ..., status: ..., sendDate: ..., messageContent: ..., adminNotes: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(createPlatformOutboundOutreachEventVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.platformOutboundOutreachEvent_insert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## CreatePlatformAgentActivity
You can execute the `CreatePlatformAgentActivity` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useCreatePlatformAgentActivity(options?: useDataConnectMutationOptions<CreatePlatformAgentActivityData, FirebaseError, CreatePlatformAgentActivityVariables | void>): UseDataConnectMutationResult<CreatePlatformAgentActivityData, CreatePlatformAgentActivityVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useCreatePlatformAgentActivity(dc: DataConnect, options?: useDataConnectMutationOptions<CreatePlatformAgentActivityData, FirebaseError, CreatePlatformAgentActivityVariables | void>): UseDataConnectMutationResult<CreatePlatformAgentActivityData, CreatePlatformAgentActivityVariables>;
```

### Variables
The `CreatePlatformAgentActivity` Mutation has an optional argument of type `CreatePlatformAgentActivityVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
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
Recall that calling the `CreatePlatformAgentActivity` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `CreatePlatformAgentActivity` Mutation is of type `CreatePlatformAgentActivityData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface CreatePlatformAgentActivityData {
  platformAgentActivity_insert: PlatformAgentActivity_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `CreatePlatformAgentActivity`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, CreatePlatformAgentActivityVariables } from '@dataconnect/generated';
import { useCreatePlatformAgentActivity } from '@dataconnect/generated/react'

export default function CreatePlatformAgentActivityComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useCreatePlatformAgentActivity();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useCreatePlatformAgentActivity(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreatePlatformAgentActivity(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreatePlatformAgentActivity(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useCreatePlatformAgentActivity` Mutation has an optional argument of type `CreatePlatformAgentActivityVariables`:
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
  mutation.mutate(createPlatformAgentActivityVars);
  // Variables can be defined inline as well.
  mutation.mutate({ agentType: ..., action: ..., targetUrl: ..., outcome: ..., tokensUsed: ..., durationMs: ..., metadata: ..., platformOutboundContactId: ..., platformInboundContactId: ..., platformOutboundOutreachEventId: ..., });
  // Since all variables are optional for this Mutation, you can omit the `CreatePlatformAgentActivityVariables` argument.
  mutation.mutate();

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  // Since all variables are optional for this Mutation, you can provide options without providing any variables.
  // To do so, you must pass `undefined` where you would normally pass the variables.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(createPlatformAgentActivityVars /** or undefined */, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.platformAgentActivity_insert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## CreateClientAiBotPerformanceEvent
You can execute the `CreateClientAiBotPerformanceEvent` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useCreateClientAiBotPerformanceEvent(options?: useDataConnectMutationOptions<CreateClientAiBotPerformanceEventData, FirebaseError, CreateClientAiBotPerformanceEventVariables>): UseDataConnectMutationResult<CreateClientAiBotPerformanceEventData, CreateClientAiBotPerformanceEventVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useCreateClientAiBotPerformanceEvent(dc: DataConnect, options?: useDataConnectMutationOptions<CreateClientAiBotPerformanceEventData, FirebaseError, CreateClientAiBotPerformanceEventVariables>): UseDataConnectMutationResult<CreateClientAiBotPerformanceEventData, CreateClientAiBotPerformanceEventVariables>;
```

### Variables
The `CreateClientAiBotPerformanceEvent` Mutation requires an argument of type `CreateClientAiBotPerformanceEventVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
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
Recall that calling the `CreateClientAiBotPerformanceEvent` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `CreateClientAiBotPerformanceEvent` Mutation is of type `CreateClientAiBotPerformanceEventData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface CreateClientAiBotPerformanceEventData {
  clientAiBotPerformanceEvent_insert: ClientAiBotPerformanceEvent_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `CreateClientAiBotPerformanceEvent`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, CreateClientAiBotPerformanceEventVariables } from '@dataconnect/generated';
import { useCreateClientAiBotPerformanceEvent } from '@dataconnect/generated/react'

export default function CreateClientAiBotPerformanceEventComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useCreateClientAiBotPerformanceEvent();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useCreateClientAiBotPerformanceEvent(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateClientAiBotPerformanceEvent(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateClientAiBotPerformanceEvent(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useCreateClientAiBotPerformanceEvent` Mutation requires an argument of type `CreateClientAiBotPerformanceEventVariables`:
  const createClientAiBotPerformanceEventVars: CreateClientAiBotPerformanceEventVariables = {
    clientId: ..., 
    eventType: ..., // optional
    sessionDurationMs: ..., // optional
    messageCount: ..., // optional
    tokensUsed: ..., // optional
    metadata: ..., // optional
    clientInboundContactId: ..., // optional
  };
  mutation.mutate(createClientAiBotPerformanceEventVars);
  // Variables can be defined inline as well.
  mutation.mutate({ clientId: ..., eventType: ..., sessionDurationMs: ..., messageCount: ..., tokensUsed: ..., metadata: ..., clientInboundContactId: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(createClientAiBotPerformanceEventVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.clientAiBotPerformanceEvent_insert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## CreateClientConversation
You can execute the `CreateClientConversation` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useCreateClientConversation(options?: useDataConnectMutationOptions<CreateClientConversationData, FirebaseError, CreateClientConversationVariables>): UseDataConnectMutationResult<CreateClientConversationData, CreateClientConversationVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useCreateClientConversation(dc: DataConnect, options?: useDataConnectMutationOptions<CreateClientConversationData, FirebaseError, CreateClientConversationVariables>): UseDataConnectMutationResult<CreateClientConversationData, CreateClientConversationVariables>;
```

### Variables
The `CreateClientConversation` Mutation requires an argument of type `CreateClientConversationVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface CreateClientConversationVariables {
  clientId: UUIDString;
  accessToken: string;
  messages?: unknown | null;
}
```
### Return Type
Recall that calling the `CreateClientConversation` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `CreateClientConversation` Mutation is of type `CreateClientConversationData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface CreateClientConversationData {
  clientConversation_insert: ClientConversation_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `CreateClientConversation`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, CreateClientConversationVariables } from '@dataconnect/generated';
import { useCreateClientConversation } from '@dataconnect/generated/react'

export default function CreateClientConversationComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useCreateClientConversation();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useCreateClientConversation(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateClientConversation(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateClientConversation(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useCreateClientConversation` Mutation requires an argument of type `CreateClientConversationVariables`:
  const createClientConversationVars: CreateClientConversationVariables = {
    clientId: ..., 
    accessToken: ..., 
    messages: ..., // optional
  };
  mutation.mutate(createClientConversationVars);
  // Variables can be defined inline as well.
  mutation.mutate({ clientId: ..., accessToken: ..., messages: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(createClientConversationVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.clientConversation_insert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## UpdateClientConversation
You can execute the `UpdateClientConversation` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useUpdateClientConversation(options?: useDataConnectMutationOptions<UpdateClientConversationData, FirebaseError, UpdateClientConversationVariables>): UseDataConnectMutationResult<UpdateClientConversationData, UpdateClientConversationVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useUpdateClientConversation(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateClientConversationData, FirebaseError, UpdateClientConversationVariables>): UseDataConnectMutationResult<UpdateClientConversationData, UpdateClientConversationVariables>;
```

### Variables
The `UpdateClientConversation` Mutation requires an argument of type `UpdateClientConversationVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface UpdateClientConversationVariables {
  id: UUIDString;
  accessToken: string;
  messages?: unknown | null;
}
```
### Return Type
Recall that calling the `UpdateClientConversation` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `UpdateClientConversation` Mutation is of type `UpdateClientConversationData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface UpdateClientConversationData {
  clientConversation_update?: ClientConversation_Key | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `UpdateClientConversation`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, UpdateClientConversationVariables } from '@dataconnect/generated';
import { useUpdateClientConversation } from '@dataconnect/generated/react'

export default function UpdateClientConversationComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useUpdateClientConversation();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useUpdateClientConversation(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpdateClientConversation(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpdateClientConversation(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useUpdateClientConversation` Mutation requires an argument of type `UpdateClientConversationVariables`:
  const updateClientConversationVars: UpdateClientConversationVariables = {
    id: ..., 
    accessToken: ..., 
    messages: ..., // optional
  };
  mutation.mutate(updateClientConversationVars);
  // Variables can be defined inline as well.
  mutation.mutate({ id: ..., accessToken: ..., messages: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(updateClientConversationVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.clientConversation_update);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## CreateClientAdmin
You can execute the `CreateClientAdmin` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useCreateClientAdmin(options?: useDataConnectMutationOptions<CreateClientAdminData, FirebaseError, CreateClientAdminVariables>): UseDataConnectMutationResult<CreateClientAdminData, CreateClientAdminVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useCreateClientAdmin(dc: DataConnect, options?: useDataConnectMutationOptions<CreateClientAdminData, FirebaseError, CreateClientAdminVariables>): UseDataConnectMutationResult<CreateClientAdminData, CreateClientAdminVariables>;
```

### Variables
The `CreateClientAdmin` Mutation requires an argument of type `CreateClientAdminVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
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
Recall that calling the `CreateClientAdmin` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `CreateClientAdmin` Mutation is of type `CreateClientAdminData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface CreateClientAdminData {
  client_insert: Client_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `CreateClientAdmin`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, CreateClientAdminVariables } from '@dataconnect/generated';
import { useCreateClientAdmin } from '@dataconnect/generated/react'

export default function CreateClientAdminComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useCreateClientAdmin();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useCreateClientAdmin(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateClientAdmin(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateClientAdmin(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useCreateClientAdmin` Mutation requires an argument of type `CreateClientAdminVariables`:
  const createClientAdminVars: CreateClientAdminVariables = {
    linkedAuthUid: ..., 
    companyName: ..., // optional
    clientName: ..., // optional
    email: ..., // optional
    industry: ..., // optional
    subscriptionStatus: ..., // optional
    paddleSubscriptionId: ..., // optional
  };
  mutation.mutate(createClientAdminVars);
  // Variables can be defined inline as well.
  mutation.mutate({ linkedAuthUid: ..., companyName: ..., clientName: ..., email: ..., industry: ..., subscriptionStatus: ..., paddleSubscriptionId: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(createClientAdminVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.client_insert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## UpdateClientAdmin
You can execute the `UpdateClientAdmin` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useUpdateClientAdmin(options?: useDataConnectMutationOptions<UpdateClientAdminData, FirebaseError, UpdateClientAdminVariables>): UseDataConnectMutationResult<UpdateClientAdminData, UpdateClientAdminVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useUpdateClientAdmin(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateClientAdminData, FirebaseError, UpdateClientAdminVariables>): UseDataConnectMutationResult<UpdateClientAdminData, UpdateClientAdminVariables>;
```

### Variables
The `UpdateClientAdmin` Mutation requires an argument of type `UpdateClientAdminVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
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
Recall that calling the `UpdateClientAdmin` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `UpdateClientAdmin` Mutation is of type `UpdateClientAdminData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface UpdateClientAdminData {
  client_update?: Client_Key | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `UpdateClientAdmin`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, UpdateClientAdminVariables } from '@dataconnect/generated';
import { useUpdateClientAdmin } from '@dataconnect/generated/react'

export default function UpdateClientAdminComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useUpdateClientAdmin();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useUpdateClientAdmin(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpdateClientAdmin(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpdateClientAdmin(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useUpdateClientAdmin` Mutation requires an argument of type `UpdateClientAdminVariables`:
  const updateClientAdminVars: UpdateClientAdminVariables = {
    id: ..., 
    companyName: ..., // optional
    clientName: ..., // optional
    email: ..., // optional
    subscriptionStatus: ..., // optional
    paddleSubscriptionId: ..., // optional
  };
  mutation.mutate(updateClientAdminVars);
  // Variables can be defined inline as well.
  mutation.mutate({ id: ..., companyName: ..., clientName: ..., email: ..., subscriptionStatus: ..., paddleSubscriptionId: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(updateClientAdminVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.client_update);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## WebhookCreateClientWithConfig
You can execute the `WebhookCreateClientWithConfig` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useWebhookCreateClientWithConfig(options?: useDataConnectMutationOptions<WebhookCreateClientWithConfigData, FirebaseError, WebhookCreateClientWithConfigVariables>): UseDataConnectMutationResult<WebhookCreateClientWithConfigData, WebhookCreateClientWithConfigVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useWebhookCreateClientWithConfig(dc: DataConnect, options?: useDataConnectMutationOptions<WebhookCreateClientWithConfigData, FirebaseError, WebhookCreateClientWithConfigVariables>): UseDataConnectMutationResult<WebhookCreateClientWithConfigData, WebhookCreateClientWithConfigVariables>;
```

### Variables
The `WebhookCreateClientWithConfig` Mutation requires an argument of type `WebhookCreateClientWithConfigVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
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
Recall that calling the `WebhookCreateClientWithConfig` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `WebhookCreateClientWithConfig` Mutation is of type `WebhookCreateClientWithConfigData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface WebhookCreateClientWithConfigData {
  client_insert: Client_Key;
  clientAiBotConfig_insert: ClientAiBotConfig_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `WebhookCreateClientWithConfig`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, WebhookCreateClientWithConfigVariables } from '@dataconnect/generated';
import { useWebhookCreateClientWithConfig } from '@dataconnect/generated/react'

export default function WebhookCreateClientWithConfigComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useWebhookCreateClientWithConfig();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useWebhookCreateClientWithConfig(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useWebhookCreateClientWithConfig(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useWebhookCreateClientWithConfig(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useWebhookCreateClientWithConfig` Mutation requires an argument of type `WebhookCreateClientWithConfigVariables`:
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
  mutation.mutate(webhookCreateClientWithConfigVars);
  // Variables can be defined inline as well.
  mutation.mutate({ linkedAuthUid: ..., companyName: ..., clientName: ..., email: ..., subscriptionStatus: ..., paddleSubscriptionId: ..., botName: ..., accessToken: ..., aiModelApiKey: ..., welcomeMessage: ..., customInstructions: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(webhookCreateClientWithConfigVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.client_insert);
    console.log(mutation.data.clientAiBotConfig_insert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## CreateClientAiBotConfigAdmin
You can execute the `CreateClientAiBotConfigAdmin` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useCreateClientAiBotConfigAdmin(options?: useDataConnectMutationOptions<CreateClientAiBotConfigAdminData, FirebaseError, CreateClientAiBotConfigAdminVariables>): UseDataConnectMutationResult<CreateClientAiBotConfigAdminData, CreateClientAiBotConfigAdminVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useCreateClientAiBotConfigAdmin(dc: DataConnect, options?: useDataConnectMutationOptions<CreateClientAiBotConfigAdminData, FirebaseError, CreateClientAiBotConfigAdminVariables>): UseDataConnectMutationResult<CreateClientAiBotConfigAdminData, CreateClientAiBotConfigAdminVariables>;
```

### Variables
The `CreateClientAiBotConfigAdmin` Mutation requires an argument of type `CreateClientAiBotConfigAdminVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
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
Recall that calling the `CreateClientAiBotConfigAdmin` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `CreateClientAiBotConfigAdmin` Mutation is of type `CreateClientAiBotConfigAdminData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface CreateClientAiBotConfigAdminData {
  clientAiBotConfig_insert: ClientAiBotConfig_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `CreateClientAiBotConfigAdmin`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, CreateClientAiBotConfigAdminVariables } from '@dataconnect/generated';
import { useCreateClientAiBotConfigAdmin } from '@dataconnect/generated/react'

export default function CreateClientAiBotConfigAdminComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useCreateClientAiBotConfigAdmin();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useCreateClientAiBotConfigAdmin(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateClientAiBotConfigAdmin(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateClientAiBotConfigAdmin(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useCreateClientAiBotConfigAdmin` Mutation requires an argument of type `CreateClientAiBotConfigAdminVariables`:
  const createClientAiBotConfigAdminVars: CreateClientAiBotConfigAdminVariables = {
    clientId: ..., 
    botName: ..., // optional
    accessToken: ..., 
    aiModelApiKey: ..., // optional
    schedulingApiKey: ..., // optional
    welcomeMessage: ..., // optional
    customInstructions: ..., // optional
  };
  mutation.mutate(createClientAiBotConfigAdminVars);
  // Variables can be defined inline as well.
  mutation.mutate({ clientId: ..., botName: ..., accessToken: ..., aiModelApiKey: ..., schedulingApiKey: ..., welcomeMessage: ..., customInstructions: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(createClientAiBotConfigAdminVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.clientAiBotConfig_insert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## UpdateClientAiBotConfigAdmin
You can execute the `UpdateClientAiBotConfigAdmin` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useUpdateClientAiBotConfigAdmin(options?: useDataConnectMutationOptions<UpdateClientAiBotConfigAdminData, FirebaseError, UpdateClientAiBotConfigAdminVariables>): UseDataConnectMutationResult<UpdateClientAiBotConfigAdminData, UpdateClientAiBotConfigAdminVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useUpdateClientAiBotConfigAdmin(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateClientAiBotConfigAdminData, FirebaseError, UpdateClientAiBotConfigAdminVariables>): UseDataConnectMutationResult<UpdateClientAiBotConfigAdminData, UpdateClientAiBotConfigAdminVariables>;
```

### Variables
The `UpdateClientAiBotConfigAdmin` Mutation requires an argument of type `UpdateClientAiBotConfigAdminVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
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
Recall that calling the `UpdateClientAiBotConfigAdmin` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `UpdateClientAiBotConfigAdmin` Mutation is of type `UpdateClientAiBotConfigAdminData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface UpdateClientAiBotConfigAdminData {
  clientAiBotConfig_update?: ClientAiBotConfig_Key | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `UpdateClientAiBotConfigAdmin`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, UpdateClientAiBotConfigAdminVariables } from '@dataconnect/generated';
import { useUpdateClientAiBotConfigAdmin } from '@dataconnect/generated/react'

export default function UpdateClientAiBotConfigAdminComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useUpdateClientAiBotConfigAdmin();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useUpdateClientAiBotConfigAdmin(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpdateClientAiBotConfigAdmin(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpdateClientAiBotConfigAdmin(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useUpdateClientAiBotConfigAdmin` Mutation requires an argument of type `UpdateClientAiBotConfigAdminVariables`:
  const updateClientAiBotConfigAdminVars: UpdateClientAiBotConfigAdminVariables = {
    id: ..., 
    botName: ..., // optional
    aiModelApiKey: ..., // optional
    schedulingApiKey: ..., // optional
    welcomeMessage: ..., // optional
    customInstructions: ..., // optional
  };
  mutation.mutate(updateClientAiBotConfigAdminVars);
  // Variables can be defined inline as well.
  mutation.mutate({ id: ..., botName: ..., aiModelApiKey: ..., schedulingApiKey: ..., welcomeMessage: ..., customInstructions: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(updateClientAiBotConfigAdminVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.clientAiBotConfig_update);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

