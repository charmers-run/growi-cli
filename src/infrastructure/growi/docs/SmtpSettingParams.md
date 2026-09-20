# SmtpSettingParams

SmtpSettingParams

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**smtpHost** | **string** | host name of client\&#39;s smtp server | [optional] [default to undefined]
**smtpPort** | **string** | port of client\&#39;s smtp server | [optional] [default to undefined]
**smtpUser** | **string** | user name of client\&#39;s smtp server | [optional] [default to undefined]
**smtpPassword** | **string** | password of client\&#39;s smtp server | [optional] [default to undefined]
**fromAddress** | **string** | e-mail address | [optional] [default to undefined]

## Example

```typescript
import { SmtpSettingParams } from './api';

const instance: SmtpSettingParams = {
    smtpHost,
    smtpPort,
    smtpUser,
    smtpPassword,
    fromAddress,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
