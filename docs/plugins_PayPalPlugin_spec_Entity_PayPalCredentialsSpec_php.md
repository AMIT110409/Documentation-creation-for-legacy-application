# PayPalCredentialsSpec.php

**Path**: `plugins\PayPalPlugin\spec\Entity\PayPalCredentialsSpec.php`

## Summary
This PHP specification file defines the behavior of the `PayPalCredentials` entity, ensuring it implements the `PayPalCredentialsInterface` and provides access to its properties, such as payment method, access token, creation time, and expiration time. The code exists to verify the correctness of the `PayPalCredentials` class, which is part of the Sylius PayPal plugin, and is responsible for managing PayPal credentials for payment methods. By testing these properties and behaviors, the specification guarantees the `PayPalCredentials` entity functions as expected in the context of e-commerce payment processing.

## Classes
- `PayPalCredentialsSpec`

## Function Details

### `let`

- **Parameters**: `PaymentMethodInterface $paymentMethod`

### `it_implements_pay_pal_credentials_interface`


### `it_has_a_payment_method`

- **Parameters**: `PaymentMethodInterface $paymentMethod`

### `it_has_a_access_token`


### `it_has_a_creation_time`


### `it_has_a_expiration_time`


### `it_can_be_expired`


