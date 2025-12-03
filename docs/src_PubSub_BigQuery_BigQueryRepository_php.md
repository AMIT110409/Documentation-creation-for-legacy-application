# BigQueryRepository.php

**Path**: `src\PubSub\BigQuery\BigQueryRepository.php`

## Classes
- `BigQueryRepository`

## Function Details

### `find`

- **Parameters**: `string $messageId, LogsType $type`

### `runQuery`

- **Parameters**: `string $query`

### `findByObjectIdQuery`

- **Parameters**: `?string $objectId, LogsType $type, array $args = []`

### `countByObjectIdQuery`

- **Parameters**: `?string $objectId, LogsType $type, array $args = []`

### `getTable`

- **Parameters**: `LogsType $type`

### `countOrderLogs`

- **Parameters**: `int $orderId, array $args = []`

### `countCustomerLogs`

- **Parameters**: `int $customerId, array $args = []`

### `countSubscriptionLogs`

- **Parameters**: `int $subscriptionId, array $args = []`

### `countPromotionLogs`

- **Parameters**: `int $promotionId, array $args = []`

### `getOrderLogs`

- **Parameters**: `int $orderId, array $args = []`

### `getCustomerLogs`

- **Parameters**: `int $customerId, array $args = []`

### `getSubscriptionLogs`

- **Parameters**: `int $subscriptionId, array $args = []`

### `getPromotionLogs`

- **Parameters**: `int $promotionId, array $args = []`

