# TemplatesApi

All URIs are relative to *https://demo.growi.org/_api/v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getPluginTemplatesByLocaleByTemplateIdByReposIdByOrganizationIdForTemplates**](#getplugintemplatesbylocalebytemplateidbyreposidbyorganizationidfortemplates) | **GET** /templates/plugin-templates/{organizationId}/{reposId}/{templateId}/{locale} | /templates/plugin-templates/{organizationId}/{reposId}/{templateId}/{locale}|
|[**getPresetTemplatesByLocaleByTemplateIdForTemplates**](#getpresettemplatesbylocalebytemplateidfortemplates) | **GET** /templates/preset-templates/{templateId}/{locale} | /templates/preset-templates/{templateId}/{locale}|
|[**getTemplates**](#gettemplates) | **GET** /templates | /templates|

# **getPluginTemplatesByLocaleByTemplateIdByReposIdByOrganizationIdForTemplates**
> GetPresetTemplatesByLocaleByTemplateIdForTemplates200Response getPluginTemplatesByLocaleByTemplateIdByReposIdByOrganizationIdForTemplates()

Get a plugin template

### Example

```typescript
import {
    TemplatesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TemplatesApi(configuration);

let organizationId: string; //The organization ID (default to undefined)
let reposId: string; //The repository ID (default to undefined)
let templateId: string; //The template ID (default to undefined)
let locale: string; //The locale (default to undefined)

const { status, data } = await apiInstance.getPluginTemplatesByLocaleByTemplateIdByReposIdByOrganizationIdForTemplates(
    organizationId,
    reposId,
    templateId,
    locale
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] | The organization ID | defaults to undefined|
| **reposId** | [**string**] | The repository ID | defaults to undefined|
| **templateId** | [**string**] | The template ID | defaults to undefined|
| **locale** | [**string**] | The locale | defaults to undefined|


### Return type

**GetPresetTemplatesByLocaleByTemplateIdForTemplates200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPresetTemplatesByLocaleByTemplateIdForTemplates**
> GetPresetTemplatesByLocaleByTemplateIdForTemplates200Response getPresetTemplatesByLocaleByTemplateIdForTemplates()

Get a preset template

### Example

```typescript
import {
    TemplatesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TemplatesApi(configuration);

let templateId: string; //The template ID (default to undefined)
let locale: string; //The locale (default to undefined)

const { status, data } = await apiInstance.getPresetTemplatesByLocaleByTemplateIdForTemplates(
    templateId,
    locale
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **templateId** | [**string**] | The template ID | defaults to undefined|
| **locale** | [**string**] | The locale | defaults to undefined|


### Return type

**GetPresetTemplatesByLocaleByTemplateIdForTemplates200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getTemplates**
> GetTemplates200Response getTemplates()

Get all templates

### Example

```typescript
import {
    TemplatesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TemplatesApi(configuration);

let includeInvalidTemplates: boolean; //Whether to include invalid templates (optional) (default to undefined)

const { status, data } = await apiInstance.getTemplates(
    includeInvalidTemplates
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **includeInvalidTemplates** | [**boolean**] | Whether to include invalid templates | (optional) defaults to undefined|


### Return type

**GetTemplates200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

