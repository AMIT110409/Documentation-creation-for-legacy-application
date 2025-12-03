# RefundReferenceNumberProviderSpec.php

**Path**: `plugins\PayPalPlugin\spec\Provider\RefundReferenceNumberProviderSpec.php`

## Summary
This PHP specification file defines the behavior of the `RefundReferenceNumberProvider` class, which generates a refund reference number based on a payment's ID and the current date. The provider implements the `RefundReferenceNumberProviderInterface` and is part of the Sylius PayPal plugin, existing to facilitate refund processing by providing a unique reference number. The generated reference number follows a specific format, combining the payment ID with the current date in the format "ID-date".

## Classes
- `RefundReferenceNumberProviderSpec`

## Function Details

### `it_implements_refund_reference_number_provider_interface`


### `it_provides_reference_number_based_on_payment_id_and_current_date`

- **Parameters**: `PaymentInterface $payment`

