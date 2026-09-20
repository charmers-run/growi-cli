# SlackIntegrationSettingsWithoutProxyApi

All URIs are relative to *https://demo.growi.org/_api/v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**postTestForSlackIntegrationSettingsWithoutProxy**](#posttestforslackintegrationsettingswithoutproxy) | **POST** /slack-integration-settings/without-proxy/test | /slack-integration-settings/without-proxy/test|
|[**putUpdatePermissionsForSlackIntegrationSettingsWithoutProxy**](#putupdatepermissionsforslackintegrationsettingswithoutproxy) | **PUT** /slack-integration-settings/without-proxy/update-permissions/ | /slack-integration-settings/without-proxy/update-permissions|
|[**putUpdateSettingsForSlackIntegrationSettingsWithoutProxy**](#putupdatesettingsforslackintegrationsettingswithoutproxy) | **PUT** /slack-integration-settings/without-proxy/update-settings/ | /slack-integration-settings/without-proxy/update-settings|

# **postTestForSlackIntegrationSettingsWithoutProxy**
> postTestForSlackIntegrationSettingsWithoutProxy()

Test the connection with slack work space.

### Example

```typescript
import {
    SlackIntegrationSettingsWithoutProxyApi,
    Configuration,
    PostRelationTestByIdForSlackIntegrationSettingsSlackAppIntegrationsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new SlackIntegrationSettingsWithoutProxyApi(configuration);

let postRelationTestByIdForSlackIntegrationSettingsSlackAppIntegrationsRequest: PostRelationTestByIdForSlackIntegrationSettingsSlackAppIntegrationsRequest; // (optional)

const { status, data } = await apiInstance.postTestForSlackIntegrationSettingsWithoutProxy(
    postRelationTestByIdForSlackIntegrationSettingsSlackAppIntegrationsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postRelationTestByIdForSlackIntegrationSettingsSlackAppIntegrationsRequest** | **PostRelationTestByIdForSlackIntegrationSettingsSlackAppIntegrationsRequest**|  | |


### Return type

void (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to connect to slack work space. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putUpdatePermissionsForSlackIntegrationSettingsWithoutProxy**
> putUpdatePermissionsForSlackIntegrationSettingsWithoutProxy(putUpdatePermissionsForSlackIntegrationSettingsWithoutProxyRequest)

Update customBotWithoutProxy permissions.

### Example

```typescript
import {
    SlackIntegrationSettingsWithoutProxyApi,
    Configuration,
    PutUpdatePermissionsForSlackIntegrationSettingsWithoutProxyRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new SlackIntegrationSettingsWithoutProxyApi(configuration);

let putUpdatePermissionsForSlackIntegrationSettingsWithoutProxyRequest: PutUpdatePermissionsForSlackIntegrationSettingsWithoutProxyRequest; //

const { status, data } = await apiInstance.putUpdatePermissionsForSlackIntegrationSettingsWithoutProxy(
    putUpdatePermissionsForSlackIntegrationSettingsWithoutProxyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putUpdatePermissionsForSlackIntegrationSettingsWithoutProxyRequest** | **PutUpdatePermissionsForSlackIntegrationSettingsWithoutProxyRequest**|  | |


### Return type

void (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to put CustomBotWithoutProxy permissions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putUpdateSettingsForSlackIntegrationSettingsWithoutProxy**
> putUpdateSettingsForSlackIntegrationSettingsWithoutProxy(putUpdateSettingsForSlackIntegrationSettingsWithoutProxyRequest)

Update customBotWithoutProxy setting.

### Example

```typescript
import {
    SlackIntegrationSettingsWithoutProxyApi,
    Configuration,
    PutUpdateSettingsForSlackIntegrationSettingsWithoutProxyRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new SlackIntegrationSettingsWithoutProxyApi(configuration);

let putUpdateSettingsForSlackIntegrationSettingsWithoutProxyRequest: PutUpdateSettingsForSlackIntegrationSettingsWithoutProxyRequest; //

const { status, data } = await apiInstance.putUpdateSettingsForSlackIntegrationSettingsWithoutProxy(
    putUpdateSettingsForSlackIntegrationSettingsWithoutProxyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putUpdateSettingsForSlackIntegrationSettingsWithoutProxyRequest** | **PutUpdateSettingsForSlackIntegrationSettingsWithoutProxyRequest**|  | |


### Return type

void (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to put CustomBotWithoutProxy setting. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

