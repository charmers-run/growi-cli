# ExternalUserGroupsApi

All URIs are relative to *https://demo.growi.org/_api/v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteExternalUserGroupsById**](#deleteexternalusergroupsbyid) | **DELETE** /external-user-groups/{id} | /external-user-groups/{id}|
|[**getAncestorsForExternalUserGroups**](#getancestorsforexternalusergroups) | **GET** /external-user-groups/ancestors | /external-user-groups/ancestors|
|[**getChildrenForExternalUserGroups**](#getchildrenforexternalusergroups) | **GET** /external-user-groups/children | /external-user-groups/children|
|[**getExternalUserGroupRelations**](#getexternalusergrouprelations) | **GET** /external-user-group-relations | /external-user-group-relations|
|[**getExternalUserGroupRelationsByIdForExternalUserGroups**](#getexternalusergrouprelationsbyidforexternalusergroups) | **GET** /external-user-groups/{id}/external-user-group-relations | /external-user-groups/{id}/external-user-group-relations|
|[**getExternalUserGroups**](#getexternalusergroups) | **GET** /external-user-groups | /external-user-groups|
|[**getExternalUserGroupsById**](#getexternalusergroupsbyid) | **GET** /external-user-groups/{id} | /external-user-groups/{id}|
|[**getSyncSettingsForExternalUserGroupsKeycloak**](#getsyncsettingsforexternalusergroupskeycloak) | **GET** /external-user-groups/keycloak/sync-settings | Get Keycloak sync settings|
|[**getSyncSettingsForExternalUserGroupsLdap**](#getsyncsettingsforexternalusergroupsldap) | **GET** /external-user-groups/ldap/sync-settings | Get LDAP sync settings|
|[**getSyncStatusForExternalUserGroupsLdap**](#getsyncstatusforexternalusergroupsldap) | **GET** /external-user-groups/ldap/sync-status | /external-user-groups/ldap/sync-status|
|[**putExternalUserGroupsById**](#putexternalusergroupsbyid) | **PUT** /external-user-groups/{id} | /external-user-groups/{id}|
|[**putSyncForExternalUserGroupsKeycloak**](#putsyncforexternalusergroupskeycloak) | **PUT** /external-user-groups/keycloak/sync | /external-user-groups/keycloak/sync|
|[**putSyncForExternalUserGroupsLdap**](#putsyncforexternalusergroupsldap) | **PUT** /external-user-groups/ldap/sync | Start LDAP sync process|
|[**putSyncSettingsForExternalUserGroupsKeycloak**](#putsyncsettingsforexternalusergroupskeycloak) | **PUT** /external-user-groups/keycloak/sync-settings | /external-user-groups/keycloak/sync-settings|
|[**putSyncSettingsForExternalUserGroupsLdap**](#putsyncsettingsforexternalusergroupsldap) | **PUT** /external-user-groups/ldap/sync-settings | Update LDAP sync settings|

# **deleteExternalUserGroupsById**
> DeleteExternalUserGroupsById200Response deleteExternalUserGroupsById()


### Example

```typescript
import {
    ExternalUserGroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ExternalUserGroupsApi(configuration);

let id: string; //The ID of the external user group (default to undefined)
let actionName: string; //The action to perform on group delete (default to undefined)
let transferToUserGroupId: string; //The ID of the user group to transfer to (optional) (default to undefined)
let transferToUserGroupType: string; //The type of the user group to transfer to (optional) (default to undefined)

const { status, data } = await apiInstance.deleteExternalUserGroupsById(
    id,
    actionName,
    transferToUserGroupId,
    transferToUserGroupType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | The ID of the external user group | defaults to undefined|
| **actionName** | [**string**] | The action to perform on group delete | defaults to undefined|
| **transferToUserGroupId** | [**string**] | The ID of the user group to transfer to | (optional) defaults to undefined|
| **transferToUserGroupType** | [**string**] | The type of the user group to transfer to | (optional) defaults to undefined|


### Return type

**DeleteExternalUserGroupsById200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully deleted the external user group |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAncestorsForExternalUserGroups**
> GetAncestorsForExternalUserGroups200Response getAncestorsForExternalUserGroups()


### Example

```typescript
import {
    ExternalUserGroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ExternalUserGroupsApi(configuration);

let groupId: string; //The ID of the user group to get ancestors for (default to undefined)

const { status, data } = await apiInstance.getAncestorsForExternalUserGroups(
    groupId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupId** | [**string**] | The ID of the user group to get ancestors for | defaults to undefined|


### Return type

**GetAncestorsForExternalUserGroups200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully retrieved ancestor user groups |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getChildrenForExternalUserGroups**
> GetChildrenForExternalUserGroups200Response getChildrenForExternalUserGroups()


### Example

```typescript
import {
    ExternalUserGroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ExternalUserGroupsApi(configuration);

let parentIds: Array<string>; //The IDs of the parent user groups (optional) (default to undefined)
let includeGrandChildren: boolean; //Whether to include grandchild user groups (optional) (default to undefined)

const { status, data } = await apiInstance.getChildrenForExternalUserGroups(
    parentIds,
    includeGrandChildren
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **parentIds** | **Array&lt;string&gt;** | The IDs of the parent user groups | (optional) defaults to undefined|
| **includeGrandChildren** | [**boolean**] | Whether to include grandchild user groups | (optional) defaults to undefined|


### Return type

**GetChildrenForExternalUserGroups200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully retrieved child user groups |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getExternalUserGroupRelations**
> GetExternalUserGroupRelations200Response getExternalUserGroupRelations()

Get user group relations

### Example

```typescript
import {
    ExternalUserGroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ExternalUserGroupsApi(configuration);

let groupIds: Array<string>; //The group IDs to get relations for (optional) (default to undefined)
let childGroupIds: Array<string>; //The child group IDs to get relations for (optional) (default to undefined)

const { status, data } = await apiInstance.getExternalUserGroupRelations(
    groupIds,
    childGroupIds
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupIds** | **Array&lt;string&gt;** | The group IDs to get relations for | (optional) defaults to undefined|
| **childGroupIds** | **Array&lt;string&gt;** | The child group IDs to get relations for | (optional) defaults to undefined|


### Return type

**GetExternalUserGroupRelations200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The user group relations |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getExternalUserGroupRelationsByIdForExternalUserGroups**
> GetExternalUserGroupRelationsByIdForExternalUserGroups200Response getExternalUserGroupRelationsByIdForExternalUserGroups()


### Example

```typescript
import {
    ExternalUserGroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ExternalUserGroupsApi(configuration);

let id: string; //The ID of the external user group (default to undefined)

const { status, data } = await apiInstance.getExternalUserGroupRelationsByIdForExternalUserGroups(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | The ID of the external user group | defaults to undefined|


### Return type

**GetExternalUserGroupRelationsByIdForExternalUserGroups200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully retrieved external user group relations |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getExternalUserGroups**
> GetExternalUserGroups200Response getExternalUserGroups()


### Example

```typescript
import {
    ExternalUserGroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ExternalUserGroupsApi(configuration);

let page: number; //Page number for pagination (optional) (default to undefined)
let limit: number; //Number of items per page (optional) (default to undefined)
let offset: number; //Offset for pagination (optional) (default to undefined)
let pagination: boolean; //Whether to enable pagination (optional) (default to undefined)

const { status, data } = await apiInstance.getExternalUserGroups(
    page,
    limit,
    offset,
    pagination
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | Page number for pagination | (optional) defaults to undefined|
| **limit** | [**number**] | Number of items per page | (optional) defaults to undefined|
| **offset** | [**number**] | Offset for pagination | (optional) defaults to undefined|
| **pagination** | [**boolean**] | Whether to enable pagination | (optional) defaults to undefined|


### Return type

**GetExternalUserGroups200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully retrieved external user groups |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getExternalUserGroupsById**
> GetExternalUserGroupsById200Response getExternalUserGroupsById()


### Example

```typescript
import {
    ExternalUserGroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ExternalUserGroupsApi(configuration);

let id: string; //The ID of the external user group (default to undefined)

const { status, data } = await apiInstance.getExternalUserGroupsById(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | The ID of the external user group | defaults to undefined|


### Return type

**GetExternalUserGroupsById200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully retrieved external user group details |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSyncSettingsForExternalUserGroupsKeycloak**
> GetSyncSettingsForExternalUserGroupsKeycloak200Response getSyncSettingsForExternalUserGroupsKeycloak()


### Example

```typescript
import {
    ExternalUserGroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ExternalUserGroupsApi(configuration);

const { status, data } = await apiInstance.getSyncSettingsForExternalUserGroupsKeycloak();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetSyncSettingsForExternalUserGroupsKeycloak200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully retrieved Keycloak sync settings |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSyncSettingsForExternalUserGroupsLdap**
> GetSyncSettingsForExternalUserGroupsLdap200Response getSyncSettingsForExternalUserGroupsLdap()


### Example

```typescript
import {
    ExternalUserGroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ExternalUserGroupsApi(configuration);

const { status, data } = await apiInstance.getSyncSettingsForExternalUserGroupsLdap();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetSyncSettingsForExternalUserGroupsLdap200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully retrieved LDAP sync settings |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSyncStatusForExternalUserGroupsLdap**
> SyncStatus getSyncStatusForExternalUserGroupsLdap()


### Example

```typescript
import {
    ExternalUserGroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ExternalUserGroupsApi(configuration);

const { status, data } = await apiInstance.getSyncStatusForExternalUserGroupsLdap();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**SyncStatus**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully retrieved LDAP sync status |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putExternalUserGroupsById**
> GetExternalUserGroupsById200Response putExternalUserGroupsById(putExternalUserGroupsByIdRequest)


### Example

```typescript
import {
    ExternalUserGroupsApi,
    Configuration,
    PutExternalUserGroupsByIdRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ExternalUserGroupsApi(configuration);

let id: string; //The ID of the external user group (default to undefined)
let putExternalUserGroupsByIdRequest: PutExternalUserGroupsByIdRequest; //

const { status, data } = await apiInstance.putExternalUserGroupsById(
    id,
    putExternalUserGroupsByIdRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putExternalUserGroupsByIdRequest** | **PutExternalUserGroupsByIdRequest**|  | |
| **id** | [**string**] | The ID of the external user group | defaults to undefined|


### Return type

**GetExternalUserGroupsById200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully updated the external user group |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putSyncForExternalUserGroupsKeycloak**
> object putSyncForExternalUserGroupsKeycloak()


### Example

```typescript
import {
    ExternalUserGroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ExternalUserGroupsApi(configuration);

const { status, data } = await apiInstance.putSyncForExternalUserGroupsKeycloak();
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
|**202** | Sync process started |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putSyncForExternalUserGroupsLdap**
> object putSyncForExternalUserGroupsLdap()


### Example

```typescript
import {
    ExternalUserGroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ExternalUserGroupsApi(configuration);

const { status, data } = await apiInstance.putSyncForExternalUserGroupsLdap();
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
|**202** | Sync process started |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putSyncSettingsForExternalUserGroupsKeycloak**
> object putSyncSettingsForExternalUserGroupsKeycloak(getSyncSettingsForExternalUserGroupsKeycloak200Response)


### Example

```typescript
import {
    ExternalUserGroupsApi,
    Configuration,
    GetSyncSettingsForExternalUserGroupsKeycloak200Response
} from './api';

const configuration = new Configuration();
const apiInstance = new ExternalUserGroupsApi(configuration);

let getSyncSettingsForExternalUserGroupsKeycloak200Response: GetSyncSettingsForExternalUserGroupsKeycloak200Response; //

const { status, data } = await apiInstance.putSyncSettingsForExternalUserGroupsKeycloak(
    getSyncSettingsForExternalUserGroupsKeycloak200Response
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **getSyncSettingsForExternalUserGroupsKeycloak200Response** | **GetSyncSettingsForExternalUserGroupsKeycloak200Response**|  | |


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
|**204** | Sync settings updated successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putSyncSettingsForExternalUserGroupsLdap**
> object putSyncSettingsForExternalUserGroupsLdap(getSyncSettingsForExternalUserGroupsLdap200Response)


### Example

```typescript
import {
    ExternalUserGroupsApi,
    Configuration,
    GetSyncSettingsForExternalUserGroupsLdap200Response
} from './api';

const configuration = new Configuration();
const apiInstance = new ExternalUserGroupsApi(configuration);

let getSyncSettingsForExternalUserGroupsLdap200Response: GetSyncSettingsForExternalUserGroupsLdap200Response; //

const { status, data } = await apiInstance.putSyncSettingsForExternalUserGroupsLdap(
    getSyncSettingsForExternalUserGroupsLdap200Response
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **getSyncSettingsForExternalUserGroupsLdap200Response** | **GetSyncSettingsForExternalUserGroupsLdap200Response**|  | |


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
|**204** | Sync settings updated successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

