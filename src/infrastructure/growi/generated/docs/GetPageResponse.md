# GetPageResponse

Response for GET /page endpoint

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page** | [**Page**](Page.md) | The requested page. Null if pages array is returned instead. | [optional] [default to undefined]
**pages** | [**Array&lt;Page&gt;**](Page.md) | Array of pages when findAll parameter is used. Null otherwise. | [optional] [default to undefined]
**meta** | **object** | Metadata about the page request | [optional] [default to undefined]

## Example

```typescript
import { GetPageResponse } from './api';

const instance: GetPageResponse = {
    page,
    pages,
    meta,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
