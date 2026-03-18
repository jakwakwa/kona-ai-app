import { GetClientByLinkedAuthUidData, GetClientByLinkedAuthUidVariables, UpsertPlatformOwnerData, UpsertPlatformOwnerVariables } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useGetClientByLinkedAuthUid(vars: GetClientByLinkedAuthUidVariables, options?: useDataConnectQueryOptions<GetClientByLinkedAuthUidData>): UseDataConnectQueryResult<GetClientByLinkedAuthUidData, GetClientByLinkedAuthUidVariables>;
export function useGetClientByLinkedAuthUid(dc: DataConnect, vars: GetClientByLinkedAuthUidVariables, options?: useDataConnectQueryOptions<GetClientByLinkedAuthUidData>): UseDataConnectQueryResult<GetClientByLinkedAuthUidData, GetClientByLinkedAuthUidVariables>;

export function useUpsertPlatformOwner(options?: useDataConnectMutationOptions<UpsertPlatformOwnerData, FirebaseError, UpsertPlatformOwnerVariables | void>): UseDataConnectMutationResult<UpsertPlatformOwnerData, UpsertPlatformOwnerVariables>;
export function useUpsertPlatformOwner(dc: DataConnect, options?: useDataConnectMutationOptions<UpsertPlatformOwnerData, FirebaseError, UpsertPlatformOwnerVariables | void>): UseDataConnectMutationResult<UpsertPlatformOwnerData, UpsertPlatformOwnerVariables>;
