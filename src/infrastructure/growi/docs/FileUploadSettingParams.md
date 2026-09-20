# FileUploadSettingParams

FileUploadTypeParams

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fileUploadType** | **string** | fileUploadType | [optional] [default to undefined]
**s3Region** | **string** | region of AWS S3 | [optional] [default to undefined]
**s3CustomEndpoint** | **string** | custom endpoint of AWS S3 | [optional] [default to undefined]
**s3Bucket** | **string** | AWS S3 bucket name | [optional] [default to undefined]
**s3AccessKeyId** | **string** | accesskey id for authentification of AWS | [optional] [default to undefined]
**s3SecretAccessKey** | **string** | secret key for authentification of AWS | [optional] [default to undefined]
**s3ReferenceFileWithRelayMode** | **boolean** | is enable internal stream system for s3 file request | [optional] [default to undefined]
**gcsApiKeyJsonPath** | **string** | apiKeyJsonPath of gcp | [optional] [default to undefined]
**gcsBucket** | **string** | bucket name of gcs | [optional] [default to undefined]
**gcsUploadNamespace** | **string** | name space of gcs | [optional] [default to undefined]
**gcsReferenceFileWithRelayMode** | **boolean** | is enable internal stream system for gcs file request | [optional] [default to undefined]
**azureTenantId** | **string** | tenant id of azure | [optional] [default to undefined]
**azureClientId** | **string** | client id of azure | [optional] [default to undefined]
**azureClientSecret** | **string** | client secret of azure | [optional] [default to undefined]
**azureStorageAccountName** | **string** | storage account name of azure | [optional] [default to undefined]
**azureStorageContainerName** | **string** | storage container name of azure | [optional] [default to undefined]
**azureReferenceFileWithRelayMode** | **boolean** | is enable internal stream system for azure file request | [optional] [default to undefined]

## Example

```typescript
import { FileUploadSettingParams } from './api';

const instance: FileUploadSettingParams = {
    fileUploadType,
    s3Region,
    s3CustomEndpoint,
    s3Bucket,
    s3AccessKeyId,
    s3SecretAccessKey,
    s3ReferenceFileWithRelayMode,
    gcsApiKeyJsonPath,
    gcsBucket,
    gcsUploadNamespace,
    gcsReferenceFileWithRelayMode,
    azureTenantId,
    azureClientId,
    azureClientSecret,
    azureStorageAccountName,
    azureStorageContainerName,
    azureReferenceFileWithRelayMode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
