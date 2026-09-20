# AttachmentApi

All URIs are relative to *https://demo.growi.org/_api/v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getAttachmentById**](#getattachmentbyid) | **GET** /attachment/{id} | |
|[**getLimitForAttachment**](#getlimitforattachment) | **GET** /attachment/limit | /attachment/limit|
|[**getListForAttachment**](#getlistforattachment) | **GET** /attachment/list | |
|[**postAttachment**](#postattachment) | **POST** /attachment | /attachment|

# **getAttachmentById**
> GetAttachmentById200Response getAttachmentById()

Get attachment

### Example

```typescript
import {
    AttachmentApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AttachmentApi(configuration);

let id: string; //attachment id (default to undefined)

const { status, data } = await apiInstance.getAttachmentById(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | attachment id | defaults to undefined|


### Return type

**GetAttachmentById200Response**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Return attachment |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getLimitForAttachment**
> GetLimitForAttachment200Response getLimitForAttachment()

Get available capacity of uploaded file with GridFS

### Example

```typescript
import {
    AttachmentApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AttachmentApi(configuration);

let fileSize: number; // (default to undefined)

const { status, data } = await apiInstance.getLimitForAttachment(
    fileSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileSize** | [**number**] |  | defaults to undefined|


### Return type

**GetLimitForAttachment200Response**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to get available capacity of uploaded file with GridFS. |  -  |
|**403** | Forbidden - insufficient permissions |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getListForAttachment**
> AttachmentPaginateResult getListForAttachment()

Get attachment list

### Example

```typescript
import {
    AttachmentApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AttachmentApi(configuration);

let pageId: string; //page id (default to undefined)
let pageNumber: number; //page number (optional) (default to undefined)
let limit: number; //limit (optional) (default to undefined)

const { status, data } = await apiInstance.getListForAttachment(
    pageId,
    pageNumber,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pageId** | [**string**] | page id | defaults to undefined|
| **pageNumber** | [**number**] | page number | (optional) defaults to undefined|
| **limit** | [**number**] | limit | (optional) defaults to undefined|


### Return type

**AttachmentPaginateResult**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Return attachment list |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postAttachment**
> PostAttachment200Response postAttachment()

Add attachment to the page

### Example

```typescript
import {
    AttachmentApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AttachmentApi(configuration);

let pageId: string; // (optional) (default to undefined)
let file: File; //attachment data (optional) (default to undefined)

const { status, data } = await apiInstance.postAttachment(
    pageId,
    file
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pageId** | [**string**] |  | (optional) defaults to undefined|
| **file** | [**File**] | attachment data | (optional) defaults to undefined|


### Return type

**PostAttachment200Response**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to add attachment. |  -  |
|**403** | Forbidden - insufficient permissions |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

