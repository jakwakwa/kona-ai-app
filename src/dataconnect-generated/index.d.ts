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

interface CreateClientRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars?: CreateClientVariables): MutationRef<CreateClientData, CreateClientVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars?: CreateClientVariables): MutationRef<CreateClientData, CreateClientVariables>;
  operationName: string;
}
export const createClientRef: CreateClientRef;

export function createClient(vars?: CreateClientVariables): MutationPromise<CreateClientData, CreateClientVariables>;
export function createClient(dc: DataConnect, vars?: CreateClientVariables): MutationPromise<CreateClientData, CreateClientVariables>;

interface UpdateClientRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateClientVariables): MutationRef<UpdateClientData, UpdateClientVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateClientVariables): MutationRef<UpdateClientData, UpdateClientVariables>;
  operationName: string;
}
export const updateClientRef: UpdateClientRef;

export function updateClient(vars: UpdateClientVariables): MutationPromise<UpdateClientData, UpdateClientVariables>;
export function updateClient(dc: DataConnect, vars: UpdateClientVariables): MutationPromise<UpdateClientData, UpdateClientVariables>;

interface CreateClientAiBotConfigRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateClientAiBotConfigVariables): MutationRef<CreateClientAiBotConfigData, CreateClientAiBotConfigVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateClientAiBotConfigVariables): MutationRef<CreateClientAiBotConfigData, CreateClientAiBotConfigVariables>;
  operationName: string;
}
export const createClientAiBotConfigRef: CreateClientAiBotConfigRef;

export function createClientAiBotConfig(vars: CreateClientAiBotConfigVariables): MutationPromise<CreateClientAiBotConfigData, CreateClientAiBotConfigVariables>;
export function createClientAiBotConfig(dc: DataConnect, vars: CreateClientAiBotConfigVariables): MutationPromise<CreateClientAiBotConfigData, CreateClientAiBotConfigVariables>;

interface UpdateClientAiBotConfigRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateClientAiBotConfigVariables): MutationRef<UpdateClientAiBotConfigData, UpdateClientAiBotConfigVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateClientAiBotConfigVariables): MutationRef<UpdateClientAiBotConfigData, UpdateClientAiBotConfigVariables>;
  operationName: string;
}
export const updateClientAiBotConfigRef: UpdateClientAiBotConfigRef;

export function updateClientAiBotConfig(vars: UpdateClientAiBotConfigVariables): MutationPromise<UpdateClientAiBotConfigData, UpdateClientAiBotConfigVariables>;
export function updateClientAiBotConfig(dc: DataConnect, vars: UpdateClientAiBotConfigVariables): MutationPromise<UpdateClientAiBotConfigData, UpdateClientAiBotConfigVariables>;

interface CreateClientInboundContactRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateClientInboundContactVariables): MutationRef<CreateClientInboundContactData, CreateClientInboundContactVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateClientInboundContactVariables): MutationRef<CreateClientInboundContactData, CreateClientInboundContactVariables>;
  operationName: string;
}
export const createClientInboundContactRef: CreateClientInboundContactRef;

export function createClientInboundContact(vars: CreateClientInboundContactVariables): MutationPromise<CreateClientInboundContactData, CreateClientInboundContactVariables>;
export function createClientInboundContact(dc: DataConnect, vars: CreateClientInboundContactVariables): MutationPromise<CreateClientInboundContactData, CreateClientInboundContactVariables>;

interface UpdateClientInboundContactRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateClientInboundContactVariables): MutationRef<UpdateClientInboundContactData, UpdateClientInboundContactVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateClientInboundContactVariables): MutationRef<UpdateClientInboundContactData, UpdateClientInboundContactVariables>;
  operationName: string;
}
export const updateClientInboundContactRef: UpdateClientInboundContactRef;

export function updateClientInboundContact(vars: UpdateClientInboundContactVariables): MutationPromise<UpdateClientInboundContactData, UpdateClientInboundContactVariables>;
export function updateClientInboundContact(dc: DataConnect, vars: UpdateClientInboundContactVariables): MutationPromise<UpdateClientInboundContactData, UpdateClientInboundContactVariables>;

interface CreatePlatformInboundContactRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars?: CreatePlatformInboundContactVariables): MutationRef<CreatePlatformInboundContactData, CreatePlatformInboundContactVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars?: CreatePlatformInboundContactVariables): MutationRef<CreatePlatformInboundContactData, CreatePlatformInboundContactVariables>;
  operationName: string;
}
export const createPlatformInboundContactRef: CreatePlatformInboundContactRef;

export function createPlatformInboundContact(vars?: CreatePlatformInboundContactVariables): MutationPromise<CreatePlatformInboundContactData, CreatePlatformInboundContactVariables>;
export function createPlatformInboundContact(dc: DataConnect, vars?: CreatePlatformInboundContactVariables): MutationPromise<CreatePlatformInboundContactData, CreatePlatformInboundContactVariables>;

interface CreatePlatformOutboundContactRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars?: CreatePlatformOutboundContactVariables): MutationRef<CreatePlatformOutboundContactData, CreatePlatformOutboundContactVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars?: CreatePlatformOutboundContactVariables): MutationRef<CreatePlatformOutboundContactData, CreatePlatformOutboundContactVariables>;
  operationName: string;
}
export const createPlatformOutboundContactRef: CreatePlatformOutboundContactRef;

export function createPlatformOutboundContact(vars?: CreatePlatformOutboundContactVariables): MutationPromise<CreatePlatformOutboundContactData, CreatePlatformOutboundContactVariables>;
export function createPlatformOutboundContact(dc: DataConnect, vars?: CreatePlatformOutboundContactVariables): MutationPromise<CreatePlatformOutboundContactData, CreatePlatformOutboundContactVariables>;

interface CreatePlatformOutboundOutreachEventRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreatePlatformOutboundOutreachEventVariables): MutationRef<CreatePlatformOutboundOutreachEventData, CreatePlatformOutboundOutreachEventVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreatePlatformOutboundOutreachEventVariables): MutationRef<CreatePlatformOutboundOutreachEventData, CreatePlatformOutboundOutreachEventVariables>;
  operationName: string;
}
export const createPlatformOutboundOutreachEventRef: CreatePlatformOutboundOutreachEventRef;

export function createPlatformOutboundOutreachEvent(vars: CreatePlatformOutboundOutreachEventVariables): MutationPromise<CreatePlatformOutboundOutreachEventData, CreatePlatformOutboundOutreachEventVariables>;
export function createPlatformOutboundOutreachEvent(dc: DataConnect, vars: CreatePlatformOutboundOutreachEventVariables): MutationPromise<CreatePlatformOutboundOutreachEventData, CreatePlatformOutboundOutreachEventVariables>;

interface CreatePlatformAgentActivityRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars?: CreatePlatformAgentActivityVariables): MutationRef<CreatePlatformAgentActivityData, CreatePlatformAgentActivityVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars?: CreatePlatformAgentActivityVariables): MutationRef<CreatePlatformAgentActivityData, CreatePlatformAgentActivityVariables>;
  operationName: string;
}
export const createPlatformAgentActivityRef: CreatePlatformAgentActivityRef;

export function createPlatformAgentActivity(vars?: CreatePlatformAgentActivityVariables): MutationPromise<CreatePlatformAgentActivityData, CreatePlatformAgentActivityVariables>;
export function createPlatformAgentActivity(dc: DataConnect, vars?: CreatePlatformAgentActivityVariables): MutationPromise<CreatePlatformAgentActivityData, CreatePlatformAgentActivityVariables>;

interface CreateClientAiBotPerformanceEventRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateClientAiBotPerformanceEventVariables): MutationRef<CreateClientAiBotPerformanceEventData, CreateClientAiBotPerformanceEventVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateClientAiBotPerformanceEventVariables): MutationRef<CreateClientAiBotPerformanceEventData, CreateClientAiBotPerformanceEventVariables>;
  operationName: string;
}
export const createClientAiBotPerformanceEventRef: CreateClientAiBotPerformanceEventRef;

