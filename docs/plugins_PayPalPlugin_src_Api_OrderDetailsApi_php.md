# OrderDetailsApi.php

**Path**: `plugins\PayPalPlugin\src\Api\OrderDetailsApi.php`

## Summary
The `OrderDetailsApi` class is responsible for retrieving order details from the PayPal API, utilizing a `PayPalClientInterface` to send a GET request to the PayPal endpoint. This class exists to encapsulate the logic for fetching order information, providing a simple and standardized way to access order data. By implementing the `OrderDetailsApiInterface`, it ensures a contract for retrieving order details, specifically for orders identified by a PayPal order ID and token.

## Classes
- `OrderDetailsApi`

## Function Details

### `__construct`

- **Parameters**: `PayPalClientInterface $client`

### `get`

- **Parameters**: `string $token, string $orderId`

