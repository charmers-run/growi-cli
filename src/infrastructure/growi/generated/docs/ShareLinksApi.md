# ShareLinksApi

All URIs are relative to *https://demo.growi.org/_api/v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteShareLinks**](#deletesharelinks) | **DELETE** /share-links/ | delete all share links related one page|
|[**deleteShareLinksById**](#deletesharelinksbyid) | **DELETE** /share-links/{id} | |
|[**getShareLinks**](#getsharelinks) | **GET** /share-links/ | |
|[**postShareLinks**](#postsharelinks) | **POST** /share-links/ | |

# **deleteShareLinks**
> ShareLinkSimple deleteShareLinks()

delete all share links related one page

### Example

```typescript
import {
    ShareLinksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ShareLinksApi(configuration);

let relatedPage: string; //page id of share link (default to undefined)

const { status, data } = await apiInstance.deleteShareLinks(
    relatedPage
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **relatedPage** | [**string**] | page id of share link | defaults to undefined|


### Return type

**ShareLinkSimple**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to delete o all share links related one page |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteShareLinksById**
> deleteShareLinksById()

delete one share link related one page

### Example

```typescript
import {
    ShareLinksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ShareLinksApi(configuration);

let id: string; //id of share link (default to undefined)

const { status, data } = await apiInstance.deleteShareLinksById(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | id of share link | defaults to undefined|


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
|**200** | Succeeded to delete one share link |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getShareLinks**
> GetShareLinks200Response getShareLinks()

get share links

### Example

```typescript
import {
    ShareLinksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ShareLinksApi(configuration);

let relatedPage: string; //page id of share link (default to undefined)

const { status, data } = await apiInstance.getShareLinks(
    relatedPage
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **relatedPage** | [**string**] | page id of share link | defaults to undefined|


### Return type

**GetShareLinks200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to get share links |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postShareLinks**
> ShareLinkSimple postShareLinks()

Create new share link

### Example

```typescript
import {
    ShareLinksApi,
    Configuration,
    PostShareLinksRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ShareLinksApi(configuration);

let postShareLinksRequest: PostShareLinksRequest; // (optional)

const { status, data } = await apiInstance.postShareLinks(
    postShareLinksRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postShareLinksRequest** | **PostShareLinksRequest**|  | |


### Return type

**ShareLinkSimple**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to create one share link |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

