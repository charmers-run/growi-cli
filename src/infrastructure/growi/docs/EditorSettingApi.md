# EditorSettingApi

All URIs are relative to *https://demo.growi.org/_api/v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getEditorSettingsForPersonalSetting**](#geteditorsettingsforpersonalsetting) | **GET** /personal-setting/editor-settings | /personal-setting/editor-settings|
|[**putEditorSettingsForPersonalSetting**](#puteditorsettingsforpersonalsetting) | **PUT** /personal-setting/editor-settings | /personal-setting/editor-settings|

# **getEditorSettingsForPersonalSetting**
> object getEditorSettingsForPersonalSetting()

Get editor preferences

### Example

```typescript
import {
    EditorSettingApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new EditorSettingApi(configuration);

const { status, data } = await apiInstance.getEditorSettingsForPersonalSetting();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**object**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | params of editor settings |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putEditorSettingsForPersonalSetting**
> object putEditorSettingsForPersonalSetting(putEditorSettingsForPersonalSettingRequest)

Put editor preferences

### Example

```typescript
import {
    EditorSettingApi,
    Configuration,
    PutEditorSettingsForPersonalSettingRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new EditorSettingApi(configuration);

let putEditorSettingsForPersonalSettingRequest: PutEditorSettingsForPersonalSettingRequest; //

const { status, data } = await apiInstance.putEditorSettingsForPersonalSetting(
    putEditorSettingsForPersonalSettingRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putEditorSettingsForPersonalSettingRequest** | **PutEditorSettingsForPersonalSettingRequest**|  | |


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
|**200** | params of editor settings |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

