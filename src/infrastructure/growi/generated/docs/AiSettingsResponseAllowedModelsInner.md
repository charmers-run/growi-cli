# AiSettingsResponseAllowedModelsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provider** | **string** | The model\&#39;s owning provider. | [default to undefined]
**modelId** | **string** | The model id (or, for Azure OpenAI, the deployment name). | [default to undefined]
**displayName** | **string** | The official display name resolved from the catalog (the modelId itself for catalog-less providers / free-text / removed ids). Display-only — never sent back in the PUT request. | [default to undefined]
**providerOptions** | **object** | Provider-namespaced options (e.g. {\&quot;openai\&quot;:{...}}). | [optional] [default to undefined]
**isDefault** | **boolean** | Whether this entry is the default model. | [optional] [default to undefined]

## Example

```typescript
import { AiSettingsResponseAllowedModelsInner } from './api';

const instance: AiSettingsResponseAllowedModelsInner = {
    provider,
    modelId,
    displayName,
    providerOptions,
    isDefault,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
