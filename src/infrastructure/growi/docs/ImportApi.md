# ImportApi

All URIs are relative to *https://demo.growi.org/_api/v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteAllForImport**](#deleteallforimport) | **DELETE** /import/all | /import/all|
|[**getStatusForImport**](#getstatusforimport) | **GET** /import/status | /import/status|
|[**postImport**](#postimport) | **POST** /import | /import|
|[**postUploadForImport**](#postuploadforimport) | **POST** /import/upload | /import/upload|

# **deleteAllForImport**
> deleteAllForImport()

Delete all zip files

### Example

```typescript
import {
    ImportApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ImportApi(configuration);

const { status, data } = await apiInstance.deleteAllForImport();
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
|**200** | all files are deleted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getStatusForImport**
> GetStatusForImport200Response getStatusForImport()

Get properties of stored zip files for import

### Example

```typescript
import {
    ImportApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ImportApi(configuration);

const { status, data } = await apiInstance.getStatusForImport();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetStatusForImport200Response**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | the zip file statuses |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postImport**
> postImport(postImportRequest)

import a collection from a zipped json

### Example

```typescript
import {
    ImportApi,
    Configuration,
    PostImportRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ImportApi(configuration);

let postImportRequest: PostImportRequest; //

const { status, data } = await apiInstance.postImport(
    postImportRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postImportRequest** | **PostImportRequest**|  | |


### Return type

void (empty response body)

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Import process has requested |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postUploadForImport**
> FileImportResponse postUploadForImport()

upload a zip file

### Example

```typescript
import {
    ImportApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ImportApi(configuration);

let file: File; // (optional) (default to undefined)

const { status, data } = await apiInstance.postUploadForImport(
    file
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **file** | [**File**] |  | (optional) defaults to undefined|


### Return type

**FileImportResponse**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | the file is uploaded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

