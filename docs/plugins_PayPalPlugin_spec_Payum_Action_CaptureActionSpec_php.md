# CaptureActionSpec.php

**Path**: `plugins\PayPalPlugin\spec\Payum\Action\CaptureActionSpec.php`

## Summary
This PHP specification file defines the behavior of the `CaptureAction` class, which is part of the Sylius PayPal plugin, responsible for handling payment capture requests. The code verifies that the `CaptureAction` class implements the `ActionInterface` and tests its functionality in authorizing the seller, sending a create order request, and setting order response data on a payment. The purpose of this code is to ensure the correct integration of PayPal payment processing with the Sylius e-commerce platform.

## Classes
- `CaptureActionSpec`

## Function Details

### `it_implements_action_interface`


### `it_throws_an_exception_if_request_type_is_invalid`

- **Parameters**: `GetStatus $request`

### `it_does_not_support_request_other_than_capture`

- **Parameters**: `GetStatus $request`

### `it_does_not_support_request_with_first_model_other_than_payment`

- **Parameters**: `Capture $request`

