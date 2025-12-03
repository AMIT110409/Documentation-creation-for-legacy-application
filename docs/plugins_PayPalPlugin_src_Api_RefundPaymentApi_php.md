# RefundPaymentApi.php

**Path**: `plugins\PayPalPlugin\src\Api\RefundPaymentApi.php`

## Summary
The `RefundPaymentApi` class is responsible for handling payment refunds through the PayPal API, implementing the `RefundPaymentApiInterface`. It utilizes a `PayPalClientInterface` to send a POST request to the PayPal API, initiating a refund for a specific payment capture. This class exists to facilitate the refund process in an e-commerce system, allowing for the reversal of previously captured payments.

## Classes
- `RefundPaymentApi`

## Function Details

### `__construct`

- **Parameters**: `PayPalClientInterface $client`

