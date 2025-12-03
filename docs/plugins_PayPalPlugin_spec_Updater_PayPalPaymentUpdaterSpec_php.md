# PayPalPaymentUpdaterSpec.php

**Path**: `plugins\PayPalPlugin\spec\Updater\PayPalPaymentUpdaterSpec.php`

## Summary
This PHP specification file defines the behavior of the `PayPalPaymentUpdater` class, which implements the `PaymentUpdaterInterface` to update payment amounts in the context of the Sylius e-commerce framework. The code exists to ensure that payment amounts are correctly updated in the database, using the `ObjectManager` to persist changes. Specifically, it tests the `updateAmount` method, which sets the payment amount and flushes the changes to the database.

## Classes
- `PayPalPaymentUpdaterSpec`

## Function Details

### `let`

- **Parameters**: `ObjectManager $paymentManager`

### `it_implements_payment_updater_interface`


