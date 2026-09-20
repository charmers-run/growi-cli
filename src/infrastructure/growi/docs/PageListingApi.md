# PageListingApi

All URIs are relative to *https://demo.growi.org/_api/v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getChildrenForPageListing**](#getchildrenforpagelisting) | **GET** /page-listing/children | /page-listing/children|
|[**getInfoForPageListing**](#getinfoforpagelisting) | **GET** /page-listing/info | /page-listing/info|
|[**getItemForPageListing**](#getitemforpagelisting) | **GET** /page-listing/item | /page-listing/item|
|[**getRootForPageListing**](#getrootforpagelisting) | **GET** /page-listing/root | /page-listing/root|

# **getChildrenForPageListing**
> GetChildrenForPageListing200Response getChildrenForPageListing()

Get the children of a page

### Example

```typescript
import {
    PageListingApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PageListingApi(configuration);

let id: string; // (optional) (default to undefined)
let path: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getChildrenForPageListing(
    id,
    path
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | (optional) defaults to undefined|
| **path** | [**string**] |  | (optional) defaults to undefined|


### Return type

**GetChildrenForPageListing200Response**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Get the children of a page |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getInfoForPageListing**
> { [key: string]: PageInfoExt; } getInfoForPageListing()

Get summary information of pages

### Example

```typescript
import {
    PageListingApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PageListingApi(configuration);

let pageIds: Array<string>; //Array of page IDs to retrieve information for (One of pageIds or path is required) (optional) (default to undefined)
let path: string; //Path of the page to retrieve information for (One of pageIds or path is required) (optional) (default to undefined)
let attachBookmarkCount: boolean; // (optional) (default to undefined)
let attachShortBody: boolean; // (optional) (default to undefined)

const { status, data } = await apiInstance.getInfoForPageListing(
    pageIds,
    path,
    attachBookmarkCount,
    attachShortBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pageIds** | **Array&lt;string&gt;** | Array of page IDs to retrieve information for (One of pageIds or path is required) | (optional) defaults to undefined|
| **path** | [**string**] | Path of the page to retrieve information for (One of pageIds or path is required) | (optional) defaults to undefined|
| **attachBookmarkCount** | [**boolean**] |  | (optional) defaults to undefined|
| **attachShortBody** | [**boolean**] |  | (optional) defaults to undefined|


### Return type

**{ [key: string]: PageInfoExt; }**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Get the information of a page |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getItemForPageListing**
> GetItemForPageListing200Response getItemForPageListing()

Get a single page item for tree display

### Example

```typescript
import {
    PageListingApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PageListingApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getItemForPageListing(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**GetItemForPageListing200Response**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Page item data |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRootForPageListing**
> GetRootForPageListing200Response getRootForPageListing()

Get the root page

### Example

```typescript
import {
    PageListingApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PageListingApi(configuration);

const { status, data } = await apiInstance.getRootForPageListing();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetRootForPageListing200Response**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

