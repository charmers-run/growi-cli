# PutUserGroupsByIdRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | name of the userGroup trying to be updated | [optional] [default to undefined]
**description** | **string** | description of the userGroup trying to be updated | [optional] [default to undefined]
**parentId** | **string** | parentId of the userGroup trying to be updated | [optional] [default to undefined]
**forceUpdateParents** | **boolean** | whether to update parent groups | [optional] [default to undefined]

## Example

```typescript
import { PutUserGroupsByIdRequest } from './api';

const instance: PutUserGroupsByIdRequest = {
    name,
    description,
    parentId,
    forceUpdateParents,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
