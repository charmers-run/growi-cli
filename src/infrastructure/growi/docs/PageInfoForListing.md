# PageInfoForListing

Page information for listing (extends IPageInfoForEntity with revision short body)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**isV5Compatible** | **boolean** | Whether the page is compatible with v5 | [optional] [default to undefined]
**isEmpty** | **boolean** | Whether the page is empty | [optional] [default to undefined]
**isMovable** | **boolean** | Whether the page is movable | [optional] [default to undefined]
**isDeletable** | **boolean** | Whether the page is deletable | [optional] [default to undefined]
**isAbleToDeleteCompletely** | **boolean** | Whether the page is able to delete completely | [optional] [default to undefined]
**isRevertible** | **boolean** | Whether the page is revertible | [optional] [default to undefined]
**bookmarkCount** | **number** | Number of bookmarks | [optional] [default to undefined]
**sumOfLikers** | **number** | Number of users who have liked the page | [optional] [default to undefined]
**likerIds** | **Array&lt;string&gt;** | Ids of users who have liked the page | [optional] [default to undefined]
**sumOfSeenUsers** | **number** | Number of users who have seen the page | [optional] [default to undefined]
**seenUserIds** | **Array&lt;string&gt;** | Ids of users who have seen the page | [optional] [default to undefined]
**contentAge** | **number** | Content age | [optional] [default to undefined]
**descendantCount** | **number** | Number of descendant pages | [optional] [default to undefined]
**commentCount** | **number** | Number of comments | [optional] [default to undefined]
**revisionShortBody** | **string** | Short body of the revision | [optional] [default to undefined]

## Example

```typescript
import { PageInfoForListing } from './api';

const instance: PageInfoForListing = {
    isV5Compatible,
    isEmpty,
    isMovable,
    isDeletable,
    isAbleToDeleteCompletely,
    isRevertible,
    bookmarkCount,
    sumOfLikers,
    likerIds,
    sumOfSeenUsers,
    seenUserIds,
    contentAge,
    descendantCount,
    commentCount,
    revisionShortBody,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
