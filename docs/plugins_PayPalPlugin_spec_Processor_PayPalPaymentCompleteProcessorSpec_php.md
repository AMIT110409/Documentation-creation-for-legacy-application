# PayPalPaymentCompleteProcessorSpec.php

**Path**: `plugins\PayPalPlugin\spec\Processor\PayPalPaymentCompleteProcessorSpec.php`

## Summary
This PHP specification file defines the behavior of the `PayPalPaymentCompleteProcessor` class, which is responsible for completing PayPal payments by executing a `CompleteOrder` request through the Payum gateway. The processor takes a `Payment` object as input and uses it to retrieve the necessary details, such as the PayPal order ID, to complete the payment. The existence of this class is crucial for integrating PayPal payment processing with the Sylius e-commerce platform.

## Classes
- `PayPalPaymentCompleteProcessorSpec`

## Function Details

### `let`

- **Parameters**: `Payum $payum`

### `it_implements_payment_complete_processor_interface`


