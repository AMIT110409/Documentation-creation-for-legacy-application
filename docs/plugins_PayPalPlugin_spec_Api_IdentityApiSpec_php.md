# IdentityApiSpec.php

**Path**: `plugins\PayPalPlugin\spec\Api\IdentityApiSpec.php`

## Summary
This PHP specification file defines the behavior of the `IdentityApi` class, which is responsible for generating identity tokens using the PayPal API. The `IdentityApiSpec` class ensures that the `IdentityApi` class implements the `IdentityApiInterface` and correctly generates identity tokens by sending a POST request to the PayPal API. This specification exists to verify the correct functionality of the `IdentityApi` class within the Sylius PayPal plugin.

## Classes
- `IdentityApiSpec`

## Function Details

### `let`

- **Parameters**: `PayPalClientInterface $payPalClient`

### `it_implements_identity_api_interface`


### `it_generates_identity_token`

- **Parameters**: `PayPalClientInterface $payPalClient`

