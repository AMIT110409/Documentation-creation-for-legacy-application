# ChooseShippingMethodHandler.php

**Path**: `src\Api\CommandHandler\Checkout\ChooseShippingMethodHandler.php`

## Summary
@var OrderInterface|null $cart

## Classes
- `ChooseShippingMethodHandler`

## Function Details

### `__invoke`

- **Parameters**: `ChooseShippingMethod $command`

### `processShippingMethodSelection`

- **Parameters**: `OrderInterface $cart, ChooseShippingMethod $command`

### `processPickupPointShipping`

- **Parameters**: `OrderInterface $cart, PickupPoint $pickupPoint, ShipmentInterface $shipment, ShippingMethodInterface $shippingMethod`

### `processHomeDelivery`

- **Parameters**: `OrderInterface $cart, ShipmentInterface $shipment, ShippingMethodInterface $shippingMethod`

### `validatePickupPointEligibility`

- **Parameters**: `OrderInterface $cart, PickupPoint $pickupPoint, ShippingMethodInterface $shippingMethod`

### `validateHomeDeliveryEligibility`

- **Parameters**: `ShipmentInterface $shipment, ShippingMethodInterface $shippingMethod`

### `setPickupPointAddress`

- **Parameters**: `OrderInterface $cart, PickupPoint $pickupPoint, ShippingMethodInterface $shippingMethod`

### `setShippingMethod`

- **Parameters**: `ShipmentInterface $shipment, ShippingMethodInterface $shippingMethod`

### `applyAddressTransition`

- **Parameters**: `OrderInterface $cart`

### `applyShippingTransition`

- **Parameters**: `OrderInterface $cart`

### `getCart`

- **Parameters**: `string $tokenValue`

### `validateTransition`

- **Parameters**: `OrderInterface $cart, ChooseShippingMethod $command`

### `getShipment`

- **Parameters**: `string $shipmentId, int $orderId`

### `validateOrder`

- **Parameters**: `OrderInterface $cart`

