# ShippingRangePriceItemRepository.php

**Path**: `src\Repository\ShippingRangePriceItemRepository.php`

## Classes
- `ShippingRangePriceItemRepository`

## Function Details

### `findByZoneAndFree`

- **Parameters**: `ZoneInterface $zone, ?ShippingZone $shippingZone, ?\DateTime $applicationDate = null`

### `findOneByMethod`

- **Parameters**: `int $total, ShippingMethodInterface $shippingMethod, ?\DateTime $applicationDate = null, ?ShippingZone $shippingZone = null`

### `findCheapeastByMethod`

- **Parameters**: `ShippingMethodInterface $shippingMethod, ?\DateTime $applicationDate = null, ?ShippingZone $shippingZone = null`

### `createRangePriceByTotalQueryBuilder`

- **Parameters**: `int $total, ?\DateTime $applicationDate = null`

