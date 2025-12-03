# WebhookApi.php

**Path**: `plugins\PayPalPlugin\src\Api\WebhookApi.php`

## Summary
The `WebhookApi` class is responsible for registering webhooks with PayPal, allowing the application to receive notifications for specific event types. It utilizes the Guzzle HTTP client to send a POST request to the PayPal API with the required webhook URL and event types, authenticated using a provided token. This functionality exists to enable real-time notification handling for events such as payment updates, enabling the application to react accordingly.

## Classes
- `WebhookApi`

## Function Details

### `__construct`

- **Parameters**: `ClientInterface $client, string $baseUrl`

### `register`

- **Parameters**: `string $token, string $webhookUrl, array $eventTypes`

