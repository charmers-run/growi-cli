# ImportStatus

ImportStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**isTheSameVersion** | **boolean** | whether the version of the uploaded data is the same as the current GROWI version | [optional] [default to undefined]
**zipFileStat** | **object** | the property object | [optional] [default to undefined]
**progressList** | **Array&lt;object&gt;** |  | [optional] [default to undefined]
**isImporting** | **boolean** | whether the current importing job exists or not | [optional] [default to undefined]

## Example

```typescript
import { ImportStatus } from './api';

const instance: ImportStatus = {
    isTheSameVersion,
    zipFileStat,
    progressList,
    isImporting,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
