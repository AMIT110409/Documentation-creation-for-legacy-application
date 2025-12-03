# AfterCheckoutOrderPaymentProcessorSpec.php

**Path**: `plugins\PayPalPlugin\spec\Processor\AfterCheckoutOrderPaymentProcessorSpec.php`

## Summary
This PHP specification file defines the behavior of the `AfterCheckoutOrderPaymentProcessor` class, which implements the `OrderProcessorInterface` and is responsible for processing orders after checkout, specifically handling payment processing only when the order is in a completed state. The code exists to ensure that payment processing is triggered at the correct point in the order workflow, preventing premature or unnecessary payment processing. It achieves this by delegating to a base order payment processor when the order is completed, and doing nothing otherwise.

## Classes
- `AfterCheckoutOrderPaymentProcessorSpec`

## Function Details

### `let`

- **Parameters**: `OrderProcessorInterface $baseOrderPaymentProcessor`

### `it_implements_order_processor_interface`


