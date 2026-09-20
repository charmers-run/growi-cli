# AdminHomeApi

All URIs are relative to *https://demo.growi.org/_api/v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getAdminHome**](#getadminhome) | **GET** /admin-home/ | /admin-home|

# **getAdminHome**
> GetAdminHome200Response getAdminHome()

Get adminHome parameters

### Example

```typescript
import {
    AdminHomeApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminHomeApi(configuration);

const { status, data } = await apiInstance.getAdminHome();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetAdminHome200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | params of adminHome |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

