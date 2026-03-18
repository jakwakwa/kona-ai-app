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

export interface CreateClientAdminData {
  client_insert: Client_Key;
}

export interface CreateClientAdminVariables {
  linkedAuthUid: string;
  companyName?: string | null;
  clientName?: string | null;
  email?: string | null;
  industry?: string | null;
  subscriptionStatus?: string | null;
  paddleSubscriptionId?: string | null;
}

export interface CreateClientAiBotConfigAdminData {
  clientAiBotConfig_insert: ClientAiBotConfig_Key;
}

export interface CreateClientAiBotConfigAdminVariables {
  clientId: UUIDString;
  botName?: string | null;
  accessToken: string;
  aiModelApiKey?: string | null;
  schedulingApiKey?: string | null;
  welcomeMessage?: string | null;
  customInstructions?: string | null;
}

export interface CreateClientAiBotConfigData {
  clientAiBotConfig_insert: ClientAiBotConfig_Key;
}

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

export interface CreateClientAiBotPerformanceEventData {
  clientAiBotPerformanceEvent_insert: ClientAiBotPerformanceEvent_Key;
}

export interface CreateClientAiBotPerformanceEventVariables {
  clientId: UUIDString;
  eventType?: string | null;
  sessionDurationMs?: number | null;
  messageCount?: number | null;
  tokensUsed?: number | null;
  metadata?: unknown | null;
  clientInboundContactId?: UUIDString | null;
}

export interface CreateClientConversationData {
  clientConversation_insert: ClientConversation_Key;
}

export interface CreateClientConversationVariables {
  clientId: UUIDString;
  accessToken: string;
  messages?: unknown | null;
}

export interface CreateClientData {
  client_insert: Client_Key;
}

export interface CreateClientInboundContactData {
  clientInboundContact_insert: ClientInboundContact_Key;
}

export interface CreateClientInboundContactVariables {
  clientId: UUIDString;
  companyName?: string | null;
  websiteUrl?: string | null;
  contactEmail?: string | null;
  contactStatus?: string | null;
  initialPitchDraft?: string | null;
  identifiedPainPoints?: string | null;
}

export interface CreateClientVariables {
  companyName?: string | null;
  clientName?: string | null;
  email?: string | null;
  industry?: string | null;
}

export interface CreatePlatformAgentActivityData {
  platformAgentActivity_insert: PlatformAgentActivity_Key;
}

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

export interface CreatePlatformInboundContactData {
  platformInboundContact_insert: PlatformInboundContact_Key;
}

export interface CreatePlatformInboundContactVariables {
  companyName?: string | null;
  websiteUrl?: string | null;
  contactStatus?: string | null;
  contactEmail?: string | null;
  initialPitchDraft?: string | null;
  identifiedPainPoints?: string | null;
  nativeAgent?: boolean | null;
}

export interface CreatePlatformOutboundContactData {
  platformOutboundContact_insert: PlatformOutboundContact_Key;
}

export interface CreatePlatformOutboundContactVariables {
  scrapedData?: unknown | null;
  hasExistingAI?: boolean | null;
  auditDate?: DateString | null;
  aiDetectionDetails?: unknown | null;
}

export interface CreatePlatformOutboundOutreachEventData {
  platformOutboundOutreachEvent_insert: PlatformOutboundOutreachEvent_Key;
}

export interface CreatePlatformOutboundOutreachEventVariables {
  platformOutboundContactId: UUIDString;
  outreachType?: string | null;
  status?: string | null;
  sendDate?: DateString | null;
  messageContent?: string | null;
  adminNotes?: string | null;
}

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

export interface GetClientAiBotConfigByAccessTokenVariables {
  accessToken: string;
}

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

export interface GetClientByIdVariables {
  id: UUIDString;
}

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

export interface GetClientByLinkedAuthUidAdminVariables {
  authUid: string;
}

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

export interface GetClientByLinkedAuthUidVariables {
  authUid: string;
}

export interface GetClientByPaddleSubscriptionIdAdminData {
  clients: ({
    id: UUIDString;
    linkedAuthUid: string;
    subscriptionStatus?: string | null;
    paddleSubscriptionId?: string | null;
  } & Client_Key)[];
}

export interface GetClientByPaddleSubscriptionIdAdminVariables {
  paddleSubscriptionId: string;
}

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

export interface GetClientConversationVariables {
  id: UUIDString;
  accessToken: string;
}

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

export interface ListClientAiBotPerformanceEventsVariables {
  clientId: UUIDString;
}

