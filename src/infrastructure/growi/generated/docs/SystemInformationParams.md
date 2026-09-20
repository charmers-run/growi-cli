# SystemInformationParams


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**growiVersion** | **string** | GROWI version or \&#39;-\&#39; | [optional] [default to undefined]
**nodeVersion** | **string** | node version or \&#39;-\&#39; | [optional] [default to undefined]
**npmVersion** | **string** | npm version or \&#39;-\&#39; | [optional] [default to undefined]
**pnpmVersion** | **string** | pnpm version or \&#39;-\&#39; | [optional] [default to undefined]
**envVars** | **{ [key: string]: string; }** | environment variables | [optional] [default to undefined]
**isV5Compatible** | **boolean** | This value is true if this GROWI is compatible v5. | [optional] [default to undefined]
**isMaintenanceMode** | **boolean** | This value is true if this site is maintenance mode. | [optional] [default to undefined]

## Example

```typescript
import { SystemInformationParams } from './api';

const instance: SystemInformationParams = {
    growiVersion,
    nodeVersion,
    npmVersion,
    pnpmVersion,
    envVars,
    isV5Compatible,
    isMaintenanceMode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
