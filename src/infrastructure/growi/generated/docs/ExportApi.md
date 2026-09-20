# ExportApi

All URIs are relative to *https://demo.growi.org/_api/v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteExportByFileName**](#deleteexportbyfilename) | **DELETE** /export/{fileName} | /export/{fileName}|
|[**getStatusForExport**](#getstatusforexport) | **GET** /export/status | /export/status|
|[**postExport**](#postexport) | **POST** /export | /export|

# **deleteExportByFileName**
> DeleteExportByFileName200Response deleteExportByFileName()

delete the file

### Example

```typescript
import {
    ExportApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ExportApi(configuration);

let fileName: string; //the file name of zip file (default to undefined)

const { status, data } = await apiInstance.deleteExportByFileName(
    fileName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileName** | [**string**] | the file name of zip file | defaults to undefined|


### Return type

**DeleteExportByFileName200Response**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | the file is deleted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getStatusForExport**
> GetStatusForExport200Response getStatusForExport()

get properties of stored zip files for export

### Example

```typescript
import {
    ExportApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ExportApi(configuration);

const { status, data } = await apiInstance.getStatusForExport();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetStatusForExport200Response**

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

# **postExport**
> PostExport200Response postExport()

generate zipped jsons for collections

### Example

```typescript
import {
    ExportApi,
    Configuration,
    PostExportRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ExportApi(configuration);

let postExportRequest: PostExportRequest; // (optional)

const { status, data } = await apiInstance.postExport(
    postExportRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postExportRequest** | **PostExportRequest**|  | |


### Return type

**PostExport200Response**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | a zip file is generated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

