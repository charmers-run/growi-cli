# UserNotification


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | **string** | slack channel name without \&#39;#\&#39; | [optional] [default to undefined]
**pathPattern** | **string** | path name of wiki | [optional] [default to undefined]
**createdAt** | **string** | created date | [optional] [default to undefined]
**creator** | [**User**](User.md) |  | [optional] [default to undefined]
**patternPrefix** | **string** | path pattern prefix | [optional] [default to undefined]
**patternPrefix2** | **string** | path pattern prefix2 | [optional] [default to undefined]
**provider** | **string** | provider | [optional] [default to undefined]
**updatedAt** | **string** | updated date | [optional] [default to undefined]
**__v** | **number** | version | [optional] [default to undefined]
**_id** | **string** | id | [optional] [default to undefined]

## Example

```typescript
import { UserNotification } from './api';

const instance: UserNotification = {
    channel,
    pathPattern,
    createdAt,
    creator,
    patternPrefix,
    patternPrefix2,
    provider,
    updatedAt,
    __v,
    _id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
