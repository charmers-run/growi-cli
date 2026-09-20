# PutBookmarkFolderRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bookmarkFolderId** | **string** | Bookmark Folder ID | [optional] [default to undefined]
**name** | **string** | Name of the bookmark folder | [optional] [default to undefined]
**parent** | **string** | Parent folder ID | [optional] [default to undefined]
**childFolder** | [**Array&lt;BookmarkFolder&gt;**](BookmarkFolder.md) | Child folders | [optional] [default to undefined]

## Example

```typescript
import { PutBookmarkFolderRequest } from './api';

const instance: PutBookmarkFolderRequest = {
    bookmarkFolderId,
    name,
    parent,
    childFolder,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
