# LdapAuthSetting


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**serverUrl** | **string** | server url for ldap | [optional] [default to undefined]
**isUserBind** | **boolean** | enable user bind | [optional] [default to undefined]
**ldapBindDN** | **string** | the query used to bind with the directory service | [optional] [default to undefined]
**ldapBindDNPassword** | **string** | the password that is entered in the login page will be used to bind | [optional] [default to undefined]
**ldapSearchFilter** | **string** | the query used to locate the authenticated user | [optional] [default to undefined]
**ldapAttrMapUsername** | **string** | specification of mappings for username when creating new users | [optional] [default to undefined]
**isSameUsernameTreatedAsIdenticalUser** | **boolean** | local account automatically linked the user name matched | [optional] [default to undefined]
**ldapAttrMapMail** | **string** | specification of mappings for mail address when creating new users | [optional] [default to undefined]
**ldapAttrMapName** | **string** | Specification of mappings for full name address when creating new users | [optional] [default to undefined]
**ldapGroupSearchBase** | **string** | the base DN from which to search for groups. | [optional] [default to undefined]
**ldapGroupSearchFilter** | **string** | the query used to filter for groups | [optional] [default to undefined]
**ldapGroupDnProperty** | **string** | The property of user object to use in dn interpolation of Group Search Filter | [optional] [default to undefined]

## Example

```typescript
import { LdapAuthSetting } from './api';

const instance: LdapAuthSetting = {
    serverUrl,
    isUserBind,
    ldapBindDN,
    ldapBindDNPassword,
    ldapSearchFilter,
    ldapAttrMapUsername,
    isSameUsernameTreatedAsIdenticalUser,
    ldapAttrMapMail,
    ldapAttrMapName,
    ldapGroupSearchBase,
    ldapGroupSearchFilter,
    ldapGroupDnProperty,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
