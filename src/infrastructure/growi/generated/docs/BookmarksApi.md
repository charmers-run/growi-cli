# BookmarksApi

All URIs are relative to *https://demo.growi.org/_api/v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getBookmarksByUserId**](#getbookmarksbyuserid) | **GET** /bookmarks/{userId} | /bookmarks/{userId}|
|[**getInfoForBookmarks**](#getinfoforbookmarks) | **GET** /bookmarks/info | /bookmarks/info|
|[**putBookmarks**](#putbookmarks) | **PUT** /bookmarks | /bookmarks|

# **getBookmarksByUserId**
> Bookmarks getBookmarksByUserId()

Get my bookmarked status

### Example

```typescript
import {
    BookmarksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BookmarksApi(configuration);

let userId: string; //user id (default to undefined)

const { status, data } = await apiInstance.getBookmarksByUserId(
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] | user id | defaults to undefined|


### Return type

**Bookmarks**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to get my bookmarked status. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getInfoForBookmarks**
> BookmarkInfo getInfoForBookmarks()

Get bookmarked info

### Example

```typescript
import {
    BookmarksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BookmarksApi(configuration);

let pageId: string; //page id (optional) (default to undefined)

const { status, data } = await apiInstance.getInfoForBookmarks(
    pageId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pageId** | [**string**] | page id | (optional) defaults to undefined|


### Return type

**BookmarkInfo**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to get bookmark info. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putBookmarks**
> PutBookmarks200Response putBookmarks()

Update bookmarked status

### Example

```typescript
import {
    BookmarksApi,
    Configuration,
    BookmarkParams
} from './api';

const configuration = new Configuration();
const apiInstance = new BookmarksApi(configuration);

let bookmarkParams: BookmarkParams; // (optional)

const { status, data } = await apiInstance.putBookmarks(
    bookmarkParams
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bookmarkParams** | **BookmarkParams**|  | |


### Return type

**PutBookmarks200Response**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to update bookmarked status. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

