# NotificationSettingApi

All URIs are relative to *https://demo.growi.org/_api/v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteGlobalNotificationByIdForNotificationSetting**](#deleteglobalnotificationbyidfornotificationsetting) | **DELETE** /notification-setting/global-notification/{id} | |
|[**deleteUserNotificationByIdForNotificationSetting**](#deleteusernotificationbyidfornotificationsetting) | **DELETE** /notification-setting/user-notification/{id} | |
|[**getGlobalNotificationByIdForNotificationSetting**](#getglobalnotificationbyidfornotificationsetting) | **GET** /notification-setting/global-notification/{id} | |
|[**getListForInAppNotification**](#getlistforinappnotification) | **GET** /in-app-notification/list | /in-app-notification/list|
|[**getNotificationSetting**](#getnotificationsetting) | **GET** /notification-setting/ | |
|[**getStatusForInAppNotification**](#getstatusforinappnotification) | **GET** /in-app-notification/status | /in-app-notification/status|
|[**postGlobalNotificationForNotificationSetting**](#postglobalnotificationfornotificationsetting) | **POST** /notification-setting/global-notification | |
|[**postOpenForInAppNotification**](#postopenforinappnotification) | **POST** /in-app-notification/open | /in-app-notification/open|
|[**postUserNotificationForNotificationSetting**](#postusernotificationfornotificationsetting) | **POST** /notification-setting/user-notification | |
|[**putAllStatusesOpenForInAppNotification**](#putallstatusesopenforinappnotification) | **PUT** /in-app-notification/all-statuses-open | /in-app-notification/all-statuses-open|
|[**putEnabledByIdForNotificationSettingGlobalNotification**](#putenabledbyidfornotificationsettingglobalnotification) | **PUT** /notification-setting/global-notification/{id}/enabled | |
|[**putGlobalNotificationByIdForNotificationSetting**](#putglobalnotificationbyidfornotificationsetting) | **PUT** /notification-setting/global-notification/{id} | |
|[**putNotifyForPageGrantForNotificationSetting**](#putnotifyforpagegrantfornotificationsetting) | **PUT** /notification-setting/notify-for-page-grant | |

# **deleteGlobalNotificationByIdForNotificationSetting**
> GlobalNotification deleteGlobalNotificationByIdForNotificationSetting()

delete global notification pattern

### Example

```typescript
import {
    NotificationSettingApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new NotificationSettingApi(configuration);

let id: string; //id of global notification (default to undefined)

const { status, data } = await apiInstance.deleteGlobalNotificationByIdForNotificationSetting(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | id of global notification | defaults to undefined|


### Return type

**GlobalNotification**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to delete global notification pattern |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteUserNotificationByIdForNotificationSetting**
> UserNotification deleteUserNotificationByIdForNotificationSetting()

delete user trigger notification pattern

### Example

```typescript
import {
    NotificationSettingApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new NotificationSettingApi(configuration);

let id: string; //id of user trigger notification (default to undefined)

const { status, data } = await apiInstance.deleteUserNotificationByIdForNotificationSetting(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | id of user trigger notification | defaults to undefined|


### Return type

**UserNotification**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to delete user trigger notification pattern |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getGlobalNotificationByIdForNotificationSetting**
> GetGlobalNotificationByIdForNotificationSetting200Response getGlobalNotificationByIdForNotificationSetting()

get global notification setting

### Example

```typescript
import {
    NotificationSettingApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new NotificationSettingApi(configuration);

let id: string; //id of global notification (default to undefined)

const { status, data } = await apiInstance.getGlobalNotificationByIdForNotificationSetting(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | id of global notification | defaults to undefined|


### Return type

**GetGlobalNotificationByIdForNotificationSetting200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to get global notification setting |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getListForInAppNotification**
> InAppNotificationListResponse getListForInAppNotification()

Get the list of in-app notifications

### Example

```typescript
import {
    NotificationSettingApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new NotificationSettingApi(configuration);

let limit: number; //The number of notifications to get (optional) (default to undefined)
let offset: number; //The number of notifications to skip (optional) (default to undefined)
let status: string; //The status to categorize. \'UNOPENED\' or \'OPENED\'. (optional) (default to undefined)

const { status, data } = await apiInstance.getListForInAppNotification(
    limit,
    offset,
    status
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | The number of notifications to get | (optional) defaults to undefined|
| **offset** | [**number**] | The number of notifications to skip | (optional) defaults to undefined|
| **status** | [**string**] | The status to categorize. \&#39;UNOPENED\&#39; or \&#39;OPENED\&#39;. | (optional) defaults to undefined|


### Return type

**InAppNotificationListResponse**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The list of in-app notifications |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getNotificationSetting**
> GetNotificationSetting200Response getNotificationSetting()

Get notification paramators

### Example

```typescript
import {
    NotificationSettingApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new NotificationSettingApi(configuration);

const { status, data } = await apiInstance.getNotificationSetting();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetNotificationSetting200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | params of notification |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getStatusForInAppNotification**
> GetStatusForInAppNotification200Response getStatusForInAppNotification()

Get the status of in-app notifications

### Example

```typescript
import {
    NotificationSettingApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new NotificationSettingApi(configuration);

const { status, data } = await apiInstance.getStatusForInAppNotification();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetStatusForInAppNotification200Response**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Get count of unread notifications |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postGlobalNotificationForNotificationSetting**
> PutGlobalNotificationByIdForNotificationSetting200Response postGlobalNotificationForNotificationSetting(globalNotificationParams)

add global notification

### Example

```typescript
import {
    NotificationSettingApi,
    Configuration,
    GlobalNotificationParams
} from './api';

const configuration = new Configuration();
const apiInstance = new NotificationSettingApi(configuration);

let globalNotificationParams: GlobalNotificationParams; //

const { status, data } = await apiInstance.postGlobalNotificationForNotificationSetting(
    globalNotificationParams
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **globalNotificationParams** | **GlobalNotificationParams**|  | |


### Return type

**PutGlobalNotificationByIdForNotificationSetting200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to add global notification |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postOpenForInAppNotification**
> object postOpenForInAppNotification()

Open the in-app notification

### Example

```typescript
import {
    NotificationSettingApi,
    Configuration,
    PostOpenForInAppNotificationRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new NotificationSettingApi(configuration);

let postOpenForInAppNotificationRequest: PostOpenForInAppNotificationRequest; // (optional)

const { status, data } = await apiInstance.postOpenForInAppNotification(
    postOpenForInAppNotificationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postOpenForInAppNotificationRequest** | **PostOpenForInAppNotificationRequest**|  | |


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
|**200** | Notification opened successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postUserNotificationForNotificationSetting**
> PostUserNotificationForNotificationSetting200Response postUserNotificationForNotificationSetting(userNotificationParams)

add user notification setting

### Example

```typescript
import {
    NotificationSettingApi,
    Configuration,
    UserNotificationParams
} from './api';

const configuration = new Configuration();
const apiInstance = new NotificationSettingApi(configuration);

let userNotificationParams: UserNotificationParams; //

const { status, data } = await apiInstance.postUserNotificationForNotificationSetting(
    userNotificationParams
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userNotificationParams** | **UserNotificationParams**|  | |


### Return type

**PostUserNotificationForNotificationSetting200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to add user notification setting |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putAllStatusesOpenForInAppNotification**
> putAllStatusesOpenForInAppNotification()

Open all in-app notifications

### Example

```typescript
import {
    NotificationSettingApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new NotificationSettingApi(configuration);

const { status, data } = await apiInstance.putAllStatusesOpenForInAppNotification();
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
|**200** | All notifications opened successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putEnabledByIdForNotificationSettingGlobalNotification**
> PutEnabledByIdForNotificationSettingGlobalNotification200Response putEnabledByIdForNotificationSettingGlobalNotification(putEnabledByIdForNotificationSettingGlobalNotificationRequest)

toggle enabled global notification

### Example

```typescript
import {
    NotificationSettingApi,
    Configuration,
    PutEnabledByIdForNotificationSettingGlobalNotificationRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new NotificationSettingApi(configuration);

let id: string; //notification id for updated (default to undefined)
let putEnabledByIdForNotificationSettingGlobalNotificationRequest: PutEnabledByIdForNotificationSettingGlobalNotificationRequest; //

const { status, data } = await apiInstance.putEnabledByIdForNotificationSettingGlobalNotification(
    id,
    putEnabledByIdForNotificationSettingGlobalNotificationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putEnabledByIdForNotificationSettingGlobalNotificationRequest** | **PutEnabledByIdForNotificationSettingGlobalNotificationRequest**|  | |
| **id** | [**string**] | notification id for updated | defaults to undefined|


### Return type

**PutEnabledByIdForNotificationSettingGlobalNotification200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to delete global notification pattern |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putGlobalNotificationByIdForNotificationSetting**
> PutGlobalNotificationByIdForNotificationSetting200Response putGlobalNotificationByIdForNotificationSetting(globalNotificationParams)

update global notification

### Example

```typescript
import {
    NotificationSettingApi,
    Configuration,
    GlobalNotificationParams
} from './api';

const configuration = new Configuration();
const apiInstance = new NotificationSettingApi(configuration);

let id: string; //global notification id for updated (default to undefined)
let globalNotificationParams: GlobalNotificationParams; //

const { status, data } = await apiInstance.putGlobalNotificationByIdForNotificationSetting(
    id,
    globalNotificationParams
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **globalNotificationParams** | **GlobalNotificationParams**|  | |
| **id** | [**string**] | global notification id for updated | defaults to undefined|


### Return type

**PutGlobalNotificationByIdForNotificationSetting200Response**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to update global notification |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putNotifyForPageGrantForNotificationSetting**
> NotifyForPageGrant putNotifyForPageGrantForNotificationSetting(notifyForPageGrant)

Update settings for notify for page grant

### Example

```typescript
import {
    NotificationSettingApi,
    Configuration,
    NotifyForPageGrant
} from './api';

const configuration = new Configuration();
const apiInstance = new NotificationSettingApi(configuration);

let notifyForPageGrant: NotifyForPageGrant; //

const { status, data } = await apiInstance.putNotifyForPageGrantForNotificationSetting(
    notifyForPageGrant
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **notifyForPageGrant** | **NotifyForPageGrant**|  | |


### Return type

**NotifyForPageGrant**

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succeeded to settings for notify for page grant |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

