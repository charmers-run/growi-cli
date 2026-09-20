# PagesApi

All URIs are relative to *https://demo.growi.org/_api/v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteEmptyTrashForPages**](#deleteemptytrashforpages) | **DELETE** /pages/empty-trash | |
|[**getListForPages**](#getlistforpages) | **GET** /pages/list | |
|[**getRecentForPages**](#getrecentforpages) | **GET** /pages/recent | |
|[**getSubordinatedListForPages**](#getsubordinatedlistforpages) | **GET** /pages/subordinated-list | |
|[**getV5MigrationStatusForPages**](#getv5migrationstatusforpages) | **GET** /pages/v5-migration-status | |
|[**postConvertPagesByPathForPages**](#postconvertpagesbypathforpages) | **POST** /pages/convert-pages-by-path | |
|[**postDeleteForPages**](#postdeleteforpages) | **POST** /pages/delete | |
|[**postDuplicateForPages**](#postduplicateforpages) | **POST** /pages/duplicate | |
|[**postLegacyPagesMigrationForPages**](#postlegacypagesmigrationforpages) | **POST** /pages/legacy-pages-migration | |
|[**postResumeRenameForPages**](#postresumerenameforpages) | **POST** /pages/resume-rename | |
|[**putRenameForPages**](#putrenameforpages) | **PUT** /pages/rename | |

# **deleteEmptyTrashForPages**
> DeleteEmptyTrashForPages200Response deleteEmptyTrashForPages()

empty trash

### Example

```typescript
import {
    PagesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PagesApi(configuration);

const { status, data } = await apiInstance.deleteEmptyTrashForPages();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**DeleteEmptyTrashForPages200Response**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to remove all trash pages |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getListForPages**
> GetListForPages200Response getListForPages()

Get list of pages

### Example

```typescript
import {
    PagesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PagesApi(configuration);

let path: string; //Path to search (optional) (default to undefined)
let limit: number; //Limit of acquisitions (optional) (default to undefined)
let page: number; //Page number (optional) (default to undefined)

const { status, data } = await apiInstance.getListForPages(
    path,
    limit,
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **path** | [**string**] | Path to search | (optional) defaults to undefined|
| **limit** | [**number**] | Limit of acquisitions | (optional) defaults to undefined|
| **page** | [**number**] | Page number | (optional) defaults to undefined|


### Return type

**GetListForPages200Response**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to retrieve pages. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRecentForPages**
> getRecentForPages()

Get recently updated pages

### Example

```typescript
import {
    PagesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PagesApi(configuration);

let limit: number; //Limit of acquisitions (optional) (default to undefined)
let offset: number; //Offset of acquisitions (optional) (default to undefined)
let includeWipPage: string; //Whether to include WIP pages (optional) (default to undefined)

const { status, data } = await apiInstance.getRecentForPages(
    limit,
    offset,
    includeWipPage
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | Limit of acquisitions | (optional) defaults to undefined|
| **offset** | [**number**] | Offset of acquisitions | (optional) defaults to undefined|
| **includeWipPage** | [**string**] | Whether to include WIP pages | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Return pages recently updated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSubordinatedListForPages**
> GetSubordinatedListForPages200Response getSubordinatedListForPages()

Get subordinated pages

### Example

```typescript
import {
    PagesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PagesApi(configuration);

let path: string; //Parent path of search (optional) (default to undefined)
let limit: number; //Limit of acquisitions (optional) (default to undefined)

const { status, data } = await apiInstance.getSubordinatedListForPages(
    path,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **path** | [**string**] | Parent path of search | (optional) defaults to undefined|
| **limit** | [**number**] | Limit of acquisitions | (optional) defaults to undefined|


### Return type

**GetSubordinatedListForPages200Response**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to retrieve pages. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getV5MigrationStatusForPages**
> GetV5MigrationStatusForPages200Response getV5MigrationStatusForPages()

Get V5 migration status

### Example

```typescript
import {
    PagesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PagesApi(configuration);

const { status, data } = await apiInstance.getV5MigrationStatusForPages();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetV5MigrationStatusForPages200Response**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Return V5 migration status |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postConvertPagesByPathForPages**
> object postConvertPagesByPathForPages()

Convert pages by path

### Example

```typescript
import {
    PagesApi,
    Configuration,
    PostConvertPagesByPathForPagesRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PagesApi(configuration);

let postConvertPagesByPathForPagesRequest: PostConvertPagesByPathForPagesRequest; // (optional)

const { status, data } = await apiInstance.postConvertPagesByPathForPages(
    postConvertPagesByPathForPagesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postConvertPagesByPathForPagesRequest** | **PostConvertPagesByPathForPagesRequest**|  | |


### Return type

**object**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to convert pages. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postDeleteForPages**
> PostDeleteForPages200Response postDeleteForPages()

Delete pages

### Example

```typescript
import {
    PagesApi,
    Configuration,
    PostDeleteForPagesRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PagesApi(configuration);

let postDeleteForPagesRequest: PostDeleteForPagesRequest; // (optional)

const { status, data } = await apiInstance.postDeleteForPages(
    postDeleteForPagesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postDeleteForPagesRequest** | **PostDeleteForPagesRequest**|  | |


### Return type

**PostDeleteForPages200Response**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to delete pages. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postDuplicateForPages**
> PutContentWidthByPageId200Response postDuplicateForPages()

Duplicate page

### Example

```typescript
import {
    PagesApi,
    Configuration,
    PostDuplicateForPagesRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PagesApi(configuration);

let postDuplicateForPagesRequest: PostDuplicateForPagesRequest; // (optional)

const { status, data } = await apiInstance.postDuplicateForPages(
    postDuplicateForPagesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postDuplicateForPagesRequest** | **PostDuplicateForPagesRequest**|  | |


### Return type

**PutContentWidthByPageId200Response**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to duplicate page. |  -  |
|**403** | Forbidden to duplicate page. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postLegacyPagesMigrationForPages**
> object postLegacyPagesMigrationForPages()

Migrate legacy pages

### Example

```typescript
import {
    PagesApi,
    Configuration,
    PostLegacyPagesMigrationForPagesRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PagesApi(configuration);

let postLegacyPagesMigrationForPagesRequest: PostLegacyPagesMigrationForPagesRequest; // (optional)

const { status, data } = await apiInstance.postLegacyPagesMigrationForPages(
    postLegacyPagesMigrationForPagesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postLegacyPagesMigrationForPagesRequest** | **PostLegacyPagesMigrationForPagesRequest**|  | |


### Return type

**object**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to migrate legacy pages. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postResumeRenameForPages**
> object postResumeRenameForPages()

Resume rename page operation

### Example

```typescript
import {
    PagesApi,
    Configuration,
    PostResumeRenameForPagesRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PagesApi(configuration);

let postResumeRenameForPagesRequest: PostResumeRenameForPagesRequest; // (optional)

const { status, data } = await apiInstance.postResumeRenameForPages(
    postResumeRenameForPagesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postResumeRenameForPagesRequest** | **PostResumeRenameForPagesRequest**|  | |


### Return type

**object**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to resume rename page operation. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putRenameForPages**
> PutContentWidthByPageId200Response putRenameForPages()

Rename page

### Example

```typescript
import {
    PagesApi,
    Configuration,
    PutRenameForPagesRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PagesApi(configuration);

let putRenameForPagesRequest: PutRenameForPagesRequest; // (optional)

const { status, data } = await apiInstance.putRenameForPages(
    putRenameForPagesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putRenameForPagesRequest** | **PutRenameForPagesRequest**|  | |


### Return type

**PutContentWidthByPageId200Response**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to rename page. |  -  |
|**401** | page id is invalid |  -  |
|**409** | page path is already existed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

