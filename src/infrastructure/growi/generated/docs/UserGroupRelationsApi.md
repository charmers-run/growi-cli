# UserGroupRelationsApi

All URIs are relative to *https://demo.growi.org/_api/v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getUserGroupRelations**](#getusergrouprelations) | **GET** /user-group-relations | /user-group-relations|

# **getUserGroupRelations**
> GetUserGroupRelations200Response getUserGroupRelations()

Gets the user group relations

### Example

```typescript
import {
    UserGroupRelationsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserGroupRelationsApi(configuration);

const { status, data } = await apiInstance.getUserGroupRelations();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetUserGroupRelations200Response**

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

