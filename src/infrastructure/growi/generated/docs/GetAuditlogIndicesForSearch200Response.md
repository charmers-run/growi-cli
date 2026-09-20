# GetAuditlogIndicesForSearch200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**info** | **object** | Status of auditlog indices | [optional] [default to undefined]
**auditlogHasUnsyncedEvents** | **boolean** | Whether auditlog events failed to sync to Elasticsearch (rebuild needed) | [optional] [default to undefined]

## Example

```typescript
import { GetAuditlogIndicesForSearch200Response } from './api';

const instance: GetAuditlogIndicesForSearch200Response = {
    info,
    auditlogHasUnsyncedEvents,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
