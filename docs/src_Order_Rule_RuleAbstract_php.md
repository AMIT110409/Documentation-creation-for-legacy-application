# RuleAbstract.php

**Path**: `src\Order\Rule\RuleAbstract.php`

## Classes
- `RuleAbstract`

## Function Details

### `mayBeAppliedOnOrder`

- **Parameters**: `OrderInterface $order, OrderRuleConditionInterface $condition`

### `getTotalOrderItems`

- **Parameters**: `OrderInterface $order, array $taxons = []`

### `getItemsQuantity`

- **Parameters**: `OrderInterface $order, array $taxons = []`

### `canBeCalculate`

- **Parameters**: `OrderItem $orderItem, array $taxons`

### `hasProductValidTaxon`

- **Parameters**: `ProductInterface $product, array $taxons`

