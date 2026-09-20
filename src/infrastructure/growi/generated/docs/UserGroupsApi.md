# UserGroupsApi

All URIs are relative to *https://demo.growi.org/_api/v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteUserGroupsById**](#deleteusergroupsbyid) | **DELETE** /user-groups/{id} | /user-groups/{id}|
|[**deleteUsersByUsernameByIdForUserGroups**](#deleteusersbyusernamebyidforusergroups) | **DELETE** /user-groups/{id}/users/{username} | /user-groups/{id}/users/{username}|
|[**getAncestorsForUserGroups**](#getancestorsforusergroups) | **GET** /user-groups/ancestors | /user-groups/ancestors|
|[**getChildrenForUserGroups**](#getchildrenforusergroups) | **GET** /user-groups/children | /user-groups/children|
|[**getPagesByIdForUserGroups**](#getpagesbyidforusergroups) | **GET** /user-groups/{id}/pages | /user-groups/{id}/pages|
|[**getSelectableChildGroups**](#getselectablechildgroups) | **GET** /selectable-child-groups | /selectable-child-groups|
|[**getSelectableParentGroups**](#getselectableparentgroups) | **GET** /selectable-parent-groups | /selectable-parent-groups|
|[**getUnrelatedUsersByIdForUserGroups**](#getunrelatedusersbyidforusergroups) | **GET** /user-groups/{id}/unrelated-users | /user-groups/{id}/unrelated-users|
|[**getUserGroupRelationsByIdForUserGroups**](#getusergrouprelationsbyidforusergroups) | **GET** /user-groups/{id}/user-group-relations | /user-groups/{id}/user-group-relations|
|[**getUserGroups**](#getusergroups) | **GET** /user-groups | /user-groups|
|[**getUserGroupsById**](#getusergroupsbyid) | **GET** /user-groups/{id} | /user-groups/{id}|
|[**getUsersByIdForUserGroups**](#getusersbyidforusergroups) | **GET** /user-groups/{id}/users | /user-groups/{id}/users|
|[**postUserGroups**](#postusergroups) | **POST** /user-groups | /user-groups|
|[**postUsersByUsernameByIdForUserGroups**](#postusersbyusernamebyidforusergroups) | **POST** /user-groups/{id}/users/{username} | /user-groups/{id}/users/{username}|
|[**putUserGroupsById**](#putusergroupsbyid) | **PUT** /user-groups/{id} | /user-groups/{id}|

# **deleteUserGroupsById**
> DeleteUserGroupsById200Response deleteUserGroupsById()

Deletes userGroup

### Example

```typescript
import {
    UserGroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserGroupsApi(configuration);

let id: string; //id of userGroup (default to undefined)
let actionName: string; //name of action (optional) (default to undefined)
let transferToUserGroupId: string; //userGroup id that will be transferred to (optional) (default to undefined)
let transferToUserGroupType: string; //userGroup type that will be transferred to (optional) (default to undefined)

const { status, data } = await apiInstance.deleteUserGroupsById(
    id,
    actionName,
    transferToUserGroupId,
    transferToUserGroupType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | id of userGroup | defaults to undefined|
| **actionName** | [**string**] | name of action | (optional) defaults to undefined|
| **transferToUserGroupId** | [**string**] | userGroup id that will be transferred to | (optional) defaults to undefined|
| **transferToUserGroupType** | [**string**] | userGroup type that will be transferred to | (optional) defaults to undefined|


### Return type

**DeleteUserGroupsById200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | userGroup is removed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteUsersByUsernameByIdForUserGroups**
> DeleteUsersByUsernameByIdForUserGroups200Response deleteUsersByUsernameByIdForUserGroups()

remove a user from the userGroup

### Example

```typescript
import {
    UserGroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserGroupsApi(configuration);

let id: string; //id of userGroup (default to undefined)
let username: string; //username of the user (default to undefined)

const { status, data } = await apiInstance.deleteUsersByUsernameByIdForUserGroups(
    id,
    username
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | id of userGroup | defaults to undefined|
| **username** | [**string**] | username of the user | defaults to undefined|


### Return type

**DeleteUsersByUsernameByIdForUserGroups200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | a user was removed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAncestorsForUserGroups**
> GetAncestorsForUserGroups200Response getAncestorsForUserGroups()

Get ancestor user groups.

### Example

```typescript
import {
    UserGroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserGroupsApi(configuration);

let groupId: string; //id of userGroup (default to undefined)

const { status, data } = await apiInstance.getAncestorsForUserGroups(
    groupId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupId** | [**string**] | id of userGroup | defaults to undefined|


### Return type

**GetAncestorsForUserGroups200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | userGroups are fetched |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getChildrenForUserGroups**
> GetChildrenForUserGroups200Response getChildrenForUserGroups()

Get child user groups

### Example

```typescript
import {
    UserGroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserGroupsApi(configuration);

let parentIds: Array<string>; //IDs of parent user groups (optional) (default to undefined)
let includeGrandChildren: boolean; //Whether to include grandchild user groups (optional) (default to undefined)

const { status, data } = await apiInstance.getChildrenForUserGroups(
    parentIds,
    includeGrandChildren
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **parentIds** | **Array&lt;string&gt;** | IDs of parent user groups | (optional) defaults to undefined|
| **includeGrandChildren** | [**boolean**] | Whether to include grandchild user groups | (optional) defaults to undefined|


### Return type

**GetChildrenForUserGroups200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Child user groups are fetched |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPagesByIdForUserGroups**
> GetPagesByIdForUserGroups200Response getPagesByIdForUserGroups()

Get closed pages for the userGroup

### Example

```typescript
import {
    UserGroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserGroupsApi(configuration);

let id: string; //id of userGroup (default to undefined)

const { status, data } = await apiInstance.getPagesByIdForUserGroups(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | id of userGroup | defaults to undefined|


### Return type

**GetPagesByIdForUserGroups200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | pages are fetched |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSelectableChildGroups**
> GetSelectableChildGroups200Response getSelectableChildGroups()

Get selectable child UserGroups

### Example

```typescript
import {
    UserGroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserGroupsApi(configuration);

let groupId: string; //id of userGroup (default to undefined)

const { status, data } = await apiInstance.getSelectableChildGroups(
    groupId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupId** | [**string**] | id of userGroup | defaults to undefined|


### Return type

**GetSelectableChildGroups200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | userGroups are fetched |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSelectableParentGroups**
> GetSelectableParentGroups200Response getSelectableParentGroups()

Get selectable parent UserGroups

### Example

```typescript
import {
    UserGroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserGroupsApi(configuration);

let groupId: string; //id of userGroup (default to undefined)

const { status, data } = await apiInstance.getSelectableParentGroups(
    groupId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupId** | [**string**] | id of userGroup | defaults to undefined|


### Return type

**GetSelectableParentGroups200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | userGroups are fetched |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUnrelatedUsersByIdForUserGroups**
> GetUsersByIdForUserGroups200Response getUnrelatedUsersByIdForUserGroups()

Get users unrelated to the userGroup

### Example

```typescript
import {
    UserGroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserGroupsApi(configuration);

let id: string; //id of userGroup (default to undefined)
let searchWord: string; //search word (optional) (default to undefined)
let searchType: string; //search type (optional) (default to undefined)
let isAlsoNameSearched: boolean; //whether name is also searched (optional) (default to undefined)
let isAlsoMailSearched: boolean; //whether mail is also searched (optional) (default to undefined)

const { status, data } = await apiInstance.getUnrelatedUsersByIdForUserGroups(
    id,
    searchWord,
    searchType,
    isAlsoNameSearched,
    isAlsoMailSearched
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | id of userGroup | defaults to undefined|
| **searchWord** | [**string**] | search word | (optional) defaults to undefined|
| **searchType** | [**string**] | search type | (optional) defaults to undefined|
| **isAlsoNameSearched** | [**boolean**] | whether name is also searched | (optional) defaults to undefined|
| **isAlsoMailSearched** | [**boolean**] | whether mail is also searched | (optional) defaults to undefined|


### Return type

**GetUsersByIdForUserGroups200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | users are fetched |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUserGroupRelationsByIdForUserGroups**
> GetUserGroupRelationsByIdForUserGroups200Response getUserGroupRelationsByIdForUserGroups()

Get the user group relations for the userGroup

### Example

```typescript
import {
    UserGroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserGroupsApi(configuration);

let id: string; //id of userGroup (default to undefined)

const { status, data } = await apiInstance.getUserGroupRelationsByIdForUserGroups(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | id of userGroup | defaults to undefined|


### Return type

**GetUserGroupRelationsByIdForUserGroups200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | user group relations are fetched |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUserGroups**
> GetUserGroups200Response getUserGroups()

Get usergroups

### Example

```typescript
import {
    UserGroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserGroupsApi(configuration);

let page: number; //page number (optional) (default to undefined)
let limit: number; //number of items per page (optional) (default to undefined)
let offset: number; //offset (optional) (default to undefined)
let pagination: boolean; //whether to paginate (optional) (default to undefined)

const { status, data } = await apiInstance.getUserGroups(
    page,
    limit,
    offset,
    pagination
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | page number | (optional) defaults to undefined|
| **limit** | [**number**] | number of items per page | (optional) defaults to undefined|
| **offset** | [**number**] | offset | (optional) defaults to undefined|
| **pagination** | [**boolean**] | whether to paginate | (optional) defaults to undefined|


### Return type

**GetUserGroups200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | usergroups are fetched |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUserGroupsById**
> GetUserGroupsById200Response getUserGroupsById()

Get UserGroup from Group ID

### Example

```typescript
import {
    UserGroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserGroupsApi(configuration);

let id: string; //id of userGroup (default to undefined)

const { status, data } = await apiInstance.getUserGroupsById(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | id of userGroup | defaults to undefined|


### Return type

**GetUserGroupsById200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | userGroup are fetched |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUsersByIdForUserGroups**
> GetUsersByIdForUserGroups200Response getUsersByIdForUserGroups()

Get users related to the userGroup

### Example

```typescript
import {
    UserGroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserGroupsApi(configuration);

let id: string; //id of userGroup (default to undefined)

const { status, data } = await apiInstance.getUsersByIdForUserGroups(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | id of userGroup | defaults to undefined|


### Return type

**GetUsersByIdForUserGroups200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | users are fetched |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postUserGroups**
> PostUserGroups200Response postUserGroups(postUserGroupsRequest)

Adds userGroup

### Example

```typescript
import {
    UserGroupsApi,
    Configuration,
    PostUserGroupsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new UserGroupsApi(configuration);

let postUserGroupsRequest: PostUserGroupsRequest; //

const { status, data } = await apiInstance.postUserGroups(
    postUserGroupsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postUserGroupsRequest** | **PostUserGroupsRequest**|  | |


### Return type

**PostUserGroups200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | userGroup is added |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postUsersByUsernameByIdForUserGroups**
> PostUsersByUsernameByIdForUserGroups200Response postUsersByUsernameByIdForUserGroups()

Add a user to the userGroup

### Example

```typescript
import {
    UserGroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserGroupsApi(configuration);

let id: string; //id of userGroup (default to undefined)
let username: string; //username of the user (default to undefined)

const { status, data } = await apiInstance.postUsersByUsernameByIdForUserGroups(
    id,
    username
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | id of userGroup | defaults to undefined|
| **username** | [**string**] | username of the user | defaults to undefined|


### Return type

**PostUsersByUsernameByIdForUserGroups200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | a user is added |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putUserGroupsById**
> PutUserGroupsById200Response putUserGroupsById(putUserGroupsByIdRequest)

Update userGroup

### Example

```typescript
import {
    UserGroupsApi,
    Configuration,
    PutUserGroupsByIdRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new UserGroupsApi(configuration);

let id: string; //id of userGroup (default to undefined)
let putUserGroupsByIdRequest: PutUserGroupsByIdRequest; //

const { status, data } = await apiInstance.putUserGroupsById(
    id,
    putUserGroupsByIdRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putUserGroupsByIdRequest** | **PutUserGroupsByIdRequest**|  | |
| **id** | [**string**] | id of userGroup | defaults to undefined|


### Return type

**PutUserGroupsById200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | userGroup is updated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

