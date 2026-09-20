# Revision

Revision

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **string** | Object ID | [optional] [default to undefined]
**format** | **string** | format | [optional] [default to undefined]
**pageId** | **string** | The ID of the page the revision belongs to | [optional] [default to undefined]
**body** | **string** | Revision content body | [optional] [default to undefined]
**author** | **string** | Object ID | [optional] [default to undefined]
**origin** | **string** | The origin of the revision | [optional] [default to undefined]
**hasDiffToPrev** | **boolean** | Whether the revision has differences to the previous one | [optional] [default to undefined]
**createdAt** | **string** | date created at | [optional] [default to undefined]
**__v** | **number** | DB record version | [optional] [default to undefined]
**path** | **string** | path | [optional] [default to undefined]

## Example

```typescript
import { Revision } from './api';

const instance: Revision = {
    _id,
    format,
    pageId,
    body,
    author,
    origin,
    hasDiffToPrev,
    createdAt,
    __v,
    path,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
