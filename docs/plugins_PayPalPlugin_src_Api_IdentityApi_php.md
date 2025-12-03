# IdentityApi.php

**Path**: `plugins\PayPalPlugin\src\Api\IdentityApi.php`

## Summary
The `IdentityApi` class is responsible for generating a client token using the PayPal API, specifically through the `generateToken` method, which sends a POST request to the `v1/identity/generate-token` endpoint. This class exists to facilitate identity-related operations within the Sylius package, leveraging the PayPalClientInterface to interact with the PayPal API. Its primary purpose is to obtain a client token, likely for authentication or authorization purposes in e-commerce transactions.

## Classes
- `IdentityApi`

## Function Details

### `__construct`

- **Parameters**: `PayPalClientInterface $client`

### `generateToken`

- **Parameters**: `string $token`

