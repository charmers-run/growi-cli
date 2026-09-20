# LocalSetting


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**useOnlyEnvVarsForSomeOptions** | **boolean** | use only env vars for some options | [optional] [default to undefined]
**isPasswordResetEnabled** | **boolean** | enable password reset | [optional] [default to undefined]
**isEmailAuthenticationEnabled** | **boolean** | enable email authentication | [optional] [default to undefined]
**isLocalEnabled** | **boolean** | local setting mode | [optional] [default to undefined]
**registrationMode** | **string** | type of registrationMode | [optional] [default to undefined]
**registrationWhitelist** | **Array&lt;string&gt;** | array of regsitrationList | [optional] [default to undefined]

## Example

```typescript
import { LocalSetting } from './api';

const instance: LocalSetting = {
    useOnlyEnvVarsForSomeOptions,
    isPasswordResetEnabled,
    isEmailAuthenticationEnabled,
    isLocalEnabled,
    registrationMode,
    registrationWhitelist,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
