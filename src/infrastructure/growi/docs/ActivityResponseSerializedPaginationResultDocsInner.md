# ActivityResponseSerializedPaginationResultDocsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **string** |  | [optional] [default to undefined]
**id** | **string** |  | [optional] [default to undefined]
**ip** | **string** |  | [optional] [default to undefined]
**endpoint** | **string** |  | [optional] [default to undefined]
**targetModel** | **string** | Model name of the activity target. For attachment activities (ATTACHMENT_ADD / ATTACHMENT_REMOVE / ATTACHMENT_DOWNLOAD) this is \&quot;Attachment\&quot;. | [optional] [default to undefined]
**target** | **string** | ID of the activity target. For attachment activities this is the attachment ID; combined with the snapshot fields it lets consumers build a download link for attachments that still exist (ATTACHMENT_ADD / ATTACHMENT_DOWNLOAD, distinguished by &#x60;action&#x60;). | [optional] [default to undefined]
**action** | **string** |  | [optional] [default to undefined]
**snapshot** | [**ActivityResponseSerializedPaginationResultDocsInnerSnapshot**](ActivityResponseSerializedPaginationResultDocsInnerSnapshot.md) |  | [optional] [default to undefined]
**createdAt** | **string** |  | [optional] [default to undefined]
**__v** | **number** |  | [optional] [default to undefined]
**user** | [**ActivityResponseSerializedPaginationResultDocsInnerUser**](ActivityResponseSerializedPaginationResultDocsInnerUser.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ActivityResponseSerializedPaginationResultDocsInner } from './api';

const instance: ActivityResponseSerializedPaginationResultDocsInner = {
    _id,
    id,
    ip,
    endpoint,
    targetModel,
    target,
    action,
    snapshot,
    createdAt,
    __v,
    user,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
