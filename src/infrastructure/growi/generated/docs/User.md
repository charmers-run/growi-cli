# User

User

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **string** | user ID | [optional] [default to undefined]
**lang** | **string** | language | [optional] [default to undefined]
**status** | **number** | status | [optional] [default to undefined]
**admin** | **boolean** | whether the admin | [optional] [default to undefined]
**email** | **string** | E-Mail address | [optional] [default to undefined]
**username** | **string** | username | [optional] [default to undefined]
**name** | **string** | full name | [optional] [default to undefined]
**createdAt** | **string** | date created at | [optional] [default to undefined]
**imageUrlCached** | **string** | cached image URL | [optional] [default to undefined]
**isEmailPublished** | **boolean** | whether the email is published | [optional] [default to undefined]
**isGravatarEnabled** | **boolean** | whether the gravatar is enabled | [optional] [default to undefined]
**isInvitationEmailSended** | **boolean** | whether the invitation email is sent | [optional] [default to undefined]
**lastLoginAt** | **string** | datetime last login at | [optional] [default to undefined]
**readOnly** | **boolean** | whether the user is read only | [optional] [default to undefined]
**updatedAt** | **string** | datetime updated at | [optional] [default to undefined]
**__v** | **number** | DB record version | [optional] [default to undefined]

## Example

```typescript
import { User } from './api';

const instance: User = {
    _id,
    lang,
    status,
    admin,
    email,
    username,
    name,
    createdAt,
    imageUrlCached,
    isEmailPublished,
    isGravatarEnabled,
    isInvitationEmailSended,
    lastLoginAt,
    readOnly,
    updatedAt,
    __v,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
