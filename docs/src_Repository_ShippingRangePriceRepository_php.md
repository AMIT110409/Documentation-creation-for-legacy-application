# ShippingRangePriceRepository.php

**Path**: `src\Repository\ShippingRangePriceRepository.php`

## Classes
- `ShippingRangePriceRepository`

## Function Details

### `findOneByMethod`

- **Parameters**: `$total, ShippingMethodInterface $shippingMethod, ?\DateTime $applicationDate = null`

### `findOneByShippingZone`

- **Parameters**: `$total, ShippingZone $shippingZone, $shippingMethod, ?\DateTime $applicationDate = null`

### `createRangePriceByTotalQueryBuilder`

- **Parameters**: `int $total, ?\DateTime $applicationDate = null`

### `findByRangePrices`

- **Parameters**: `$rangePrice, ShippingMethod $shippingMethod`

### `findCheapestByMethod`

- **Parameters**: `ShippingMethodInterface $shippingMethod, ?\DateTime $applicationDate = null`

### `findCheapestByMethodAndZone`

- **Parameters**: `ShippingZone $shippingZone, ShippingMethodInterface $shippingMethod, ?\DateTime $applicationDate = null`

