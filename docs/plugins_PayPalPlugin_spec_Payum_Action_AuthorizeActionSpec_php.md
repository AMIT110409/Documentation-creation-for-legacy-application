# AuthorizeActionSpec.php

**Path**: `plugins\PayPalPlugin\spec\Payum\Action\AuthorizeActionSpec.php`

## Summary
This PHP specification file, `AuthorizeActionSpec.php`, defines the behavior of the `AuthorizeAction` class, which is part of the Sylius PayPal plugin. It tests the class's implementation of the `ActionInterface` and its ability to authorize payments by marking them as created and throwing exceptions for unsupported request types. The code exists to ensure the correct functionality of the payment authorization process in the Sylius e-commerce framework.

## Classes
- `AuthorizeActionSpec`

## Function Details

### `it_implements_action_interface`


### `it_throws_an_exception_if_request_type_is_invalid`

- **Parameters**: `GetStatus $request`

### `it_does_not_support_request_other_than_authorize`

- **Parameters**: `Capture $request`

### `it_does_not_support_request_with_first_model_other_than_payment`

- **Parameters**: `Authorize $request`

