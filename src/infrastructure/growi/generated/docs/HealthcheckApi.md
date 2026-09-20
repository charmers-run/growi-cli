# HealthcheckApi

All URIs are relative to *https://demo.growi.org/_api/v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getHealthcheck**](#gethealthcheck) | **GET** /healthcheck | /healthcheck|

# **getHealthcheck**
> GetHealthcheck200Response getHealthcheck()

Check whether the server is healthy or not

### Example

```typescript
import {
    HealthcheckApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new HealthcheckApi(configuration);

let checkServices: Array<'mongo' | 'search'>; //The list of services to check health (optional) (default to undefined)
let strictly: boolean; //Check services and responds 503 if either of these is unhealthy (optional) (default to undefined)

const { status, data } = await apiInstance.getHealthcheck(
    checkServices,
    strictly
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **checkServices** | **Array<&#39;mongo&#39; &#124; &#39;search&#39;>** | The list of services to check health | (optional) defaults to undefined|
| **strictly** | [**boolean**] | Check services and responds 503 if either of these is unhealthy | (optional) defaults to undefined|


### Return type

**GetHealthcheck200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Healthy |  -  |
|**503** | errors occurs when using checkServicesStrictly |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

