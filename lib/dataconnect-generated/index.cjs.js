const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'kona',
  service: 'jacobkotzee',
  location: 'europe-west1'
};
exports.connectorConfig = connectorConfig;

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
