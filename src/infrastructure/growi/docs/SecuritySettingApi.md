# SecuritySettingApi

All URIs are relative to *https://demo.growi.org/_api/v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteAllShareLinksForSecuritySetting**](#deleteallsharelinksforsecuritysetting) | **DELETE** /security-setting/all-share-links | /security-setting/all-share-links|
|[**getAllShareLinksForSecuritySetting**](#getallsharelinksforsecuritysetting) | **GET** /security-setting/all-share-links | /security-setting/all-share-links|
|[**getAuthenticationForSecuritySetting**](#getauthenticationforsecuritysetting) | **GET** /security-setting/authentication | /security-setting/authentication|
|[**getSecuritySetting**](#getsecuritysetting) | **GET** /security-setting/ | |
|[**putEnabledForSecuritySettingAuthentication**](#putenabledforsecuritysettingauthentication) | **PUT** /security-setting/authentication/enabled | |
|[**putGeneralSettingForSecuritySetting**](#putgeneralsettingforsecuritysetting) | **PUT** /security-setting/general-setting | /security-setting/general-setting|
|[**putGithubOauthForSecuritySetting**](#putgithuboauthforsecuritysetting) | **PUT** /security-setting/github-oauth | /security-setting/github-oauth|
|[**putGoogleOauthForSecuritySetting**](#putgoogleoauthforsecuritysetting) | **PUT** /security-setting/google-oauth | /security-setting/google-oauth|
|[**putLdapForSecuritySetting**](#putldapforsecuritysetting) | **PUT** /security-setting/ldap | /security-setting/ldap|
|[**putLocalSettingForSecuritySetting**](#putlocalsettingforsecuritysetting) | **PUT** /security-setting/local-setting | /security-setting/local-setting|
|[**putOidcForSecuritySetting**](#putoidcforsecuritysetting) | **PUT** /security-setting/oidc | /security-setting/oidc|
|[**putSamlForSecuritySetting**](#putsamlforsecuritysetting) | **PUT** /security-setting/saml | /security-setting/saml|
|[**putShareLinkSettingForSecuritySetting**](#putsharelinksettingforsecuritysetting) | **PUT** /security-setting/share-link-setting | /security-setting/share-link-setting|

# **deleteAllShareLinksForSecuritySetting**
> DeleteAllShareLinksForSecuritySetting200Response deleteAllShareLinksForSecuritySetting()

Delete All ShareLinks at Share Link Setting

### Example

```typescript
import {
    SecuritySettingApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SecuritySettingApi(configuration);

const { status, data } = await apiInstance.deleteAllShareLinksForSecuritySetting();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**DeleteAllShareLinksForSecuritySetting200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | succeed to delete all share links |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAllShareLinksForSecuritySetting**
> GetAllShareLinksForSecuritySetting200Response getAllShareLinksForSecuritySetting()

Get All ShareLinks at Share Link Setting

### Example

```typescript
import {
    SecuritySettingApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SecuritySettingApi(configuration);

const { status, data } = await apiInstance.getAllShareLinksForSecuritySetting();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetAllShareLinksForSecuritySetting200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | all share links |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAuthenticationForSecuritySetting**
> GetAuthenticationForSecuritySetting200Response getAuthenticationForSecuritySetting()

Get setup strategies for passport

### Example

```typescript
import {
    SecuritySettingApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SecuritySettingApi(configuration);

const { status, data } = await apiInstance.getAuthenticationForSecuritySetting();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetAuthenticationForSecuritySetting200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | params of setup strategies |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSecuritySetting**
> GetSecuritySetting200Response getSecuritySetting()

Get security paramators

### Example

```typescript
import {
    SecuritySettingApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SecuritySettingApi(configuration);

const { status, data } = await apiInstance.getSecuritySetting();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetSecuritySetting200Response**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | params of security |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putEnabledForSecuritySettingAuthentication**
> object putEnabledForSecuritySettingAuthentication(putEnabledForSecuritySettingAuthenticationRequest)

Update authentication isEnabled

### Example

```typescript
import {
    SecuritySettingApi,
    Configuration,
    PutEnabledForSecuritySettingAuthenticationRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new SecuritySettingApi(configuration);

let putEnabledForSecuritySettingAuthenticationRequest: PutEnabledForSecuritySettingAuthenticationRequest; //

const { status, data } = await apiInstance.putEnabledForSecuritySettingAuthentication(
    putEnabledForSecuritySettingAuthenticationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putEnabledForSecuritySettingAuthenticationRequest** | **PutEnabledForSecuritySettingAuthenticationRequest**|  | |


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
|**200** | Succeeded to enable authentication |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putGeneralSettingForSecuritySetting**
> GeneralSetting putGeneralSettingForSecuritySetting(generalSetting)

Update GeneralSetting

### Example

```typescript
import {
    SecuritySettingApi,
    Configuration,
    GeneralSetting
} from './api';

const configuration = new Configuration();
const apiInstance = new SecuritySettingApi(configuration);

let generalSetting: GeneralSetting; //

const { status, data } = await apiInstance.putGeneralSettingForSecuritySetting(
    generalSetting
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **generalSetting** | **GeneralSetting**|  | |


### Return type

**GeneralSetting**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to update general Setting |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putGithubOauthForSecuritySetting**
> PutGithubOauthForSecuritySetting200Response putGithubOauthForSecuritySetting(gitHubOAuthSetting)

Update github OAuth

### Example

```typescript
import {
    SecuritySettingApi,
    Configuration,
    GitHubOAuthSetting
} from './api';

const configuration = new Configuration();
const apiInstance = new SecuritySettingApi(configuration);

let gitHubOAuthSetting: GitHubOAuthSetting; //

const { status, data } = await apiInstance.putGithubOauthForSecuritySetting(
    gitHubOAuthSetting
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **gitHubOAuthSetting** | **GitHubOAuthSetting**|  | |


### Return type

**PutGithubOauthForSecuritySetting200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to github OAuth |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putGoogleOauthForSecuritySetting**
> PutGoogleOauthForSecuritySetting200Response putGoogleOauthForSecuritySetting(googleOAuthSetting)

Update google OAuth

### Example

```typescript
import {
    SecuritySettingApi,
    Configuration,
    GoogleOAuthSetting
} from './api';

const configuration = new Configuration();
const apiInstance = new SecuritySettingApi(configuration);

let googleOAuthSetting: GoogleOAuthSetting; //

const { status, data } = await apiInstance.putGoogleOauthForSecuritySetting(
    googleOAuthSetting
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **googleOAuthSetting** | **GoogleOAuthSetting**|  | |


### Return type

**PutGoogleOauthForSecuritySetting200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to google OAuth |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putLdapForSecuritySetting**
> PutLdapForSecuritySetting200Response putLdapForSecuritySetting(ldapAuthSetting)

Update LDAP setting

### Example

```typescript
import {
    SecuritySettingApi,
    Configuration,
    LdapAuthSetting
} from './api';

const configuration = new Configuration();
const apiInstance = new SecuritySettingApi(configuration);

let ldapAuthSetting: LdapAuthSetting; //

const { status, data } = await apiInstance.putLdapForSecuritySetting(
    ldapAuthSetting
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ldapAuthSetting** | **LdapAuthSetting**|  | |


### Return type

**PutLdapForSecuritySetting200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to update LDAP setting |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putLocalSettingForSecuritySetting**
> PutLocalSettingForSecuritySetting200Response putLocalSettingForSecuritySetting(localSetting)

Update LocalSetting

### Example

```typescript
import {
    SecuritySettingApi,
    Configuration,
    LocalSetting
} from './api';

const configuration = new Configuration();
const apiInstance = new SecuritySettingApi(configuration);

let localSetting: LocalSetting; //

const { status, data } = await apiInstance.putLocalSettingForSecuritySetting(
    localSetting
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **localSetting** | **LocalSetting**|  | |


### Return type

**PutLocalSettingForSecuritySetting200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to update local Setting |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putOidcForSecuritySetting**
> PutOidcForSecuritySetting200Response putOidcForSecuritySetting(oidcAuthSetting)

Update OpenID Connect setting

### Example

```typescript
import {
    SecuritySettingApi,
    Configuration,
    OidcAuthSetting
} from './api';

const configuration = new Configuration();
const apiInstance = new SecuritySettingApi(configuration);

let oidcAuthSetting: OidcAuthSetting; //

const { status, data } = await apiInstance.putOidcForSecuritySetting(
    oidcAuthSetting
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **oidcAuthSetting** | **OidcAuthSetting**|  | |


### Return type

**PutOidcForSecuritySetting200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to update OpenID Connect setting |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putSamlForSecuritySetting**
> PutSamlForSecuritySetting200Response putSamlForSecuritySetting(samlAuthSetting)

Update SAML setting

### Example

```typescript
import {
    SecuritySettingApi,
    Configuration,
    SamlAuthSetting
} from './api';

const configuration = new Configuration();
const apiInstance = new SecuritySettingApi(configuration);

let samlAuthSetting: SamlAuthSetting; //

const { status, data } = await apiInstance.putSamlForSecuritySetting(
    samlAuthSetting
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **samlAuthSetting** | **SamlAuthSetting**|  | |


### Return type

**PutSamlForSecuritySetting200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to update SAML setting |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putShareLinkSettingForSecuritySetting**
> PutShareLinkSettingForSecuritySetting200Response putShareLinkSettingForSecuritySetting(shareLinkSetting)

Update ShareLink Setting

### Example

```typescript
import {
    SecuritySettingApi,
    Configuration,
    ShareLinkSetting
} from './api';

const configuration = new Configuration();
const apiInstance = new SecuritySettingApi(configuration);

let shareLinkSetting: ShareLinkSetting; //

const { status, data } = await apiInstance.putShareLinkSettingForSecuritySetting(
    shareLinkSetting
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **shareLinkSetting** | **ShareLinkSetting**|  | |


### Return type

**PutShareLinkSettingForSecuritySetting200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to update ShareLink Setting |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

