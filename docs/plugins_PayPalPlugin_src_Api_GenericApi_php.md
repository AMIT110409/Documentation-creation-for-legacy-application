# GenericApi.php

**Path**: `plugins\PayPalPlugin\src\Api\GenericApi.php`

## Summary
This PHP class, `GenericApi`, implements a generic API interface for interacting with the PayPal API, utilizing the Guzzle HTTP client to send GET requests with a provided token and URL. The primary purpose of this class is to handle API requests to PayPal, specifically to retrieve data, and return the response as a JSON-decoded array. It exists to abstract away the underlying HTTP request logic, providing a simple and standardized way to interact with the PayPal API.

## Classes
- `GenericApi`

## Function Details

### `__construct`

- **Parameters**: `ClientInterface $client`

### `get`

- **Parameters**: `string $token, string $url`

