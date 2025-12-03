# ResolveNextRouteActionSpec.php

**Path**: `plugins\PayPalPlugin\spec\Payum\Action\ResolveNextRouteActionSpec.php`

## Summary
This PHP specification file defines the behavior of the `ResolveNextRouteAction` class, which is responsible for determining the next route in a payment workflow based on the state of a payment. The code exists to facilitate the integration of PayPal payments with the Sylius e-commerce platform, specifically handling the resolution of the next route for payments that are either new or completed.

## Classes
- `ResolveNextRouteActionSpec`

## Function Details

### `it_does_not_support_request_other_than_resolve_next_route`

- **Parameters**: `Capture $request`

### `it_does_not_support_request_with_first_model_other_than_payment`

- **Parameters**: `ResolveNextRoute $request`

