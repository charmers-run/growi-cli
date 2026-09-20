# GrowiInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version** | **string** | The version of the GROWI | [optional] [default to undefined]
**userUpperLimit** | **number** | The upper limit of the number of users | [optional] [default to undefined]
**fileUploadDisabled** | **boolean** |  | [optional] [default to undefined]
**fileUploadTotalLimit** | **number** | The total limit of the file upload size | [optional] [default to undefined]
**attachmentInfo** | [**GrowiInfoAttachmentInfo**](GrowiInfoAttachmentInfo.md) |  | [optional] [default to undefined]

## Example

```typescript
import { GrowiInfo } from './api';

const instance: GrowiInfo = {
    version,
    userUpperLimit,
    fileUploadDisabled,
    fileUploadTotalLimit,
    attachmentInfo,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
