# GlobalNotification


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **string** | id | [optional] [default to undefined]
**isEnabled** | **boolean** | is notification enabled | [optional] [default to undefined]
**triggerEvents** | **Array&lt;string&gt;** | trigger events for notify | [optional] [default to undefined]
**__t** | **string** | type of notification | [optional] [default to undefined]
**slackChannels** | **string** | channels for notify | [optional] [default to undefined]
**triggerPath** | **string** | trigger path for notify | [optional] [default to undefined]
**__v** | **number** | version | [optional] [default to undefined]

## Example

```typescript
import { GlobalNotification } from './api';

const instance: GlobalNotification = {
    _id,
    isEnabled,
    triggerEvents,
    __t,
    slackChannels,
    triggerPath,
    __v,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
