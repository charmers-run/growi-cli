# GetSyncSettingsForExternalUserGroupsLdap200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ldapGroupSearchBase** | **string** |  | [optional] [default to undefined]
**ldapGroupMembershipAttribute** | **string** |  | [optional] [default to undefined]
**ldapGroupMembershipAttributeType** | **string** |  | [optional] [default to undefined]
**ldapGroupChildGroupAttribute** | **string** |  | [optional] [default to undefined]
**autoGenerateUserOnLdapGroupSync** | **boolean** |  | [optional] [default to undefined]
**preserveDeletedLdapGroups** | **boolean** |  | [optional] [default to undefined]
**ldapGroupNameAttribute** | **string** |  | [optional] [default to undefined]
**ldapGroupDescriptionAttribute** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { GetSyncSettingsForExternalUserGroupsLdap200Response } from './api';

const instance: GetSyncSettingsForExternalUserGroupsLdap200Response = {
    ldapGroupSearchBase,
    ldapGroupMembershipAttribute,
    ldapGroupMembershipAttributeType,
    ldapGroupChildGroupAttribute,
    autoGenerateUserOnLdapGroupSync,
    preserveDeletedLdapGroups,
    ldapGroupNameAttribute,
    ldapGroupDescriptionAttribute,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
