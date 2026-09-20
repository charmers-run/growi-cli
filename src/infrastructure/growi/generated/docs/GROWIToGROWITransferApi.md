# GROWIToGROWITransferApi

All URIs are relative to *https://demo.growi.org/_api/v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getFilesForG2gTransfer**](#getfilesforg2gtransfer) | **GET** /g2g-transfer/files | /g2g-transfer/files|
|[**getGrowiInfoForG2gTransfer**](#getgrowiinfoforg2gtransfer) | **GET** /g2g-transfer/growi-info | /g2g-transfer/growi-info|
|[**postAttachmentForG2gTransfer**](#postattachmentforg2gtransfer) | **POST** /g2g-transfer/attachment | /g2g-transfer/attachment|
|[**postG2gTransfer**](#postg2gtransfer) | **POST** /g2g-transfer | /g2g-transfer|
|[**postGenerateKeyForG2gTransfer**](#postgeneratekeyforg2gtransfer) | **POST** /g2g-transfer/generate-key | /g2g-transfer/generate-key|
|[**postTransferForG2gTransfer**](#posttransferforg2gtransfer) | **POST** /g2g-transfer/transfer | /g2g-transfer/transfer|

# **getFilesForG2gTransfer**
> GetFilesForG2gTransfer200Response getFilesForG2gTransfer()


### Example

```typescript
import {
    GROWIToGROWITransferApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GROWIToGROWITransferApi(configuration);

const { status, data } = await apiInstance.getFilesForG2gTransfer();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetFilesForG2gTransfer200Response**

### Authorization

[transferHeaderAuth](../README.md#transferHeaderAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully got the list of files |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getGrowiInfoForG2gTransfer**
> GetGrowiInfoForG2gTransfer200Response getGrowiInfoForG2gTransfer()


### Example

```typescript
import {
    GROWIToGROWITransferApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GROWIToGROWITransferApi(configuration);

const { status, data } = await apiInstance.getGrowiInfoForG2gTransfer();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetGrowiInfoForG2gTransfer200Response**

### Authorization

[transferHeaderAuth](../README.md#transferHeaderAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully got GROWI information |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postAttachmentForG2gTransfer**
> PostG2gTransfer200Response postAttachmentForG2gTransfer()


### Example

```typescript
import {
    GROWIToGROWITransferApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GROWIToGROWITransferApi(configuration);

let file: File; //The zip file of the data to be transferred (optional) (default to undefined)
let attachmentMetadata: object; //Metadata of the attachment (optional) (default to undefined)

const { status, data } = await apiInstance.postAttachmentForG2gTransfer(
    file,
    attachmentMetadata
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **file** | [**File**] | The zip file of the data to be transferred | (optional) defaults to undefined|
| **attachmentMetadata** | **object** | Metadata of the attachment | (optional) defaults to undefined|


### Return type

**PostG2gTransfer200Response**

### Authorization

[transferHeaderAuth](../README.md#transferHeaderAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully imported attachment file |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postG2gTransfer**
> PostG2gTransfer200Response postG2gTransfer()


### Example

```typescript
import {
    GROWIToGROWITransferApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GROWIToGROWITransferApi(configuration);

let file: File; //The zip file of the data to be transferred (optional) (default to undefined)
let collections: Array<string>; //The list of MongoDB collections to be transferred (optional) (default to undefined)
let optionsMap: object; //The map of options for each collection (optional) (default to undefined)
let operatorUserId: string; //The ID of the operator user (optional) (default to undefined)
let uploadConfigs: object; //The map of upload configurations (optional) (default to undefined)

const { status, data } = await apiInstance.postG2gTransfer(
    file,
    collections,
    optionsMap,
    operatorUserId,
    uploadConfigs
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **file** | [**File**] | The zip file of the data to be transferred | (optional) defaults to undefined|
| **collections** | **Array&lt;string&gt;** | The list of MongoDB collections to be transferred | (optional) defaults to undefined|
| **optionsMap** | **object** | The map of options for each collection | (optional) defaults to undefined|
| **operatorUserId** | [**string**] | The ID of the operator user | (optional) defaults to undefined|
| **uploadConfigs** | **object** | The map of upload configurations | (optional) defaults to undefined|


### Return type

**PostG2gTransfer200Response**

### Authorization

[transferHeaderAuth](../README.md#transferHeaderAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully started to receive transfer data |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postGenerateKeyForG2gTransfer**
> PostGenerateKeyForG2gTransfer200Response postGenerateKeyForG2gTransfer(postGenerateKeyForG2gTransferRequest)


### Example

```typescript
import {
    GROWIToGROWITransferApi,
    Configuration,
    PostGenerateKeyForG2gTransferRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new GROWIToGROWITransferApi(configuration);

let postGenerateKeyForG2gTransferRequest: PostGenerateKeyForG2gTransferRequest; //

const { status, data } = await apiInstance.postGenerateKeyForG2gTransfer(
    postGenerateKeyForG2gTransferRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postGenerateKeyForG2gTransferRequest** | **PostGenerateKeyForG2gTransferRequest**|  | |


### Return type

**PostGenerateKeyForG2gTransfer200Response**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully generated transfer key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postTransferForG2gTransfer**
> PostG2gTransfer200Response postTransferForG2gTransfer(postTransferForG2gTransferRequest)


### Example

```typescript
import {
    GROWIToGROWITransferApi,
    Configuration,
    PostTransferForG2gTransferRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new GROWIToGROWITransferApi(configuration);

let postTransferForG2gTransferRequest: PostTransferForG2gTransferRequest; //

const { status, data } = await apiInstance.postTransferForG2gTransfer(
    postTransferForG2gTransferRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postTransferForG2gTransferRequest** | **PostTransferForG2gTransferRequest**|  | |


### Return type

**PostG2gTransfer200Response**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully requested auto transfer |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