export interface ListClientConversationsByAccessTokenData {
  clientConversations: ({
    id: UUIDString;
    accessToken: string;
    messages?: unknown | null;
    createdAt: TimestampString;
    updatedAt: TimestampString;
  } & ClientConversation_Key)[];
}

export interface ListClientConversationsByAccessTokenVariables {
  accessToken: string;
}

export interface ListClientConversationsByClientAndTokenData {
  clientConversations: ({
    id: UUIDString;
    accessToken: string;
    messages?: unknown | null;
    createdAt: TimestampString;
    updatedAt: TimestampString;
  } & ClientConversation_Key)[];
}

export interface ListClientConversationsByClientAndTokenVariables {
  clientId: UUIDString;
  accessToken: string;
}

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

export interface ListClientInboundContactsByClientVariables {
  clientId: UUIDString;
}

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

export interface UpdateClientAdminData {
  client_update?: Client_Key | null;
}

export interface UpdateClientAdminVariables {
  id: UUIDString;
  companyName?: string | null;
  clientName?: string | null;
  email?: string | null;
  subscriptionStatus?: string | null;
  paddleSubscriptionId?: string | null;
}

export interface UpdateClientAiBotConfigAdminData {
  clientAiBotConfig_update?: ClientAiBotConfig_Key | null;
}

export interface UpdateClientAiBotConfigAdminVariables {
  id: UUIDString;
  botName?: string | null;
  aiModelApiKey?: string | null;
  schedulingApiKey?: string | null;
  welcomeMessage?: string | null;
  customInstructions?: string | null;
}

export interface UpdateClientAiBotConfigData {
  clientAiBotConfig_update?: ClientAiBotConfig_Key | null;
}

export interface UpdateClientAiBotConfigVariables {
  id: UUIDString;
  botName?: string | null;
  aiModelApiKey?: string | null;
  schedulingApiKey?: string | null;
  knowledgeBaseJson?: unknown | null;
  welcomeMessage?: string | null;
  customInstructions?: string | null;
}

export interface UpdateClientConversationData {
  clientConversation_update?: ClientConversation_Key | null;
}

export interface UpdateClientConversationVariables {
  id: UUIDString;
  accessToken: string;
  messages?: unknown | null;
}

export interface UpdateClientData {
  client_update?: Client_Key | null;
}

export interface UpdateClientInboundContactData {
  clientInboundContact_update?: ClientInboundContact_Key | null;
}

export interface UpdateClientInboundContactVariables {
  id: UUIDString;
  companyName?: string | null;
  websiteUrl?: string | null;
  contactStatus?: string | null;
  contactEmail?: string | null;
  initialPitchDraft?: string | null;
  identifiedPainPoints?: string | null;
}

export interface UpdateClientVariables {
  id: UUIDString;
  companyName?: string | null;
  clientName?: string | null;
  email?: string | null;
  industry?: string | null;
  subscriptionStatus?: string | null;
  paddleSubscriptionId?: string | null;
}

export interface UpsertPlatformOwnerData {
  platformOwner_upsert: PlatformOwner_Key;
}

export interface UpsertPlatformOwnerVariables {
  email?: string | null;
  displayName?: string | null;
}

export interface WebhookCreateClientWithConfigData {
  client_insert: Client_Key;
  clientAiBotConfig_insert: ClientAiBotConfig_Key;
}

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

