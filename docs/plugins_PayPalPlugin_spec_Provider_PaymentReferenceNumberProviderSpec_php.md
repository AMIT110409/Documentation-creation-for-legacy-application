# PaymentReferenceNumberProviderSpec.php

**Path**: `plugins\PayPalPlugin\spec\Provider\PaymentReferenceNumberProviderSpec.php`

## Summary
This PHP specification file defines the behavior of a `PaymentReferenceNumberProvider` class, which generates a unique reference number for a payment based on its ID and creation date. The provider implements the `PaymentReferenceNumberProviderInterface` and is designed to work within the Sylius e-commerce framework, specifically with the PayPal plugin. The code ensures that the provider correctly returns a formatted string containing the payment ID and creation date, such as '123-10-03-2012'.

## Classes
- `PaymentReferenceNumberProviderSpec`

## Function Details

### `it_implements_payment_reference_number_provider_interface`


### `it_provides_reference_number_based_on_payment_id_and_creation_date`

- **Parameters**: `PaymentInterface $payment`