export function createClientAiBotPerformanceEvent(vars: CreateClientAiBotPerformanceEventVariables): MutationPromise<CreateClientAiBotPerformanceEventData, CreateClientAiBotPerformanceEventVariables>;
export function createClientAiBotPerformanceEvent(dc: DataConnect, vars: CreateClientAiBotPerformanceEventVariables): MutationPromise<CreateClientAiBotPerformanceEventData, CreateClientAiBotPerformanceEventVariables>;

interface CreateClientConversationRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateClientConversationVariables): MutationRef<CreateClientConversationData, CreateClientConversationVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateClientConversationVariables): MutationRef<CreateClientConversationData, CreateClientConversationVariables>;
  operationName: string;
}
export const createClientConversationRef: CreateClientConversationRef;

export function createClientConversation(vars: CreateClientConversationVariables): MutationPromise<CreateClientConversationData, CreateClientConversationVariables>;
export function createClientConversation(dc: DataConnect, vars: CreateClientConversationVariables): MutationPromise<CreateClientConversationData, CreateClientConversationVariables>;

interface UpdateClientConversationRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateClientConversationVariables): MutationRef<UpdateClientConversationData, UpdateClientConversationVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateClientConversationVariables): MutationRef<UpdateClientConversationData, UpdateClientConversationVariables>;
  operationName: string;
}
export const updateClientConversationRef: UpdateClientConversationRef;

export function updateClientConversation(vars: UpdateClientConversationVariables): MutationPromise<UpdateClientConversationData, UpdateClientConversationVariables>;
export function updateClientConversation(dc: DataConnect, vars: UpdateClientConversationVariables): MutationPromise<UpdateClientConversationData, UpdateClientConversationVariables>;

interface CreateClientAdminRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateClientAdminVariables): MutationRef<CreateClientAdminData, CreateClientAdminVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateClientAdminVariables): MutationRef<CreateClientAdminData, CreateClientAdminVariables>;
  operationName: string;
}
export const createClientAdminRef: CreateClientAdminRef;

export function createClientAdmin(vars: CreateClientAdminVariables): MutationPromise<CreateClientAdminData, CreateClientAdminVariables>;
export function createClientAdmin(dc: DataConnect, vars: CreateClientAdminVariables): MutationPromise<CreateClientAdminData, CreateClientAdminVariables>;

interface UpdateClientAdminRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateClientAdminVariables): MutationRef<UpdateClientAdminData, UpdateClientAdminVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateClientAdminVariables): MutationRef<UpdateClientAdminData, UpdateClientAdminVariables>;
  operationName: string;
}
export const updateClientAdminRef: UpdateClientAdminRef;

export function updateClientAdmin(vars: UpdateClientAdminVariables): MutationPromise<UpdateClientAdminData, UpdateClientAdminVariables>;
export function updateClientAdmin(dc: DataConnect, vars: UpdateClientAdminVariables): MutationPromise<UpdateClientAdminData, UpdateClientAdminVariables>;

interface WebhookCreateClientWithConfigRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: WebhookCreateClientWithConfigVariables): MutationRef<WebhookCreateClientWithConfigData, WebhookCreateClientWithConfigVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: WebhookCreateClientWithConfigVariables): MutationRef<WebhookCreateClientWithConfigData, WebhookCreateClientWithConfigVariables>;
  operationName: string;
}
export const webhookCreateClientWithConfigRef: WebhookCreateClientWithConfigRef;

export function webhookCreateClientWithConfig(vars: WebhookCreateClientWithConfigVariables): MutationPromise<WebhookCreateClientWithConfigData, WebhookCreateClientWithConfigVariables>;
export function webhookCreateClientWithConfig(dc: DataConnect, vars: WebhookCreateClientWithConfigVariables): MutationPromise<WebhookCreateClientWithConfigData, WebhookCreateClientWithConfigVariables>;

interface CreateClientAiBotConfigAdminRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateClientAiBotConfigAdminVariables): MutationRef<CreateClientAiBotConfigAdminData, CreateClientAiBotConfigAdminVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateClientAiBotConfigAdminVariables): MutationRef<CreateClientAiBotConfigAdminData, CreateClientAiBotConfigAdminVariables>;
  operationName: string;
}
export const createClientAiBotConfigAdminRef: CreateClientAiBotConfigAdminRef;

export function createClientAiBotConfigAdmin(vars: CreateClientAiBotConfigAdminVariables): MutationPromise<CreateClientAiBotConfigAdminData, CreateClientAiBotConfigAdminVariables>;
export function createClientAiBotConfigAdmin(dc: DataConnect, vars: CreateClientAiBotConfigAdminVariables): MutationPromise<CreateClientAiBotConfigAdminData, CreateClientAiBotConfigAdminVariables>;

interface UpdateClientAiBotConfigAdminRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateClientAiBotConfigAdminVariables): MutationRef<UpdateClientAiBotConfigAdminData, UpdateClientAiBotConfigAdminVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateClientAiBotConfigAdminVariables): MutationRef<UpdateClientAiBotConfigAdminData, UpdateClientAiBotConfigAdminVariables>;
  operationName: string;
}
export const updateClientAiBotConfigAdminRef: UpdateClientAiBotConfigAdminRef;

export function updateClientAiBotConfigAdmin(vars: UpdateClientAiBotConfigAdminVariables): MutationPromise<UpdateClientAiBotConfigAdminData, UpdateClientAiBotConfigAdminVariables>;
export function updateClientAiBotConfigAdmin(dc: DataConnect, vars: UpdateClientAiBotConfigAdminVariables): MutationPromise<UpdateClientAiBotConfigAdminData, UpdateClientAiBotConfigAdminVariables>;

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

interface GetClientByIdRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetClientByIdVariables): QueryRef<GetClientByIdData, GetClientByIdVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetClientByIdVariables): QueryRef<GetClientByIdData, GetClientByIdVariables>;
  operationName: string;
}
export const getClientByIdRef: GetClientByIdRef;

export function getClientById(vars: GetClientByIdVariables): QueryPromise<GetClientByIdData, GetClientByIdVariables>;
export function getClientById(dc: DataConnect, vars: GetClientByIdVariables): QueryPromise<GetClientByIdData, GetClientByIdVariables>;

interface GetClientAiBotConfigByAccessTokenRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetClientAiBotConfigByAccessTokenVariables): QueryRef<GetClientAiBotConfigByAccessTokenData, GetClientAiBotConfigByAccessTokenVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetClientAiBotConfigByAccessTokenVariables): QueryRef<GetClientAiBotConfigByAccessTokenData, GetClientAiBotConfigByAccessTokenVariables>;
  operationName: string;
}
export const getClientAiBotConfigByAccessTokenRef: GetClientAiBotConfigByAccessTokenRef;

export function getClientAiBotConfigByAccessToken(vars: GetClientAiBotConfigByAccessTokenVariables): QueryPromise<GetClientAiBotConfigByAccessTokenData, GetClientAiBotConfigByAccessTokenVariables>;
export function getClientAiBotConfigByAccessToken(dc: DataConnect, vars: GetClientAiBotConfigByAccessTokenVariables): QueryPromise<GetClientAiBotConfigByAccessTokenData, GetClientAiBotConfigByAccessTokenVariables>;

interface ListClientInboundContactsByClientRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListClientInboundContactsByClientVariables): QueryRef<ListClientInboundContactsByClientData, ListClientInboundContactsByClientVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: ListClientInboundContactsByClientVariables): QueryRef<ListClientInboundContactsByClientData, ListClientInboundContactsByClientVariables>;
  operationName: string;
}
export const listClientInboundContactsByClientRef: ListClientInboundContactsByClientRef;

