# ExportZipFileStat


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**meta** | [**ExportMeta**](ExportMeta.md) |  | [optional] [default to undefined]
**fileName** | **string** |  | [optional] [default to undefined]
**zipFilePath** | **string** |  | [optional] [default to undefined]
**fileStat** | [**ExportFileStat**](ExportFileStat.md) |  | [optional] [default to undefined]
**innerFileStats** | [**Array&lt;ExportInnerFileStat&gt;**](ExportInnerFileStat.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ExportZipFileStat } from './api';

const instance: ExportZipFileStat = {
    meta,
    fileName,
    zipFilePath,
    fileStat,
    innerFileStats,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
