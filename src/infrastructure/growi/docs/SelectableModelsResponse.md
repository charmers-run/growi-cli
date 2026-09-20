# SelectableModelsResponse

The selectable models for a provider, narrowed to chat + tool-capable models by the catalog filter (applied identically at vendoring time and on a runtime refresh). Carries model id + display-name information only — never an API key, provider credentials, or providerOptions (Req 7.1).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**models** | [**Array&lt;SelectableModelsResponseModelsInner&gt;**](SelectableModelsResponseModelsInner.md) | The models offered for selection. An empty array for a valid but catalog-less provider (e.g. azure-openai). | [default to undefined]

## Example

```typescript
import { SelectableModelsResponse } from './api';

const instance: SelectableModelsResponse = {
    models,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
