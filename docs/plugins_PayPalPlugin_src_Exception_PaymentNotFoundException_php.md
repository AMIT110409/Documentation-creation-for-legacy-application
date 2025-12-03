# PaymentNotFoundException.php

**Path**: `plugins\PayPalPlugin\src\Exception\PaymentNotFoundException.php`

## Summary
This PHP code defines a custom exception class `PaymentNotFoundException` that extends the base `\Exception` class, specifically designed to handle cases where a payment associated with a PayPal order cannot be found. The class provides a static method `withPayPalOrderId` to create an instance of the exception with a meaningful error message, including the PayPal order ID. This exception exists to provide a clear and informative error handling mechanism for payment-related issues in the Sylius PayPal plugin.

## Classes
- `PaymentNotFoundException`

## Function Details

### `withPayPalOrderId`

- **Parameters**: `string $payPalOrderId`

