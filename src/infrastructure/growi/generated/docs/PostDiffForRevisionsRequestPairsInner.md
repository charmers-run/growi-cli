# PostDiffForRevisionsRequestPairsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pageId** | **string** | MongoDB ObjectId of the target page | [default to undefined]
**toRevisionId** | **string** | MongoDB ObjectId of the \&quot;to\&quot; revision | [default to undefined]
**fromRevisionId** | **string** | MongoDB ObjectId of the \&quot;from\&quot; revision, or null for page-creation baseline | [optional] [default to undefined]

## Example

```typescript
import { PostDiffForRevisionsRequestPairsInner } from './api';

const instance: PostDiffForRevisionsRequestPairsInner = {
    pageId,
    toRevisionId,
    fromRevisionId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
