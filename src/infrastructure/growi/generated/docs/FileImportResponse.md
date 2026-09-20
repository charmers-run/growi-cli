# FileImportResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**meta** | [**FileImportResponseMeta**](FileImportResponseMeta.md) |  | [optional] [default to undefined]
**fileName** | **string** |  | [optional] [default to undefined]
**zipFilePath** | **string** |  | [optional] [default to undefined]
**fileStat** | [**FileImportResponseFileStat**](FileImportResponseFileStat.md) |  | [optional] [default to undefined]
**innerFileStats** | [**Array&lt;FileImportResponseInnerFileStatsInner&gt;**](FileImportResponseInnerFileStatsInner.md) |  | [optional] [default to undefined]

## Example

```typescript
import { FileImportResponse } from './api';

const instance: FileImportResponse = {
    meta,
    fileName,
    zipFilePath,
    fileStat,
    innerFileStats,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
