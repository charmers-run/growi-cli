# ThemesMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of the plugin theme. | [optional] [default to undefined]
**manifestKey** | **string** | Path to the theme manifest file. | [optional] [default to undefined]
**schemeType** | **string** | The color scheme type (e.g., light or dark). | [optional] [default to undefined]
**lightBg** | **string** | Light mode background color (hex). | [optional] [default to undefined]
**darkBg** | **string** | Dark mode background color (hex). | [optional] [default to undefined]
**lightSidebar** | **string** | Light mode sidebar color (hex). | [optional] [default to undefined]
**darkSidebar** | **string** | Dark mode sidebar color (hex). | [optional] [default to undefined]
**lightIcon** | **string** | Light mode icon color (hex). | [optional] [default to undefined]
**darkIcon** | **string** | Dark mode icon color (hex). | [optional] [default to undefined]
**createBtn** | **string** | Color of the create button (hex). | [optional] [default to undefined]

## Example

```typescript
import { ThemesMetadata } from './api';

const instance: ThemesMetadata = {
    name,
    manifestKey,
    schemeType,
    lightBg,
    darkBg,
    lightSidebar,
    darkSidebar,
    lightIcon,
    darkIcon,
    createBtn,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
