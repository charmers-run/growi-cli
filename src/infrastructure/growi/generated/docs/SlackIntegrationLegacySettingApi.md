# SlackIntegrationLegacySettingApi

All URIs are relative to *https://demo.growi.org/_api/v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getSlackIntegrationLegacySetting**](#getslackintegrationlegacysetting) | **GET** /slack-integration-legacy-setting/ | |
|[**putSlackIntegrationLegacySetting**](#putslackintegrationlegacysetting) | **PUT** /slack-integration-legacy-setting/ | |

# **getSlackIntegrationLegacySetting**
> GetSlackIntegrationLegacySetting200Response getSlackIntegrationLegacySetting()

Get slack configuration setting

### Example

```typescript
import {
    SlackIntegrationLegacySettingApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SlackIntegrationLegacySettingApi(configuration);

const { status, data } = await apiInstance.getSlackIntegrationLegacySetting();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetSlackIntegrationLegacySetting200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | params of slack configuration setting |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putSlackIntegrationLegacySetting**
> PutSlackIntegrationLegacySetting200Response putSlackIntegrationLegacySetting(putSlackIntegrationLegacySettingRequest)

Update slack configuration setting

### Example

```typescript
import {
    SlackIntegrationLegacySettingApi,
    Configuration,
    PutSlackIntegrationLegacySettingRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new SlackIntegrationLegacySettingApi(configuration);

let putSlackIntegrationLegacySettingRequest: PutSlackIntegrationLegacySettingRequest; //

const { status, data } = await apiInstance.putSlackIntegrationLegacySetting(
    putSlackIntegrationLegacySettingRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putSlackIntegrationLegacySettingRequest** | **PutSlackIntegrationLegacySettingRequest**|  | |


### Return type

**PutSlackIntegrationLegacySetting200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to update slack configuration setting |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

