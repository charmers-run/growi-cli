# NotificationParams


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**isSlackbotConfigured** | **boolean** | status of slack integration | [optional] [default to undefined]
**isSlackLegacyConfigured** | **boolean** | status of slack legacy integration | [optional] [default to undefined]
**currentBotType** | **string** | current bot type | [optional] [default to undefined]
**userNotifications** | [**Array&lt;UserNotification&gt;**](UserNotification.md) |  | [optional] [default to undefined]
**isNotificationForOwnerPageEnabled** | **boolean** | Whether to notify on owner page | [optional] [default to undefined]
**isNotificationForGroupPageEnabled** | **boolean** | Whether to notify on group page | [optional] [default to undefined]
**globalNotifications** | [**Array&lt;GlobalNotificationParams&gt;**](GlobalNotificationParams.md) | global notifications | [optional] [default to undefined]

## Example

```typescript
import { NotificationParams } from './api';

const instance: NotificationParams = {
    isSlackbotConfigured,
    isSlackLegacyConfigured,
    currentBotType,
    userNotifications,
    isNotificationForOwnerPageEnabled,
    isNotificationForGroupPageEnabled,
    globalNotifications,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
