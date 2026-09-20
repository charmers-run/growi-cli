# PageForTreeItem

Page

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **string** | Object ID | [optional] [default to undefined]
**path** | **string** | Page path | [optional] [default to undefined]
**parent** | **string** | Page path | [optional] [default to undefined]
**grant** | **number** | Grant for page | [optional] [default to undefined]
**lastUpdateUser** | [**User**](User.md) |  | [optional] [default to undefined]
**descendantCount** | **number** |  | [optional] [default to undefined]
**isEmpty** | **boolean** |  | [optional] [default to undefined]
**wip** | **boolean** |  | [optional] [default to undefined]
**createdAt** | **string** | date created at | [optional] [default to undefined]
**updatedAt** | **string** | date updated at | [optional] [default to undefined]

## Example

```typescript
import { PageForTreeItem } from './api';

const instance: PageForTreeItem = {
    _id,
    path,
    parent,
    grant,
    lastUpdateUser,
    descendantCount,
    isEmpty,
    wip,
    createdAt,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
