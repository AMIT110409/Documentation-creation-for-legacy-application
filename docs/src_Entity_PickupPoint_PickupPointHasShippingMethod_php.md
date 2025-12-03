# PickupPointHasShippingMethod.php

**Path**: `src\Entity\PickupPoint\PickupPointHasShippingMethod.php`

## Summary
@var Collection&lt;int, PickupPointClosingPeriod&gt;&amp;iterable&lt;PickupPointClosingPeriod&gt;

## Classes
- `PickupPointHasShippingMethod`

## Function Details

### `__construct`


### `getId`


### `getPickupPoint`


### `setPickupPoint`

- **Parameters**: `?PickupPoint $pickupPoint`

### `getShippingMethod`


### `setShippingMethod`

- **Parameters**: `?ShippingMethod $shippingMethod`

### `getExternalReference`


### `setExternalReference`

- **Parameters**: `string $externalReference`

### `isEnabled`


### `setEnabled`

- **Parameters**: `bool $enabled`

### `addClosingPeriod`

- **Parameters**: `PickupPointClosingPeriod $closingPeriod`

### `removeClosingPeriod`

- **Parameters**: `PickupPointClosingPeriod $closingPeriod`

### `getClosingPeriods`


### `hasClosingPeriod`

- **Parameters**: `PickupPointClosingPeriod $closingPeriod`

### `isAvailable`

- **Parameters**: `int $gracePeriod = self::GRACE_PERIOD_IN_DAYS_BEFORE_CLOSING`

### `getWeightLimit`


### `setWeightLimit`

- **Parameters**: `?float $weightLimit`

