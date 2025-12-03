# PayPalOrderCompleteProcessorSpec.php

**Path**: `plugins\PayPalPlugin\spec\Processor\PayPalOrderCompleteProcessorSpec.php`

## Summary
This PHP specification file defines the behavior of the `PayPalOrderCompleteProcessor` class, which is responsible for completing PayPal orders in the Sylius e-commerce framework. The processor checks if the last payment of an order is a PayPal payment in a processing state and, if so, completes the payment using the `PaymentStateManagerInterface`. The specification ensures that the processor only completes PayPal payments and does nothing if the payment is not a PayPal payment.

## Classes
- `PayPalOrderCompleteProcessorSpec`

## Function Details

### `let`

- **Parameters**: `PaymentStateManagerInterface $paymentStateManager`

