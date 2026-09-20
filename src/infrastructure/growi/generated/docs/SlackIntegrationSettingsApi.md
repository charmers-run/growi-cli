# SlackIntegrationSettingsApi

All URIs are relative to *https://demo.growi.org/_api/v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteBotTypeForSlackIntegration**](#deletebottypeforslackintegration) | **DELETE** /slack-integration/bot-type/ | /slack-integration/bot-type|
|[**getSlackIntegrationSettings**](#getslackintegrationsettings) | **GET** /slack-integration-settings/ | /slack-integration-settings|
|[**putBotTypeForSlackIntegrationSettings**](#putbottypeforslackintegrationsettings) | **PUT** /slack-integration-settings/bot-type/ | /slack-integration/bot-type|

# **deleteBotTypeForSlackIntegration**
> deleteBotTypeForSlackIntegration()

Delete botType setting.

### Example

```typescript
import {
    SlackIntegrationSettingsApi,
    Configuration,
    BotType
} from './api';

const configuration = new Configuration();
const apiInstance = new SlackIntegrationSettingsApi(configuration);

let botType: BotType; // (optional)

const { status, data } = await apiInstance.deleteBotTypeForSlackIntegration(
    botType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **botType** | **BotType**|  | |


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
|**200** | Succeeded to delete botType setting. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSlackIntegrationSettings**
> GetSlackIntegrationSettings200Response getSlackIntegrationSettings()

Get current settings and connection statuses.

### Example

```typescript
import {
    SlackIntegrationSettingsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SlackIntegrationSettingsApi(configuration);

const { status, data } = await apiInstance.getSlackIntegrationSettings();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetSlackIntegrationSettings200Response**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to get info. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putBotTypeForSlackIntegrationSettings**
> putBotTypeForSlackIntegrationSettings(botType)

Put botType setting.

### Example

```typescript
import {
    SlackIntegrationSettingsApi,
    Configuration,
    BotType
} from './api';

const configuration = new Configuration();
const apiInstance = new SlackIntegrationSettingsApi(configuration);

let botType: BotType; //

const { status, data } = await apiInstance.putBotTypeForSlackIntegrationSettings(
    botType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **botType** | **BotType**|  | |


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
|**200** | Succeeded to put botType setting. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

