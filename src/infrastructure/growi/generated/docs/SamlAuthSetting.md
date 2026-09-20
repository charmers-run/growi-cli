# SamlAuthSetting


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**missingMandatoryConfigKeys** | **Array&lt;string&gt;** | array of missing mandatory config keys | [optional] [default to undefined]
**useOnlyEnvVarsForSomeOptions** | **boolean** | use only env vars for some options | [optional] [default to undefined]
**samlEntryPoint** | **string** | entry point for saml | [optional] [default to undefined]
**samlIssuer** | **string** | issuer for saml | [optional] [default to undefined]
**samlEnvVarIssuer** | **string** | issuer for saml | [optional] [default to undefined]
**samlCert** | **string** | certificate for saml | [optional] [default to undefined]
**samlEnvVarCert** | **string** | certificate for saml | [optional] [default to undefined]
**samlAttrMapId** | **string** | attribute mapping id for saml | [optional] [default to undefined]
**samlAttrMapUserName** | **string** | attribute mapping user name for saml | [optional] [default to undefined]
**samlAttrMapMail** | **string** | attribute mapping mail for saml | [optional] [default to undefined]
**samlEnvVarAttrMapId** | **string** | attribute mapping id for saml | [optional] [default to undefined]
**samlEnvVarAttrMapUserName** | **string** | attribute mapping user name for saml | [optional] [default to undefined]
**samlEnvVarAttrMapMail** | **string** | attribute mapping mail for saml | [optional] [default to undefined]
**samlAttrMapFirstName** | **string** | attribute mapping first name for saml | [optional] [default to undefined]
**samlAttrMapLastName** | **string** | attribute mapping last name for saml | [optional] [default to undefined]
**samlEnvVarAttrMapFirstName** | **string** | attribute mapping first name for saml | [optional] [default to undefined]
**samlEnvVarAttrMapLastName** | **string** | attribute mapping last name for saml | [optional] [default to undefined]
**isSameUsernameTreatedAsIdenticalUser** | **boolean** | local account automatically linked the user name matched | [optional] [default to undefined]
**isSameEmailTreatedAsIdenticalUser** | **boolean** | local account automatically linked the email matched | [optional] [default to undefined]
**samlABLCRule** | **string** | ABLCRule for saml | [optional] [default to undefined]
**samlEnvVarABLCRule** | **string** | ABLCRule for saml | [optional] [default to undefined]

## Example

```typescript
import { SamlAuthSetting } from './api';

const instance: SamlAuthSetting = {
    missingMandatoryConfigKeys,
    useOnlyEnvVarsForSomeOptions,
    samlEntryPoint,
    samlIssuer,
    samlEnvVarIssuer,
    samlCert,
    samlEnvVarCert,
    samlAttrMapId,
    samlAttrMapUserName,
    samlAttrMapMail,
    samlEnvVarAttrMapId,
    samlEnvVarAttrMapUserName,
    samlEnvVarAttrMapMail,
    samlAttrMapFirstName,
    samlAttrMapLastName,
    samlEnvVarAttrMapFirstName,
    samlEnvVarAttrMapLastName,
    isSameUsernameTreatedAsIdenticalUser,
    isSameEmailTreatedAsIdenticalUser,
    samlABLCRule,
    samlEnvVarABLCRule,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
