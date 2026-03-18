import { ConnectorConfig, DataConnect, OperationOptions, ExecuteOperationResponse } from 'firebase-admin/data-connect';

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

/** Generated Node Admin SDK operation action function for the 'GetClientByLinkedAuthUid' Query. Allow users to execute without passing in DataConnect. */
export function getClientByLinkedAuthUid(dc: DataConnect, vars: GetClientByLinkedAuthUidVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetClientByLinkedAuthUidData>>;
/** Generated Node Admin SDK operation action function for the 'GetClientByLinkedAuthUid' Query. Allow users to pass in custom DataConnect instances. */
export function getClientByLinkedAuthUid(vars: GetClientByLinkedAuthUidVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetClientByLinkedAuthUidData>>;

/** Generated Node Admin SDK operation action function for the 'UpsertPlatformOwner' Mutation. Allow users to execute without passing in DataConnect. */
export function upsertPlatformOwner(dc: DataConnect, vars?: UpsertPlatformOwnerVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpsertPlatformOwnerData>>;
/** Generated Node Admin SDK operation action function for the 'UpsertPlatformOwner' Mutation. Allow users to pass in custom DataConnect instances. */
export function upsertPlatformOwner(vars?: UpsertPlatformOwnerVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpsertPlatformOwnerData>>;

