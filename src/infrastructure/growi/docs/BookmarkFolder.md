# BookmarkFolder

Bookmark Folder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **string** | Bookmark Folder ID | [optional] [default to undefined]
**__v** | **number** | Version of the bookmark folder | [optional] [default to undefined]
**name** | **string** | Name of the bookmark folder | [optional] [default to undefined]
**owner** | **string** | Owner user ID of the bookmark folder | [optional] [default to undefined]
**bookmarks** | [**Array&lt;BookmarkFolderBookmarksInner&gt;**](BookmarkFolderBookmarksInner.md) |  | [optional] [default to undefined]
**childFolder** | [**Array&lt;BookmarkFolder&gt;**](BookmarkFolder.md) |  | [optional] [default to undefined]

## Example

```typescript
import { BookmarkFolder } from './api';

const instance: BookmarkFolder = {
    _id,
    __v,
    name,
    owner,
    bookmarks,
    childFolder,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
