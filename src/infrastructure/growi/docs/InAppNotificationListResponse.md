# InAppNotificationListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**docs** | [**Array&lt;InAppNotificationDocument&gt;**](InAppNotificationDocument.md) |  | [optional] [default to undefined]
**totalDocs** | **number** | Total number of in app notification documents | [optional] [default to undefined]
**offset** | **number** | Offset value | [optional] [default to undefined]
**limit** | **number** | Limit per page | [optional] [default to undefined]
**totalPages** | **number** | Total pages available | [optional] [default to undefined]
**page** | **number** | Current page number | [optional] [default to undefined]
**hasPrevPage** | **boolean** | Indicator for previous page | [optional] [default to undefined]
**hasNextPage** | **boolean** | Indicator for next page | [optional] [default to undefined]
**prevPage** | **string** | Previous page number or null | [optional] [default to undefined]
**nextPage** | **string** | Next page number or null | [optional] [default to undefined]

## Example

```typescript
import { InAppNotificationListResponse } from './api';

const instance: InAppNotificationListResponse = {
    docs,
    totalDocs,
    offset,
    limit,
    totalPages,
    page,
    hasPrevPage,
    hasNextPage,
    prevPage,
    nextPage,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
