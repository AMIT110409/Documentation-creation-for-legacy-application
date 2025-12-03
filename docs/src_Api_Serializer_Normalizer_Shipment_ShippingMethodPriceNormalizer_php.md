# ShippingMethodPriceNormalizer.php

**Path**: `src\Api\Serializer\Normalizer\Shipment\ShippingMethodPriceNormalizer.php`

## Summary
@param ShippingMethod $object
@param string|null $format
@param array $context
@return array

## Classes
- `ShippingMethodPriceNormalizer`

## Function Details

### `supportsNormalization`

- **Parameters**: `mixed $data, ?string $format = null, array $context = []`

### `normalize`

- **Parameters**: `mixed $object, ?string $format = null, array $context = []`
- **Description**: @param ShippingMethod $object
@param string|null $format
@param array $context
@return array
/

### `getShippingMethodPrice`

- **Parameters**: `$data, $shippingMethod`

### `getOrder`


### `getShipment`

- **Parameters**: `OrderInterface $order`

### `calculatePrice`

- **Parameters**: `Order $order, Shipment $shipment, $shippingMethod, $data`

### `calculateSyliusPrice`

- **Parameters**: `ShipmentInterface $shipment, ShippingMethodInterface $shippingMethod`

