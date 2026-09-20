# RevisionsApi

All URIs are relative to *https://demo.growi.org/_api/v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getChangesForRevisions**](#getchangesforrevisions) | **GET** /revisions/changes | Get the authenticated user\&#39;s consecutive-edit runs across all pages|
|[**getListForRevisions**](#getlistforrevisions) | **GET** /revisions/list | |
|[**getRevisionsById**](#getrevisionsbyid) | **GET** /revisions/{id} | |
|[**postDiffForRevisions**](#postdiffforrevisions) | **POST** /revisions/diff | Compute unified diffs for a batch of revision pairs|

# **getChangesForRevisions**
> GetChangesForRevisions200Response getChangesForRevisions()

Returns a paginated list of \"runs\" — maximal sequences of the authenticated user\'s consecutive edits on individual pages, not interrupted by another author. Each entry includes the baseline revision (from) and the final revision (to) of the run, along with page accessibility flags. The response is ordered by (latestUpdatedAt asc, toRevisionId asc) for stable incremental sync. Authentication requires a Personal Access Token with scope `read:features:page`. 

### Example

```typescript
import {
    RevisionsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RevisionsApi(configuration);

let since: string; //Inclusive lower bound on revision createdAt (ISO 8601). (optional) (default to undefined)
let fromDate: string; //Start of the date range (inclusive). Combined with `since`: the effective lower bound is the later of the two values.  (optional) (default to undefined)
let toDate: string; //End of the date range (inclusive). Must not be earlier than `fromDate`; violating this constraint returns 400.  (optional) (default to undefined)
let limit: number; //Maximum number of run entries to return. (optional) (default to 20)
let cursor: string; //Opaque pagination cursor returned in the `next` field of a prior response. An invalid cursor token returns 400.  (optional) (default to undefined)

const { status, data } = await apiInstance.getChangesForRevisions(
    since,
    fromDate,
    toDate,
    limit,
    cursor
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **since** | [**string**] | Inclusive lower bound on revision createdAt (ISO 8601). | (optional) defaults to undefined|
| **fromDate** | [**string**] | Start of the date range (inclusive). Combined with &#x60;since&#x60;: the effective lower bound is the later of the two values.  | (optional) defaults to undefined|
| **toDate** | [**string**] | End of the date range (inclusive). Must not be earlier than &#x60;fromDate&#x60;; violating this constraint returns 400.  | (optional) defaults to undefined|
| **limit** | [**number**] | Maximum number of run entries to return. | (optional) defaults to 20|
| **cursor** | [**string**] | Opaque pagination cursor returned in the &#x60;next&#x60; field of a prior response. An invalid cursor token returns 400.  | (optional) defaults to undefined|


### Return type

**GetChangesForRevisions200Response**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Paginated list of change-index entries |  -  |
|**400** | Invalid query parameters: invalid date range, malformed cursor, or a &#x60;since&#x60;/&#x60;fromDate&#x60; older than the configured lookback limit (error code &#x60;lookback-limit-exceeded&#x60;). When no lower bound is given, the lookback limit is applied as the window\&#39;s lower bound instead of erroring.  |  -  |
|**401** | Not authenticated |  -  |
|**403** | Insufficient scope (requires read:features:page) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getListForRevisions**
> GetListForRevisions200Response getListForRevisions()

Get revisions by page id

### Example

```typescript
import {
    RevisionsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RevisionsApi(configuration);

let pageId: string; // (optional) (default to undefined)
let page: number; //selected page number (optional) (default to undefined)
let limit: number; //page item limit (optional) (default to undefined)

const { status, data } = await apiInstance.getListForRevisions(
    pageId,
    page,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pageId** | [**string**] |  | (optional) defaults to undefined|
| **page** | [**number**] | selected page number | (optional) defaults to undefined|
| **limit** | [**number**] | page item limit | (optional) defaults to undefined|


### Return type

**GetListForRevisions200Response**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Return revisions belong to page |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRevisionsById**
> GetRevisionsById200Response getRevisionsById()

Get one revision by id

### Example

```typescript
import {
    RevisionsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RevisionsApi(configuration);

let pageId: string; //page id (default to undefined)
let id: string; //revision id (default to undefined)

const { status, data } = await apiInstance.getRevisionsById(
    pageId,
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pageId** | [**string**] | page id | defaults to undefined|
| **id** | [**string**] | revision id | defaults to undefined|


### Return type

**GetRevisionsById200Response**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Return revision |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postDiffForRevisions**
> PostDiffForRevisions200Response postDiffForRevisions(postDiffForRevisionsRequest)

Accepts a list of revision pairs (up to MAX_PAIRS) and returns a per-pair unified diff result. Authorization is performed independently per pair: pairs the authenticated user cannot view return status \"forbidden\"; structurally invalid pairs (revision not found, wrong page) return status \"invalid\". Authentication requires a Personal Access Token with scope `read:features:page`. 

### Example

```typescript
import {
    RevisionsApi,
    Configuration,
    PostDiffForRevisionsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new RevisionsApi(configuration);

let postDiffForRevisionsRequest: PostDiffForRevisionsRequest; //

const { status, data } = await apiInstance.postDiffForRevisions(
    postDiffForRevisionsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postDiffForRevisionsRequest** | **PostDiffForRevisionsRequest**|  | |


### Return type

**PostDiffForRevisions200Response**

### Authorization

[accessTokenInQuery](../README.md#accessTokenInQuery), [accessTokenHeaderAuth](../README.md#accessTokenHeaderAuth), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Per-pair diff results in the same order as the request pairs |  -  |
|**400** | Invalid request body (too many pairs, invalid ObjectId, malformed body) |  -  |
|**401** | Not authenticated |  -  |
|**403** | Insufficient scope (requires read:features:page) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

