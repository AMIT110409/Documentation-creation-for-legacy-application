# EnableSellerAction.php

**Path**: `plugins\PayPalPlugin\src\Controller\EnableSellerAction.php`

## Summary
The `EnableSellerAction` class is a controller action responsible for enabling a PayPal payment method in a Sylius-based e-commerce application. It retrieves a payment method by ID, attempts to enable it using the `PaymentMethodEnablerInterface`, and handles exceptions related to payment method enabling or invalid PayPal webhook URLs, redirecting the user with error messages as needed. This class exists to facilitate the activation of PayPal payment methods for sellers in the application.

## Classes
- `EnableSellerAction`

## Function Details

### `__invoke`

- **Parameters**: `Request $request`

