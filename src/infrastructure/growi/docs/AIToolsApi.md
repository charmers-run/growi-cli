# AIToolsApi

All URIs are relative to *https://demo.growi.org/_api/v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**postSuggestPathForAiTools**](#postsuggestpathforaitools) | **POST** /ai-tools/suggest-path | Suggest page paths based on content|

# **postSuggestPathForAiTools**
> SuggestPathResponse postSuggestPathForAiTools(postSuggestPathForAiToolsRequest)

Analyzes the given content and suggests appropriate page paths using an agentic search over the wiki.

### Example

```typescript
import {
    AIToolsApi,
    Configuration,
    PostSuggestPathForAiToolsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AIToolsApi(configuration);

let postSuggestPathForAiToolsRequest: PostSuggestPathForAiToolsRequest; //

const { status, data } = await apiInstance.postSuggestPathForAiTools(
    postSuggestPathForAiToolsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postSuggestPathForAiToolsRequest** | **PostSuggestPathForAiToolsRequest**|  | |


### Return type

**SuggestPathResponse**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Path suggestions generated successfully |  -  |
|**500** | Failed to generate path suggestions |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

