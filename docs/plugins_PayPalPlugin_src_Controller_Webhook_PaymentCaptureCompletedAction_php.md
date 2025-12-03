# PaymentCaptureCompletedAction.php

**Path**: `plugins\PayPalPlugin\src\Controller\Webhook\PaymentCaptureCompletedAction.php`

## Summary
This PHP class, `PaymentCaptureCompletedAction`, handles PayPal webhook events specifically for payment capture completion, utilizing the `WebhookService` to process the event and the `PayPalWebhookDataProviderInterface` to retrieve relevant data. It exists to provide a specialized controller action for handling this particular type of webhook event, allowing for customized processing and logging of payment capture completion notifications from PayPal. The class extends `AbstractWebhookAction`, inheriting its functionality to handle the webhook request and return a response.

## Classes
- `PaymentCaptureCompletedAction`

## Function Details

### `__invoke`

- **Parameters**: `Request $request`

