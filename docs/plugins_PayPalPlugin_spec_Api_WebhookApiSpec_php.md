# WebhookApiSpec.php

**Path**: `plugins\PayPalPlugin\spec\Api\WebhookApiSpec.php`

## Summary
This PHP specification file defines the behavior of the `WebhookApi` class, which is responsible for registering webhooks with the PayPal API. The code tests the `register` method, ensuring it sends a POST request to the PayPal API with the correct headers and payload, and returns the expected response. The specification exists to verify the correct implementation of the webhook registration functionality in the context of the Sylius PayPal plugin.

## Classes
- `WebhookApiSpec`

## Function Details

### `let`

- **Parameters**: `ClientInterface $client`

