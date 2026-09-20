# InAppNotificationDocument


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **string** | In app notification document ID | [optional] [default to undefined]
**action** | **string** | Action performed on the in app notification document | [optional] [default to undefined]
**snapshot** | **string** | Snapshot details in JSON format | [optional] [default to undefined]
**target** | [**Page**](Page.md) |  | [optional] [default to undefined]
**user** | [**User**](User.md) |  | [optional] [default to undefined]
**createdAt** | **string** | Creation timestamp | [optional] [default to undefined]
**status** | **string** | Status of the in app notification document | [optional] [default to undefined]
**targetModel** | **string** | Model of the target | [optional] [default to undefined]
**id** | **string** | In app notification document ID | [optional] [default to undefined]
**actionUsers** | [**Array&lt;User&gt;**](User.md) |  | [optional] [default to undefined]

## Example

```typescript
import { InAppNotificationDocument } from './api';

const instance: InAppNotificationDocument = {
    _id,
    action,
    snapshot,
    target,
    user,
    createdAt,
    status,
    targetModel,
    id,
    actionUsers,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
