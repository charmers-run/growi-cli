# AiSettingsResponse

The currently effective multi-provider AI configuration for the admin UI. No API key value is ever returned — only the per-provider isApiKeySet flag (Req 1.8, 1.9).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aiEnabled** | **boolean** | State of app:aiEnabled (the AI enable toggle). | [default to undefined]
**providers** | [**{ [key: string]: AiProviderStatus; }**](AiProviderStatus.md) | Status of every supported provider (openai, anthropic, google, azure-openai). All four are always present as fixed slots (Req 1.1): an unconfigured provider is returned as a disabled entry, never omitted. | [default to undefined]
**allowedModels** | [**Array&lt;AiSettingsResponseAllowedModelsInner&gt;**](AiSettingsResponseAllowedModelsInner.md) | The cross-provider allow-list (ai:allowedModels). Each entry carries its owning provider, model id (deployment name for Azure OpenAI), optional provider-namespaced providerOptions, and an isDefault flag (exactly one entry is the default). Always an array (empty when no models are configured). | [default to undefined]
**useOnlyEnvVars** | **boolean** | When true (env:useOnlyEnvVars:ai), provider connection settings are fixed by env vars and read-only. | [default to undefined]
**isConfigured** | **boolean** | Whether at least one available provider has at least one allowed model (isAiConfigured()). | [default to undefined]

## Example

```typescript
import { AiSettingsResponse } from './api';

const instance: AiSettingsResponse = {
    aiEnabled,
    providers,
    allowedModels,
    useOnlyEnvVars,
    isConfigured,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
