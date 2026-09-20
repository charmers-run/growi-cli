# ShareLinkManagementApi

All URIs are relative to *https://demo.growi.org/_api/v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteAllForShareLinks**](#deleteallforsharelinks) | **DELETE** /share-links/all | delete all share links|

# **deleteAllForShareLinks**
> DeleteAllForShareLinks200Response deleteAllForShareLinks()

delete all share links

### Example

```typescript
import {
    ShareLinkManagementApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ShareLinkManagementApi(configuration);

const { status, data } = await apiInstance.deleteAllForShareLinks();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**DeleteAllForShareLinks200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to remove all share links |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

