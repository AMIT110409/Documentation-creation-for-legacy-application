# PayPalDefaultPaymentMethodResolverSpec.php

**Path**: `plugins\PayPalPlugin\spec\Resolver\PayPalDefaultPaymentMethodResolverSpec.php`

## Summary
This PHP specification file defines the behavior of the `PayPalDefaultPaymentMethodResolver` class, which implements the `DefaultPaymentMethodResolverInterface` to resolve the default payment method for a given channel in the Sylius e-commerce framework. The resolver prioritizes payment methods based on their gateway configurations, ensuring that the most suitable payment method is selected for a specific channel. The code exists to provide a custom payment method resolution logic for PayPal payments within the Sylius framework.

## Classes
- `PayPalDefaultPaymentMethodResolverSpec`

## Function Details

### `let`

- **Parameters**: `DefaultPaymentMethodResolverInterface $decoratedDefaultPaymentMethodResolver, PaymentMethodRepositoryInterface $paymentMethodRepository`

### `it_implements_default_payment_method_resolver_interface`


