# PayPalOrderItemController.php

**Path**: `plugins\PayPalPlugin\src\Controller\PayPalOrderItemController.php`

## Summary
This PHP controller class, `PayPalOrderItemController`, handles the creation of order items and adds them to the cart, utilizing the same process as the `OrderItemController` class. The primary purpose of this controller is to facilitate a seamless transition to PayPal payment after adding items to the cart, effectively integrating PayPal payment functionality into the existing order management system. By extending the `ResourceController` class, it leverages the existing resource management capabilities to handle order item creation and cart updates.

## Classes
- `PayPalOrderItemController`

## Function Details

### `createFromProductDetailsAction`

- **Parameters**: `Request $request`
- **Description**: Most of the method's body is copied from the OrderItemController::addAction
The idea is to use the same process as adding to cart and then redirect to PayPal payment from cart page.
/

