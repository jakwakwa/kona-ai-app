import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'kona',
  service: 'jacobkotzee',
  location: 'europe-west1'
};

export const upsertPlatformOwnerRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpsertPlatformOwner', inputVars);
}
upsertPlatformOwnerRef.operationName = 'UpsertPlatformOwner';

export function upsertPlatformOwner(dcOrVars, vars) {
  return executeMutation(upsertPlatformOwnerRef(dcOrVars, vars));
}

export const createClientRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateClient', inputVars);
}
createClientRef.operationName = 'CreateClient';

export function createClient(dcOrVars, vars) {
  return executeMutation(createClientRef(dcOrVars, vars));
}

export const updateClientRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateClient', inputVars);
}
updateClientRef.operationName = 'UpdateClient';

export function updateClient(dcOrVars, vars) {
  return executeMutation(updateClientRef(dcOrVars, vars));
}

export const createClientAiBotConfigRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateClientAiBotConfig', inputVars);
}
createClientAiBotConfigRef.operationName = 'CreateClientAiBotConfig';

export function createClientAiBotConfig(dcOrVars, vars) {
  return executeMutation(createClientAiBotConfigRef(dcOrVars, vars));
}

export const updateClientAiBotConfigRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateClientAiBotConfig', inputVars);
}
updateClientAiBotConfigRef.operationName = 'UpdateClientAiBotConfig';

export function updateClientAiBotConfig(dcOrVars, vars) {
  return executeMutation(updateClientAiBotConfigRef(dcOrVars, vars));
}

export const createClientInboundContactRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateClientInboundContact', inputVars);
}
createClientInboundContactRef.operationName = 'CreateClientInboundContact';

export function createClientInboundContact(dcOrVars, vars) {
  return executeMutation(createClientInboundContactRef(dcOrVars, vars));
}

export const updateClientInboundContactRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateClientInboundContact', inputVars);
}
updateClientInboundContactRef.operationName = 'UpdateClientInboundContact';

export function updateClientInboundContact(dcOrVars, vars) {
  return executeMutation(updateClientInboundContactRef(dcOrVars, vars));
}

export const createPlatformInboundContactRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreatePlatformInboundContact', inputVars);
}
createPlatformInboundContactRef.operationName = 'CreatePlatformInboundContact';

export function createPlatformInboundContact(dcOrVars, vars) {
  return executeMutation(createPlatformInboundContactRef(dcOrVars, vars));
}

export const createPlatformOutboundContactRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreatePlatformOutboundContact', inputVars);
}
createPlatformOutboundContactRef.operationName = 'CreatePlatformOutboundContact';

export function createPlatformOutboundContact(dcOrVars, vars) {
  return executeMutation(createPlatformOutboundContactRef(dcOrVars, vars));
}

export const createPlatformOutboundOutreachEventRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreatePlatformOutboundOutreachEvent', inputVars);
}
createPlatformOutboundOutreachEventRef.operationName = 'CreatePlatformOutboundOutreachEvent';

export function createPlatformOutboundOutreachEvent(dcOrVars, vars) {
  return executeMutation(createPlatformOutboundOutreachEventRef(dcOrVars, vars));
}

export const createPlatformAgentActivityRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreatePlatformAgentActivity', inputVars);
}
createPlatformAgentActivityRef.operationName = 'CreatePlatformAgentActivity';

export function createPlatformAgentActivity(dcOrVars, vars) {
  return executeMutation(createPlatformAgentActivityRef(dcOrVars, vars));
}

export const createClientAiBotPerformanceEventRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateClientAiBotPerformanceEvent', inputVars);
}
createClientAiBotPerformanceEventRef.operationName = 'CreateClientAiBotPerformanceEvent';

export function createClientAiBotPerformanceEvent(dcOrVars, vars) {
  return executeMutation(createClientAiBotPerformanceEventRef(dcOrVars, vars));
}

export const createClientConversationRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateClientConversation', inputVars);
}
createClientConversationRef.operationName = 'CreateClientConversation';

export function createClientConversation(dcOrVars, vars) {
  return executeMutation(createClientConversationRef(dcOrVars, vars));
}

export const updateClientConversationRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateClientConversation', inputVars);
}
updateClientConversationRef.operationName = 'UpdateClientConversation';

export function updateClientConversation(dcOrVars, vars) {
  return executeMutation(updateClientConversationRef(dcOrVars, vars));
}

export const createClientAdminRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateClientAdmin', inputVars);
}
createClientAdminRef.operationName = 'CreateClientAdmin';

export function createClientAdmin(dcOrVars, vars) {
  return executeMutation(createClientAdminRef(dcOrVars, vars));
}

export const updateClientAdminRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateClientAdmin', inputVars);
}
updateClientAdminRef.operationName = 'UpdateClientAdmin';

export function updateClientAdmin(dcOrVars, vars) {
  return executeMutation(updateClientAdminRef(dcOrVars, vars));
}

export const webhookCreateClientWithConfigRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'WebhookCreateClientWithConfig', inputVars);
}
webhookCreateClientWithConfigRef.operationName = 'WebhookCreateClientWithConfig';

export function webhookCreateClientWithConfig(dcOrVars, vars) {
  return executeMutation(webhookCreateClientWithConfigRef(dcOrVars, vars));
}

export const createClientAiBotConfigAdminRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateClientAiBotConfigAdmin', inputVars);
}
createClientAiBotConfigAdminRef.operationName = 'CreateClientAiBotConfigAdmin';

