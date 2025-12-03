# PickupPointRepository.php

**Path**: `src\Repository\PickupPoint\PickupPointRepository.php`

## Summary
@return PickupPoint[]

@throws QueryException

## Classes
- `PickupPointRepository`

## Function Details

### `findByShippingMethod`

- **Parameters**: `ShippingMethod $shippingMethod`
- **Description**: @return PickupPoint[]

@throws QueryException
/

### `findOneByNameAddress`

- **Parameters**: `PickupPointDto $pickupPointDto, string $commonExternalRef`
- **Description**: @throws NonUniqueResultException
/

### `findOneByShippingMethodAndReference`

- **Parameters**: `ShippingMethod $shippingMethod, string $externalReference`
- **Description**: @throws NonUniqueResultException
/

### `findByShippingMethodAndReferences`

- **Parameters**: `ShippingMethod $shippingMethod, array $externalReferences`

### `findPickupPointToDelete`

- **Parameters**: `ShippingMethod $shippingMethod, array $externalReferences`
- **Description**: @return array&lt;PickupPoint&gt;
/

### `createByShippingMethodQueryBuilder`

- **Parameters**: `ShippingMethod $shippingMethod`

### `findByNearests`

- **Parameters**: `string $lat, string $lng, array $shippingMethods, ?int $radius = 10, ?int $nbResults = 10`

### `createDefaultEnabledQueryBuilder`

- **Parameters**: `?array $shippingMethods, ?int $nbResults = 10`

### `createWeightEnabledQueryBuilder`

- **Parameters**: `?array $shippingMethods, ?float $weight, ?int $nbResults = 10`

