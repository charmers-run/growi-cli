# InstallApi

All URIs are relative to *https://demo.growi.org/_api/v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**postInstaller**](#postinstaller) | **POST** /installer | /installer|

# **postInstaller**
> PostInstaller200Response postInstaller(postInstallerRequest)

Install GROWI

### Example

```typescript
import {
    InstallApi,
    Configuration,
    PostInstallerRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new InstallApi(configuration);

let postInstallerRequest: PostInstallerRequest; //

const { status, data } = await apiInstance.postInstaller(
    postInstallerRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postInstallerRequest** | **PostInstallerRequest**|  | |


### Return type

**PostInstaller200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | import settings params |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

