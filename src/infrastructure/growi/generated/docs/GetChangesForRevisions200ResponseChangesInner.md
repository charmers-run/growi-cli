# GetChangesForRevisions200ResponseChangesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pageId** | **string** |  | [optional] [default to undefined]
**path** | **string** | null when accessible is false | [optional] [default to undefined]
**fromRevisionId** | **string** | null when the run starts from page creation | [optional] [default to undefined]
**toRevisionId** | **string** |  | [optional] [default to undefined]
**authorId** | **string** |  | [optional] [default to undefined]
**latestUpdatedAt** | **string** |  | [optional] [default to undefined]
**accessible** | **boolean** |  | [optional] [default to undefined]
**deleted** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { GetChangesForRevisions200ResponseChangesInner } from './api';

const instance: GetChangesForRevisions200ResponseChangesInner = {
    pageId,
    path,
    fromRevisionId,
    toRevisionId,
    authorId,
    latestUpdatedAt,
    accessible,
    deleted,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
