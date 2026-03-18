const { validateAdminArgs } = require('firebase-admin/data-connect');

const connectorConfig = {
  connector: 'kona',
  serviceId: 'jacobkotzee',
  location: 'europe-west1'
};
exports.connectorConfig = connectorConfig;

function getClientByLinkedAuthUid(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeQuery('GetClientByLinkedAuthUid', inputVars, inputOpts);
}
exports.getClientByLinkedAuthUid = getClientByLinkedAuthUid;

function upsertPlatformOwner(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, false);
  dcInstance.useGen(true);
  return dcInstance.executeMutation('UpsertPlatformOwner', inputVars, inputOpts);
}
exports.upsertPlatformOwner = upsertPlatformOwner;

