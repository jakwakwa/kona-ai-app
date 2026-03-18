const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'kona',
  service: 'jacobkotzee',
  location: 'europe-west1'
};
exports.connectorConfig = connectorConfig;

const upsertPlatformOwnerRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpsertPlatformOwner', inputVars);
}
upsertPlatformOwnerRef.operationName = 'UpsertPlatformOwner';
exports.upsertPlatformOwnerRef = upsertPlatformOwnerRef;

exports.upsertPlatformOwner = function upsertPlatformOwner(dcOrVars, vars) {
  return executeMutation(upsertPlatformOwnerRef(dcOrVars, vars));
};

const createClientRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateClient', inputVars);
}
createClientRef.operationName = 'CreateClient';
exports.createClientRef = createClientRef;

exports.createClient = function createClient(dcOrVars, vars) {
  return executeMutation(createClientRef(dcOrVars, vars));
};

const updateClientRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateClient', inputVars);
}
updateClientRef.operationName = 'UpdateClient';
exports.updateClientRef = updateClientRef;

exports.updateClient = function updateClient(dcOrVars, vars) {
  return executeMutation(updateClientRef(dcOrVars, vars));
};

const createClientAiBotConfigRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateClientAiBotConfig', inputVars);
}
createClientAiBotConfigRef.operationName = 'CreateClientAiBotConfig';
exports.createClientAiBotConfigRef = createClientAiBotConfigRef;

exports.createClientAiBotConfig = function createClientAiBotConfig(dcOrVars, vars) {
  return executeMutation(createClientAiBotConfigRef(dcOrVars, vars));
};

const updateClientAiBotConfigRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateClientAiBotConfig', inputVars);
}
updateClientAiBotConfigRef.operationName = 'UpdateClientAiBotConfig';
exports.updateClientAiBotConfigRef = updateClientAiBotConfigRef;

exports.updateClientAiBotConfig = function updateClientAiBotConfig(dcOrVars, vars) {
  return executeMutation(updateClientAiBotConfigRef(dcOrVars, vars));
};

const createClientInboundContactRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateClientInboundContact', inputVars);
}
createClientInboundContactRef.operationName = 'CreateClientInboundContact';
exports.createClientInboundContactRef = createClientInboundContactRef;

exports.createClientInboundContact = function createClientInboundContact(dcOrVars, vars) {
  return executeMutation(createClientInboundContactRef(dcOrVars, vars));
};

const updateClientInboundContactRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateClientInboundContact', inputVars);
}
updateClientInboundContactRef.operationName = 'UpdateClientInboundContact';
exports.updateClientInboundContactRef = updateClientInboundContactRef;

exports.updateClientInboundContact = function updateClientInboundContact(dcOrVars, vars) {
  return executeMutation(updateClientInboundContactRef(dcOrVars, vars));
};

const createPlatformInboundContactRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreatePlatformInboundContact', inputVars);
}
createPlatformInboundContactRef.operationName = 'CreatePlatformInboundContact';
exports.createPlatformInboundContactRef = createPlatformInboundContactRef;

exports.createPlatformInboundContact = function createPlatformInboundContact(dcOrVars, vars) {
  return executeMutation(createPlatformInboundContactRef(dcOrVars, vars));
};

const createPlatformOutboundContactRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreatePlatformOutboundContact', inputVars);
}
createPlatformOutboundContactRef.operationName = 'CreatePlatformOutboundContact';
exports.createPlatformOutboundContactRef = createPlatformOutboundContactRef;

exports.createPlatformOutboundContact = function createPlatformOutboundContact(dcOrVars, vars) {
  return executeMutation(createPlatformOutboundContactRef(dcOrVars, vars));
};

const createPlatformOutboundOutreachEventRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreatePlatformOutboundOutreachEvent', inputVars);
}
createPlatformOutboundOutreachEventRef.operationName = 'CreatePlatformOutboundOutreachEvent';
exports.createPlatformOutboundOutreachEventRef = createPlatformOutboundOutreachEventRef;

exports.createPlatformOutboundOutreachEvent = function createPlatformOutboundOutreachEvent(dcOrVars, vars) {
  return executeMutation(createPlatformOutboundOutreachEventRef(dcOrVars, vars));
};

const createPlatformAgentActivityRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreatePlatformAgentActivity', inputVars);
}
createPlatformAgentActivityRef.operationName = 'CreatePlatformAgentActivity';
exports.createPlatformAgentActivityRef = createPlatformAgentActivityRef;

exports.createPlatformAgentActivity = function createPlatformAgentActivity(dcOrVars, vars) {
  return executeMutation(createPlatformAgentActivityRef(dcOrVars, vars));
};

const createClientAiBotPerformanceEventRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateClientAiBotPerformanceEvent', inputVars);
}
createClientAiBotPerformanceEventRef.operationName = 'CreateClientAiBotPerformanceEvent';
exports.createClientAiBotPerformanceEventRef = createClientAiBotPerformanceEventRef;

