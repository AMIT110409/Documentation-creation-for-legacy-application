# OrderPaymentProcessorSpec.php

**Path**: `plugins\PayPalPlugin\spec\Processor\OrderPaymentProcessorSpec.php`

## Summary
This PHP specification file defines the behavior of the `OrderPaymentProcessor` class, which implements the `OrderProcessorInterface` and is responsible for processing order payments, specifically handling PayPal payments with a captured status. The code exists to ensure that the payment processor does not interfere with existing PayPal payments that are already being processed, allowing the base order processor to handle other payment types.

## Classes
- `OrderPaymentProcessorSpec`

## Function Details

### `let`

- **Parameters**: `OrderProcessorInterface $baseOrderProcessor, FactoryInterface $stateMachineFactory`

### `it_implements_order_processor_interface`


