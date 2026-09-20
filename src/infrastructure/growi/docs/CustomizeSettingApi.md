# CustomizeSettingApi

All URIs are relative to *https://demo.growi.org/_api/v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteDeleteBrandLogoForCustomizeSetting**](#deletedeletebrandlogoforcustomizesetting) | **DELETE** /customize-setting/delete-brand-logo | /customize-setting/delete-brand-logo|
|[**getCustomizeSetting**](#getcustomizesetting) | **GET** /customize-setting | /customize-setting|
|[**getLayoutForCustomizeSetting**](#getlayoutforcustomizesetting) | **GET** /customize-setting/layout | /customize-setting/layout|
|[**getSidebarForCustomizeSetting**](#getsidebarforcustomizesetting) | **GET** /customize-setting/sidebar | /customize-setting/sidebar|
|[**getThemeForCustomizeSetting**](#getthemeforcustomizesetting) | **GET** /customize-setting/theme | /customize-setting/theme|
|[**putCustomizeCssForCustomizeSetting**](#putcustomizecssforcustomizesetting) | **PUT** /customize-setting/customize-css | /customize-setting/customize-css|
|[**putCustomizeLogoForCustomizeSetting**](#putcustomizelogoforcustomizesetting) | **PUT** /customize-setting/customize-logo | /customize-setting/customize-logo|
|[**putCustomizeNoscriptForCustomizeSetting**](#putcustomizenoscriptforcustomizesetting) | **PUT** /customize-setting/customize-noscript | /customize-setting/customize-noscript|
|[**putCustomizeScriptForCustomizeSetting**](#putcustomizescriptforcustomizesetting) | **PUT** /customize-setting/customize-script | /customize-setting/customize-script|
|[**putCustomizeTitleForCustomizeSetting**](#putcustomizetitleforcustomizesetting) | **PUT** /customize-setting/customizeTitle | /customize-setting/customizeTitle|
|[**putFunctionForCustomizeSetting**](#putfunctionforcustomizesetting) | **PUT** /customize-setting/function | /customize-setting/function|
|[**putHighlightForCustomizeSetting**](#puthighlightforcustomizesetting) | **PUT** /customize-setting/highlight | /customize-setting/highlight|
|[**putLayoutForCustomizeSetting**](#putlayoutforcustomizesetting) | **PUT** /customize-setting/layout | /customize-setting/layout|
|[**putPresentationForCustomizeSetting**](#putpresentationforcustomizesetting) | **PUT** /customize-setting/presentation | /customize-setting/presentation|
|[**putSidebarForCustomizeSetting**](#putsidebarforcustomizesetting) | **PUT** /customize-setting/sidebar | /customize-setting/sidebar|
|[**putThemeForCustomizeSetting**](#putthemeforcustomizesetting) | **PUT** /customize-setting/theme | /customize-setting/theme|
|[**putUploadBrandLogoForCustomizeSetting**](#putuploadbrandlogoforcustomizesetting) | **PUT** /customize-setting/upload-brand-logo | /customize-setting/upload-brand-logo|

# **deleteDeleteBrandLogoForCustomizeSetting**
> object deleteDeleteBrandLogoForCustomizeSetting()

Delete brand logo

### Example

```typescript
import {
    CustomizeSettingApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CustomizeSettingApi(configuration);

const { status, data } = await apiInstance.deleteDeleteBrandLogoForCustomizeSetting();
```

### Parameters
This endpoint does not have any parameters.


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
|**200** | Succeeded to delete brand logo |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCustomizeSetting**
> GetCustomizeSetting200Response getCustomizeSetting()

Get customize parameters

### Example

```typescript
import {
    CustomizeSettingApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CustomizeSettingApi(configuration);

const { status, data } = await apiInstance.getCustomizeSetting();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetCustomizeSetting200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | params of customize |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getLayoutForCustomizeSetting**
> CustomizeLayout getLayoutForCustomizeSetting()

Get layout

### Example

```typescript
import {
    CustomizeSettingApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CustomizeSettingApi(configuration);

const { status, data } = await apiInstance.getLayoutForCustomizeSetting();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**CustomizeLayout**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to get layout |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSidebarForCustomizeSetting**
> CustomizeSidebar getSidebarForCustomizeSetting()

Get sidebar

### Example

```typescript
import {
    CustomizeSettingApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CustomizeSettingApi(configuration);

const { status, data } = await apiInstance.getSidebarForCustomizeSetting();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**CustomizeSidebar**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to get sidebar |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getThemeForCustomizeSetting**
> GetThemeForCustomizeSetting200Response getThemeForCustomizeSetting()

Get theme

### Example

```typescript
import {
    CustomizeSettingApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CustomizeSettingApi(configuration);

const { status, data } = await apiInstance.getThemeForCustomizeSetting();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetThemeForCustomizeSetting200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to get layout |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putCustomizeCssForCustomizeSetting**
> PutCustomizeCssForCustomizeSetting200Response putCustomizeCssForCustomizeSetting(customizeCss)

Update customize css

### Example

```typescript
import {
    CustomizeSettingApi,
    Configuration,
    CustomizeCss
} from './api';

const configuration = new Configuration();
const apiInstance = new CustomizeSettingApi(configuration);

let customizeCss: CustomizeCss; //

const { status, data } = await apiInstance.putCustomizeCssForCustomizeSetting(
    customizeCss
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customizeCss** | **CustomizeCss**|  | |


### Return type

**PutCustomizeCssForCustomizeSetting200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to update customize css |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putCustomizeLogoForCustomizeSetting**
> PutCustomizeLogoForCustomizeSetting200Response putCustomizeLogoForCustomizeSetting(customizeLogo)

Update customize logo

### Example

```typescript
import {
    CustomizeSettingApi,
    Configuration,
    CustomizeLogo
} from './api';

const configuration = new Configuration();
const apiInstance = new CustomizeSettingApi(configuration);

let customizeLogo: CustomizeLogo; //

const { status, data } = await apiInstance.putCustomizeLogoForCustomizeSetting(
    customizeLogo
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customizeLogo** | **CustomizeLogo**|  | |


### Return type

**PutCustomizeLogoForCustomizeSetting200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to update customize logo |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putCustomizeNoscriptForCustomizeSetting**
> PutCustomizeNoscriptForCustomizeSetting200Response putCustomizeNoscriptForCustomizeSetting(customizeNoscript)

Update noscript

### Example

```typescript
import {
    CustomizeSettingApi,
    Configuration,
    CustomizeNoscript
} from './api';

const configuration = new Configuration();
const apiInstance = new CustomizeSettingApi(configuration);

let customizeNoscript: CustomizeNoscript; //

const { status, data } = await apiInstance.putCustomizeNoscriptForCustomizeSetting(
    customizeNoscript
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customizeNoscript** | **CustomizeNoscript**|  | |


### Return type

**PutCustomizeNoscriptForCustomizeSetting200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to update customize header |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putCustomizeScriptForCustomizeSetting**
> PutCustomizeScriptForCustomizeSetting200Response putCustomizeScriptForCustomizeSetting(customizeScript)

Update customize script

### Example

```typescript
import {
    CustomizeSettingApi,
    Configuration,
    CustomizeScript
} from './api';

const configuration = new Configuration();
const apiInstance = new CustomizeSettingApi(configuration);

let customizeScript: CustomizeScript; //

const { status, data } = await apiInstance.putCustomizeScriptForCustomizeSetting(
    customizeScript
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customizeScript** | **CustomizeScript**|  | |


### Return type

**PutCustomizeScriptForCustomizeSetting200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to update customize script |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putCustomizeTitleForCustomizeSetting**
> PutCustomizeTitleForCustomizeSetting200Response putCustomizeTitleForCustomizeSetting(customizeTitle)

Update title

### Example

```typescript
import {
    CustomizeSettingApi,
    Configuration,
    CustomizeTitle
} from './api';

const configuration = new Configuration();
const apiInstance = new CustomizeSettingApi(configuration);

let customizeTitle: CustomizeTitle; //

const { status, data } = await apiInstance.putCustomizeTitleForCustomizeSetting(
    customizeTitle
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customizeTitle** | **CustomizeTitle**|  | |


### Return type

**PutCustomizeTitleForCustomizeSetting200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to update customizeTitle |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putFunctionForCustomizeSetting**
> PutFunctionForCustomizeSetting200Response putFunctionForCustomizeSetting(customizeFunction)

Update function

### Example

```typescript
import {
    CustomizeSettingApi,
    Configuration,
    CustomizeFunction
} from './api';

const configuration = new Configuration();
const apiInstance = new CustomizeSettingApi(configuration);

let customizeFunction: CustomizeFunction; //

const { status, data } = await apiInstance.putFunctionForCustomizeSetting(
    customizeFunction
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customizeFunction** | **CustomizeFunction**|  | |


### Return type

**PutFunctionForCustomizeSetting200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to update function |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putHighlightForCustomizeSetting**
> PutHighlightForCustomizeSetting200Response putHighlightForCustomizeSetting(customizeHighlight)

Update highlight

### Example

```typescript
import {
    CustomizeSettingApi,
    Configuration,
    CustomizeHighlight
} from './api';

const configuration = new Configuration();
const apiInstance = new CustomizeSettingApi(configuration);

let customizeHighlight: CustomizeHighlight; //

const { status, data } = await apiInstance.putHighlightForCustomizeSetting(
    customizeHighlight
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customizeHighlight** | **CustomizeHighlight**|  | |


### Return type

**PutHighlightForCustomizeSetting200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to update highlight |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putLayoutForCustomizeSetting**
> PutLayoutForCustomizeSetting200Response putLayoutForCustomizeSetting(customizeLayout)

Update layout

### Example

```typescript
import {
    CustomizeSettingApi,
    Configuration,
    CustomizeLayout
} from './api';

const configuration = new Configuration();
const apiInstance = new CustomizeSettingApi(configuration);

let customizeLayout: CustomizeLayout; //

const { status, data } = await apiInstance.putLayoutForCustomizeSetting(
    customizeLayout
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customizeLayout** | **CustomizeLayout**|  | |


### Return type

**PutLayoutForCustomizeSetting200Response**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to update layout |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putPresentationForCustomizeSetting**
> PutPresentationForCustomizeSetting200Response putPresentationForCustomizeSetting(customizePresentation)

Update presentation

### Example

```typescript
import {
    CustomizeSettingApi,
    Configuration,
    CustomizePresentation
} from './api';

const configuration = new Configuration();
const apiInstance = new CustomizeSettingApi(configuration);

let customizePresentation: CustomizePresentation; //

const { status, data } = await apiInstance.putPresentationForCustomizeSetting(
    customizePresentation
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customizePresentation** | **CustomizePresentation**|  | |


### Return type

**PutPresentationForCustomizeSetting200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to update presentation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putSidebarForCustomizeSetting**
> PutSidebarForCustomizeSetting200Response putSidebarForCustomizeSetting(customizeSidebar)

Update sidebar

### Example

```typescript
import {
    CustomizeSettingApi,
    Configuration,
    CustomizeSidebar
} from './api';

const configuration = new Configuration();
const apiInstance = new CustomizeSettingApi(configuration);

let customizeSidebar: CustomizeSidebar; //

const { status, data } = await apiInstance.putSidebarForCustomizeSetting(
    customizeSidebar
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customizeSidebar** | **CustomizeSidebar**|  | |


### Return type

**PutSidebarForCustomizeSetting200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to update sidebar |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putThemeForCustomizeSetting**
> PutThemeForCustomizeSetting200Response putThemeForCustomizeSetting(customizeTheme)

Update theme

### Example

```typescript
import {
    CustomizeSettingApi,
    Configuration,
    CustomizeTheme
} from './api';

const configuration = new Configuration();
const apiInstance = new CustomizeSettingApi(configuration);

let customizeTheme: CustomizeTheme; //

const { status, data } = await apiInstance.putThemeForCustomizeSetting(
    customizeTheme
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customizeTheme** | **CustomizeTheme**|  | |


### Return type

**PutThemeForCustomizeSetting200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to update theme |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putUploadBrandLogoForCustomizeSetting**
> PutUploadBrandLogoForCustomizeSetting200Response putUploadBrandLogoForCustomizeSetting()

Upload brand logo

### Example

```typescript
import {
    CustomizeSettingApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CustomizeSettingApi(configuration);

let file: File; // (optional) (default to undefined)

const { status, data } = await apiInstance.putUploadBrandLogoForCustomizeSetting(
    file
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **file** | [**File**] |  | (optional) defaults to undefined|


### Return type

**PutUploadBrandLogoForCustomizeSetting200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to upload brand logo |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

