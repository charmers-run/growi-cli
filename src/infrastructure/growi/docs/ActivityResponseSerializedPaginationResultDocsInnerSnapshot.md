# ActivityResponseSerializedPaginationResultDocsInnerSnapshot


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**username** | **string** | Username of the operator. Omitted when the activity was recorded without an authenticated user (e.g. guest ATTACHMENT_DOWNLOAD). | [optional] [default to undefined]
**_id** | **string** |  | [optional] [default to undefined]
**originalName** | **string** | Original file name of the attachment. Present on attachment activities (ATTACHMENT_ADD / ATTACHMENT_REMOVE / ATTACHMENT_DOWNLOAD). | [optional] [default to undefined]
**pagePath** | **string** | Path of the page the attachment belongs or belonged to. Present on attachment activities (ATTACHMENT_ADD / ATTACHMENT_REMOVE / ATTACHMENT_DOWNLOAD) when it could be resolved at capture time. | [optional] [default to undefined]
**pageId** | **string** | ID of the page the attachment belongs or belonged to. Present on attachment activities (ATTACHMENT_ADD / ATTACHMENT_REMOVE / ATTACHMENT_DOWNLOAD). | [optional] [default to undefined]
**fileSize** | **number** | File size in bytes of the attachment. Present on attachment activities (ATTACHMENT_ADD / ATTACHMENT_REMOVE / ATTACHMENT_DOWNLOAD). | [optional] [default to undefined]

## Example

```typescript
import { ActivityResponseSerializedPaginationResultDocsInnerSnapshot } from './api';

const instance: ActivityResponseSerializedPaginationResultDocsInnerSnapshot = {
    username,
    _id,
    originalName,
    pagePath,
    pageId,
    fileSize,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
