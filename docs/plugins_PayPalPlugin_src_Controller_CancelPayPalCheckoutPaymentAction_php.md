# CancelPayPalCheckoutPaymentAction.php

**Path**: `plugins\PayPalPlugin\src\Controller\CancelPayPalCheckoutPaymentAction.php`

## Summary
This PHP code defines a `CancelPayPalCheckoutPaymentAction` class that handles the cancellation of a PayPal checkout payment. The class uses the `PaymentProviderInterface` and `PaymentStateManagerInterface` to retrieve the payment and cancel it, respectively, when a cancellation request is received. The code exists to provide a way to cancel a PayPal payment in a Sylius e-commerce application, returning a `204 No Content` response after cancellation.

## Classes
- `CancelPayPalCheckoutPaymentAction`

## Function Details

### `__invoke`

- **Parameters**: `Request $request`

