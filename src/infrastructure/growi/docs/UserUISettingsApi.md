# UserUISettingsApi

All URIs are relative to *https://demo.growi.org/_api/v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**putUserUiSettings**](#putuseruisettings) | **PUT** /user-ui-settings | /user-ui-settings|

# **putUserUiSettings**
> PutUserUiSettings200Response putUserUiSettings(putUserUiSettingsRequest)

Update the user\'s UI settings

### Example

```typescript
import {
    UserUISettingsApi,
    Configuration,
    PutUserUiSettingsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new UserUISettingsApi(configuration);

let putUserUiSettingsRequest: PutUserUiSettingsRequest; //

const { status, data } = await apiInstance.putUserUiSettings(
    putUserUiSettingsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putUserUiSettingsRequest** | **PutUserUiSettingsRequest**|  | |


### Return type

**PutUserUiSettings200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The user\&#39;s UI settings |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

