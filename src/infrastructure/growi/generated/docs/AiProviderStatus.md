# AiProviderStatus

Per-provider status for the admin UI. The stored API key value is never returned — only isApiKeySet exposes its presence (Req 1.8, 1.9).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **boolean** | Whether the provider is toggled on by the admin. | [default to undefined]
**isApiKeySet** | **boolean** | Whether an API key is stored for the provider. The key value itself is never returned. | [default to undefined]
**azureOpenaiSettings** | [**AiProviderStatusAzureOpenaiSettings**](AiProviderStatusAzureOpenaiSettings.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AiProviderStatus } from './api';

const instance: AiProviderStatus = {
    enabled,
    isApiKeySet,
    azureOpenaiSettings,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
