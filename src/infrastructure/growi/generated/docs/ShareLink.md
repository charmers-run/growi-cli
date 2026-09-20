# ShareLink


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **string** | The unique identifier of the share link | [optional] [default to undefined]
**relatedPage** | [**ShareLinkRelatedPage**](ShareLinkRelatedPage.md) |  | [optional] [default to undefined]
**expiredAt** | **string** | The expiration date of the share link | [optional] [default to undefined]
**description** | **string** | The description of the share link | [optional] [default to undefined]
**createdAt** | **string** | The creation date of the share link | [optional] [default to undefined]
**__v** | **number** | The version key | [optional] [default to undefined]

## Example

```typescript
import { ShareLink } from './api';

const instance: ShareLink = {
    _id,
    relatedPage,
    expiredAt,
    description,
    createdAt,
    __v,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
