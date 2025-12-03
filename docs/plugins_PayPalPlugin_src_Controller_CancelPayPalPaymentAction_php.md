# CancelPayPalPaymentAction.php

**Path**: `plugins\PayPalPlugin\src\Controller\CancelPayPalPaymentAction.php`

## Summary
This PHP class, `CancelPayPalPaymentAction`, handles the cancellation of a PayPal payment by transitioning the payment state to "cancelled" and updating the associated order. It exists to provide a controller action that can be invoked when a PayPal payment needs to be cancelled, such as when a user initiates a cancellation request. The class utilizes various dependencies, including a payment provider, object manager, and state machine factory, to perform the cancellation logic and update the order accordingly.

## Classes
- `CancelPayPalPaymentAction`

## Function Details

### `__invoke`

- **Parameters**: `Request $request`

