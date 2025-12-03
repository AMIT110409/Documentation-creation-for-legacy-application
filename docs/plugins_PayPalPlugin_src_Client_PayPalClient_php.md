# PayPalClient.php

**Path**: `plugins\PayPalPlugin\src\Client\PayPalClient.php`

## Summary
This PHP class, `PayPalClient`, serves as a client for interacting with the PayPal API, handling requests and exceptions within the context of the Sylius e-commerce platform. It exists to encapsulate the logic for communicating with PayPal, providing a layer of abstraction and error handling for payment processing. The class is designed to be instantiated with various dependencies, including a HTTP client, logger, and configuration providers, to facilitate secure and reliable interactions with the PayPal API.

## Classes
- `PayPalClient`

## Function Details

### `authorize`

- **Parameters**: `string $clientId, string $clientSecret`

### `get`

- **Parameters**: `string $url, string $token`

### `post`

- **Parameters**: `string $url, string $token, ?array $data = null, array $extraHeaders = []`

### `patch`

- **Parameters**: `string $url, string $token, ?array $data = null`

### `request`

- **Parameters**: `string $method, string $url, string $token, ?array $data = null, array $extraHeaders = []`

### `doRequest`

- **Parameters**: `string $method, string $fullUrl, array $options`

