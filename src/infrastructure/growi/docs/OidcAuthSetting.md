# OidcAuthSetting


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**oidcProviderName** | **string** | provider name for oidc | [optional] [default to undefined]
**oidcIssuerHost** | **string** | issuer host for oidc | [optional] [default to undefined]
**oidcAuthorizationEndpoint** | **string** | authorization endpoint for oidc | [optional] [default to undefined]
**oidcTokenEndpoint** | **string** | token endpoint for oidc | [optional] [default to undefined]
**oidcRevocationEndpoint** | **string** | revocation endpoint for oidc | [optional] [default to undefined]
**oidcIntrospectionEndpoint** | **string** | introspection endpoint for oidc | [optional] [default to undefined]
**oidcUserInfoEndpoint** | **string** | userinfo endpoint for oidc | [optional] [default to undefined]
**oidcEndSessionEndpoint** | **string** | end session endpoint for oidc | [optional] [default to undefined]
**oidcRegistrationEndpoint** | **string** | registration endpoint for oidc | [optional] [default to undefined]
**oidcJWKSUri** | **string** | JSON Web Key Set URI for oidc | [optional] [default to undefined]
**oidcClientId** | **string** | client id for oidc | [optional] [default to undefined]
**oidcClientSecret** | **string** | client secret for oidc | [optional] [default to undefined]
**oidcAttrMapId** | **string** | attr map id for oidc | [optional] [default to undefined]
**oidcAttrMapUserName** | **string** | attr map username for oidc | [optional] [default to undefined]
**oidcAttrMapName** | **string** | attr map name for oidc | [optional] [default to undefined]
**oidcAttrMapMail** | **string** | attr map mail for oidc | [optional] [default to undefined]
**isSameUsernameTreatedAsIdenticalUser** | **boolean** | local account automatically linked the user name matched | [optional] [default to undefined]
**isSameEmailTreatedAsIdenticalUser** | **boolean** | local account automatically linked the email matched | [optional] [default to undefined]

## Example

```typescript
import { OidcAuthSetting } from './api';

const instance: OidcAuthSetting = {
    oidcProviderName,
    oidcIssuerHost,
    oidcAuthorizationEndpoint,
    oidcTokenEndpoint,
    oidcRevocationEndpoint,
    oidcIntrospectionEndpoint,
    oidcUserInfoEndpoint,
    oidcEndSessionEndpoint,
    oidcRegistrationEndpoint,
    oidcJWKSUri,
    oidcClientId,
    oidcClientSecret,
    oidcAttrMapId,
    oidcAttrMapUserName,
    oidcAttrMapName,
    oidcAttrMapMail,
    isSameUsernameTreatedAsIdenticalUser,
    isSameEmailTreatedAsIdenticalUser,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
