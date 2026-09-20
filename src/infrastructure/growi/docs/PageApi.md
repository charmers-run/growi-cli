# PageApi

All URIs are relative to *https://demo.growi.org/_api/v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getApplicableGrantForPage**](#getapplicablegrantforpage) | **GET** /page/applicable-grant | Get applicable grant data|
|[**getExistForPage**](#getexistforpage) | **GET** /page/exist | Check if page exists|
|[**getExistPathsForPage**](#getexistpathsforpage) | **GET** /page/exist-paths | Get already exist paths|
|[**getExportByPageIdForPage**](#getexportbypageidforpage) | **GET** /page/export/{pageId} | |
|[**getGrantDataForPage**](#getgrantdataforpage) | **GET** /page/grant-data | Get page grant data|
|[**getInfoForPage**](#getinfoforpage) | **GET** /page/info | /page/info|
|[**getNonUserRelatedGroupsGrantedForPage**](#getnonuserrelatedgroupsgrantedforpage) | **GET** /page/non-user-related-groups-granted | Check if non-user related groups are granted page access|
|[**getPage**](#getpage) | **GET** /page | Get page|
|[**getSharedForPage**](#getsharedforpage) | **GET** /page/shared | Get page by share link|
|[**getYjsDataByPageId**](#getyjsdatabypageid) | **GET** /{pageId}/yjs-data | Get Yjs data|
|[**postPage**](#postpage) | **POST** /page | Create page|
|[**putContentWidthByPageId**](#putcontentwidthbypageid) | **PUT** /{pageId}/content-width | Update content width|
|[**putGrantByPageId**](#putgrantbypageid) | **PUT** /{pageId}/grant | Update page grant|
|[**putLikesForPage**](#putlikesforpage) | **PUT** /page/likes | Get page likes|
|[**putPage**](#putpage) | **PUT** /page | |
|[**putPublishByPageIdForPage**](#putpublishbypageidforpage) | **PUT** /page/{pageId}/publish | Publish page|
|[**putSubscribeForPage**](#putsubscribeforpage) | **PUT** /page/subscribe | Update subscription status|
|[**putSyncLatestRevisionBodyToYjsDraftByPageId**](#putsynclatestrevisionbodytoyjsdraftbypageid) | **PUT** /{pageId}/sync-latest-revision-body-to-yjs-draft | Sync latest revision body to Yjs draft|
|[**putUnpublishByPageIdForPage**](#putunpublishbypageidforpage) | **PUT** /page/{pageId}/unpublish | Unpublish page|

# **getApplicableGrantForPage**
> GetApplicableGrantForPage200Response getApplicableGrantForPage()

Retrieve applicable grant data for a specific page

### Example

```typescript
import {
    PageApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PageApi(configuration);

let pageId: string; //ID of the page (default to undefined)

const { status, data } = await apiInstance.getApplicableGrantForPage(
    pageId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pageId** | [**string**] | ID of the page | defaults to undefined|


### Return type

**GetApplicableGrantForPage200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully retrieved applicable grant data. |  -  |
|**400** | Bad request. Page is unreachable. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getExistForPage**
> GetExistForPage200Response getExistForPage()

Check if a page exists at the specified path

### Example

```typescript
import {
    PageApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PageApi(configuration);

let path: string; //The path to check for existence (default to undefined)

const { status, data } = await apiInstance.getExistForPage(
    path
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **path** | [**string**] | The path to check for existence | defaults to undefined|


### Return type

**GetExistForPage200Response**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully checked page existence. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getExistPathsForPage**
> GetExistPathsForPage200Response getExistPathsForPage()

Get already exist paths

### Example

```typescript
import {
    PageApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PageApi(configuration);

let fromPath: string; //old parent path (optional) (default to undefined)
let toPath: string; //new parent path (optional) (default to undefined)

const { status, data } = await apiInstance.getExistPathsForPage(
    fromPath,
    toPath
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fromPath** | [**string**] | old parent path | (optional) defaults to undefined|
| **toPath** | [**string**] | new parent path | (optional) defaults to undefined|


### Return type

**GetExistPathsForPage200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to retrieve pages. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getExportByPageIdForPage**
> getExportByPageIdForPage()

return page\'s markdown

### Example

```typescript
import {
    PageApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PageApi(configuration);

let pageId: string; //ID of the page (default to undefined)

const { status, data } = await apiInstance.getExportByPageIdForPage(
    pageId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pageId** | [**string**] | ID of the page | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Return page\&#39;s markdown |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getGrantDataForPage**
> GetGrantDataForPage200Response getGrantDataForPage()

Retrieve current page\'s grant data

### Example

```typescript
import {
    PageApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PageApi(configuration);

let pageId: string; //page id (optional) (default to undefined)

const { status, data } = await apiInstance.getGrantDataForPage(
    pageId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pageId** | [**string**] | page id | (optional) defaults to undefined|


### Return type

**GetGrantDataForPage200Response**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully retrieved current grant data. |  -  |
|**400** | Bad request. Page is unreachable. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getInfoForPage**
> PageInfoExt getInfoForPage()

Get summary informations for a page

### Example

```typescript
import {
    PageApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PageApi(configuration);

let pageId: string; //page id (default to undefined)
let shareLinkId: string; //share link id for shared page access (optional) (default to undefined)

const { status, data } = await apiInstance.getInfoForPage(
    pageId,
    shareLinkId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pageId** | [**string**] | page id | defaults to undefined|
| **shareLinkId** | [**string**] | share link id for shared page access | (optional) defaults to undefined|


### Return type

**PageInfoExt**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully retrieved current page info. |  -  |
|**403** | Page is forbidden. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getNonUserRelatedGroupsGrantedForPage**
> GetNonUserRelatedGroupsGrantedForPage200Response getNonUserRelatedGroupsGrantedForPage()

Check if non-user related groups are granted access to a specific page or its closest ancestor

### Example

```typescript
import {
    PageApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PageApi(configuration);

let path: string; //Path of the page (default to undefined)

const { status, data } = await apiInstance.getNonUserRelatedGroupsGrantedForPage(
    path
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **path** | [**string**] | Path of the page | defaults to undefined|


### Return type

**GetNonUserRelatedGroupsGrantedForPage200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully checked non-user related groups access. |  -  |
|**403** | Forbidden. Cannot access page or ancestor. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPage**
> GetPageResponse getPage()

Get page by pagePath or pageId. Returns a single page or multiple pages based on parameters.

### Example

```typescript
import {
    PageApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PageApi(configuration);

let pageId: string; //page id (optional) (default to undefined)
let path: string; //page path (optional) (default to undefined)
let findAll: boolean; //If set, returns all pages matching the path (returns pages array instead of single page) (optional) (default to undefined)
let revisionId: string; //Specific revision ID to retrieve (optional) (default to undefined)
let includeEmpty: boolean; //Include empty pages in results when using findAll (optional) (default to undefined)

const { status, data } = await apiInstance.getPage(
    pageId,
    path,
    findAll,
    revisionId,
    includeEmpty
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pageId** | [**string**] | page id | (optional) defaults to undefined|
| **path** | [**string**] | page path | (optional) defaults to undefined|
| **findAll** | [**boolean**] | If set, returns all pages matching the path (returns pages array instead of single page) | (optional) defaults to undefined|
| **revisionId** | [**string**] | Specific revision ID to retrieve | (optional) defaults to undefined|
| **includeEmpty** | [**boolean**] | Include empty pages in results when using findAll | (optional) defaults to undefined|


### Return type

**GetPageResponse**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Page data |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSharedForPage**
> GetPageResponse getSharedForPage()

Get page data via a valid share link (public endpoint, no authentication required)

### Example

```typescript
import {
    PageApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PageApi(configuration);

let shareLinkId: string; //share link ID (default to undefined)
let pageId: string; //page ID (default to undefined)

const { status, data } = await apiInstance.getSharedForPage(
    shareLinkId,
    pageId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **shareLinkId** | [**string**] | share link ID | defaults to undefined|
| **pageId** | [**string**] | page ID | defaults to undefined|


### Return type

**GetPageResponse**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully retrieved page via share link |  -  |
|**400** | Invalid or missing parameters |  -  |
|**403** | Link sharing disabled, link expired, or forbidden page |  -  |
|**404** | Share link not found or page not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getYjsDataByPageId**
> GetYjsDataByPageId200Response getYjsDataByPageId()

Retrieve Yjs data for a specific page

### Example

```typescript
import {
    PageApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PageApi(configuration);

let pageId: string; //ID of the page (default to undefined)

const { status, data } = await apiInstance.getYjsDataByPageId(
    pageId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pageId** | [**string**] | ID of the page | defaults to undefined|


### Return type

**GetYjsDataByPageId200Response**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully retrieved Yjs data. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postPage**
> PostPage201Response postPage()

Create page

### Example

```typescript
import {
    PageApi,
    Configuration,
    PostPageRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PageApi(configuration);

let postPageRequest: PostPageRequest; // (optional)

const { status, data } = await apiInstance.postPage(
    postPageRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postPageRequest** | **PostPageRequest**|  | |


### Return type

**PostPage201Response**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Succeeded to create page. |  -  |
|**409** | page path is already existed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putContentWidthByPageId**
> PutContentWidthByPageId200Response putContentWidthByPageId()

Update the content width setting for a specific page

### Example

```typescript
import {
    PageApi,
    Configuration,
    PutContentWidthByPageIdRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PageApi(configuration);

let pageId: string; //ID of the page (default to undefined)
let putContentWidthByPageIdRequest: PutContentWidthByPageIdRequest; // (optional)

const { status, data } = await apiInstance.putContentWidthByPageId(
    pageId,
    putContentWidthByPageIdRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putContentWidthByPageIdRequest** | **PutContentWidthByPageIdRequest**|  | |
| **pageId** | [**string**] | ID of the page | defaults to undefined|


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
|**200** | Successfully updated content width. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putGrantByPageId**
> Page putGrantByPageId()

Update the grant of a specific page

### Example

```typescript
import {
    PageApi,
    Configuration,
    PutGrantByPageIdRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PageApi(configuration);

let pageId: string; //ID of the page (default to undefined)
let putGrantByPageIdRequest: PutGrantByPageIdRequest; // (optional)

const { status, data } = await apiInstance.putGrantByPageId(
    pageId,
    putGrantByPageIdRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putGrantByPageIdRequest** | **PutGrantByPageIdRequest**|  | |
| **pageId** | [**string**] | ID of the page | defaults to undefined|


### Return type

**Page**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully updated page grant. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putLikesForPage**
> Page putLikesForPage()

Update liked status

### Example

```typescript
import {
    PageApi,
    Configuration,
    LikeParams
} from './api';

const configuration = new Configuration();
const apiInstance = new PageApi(configuration);

let likeParams: LikeParams; // (optional)

const { status, data } = await apiInstance.putLikesForPage(
    likeParams
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **likeParams** | **LikeParams**|  | |


### Return type

**Page**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to update liked status. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putPage**
> PutPage200Response putPage()

Update page

### Example

```typescript
import {
    PageApi,
    Configuration,
    PutPageRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PageApi(configuration);

let putPageRequest: PutPageRequest; // (optional)

const { status, data } = await apiInstance.putPage(
    putPageRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putPageRequest** | **PutPageRequest**|  | |


### Return type

**PutPage200Response**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to update page. |  -  |
|**403** | Forbidden - insufficient permissions |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putPublishByPageIdForPage**
> Page putPublishByPageIdForPage()

Publish a specific page

### Example

```typescript
import {
    PageApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PageApi(configuration);

let pageId: string; //ID of the page (default to undefined)

const { status, data } = await apiInstance.putPublishByPageIdForPage(
    pageId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pageId** | [**string**] | ID of the page | defaults to undefined|


### Return type

**Page**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully published the page. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putSubscribeForPage**
> Page putSubscribeForPage()

Update subscription status

### Example

```typescript
import {
    PageApi,
    Configuration,
    PutSubscribeForPageRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PageApi(configuration);

let putSubscribeForPageRequest: PutSubscribeForPageRequest; // (optional)

const { status, data } = await apiInstance.putSubscribeForPage(
    putSubscribeForPageRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putSubscribeForPageRequest** | **PutSubscribeForPageRequest**|  | |


### Return type

**Page**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to update subscription status. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putSyncLatestRevisionBodyToYjsDraftByPageId**
> PutSyncLatestRevisionBodyToYjsDraftByPageId200Response putSyncLatestRevisionBodyToYjsDraftByPageId()

Sync the latest revision body to the Yjs draft for a specific page

### Example

```typescript
import {
    PageApi,
    Configuration,
    PutSyncLatestRevisionBodyToYjsDraftByPageIdRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PageApi(configuration);

let pageId: string; //ID of the page (default to undefined)
let putSyncLatestRevisionBodyToYjsDraftByPageIdRequest: PutSyncLatestRevisionBodyToYjsDraftByPageIdRequest; // (optional)

const { status, data } = await apiInstance.putSyncLatestRevisionBodyToYjsDraftByPageId(
    pageId,
    putSyncLatestRevisionBodyToYjsDraftByPageIdRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putSyncLatestRevisionBodyToYjsDraftByPageIdRequest** | **PutSyncLatestRevisionBodyToYjsDraftByPageIdRequest**|  | |
| **pageId** | [**string**] | ID of the page | defaults to undefined|


### Return type

**PutSyncLatestRevisionBodyToYjsDraftByPageId200Response**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully synced the latest revision body to Yjs draft. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putUnpublishByPageIdForPage**
> Page putUnpublishByPageIdForPage()

Unpublish a specific page

### Example

```typescript
import {
    PageApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PageApi(configuration);

let pageId: string; //ID of the page (default to undefined)

const { status, data } = await apiInstance.putUnpublishByPageIdForPage(
    pageId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pageId** | [**string**] | ID of the page | defaults to undefined|


### Return type

**Page**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully unpublished the page. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

