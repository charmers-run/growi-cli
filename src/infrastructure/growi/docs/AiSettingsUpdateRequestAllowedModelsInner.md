# AiSettingsUpdateRequestAllowedModelsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provider** | **string** |  | [default to undefined]
**modelId** | **string** | The model id (deployment name for Azure OpenAI). | [default to undefined]
**providerOptions** | **object** | Provider-namespaced options (e.g. {\&quot;openai\&quot;:{...}}); omit for no options. | [optional] [default to undefined]
**isDefault** | **boolean** | Marks the default entry. Exactly one entry must set this true. | [optional] [default to undefined]

## Example

```typescript
import { AiSettingsUpdateRequestAllowedModelsInner } from './api';

const instance: AiSettingsUpdateRequestAllowedModelsInner = {
    provider,
    modelId,
    providerOptions,
    isDefault,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
