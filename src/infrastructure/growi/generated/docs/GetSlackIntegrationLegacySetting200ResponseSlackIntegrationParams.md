# GetSlackIntegrationLegacySetting200ResponseSlackIntegrationParams


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**webhookUrl** | **string** | incoming webhooks url | [optional] [default to undefined]
**isIncomingWebhookPrioritized** | **boolean** | use incoming webhooks even if Slack App settings are enabled | [optional] [default to undefined]
**slackToken** | **string** | OAuth access token | [optional] [default to undefined]
**isSlackbotConfigured** | **boolean** | whether slackbot is configured | [optional] [default to undefined]

## Example

```typescript
import { GetSlackIntegrationLegacySetting200ResponseSlackIntegrationParams } from './api';

const instance: GetSlackIntegrationLegacySetting200ResponseSlackIntegrationParams = {
    webhookUrl,
    isIncomingWebhookPrioritized,
    slackToken,
    isSlackbotConfigured,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
