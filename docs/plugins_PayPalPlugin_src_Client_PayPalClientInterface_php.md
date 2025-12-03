# PayPalClientInterface.php

**Path**: `plugins\PayPalPlugin\src\Client\PayPalClientInterface.php`

## Summary
The PayPalClientInterface defines a contract for interacting with the PayPal API, providing methods for authorization, GET, POST, and PATCH requests. This interface exists to encapsulate the business logic of communicating with PayPal, allowing for a standardized and decoupled approach to handling payments and other transactions. By implementing this interface, a client can be created to handle authentication and API requests to PayPal, throwing a PayPalAuthorizationException if authorization fails.

## Function Details

### `authorize`

- **Parameters**: `string $clientId, string $clientSecret`
- **Description**: @throws PayPalAuthorizationException */

### `get`

- **Parameters**: `string $url, string $token`

### `post`

- **Parameters**: `string $url, string $token, ?array $data = null, array $extraHeaders = []`

### `patch`

- **Parameters**: `string $url, string $token, ?array $data = null`