/** Generated Node Admin SDK operation action function for the 'UpsertPlatformOwner' Mutation. Allow users to execute without passing in DataConnect. */
export function upsertPlatformOwner(dc: DataConnect, vars?: UpsertPlatformOwnerVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpsertPlatformOwnerData>>;
/** Generated Node Admin SDK operation action function for the 'UpsertPlatformOwner' Mutation. Allow users to pass in custom DataConnect instances. */
export function upsertPlatformOwner(vars?: UpsertPlatformOwnerVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpsertPlatformOwnerData>>;

/** Generated Node Admin SDK operation action function for the 'CreateClient' Mutation. Allow users to execute without passing in DataConnect. */
export function createClient(dc: DataConnect, vars?: CreateClientVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateClientData>>;
/** Generated Node Admin SDK operation action function for the 'CreateClient' Mutation. Allow users to pass in custom DataConnect instances. */
export function createClient(vars?: CreateClientVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateClientData>>;

/** Generated Node Admin SDK operation action function for the 'UpdateClient' Mutation. Allow users to execute without passing in DataConnect. */
export function updateClient(dc: DataConnect, vars: UpdateClientVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateClientData>>;
/** Generated Node Admin SDK operation action function for the 'UpdateClient' Mutation. Allow users to pass in custom DataConnect instances. */
export function updateClient(vars: UpdateClientVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateClientData>>;

/** Generated Node Admin SDK operation action function for the 'CreateClientAiBotConfig' Mutation. Allow users to execute without passing in DataConnect. */
export function createClientAiBotConfig(dc: DataConnect, vars: CreateClientAiBotConfigVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateClientAiBotConfigData>>;
/** Generated Node Admin SDK operation action function for the 'CreateClientAiBotConfig' Mutation. Allow users to pass in custom DataConnect instances. */
export function createClientAiBotConfig(vars: CreateClientAiBotConfigVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateClientAiBotConfigData>>;

/** Generated Node Admin SDK operation action function for the 'UpdateClientAiBotConfig' Mutation. Allow users to execute without passing in DataConnect. */
export function updateClientAiBotConfig(dc: DataConnect, vars: UpdateClientAiBotConfigVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateClientAiBotConfigData>>;
/** Generated Node Admin SDK operation action function for the 'UpdateClientAiBotConfig' Mutation. Allow users to pass in custom DataConnect instances. */
export function updateClientAiBotConfig(vars: UpdateClientAiBotConfigVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateClientAiBotConfigData>>;

/** Generated Node Admin SDK operation action function for the 'CreateClientInboundContact' Mutation. Allow users to execute without passing in DataConnect. */
export function createClientInboundContact(dc: DataConnect, vars: CreateClientInboundContactVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateClientInboundContactData>>;
/** Generated Node Admin SDK operation action function for the 'CreateClientInboundContact' Mutation. Allow users to pass in custom DataConnect instances. */
export function createClientInboundContact(vars: CreateClientInboundContactVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateClientInboundContactData>>;

/** Generated Node Admin SDK operation action function for the 'UpdateClientInboundContact' Mutation. Allow users to execute without passing in DataConnect. */
export function updateClientInboundContact(dc: DataConnect, vars: UpdateClientInboundContactVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateClientInboundContactData>>;
/** Generated Node Admin SDK operation action function for the 'UpdateClientInboundContact' Mutation. Allow users to pass in custom DataConnect instances. */
export function updateClientInboundContact(vars: UpdateClientInboundContactVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateClientInboundContactData>>;

/** Generated Node Admin SDK operation action function for the 'CreatePlatformInboundContact' Mutation. Allow users to execute without passing in DataConnect. */
export function createPlatformInboundContact(dc: DataConnect, vars?: CreatePlatformInboundContactVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreatePlatformInboundContactData>>;
/** Generated Node Admin SDK operation action function for the 'CreatePlatformInboundContact' Mutation. Allow users to pass in custom DataConnect instances. */
export function createPlatformInboundContact(vars?: CreatePlatformInboundContactVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreatePlatformInboundContactData>>;

/** Generated Node Admin SDK operation action function for the 'CreatePlatformOutboundContact' Mutation. Allow users to execute without passing in DataConnect. */
export function createPlatformOutboundContact(dc: DataConnect, vars?: CreatePlatformOutboundContactVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreatePlatformOutboundContactData>>;
/** Generated Node Admin SDK operation action function for the 'CreatePlatformOutboundContact' Mutation. Allow users to pass in custom DataConnect instances. */
export function createPlatformOutboundContact(vars?: CreatePlatformOutboundContactVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreatePlatformOutboundContactData>>;

/** Generated Node Admin SDK operation action function for the 'CreatePlatformOutboundOutreachEvent' Mutation. Allow users to execute without passing in DataConnect. */
export function createPlatformOutboundOutreachEvent(dc: DataConnect, vars: CreatePlatformOutboundOutreachEventVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreatePlatformOutboundOutreachEventData>>;
/** Generated Node Admin SDK operation action function for the 'CreatePlatformOutboundOutreachEvent' Mutation. Allow users to pass in custom DataConnect instances. */
export function createPlatformOutboundOutreachEvent(vars: CreatePlatformOutboundOutreachEventVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreatePlatformOutboundOutreachEventData>>;

/** Generated Node Admin SDK operation action function for the 'CreatePlatformAgentActivity' Mutation. Allow users to execute without passing in DataConnect. */
export function createPlatformAgentActivity(dc: DataConnect, vars?: CreatePlatformAgentActivityVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreatePlatformAgentActivityData>>;
/** Generated Node Admin SDK operation action function for the 'CreatePlatformAgentActivity' Mutation. Allow users to pass in custom DataConnect instances. */
export function createPlatformAgentActivity(vars?: CreatePlatformAgentActivityVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreatePlatformAgentActivityData>>;

/** Generated Node Admin SDK operation action function for the 'CreateClientAiBotPerformanceEvent' Mutation. Allow users to execute without passing in DataConnect. */
export function createClientAiBotPerformanceEvent(dc: DataConnect, vars: CreateClientAiBotPerformanceEventVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateClientAiBotPerformanceEventData>>;
/** Generated Node Admin SDK operation action function for the 'CreateClientAiBotPerformanceEvent' Mutation. Allow users to pass in custom DataConnect instances. */
export function createClientAiBotPerformanceEvent(vars: CreateClientAiBotPerformanceEventVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateClientAiBotPerformanceEventData>>;

/** Generated Node Admin SDK operation action function for the 'CreateClientConversation' Mutation. Allow users to execute without passing in DataConnect. */
export function createClientConversation(dc: DataConnect, vars: CreateClientConversationVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateClientConversationData>>;
/** Generated Node Admin SDK operation action function for the 'CreateClientConversation' Mutation. Allow users to pass in custom DataConnect instances. */
export function createClientConversation(vars: CreateClientConversationVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateClientConversationData>>;

/** Generated Node Admin SDK operation action function for the 'UpdateClientConversation' Mutation. Allow users to execute without passing in DataConnect. */
export function updateClientConversation(dc: DataConnect, vars: UpdateClientConversationVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateClientConversationData>>;
/** Generated Node Admin SDK operation action function for the 'UpdateClientConversation' Mutation. Allow users to pass in custom DataConnect instances. */
export function updateClientConversation(vars: UpdateClientConversationVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateClientConversationData>>;

/** Generated Node Admin SDK operation action function for the 'CreateClientAdmin' Mutation. Allow users to execute without passing in DataConnect. */
export function createClientAdmin(dc: DataConnect, vars: CreateClientAdminVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateClientAdminData>>;
/** Generated Node Admin SDK operation action function for the 'CreateClientAdmin' Mutation. Allow users to pass in custom DataConnect instances. */
export function createClientAdmin(vars: CreateClientAdminVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateClientAdminData>>;

/** Generated Node Admin SDK operation action function for the 'UpdateClientAdmin' Mutation. Allow users to execute without passing in DataConnect. */
export function updateClientAdmin(dc: DataConnect, vars: UpdateClientAdminVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateClientAdminData>>;
/** Generated Node Admin SDK operation action function for the 'UpdateClientAdmin' Mutation. Allow users to pass in custom DataConnect instances. */
export function updateClientAdmin(vars: UpdateClientAdminVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateClientAdminData>>;

/** Generated Node Admin SDK operation action function for the 'WebhookCreateClientWithConfig' Mutation. Allow users to execute without passing in DataConnect. */
export function webhookCreateClientWithConfig(dc: DataConnect, vars: WebhookCreateClientWithConfigVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<WebhookCreateClientWithConfigData>>;
/** Generated Node Admin SDK operation action function for the 'WebhookCreateClientWithConfig' Mutation. Allow users to pass in custom DataConnect instances. */
export function webhookCreateClientWithConfig(vars: WebhookCreateClientWithConfigVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<WebhookCreateClientWithConfigData>>;

/** Generated Node Admin SDK operation action function for the 'CreateClientAiBotConfigAdmin' Mutation. Allow users to execute without passing in DataConnect. */
export function createClientAiBotConfigAdmin(dc: DataConnect, vars: CreateClientAiBotConfigAdminVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateClientAiBotConfigAdminData>>;
/** Generated Node Admin SDK operation action function for the 'CreateClientAiBotConfigAdmin' Mutation. Allow users to pass in custom DataConnect instances. */
export function createClientAiBotConfigAdmin(vars: CreateClientAiBotConfigAdminVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateClientAiBotConfigAdminData>>;

/** Generated Node Admin SDK operation action function for the 'UpdateClientAiBotConfigAdmin' Mutation. Allow users to execute without passing in DataConnect. */
export function updateClientAiBotConfigAdmin(dc: DataConnect, vars: UpdateClientAiBotConfigAdminVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateClientAiBotConfigAdminData>>;
/** Generated Node Admin SDK operation action function for the 'UpdateClientAiBotConfigAdmin' Mutation. Allow users to pass in custom DataConnect instances. */
export function updateClientAiBotConfigAdmin(vars: UpdateClientAiBotConfigAdminVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateClientAiBotConfigAdminData>>;

/** Generated Node Admin SDK operation action function for the 'GetClientByLinkedAuthUid' Query. Allow users to execute without passing in DataConnect. */
export function getClientByLinkedAuthUid(dc: DataConnect, vars: GetClientByLinkedAuthUidVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetClientByLinkedAuthUidData>>;
/** Generated Node Admin SDK operation action function for the 'GetClientByLinkedAuthUid' Query. Allow users to pass in custom DataConnect instances. */
export function getClientByLinkedAuthUid(vars: GetClientByLinkedAuthUidVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetClientByLinkedAuthUidData>>;

/** Generated Node Admin SDK operation action function for the 'GetClientById' Query. Allow users to execute without passing in DataConnect. */
export function getClientById(dc: DataConnect, vars: GetClientByIdVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetClientByIdData>>;
/** Generated Node Admin SDK operation action function for the 'GetClientById' Query. Allow users to pass in custom DataConnect instances. */
export function getClientById(vars: GetClientByIdVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetClientByIdData>>;

/** Generated Node Admin SDK operation action function for the 'GetClientAiBotConfigByAccessToken' Query. Allow users to execute without passing in DataConnect. */
export function getClientAiBotConfigByAccessToken(dc: DataConnect, vars: GetClientAiBotConfigByAccessTokenVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetClientAiBotConfigByAccessTokenData>>;
/** Generated Node Admin SDK operation action function for the 'GetClientAiBotConfigByAccessToken' Query. Allow users to pass in custom DataConnect instances. */
export function getClientAiBotConfigByAccessToken(vars: GetClientAiBotConfigByAccessTokenVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetClientAiBotConfigByAccessTokenData>>;

/** Generated Node Admin SDK operation action function for the 'ListClientInboundContactsByClient' Query. Allow users to execute without passing in DataConnect. */
export function listClientInboundContactsByClient(dc: DataConnect, vars: ListClientInboundContactsByClientVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<ListClientInboundContactsByClientData>>;
/** Generated Node Admin SDK operation action function for the 'ListClientInboundContactsByClient' Query. Allow users to pass in custom DataConnect instances. */
export function listClientInboundContactsByClient(vars: ListClientInboundContactsByClientVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<ListClientInboundContactsByClientData>>;

/** Generated Node Admin SDK operation action function for the 'ListClients' Query. Allow users to execute without passing in DataConnect. */
export function listClients(dc: DataConnect, options?: OperationOptions): Promise<ExecuteOperationResponse<ListClientsData>>;
/** Generated Node Admin SDK operation action function for the 'ListClients' Query. Allow users to pass in custom DataConnect instances. */
export function listClients(options?: OperationOptions): Promise<ExecuteOperationResponse<ListClientsData>>;

/** Generated Node Admin SDK operation action function for the 'ListPlatformInboundContacts' Query. Allow users to execute without passing in DataConnect. */
export function listPlatformInboundContacts(dc: DataConnect, options?: OperationOptions): Promise<ExecuteOperationResponse<ListPlatformInboundContactsData>>;
/** Generated Node Admin SDK operation action function for the 'ListPlatformInboundContacts' Query. Allow users to pass in custom DataConnect instances. */
export function listPlatformInboundContacts(options?: OperationOptions): Promise<ExecuteOperationResponse<ListPlatformInboundContactsData>>;

/** Generated Node Admin SDK operation action function for the 'ListPlatformOutboundContacts' Query. Allow users to execute without passing in DataConnect. */
export function listPlatformOutboundContacts(dc: DataConnect, options?: OperationOptions): Promise<ExecuteOperationResponse<ListPlatformOutboundContactsData>>;
/** Generated Node Admin SDK operation action function for the 'ListPlatformOutboundContacts' Query. Allow users to pass in custom DataConnect instances. */
export function listPlatformOutboundContacts(options?: OperationOptions): Promise<ExecuteOperationResponse<ListPlatformOutboundContactsData>>;

/** Generated Node Admin SDK operation action function for the 'ListPlatformOutboundOutreachEvents' Query. Allow users to execute without passing in DataConnect. */
export function listPlatformOutboundOutreachEvents(dc: DataConnect, options?: OperationOptions): Promise<ExecuteOperationResponse<ListPlatformOutboundOutreachEventsData>>;
/** Generated Node Admin SDK operation action function for the 'ListPlatformOutboundOutreachEvents' Query. Allow users to pass in custom DataConnect instances. */
export function listPlatformOutboundOutreachEvents(options?: OperationOptions): Promise<ExecuteOperationResponse<ListPlatformOutboundOutreachEventsData>>;

/** Generated Node Admin SDK operation action function for the 'ListPlatformAgentActivities' Query. Allow users to execute without passing in DataConnect. */
export function listPlatformAgentActivities(dc: DataConnect, options?: OperationOptions): Promise<ExecuteOperationResponse<ListPlatformAgentActivitiesData>>;
/** Generated Node Admin SDK operation action function for the 'ListPlatformAgentActivities' Query. Allow users to pass in custom DataConnect instances. */
export function listPlatformAgentActivities(options?: OperationOptions): Promise<ExecuteOperationResponse<ListPlatformAgentActivitiesData>>;

/** Generated Node Admin SDK operation action function for the 'ListClientAiBotPerformanceEvents' Query. Allow users to execute without passing in DataConnect. */
export function listClientAiBotPerformanceEvents(dc: DataConnect, vars: ListClientAiBotPerformanceEventsVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<ListClientAiBotPerformanceEventsData>>;
/** Generated Node Admin SDK operation action function for the 'ListClientAiBotPerformanceEvents' Query. Allow users to pass in custom DataConnect instances. */
export function listClientAiBotPerformanceEvents(vars: ListClientAiBotPerformanceEventsVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<ListClientAiBotPerformanceEventsData>>;

/** Generated Node Admin SDK operation action function for the 'GetClientConversation' Query. Allow users to execute without passing in DataConnect. */
export function getClientConversation(dc: DataConnect, vars: GetClientConversationVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetClientConversationData>>;
/** Generated Node Admin SDK operation action function for the 'GetClientConversation' Query. Allow users to pass in custom DataConnect instances. */
export function getClientConversation(vars: GetClientConversationVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetClientConversationData>>;

/** Generated Node Admin SDK operation action function for the 'ListClientConversationsByClientAndToken' Query. Allow users to execute without passing in DataConnect. */
export function listClientConversationsByClientAndToken(dc: DataConnect, vars: ListClientConversationsByClientAndTokenVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<ListClientConversationsByClientAndTokenData>>;
/** Generated Node Admin SDK operation action function for the 'ListClientConversationsByClientAndToken' Query. Allow users to pass in custom DataConnect instances. */
export function listClientConversationsByClientAndToken(vars: ListClientConversationsByClientAndTokenVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<ListClientConversationsByClientAndTokenData>>;

/** Generated Node Admin SDK operation action function for the 'ListClientConversationsByAccessToken' Query. Allow users to execute without passing in DataConnect. */
export function listClientConversationsByAccessToken(dc: DataConnect, vars: ListClientConversationsByAccessTokenVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<ListClientConversationsByAccessTokenData>>;
/** Generated Node Admin SDK operation action function for the 'ListClientConversationsByAccessToken' Query. Allow users to pass in custom DataConnect instances. */
export function listClientConversationsByAccessToken(vars: ListClientConversationsByAccessTokenVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<ListClientConversationsByAccessTokenData>>;

/** Generated Node Admin SDK operation action function for the 'GetClientByLinkedAuthUidAdmin' Query. Allow users to execute without passing in DataConnect. */
export function getClientByLinkedAuthUidAdmin(dc: DataConnect, vars: GetClientByLinkedAuthUidAdminVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetClientByLinkedAuthUidAdminData>>;
/** Generated Node Admin SDK operation action function for the 'GetClientByLinkedAuthUidAdmin' Query. Allow users to pass in custom DataConnect instances. */
export function getClientByLinkedAuthUidAdmin(vars: GetClientByLinkedAuthUidAdminVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetClientByLinkedAuthUidAdminData>>;

/** Generated Node Admin SDK operation action function for the 'GetClientByPaddleSubscriptionIdAdmin' Query. Allow users to execute without passing in DataConnect. */
export function getClientByPaddleSubscriptionIdAdmin(dc: DataConnect, vars: GetClientByPaddleSubscriptionIdAdminVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetClientByPaddleSubscriptionIdAdminData>>;
/** Generated Node Admin SDK operation action function for the 'GetClientByPaddleSubscriptionIdAdmin' Query. Allow users to pass in custom DataConnect instances. */
export function getClientByPaddleSubscriptionIdAdmin(vars: GetClientByPaddleSubscriptionIdAdminVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetClientByPaddleSubscriptionIdAdminData>>;

