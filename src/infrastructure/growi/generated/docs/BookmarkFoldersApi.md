# BookmarkFoldersApi

All URIs are relative to *https://demo.growi.org/_api/v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteBookmarkFolderById**](#deletebookmarkfolderbyid) | **DELETE** /bookmark-folder/{id} | Delete bookmark folder|
|[**getListByUserIdForBookmarkFolder**](#getlistbyuseridforbookmarkfolder) | **GET** /bookmark-folder/list/{userId} | List bookmark folders of a user|
|[**postAddBookmarkToFolderForBookmarkFolder**](#postaddbookmarktofolderforbookmarkfolder) | **POST** /bookmark-folder/add-bookmark-to-folder | Update bookmark folder|
|[**postBookmarkFolder**](#postbookmarkfolder) | **POST** /bookmark-folder | Create bookmark folder|
|[**putBookmarkFolder**](#putbookmarkfolder) | **PUT** /bookmark-folder | Update bookmark folder|
|[**putUpdateBookmarkForBookmarkFolder**](#putupdatebookmarkforbookmarkfolder) | **PUT** /bookmark-folder/update-bookmark | Update bookmark in folder|

# **deleteBookmarkFolderById**
> DeleteBookmarkFolderById200Response deleteBookmarkFolderById()

Delete a bookmark folder and its children

### Example

```typescript
import {
    BookmarkFoldersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BookmarkFoldersApi(configuration);

let id: string; //Bookmark Folder ID (default to undefined)

const { status, data } = await apiInstance.deleteBookmarkFolderById(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Bookmark Folder ID | defaults to undefined|


### Return type

**DeleteBookmarkFolderById200Response**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Deleted successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getListByUserIdForBookmarkFolder**
> GetListByUserIdForBookmarkFolder200Response getListByUserIdForBookmarkFolder()

List bookmark folders of a user

### Example

```typescript
import {
    BookmarkFoldersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BookmarkFoldersApi(configuration);

let userId: string; //User ID (default to undefined)

const { status, data } = await apiInstance.getListByUserIdForBookmarkFolder(
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] | User ID | defaults to undefined|


### Return type

**GetListByUserIdForBookmarkFolder200Response**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Resources are available |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postAddBookmarkToFolderForBookmarkFolder**
> PutBookmarkFolder200Response postAddBookmarkToFolderForBookmarkFolder()

Update a bookmark folder

### Example

```typescript
import {
    BookmarkFoldersApi,
    Configuration,
    PostAddBookmarkToFolderForBookmarkFolderRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BookmarkFoldersApi(configuration);

let postAddBookmarkToFolderForBookmarkFolderRequest: PostAddBookmarkToFolderForBookmarkFolderRequest; // (optional)

const { status, data } = await apiInstance.postAddBookmarkToFolderForBookmarkFolder(
    postAddBookmarkToFolderForBookmarkFolderRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postAddBookmarkToFolderForBookmarkFolderRequest** | **PostAddBookmarkToFolderForBookmarkFolderRequest**|  | |


### Return type

**PutBookmarkFolder200Response**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Resources are available |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postBookmarkFolder**
> PutBookmarkFolder200Response postBookmarkFolder()

Create a new bookmark folder

### Example

```typescript
import {
    BookmarkFoldersApi,
    Configuration,
    PostBookmarkFolderRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BookmarkFoldersApi(configuration);

let postBookmarkFolderRequest: PostBookmarkFolderRequest; // (optional)

const { status, data } = await apiInstance.postBookmarkFolder(
    postBookmarkFolderRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postBookmarkFolderRequest** | **PostBookmarkFolderRequest**|  | |


### Return type

**PutBookmarkFolder200Response**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Resources are available |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putBookmarkFolder**
> PutBookmarkFolder200Response putBookmarkFolder()

Update a bookmark folder

### Example

```typescript
import {
    BookmarkFoldersApi,
    Configuration,
    PutBookmarkFolderRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BookmarkFoldersApi(configuration);

let putBookmarkFolderRequest: PutBookmarkFolderRequest; // (optional)

const { status, data } = await apiInstance.putBookmarkFolder(
    putBookmarkFolderRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putBookmarkFolderRequest** | **PutBookmarkFolderRequest**|  | |


### Return type

**PutBookmarkFolder200Response**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Resources are available |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putUpdateBookmarkForBookmarkFolder**
> PutBookmarkFolder200Response putUpdateBookmarkForBookmarkFolder()

Update a bookmark in a folder

### Example

```typescript
import {
    BookmarkFoldersApi,
    Configuration,
    PutUpdateBookmarkForBookmarkFolderRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BookmarkFoldersApi(configuration);

let putUpdateBookmarkForBookmarkFolderRequest: PutUpdateBookmarkForBookmarkFolderRequest; // (optional)

const { status, data } = await apiInstance.putUpdateBookmarkForBookmarkFolder(
    putUpdateBookmarkForBookmarkFolderRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putUpdateBookmarkForBookmarkFolderRequest** | **PutUpdateBookmarkForBookmarkFolderRequest**|  | |


### Return type

**PutBookmarkFolder200Response**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Resources are available |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

