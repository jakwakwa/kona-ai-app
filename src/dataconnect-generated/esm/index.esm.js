import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'kona',
  service: 'jacobkotzee',
  location: 'europe-west1'
};

export const getClientByLinkedAuthUidRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetClientByLinkedAuthUid', inputVars);
}
getClientByLinkedAuthUidRef.operationName = 'GetClientByLinkedAuthUid';

export function getClientByLinkedAuthUid(dcOrVars, vars) {
  return executeQuery(getClientByLinkedAuthUidRef(dcOrVars, vars));
}

export const upsertPlatformOwnerRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpsertPlatformOwner', inputVars);
}
upsertPlatformOwnerRef.operationName = 'UpsertPlatformOwner';

export function upsertPlatformOwner(dcOrVars, vars) {
  return executeMutation(upsertPlatformOwnerRef(dcOrVars, vars));
}

