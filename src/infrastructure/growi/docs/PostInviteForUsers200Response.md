# PostInviteForUsers200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdUserList** | [**User**](User.md) |  | [optional] [default to undefined]
**existingEmailList** | **Array&lt;string&gt;** | Users email that already exists | [optional] [default to undefined]
**failedEmailList** | [**PostInviteForUsers200ResponseFailedEmailList**](PostInviteForUsers200ResponseFailedEmailList.md) |  | [optional] [default to undefined]

## Example

```typescript
import { PostInviteForUsers200Response } from './api';

const instance: PostInviteForUsers200Response = {
    createdUserList,
    existingEmailList,
    failedEmailList,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
