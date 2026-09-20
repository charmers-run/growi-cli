# GeneralSettingApi

All URIs are relative to *https://demo.growi.org/_api/v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteAccessTokenForPersonalSetting**](#deleteaccesstokenforpersonalsetting) | **DELETE** /personal-setting/access-token/ | /personal-setting/access-token|
|[**deleteAllForPersonalSettingAccessToken**](#deleteallforpersonalsettingaccesstoken) | **DELETE** /personal-setting/access-token/all | /personal-setting/access-token/all|
|[**getAccessTokenForPersonalSetting**](#getaccesstokenforpersonalsetting) | **GET** /personal-setting/access-token | /personal-setting/access-token|
|[**getExternalAccountsForPersonalSetting**](#getexternalaccountsforpersonalsetting) | **GET** /personal-setting/external-accounts | /personal-setting/external-accounts|
|[**getIsPasswordSetForPersonalSetting**](#getispasswordsetforpersonalsetting) | **GET** /personal-setting/is-password-set | /personal-setting|
|[**getPersonalSetting**](#getpersonalsetting) | **GET** /personal-setting | /personal-setting|
|[**postAccessTokenForPersonalSetting**](#postaccesstokenforpersonalsetting) | **POST** /personal-setting/access-token | /personal-setting/access-token|
|[**putApiTokenForPersonalSetting**](#putapitokenforpersonalsetting) | **PUT** /personal-setting/api-token | /personal-setting/api-token|
|[**putAssociateLdapForPersonalSetting**](#putassociateldapforpersonalsetting) | **PUT** /personal-setting/associate-ldap | /personal-setting/associate-ldap|
|[**putDisassociateLdapForPersonalSetting**](#putdisassociateldapforpersonalsetting) | **PUT** /personal-setting/disassociate-ldap | /personal-setting/disassociate-ldap|
|[**putImageTypeForPersonalSetting**](#putimagetypeforpersonalsetting) | **PUT** /personal-setting/image-type | /personal-setting/image-type|
|[**putPasswordForPersonalSetting**](#putpasswordforpersonalsetting) | **PUT** /personal-setting/password | /personal-setting/password|
|[**putPersonalSetting**](#putpersonalsetting) | **PUT** /personal-setting | /personal-setting|

# **deleteAccessTokenForPersonalSetting**
> deleteAccessTokenForPersonalSetting()

Delete access token

### Example

```typescript
import {
    GeneralSettingApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GeneralSettingApi(configuration);

const { status, data } = await apiInstance.deleteAccessTokenForPersonalSetting();
```

### Parameters
This endpoint does not have any parameters.


### Return type

void (empty response body)

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | succeded to delete access token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteAllForPersonalSettingAccessToken**
> deleteAllForPersonalSettingAccessToken()

Delete all access tokens

### Example

```typescript
import {
    GeneralSettingApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GeneralSettingApi(configuration);

const { status, data } = await apiInstance.deleteAllForPersonalSettingAccessToken();
```

### Parameters
This endpoint does not have any parameters.


### Return type

void (empty response body)

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | succeded to delete all access tokens |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAccessTokenForPersonalSetting**
> GetAccessTokenForPersonalSetting200Response getAccessTokenForPersonalSetting()

Get access token

### Example

```typescript
import {
    GeneralSettingApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GeneralSettingApi(configuration);

const { status, data } = await apiInstance.getAccessTokenForPersonalSetting();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetAccessTokenForPersonalSetting200Response**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | succded to get access token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getExternalAccountsForPersonalSetting**
> GetExternalAccountsForPersonalSetting200Response getExternalAccountsForPersonalSetting()

Get external accounts that linked current user

### Example

```typescript
import {
    GeneralSettingApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GeneralSettingApi(configuration);

const { status, data } = await apiInstance.getExternalAccountsForPersonalSetting();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetExternalAccountsForPersonalSetting200Response**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | external accounts |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getIsPasswordSetForPersonalSetting**
> GetIsPasswordSetForPersonalSetting200Response getIsPasswordSetForPersonalSetting()

Get whether a password has been set

### Example

```typescript
import {
    GeneralSettingApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GeneralSettingApi(configuration);

const { status, data } = await apiInstance.getIsPasswordSetForPersonalSetting();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetIsPasswordSetForPersonalSetting200Response**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Whether a password has been set |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPersonalSetting**
> GetPersonalSetting200Response getPersonalSetting()

Get personal parameters

### Example

```typescript
import {
    GeneralSettingApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GeneralSettingApi(configuration);

const { status, data } = await apiInstance.getPersonalSetting();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetPersonalSetting200Response**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | params of personal |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postAccessTokenForPersonalSetting**
> PostAccessTokenForPersonalSetting200Response postAccessTokenForPersonalSetting()

Generate access token

### Example

```typescript
import {
    GeneralSettingApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GeneralSettingApi(configuration);

const { status, data } = await apiInstance.postAccessTokenForPersonalSetting();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**PostAccessTokenForPersonalSetting200Response**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | succeded to create access token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putApiTokenForPersonalSetting**
> PutImageTypeForPersonalSetting200Response putApiTokenForPersonalSetting()

Update user api token

### Example

```typescript
import {
    GeneralSettingApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GeneralSettingApi(configuration);

const { status, data } = await apiInstance.putApiTokenForPersonalSetting();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**PutImageTypeForPersonalSetting200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | succeded to update user api token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putAssociateLdapForPersonalSetting**
> PutAssociateLdapForPersonalSetting200Response putAssociateLdapForPersonalSetting(putAssociateLdapForPersonalSettingRequest)

associate Ldap account

### Example

```typescript
import {
    GeneralSettingApi,
    Configuration,
    PutAssociateLdapForPersonalSettingRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new GeneralSettingApi(configuration);

let putAssociateLdapForPersonalSettingRequest: PutAssociateLdapForPersonalSettingRequest; //

const { status, data } = await apiInstance.putAssociateLdapForPersonalSetting(
    putAssociateLdapForPersonalSettingRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putAssociateLdapForPersonalSettingRequest** | **PutAssociateLdapForPersonalSettingRequest**|  | |


### Return type

**PutAssociateLdapForPersonalSetting200Response**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | succeded to associate Ldap account |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putDisassociateLdapForPersonalSetting**
> PutDisassociateLdapForPersonalSetting200Response putDisassociateLdapForPersonalSetting(disassociateUser)

disassociate Ldap account

### Example

```typescript
import {
    GeneralSettingApi,
    Configuration,
    DisassociateUser
} from './api';

const configuration = new Configuration();
const apiInstance = new GeneralSettingApi(configuration);

let disassociateUser: DisassociateUser; //

const { status, data } = await apiInstance.putDisassociateLdapForPersonalSetting(
    disassociateUser
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **disassociateUser** | **DisassociateUser**|  | |


### Return type

**PutDisassociateLdapForPersonalSetting200Response**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | succeded to disassociate Ldap account |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putImageTypeForPersonalSetting**
> PutImageTypeForPersonalSetting200Response putImageTypeForPersonalSetting(putImageTypeForPersonalSettingRequest)

Update user image type

### Example

```typescript
import {
    GeneralSettingApi,
    Configuration,
    PutImageTypeForPersonalSettingRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new GeneralSettingApi(configuration);

let putImageTypeForPersonalSettingRequest: PutImageTypeForPersonalSettingRequest; //

const { status, data } = await apiInstance.putImageTypeForPersonalSetting(
    putImageTypeForPersonalSettingRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putImageTypeForPersonalSettingRequest** | **PutImageTypeForPersonalSettingRequest**|  | |


### Return type

**PutImageTypeForPersonalSetting200Response**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | succeded to update user image type |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putPasswordForPersonalSetting**
> PutPasswordForPersonalSetting200Response putPasswordForPersonalSetting(putPasswordForPersonalSettingRequest)

Update user password

### Example

```typescript
import {
    GeneralSettingApi,
    Configuration,
    PutPasswordForPersonalSettingRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new GeneralSettingApi(configuration);

let putPasswordForPersonalSettingRequest: PutPasswordForPersonalSettingRequest; //

const { status, data } = await apiInstance.putPasswordForPersonalSetting(
    putPasswordForPersonalSettingRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putPasswordForPersonalSettingRequest** | **PutPasswordForPersonalSettingRequest**|  | |


### Return type

**PutPasswordForPersonalSetting200Response**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | user password |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putPersonalSetting**
> PutPersonalSetting200Response putPersonalSetting(personalSettings)

Update personal setting

### Example

```typescript
import {
    GeneralSettingApi,
    Configuration,
    PersonalSettings
} from './api';

const configuration = new Configuration();
const apiInstance = new GeneralSettingApi(configuration);

let personalSettings: PersonalSettings; //

const { status, data } = await apiInstance.putPersonalSetting(
    personalSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **personalSettings** | **PersonalSettings**|  | |


### Return type

**PutPersonalSetting200Response**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | params of personal |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

