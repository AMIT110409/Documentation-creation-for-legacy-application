# PayPalPrioritisingPaymentMethodsResolverSpec.php

**Path**: `plugins\PayPalPlugin\spec\Resolver\PayPalPrioritisingPaymentMethodsResolverSpec.php`

## Summary
This PHP specification file defines the behavior of the `PayPalPrioritisingPaymentMethodsResolver` class, which implements the `PaymentMethodsResolverInterface` to prioritize payment methods based on a specific factory name. The resolver ensures that payment methods with a factory name matching the prioritized value are returned first, while others are returned in their original order. This functionality exists to customize the payment method selection process in a Sylius-based e-commerce application, specifically for PayPal payments.

## Classes
- `PayPalPrioritisingPaymentMethodsResolverSpec`

## Function Details

### `let`

- **Parameters**: `PaymentMethodsResolverInterface $paymentMethodsResolver`

### `it_implements_payment_methods_resolver_interface`


