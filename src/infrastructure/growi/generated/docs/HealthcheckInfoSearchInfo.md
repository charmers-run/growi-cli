# HealthcheckInfoSearchInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_name** | **string** |  | [optional] [default to undefined]
**status** | **string** |  | [optional] [default to undefined]
**timed_out** | **boolean** |  | [optional] [default to undefined]
**number_of_nodes** | **number** |  | [optional] [default to undefined]
**number_of_data_nodes** | **number** |  | [optional] [default to undefined]
**active_primary_shards** | **number** |  | [optional] [default to undefined]
**active_shards** | **number** |  | [optional] [default to undefined]
**relocating_shards** | **number** |  | [optional] [default to undefined]
**initializing_shards** | **number** |  | [optional] [default to undefined]
**unassigned_shards** | **number** |  | [optional] [default to undefined]
**delayed_unassigned_shards** | **number** |  | [optional] [default to undefined]
**number_of_pending_tasks** | **number** |  | [optional] [default to undefined]
**number_of_in_flight_fetch** | **number** |  | [optional] [default to undefined]
**task_max_waiting_in_queue_millis** | **number** |  | [optional] [default to undefined]
**active_shards_percent_as_number** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { HealthcheckInfoSearchInfo } from './api';

const instance: HealthcheckInfoSearchInfo = {
    cluster_name,
    status,
    timed_out,
    number_of_nodes,
    number_of_data_nodes,
    active_primary_shards,
    active_shards,
    relocating_shards,
    initializing_shards,
    unassigned_shards,
    delayed_unassigned_shards,
    number_of_pending_tasks,
    number_of_in_flight_fetch,
    task_max_waiting_in_queue_millis,
    active_shards_percent_as_number,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
