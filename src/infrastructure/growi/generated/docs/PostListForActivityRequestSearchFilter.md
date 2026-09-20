# PostListForActivityRequestSearchFilter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**usernames** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**actions** | **Array&lt;string&gt;** | Omit this field to match every activity. Send it only to restrict the result to the listed actions. | [optional] [default to undefined]
**dates** | [**PostListForActivityRequestSearchFilterDates**](PostListForActivityRequestSearchFilterDates.md) |  | [optional] [default to undefined]

## Example

```typescript
import { PostListForActivityRequestSearchFilter } from './api';

const instance: PostListForActivityRequestSearchFilter = {
    usernames,
    actions,
    dates,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
