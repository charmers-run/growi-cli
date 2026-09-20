# MarkDownSettingApi

All URIs are relative to *https://demo.growi.org/_api/v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getMarkdownSetting**](#getmarkdownsetting) | **GET** /markdown-setting | Get markdown parameters|
|[**putIndentForMarkdownSetting**](#putindentformarkdownsetting) | **PUT** /markdown-setting/indent | Update indent setting|
|[**putLineBreakForMarkdownSetting**](#putlinebreakformarkdownsetting) | **PUT** /markdown-setting/lineBreak | Update lineBreak setting|
|[**putXssForMarkdownSetting**](#putxssformarkdownsetting) | **PUT** /markdown-setting/xss | Update XSS setting|

# **getMarkdownSetting**
> GetMarkdownSetting200Response getMarkdownSetting()


### Example

```typescript
import {
    MarkDownSettingApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MarkDownSettingApi(configuration);

const { status, data } = await apiInstance.getMarkdownSetting();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetMarkdownSetting200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | params of markdown |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putIndentForMarkdownSetting**
> PutIndentForMarkdownSetting200Response putIndentForMarkdownSetting(indentParams)


### Example

```typescript
import {
    MarkDownSettingApi,
    Configuration,
    IndentParams
} from './api';

const configuration = new Configuration();
const apiInstance = new MarkDownSettingApi(configuration);

let indentParams: IndentParams; //

const { status, data } = await apiInstance.putIndentForMarkdownSetting(
    indentParams
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **indentParams** | **IndentParams**|  | |


### Return type

**PutIndentForMarkdownSetting200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to update indent setting |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putLineBreakForMarkdownSetting**
> PutLineBreakForMarkdownSetting200Response putLineBreakForMarkdownSetting(lineBreakParams)


### Example

```typescript
import {
    MarkDownSettingApi,
    Configuration,
    LineBreakParams
} from './api';

const configuration = new Configuration();
const apiInstance = new MarkDownSettingApi(configuration);

let lineBreakParams: LineBreakParams; //

const { status, data } = await apiInstance.putLineBreakForMarkdownSetting(
    lineBreakParams
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **lineBreakParams** | **LineBreakParams**|  | |


### Return type

**PutLineBreakForMarkdownSetting200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to update lineBreak setting |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putXssForMarkdownSetting**
> XssParams putXssForMarkdownSetting(xssParams)

Update xss

### Example

```typescript
import {
    MarkDownSettingApi,
    Configuration,
    XssParams
} from './api';

const configuration = new Configuration();
const apiInstance = new MarkDownSettingApi(configuration);

let xssParams: XssParams; //

const { status, data } = await apiInstance.putXssForMarkdownSetting(
    xssParams
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **xssParams** | **XssParams**|  | |


### Return type

**XssParams**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to update xss setting |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

