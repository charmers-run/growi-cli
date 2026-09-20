# GitHubOAuthSetting


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**githubClientId** | **string** | key of comsumer | [optional] [default to undefined]
**githubClientSecret** | **string** | password of comsumer | [optional] [default to undefined]
**isSameUsernameTreatedAsIdenticalUser** | **boolean** | local account automatically linked the email matched | [optional] [default to undefined]

## Example

```typescript
import { GitHubOAuthSetting } from './api';

const instance: GitHubOAuthSetting = {
    githubClientId,
    githubClientSecret,
    isSameUsernameTreatedAsIdenticalUser,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
