# AiSettingsApi

All URIs are relative to *https://demo.growi.org/_api/v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getAiSettings**](#getaisettings) | **GET** /ai-settings | /ai-settings|
|[**getAvailableModelsForAiSettings**](#getavailablemodelsforaisettings) | **GET** /ai-settings/available-models | /ai-settings/available-models|
|[**postRefreshModelCatalogForAiSettings**](#postrefreshmodelcatalogforaisettings) | **POST** /ai-settings/refresh-model-catalog | /ai-settings/refresh-model-catalog|
|[**putAiSettings**](#putaisettings) | **PUT** /ai-settings | /ai-settings|

# **getAiSettings**
> AiSettingsResponse getAiSettings()

Get the currently effective AI settings. No API key value is ever returned (only isApiKeySet).

### Example

```typescript
import {
    AiSettingsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AiSettingsApi(configuration);

const { status, data } = await apiInstance.getAiSettings();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**AiSettingsResponse**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The effective AI settings. |  -  |
|**500** | Failed to get AI settings. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAvailableModelsForAiSettings**
> SelectableModelsResponse getAvailableModelsForAiSettings()

Get the selectable models (id + display name) for a provider from the effective catalog (the runtime-refreshed snapshot when newer, otherwise the committed offline catalog). The response carries model id/display-name information only (no secrets).

### Example

```typescript
import {
    AiSettingsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AiSettingsApi(configuration);

let provider: 'openai' | 'anthropic' | 'google' | 'azure-openai'; //The provider to scope the model list to. (default to undefined)

const { status, data } = await apiInstance.getAvailableModelsForAiSettings(
    provider
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **provider** | [**&#39;openai&#39; | &#39;anthropic&#39; | &#39;google&#39; | &#39;azure-openai&#39;**]**Array<&#39;openai&#39; &#124; &#39;anthropic&#39; &#124; &#39;google&#39; &#124; &#39;azure-openai&#39;>** | The provider to scope the model list to. | defaults to undefined|


### Return type

**SelectableModelsResponse**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The selectable model ids. An empty array for a valid but catalog-less provider (e.g. azure-openai). |  -  |
|**400** | The provider query parameter is missing or not a known provider. |  -  |
|**500** | Failed to get available models. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postRefreshModelCatalogForAiSettings**
> RefreshModelCatalogResponse postRefreshModelCatalogForAiSettings()

Refresh the selectable-model catalog from models.dev (the fixed built-in source) and persist it for subsequent available-models lookups. Admin-only. On failure the last-good catalog stays in effect.

### Example

```typescript
import {
    AiSettingsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AiSettingsApi(configuration);

const { status, data } = await apiInstance.postRefreshModelCatalogForAiSettings();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**RefreshModelCatalogResponse**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The catalog was refreshed and persisted. |  -  |
|**500** | The refresh failed (network / upstream schema drift); the last-good catalog is preserved. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putAiSettings**
> putAiSettings(aiSettingsUpdateRequest)

Update the AI settings. Each top-level section (aiEnabled / providers / allowedModels) is omit = leave unchanged; a present section is a full-state replace. In env-only mode (env:useOnlyEnvVars:ai) a request that contains providers or aiEnabled is rejected with 400 (connection settings are env-only); only allowedModels stays editable.

### Example

```typescript
import {
    AiSettingsApi,
    Configuration,
    AiSettingsUpdateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AiSettingsApi(configuration);

let aiSettingsUpdateRequest: AiSettingsUpdateRequest; //

const { status, data } = await apiInstance.putAiSettings(
    aiSettingsUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiSettingsUpdateRequest** | **AiSettingsUpdateRequest**|  | |


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
|**200** | AI settings updated. |  -  |
|**400** | Validation failed, or a connection-setting change was attempted while env-only mode is active. |  -  |
|**500** | Failed to update AI settings. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

