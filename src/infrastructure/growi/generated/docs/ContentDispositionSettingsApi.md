# ContentDispositionSettingsApi

All URIs are relative to *https://demo.growi.org/_api/v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getContentDispositionSettings**](#getcontentdispositionsettings) | **GET** /content-disposition-settings | Get content disposition settings for configurable MIME types|
|[**putContentDispositionSettings**](#putcontentdispositionsettings) | **PUT** /content-disposition-settings/ | Replace content disposition settings for configurable MIME types with recieved lists.|

# **getContentDispositionSettings**
> PutContentDispositionSettings200Response getContentDispositionSettings()


### Example

```typescript
import {
    ContentDispositionSettingsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ContentDispositionSettingsApi(configuration);

const { status, data } = await apiInstance.getContentDispositionSettings();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**PutContentDispositionSettings200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully retrieved content disposition settings. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putContentDispositionSettings**
> PutContentDispositionSettings200Response putContentDispositionSettings()


### Example

```typescript
import {
    ContentDispositionSettingsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ContentDispositionSettingsApi(configuration);

const { status, data } = await apiInstance.putContentDispositionSettings();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**PutContentDispositionSettings200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully set content disposition settings. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

