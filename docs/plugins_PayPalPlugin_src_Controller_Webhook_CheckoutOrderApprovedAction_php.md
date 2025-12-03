# CheckoutOrderApprovedAction.php

**Path**: `plugins\PayPalPlugin\src\Controller\Webhook\CheckoutOrderApprovedAction.php`

## Summary
This PHP class, `CheckoutOrderApprovedAction`, handles the "CHECKOUT.ORDER.APPROVED" webhook event from PayPal, utilizing the `WebhookService` and `PayPalWebhookDataProviderInterface` to process the event. It exists to facilitate the integration of PayPal's checkout functionality with the Sylius e-commerce platform, specifically to handle approved orders. The class extends `AbstractWebhookAction` and overrides necessary methods to provide a specific implementation for this event type.

## Classes
- `CheckoutOrderApprovedAction`

## Function Details

### `__invoke`

- **Parameters**: `Request $request`

### `getRelWebhookDataProvider`


