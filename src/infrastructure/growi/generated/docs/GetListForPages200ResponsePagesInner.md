# GetListForPages200ResponsePagesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **string** | Object ID | [optional] [default to undefined]
**__v** | **number** | DB record version | [optional] [default to undefined]
**commentCount** | **number** | count of comments | [optional] [default to undefined]
**createdAt** | **string** | date created at | [optional] [default to undefined]
**creator** | [**User**](User.md) |  | [optional] [default to undefined]
**extended** | **object** | extend data | [optional] [default to undefined]
**grant** | **number** | Grant for page | [optional] [default to undefined]
**grantedUsers** | **Array&lt;string&gt;** | granted users | [optional] [default to undefined]
**lastUpdateUser** | [**User**](User.md) |  | [optional] [default to undefined]
**liker** | **Array&lt;string&gt;** | granted users | [optional] [default to undefined]
**path** | **string** | Page path | [optional] [default to undefined]
**revision** | **string** | page revision | [optional] [default to undefined]
**seenUsers** | **Array&lt;string&gt;** | granted users | [optional] [default to undefined]
**status** | **string** | status | [optional] [default to undefined]
**updatedAt** | **string** | date updated at | [optional] [default to undefined]

## Example

```typescript
import { GetListForPages200ResponsePagesInner } from './api';

const instance: GetListForPages200ResponsePagesInner = {
    _id,
    __v,
    commentCount,
    createdAt,
    creator,
    extended,
    grant,
    grantedUsers,
    lastUpdateUser,
    liker,
    path,
    revision,
    seenUsers,
    status,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
