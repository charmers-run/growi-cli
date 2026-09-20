# BookmarkInfo

BookmarkInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sumOfBookmarks** | **number** | how many people bookmarked the page | [optional] [default to undefined]
**isBookmarked** | **boolean** | Whether the request user bookmarked (will be returned if the user is included in the request) | [optional] [default to undefined]
**pageId** | **string** | page ID | [optional] [default to undefined]
**bookmarkedUsers** | [**Array&lt;User&gt;**](User.md) |  | [optional] [default to undefined]

## Example

```typescript
import { BookmarkInfo } from './api';

const instance: BookmarkInfo = {
    sumOfBookmarks,
    isBookmarked,
    pageId,
    bookmarkedUsers,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
