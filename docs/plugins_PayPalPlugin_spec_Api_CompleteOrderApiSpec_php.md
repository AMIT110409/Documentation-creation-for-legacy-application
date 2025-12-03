# CompleteOrderApiSpec.php

**Path**: `plugins\PayPalPlugin\spec\Api\CompleteOrderApiSpec.php`

## Summary
This PHP specification file defines the behavior of the `CompleteOrderApi` class, which is responsible for completing a PayPal order by sending a capture request to the PayPal API. The class implements the `CompleteOrderApiInterface` and utilizes a `PayPalClientInterface` to interact with the PayPal API, allowing it to complete orders and retrieve their status. The specification ensures that the class correctly handles order completion and returns the expected response from the PayPal API.

## Classes
- `CompleteOrderApiSpec`

## Function Details

### `let`

- **Parameters**: `PayPalClientInterface $client`

### `it_implements_complete_order_api_interface`


