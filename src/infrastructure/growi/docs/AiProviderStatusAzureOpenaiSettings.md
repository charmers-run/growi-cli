# AiProviderStatusAzureOpenaiSettings

Azure OpenAI connection settings — present only on the \'azure-openai\' entry. These carry no secrets, so they may be returned.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resourceName** | **string** |  | [optional] [default to undefined]
**baseURL** | **string** |  | [optional] [default to undefined]
**apiVersion** | **string** |  | [optional] [default to undefined]
**useEntraId** | **boolean** | Whether Azure OpenAI authenticates via Microsoft Entra ID instead of an API key (absent &#x3D; false). | [optional] [default to undefined]

## Example

```typescript
import { AiProviderStatusAzureOpenaiSettings } from './api';

const instance: AiProviderStatusAzureOpenaiSettings = {
    resourceName,
    baseURL,
    apiVersion,
    useEntraId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
