# UpdateCustomerSession.php

**Path**: `src\TalonOne\Domain\UseCase\UpdateCustomerSession.php`

## Summary
@throws TalonOneApiException

## Classes
- `UpdateCustomerSession`

## Function Details

### `execute`

- **Parameters**: `Order $order, ?string $couponCode = null, bool $withApplication = true`

### `applyEffect`

- **Parameters**: `Order $order, iterable $effects`

### `manageNotifications`

- **Parameters**: `Order $order, array $effects`

### `manageAchivementOriginCode`

- **Parameters**: `Order $order, array $effects`
- **Description**: @throws TalonOneApiException
/

### `findTranslationForCustomEffectType`

- **Parameters**: `Effect $customEffect, array $effects, Order $order`

### `manageAnalytics`

- **Parameters**: `Order $order, array $effects`

### `manageTranslations`

- **Parameters**: `Order $order, array $effects`

