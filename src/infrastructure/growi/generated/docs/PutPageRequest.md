# PutPageRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **string** | Revision content body | [default to undefined]
**pageId** | **string** | Object ID | [default to undefined]
**revisionId** | **string** | Object ID | [default to undefined]
**grant** | **number** | Grant for page | [optional] [default to undefined]
**userRelatedGrantUserGroupIds** | [**Array&lt;PutPageRequestUserRelatedGrantUserGroupIdsInner&gt;**](PutPageRequestUserRelatedGrantUserGroupIdsInner.md) |  | [optional] [default to undefined]
**overwriteScopesOfDescendants** | **boolean** | Determine whether the scopes of descendants should be overwritten | [optional] [default to undefined]
**isSlackEnabled** | **boolean** | Determine whether the page is enabled to be posted to Slack | [optional] [default to undefined]
**slackChannels** | **string** | Slack channel IDs | [optional] [default to undefined]
**origin** | **string** | Origin is \&quot;view\&quot; or \&quot;editor\&quot; | [optional] [default to undefined]
**wip** | **boolean** | Determine whether the page is WIP | [optional] [default to undefined]

## Example

```typescript
import { PutPageRequest } from './api';

const instance: PutPageRequest = {
    body,
    pageId,
    revisionId,
    grant,
    userRelatedGrantUserGroupIds,
    overwriteScopesOfDescendants,
    isSlackEnabled,
    slackChannels,
    origin,
    wip,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
