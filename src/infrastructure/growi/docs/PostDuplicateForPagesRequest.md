# PostDuplicateForPagesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pageId** | **string** | Object ID | [default to undefined]
**pageNameInput** | **string** | Page path | [optional] [default to undefined]
**isRecursively** | **boolean** | whether duplicate page with descendants | [optional] [default to undefined]
**onlyDuplicateUserRelatedResources** | **boolean** | whether duplicate only user related resources | [optional] [default to undefined]

## Example

```typescript
import { PostDuplicateForPagesRequest } from './api';

const instance: PostDuplicateForPagesRequest = {
    pageId,
    pageNameInput,
    isRecursively,
    onlyDuplicateUserRelatedResources,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
