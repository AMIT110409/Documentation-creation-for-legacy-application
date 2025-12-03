# PayPalPaymentMethodListenerSpec.php

**Path**: `plugins\PayPalPlugin\spec\Listener\PayPalPaymentMethodListenerSpec.php`

## Summary
This PHP specification file defines the behavior of the `PayPalPaymentMethodListener` class, which listens for events related to payment method creation and initiates the PayPal onboarding process when a supported payment method is created. The listener relies on various dependencies, including an onboarding initiator, URL generator, and payment method provider, to facilitate the onboarding process. The code exists to ensure seamless integration of PayPal payment methods within the Sylius e-commerce platform.

## Classes
- `PayPalPaymentMethodListenerSpec`

## Function Details

### `it_throws_an_exception_if_subject_is_not_a_payment_method`

- **Parameters**: `ResourceControllerEvent $event`

