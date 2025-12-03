# OrderRuleInterface.php

**Path**: `src\Entity\Order\OrderRuleInterface.php`

## Summary
@return Collection&lt;int, ChannelInterface&gt;

## Function Details

### `getId`


### `getName`


### `setName`

- **Parameters**: `string $type`

### `getDescription`


### `setDescription`

- **Parameters**: `?string $description`

### `getChannels`

- **Description**: @return Collection&lt;int, ChannelInterface&gt;
/

### `addChannel`

- **Parameters**: `ChannelInterface $channel`

### `removeChannel`

- **Parameters**: `ChannelInterface $channel`

### `isEnabled`


### `setEnabled`

- **Parameters**: `bool $enabled`

### `enable`


### `disable`


### `getConditions`

- **Description**: @return Collection&lt;int, OrderRuleCondition&gt;
/

### `addCondition`

- **Parameters**: `OrderRuleCondition $condition`

### `removeCondition`

- **Parameters**: `OrderRuleCondition $condition`

### `setErrorMessage`

- **Parameters**: `?string $errorMessage`

### `getErrorMessage`


