# GlobalNotificationParams


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**notifyType** | **string** | What is type for notify | [optional] [default to undefined]
**toEmail** | **string** | email for notify | [optional] [default to undefined]
**slackChannels** | **string** | channels for notify | [optional] [default to undefined]
**triggerPath** | **string** | trigger path for notify | [optional] [default to undefined]
**triggerEvents** | **Array&lt;string&gt;** | trigger events for notify | [optional] [default to undefined]

## Example

```typescript
import { GlobalNotificationParams } from './api';

const instance: GlobalNotificationParams = {
    notifyType,
    toEmail,
    slackChannels,
    triggerPath,
    triggerEvents,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
