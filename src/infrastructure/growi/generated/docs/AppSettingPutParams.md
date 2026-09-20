# AppSettingPutParams

AppSettingPutParams

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **string** | title of the site | [optional] [default to undefined]
**confidential** | **string** | confidential show on page header | [optional] [default to undefined]
**globalLang** | **string** | global language | [optional] [default to undefined]
**isEmailPublishedForNewUser** | **boolean** | is email published for new user, or not | [optional] [default to undefined]
**fileUpload** | **boolean** | is file upload enabled, or not | [optional] [default to undefined]

## Example

```typescript
import { AppSettingPutParams } from './api';

const instance: AppSettingPutParams = {
    title,
    confidential,
    globalLang,
    isEmailPublishedForNewUser,
    fileUpload,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
