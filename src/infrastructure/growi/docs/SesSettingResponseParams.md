# SesSettingResponseParams

SesSettingParams

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**isMailerSetup** | **boolean** | is mailer setup, or not | [optional] [default to undefined]
**from** | **string** | e-mail address used as from address of mail which sent from GROWI app | [optional] [default to undefined]
**transmissionMethod** | **string** | transmission method | [optional] [default to undefined]
**sesAccessKeyId** | **string** | accesskey id for authentification of AWS | [optional] [default to undefined]
**sesSecretAccessKey** | **string** | secret key for authentification of AWS | [optional] [default to undefined]

## Example

```typescript
import { SesSettingResponseParams } from './api';

const instance: SesSettingResponseParams = {
    isMailerSetup,
    from,
    transmissionMethod,
    sesAccessKeyId,
    sesSecretAccessKey,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