export function createClientAiBotConfigAdmin(dcOrVars, vars) {
  return executeMutation(createClientAiBotConfigAdminRef(dcOrVars, vars));
}

export const updateClientAiBotConfigAdminRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateClientAiBotConfigAdmin', inputVars);
}
updateClientAiBotConfigAdminRef.operationName = 'UpdateClientAiBotConfigAdmin';

export function updateClientAiBotConfigAdmin(dcOrVars, vars) {
  return executeMutation(updateClientAiBotConfigAdminRef(dcOrVars, vars));
}

export const getClientByLinkedAuthUidRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetClientByLinkedAuthUid', inputVars);
}
getClientByLinkedAuthUidRef.operationName = 'GetClientByLinkedAuthUid';

export function getClientByLinkedAuthUid(dcOrVars, vars) {
  return executeQuery(getClientByLinkedAuthUidRef(dcOrVars, vars));
}

export const getClientByIdRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetClientById', inputVars);
}
getClientByIdRef.operationName = 'GetClientById';

export function getClientById(dcOrVars, vars) {
  return executeQuery(getClientByIdRef(dcOrVars, vars));
}

export const getClientAiBotConfigByAccessTokenRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetClientAiBotConfigByAccessToken', inputVars);
}
getClientAiBotConfigByAccessTokenRef.operationName = 'GetClientAiBotConfigByAccessToken';

export function getClientAiBotConfigByAccessToken(dcOrVars, vars) {
  return executeQuery(getClientAiBotConfigByAccessTokenRef(dcOrVars, vars));
}

export const listClientInboundContactsByClientRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListClientInboundContactsByClient', inputVars);
}
listClientInboundContactsByClientRef.operationName = 'ListClientInboundContactsByClient';

export function listClientInboundContactsByClient(dcOrVars, vars) {
  return executeQuery(listClientInboundContactsByClientRef(dcOrVars, vars));
}

export const listClientsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListClients');
}
listClientsRef.operationName = 'ListClients';

export function listClients(dc) {
  return executeQuery(listClientsRef(dc));
}

export const listPlatformInboundContactsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListPlatformInboundContacts');
}
listPlatformInboundContactsRef.operationName = 'ListPlatformInboundContacts';

export function listPlatformInboundContacts(dc) {
  return executeQuery(listPlatformInboundContactsRef(dc));
}

export const listPlatformOutboundContactsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListPlatformOutboundContacts');
}
listPlatformOutboundContactsRef.operationName = 'ListPlatformOutboundContacts';

export function listPlatformOutboundContacts(dc) {
  return executeQuery(listPlatformOutboundContactsRef(dc));
}

export const listPlatformOutboundOutreachEventsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListPlatformOutboundOutreachEvents');
}
listPlatformOutboundOutreachEventsRef.operationName = 'ListPlatformOutboundOutreachEvents';

export function listPlatformOutboundOutreachEvents(dc) {
  return executeQuery(listPlatformOutboundOutreachEventsRef(dc));
}

export const listPlatformAgentActivitiesRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListPlatformAgentActivities');
}
listPlatformAgentActivitiesRef.operationName = 'ListPlatformAgentActivities';

export function listPlatformAgentActivities(dc) {
  return executeQuery(listPlatformAgentActivitiesRef(dc));
}

export const listClientAiBotPerformanceEventsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListClientAiBotPerformanceEvents', inputVars);
}
listClientAiBotPerformanceEventsRef.operationName = 'ListClientAiBotPerformanceEvents';

export function listClientAiBotPerformanceEvents(dcOrVars, vars) {
  return executeQuery(listClientAiBotPerformanceEventsRef(dcOrVars, vars));
}

export const getClientConversationRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetClientConversation', inputVars);
}
getClientConversationRef.operationName = 'GetClientConversation';

export function getClientConversation(dcOrVars, vars) {
  return executeQuery(getClientConversationRef(dcOrVars, vars));
}

export const listClientConversationsByClientAndTokenRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListClientConversationsByClientAndToken', inputVars);
}
listClientConversationsByClientAndTokenRef.operationName = 'ListClientConversationsByClientAndToken';

export function listClientConversationsByClientAndToken(dcOrVars, vars) {
  return executeQuery(listClientConversationsByClientAndTokenRef(dcOrVars, vars));
}

export const listClientConversationsByAccessTokenRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListClientConversationsByAccessToken', inputVars);
}
listClientConversationsByAccessTokenRef.operationName = 'ListClientConversationsByAccessToken';

export function listClientConversationsByAccessToken(dcOrVars, vars) {
  return executeQuery(listClientConversationsByAccessTokenRef(dcOrVars, vars));
}

export const getClientByLinkedAuthUidAdminRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetClientByLinkedAuthUidAdmin', inputVars);
}
getClientByLinkedAuthUidAdminRef.operationName = 'GetClientByLinkedAuthUidAdmin';

export function getClientByLinkedAuthUidAdmin(dcOrVars, vars) {
  return executeQuery(getClientByLinkedAuthUidAdminRef(dcOrVars, vars));
}

export const getClientByPaddleSubscriptionIdAdminRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetClientByPaddleSubscriptionIdAdmin', inputVars);
}
getClientByPaddleSubscriptionIdAdminRef.operationName = 'GetClientByPaddleSubscriptionIdAdmin';

export function getClientByPaddleSubscriptionIdAdmin(dcOrVars, vars) {
  return executeQuery(getClientByPaddleSubscriptionIdAdminRef(dcOrVars, vars));
}

