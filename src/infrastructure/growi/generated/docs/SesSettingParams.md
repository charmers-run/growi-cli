# SesSettingParams

SesSettingParams

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**from** | **string** | e-mail address used as from address of mail which sent from GROWI app | [optional] [default to undefined]
**transmissionMethod** | **string** | transmission method | [optional] [default to undefined]
**sesAccessKeyId** | **string** | accesskey id for authentification of AWS | [optional] [default to undefined]
**sesSecretAccessKey** | **string** | secret key for authentification of AWS | [optional] [default to undefined]

## Example

```typescript
import { SesSettingParams } from './api';

const instance: SesSettingParams = {
    from,
    transmissionMethod,
    sesAccessKeyId,
    sesSecretAccessKey,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
