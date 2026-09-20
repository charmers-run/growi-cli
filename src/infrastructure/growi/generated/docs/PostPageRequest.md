# PostPageRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **string** | Text of page | [default to undefined]
**path** | **string** | Page path | [default to undefined]
**grant** | **number** | Grant for page | [optional] [default to undefined]
**grantUserGroupIds** | [**Array&lt;PutPageRequestUserRelatedGrantUserGroupIdsInner&gt;**](PutPageRequestUserRelatedGrantUserGroupIdsInner.md) |  | [optional] [default to undefined]
**pageTags** | **Array&lt;string&gt;** |  | [optional] [default to undefined]

## Example

```typescript
import { PostPageRequest } from './api';

const instance: PostPageRequest = {
    body,
    path,
    grant,
    grantUserGroupIds,
    pageTags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
