# CreatePayPalOrderFromPaymentPageAction.php

**Path**: `plugins\PayPalPlugin\src\Controller\CreatePayPalOrderFromPaymentPageAction.php`

## Summary
This PHP class, `CreatePayPalOrderFromPaymentPageAction`, is responsible for handling the creation of a PayPal order from a payment page, specifically within the context of an e-commerce application using the Sylius framework. It exists to facilitate the transition of an order from a cart state to a payment processing state, utilizing various dependencies such as state machine factories, payment managers, and PayPal-specific resolvers. The class's primary functionality is to retrieve an order by ID, identify the last payment associated with that order, and set the stage for further payment processing actions.

## Classes
- `CreatePayPalOrderFromPaymentPageAction`

## Function Details

### `__invoke`

- **Parameters**: `Request $request`

