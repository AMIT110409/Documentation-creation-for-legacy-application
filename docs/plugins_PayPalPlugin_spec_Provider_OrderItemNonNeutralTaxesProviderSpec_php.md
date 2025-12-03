# OrderItemNonNeutralTaxesProviderSpec.php

**Path**: `plugins\PayPalPlugin\spec\Provider\OrderItemNonNeutralTaxesProviderSpec.php`

## Summary
This PHP specification file defines the behavior of the `OrderItemNonNeutralTaxesProvider` class, which is responsible for extracting non-neutral tax amounts from a given `OrderItem`. The provider iterates over the order item's units and their respective tax adjustments to collect non-neutral tax amounts, which is crucial for accurate tax calculation in e-commerce applications, particularly those integrating with PayPal. The specification ensures that the provider correctly identifies and returns non-neutral tax amounts, such as the $20 amount in the test scenario.

## Classes
- `OrderItemNonNeutralTaxesProviderSpec`

