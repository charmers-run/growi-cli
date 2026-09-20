# PutRenameForPagesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pageId** | **string** | Object ID | [default to undefined]
**path** | **string** | Page path | [optional] [default to undefined]
**newPagePath** | **string** | new path | [optional] [default to undefined]
**isRenameRedirect** | **boolean** | whether redirect page | [optional] [default to undefined]
**updateMetadata** | **boolean** | whether update meta data | [optional] [default to undefined]
**isRecursively** | **boolean** | whether rename page with descendants | [optional] [default to undefined]

## Example

```typescript
import { PutRenameForPagesRequest } from './api';

const instance: PutRenameForPagesRequest = {
    pageId,
    path,
    newPagePath,
    isRenameRedirect,
    updateMetadata,
    isRecursively,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
