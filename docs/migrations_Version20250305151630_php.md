# Version20250305151630.php

**Path**: `migrations\Version20250305151630.php`

## Summary
This PHP migration script, `Version20250305151630`, modifies the database schema by adding a new column `autoDelete` to the `sylius_order_talon_one_coupon` table in the `up` method and removing it in the `down` method, effectively implementing a reversible database migration. The purpose of this migration is to introduce a new field to store a boolean value indicating whether a coupon should be automatically deleted, likely as part of an e-commerce system using Sylius and Talon One. This migration exists to manage changes to the database schema in a controlled and versioned manner.

## Classes
- `Version20250305151630`

## Function Details

### `getDescription`


### `up`

- **Parameters**: `Schema $schema`

### `down`

- **Parameters**: `Schema $schema`

