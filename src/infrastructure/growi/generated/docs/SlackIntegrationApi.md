# SlackIntegrationApi

All URIs are relative to *https://demo.growi.org/_api/v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getSupportedCommandsForSlackIntegration**](#getsupportedcommandsforslackintegration) | **GET** /slack-integration/supported-commands | /slack-integration/supported-commands|
|[**postCommandsForSlackIntegration**](#postcommandsforslackintegration) | **POST** /slack-integration/commands | /slack-integration/commands|
|[**postCommandsForSlackIntegrationProxied**](#postcommandsforslackintegrationproxied) | **POST** /slack-integration/proxied/commands | /slack-integration/proxied/commands|
|[**postEventsForSlackIntegration**](#posteventsforslackintegration) | **POST** /slack-integration/events | /slack-integration/events|
|[**postEventsForSlackIntegrationProxied**](#posteventsforslackintegrationproxied) | **POST** /slack-integration/proxied/events | /slack-integration/proxied/events|
|[**postInteractionsForSlackIntegration**](#postinteractionsforslackintegration) | **POST** /slack-integration/interactions | /slack-integration/interactions|
|[**postInteractionsForSlackIntegrationProxied**](#postinteractionsforslackintegrationproxied) | **POST** /slack-integration/proxied/interactions | /slack-integration/proxied/interactions|
|[**postVerifyForSlackIntegrationProxied**](#postverifyforslackintegrationproxied) | **POST** /slack-integration/proxied/verify | /slack-integration/proxied/verify|

# **getSupportedCommandsForSlackIntegration**
> GetSupportedCommandsForSlackIntegration200Response getSupportedCommandsForSlackIntegration()

Get supported commands

### Example

```typescript
import {
    SlackIntegrationApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SlackIntegrationApi(configuration);

const { status, data } = await apiInstance.getSupportedCommandsForSlackIntegration();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetSupportedCommandsForSlackIntegration200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Supported commands |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postCommandsForSlackIntegration**
> string postCommandsForSlackIntegration(body)

Handle Slack commands

### Example

```typescript
import {
    SlackIntegrationApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SlackIntegrationApi(configuration);

let body: object; //

const { status, data } = await apiInstance.postCommandsForSlackIntegration(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |


### Return type

**string**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postCommandsForSlackIntegrationProxied**
> string postCommandsForSlackIntegrationProxied(body)

Handle Slack commands

### Example

```typescript
import {
    SlackIntegrationApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SlackIntegrationApi(configuration);

let body: object; //

const { status, data } = await apiInstance.postCommandsForSlackIntegrationProxied(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |


### Return type

**string**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postEventsForSlackIntegration**
> object postEventsForSlackIntegration(postEventsForSlackIntegrationRequest)

Handle Slack events

### Example

```typescript
import {
    SlackIntegrationApi,
    Configuration,
    PostEventsForSlackIntegrationRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new SlackIntegrationApi(configuration);

let postEventsForSlackIntegrationRequest: PostEventsForSlackIntegrationRequest; //

const { status, data } = await apiInstance.postEventsForSlackIntegration(
    postEventsForSlackIntegrationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postEventsForSlackIntegrationRequest** | **PostEventsForSlackIntegrationRequest**|  | |


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
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postEventsForSlackIntegrationProxied**
> object postEventsForSlackIntegrationProxied(postEventsForSlackIntegrationProxiedRequest)

Handle Slack events

### Example

```typescript
import {
    SlackIntegrationApi,
    Configuration,
    PostEventsForSlackIntegrationProxiedRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new SlackIntegrationApi(configuration);

let postEventsForSlackIntegrationProxiedRequest: PostEventsForSlackIntegrationProxiedRequest; //

const { status, data } = await apiInstance.postEventsForSlackIntegrationProxied(
    postEventsForSlackIntegrationProxiedRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postEventsForSlackIntegrationProxiedRequest** | **PostEventsForSlackIntegrationProxiedRequest**|  | |


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
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postInteractionsForSlackIntegration**
> postInteractionsForSlackIntegration(body)

Handle Slack interactions

### Example

```typescript
import {
    SlackIntegrationApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SlackIntegrationApi(configuration);

let body: object; //

const { status, data } = await apiInstance.postInteractionsForSlackIntegration(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |


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
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postInteractionsForSlackIntegrationProxied**
> postInteractionsForSlackIntegrationProxied(body)

Handle Slack interactions

### Example

```typescript
import {
    SlackIntegrationApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SlackIntegrationApi(configuration);

let body: object; //

const { status, data } = await apiInstance.postInteractionsForSlackIntegrationProxied(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |


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
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postVerifyForSlackIntegrationProxied**
> PostVerifyForSlackIntegrationProxied200Response postVerifyForSlackIntegrationProxied(postVerifyForSlackIntegrationProxiedRequest)

Verify the access token

### Example

```typescript
import {
    SlackIntegrationApi,
    Configuration,
    PostVerifyForSlackIntegrationProxiedRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new SlackIntegrationApi(configuration);

let postVerifyForSlackIntegrationProxiedRequest: PostVerifyForSlackIntegrationProxiedRequest; //

const { status, data } = await apiInstance.postVerifyForSlackIntegrationProxied(
    postVerifyForSlackIntegrationProxiedRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postVerifyForSlackIntegrationProxiedRequest** | **PostVerifyForSlackIntegrationProxiedRequest**|  | |


### Return type

**PostVerifyForSlackIntegrationProxied200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

