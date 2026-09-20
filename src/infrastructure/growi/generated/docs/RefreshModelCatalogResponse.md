# RefreshModelCatalogResponse

Metadata of a successful model-catalog refresh. Carries the fetch timestamp and per-provider selectable-model counts only — never an API key, provider credentials, or providerOptions (Req 7.1).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fetchedAt** | **string** | When the catalog snapshot was fetched from models.dev. | [default to undefined]
**counts** | **{ [key: string]: number; }** | provider → number of selectable model ids. | [default to undefined]

## Example

```typescript
import { RefreshModelCatalogResponse } from './api';

const instance: RefreshModelCatalogResponse = {
    fetchedAt,
    counts,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