export function listClientInboundContactsByClient(vars: ListClientInboundContactsByClientVariables): QueryPromise<ListClientInboundContactsByClientData, ListClientInboundContactsByClientVariables>;
export function listClientInboundContactsByClient(dc: DataConnect, vars: ListClientInboundContactsByClientVariables): QueryPromise<ListClientInboundContactsByClientData, ListClientInboundContactsByClientVariables>;

interface ListClientsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListClientsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListClientsData, undefined>;
  operationName: string;
}
export const listClientsRef: ListClientsRef;

export function listClients(): QueryPromise<ListClientsData, undefined>;
export function listClients(dc: DataConnect): QueryPromise<ListClientsData, undefined>;

interface ListPlatformInboundContactsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListPlatformInboundContactsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListPlatformInboundContactsData, undefined>;
  operationName: string;
}
export const listPlatformInboundContactsRef: ListPlatformInboundContactsRef;

export function listPlatformInboundContacts(): QueryPromise<ListPlatformInboundContactsData, undefined>;
export function listPlatformInboundContacts(dc: DataConnect): QueryPromise<ListPlatformInboundContactsData, undefined>;

interface ListPlatformOutboundContactsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListPlatformOutboundContactsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListPlatformOutboundContactsData, undefined>;
  operationName: string;
}
export const listPlatformOutboundContactsRef: ListPlatformOutboundContactsRef;

export function listPlatformOutboundContacts(): QueryPromise<ListPlatformOutboundContactsData, undefined>;
export function listPlatformOutboundContacts(dc: DataConnect): QueryPromise<ListPlatformOutboundContactsData, undefined>;

interface ListPlatformOutboundOutreachEventsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListPlatformOutboundOutreachEventsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListPlatformOutboundOutreachEventsData, undefined>;
  operationName: string;
}
export const listPlatformOutboundOutreachEventsRef: ListPlatformOutboundOutreachEventsRef;

export function listPlatformOutboundOutreachEvents(): QueryPromise<ListPlatformOutboundOutreachEventsData, undefined>;
export function listPlatformOutboundOutreachEvents(dc: DataConnect): QueryPromise<ListPlatformOutboundOutreachEventsData, undefined>;

interface ListPlatformAgentActivitiesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListPlatformAgentActivitiesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListPlatformAgentActivitiesData, undefined>;
  operationName: string;
}
export const listPlatformAgentActivitiesRef: ListPlatformAgentActivitiesRef;

export function listPlatformAgentActivities(): QueryPromise<ListPlatformAgentActivitiesData, undefined>;
export function listPlatformAgentActivities(dc: DataConnect): QueryPromise<ListPlatformAgentActivitiesData, undefined>;

interface ListClientAiBotPerformanceEventsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListClientAiBotPerformanceEventsVariables): QueryRef<ListClientAiBotPerformanceEventsData, ListClientAiBotPerformanceEventsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: ListClientAiBotPerformanceEventsVariables): QueryRef<ListClientAiBotPerformanceEventsData, ListClientAiBotPerformanceEventsVariables>;
  operationName: string;
}
export const listClientAiBotPerformanceEventsRef: ListClientAiBotPerformanceEventsRef;

export function listClientAiBotPerformanceEvents(vars: ListClientAiBotPerformanceEventsVariables): QueryPromise<ListClientAiBotPerformanceEventsData, ListClientAiBotPerformanceEventsVariables>;
export function listClientAiBotPerformanceEvents(dc: DataConnect, vars: ListClientAiBotPerformanceEventsVariables): QueryPromise<ListClientAiBotPerformanceEventsData, ListClientAiBotPerformanceEventsVariables>;

interface GetClientConversationRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetClientConversationVariables): QueryRef<GetClientConversationData, GetClientConversationVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetClientConversationVariables): QueryRef<GetClientConversationData, GetClientConversationVariables>;
  operationName: string;
}
export const getClientConversationRef: GetClientConversationRef;

export function getClientConversation(vars: GetClientConversationVariables): QueryPromise<GetClientConversationData, GetClientConversationVariables>;
export function getClientConversation(dc: DataConnect, vars: GetClientConversationVariables): QueryPromise<GetClientConversationData, GetClientConversationVariables>;

interface ListClientConversationsByClientAndTokenRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListClientConversationsByClientAndTokenVariables): QueryRef<ListClientConversationsByClientAndTokenData, ListClientConversationsByClientAndTokenVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: ListClientConversationsByClientAndTokenVariables): QueryRef<ListClientConversationsByClientAndTokenData, ListClientConversationsByClientAndTokenVariables>;
  operationName: string;
}
export const listClientConversationsByClientAndTokenRef: ListClientConversationsByClientAndTokenRef;

export function listClientConversationsByClientAndToken(vars: ListClientConversationsByClientAndTokenVariables): QueryPromise<ListClientConversationsByClientAndTokenData, ListClientConversationsByClientAndTokenVariables>;
export function listClientConversationsByClientAndToken(dc: DataConnect, vars: ListClientConversationsByClientAndTokenVariables): QueryPromise<ListClientConversationsByClientAndTokenData, ListClientConversationsByClientAndTokenVariables>;

interface ListClientConversationsByAccessTokenRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListClientConversationsByAccessTokenVariables): QueryRef<ListClientConversationsByAccessTokenData, ListClientConversationsByAccessTokenVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: ListClientConversationsByAccessTokenVariables): QueryRef<ListClientConversationsByAccessTokenData, ListClientConversationsByAccessTokenVariables>;
  operationName: string;
}
export const listClientConversationsByAccessTokenRef: ListClientConversationsByAccessTokenRef;

export function listClientConversationsByAccessToken(vars: ListClientConversationsByAccessTokenVariables): QueryPromise<ListClientConversationsByAccessTokenData, ListClientConversationsByAccessTokenVariables>;
export function listClientConversationsByAccessToken(dc: DataConnect, vars: ListClientConversationsByAccessTokenVariables): QueryPromise<ListClientConversationsByAccessTokenData, ListClientConversationsByAccessTokenVariables>;

interface GetClientByLinkedAuthUidAdminRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetClientByLinkedAuthUidAdminVariables): QueryRef<GetClientByLinkedAuthUidAdminData, GetClientByLinkedAuthUidAdminVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetClientByLinkedAuthUidAdminVariables): QueryRef<GetClientByLinkedAuthUidAdminData, GetClientByLinkedAuthUidAdminVariables>;
  operationName: string;
}
export const getClientByLinkedAuthUidAdminRef: GetClientByLinkedAuthUidAdminRef;

export function getClientByLinkedAuthUidAdmin(vars: GetClientByLinkedAuthUidAdminVariables): QueryPromise<GetClientByLinkedAuthUidAdminData, GetClientByLinkedAuthUidAdminVariables>;
export function getClientByLinkedAuthUidAdmin(dc: DataConnect, vars: GetClientByLinkedAuthUidAdminVariables): QueryPromise<GetClientByLinkedAuthUidAdminData, GetClientByLinkedAuthUidAdminVariables>;

interface GetClientByPaddleSubscriptionIdAdminRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetClientByPaddleSubscriptionIdAdminVariables): QueryRef<GetClientByPaddleSubscriptionIdAdminData, GetClientByPaddleSubscriptionIdAdminVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetClientByPaddleSubscriptionIdAdminVariables): QueryRef<GetClientByPaddleSubscriptionIdAdminData, GetClientByPaddleSubscriptionIdAdminVariables>;
  operationName: string;
}
export const getClientByPaddleSubscriptionIdAdminRef: GetClientByPaddleSubscriptionIdAdminRef;

export function getClientByPaddleSubscriptionIdAdmin(vars: GetClientByPaddleSubscriptionIdAdminVariables): QueryPromise<GetClientByPaddleSubscriptionIdAdminData, GetClientByPaddleSubscriptionIdAdminVariables>;
export function getClientByPaddleSubscriptionIdAdmin(dc: DataConnect, vars: GetClientByPaddleSubscriptionIdAdminVariables): QueryPromise<GetClientByPaddleSubscriptionIdAdminData, GetClientByPaddleSubscriptionIdAdminVariables>;

