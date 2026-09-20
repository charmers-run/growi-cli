# SlackIntegrationSettingsWithProxyApi

All URIs are relative to *https://demo.growi.org/_api/v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteSlackAppIntegrationsByIdForSlackIntegrationSettings**](#deleteslackappintegrationsbyidforslackintegrationsettings) | **DELETE** /slack-integration-settings/slack-app-integrations/{id} | /slack-integration-settings/slack-app-integrations/:id|
|[**postRelationTestByIdForSlackIntegrationSettingsSlackAppIntegrations**](#postrelationtestbyidforslackintegrationsettingsslackappintegrations) | **POST** /slack-integration-settings/slack-app-integrations/{id}/relation-test | /slack-integration-settings/slack-app-integrations/:id/relation-test|
|[**postSlackAppIntegrationsForSlackIntegrationSettings**](#postslackappintegrationsforslackintegrationsettings) | **POST** /slack-integration-settings/slack-app-integrations | /slack-integration-settings/slack-app-integrations|
|[**putMakeprimaryByIdForSlackIntegrationSettingsSlackAppIntegrations**](#putmakeprimarybyidforslackintegrationsettingsslackappintegrations) | **PUT** /slack-integration-settings/slack-app-integrations/{id}/makeprimary | /slack-integration-settings/slack-app-integrations/:id/makeprimary|
|[**putPermissionsByIdForSlackIntegrationSettingsSlackAppIntegrations**](#putpermissionsbyidforslackintegrationsettingsslackappintegrations) | **PUT** /slack-integration-settings/slack-app-integrations/{id}/permissions | /slack-integration-settings/slack-app-integrations/:id/permissions|
|[**putProxyUriForSlackIntegrationSettings**](#putproxyuriforslackintegrationsettings) | **PUT** /slack-integration-settings/proxy-uri | /slack-integration-settings/proxy-uri|
|[**putRegenerateTokensByIdForSlackIntegrationSettingsSlackAppIntegrations**](#putregeneratetokensbyidforslackintegrationsettingsslackappintegrations) | **PUT** /slack-integration-settings/slack-app-integrations/{id}/regenerate-tokens | /slack-integration-settings/slack-app-integrations/:id/regenerate-tokens|

# **deleteSlackAppIntegrationsByIdForSlackIntegrationSettings**
> DeleteSlackAppIntegrationsByIdForSlackIntegrationSettings200Response deleteSlackAppIntegrationsByIdForSlackIntegrationSettings()

Delete accessTokens

### Example

```typescript
import {
    SlackIntegrationSettingsWithProxyApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SlackIntegrationSettingsWithProxyApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.deleteSlackAppIntegrationsByIdForSlackIntegrationSettings(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**DeleteSlackAppIntegrationsByIdForSlackIntegrationSettings200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to delete access tokens for slack |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postRelationTestByIdForSlackIntegrationSettingsSlackAppIntegrations**
> postRelationTestByIdForSlackIntegrationSettingsSlackAppIntegrations(postRelationTestByIdForSlackIntegrationSettingsSlackAppIntegrationsRequest)

Delete botType setting.

### Example

```typescript
import {
    SlackIntegrationSettingsWithProxyApi,
    Configuration,
    PostRelationTestByIdForSlackIntegrationSettingsSlackAppIntegrationsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new SlackIntegrationSettingsWithProxyApi(configuration);

let id: string; // (default to undefined)
let postRelationTestByIdForSlackIntegrationSettingsSlackAppIntegrationsRequest: PostRelationTestByIdForSlackIntegrationSettingsSlackAppIntegrationsRequest; //

const { status, data } = await apiInstance.postRelationTestByIdForSlackIntegrationSettingsSlackAppIntegrations(
    id,
    postRelationTestByIdForSlackIntegrationSettingsSlackAppIntegrationsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postRelationTestByIdForSlackIntegrationSettingsSlackAppIntegrationsRequest** | **PostRelationTestByIdForSlackIntegrationSettingsSlackAppIntegrationsRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


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
|**200** | Succeeded to delete botType setting. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postSlackAppIntegrationsForSlackIntegrationSettings**
> PostSlackAppIntegrationsForSlackIntegrationSettings200Response postSlackAppIntegrationsForSlackIntegrationSettings()

Generate SlackAppIntegrations

### Example

```typescript
import {
    SlackIntegrationSettingsWithProxyApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SlackIntegrationSettingsWithProxyApi(configuration);

const { status, data } = await apiInstance.postSlackAppIntegrationsForSlackIntegrationSettings();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**PostSlackAppIntegrationsForSlackIntegrationSettings200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to create slack app integration |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putMakeprimaryByIdForSlackIntegrationSettingsSlackAppIntegrations**
> putMakeprimaryByIdForSlackIntegrationSettingsSlackAppIntegrations()

Make SlackAppTokens primary

### Example

```typescript
import {
    SlackIntegrationSettingsWithProxyApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SlackIntegrationSettingsWithProxyApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.putMakeprimaryByIdForSlackIntegrationSettingsSlackAppIntegrations(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to make it primary |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putPermissionsByIdForSlackIntegrationSettingsSlackAppIntegrations**
> object putPermissionsByIdForSlackIntegrationSettingsSlackAppIntegrations(putPermissionsByIdForSlackIntegrationSettingsSlackAppIntegrationsRequest)

update supported commands

### Example

```typescript
import {
    SlackIntegrationSettingsWithProxyApi,
    Configuration,
    PutPermissionsByIdForSlackIntegrationSettingsSlackAppIntegrationsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new SlackIntegrationSettingsWithProxyApi(configuration);

let id: string; // (default to undefined)
let putPermissionsByIdForSlackIntegrationSettingsSlackAppIntegrationsRequest: PutPermissionsByIdForSlackIntegrationSettingsSlackAppIntegrationsRequest; //

const { status, data } = await apiInstance.putPermissionsByIdForSlackIntegrationSettingsSlackAppIntegrations(
    id,
    putPermissionsByIdForSlackIntegrationSettingsSlackAppIntegrationsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putPermissionsByIdForSlackIntegrationSettingsSlackAppIntegrationsRequest** | **PutPermissionsByIdForSlackIntegrationSettingsSlackAppIntegrationsRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**object**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to update supported commands |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putProxyUriForSlackIntegrationSettings**
> object putProxyUriForSlackIntegrationSettings(putProxyUriForSlackIntegrationSettingsRequest)

Update proxy uri

### Example

```typescript
import {
    SlackIntegrationSettingsWithProxyApi,
    Configuration,
    PutProxyUriForSlackIntegrationSettingsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new SlackIntegrationSettingsWithProxyApi(configuration);

let putProxyUriForSlackIntegrationSettingsRequest: PutProxyUriForSlackIntegrationSettingsRequest; //

const { status, data } = await apiInstance.putProxyUriForSlackIntegrationSettings(
    putProxyUriForSlackIntegrationSettingsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putProxyUriForSlackIntegrationSettingsRequest** | **PutProxyUriForSlackIntegrationSettingsRequest**|  | |


### Return type

**object**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to update proxy uri |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putRegenerateTokensByIdForSlackIntegrationSettingsSlackAppIntegrations**
> object putRegenerateTokensByIdForSlackIntegrationSettingsSlackAppIntegrations()

Regenerate SlackAppTokens

### Example

```typescript
import {
    SlackIntegrationSettingsWithProxyApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SlackIntegrationSettingsWithProxyApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.putRegenerateTokensByIdForSlackIntegrationSettingsSlackAppIntegrations(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**object**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to regenerate slack app tokens |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

