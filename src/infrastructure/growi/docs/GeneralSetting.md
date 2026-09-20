# GeneralSetting


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**restrictGuestMode** | **string** | type of restrictGuestMode | [optional] [default to undefined]
**pageDeletionAuthority** | **string** | type of pageDeletionAuthority | [optional] [default to undefined]
**pageRecursiveDeletionAuthority** | **string** | type of pageRecursiveDeletionAuthority | [optional] [default to undefined]
**pageRecursiveCompleteDeletionAuthority** | **string** | type of pageRecursiveCompleteDeletionAuthority | [optional] [default to undefined]
**isAllGroupMembershipRequiredForPageCompleteDeletion** | **boolean** | enable all group membership required for page complete deletion | [optional] [default to undefined]
**pageCompleteDeletionAuthority** | **string** | type of pageDeletionAuthority | [optional] [default to undefined]
**disableUserPages** | **boolean** | hide all user pages from general users | [optional] [default to undefined]
**hideRestrictedByOwner** | **boolean** | enable hide by owner | [optional] [default to undefined]
**hideRestrictedByGroup** | **boolean** | enable hide by group | [optional] [default to undefined]
**isUsersHomepageDeletionEnabled** | **boolean** | enable user homepage deletion | [optional] [default to undefined]
**isForceDeleteUserHomepageOnUserDeletion** | **boolean** | enable force delete user homepage on user deletion | [optional] [default to undefined]
**isRomUserAllowedToComment** | **boolean** | enable rom user allowed to comment | [optional] [default to undefined]
**wikiMode** | **string** | type of wikiMode | [optional] [default to undefined]
**sessionMaxAge** | **number** | max age of session | [optional] [default to undefined]

## Example

```typescript
import { GeneralSetting } from './api';

const instance: GeneralSetting = {
    restrictGuestMode,
    pageDeletionAuthority,
    pageRecursiveDeletionAuthority,
    pageRecursiveCompleteDeletionAuthority,
    isAllGroupMembershipRequiredForPageCompleteDeletion,
    pageCompleteDeletionAuthority,
    disableUserPages,
    hideRestrictedByOwner,
    hideRestrictedByGroup,
    isUsersHomepageDeletionEnabled,
    isForceDeleteUserHomepageOnUserDeletion,
    isRomUserAllowedToComment,
    wikiMode,
    sessionMaxAge,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
