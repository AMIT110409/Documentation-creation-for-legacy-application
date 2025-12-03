# PayPalItemDataProviderSpec.php

**Path**: `plugins\PayPalPlugin\spec\Provider\PayPalItemDataProviderSpec.php`

## Summary
This PHP specification file defines the behavior of the `PayPalItemDataProvider` class, which is responsible for providing item data for PayPal transactions, including calculating taxes and formatting item information. The class takes an `OrderItemNonNeutralTaxesProviderInterface` instance in its constructor, which is used to calculate non-neutral taxes for each order item. The specification tests the class's ability to return an array of items with tax information, formatted according to PayPal's requirements, for orders with single and multiple items.

## Classes
- `PayPalItemDataProviderSpec`

## Function Details

### `let`

- **Parameters**: `OrderItemNonNeutralTaxesProviderInterface $orderItemNonNeutralTaxesProvider`

