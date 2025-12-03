# PayPalPurchaseUnitSpec.php

**Path**: `plugins\PayPalPlugin\spec\Model\PayPalPurchaseUnitSpec.php`

## Summary
This PHP specification file defines the behavior of the `PayPalPurchaseUnit` class, which represents a purchase unit in a PayPal transaction, encapsulating details such as reference ID, invoice number, currency, and shipping address. The class exists to ensure that the `PayPalPurchaseUnit` object is correctly constructed and returns the proper PayPal purchase unit data when converted to an array. This specification is part of the Sylius package, a PHP e-commerce framework, and is used to verify the correctness of the `PayPalPurchaseUnit` class in the context of PayPal payments.

## Classes
- `PayPalPurchaseUnitSpec`

## Function Details

### `let`

- **Parameters**: `AddressInterface $shippingAddress`

### `it_returns_proper_paypal_purchase_unit`

- **Parameters**: `AddressInterface $shippingAddress`

### `it_returns_proper_paypal_purchase_unit_if_shipping_is_not_required`

- **Parameters**: `AddressInterface $shippingAddress`

### `it_returns_proper_paypal_purchase_unit_if_shipping_is_not_set`


