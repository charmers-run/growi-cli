# UsersApi

All URIs are relative to *https://demo.growi.org/_api/v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getListForUsers**](#getlistforusers) | **GET** /users/list | /users/list|
|[**getRecentByIdForUsers**](#getrecentbyidforusers) | **GET** /users/{id}/recent | /usersIdReacent|
|[**getUsernamesForUsers**](#getusernamesforusers) | **GET** /users/usernames | /users/usernames|
|[**getUsers**](#getusers) | **GET** /users | /users|
|[**postCompleteRegistration**](#postcompleteregistration) | **POST** /complete-registration | /complete-registration|
|[**postForgotPassword**](#postforgotpassword) | **POST** /forgot-password | Request password reset|
|[**postInvited**](#postinvited) | **POST** /invited | /invited|
|[**postLogin**](#postlogin) | **POST** /login | /login|
|[**postLogout**](#postlogout) | **POST** /logout | Logout user|
|[**postRegister**](#postregister) | **POST** /register | /register|
|[**putForgotPassword**](#putforgotpassword) | **PUT** /forgot-password | Reset password|

# **getListForUsers**
> GetListForUsers200Response getListForUsers()

Get list of users

### Example

```typescript
import {
    UsersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let userIds: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getListForUsers(
    userIds
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userIds** | [**string**] |  | (optional) defaults to undefined|


### Return type

**GetListForUsers200Response**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to get list of users. |  -  |
|**403** | Forbidden - insufficient permissions |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRecentByIdForUsers**
> GetUsers200Response getRecentByIdForUsers()


### Example

```typescript
import {
    UsersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let id: string; //id of user (default to undefined)

const { status, data } = await apiInstance.getRecentByIdForUsers(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | id of user | defaults to undefined|


### Return type

**GetUsers200Response**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | users recent created pages are fetched |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUsernamesForUsers**
> GetUsernamesForUsers200Response getUsernamesForUsers()

Get list of usernames. The query matches usernames by case-insensitive substring.

### Example

```typescript
import {
    UsersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let q: string; // (optional) (default to undefined)
let offset: number; // (optional) (default to undefined)
let limit: number; // (optional) (default to undefined)
let _options: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getUsernamesForUsers(
    q,
    offset,
    limit,
    _options
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **q** | [**string**] |  | (optional) defaults to undefined|
| **offset** | [**number**] |  | (optional) defaults to undefined|
| **limit** | [**number**] |  | (optional) defaults to undefined|
| **_options** | [**string**] |  | (optional) defaults to undefined|


### Return type

**GetUsernamesForUsers200Response**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to get list of usernames. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUsers**
> GetUsers200Response getUsers()

Select selected columns from users order by asc or desc

### Example

```typescript
import {
    UsersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let page: number; //page number (optional) (default to undefined)
let selectedStatusList: string; //status list (optional) (default to undefined)
let searchText: string; //For incremental search value from input box (optional) (default to undefined)
let sortOrder: string; //asc or desc (optional) (default to undefined)
let sort: string; //sorting column (optional) (default to undefined)
let forceIncludeAttributes: string; //force include attributes (optional) (default to undefined)

const { status, data } = await apiInstance.getUsers(
    page,
    selectedStatusList,
    searchText,
    sortOrder,
    sort,
    forceIncludeAttributes
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | page number | (optional) defaults to undefined|
| **selectedStatusList** | [**string**] | status list | (optional) defaults to undefined|
| **searchText** | [**string**] | For incremental search value from input box | (optional) defaults to undefined|
| **sortOrder** | [**string**] | asc or desc | (optional) defaults to undefined|
| **sort** | [**string**] | sorting column | (optional) defaults to undefined|
| **forceIncludeAttributes** | [**string**] | force include attributes | (optional) defaults to undefined|


### Return type

**GetUsers200Response**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | users are fetched |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postCompleteRegistration**
> PostCompleteRegistration200Response postCompleteRegistration(postCompleteRegistrationRequest)


### Example

```typescript
import {
    UsersApi,
    Configuration,
    PostCompleteRegistrationRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let postCompleteRegistrationRequest: PostCompleteRegistrationRequest; //

const { status, data } = await apiInstance.postCompleteRegistration(
    postCompleteRegistrationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postCompleteRegistrationRequest** | **PostCompleteRegistrationRequest**|  | |


### Return type

**PostCompleteRegistration200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | User activation successful |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postForgotPassword**
> object postForgotPassword(postForgotPasswordRequest)


### Example

```typescript
import {
    UsersApi,
    Configuration,
    PostForgotPasswordRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let postForgotPasswordRequest: PostForgotPasswordRequest; //

const { status, data } = await apiInstance.postForgotPassword(
    postForgotPasswordRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postForgotPasswordRequest** | **PostForgotPasswordRequest**|  | |


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
|**200** | Password reset request processed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postInvited**
> PostInvited200Response postInvited(postInvitedRequest)

Activate invited user

### Example

```typescript
import {
    UsersApi,
    Configuration,
    PostInvitedRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let postInvitedRequest: PostInvitedRequest; //

const { status, data } = await apiInstance.postInvited(
    postInvitedRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postInvitedRequest** | **PostInvitedRequest**|  | |


### Return type

**PostInvited200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | User activated successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postLogin**
> PostCompleteRegistration200Response postLogin(postLoginRequest)


### Example

```typescript
import {
    UsersApi,
    Configuration,
    PostLoginRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let postLoginRequest: PostLoginRequest; //

const { status, data } = await apiInstance.postLogin(
    postLoginRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postLoginRequest** | **PostLoginRequest**|  | |


### Return type

**PostCompleteRegistration200Response**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Login successful |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postLogout**
> postLogout()

Logout the currently authenticated user

### Example

```typescript
import {
    UsersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

const { status, data } = await apiInstance.postLogout();
```

### Parameters
This endpoint does not have any parameters.


### Return type

void (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully logged out |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postRegister**
> PostCompleteRegistration200Response postRegister(postRegisterRequest)


### Example

```typescript
import {
    UsersApi,
    Configuration,
    PostRegisterRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let postRegisterRequest: PostRegisterRequest; //

const { status, data } = await apiInstance.postRegister(
    postRegisterRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postRegisterRequest** | **PostRegisterRequest**|  | |


### Return type

**PostCompleteRegistration200Response**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Register successful |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putForgotPassword**
> PutForgotPassword200Response putForgotPassword(putForgotPasswordRequest)


### Example

```typescript
import {
    UsersApi,
    Configuration,
    PutForgotPasswordRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let putForgotPasswordRequest: PutForgotPasswordRequest; //

const { status, data } = await apiInstance.putForgotPassword(
    putForgotPasswordRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putForgotPasswordRequest** | **PutForgotPasswordRequest**|  | |


### Return type

**PutForgotPassword200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Password reset successful |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

