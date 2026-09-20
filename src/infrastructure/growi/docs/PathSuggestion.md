# PathSuggestion


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | The type of suggestion | [default to undefined]
**path** | **string** | Suggested page path | [default to undefined]
**label** | **string** | Human-readable label for the suggestion | [default to undefined]
**description** | **string** | Explanation of why this path is suggested | [default to undefined]
**grant** | **number** | Page grant (1&#x3D;public, 4&#x3D;owner_only, 5&#x3D;user_group) | [default to undefined]
**informationType** | **string** | Whether the content is flow (time-based) or stock (reference) | [optional] [default to undefined]

## Example

```typescript
import { PathSuggestion } from './api';

const instance: PathSuggestion = {
    type,
    path,
    label,
    description,
    grant,
    informationType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
