# AbstractWebhookAction.php

**Path**: `plugins\PayPalPlugin\src\Controller\Webhook\AbstractWebhookAction.php`

## Summary
This abstract class, `AbstractWebhookAction`, serves as a foundation for handling PayPal webhooks, providing a standardized interface for processing webhook events and interacting with the `WebhookService` and `PayPalWebhookDataProviderInterface`. It exists to encapsulate the business logic of handling PayPal webhook notifications, allowing for the processing of specific webhook events and error handling. The class is designed to be extended by concrete implementations that support specific webhook events, enabling a modular and flexible approach to handling various PayPal webhook scenarios.

## Classes
- `AbstractWebhookAction`

## Function Details

### `__invoke`

- **Parameters**: `Request $request`

### `supports`

- **Parameters**: `Request $request`

### `getPayPalPaymentUrl`

- **Parameters**: `Request $request`
- **Description**: @throws PayPalWrongDataException
/

### `getRelWebhookDataProvider`


