# ActivityApi

All URIs are relative to *https://demo.growi.org/_api/v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getActivity**](#getactivity) | **GET** /activity | /activity|
|[**getSuggestionsForActivity**](#getsuggestionsforactivity) | **GET** /activity/suggestions | /activity/suggestions|
|[**postListForActivity**](#postlistforactivity) | **POST** /activity/list | /activity/list|

# **getActivity**
> ActivityResponse getActivity()


### Example

```typescript
import {
    ActivityApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ActivityApi(configuration);

let limit: number; // (optional) (default to undefined)
let offset: number; // (optional) (default to undefined)
let searchFilter: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getActivity(
    limit,
    offset,
    searchFilter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] |  | (optional) defaults to undefined|
| **offset** | [**number**] |  | (optional) defaults to undefined|
| **searchFilter** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ActivityResponse**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [cookieAuth](../README.md#cookieAuth), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Activity fetched successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSuggestionsForActivity**
> getSuggestionsForActivity()


### Example

```typescript
import {
    ActivityApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ActivityApi(configuration);

let field: 'username'; // (optional) (default to undefined)
let q: string; // (optional) (default to undefined)
let limit: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.getSuggestionsForActivity(
    field,
    q,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **field** | [**&#39;username&#39;**]**Array<&#39;username&#39;>** |  | (optional) defaults to undefined|
| **q** | [**string**] |  | (optional) defaults to undefined|
| **limit** | [**number**] |  | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Suggestions fetched successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postListForActivity**
> ActivityResponse postListForActivity()

Same as `GET /activity` but takes limit / offset / searchFilter in the request body. The audit-log UI uses this so the searchFilter (which lists every selected action) never bloats the query string and hits a URL-length limit for large action-group configurations.

### Example

```typescript
import {
    ActivityApi,
    Configuration,
    PostListForActivityRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ActivityApi(configuration);

let postListForActivityRequest: PostListForActivityRequest; // (optional)

const { status, data } = await apiInstance.postListForActivity(
    postListForActivityRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postListForActivityRequest** | **PostListForActivityRequest**|  | |


### Return type

**ActivityResponse**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Activity fetched successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

