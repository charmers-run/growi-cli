# AppSettingsApi

All URIs are relative to *https://demo.growi.org/_api/v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getAppSettings**](#getappsettings) | **GET** /app-settings | /app-settings|
|[**postMaintenanceModeForAppSettings**](#postmaintenancemodeforappsettings) | **POST** /app-settings/maintenance-mode | AccessToken supported.|
|[**postSmtpTestForAppSettings**](#postsmtptestforappsettings) | **POST** /app-settings/smtp-test | /app-settings/smtp-setting|
|[**postV5SchemaMigrationForAppSettings**](#postv5schemamigrationforappsettings) | **POST** /app-settings/v5-schema-migration | AccessToken supported.|
|[**putAppSettingForAppSettings**](#putappsettingforappsettings) | **PUT** /app-settings/app-setting | /app-settings/app-setting|
|[**putFileUploadSettingsForAppSettings**](#putfileuploadsettingsforappsettings) | **PUT** /app-settings/file-upload-settings | /app-settings/file-upload-setting|
|[**putOauth2SettingForAppSettings**](#putoauth2settingforappsettings) | **PUT** /app-settings/oauth2-setting | /app-settings/oauth2-setting|
|[**putSesSettingForAppSettings**](#putsessettingforappsettings) | **PUT** /app-settings/ses-setting | /app-settings/ses-setting|
|[**putSiteUrlSettingForAppSettings**](#putsiteurlsettingforappsettings) | **PUT** /app-settings/site-url-setting | /app-settings/site-url-setting|
|[**putSmtpSettingForAppSettings**](#putsmtpsettingforappsettings) | **PUT** /app-settings/smtp-setting | /app-settings/smtp-setting|

# **getAppSettings**
> GetAppSettings200Response getAppSettings()

get app setting params

### Example

```typescript
import {
    AppSettingsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AppSettingsApi(configuration);

const { status, data } = await apiInstance.getAppSettings();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetAppSettings200Response**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Resources are available |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postMaintenanceModeForAppSettings**
> PostMaintenanceModeForAppSettings200Response postMaintenanceModeForAppSettings()

Update MaintenanceMode

### Example

```typescript
import {
    AppSettingsApi,
    Configuration,
    PostMaintenanceModeForAppSettingsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AppSettingsApi(configuration);

let postMaintenanceModeForAppSettingsRequest: PostMaintenanceModeForAppSettingsRequest; // (optional)

const { status, data } = await apiInstance.postMaintenanceModeForAppSettings(
    postMaintenanceModeForAppSettingsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postMaintenanceModeForAppSettingsRequest** | **PostMaintenanceModeForAppSettingsRequest**|  | |


### Return type

**PostMaintenanceModeForAppSettings200Response**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to update MaintenanceMode |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postSmtpTestForAppSettings**
> object postSmtpTestForAppSettings()

Send test mail for smtp

### Example

```typescript
import {
    AppSettingsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AppSettingsApi(configuration);

const { status, data } = await apiInstance.postSmtpTestForAppSettings();
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
|**200** | Succeeded to send test mail for smtp |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postV5SchemaMigrationForAppSettings**
> PostV5SchemaMigrationForAppSettings200Response postV5SchemaMigrationForAppSettings()

Update V5SchemaMigration

### Example

```typescript
import {
    AppSettingsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AppSettingsApi(configuration);

const { status, data } = await apiInstance.postV5SchemaMigrationForAppSettings();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**PostV5SchemaMigrationForAppSettings200Response**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to get V5SchemaMigration |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putAppSettingForAppSettings**
> PutAppSettingForAppSettings200Response putAppSettingForAppSettings(appSettingPutParams)

Update app setting

### Example

```typescript
import {
    AppSettingsApi,
    Configuration,
    AppSettingPutParams
} from './api';

const configuration = new Configuration();
const apiInstance = new AppSettingsApi(configuration);

let appSettingPutParams: AppSettingPutParams; //

const { status, data } = await apiInstance.putAppSettingForAppSettings(
    appSettingPutParams
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appSettingPutParams** | **AppSettingPutParams**|  | |


### Return type

**PutAppSettingForAppSettings200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to update app setting |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putFileUploadSettingsForAppSettings**
> PutFileUploadSettingsForAppSettings200Response putFileUploadSettingsForAppSettings(fileUploadSettingParams)

Update fileUploadSetting

### Example

```typescript
import {
    AppSettingsApi,
    Configuration,
    FileUploadSettingParams
} from './api';

const configuration = new Configuration();
const apiInstance = new AppSettingsApi(configuration);

let fileUploadSettingParams: FileUploadSettingParams; //

const { status, data } = await apiInstance.putFileUploadSettingsForAppSettings(
    fileUploadSettingParams
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileUploadSettingParams** | **FileUploadSettingParams**|  | |


### Return type

**PutFileUploadSettingsForAppSettings200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to update fileUploadSetting |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putOauth2SettingForAppSettings**
> PutOauth2SettingForAppSettings200Response putOauth2SettingForAppSettings(putOauth2SettingForAppSettingsRequest)

Update OAuth 2.0 setting for email

### Example

```typescript
import {
    AppSettingsApi,
    Configuration,
    PutOauth2SettingForAppSettingsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AppSettingsApi(configuration);

let putOauth2SettingForAppSettingsRequest: PutOauth2SettingForAppSettingsRequest; //

const { status, data } = await apiInstance.putOauth2SettingForAppSettings(
    putOauth2SettingForAppSettingsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putOauth2SettingForAppSettingsRequest** | **PutOauth2SettingForAppSettingsRequest**|  | |


### Return type

**PutOauth2SettingForAppSettings200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to update OAuth 2.0 setting |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putSesSettingForAppSettings**
> SesSettingResponseParams putSesSettingForAppSettings(sesSettingParams)

Update ses setting

### Example

```typescript
import {
    AppSettingsApi,
    Configuration,
    SesSettingParams
} from './api';

const configuration = new Configuration();
const apiInstance = new AppSettingsApi(configuration);

let sesSettingParams: SesSettingParams; //

const { status, data } = await apiInstance.putSesSettingForAppSettings(
    sesSettingParams
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sesSettingParams** | **SesSettingParams**|  | |


### Return type

**SesSettingResponseParams**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to update ses setting |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putSiteUrlSettingForAppSettings**
> PutSiteUrlSettingForAppSettings200Response putSiteUrlSettingForAppSettings(siteUrlSettingParams)

Update site url setting

### Example

```typescript
import {
    AppSettingsApi,
    Configuration,
    SiteUrlSettingParams
} from './api';

const configuration = new Configuration();
const apiInstance = new AppSettingsApi(configuration);

let siteUrlSettingParams: SiteUrlSettingParams; //

const { status, data } = await apiInstance.putSiteUrlSettingForAppSettings(
    siteUrlSettingParams
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteUrlSettingParams** | **SiteUrlSettingParams**|  | |


### Return type

**PutSiteUrlSettingForAppSettings200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to update site url setting |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putSmtpSettingForAppSettings**
> PutSmtpSettingForAppSettings200Response putSmtpSettingForAppSettings(smtpSettingParams)

Update smtp setting

### Example

```typescript
import {
    AppSettingsApi,
    Configuration,
    SmtpSettingParams
} from './api';

const configuration = new Configuration();
const apiInstance = new AppSettingsApi(configuration);

let smtpSettingParams: SmtpSettingParams; //

const { status, data } = await apiInstance.putSmtpSettingForAppSettings(
    smtpSettingParams
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **smtpSettingParams** | **SmtpSettingParams**|  | |


### Return type

**PutSmtpSettingForAppSettings200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to update smtp setting |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

