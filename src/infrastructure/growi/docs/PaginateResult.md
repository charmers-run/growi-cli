# PaginateResult

PaginateResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**docs** | **Array&lt;object&gt;** | Array of documents | [optional] [default to undefined]
**totalDocs** | **number** | Total number of documents in collection that match a query | [optional] [default to undefined]
**limit** | **number** | Limit for pagination | [optional] [default to undefined]
**hasPrevPage** | **number** | Availability of prev page. | [optional] [default to undefined]
**hasNextPage** | **number** | Availability of next page. | [optional] [default to undefined]
**page** | **number** | Current page number | [optional] [default to undefined]
**totalPages** | **number** | Total number of pages. | [optional] [default to undefined]
**offset** | **number** | Offset for pagination | [optional] [default to undefined]
**prefPage** | **number** | Previous page number if available or NULL | [optional] [default to undefined]
**nextPage** | **number** | Next page number if available or NULL | [optional] [default to undefined]
**pagingCounter** | **number** | The starting sl. number of first document. | [optional] [default to undefined]
**meta** | **number** | Object of pagination meta data (Default false). | [optional] [default to undefined]

## Example

```typescript
import { PaginateResult } from './api';

const instance: PaginateResult = {
    docs,
    totalDocs,
    limit,
    hasPrevPage,
    hasNextPage,
    page,
    totalPages,
    offset,
    prefPage,
    nextPage,
    pagingCounter,
    meta,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
