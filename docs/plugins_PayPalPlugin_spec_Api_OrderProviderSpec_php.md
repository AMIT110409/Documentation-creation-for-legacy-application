# OrderProviderSpec.php

**Path**: `plugins\PayPalPlugin\spec\Api\OrderProviderSpec.php`

## Summary
This PHP specification file defines the behavior of the `OrderProvider` class, which is responsible for retrieving orders from a repository based on their ID or token. The class implements the `OrderProviderInterface` and provides methods to fetch orders, throwing an `OrderNotFoundException` if the order is not found. The purpose of this code is to ensure that the `OrderProvider` class behaves correctly and consistently in a Sylius e-commerce application, specifically in the context of the PayPal plugin.

## Classes
- `OrderProviderSpec`

## Function Details

### `let`

- **Parameters**: `OrderRepositoryInterface $orderRepository`

### `it_is_an_order_provider`


