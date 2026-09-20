# MongoDBApi

All URIs are relative to *https://demo.growi.org/_api/v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getCollectionsForMongo**](#getcollectionsformongo) | **GET** /mongo/collections | /mongo/collections|

# **getCollectionsForMongo**
> GetCollectionsForMongo200Response getCollectionsForMongo()

get mongodb collections names

### Example

```typescript
import {
    MongoDBApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MongoDBApi(configuration);

const { status, data } = await apiInstance.getCollectionsForMongo();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetCollectionsForMongo200Response**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | a list of collections in mongoDB |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

