# CompletePayPalOrderAction.php

**Path**: `plugins\PayPalPlugin\src\Controller\CompletePayPalOrderAction.php`

## Summary
This PHP class, `CompletePayPalOrderAction`, is responsible for completing a PayPal order in a Sylius-based e-commerce system. It achieves this by retrieving the order and its associated payment, updating the payment state to complete, and then returning a JSON response with the order ID, payment status, and a return URL. The purpose of this code is to handle the final step of a PayPal payment process, ensuring that the order is marked as complete and the customer is redirected to a thank-you page.

## Classes
- `CompletePayPalOrderAction`

## Function Details

### `__invoke`

- **Parameters**: `Request $request`

