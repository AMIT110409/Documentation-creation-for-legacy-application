# AuthorizePaymentOrderApi.php

**Path**: `plugins\PayPalPlugin\src\Api\AuthorizePaymentOrderApi.php`

## Summary
The `AuthorizePaymentOrderApi` class is responsible for authorizing a PayPal payment order, implementing the business logic for handling payment authorization requests. It utilizes a `PayPalClientInterface` to send a POST request to the PayPal API, specifically to the `v2/checkout/orders/{orderId}/authorize` endpoint, to initiate the authorization process. This class exists to facilitate the integration of PayPal payment processing within the Sylius e-commerce platform, enabling secure and efficient payment order authorization.

## Classes
- `AuthorizePaymentOrderApi`

## Function Details

### `__construct`

- **Parameters**: `PayPalClientInterface $client`

### `get`

- **Parameters**: `string $token, string $orderId`

