# PaymentCaptureDeniedAction.php

**Path**: `plugins\PayPalPlugin\src\Controller\Webhook\PaymentCaptureDeniedAction.php`

## Summary
This PHP class, `PaymentCaptureDeniedAction`, handles PayPal webhook events specifically for "PAYMENT.CAPTURE.DENIED" scenarios, utilizing the `WebhookService` and `PayPalWebhookDataProviderInterface` to process the event. It exists to provide a customized response to denied payment capture attempts, integrating with the Sylius e-commerce framework. The class leverages dependency injection to manage its dependencies, including logging and webhook data processing.

## Classes
- `PaymentCaptureDeniedAction`

## Function Details

### `__invoke`

- **Parameters**: `Request $request`

