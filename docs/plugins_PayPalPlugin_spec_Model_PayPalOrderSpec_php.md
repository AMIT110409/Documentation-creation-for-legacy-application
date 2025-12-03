# PayPalOrderSpec.php

**Path**: `plugins\PayPalPlugin\spec\Model\PayPalOrderSpec.php`

## Summary
This PHP specification file defines the behavior of the `PayPalOrder` class, which is responsible for generating PayPal order data based on a Sylius order and a PayPal purchase unit. The code exists to ensure that the `PayPalOrder` class correctly constructs and returns a PayPal order data array, including shipping address and purchase unit details, for capture payment processing. It tests the class's functionality in the context of e-commerce payment processing using the Sylius and PayPal plugins.

## Classes
- `PayPalOrderSpec`

## Function Details

### `let`

- **Parameters**: `OrderInterface $order, PayPalPurchaseUnit $payPalPurchaseUnit`

