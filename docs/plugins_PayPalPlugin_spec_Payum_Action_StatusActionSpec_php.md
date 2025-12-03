# StatusActionSpec.php

**Path**: `plugins\PayPalPlugin\spec\Payum\Action\StatusActionSpec.php`

## Summary
This PHP specification file, `StatusActionSpec`, tests the `StatusAction` class, which implements the `ActionInterface` and is responsible for determining the status of a payment request in a PayPal payment flow. The code verifies that the `StatusAction` class correctly marks payment requests as new, pending, or captured based on their status, and throws an exception if an unsupported request type is encountered. This exists to ensure the correct handling of payment statuses within the Sylius package's PayPal plugin.

## Classes
- `StatusActionSpec`

## Function Details

### `it_implements_action_interface`


### `it_marks_request_as_new`

- **Parameters**: `GetStatus $request, PaymentInterface $payment`

### `it_marks_request_as_pending`

- **Parameters**: `GetStatus $request, PaymentInterface $payment`

### `it_marks_request_as_captured`

- **Parameters**: `GetStatus $request, PaymentInterface $payment`

### `it_throws_an_exception_if_request_is_not_supported`

- **Parameters**: `Capture $request`

### `it_does_not_support_request_other_than_get_status`

- **Parameters**: `Capture $request`

### `it_does_not_support_request_with_first_model_other_than_payment`

- **Parameters**: `GetStatus $request`

