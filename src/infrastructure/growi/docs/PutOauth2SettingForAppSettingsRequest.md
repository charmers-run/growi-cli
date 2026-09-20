# PutOauth2SettingForAppSettingsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fromAddress** | **string** | e-mail address used as from address | [optional] [default to undefined]
**transmissionMethod** | **string** | transmission method | [optional] [default to undefined]
**oauth2ClientId** | **string** | OAuth 2.0 Client ID | [optional] [default to undefined]
**oauth2ClientSecret** | **string** | OAuth 2.0 Client Secret | [optional] [default to undefined]
**oauth2RefreshToken** | **string** | OAuth 2.0 Refresh Token | [optional] [default to undefined]
**oauth2User** | **string** | Email address of the authorized account | [optional] [default to undefined]

## Example

```typescript
import { PutOauth2SettingForAppSettingsRequest } from './api';

const instance: PutOauth2SettingForAppSettingsRequest = {
    fromAddress,
    transmissionMethod,
    oauth2ClientId,
    oauth2ClientSecret,
    oauth2RefreshToken,
    oauth2User,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
