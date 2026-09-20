# UsersManagementApi

All URIs are relative to *https://demo.growi.org/_api/v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteRemoveByIdForUsers**](#deleteremovebyidforusers) | **DELETE** /users/{id}/remove | /users/{id}/remove|
|[**deleteRemoveByIdForUsersExternalAccounts**](#deleteremovebyidforusersexternalaccounts) | **DELETE** /users/external-accounts/{id}/remove | /users/external-accounts/{id}/remove|
|[**getExternalAccountsForUsers**](#getexternalaccountsforusers) | **GET** /users/external-accounts | /users/external-accounts|
|[**postInviteForUsers**](#postinviteforusers) | **POST** /users/invite | /users/invite|
|[**putActivateByIdForUsers**](#putactivatebyidforusers) | **PUT** /users/{id}/activate | /users/{id}/activate|
|[**putDeactivateByIdForUsers**](#putdeactivatebyidforusers) | **PUT** /users/{id}/deactivate | /users/{id}/deactivate|
|[**putGrantAdminByIdForUsers**](#putgrantadminbyidforusers) | **PUT** /users/{id}/grant-admin | /users/{id}/grant-admin|
|[**putGrantReadOnlyByIdForUsers**](#putgrantreadonlybyidforusers) | **PUT** /users/{id}/grant-read-only | /users/{id}/grant-read-only|
|[**putResetPasswordEmailForUsers**](#putresetpasswordemailforusers) | **PUT** /users/reset-password-email | /users/reset-password-email|
|[**putResetPasswordForUsers**](#putresetpasswordforusers) | **PUT** /users/reset-password | /users/reset-password|
|[**putRevokeAdminByIdForUsers**](#putrevokeadminbyidforusers) | **PUT** /users/{id}/revoke-admin | /users/{id}/revoke-admin|
|[**putRevokeReadOnlyByIdForUsers**](#putrevokereadonlybyidforusers) | **PUT** /users/{id}/revoke-read-only | /users/{id}/revoke-read-only|
|[**putSendInvitationEmailForUsers**](#putsendinvitationemailforusers) | **PUT** /users/send-invitation-email | /users/send-invitation-email|
|[**putUpdateImageUrlCacheForUsers**](#putupdateimageurlcacheforusers) | **PUT** /users/update.imageUrlCache | /users/update.imageUrlCache|

# **deleteRemoveByIdForUsers**
> DeleteRemoveByIdForUsers200Response deleteRemoveByIdForUsers()

Delete user

### Example

```typescript
import {
    UsersManagementApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersManagementApi(configuration);

let id: string; //id of delete user (default to undefined)

const { status, data } = await apiInstance.deleteRemoveByIdForUsers(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | id of delete user | defaults to undefined|


### Return type

**DeleteRemoveByIdForUsers200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Deleting user success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteRemoveByIdForUsersExternalAccounts**
> DeleteRemoveByIdForUsersExternalAccounts200Response deleteRemoveByIdForUsersExternalAccounts()

Delete ExternalAccount

### Example

```typescript
import {
    UsersManagementApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersManagementApi(configuration);

let id: string; //id of ExternalAccount (default to undefined)

const { status, data } = await apiInstance.deleteRemoveByIdForUsersExternalAccounts(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | id of ExternalAccount | defaults to undefined|


### Return type

**DeleteRemoveByIdForUsersExternalAccounts200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | External Account is removed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getExternalAccountsForUsers**
> GetUsers200Response getExternalAccountsForUsers()

Get external-account

### Example

```typescript
import {
    UsersManagementApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersManagementApi(configuration);

let page: number; //page number (optional) (default to undefined)

const { status, data } = await apiInstance.getExternalAccountsForUsers(
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | page number | (optional) defaults to undefined|


### Return type

**GetUsers200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | external-account are fetched |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postInviteForUsers**
> PostInviteForUsers200Response postInviteForUsers()

Create new users and send Emails

### Example

```typescript
import {
    UsersManagementApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersManagementApi(configuration);

let shapedEmailList: object; //Invitation emailList (optional) (default to undefined)
let sendEmail: boolean; //Whether to send mail (optional) (default to undefined)

const { status, data } = await apiInstance.postInviteForUsers(
    shapedEmailList,
    sendEmail
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **shapedEmailList** | **object** | Invitation emailList | (optional) defaults to undefined|
| **sendEmail** | [**boolean**] | Whether to send mail | (optional) defaults to undefined|


### Return type

**PostInviteForUsers200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Inviting user success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putActivateByIdForUsers**
> PutGrantAdminByIdForUsers200Response putActivateByIdForUsers()

Activate user

### Example

```typescript
import {
    UsersManagementApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersManagementApi(configuration);

let id: string; //id of activate user (default to undefined)

const { status, data } = await apiInstance.putActivateByIdForUsers(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | id of activate user | defaults to undefined|


### Return type

**PutGrantAdminByIdForUsers200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Activationg user success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putDeactivateByIdForUsers**
> PutGrantAdminByIdForUsers200Response putDeactivateByIdForUsers()

Deactivate user

### Example

```typescript
import {
    UsersManagementApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersManagementApi(configuration);

let id: string; //id of deactivate user (default to undefined)

const { status, data } = await apiInstance.putDeactivateByIdForUsers(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | id of deactivate user | defaults to undefined|


### Return type

**PutGrantAdminByIdForUsers200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Deactivationg user success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putGrantAdminByIdForUsers**
> PutGrantAdminByIdForUsers200Response putGrantAdminByIdForUsers()

Grant user admin

### Example

```typescript
import {
    UsersManagementApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersManagementApi(configuration);

let id: string; //id of user for admin (default to undefined)

const { status, data } = await apiInstance.putGrantAdminByIdForUsers(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | id of user for admin | defaults to undefined|


### Return type

**PutGrantAdminByIdForUsers200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Grant user admin success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putGrantReadOnlyByIdForUsers**
> PutGrantAdminByIdForUsers200Response putGrantReadOnlyByIdForUsers()

Grant user read only access

### Example

```typescript
import {
    UsersManagementApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersManagementApi(configuration);

let id: string; //id of user for read only access (default to undefined)

const { status, data } = await apiInstance.putGrantReadOnlyByIdForUsers(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | id of user for read only access | defaults to undefined|


### Return type

**PutGrantAdminByIdForUsers200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Grant user read only access success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putResetPasswordEmailForUsers**
> putResetPasswordEmailForUsers()

send new password email

### Example

```typescript
import {
    UsersManagementApi,
    Configuration,
    PutResetPasswordEmailForUsersRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersManagementApi(configuration);

let putResetPasswordEmailForUsersRequest: PutResetPasswordEmailForUsersRequest; // (optional)

const { status, data } = await apiInstance.putResetPasswordEmailForUsers(
    putResetPasswordEmailForUsersRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putResetPasswordEmailForUsersRequest** | **PutResetPasswordEmailForUsersRequest**|  | |


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
|**200** | success send new password email |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putResetPasswordForUsers**
> PutResetPasswordForUsers200Response putResetPasswordForUsers()

update imageUrlCache

### Example

```typescript
import {
    UsersManagementApi,
    Configuration,
    PutResetPasswordForUsersRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersManagementApi(configuration);

let putResetPasswordForUsersRequest: PutResetPasswordForUsersRequest; // (optional)

const { status, data } = await apiInstance.putResetPasswordForUsers(
    putResetPasswordForUsersRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putResetPasswordForUsersRequest** | **PutResetPasswordForUsersRequest**|  | |


### Return type

**PutResetPasswordForUsers200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | success reset password |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putRevokeAdminByIdForUsers**
> PutRevokeAdminByIdForUsers200Response putRevokeAdminByIdForUsers()

Revoke user admin

### Example

```typescript
import {
    UsersManagementApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersManagementApi(configuration);

let id: string; //id of user for revoking admin (default to undefined)

const { status, data } = await apiInstance.putRevokeAdminByIdForUsers(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | id of user for revoking admin | defaults to undefined|


### Return type

**PutRevokeAdminByIdForUsers200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Revoke user admin success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putRevokeReadOnlyByIdForUsers**
> PutGrantAdminByIdForUsers200Response putRevokeReadOnlyByIdForUsers()

Revoke user read only access

### Example

```typescript
import {
    UsersManagementApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersManagementApi(configuration);

let id: string; //id of user for removing read only access (default to undefined)

const { status, data } = await apiInstance.putRevokeReadOnlyByIdForUsers(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | id of user for removing read only access | defaults to undefined|


### Return type

**PutGrantAdminByIdForUsers200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Revoke user read only access success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putSendInvitationEmailForUsers**
> PutSendInvitationEmailForUsers200Response putSendInvitationEmailForUsers()

send invitation email

### Example

```typescript
import {
    UsersManagementApi,
    Configuration,
    PutSendInvitationEmailForUsersRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersManagementApi(configuration);

let putSendInvitationEmailForUsersRequest: PutSendInvitationEmailForUsersRequest; // (optional)

const { status, data } = await apiInstance.putSendInvitationEmailForUsers(
    putSendInvitationEmailForUsersRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putSendInvitationEmailForUsersRequest** | **PutSendInvitationEmailForUsersRequest**|  | |


### Return type

**PutSendInvitationEmailForUsers200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | success send invitation email |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putUpdateImageUrlCacheForUsers**
> object putUpdateImageUrlCacheForUsers()

update imageUrlCache

### Example

```typescript
import {
    UsersManagementApi,
    Configuration,
    PutUpdateImageUrlCacheForUsersRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersManagementApi(configuration);

let putUpdateImageUrlCacheForUsersRequest: PutUpdateImageUrlCacheForUsersRequest; // (optional)

const { status, data } = await apiInstance.putUpdateImageUrlCacheForUsers(
    putUpdateImageUrlCacheForUsersRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putUpdateImageUrlCacheForUsersRequest** | **PutUpdateImageUrlCacheForUsersRequest**|  | |


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
|**200** | success creating imageUrlCached |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

