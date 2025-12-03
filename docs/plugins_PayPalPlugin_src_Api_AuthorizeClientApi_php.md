# AuthorizeClientApi.php

**Path**: `plugins\PayPalPlugin\src\Api\AuthorizeClientApi.php`

## Summary
The `AuthorizeClientApi` class is responsible for handling authorization with the PayPal API, utilizing a `PayPalClientInterface` to obtain an access token. This class exists to facilitate secure communication between the application and PayPal, enabling the exchange of sensitive information such as client IDs and secrets for a valid access token. By encapsulating the authorization logic, this class simplifies the integration of PayPal services within the Sylius package.

## Classes
- `AuthorizeClientApi`

## Function Details

### `__construct`

- **Parameters**: `PayPalClientInterface $payPalClient`

### `authorize`

- **Parameters**: `string $clientId, string $clientSecret`

