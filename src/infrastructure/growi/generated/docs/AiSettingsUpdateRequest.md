# AiSettingsUpdateRequest

Each top-level section (aiEnabled / providers / allowedModels) is OMIT = LEAVE UNCHANGED; a present section is a full-state replace of that section. When `providers` is present it MUST carry an entry for every supported provider (fixed-slot model). An empty `allowedModels` array is accepted and stored as \"no allowed models\" (Req 3.3). In env-only mode a request containing `providers` or `aiEnabled` is rejected with 400; only `allowedModels` is editable (Req 5.2, 5.3).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aiEnabled** | **boolean** | Toggle for app:aiEnabled. Omit &#x3D; unchanged. | [optional] [default to undefined]
**providers** | [**{ [key: string]: AiProviderUpdateRequest; }**](AiProviderUpdateRequest.md) | Per-provider update sections keyed by provider (openai, anthropic, google, azure-openai). Omit &#x3D; unchanged; when present, all four entries are required. | [optional] [default to undefined]
**allowedModels** | [**Array&lt;AiSettingsUpdateRequestAllowedModelsInner&gt;**](AiSettingsUpdateRequestAllowedModelsInner.md) | The cross-provider allow-list (full-state replace). Omit &#x3D; unchanged; an empty array is stored as \&quot;no allowed models\&quot;. When non-empty, every entry needs a supported provider, a non-empty unique (provider, modelId) pair, and exactly one entry must be the default. | [optional] [default to undefined]

## Example

```typescript
import { AiSettingsUpdateRequest } from './api';

const instance: AiSettingsUpdateRequest = {
    aiEnabled,
    providers,
    allowedModels,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
