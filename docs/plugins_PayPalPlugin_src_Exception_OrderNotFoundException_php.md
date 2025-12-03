# OrderNotFoundException.php

**Path**: `plugins\PayPalPlugin\src\Exception\OrderNotFoundException.php`

## Summary
This PHP code defines a custom exception class `OrderNotFoundException` that extends the base `\Exception` class, specifically designed to handle cases where an order is not found in the Sylius PayPal plugin. The class provides constructors and static methods to create instances with customized error messages based on order token or ID, facilitating error handling and debugging in the e-commerce payment processing domain. This exception class exists to provide a standardized way to handle and communicate order not found errors in the plugin.

## Classes
- `OrderNotFoundException`

## Function Details

### `__construct`

- **Parameters**: `?string $message = null`

### `withToken`

- **Parameters**: `string $token`

### `withId`

- **Parameters**: `int $id`

