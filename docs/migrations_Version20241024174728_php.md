# Version20241024174728.php

**Path**: `migrations\Version20241024174728.php`

## Summary
This PHP migration script, `Version20241024174728`, is part of the Sylius package and modifies the database schema to distinguish between PaymentRequest and Payum gateways. It adds a `use_payum` column to the `sylius_gateway_config` table to facilitate this distinction, allowing for a clear separation of gateway types. The script provides both an "up" migration to apply the change and a "down" migration to revert it, ensuring database consistency and flexibility.

## Classes
- `Version20241024174728`

## Function Details

### `getDescription`


### `up`

- **Parameters**: `Schema $schema`

### `down`

- **Parameters**: `Schema $schema`

