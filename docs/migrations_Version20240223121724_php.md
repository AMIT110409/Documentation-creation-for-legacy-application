# Version20240223121724.php

**Path**: `migrations\Version20240223121724.php`

## Summary
This PHP migration script, `Version20240223121724`, is designed to modify the `sylius_payment_method` database table by adding a new field called `enabled_for_shop_order`. The script provides both an "up" migration to add the field and a "down" migration to remove it, allowing for reversible database schema changes. This migration exists to extend the functionality of the Sylius e-commerce platform by introducing a new configuration option for payment methods, specifically controlling whether a payment method is enabled for shop orders.

## Classes
- `Version20240223121724`

## Function Details

### `getDescription`


### `up`

- **Parameters**: `Schema $schema`

### `down`

- **Parameters**: `Schema $schema`

