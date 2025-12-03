# OrderRepository.php

**Path**: `src\Repository\Order\OrderRepository.php`

## Summary
Liste des commandes.

## Classes
- `OrderRepository`

## Function Details

### `__construct`

- **Parameters**: `EntityManagerInterface $entityManager, ClassMetadata $class`

### `createOrderQueryBuilder`

- **Parameters**: `string $alias = 'o', bool $excludeSubscriptionOrder = false`

### `createCartQueryBuilder`

- **Parameters**: `string $alias = 'o', bool $excludeSubscriptionOrder = false`

### `createOrderListQueryBuilder`

- **Parameters**: `string $alias = 'o', bool $excludeSubscriptionOrder = false`
- **Description**: Liste des commandes.
/

### `createCartListQueryBuilder`

- **Parameters**: `string $alias = 'o', bool $excludeSubscriptionOrder = false`

### `createListCartQueryBuilder`

- **Description**: Liste de carts.
/

### `findIdOrderToSendToTalonSessions`

- **Parameters**: `int $offset, int $batchSize`

### `findOrdersForMiddleware`

- **Parameters**: `\DateTime $date, int $delay`

### `countOrdersWithRef`

- **Parameters**: `array $refs, Customer $customer, ?OrderInterface $currentOrder = null`

### `countOrdersWithProductRef`

- **Parameters**: `array $refs, Customer $customer, ?OrderInterface $currentOrder = null`

### `findOrdersCompletedBeforeDatetime`

- **Parameters**: `\DateTime $dateTime, Customer $customer`

### `countOrdersCompletedForCustomer`

- **Parameters**: `Customer $customer, ?OrderInterface $excludeOrder = null`

### `findOrdersCompletedForCustomer`

- **Parameters**: `Customer $customer, ?OrderInterface $excludeOrder = null`

### `deleteCartsCustomer`

- **Parameters**: `Customer $customer`

### `getOrderArray`

- **Parameters**: `$id`

### `iteratorOnMissingInvoice`

- **Parameters**: `?\DateTime $minCompletedAt = null, ?\DateTime $maxCompletedAt = null`

### `countByPromotionCoupon`

- **Parameters**: `PromotionCouponInterface $coupon`

### `switchOrderChannel`

- **Parameters**: `Customer $customer`

