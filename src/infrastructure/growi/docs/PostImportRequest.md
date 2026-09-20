# PostImportRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fileName** | **string** | the file name of zip file | [optional] [default to undefined]
**collections** | **Array&lt;string&gt;** | collection names to import | [optional] [default to undefined]
**_options** | **{ [key: string]: Array&lt;GrowiArchiveImportOption&gt;; }** | the array of importing option that have collection name as the key  | [optional] [default to undefined]

## Example

```typescript
import { PostImportRequest } from './api';

const instance: PostImportRequest = {
    fileName,
    collections,
    _options,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
