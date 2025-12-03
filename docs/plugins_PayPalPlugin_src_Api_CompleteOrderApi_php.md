# CompleteOrderApi.php

**Path**: `plugins\PayPalPlugin\src\Api\CompleteOrderApi.php`

## Summary
The `CompleteOrderApi` class is responsible for completing a PayPal order by sending a capture request to the PayPal API. This class exists to facilitate the final step of the payment process, allowing the Sylius package to integrate with PayPal's checkout functionality. The `complete` method takes an order token, order ID, and optional mock error flag, and returns the API response as an array.

## Classes
- `CompleteOrderApi`

## Function Details

### `__construct`

- **Parameters**: `PayPalClientInterface $client`

### `complete`

- **Parameters**: `string $token, string $orderId, ?bool $mockError = false`

