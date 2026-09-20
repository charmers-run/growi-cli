# BookmarkFolderBookmarksInnerPage

Pages that are bookmarked in the folder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **string** | Object ID | [optional] [default to undefined]
**__v** | **number** | DB record version | [optional] [default to undefined]
**commentCount** | **number** | count of comments | [optional] [default to undefined]
**createdAt** | **string** | date created at | [optional] [default to undefined]
**creator** | **string** | Creator user ID | [optional] [default to undefined]
**extended** | **object** | extend data | [optional] [default to undefined]
**grant** | **number** | Grant for page | [optional] [default to undefined]
**grantedUsers** | **Array&lt;string&gt;** | granted users | [optional] [default to undefined]
**lastUpdateUser** | [**User**](User.md) |  | [optional] [default to undefined]
**liker** | **Array&lt;string&gt;** | granted users | [optional] [default to undefined]
**path** | **string** | Page path | [optional] [default to undefined]
**revision** | **string** | page revision | [optional] [default to undefined]
**seenUsers** | **Array&lt;string&gt;** | granted users | [optional] [default to undefined]
**status** | **string** | status | [optional] [default to undefined]
**updatedAt** | **string** | date updated at | [optional] [default to undefined]
**id** | **string** | Page ID | [optional] [default to undefined]
**parent** | **string** | Parent page ID | [optional] [default to undefined]
**descendantCount** | **number** | Number of descendants | [optional] [default to undefined]
**isEmpty** | **boolean** | Whether the page is empty | [optional] [default to undefined]
**grantedGroups** | **Array&lt;string&gt;** | List of granted groups | [optional] [default to undefined]
**latestRevisionBodyLength** | **number** | Length of the latest revision body | [optional] [default to undefined]

## Example

```typescript
import { BookmarkFolderBookmarksInnerPage } from './api';

const instance: BookmarkFolderBookmarksInnerPage = {
    _id,
    __v,
    commentCount,
    createdAt,
    creator,
    extended,
    grant,
    grantedUsers,
    lastUpdateUser,
    liker,
    path,
    revision,
    seenUsers,
    status,
    updatedAt,
    id,
    parent,
    descendantCount,
    isEmpty,
    grantedGroups,
    latestRevisionBodyLength,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
