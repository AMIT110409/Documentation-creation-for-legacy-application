# CreateOrderApi.php

**Path**: `plugins\PayPalPlugin\src\Api\CreateOrderApi.php`

## Summary
This PHP class, `CreateOrderApi`, is part of the Sylius package and is responsible for creating a PayPal order through the PayPal API. It takes a payment token, a payment object, and a reference ID as input, and uses various providers and clients to gather necessary data and create the order. The class exists to facilitate the integration of PayPal payment processing within the Sylius e-commerce framework, enabling the creation of PayPal orders for online transactions.

## Classes
- `CreateOrderApi`

## Function Details

### `create`

- **Parameters**: `string $token, PaymentInterface $payment, string $referenceId`

### `_getApplicationContext`

- **Parameters**: `array $config, OrderInterface $order`

### `getOrderPromotionTotal`

- **Parameters**: `PaymentInterface $payment, OrderInterface $order, array $payPalItemData`

