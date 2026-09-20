# StatisticsApi

All URIs are relative to *https://demo.growi.org/_api/v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getUserForStatistics**](#getuserforstatistics) | **GET** /statistics/user | /statistics/user|

# **getUserForStatistics**
> StatisticsUserResponse getUserForStatistics()

Get statistics for user

### Example

```typescript
import {
    StatisticsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new StatisticsApi(configuration);

const { status, data } = await apiInstance.getUserForStatistics();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**StatisticsUserResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Statistics for user |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

