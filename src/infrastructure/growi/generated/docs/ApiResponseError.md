# ApiResponseError

Error API response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **boolean** | Success indicator (always false for error responses) | [default to undefined]
**error** | [**ApiResponseErrorAllOfError**](ApiResponseErrorAllOfError.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ApiResponseError } from './api';

const instance: ApiResponseError = {
    ok,
    error,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
