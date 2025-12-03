# SubscriptionOrderRepository.php

**Path**: `src\Repository\Subscription\SubscriptionOrderRepository.php`

## Summary
@throws NonUniqueResultException

## Classes
- `SubscriptionOrderRepository`

## Function Details

### `findByOrdersByVariantUpdatedAndStatus`

- **Parameters**: `int $variantId, SubscriptionOrderState $draftState`

### `findLastSubscriptionOrderByState`

- **Parameters**: `Subscription $subscription, SubscriptionOrderState $state`
- **Description**: @throws NonUniqueResultException
/

### `countSubscriptionOrderProcessed`

- **Parameters**: `Subscription $subscription`
- **Description**: @throws NoResultException
@throws NonUniqueResultException
/

### `findAllSubscriptionOrderActive`


### `countSubscriptionOrderActive`


### `iteratorByProductVariantInOrderItemsAndNextShipping`

- **Parameters**: `array $idsProductVariant, \DateTime $nextShippingAt`

