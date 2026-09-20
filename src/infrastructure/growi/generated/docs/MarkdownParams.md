# MarkdownParams

MarkdownParams

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**isEnabledLinebreaks** | **boolean** | enable lineBreak | [optional] [default to undefined]
**isEnabledLinebreaksInComments** | **boolean** | enable lineBreak in comment | [optional] [default to undefined]
**adminPreferredIndentSize** | **number** | preferred indent size | [optional] [default to undefined]
**isIndentSizeForced** | **boolean** | force indent size | [optional] [default to undefined]
**isEnabledXss** | **boolean** | enable xss | [optional] [default to undefined]
**xssOption** | **number** | number of xss option | [optional] [default to undefined]
**tagWhitelist** | **Array&lt;string&gt;** | array of tag whitelist | [optional] [default to undefined]
**attrWhitelist** | **string** | attr whitelist | [optional] [default to undefined]

## Example

```typescript
import { MarkdownParams } from './api';

const instance: MarkdownParams = {
    isEnabledLinebreaks,
    isEnabledLinebreaksInComments,
    adminPreferredIndentSize,
    isIndentSizeForced,
    isEnabledXss,
    xssOption,
    tagWhitelist,
    attrWhitelist,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
