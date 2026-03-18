const { validateAdminArgs } = require('firebase-admin/data-connect');

const connectorConfig = {
  connector: 'kona',
  serviceId: 'jacobkotzee',
  location: 'europe-west1'
};
exports.connectorConfig = connectorConfig;

function upsertPlatformOwner(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, false);
  dcInstance.useGen(true);
  return dcInstance.executeMutation('UpsertPlatformOwner', inputVars, inputOpts);
}
exports.upsertPlatformOwner = upsertPlatformOwner;

function createClient(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, false);
  dcInstance.useGen(true);
  return dcInstance.executeMutation('CreateClient', inputVars, inputOpts);
}
exports.createClient = createClient;

function updateClient(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeMutation('UpdateClient', inputVars, inputOpts);
}
exports.updateClient = updateClient;

function createClientAiBotConfig(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeMutation('CreateClientAiBotConfig', inputVars, inputOpts);
}
exports.createClientAiBotConfig = createClientAiBotConfig;

function updateClientAiBotConfig(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeMutation('UpdateClientAiBotConfig', inputVars, inputOpts);
}
exports.updateClientAiBotConfig = updateClientAiBotConfig;

function createClientInboundContact(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeMutation('CreateClientInboundContact', inputVars, inputOpts);
}
exports.createClientInboundContact = createClientInboundContact;

function updateClientInboundContact(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeMutation('UpdateClientInboundContact', inputVars, inputOpts);
}
exports.updateClientInboundContact = updateClientInboundContact;

function createPlatformInboundContact(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, false);
  dcInstance.useGen(true);
  return dcInstance.executeMutation('CreatePlatformInboundContact', inputVars, inputOpts);
}
exports.createPlatformInboundContact = createPlatformInboundContact;

function createPlatformOutboundContact(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, false);
  dcInstance.useGen(true);
  return dcInstance.executeMutation('CreatePlatformOutboundContact', inputVars, inputOpts);
}
exports.createPlatformOutboundContact = createPlatformOutboundContact;

function createPlatformOutboundOutreachEvent(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeMutation('CreatePlatformOutboundOutreachEvent', inputVars, inputOpts);
}
exports.createPlatformOutboundOutreachEvent = createPlatformOutboundOutreachEvent;

function createPlatformAgentActivity(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, false);
  dcInstance.useGen(true);
  return dcInstance.executeMutation('CreatePlatformAgentActivity', inputVars, inputOpts);
}
exports.createPlatformAgentActivity = createPlatformAgentActivity;

function createClientAiBotPerformanceEvent(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeMutation('CreateClientAiBotPerformanceEvent', inputVars, inputOpts);
}
exports.createClientAiBotPerformanceEvent = createClientAiBotPerformanceEvent;

function createClientConversation(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeMutation('CreateClientConversation', inputVars, inputOpts);
}
exports.createClientConversation = createClientConversation;

function updateClientConversation(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeMutation('UpdateClientConversation', inputVars, inputOpts);
}
exports.updateClientConversation = updateClientConversation;

function createClientAdmin(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeMutation('CreateClientAdmin', inputVars, inputOpts);
}
exports.createClientAdmin = createClientAdmin;

function updateClientAdmin(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeMutation('UpdateClientAdmin', inputVars, inputOpts);
}
exports.updateClientAdmin = updateClientAdmin;

function webhookCreateClientWithConfig(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeMutation('WebhookCreateClientWithConfig', inputVars, inputOpts);
}
exports.webhookCreateClientWithConfig = webhookCreateClientWithConfig;

function createClientAiBotConfigAdmin(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeMutation('CreateClientAiBotConfigAdmin', inputVars, inputOpts);
}
exports.createClientAiBotConfigAdmin = createClientAiBotConfigAdmin;

function updateClientAiBotConfigAdmin(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeMutation('UpdateClientAiBotConfigAdmin', inputVars, inputOpts);
}
exports.updateClientAiBotConfigAdmin = updateClientAiBotConfigAdmin;

function getClientByLinkedAuthUid(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeQuery('GetClientByLinkedAuthUid', inputVars, inputOpts);
}
exports.getClientByLinkedAuthUid = getClientByLinkedAuthUid;

function getClientById(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeQuery('GetClientById', inputVars, inputOpts);
}
exports.getClientById = getClientById;

function getClientAiBotConfigByAccessToken(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeQuery('GetClientAiBotConfigByAccessToken', inputVars, inputOpts);
}
exports.getClientAiBotConfigByAccessToken = getClientAiBotConfigByAccessToken;

function listClientInboundContactsByClient(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeQuery('ListClientInboundContactsByClient', inputVars, inputOpts);
}
exports.listClientInboundContactsByClient = listClientInboundContactsByClient;

function listClients(dcOrOptions, options) {
  const { dc: dcInstance, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrOptions, options, undefined);
  dcInstance.useGen(true);
  return dcInstance.executeQuery('ListClients', undefined, inputOpts);
}
exports.listClients = listClients;

function listPlatformInboundContacts(dcOrOptions, options) {
  const { dc: dcInstance, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrOptions, options, undefined);
  dcInstance.useGen(true);
  return dcInstance.executeQuery('ListPlatformInboundContacts', undefined, inputOpts);
}
exports.listPlatformInboundContacts = listPlatformInboundContacts;

function listPlatformOutboundContacts(dcOrOptions, options) {
  const { dc: dcInstance, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrOptions, options, undefined);
  dcInstance.useGen(true);
  return dcInstance.executeQuery('ListPlatformOutboundContacts', undefined, inputOpts);
}
exports.listPlatformOutboundContacts = listPlatformOutboundContacts;

function listPlatformOutboundOutreachEvents(dcOrOptions, options) {
  const { dc: dcInstance, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrOptions, options, undefined);
  dcInstance.useGen(true);
  return dcInstance.executeQuery('ListPlatformOutboundOutreachEvents', undefined, inputOpts);
}
exports.listPlatformOutboundOutreachEvents = listPlatformOutboundOutreachEvents;

function listPlatformAgentActivities(dcOrOptions, options) {
  const { dc: dcInstance, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrOptions, options, undefined);
  dcInstance.useGen(true);
  return dcInstance.executeQuery('ListPlatformAgentActivities', undefined, inputOpts);
}
exports.listPlatformAgentActivities = listPlatformAgentActivities;

function listClientAiBotPerformanceEvents(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeQuery('ListClientAiBotPerformanceEvents', inputVars, inputOpts);
}
exports.listClientAiBotPerformanceEvents = listClientAiBotPerformanceEvents;

function getClientConversation(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeQuery('GetClientConversation', inputVars, inputOpts);
}
exports.getClientConversation = getClientConversation;

function listClientConversationsByClientAndToken(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeQuery('ListClientConversationsByClientAndToken', inputVars, inputOpts);
}
exports.listClientConversationsByClientAndToken = listClientConversationsByClientAndToken;

function listClientConversationsByAccessToken(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeQuery('ListClientConversationsByAccessToken', inputVars, inputOpts);
}
exports.listClientConversationsByAccessToken = listClientConversationsByAccessToken;

function getClientByLinkedAuthUidAdmin(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeQuery('GetClientByLinkedAuthUidAdmin', inputVars, inputOpts);
}
exports.getClientByLinkedAuthUidAdmin = getClientByLinkedAuthUidAdmin;

function getClientByPaddleSubscriptionIdAdmin(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeQuery('GetClientByPaddleSubscriptionIdAdmin', inputVars, inputOpts);
}
exports.getClientByPaddleSubscriptionIdAdmin = getClientByPaddleSubscriptionIdAdmin;