exports.createClientAiBotPerformanceEvent = function createClientAiBotPerformanceEvent(dcOrVars, vars) {
  return executeMutation(createClientAiBotPerformanceEventRef(dcOrVars, vars));
};

const createClientConversationRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateClientConversation', inputVars);
}
createClientConversationRef.operationName = 'CreateClientConversation';
exports.createClientConversationRef = createClientConversationRef;

exports.createClientConversation = function createClientConversation(dcOrVars, vars) {
  return executeMutation(createClientConversationRef(dcOrVars, vars));
};

const updateClientConversationRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateClientConversation', inputVars);
}
updateClientConversationRef.operationName = 'UpdateClientConversation';
exports.updateClientConversationRef = updateClientConversationRef;

exports.updateClientConversation = function updateClientConversation(dcOrVars, vars) {
  return executeMutation(updateClientConversationRef(dcOrVars, vars));
};

const createClientAdminRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateClientAdmin', inputVars);
}
createClientAdminRef.operationName = 'CreateClientAdmin';
exports.createClientAdminRef = createClientAdminRef;

exports.createClientAdmin = function createClientAdmin(dcOrVars, vars) {
  return executeMutation(createClientAdminRef(dcOrVars, vars));
};

const updateClientAdminRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateClientAdmin', inputVars);
}
updateClientAdminRef.operationName = 'UpdateClientAdmin';
exports.updateClientAdminRef = updateClientAdminRef;

exports.updateClientAdmin = function updateClientAdmin(dcOrVars, vars) {
  return executeMutation(updateClientAdminRef(dcOrVars, vars));
};

const webhookCreateClientWithConfigRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'WebhookCreateClientWithConfig', inputVars);
}
webhookCreateClientWithConfigRef.operationName = 'WebhookCreateClientWithConfig';
exports.webhookCreateClientWithConfigRef = webhookCreateClientWithConfigRef;

exports.webhookCreateClientWithConfig = function webhookCreateClientWithConfig(dcOrVars, vars) {
  return executeMutation(webhookCreateClientWithConfigRef(dcOrVars, vars));
};

const createClientAiBotConfigAdminRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateClientAiBotConfigAdmin', inputVars);
}
createClientAiBotConfigAdminRef.operationName = 'CreateClientAiBotConfigAdmin';
exports.createClientAiBotConfigAdminRef = createClientAiBotConfigAdminRef;

exports.createClientAiBotConfigAdmin = function createClientAiBotConfigAdmin(dcOrVars, vars) {
  return executeMutation(createClientAiBotConfigAdminRef(dcOrVars, vars));
};

const updateClientAiBotConfigAdminRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateClientAiBotConfigAdmin', inputVars);
}
updateClientAiBotConfigAdminRef.operationName = 'UpdateClientAiBotConfigAdmin';
exports.updateClientAiBotConfigAdminRef = updateClientAiBotConfigAdminRef;

exports.updateClientAiBotConfigAdmin = function updateClientAiBotConfigAdmin(dcOrVars, vars) {
  return executeMutation(updateClientAiBotConfigAdminRef(dcOrVars, vars));
};

const getClientByLinkedAuthUidRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetClientByLinkedAuthUid', inputVars);
}
getClientByLinkedAuthUidRef.operationName = 'GetClientByLinkedAuthUid';
exports.getClientByLinkedAuthUidRef = getClientByLinkedAuthUidRef;

exports.getClientByLinkedAuthUid = function getClientByLinkedAuthUid(dcOrVars, vars) {
  return executeQuery(getClientByLinkedAuthUidRef(dcOrVars, vars));
};

const getClientByIdRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetClientById', inputVars);
}
getClientByIdRef.operationName = 'GetClientById';
exports.getClientByIdRef = getClientByIdRef;

exports.getClientById = function getClientById(dcOrVars, vars) {
  return executeQuery(getClientByIdRef(dcOrVars, vars));
};

const getClientAiBotConfigByAccessTokenRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetClientAiBotConfigByAccessToken', inputVars);
}
getClientAiBotConfigByAccessTokenRef.operationName = 'GetClientAiBotConfigByAccessToken';
exports.getClientAiBotConfigByAccessTokenRef = getClientAiBotConfigByAccessTokenRef;

exports.getClientAiBotConfigByAccessToken = function getClientAiBotConfigByAccessToken(dcOrVars, vars) {
  return executeQuery(getClientAiBotConfigByAccessTokenRef(dcOrVars, vars));
};

const listClientInboundContactsByClientRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListClientInboundContactsByClient', inputVars);
}
listClientInboundContactsByClientRef.operationName = 'ListClientInboundContactsByClient';
exports.listClientInboundContactsByClientRef = listClientInboundContactsByClientRef;

exports.listClientInboundContactsByClient = function listClientInboundContactsByClient(dcOrVars, vars) {
  return executeQuery(listClientInboundContactsByClientRef(dcOrVars, vars));
};

const listClientsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListClients');
}
listClientsRef.operationName = 'ListClients';
exports.listClientsRef = listClientsRef;

exports.listClients = function listClients(dc) {
  return executeQuery(listClientsRef(dc));
};

const listPlatformInboundContactsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListPlatformInboundContacts');
}
listPlatformInboundContactsRef.operationName = 'ListPlatformInboundContacts';
exports.listPlatformInboundContactsRef = listPlatformInboundContactsRef;

exports.listPlatformInboundContacts = function listPlatformInboundContacts(dc) {
  return executeQuery(listPlatformInboundContactsRef(dc));
};

const listPlatformOutboundContactsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListPlatformOutboundContacts');
}
listPlatformOutboundContactsRef.operationName = 'ListPlatformOutboundContacts';
exports.listPlatformOutboundContactsRef = listPlatformOutboundContactsRef;

exports.listPlatformOutboundContacts = function listPlatformOutboundContacts(dc) {
  return executeQuery(listPlatformOutboundContactsRef(dc));
};

const listPlatformOutboundOutreachEventsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListPlatformOutboundOutreachEvents');
}
listPlatformOutboundOutreachEventsRef.operationName = 'ListPlatformOutboundOutreachEvents';
exports.listPlatformOutboundOutreachEventsRef = listPlatformOutboundOutreachEventsRef;

exports.listPlatformOutboundOutreachEvents = function listPlatformOutboundOutreachEvents(dc) {
  return executeQuery(listPlatformOutboundOutreachEventsRef(dc));
};

const listPlatformAgentActivitiesRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListPlatformAgentActivities');
}
listPlatformAgentActivitiesRef.operationName = 'ListPlatformAgentActivities';
exports.listPlatformAgentActivitiesRef = listPlatformAgentActivitiesRef;

exports.listPlatformAgentActivities = function listPlatformAgentActivities(dc) {
  return executeQuery(listPlatformAgentActivitiesRef(dc));
};

const listClientAiBotPerformanceEventsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListClientAiBotPerformanceEvents', inputVars);
}
listClientAiBotPerformanceEventsRef.operationName = 'ListClientAiBotPerformanceEvents';
exports.listClientAiBotPerformanceEventsRef = listClientAiBotPerformanceEventsRef;

exports.listClientAiBotPerformanceEvents = function listClientAiBotPerformanceEvents(dcOrVars, vars) {
  return executeQuery(listClientAiBotPerformanceEventsRef(dcOrVars, vars));
};

const getClientConversationRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetClientConversation', inputVars);
}
getClientConversationRef.operationName = 'GetClientConversation';
exports.getClientConversationRef = getClientConversationRef;

exports.getClientConversation = function getClientConversation(dcOrVars, vars) {
  return executeQuery(getClientConversationRef(dcOrVars, vars));
};

const listClientConversationsByClientAndTokenRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListClientConversationsByClientAndToken', inputVars);
}
listClientConversationsByClientAndTokenRef.operationName = 'ListClientConversationsByClientAndToken';
exports.listClientConversationsByClientAndTokenRef = listClientConversationsByClientAndTokenRef;

exports.listClientConversationsByClientAndToken = function listClientConversationsByClientAndToken(dcOrVars, vars) {
  return executeQuery(listClientConversationsByClientAndTokenRef(dcOrVars, vars));
};

const listClientConversationsByAccessTokenRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListClientConversationsByAccessToken', inputVars);
}
listClientConversationsByAccessTokenRef.operationName = 'ListClientConversationsByAccessToken';
exports.listClientConversationsByAccessTokenRef = listClientConversationsByAccessTokenRef;

exports.listClientConversationsByAccessToken = function listClientConversationsByAccessToken(dcOrVars, vars) {
  return executeQuery(listClientConversationsByAccessTokenRef(dcOrVars, vars));
};

const getClientByLinkedAuthUidAdminRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetClientByLinkedAuthUidAdmin', inputVars);
}
getClientByLinkedAuthUidAdminRef.operationName = 'GetClientByLinkedAuthUidAdmin';
exports.getClientByLinkedAuthUidAdminRef = getClientByLinkedAuthUidAdminRef;

exports.getClientByLinkedAuthUidAdmin = function getClientByLinkedAuthUidAdmin(dcOrVars, vars) {
  return executeQuery(getClientByLinkedAuthUidAdminRef(dcOrVars, vars));
};

const getClientByPaddleSubscriptionIdAdminRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetClientByPaddleSubscriptionIdAdmin', inputVars);
}
getClientByPaddleSubscriptionIdAdminRef.operationName = 'GetClientByPaddleSubscriptionIdAdmin';
exports.getClientByPaddleSubscriptionIdAdminRef = getClientByPaddleSubscriptionIdAdminRef;

exports.getClientByPaddleSubscriptionIdAdmin = function getClientByPaddleSubscriptionIdAdmin(dcOrVars, vars) {
  return executeQuery(getClientByPaddleSubscriptionIdAdminRef(dcOrVars, vars));
};
