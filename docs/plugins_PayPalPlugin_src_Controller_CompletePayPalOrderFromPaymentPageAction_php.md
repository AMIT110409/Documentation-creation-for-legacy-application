# CompletePayPalOrderFromPaymentPageAction.php

**Path**: `plugins\PayPalPlugin\src\Controller\CompletePayPalOrderFromPaymentPageAction.php`

## Summary
This PHP class, `CompletePayPalOrderFromPaymentPageAction`, is responsible for completing a PayPal order from a payment page by updating the payment state and transitioning the order through the checkout process. It achieves this by utilizing various dependencies, such as the `PaymentStateManagerInterface` and `OrderProviderInterface`, to retrieve the order and payment, and then applying the necessary state transitions using the `StateMachine`. The purpose of this class is to handle the completion of a PayPal order, ensuring that the order and payment states are updated accordingly in the system.

## Classes
- `CompletePayPalOrderFromPaymentPageAction`

## Function Details

### `__invoke`

- **Parameters**: `Request $request`

