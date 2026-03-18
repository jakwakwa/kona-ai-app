# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.




### React
For each operation, there is a wrapper hook that can be used to call the operation.

Here are all of the hooks that get generated:
```ts
import { useUpsertPlatformOwner, useCreateClient, useUpdateClient, useCreateClientAiBotConfig, useUpdateClientAiBotConfig, useCreateClientInboundContact, useUpdateClientInboundContact, useCreatePlatformInboundContact, useCreatePlatformOutboundContact, useCreatePlatformOutboundOutreachEvent } from '@dataconnect/generated/react';
// The types of these hooks are available in react/index.d.ts

const { data, isPending, isSuccess, isError, error } = useUpsertPlatformOwner(upsertPlatformOwnerVars);

const { data, isPending, isSuccess, isError, error } = useCreateClient(createClientVars);

const { data, isPending, isSuccess, isError, error } = useUpdateClient(updateClientVars);

const { data, isPending, isSuccess, isError, error } = useCreateClientAiBotConfig(createClientAiBotConfigVars);

const { data, isPending, isSuccess, isError, error } = useUpdateClientAiBotConfig(updateClientAiBotConfigVars);

const { data, isPending, isSuccess, isError, error } = useCreateClientInboundContact(createClientInboundContactVars);

const { data, isPending, isSuccess, isError, error } = useUpdateClientInboundContact(updateClientInboundContactVars);

const { data, isPending, isSuccess, isError, error } = useCreatePlatformInboundContact(createPlatformInboundContactVars);

const { data, isPending, isSuccess, isError, error } = useCreatePlatformOutboundContact(createPlatformOutboundContactVars);

const { data, isPending, isSuccess, isError, error } = useCreatePlatformOutboundOutreachEvent(createPlatformOutboundOutreachEventVars);

```

Here's an example from a different generated SDK:

```ts
import { useListAllMovies } from '@dataconnect/generated/react';

function MyComponent() {
  const { isLoading, data, error } = useListAllMovies();
  if(isLoading) {
    return <div>Loading...</div>
  }
  if(error) {
    return <div> An Error Occurred: {error} </div>
  }
}

// App.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MyComponent from './my-component';

function App() {
  const queryClient = new QueryClient();
  return <QueryClientProvider client={queryClient}>
    <MyComponent />
  </QueryClientProvider>
}
```



## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { upsertPlatformOwner, createClient, updateClient, createClientAiBotConfig, updateClientAiBotConfig, createClientInboundContact, updateClientInboundContact, createPlatformInboundContact, createPlatformOutboundContact, createPlatformOutboundOutreachEvent } from '@dataconnect/generated';


// Operation UpsertPlatformOwner:  For variables, look at type UpsertPlatformOwnerVars in ../index.d.ts
const { data } = await UpsertPlatformOwner(dataConnect, upsertPlatformOwnerVars);

// Operation CreateClient:  For variables, look at type CreateClientVars in ../index.d.ts
const { data } = await CreateClient(dataConnect, createClientVars);

// Operation UpdateClient:  For variables, look at type UpdateClientVars in ../index.d.ts
const { data } = await UpdateClient(dataConnect, updateClientVars);

// Operation CreateClientAiBotConfig:  For variables, look at type CreateClientAiBotConfigVars in ../index.d.ts
const { data } = await CreateClientAiBotConfig(dataConnect, createClientAiBotConfigVars);

// Operation UpdateClientAiBotConfig:  For variables, look at type UpdateClientAiBotConfigVars in ../index.d.ts
const { data } = await UpdateClientAiBotConfig(dataConnect, updateClientAiBotConfigVars);

// Operation CreateClientInboundContact:  For variables, look at type CreateClientInboundContactVars in ../index.d.ts
const { data } = await CreateClientInboundContact(dataConnect, createClientInboundContactVars);

// Operation UpdateClientInboundContact:  For variables, look at type UpdateClientInboundContactVars in ../index.d.ts
const { data } = await UpdateClientInboundContact(dataConnect, updateClientInboundContactVars);

// Operation CreatePlatformInboundContact:  For variables, look at type CreatePlatformInboundContactVars in ../index.d.ts
const { data } = await CreatePlatformInboundContact(dataConnect, createPlatformInboundContactVars);

// Operation CreatePlatformOutboundContact:  For variables, look at type CreatePlatformOutboundContactVars in ../index.d.ts
const { data } = await CreatePlatformOutboundContact(dataConnect, createPlatformOutboundContactVars);

// Operation CreatePlatformOutboundOutreachEvent:  For variables, look at type CreatePlatformOutboundOutreachEventVars in ../index.d.ts
const { data } = await CreatePlatformOutboundOutreachEvent(dataConnect, createPlatformOutboundOutreachEventVars);


```