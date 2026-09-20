# InAppNotificationSettingsApi

All URIs are relative to *https://demo.growi.org/_api/v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getInAppNotificationSettingsForPersonalSetting**](#getinappnotificationsettingsforpersonalsetting) | **GET** /personal-setting/in-app-notification-settings | personal-setting/in-app-notification-settings|
|[**putInAppNotificationSettingsForPersonalSetting**](#putinappnotificationsettingsforpersonalsetting) | **PUT** /personal-setting/in-app-notification-settings | /personal-setting/in-app-notification-settings|

# **getInAppNotificationSettingsForPersonalSetting**
> GetInAppNotificationSettingsForPersonalSetting200Response getInAppNotificationSettingsForPersonalSetting()

Get InAppNotificationSettings

### Example

```typescript
import {
    InAppNotificationSettingsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new InAppNotificationSettingsApi(configuration);

const { status, data } = await apiInstance.getInAppNotificationSettingsForPersonalSetting();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetInAppNotificationSettingsForPersonalSetting200Response**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | params of InAppNotificationSettings |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putInAppNotificationSettingsForPersonalSetting**
> object putInAppNotificationSettingsForPersonalSetting(putInAppNotificationSettingsForPersonalSettingRequest)

Put InAppNotificationSettings

### Example

```typescript
import {
    InAppNotificationSettingsApi,
    Configuration,
    PutInAppNotificationSettingsForPersonalSettingRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new InAppNotificationSettingsApi(configuration);

let putInAppNotificationSettingsForPersonalSettingRequest: PutInAppNotificationSettingsForPersonalSettingRequest; //

const { status, data } = await apiInstance.putInAppNotificationSettingsForPersonalSetting(
    putInAppNotificationSettingsForPersonalSettingRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putInAppNotificationSettingsForPersonalSettingRequest** | **PutInAppNotificationSettingsForPersonalSettingRequest**|  | |


### Return type

**object**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | params of InAppNotificationSettings |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

