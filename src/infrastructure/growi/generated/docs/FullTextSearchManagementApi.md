# FullTextSearchManagementApi

All URIs are relative to *https://demo.growi.org/_api/v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getAuditlogIndicesForSearch**](#getauditlogindicesforsearch) | **GET** /search/auditlog-indices | Get auditlog indices status|
|[**getIndicesForSearch**](#getindicesforsearch) | **GET** /search/indices | /search/indices|
|[**postConnectionForSearch**](#postconnectionforsearch) | **POST** /search/connection | /search/connection|
|[**putAuditlogIndicesForSearch**](#putauditlogindicesforsearch) | **PUT** /search/auditlog-indices | /search/auditlog-indices|
|[**putIndicesForSearch**](#putindicesforsearch) | **PUT** /search/indices | /search/indices|

# **getAuditlogIndicesForSearch**
> GetAuditlogIndicesForSearch200Response getAuditlogIndicesForSearch()


### Example

```typescript
import {
    FullTextSearchManagementApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FullTextSearchManagementApi(configuration);

const { status, data } = await apiInstance.getAuditlogIndicesForSearch();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetAuditlogIndicesForSearch200Response**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Status of auditlog indices |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getIndicesForSearch**
> GetIndicesForSearch200Response getIndicesForSearch()

Get current status of indices

### Example

```typescript
import {
    FullTextSearchManagementApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FullTextSearchManagementApi(configuration);

const { status, data } = await apiInstance.getIndicesForSearch();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetIndicesForSearch200Response**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Status of indices |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postConnectionForSearch**
> postConnectionForSearch()

Reconnect to Elasticsearch

### Example

```typescript
import {
    FullTextSearchManagementApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FullTextSearchManagementApi(configuration);

const { status, data } = await apiInstance.postConnectionForSearch();
```

### Parameters
This endpoint does not have any parameters.


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
|**200** | Successfully connected |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putAuditlogIndicesForSearch**
> PutIndicesForSearch200Response putAuditlogIndicesForSearch(putAuditlogIndicesForSearchRequest)

Operate auditlog indices

### Example

```typescript
import {
    FullTextSearchManagementApi,
    Configuration,
    PutAuditlogIndicesForSearchRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FullTextSearchManagementApi(configuration);

let putAuditlogIndicesForSearchRequest: PutAuditlogIndicesForSearchRequest; //

const { status, data } = await apiInstance.putAuditlogIndicesForSearch(
    putAuditlogIndicesForSearchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putAuditlogIndicesForSearchRequest** | **PutAuditlogIndicesForSearchRequest**|  | |


### Return type

**PutIndicesForSearch200Response**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Return 200 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putIndicesForSearch**
> PutIndicesForSearch200Response putIndicesForSearch(putIndicesForSearchRequest)

Operate indices

### Example

```typescript
import {
    FullTextSearchManagementApi,
    Configuration,
    PutIndicesForSearchRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FullTextSearchManagementApi(configuration);

let putIndicesForSearchRequest: PutIndicesForSearchRequest; //

const { status, data } = await apiInstance.putIndicesForSearch(
    putIndicesForSearchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putIndicesForSearchRequest** | **PutIndicesForSearchRequest**|  | |


### Return type

**PutIndicesForSearch200Response**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Return 200 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

