# PostDeleteForPagesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pageIdToRevisionIdMap** | **object** | Map of page IDs to revision IDs | [optional] [default to undefined]
**isCompletely** | **boolean** | Whether to delete pages completely | [optional] [default to undefined]
**isRecursively** | **boolean** | Whether to delete pages recursively | [optional] [default to undefined]
**isAnyoneWithTheLink** | **boolean** | Whether the page is restricted to anyone with the link | [optional] [default to undefined]

## Example

```typescript
import { PostDeleteForPagesRequest } from './api';

const instance: PostDeleteForPagesRequest = {
    pageIdToRevisionIdMap,
    isCompletely,
    isRecursively,
    isAnyoneWithTheLink,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
