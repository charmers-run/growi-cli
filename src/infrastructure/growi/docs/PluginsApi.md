# PluginsApi

All URIs are relative to *https://demo.growi.org/_api/v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteRemoveByIdForPlugins**](#deleteremovebyidforplugins) | **DELETE** /plugins/{id}/remove | /plugins/{id}/remove|
|[**postPlugins**](#postplugins) | **POST** /plugins | /plugins|
|[**putActivateByIdForPlugins**](#putactivatebyidforplugins) | **PUT** /plugins/{id}/activate | /plugins/{id}/activate|

# **deleteRemoveByIdForPlugins**
> DeleteRemoveByIdForPlugins200Response deleteRemoveByIdForPlugins()

Remove a plugin

### Example

```typescript
import {
    PluginsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PluginsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.deleteRemoveByIdForPlugins(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**DeleteRemoveByIdForPlugins200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postPlugins**
> PostPlugins200Response postPlugins(postPluginsRequest)

Install a plugin

### Example

```typescript
import {
    PluginsApi,
    Configuration,
    PostPluginsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PluginsApi(configuration);

let postPluginsRequest: PostPluginsRequest; //

const { status, data } = await apiInstance.postPlugins(
    postPluginsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postPluginsRequest** | **PostPluginsRequest**|  | |


### Return type

**PostPlugins200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putActivateByIdForPlugins**
> PutActivateByIdForPlugins200Response putActivateByIdForPlugins()

Activate a plugin

### Example

```typescript
import {
    PluginsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PluginsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.putActivateByIdForPlugins(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**PutActivateByIdForPlugins200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

