# GetSecuritySetting200ResponseSecurityParams

security params

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**generalSetting** | [**GeneralSetting**](GeneralSetting.md) |  | [optional] [default to undefined]
**shareLinkSetting** | [**ShareLinkSetting**](ShareLinkSetting.md) |  | [optional] [default to undefined]
**localSetting** | [**LocalSetting**](LocalSetting.md) |  | [optional] [default to undefined]
**generalAuth** | [**GeneralAuthSetting**](GeneralAuthSetting.md) |  | [optional] [default to undefined]
**ldapAuth** | [**LdapAuthSetting**](LdapAuthSetting.md) |  | [optional] [default to undefined]
**samlAuth** | [**SamlAuthSetting**](SamlAuthSetting.md) |  | [optional] [default to undefined]
**oidcAuth** | [**OidcAuthSetting**](OidcAuthSetting.md) |  | [optional] [default to undefined]
**googleOAuth** | [**GoogleOAuthSetting**](GoogleOAuthSetting.md) |  | [optional] [default to undefined]
**githubOAuth** | [**GitHubOAuthSetting**](GitHubOAuthSetting.md) |  | [optional] [default to undefined]

## Example

```typescript
import { GetSecuritySetting200ResponseSecurityParams } from './api';

const instance: GetSecuritySetting200ResponseSecurityParams = {
    generalSetting,
    shareLinkSetting,
    localSetting,
    generalAuth,
    ldapAuth,
    samlAuth,
    oidcAuth,
    googleOAuth,
    githubOAuth,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
