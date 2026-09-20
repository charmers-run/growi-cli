# AiProviderUpdateRequest

Per-provider section of the PUT request. Full-state replace (`enabled` omitted = false) with one merge exception: `apiKey` is write-only — an empty or omitted value keeps the stored key (there is no clear operation), and a new key is applied only when a non-empty string is sent (Req 1.4).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **boolean** | Whether the provider is toggled on. Omitted &#x3D; false. | [optional] [default to undefined]
**apiKey** | **string** | Write-only; never returned by GET. Empty or omitted keeps the stored key; a non-empty value overwrites it. Keys are never cleared. | [optional] [default to undefined]
**azureOpenaiSettings** | [**AiProviderUpdateRequestAzureOpenaiSettings**](AiProviderUpdateRequestAzureOpenaiSettings.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AiProviderUpdateRequest } from './api';

const instance: AiProviderUpdateRequest = {
    enabled,
    apiKey,
    azureOpenaiSettings,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
