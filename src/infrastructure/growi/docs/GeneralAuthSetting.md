# GeneralAuthSetting


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**isLocalEnabled** | **boolean** | local setting mode | [optional] [default to undefined]
**isLdapEnabled** | **boolean** | ldap setting mode | [optional] [default to undefined]
**isSamlEnabled** | **boolean** | saml setting mode | [optional] [default to undefined]
**isOidcEnabled** | **boolean** | oidc setting mode | [optional] [default to undefined]
**isGoogleEnabled** | **boolean** | google setting mode | [optional] [default to undefined]
**isGitHubEnabled** | **boolean** | github setting mode | [optional] [default to undefined]

## Example

```typescript
import { GeneralAuthSetting } from './api';

const instance: GeneralAuthSetting = {
    isLocalEnabled,
    isLdapEnabled,
    isSamlEnabled,
    isOidcEnabled,
    isGoogleEnabled,
    isGitHubEnabled,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
