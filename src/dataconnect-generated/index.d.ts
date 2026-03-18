import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface ClientAiBotConfig_Key {
  id: UUIDString;
  __typename?: 'ClientAiBotConfig_Key';
}

export interface ClientAiBotPerformanceEvent_Key {
  id: UUIDString;
  __typename?: 'ClientAiBotPerformanceEvent_Key';
}

export interface ClientConversation_Key {
  id: UUIDString;
  __typename?: 'ClientConversation_Key';
}

export interface ClientInboundContact_Key {
  id: UUIDString;
  __typename?: 'ClientInboundContact_Key';
}

export interface Client_Key {
  id: UUIDString;
  __typename?: 'Client_Key';
}

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

export interface GetClientByLinkedAuthUidVariables {
  authUid: string;
}

export interface PlatformAgentActivity_Key {
  id: UUIDString;
  __typename?: 'PlatformAgentActivity_Key';
}

export interface PlatformChatbotConfig_Key {
  id: UUIDString;
  __typename?: 'PlatformChatbotConfig_Key';
}

export interface PlatformInboundContact_Key {
  id: UUIDString;
  __typename?: 'PlatformInboundContact_Key';
}

export interface PlatformOutboundContact_Key {
  id: UUIDString;
  __typename?: 'PlatformOutboundContact_Key';
}

export interface PlatformOutboundOutreachEvent_Key {
  id: UUIDString;
  __typename?: 'PlatformOutboundOutreachEvent_Key';
}

export interface PlatformOwner_Key {
  id: string;
  __typename?: 'PlatformOwner_Key';
}

export interface UpsertPlatformOwnerData {
  platformOwner_upsert: PlatformOwner_Key;
}

export interface UpsertPlatformOwnerVariables {
  email?: string | null;
  displayName?: string | null;
}

interface GetClientByLinkedAuthUidRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetClientByLinkedAuthUidVariables): QueryRef<GetClientByLinkedAuthUidData, GetClientByLinkedAuthUidVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetClientByLinkedAuthUidVariables): QueryRef<GetClientByLinkedAuthUidData, GetClientByLinkedAuthUidVariables>;
  operationName: string;
}
export const getClientByLinkedAuthUidRef: GetClientByLinkedAuthUidRef;

export function getClientByLinkedAuthUid(vars: GetClientByLinkedAuthUidVariables): QueryPromise<GetClientByLinkedAuthUidData, GetClientByLinkedAuthUidVariables>;
export function getClientByLinkedAuthUid(dc: DataConnect, vars: GetClientByLinkedAuthUidVariables): QueryPromise<GetClientByLinkedAuthUidData, GetClientByLinkedAuthUidVariables>;

interface UpsertPlatformOwnerRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars?: UpsertPlatformOwnerVariables): MutationRef<UpsertPlatformOwnerData, UpsertPlatformOwnerVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars?: UpsertPlatformOwnerVariables): MutationRef<UpsertPlatformOwnerData, UpsertPlatformOwnerVariables>;
  operationName: string;
}
export const upsertPlatformOwnerRef: UpsertPlatformOwnerRef;

export function upsertPlatformOwner(vars?: UpsertPlatformOwnerVariables): MutationPromise<UpsertPlatformOwnerData, UpsertPlatformOwnerVariables>;
export function upsertPlatformOwner(dc: DataConnect, vars?: UpsertPlatformOwnerVariables): MutationPromise<UpsertPlatformOwnerData, UpsertPlatformOwnerVariables>;

