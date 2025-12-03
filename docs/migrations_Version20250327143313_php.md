# Version20250327143313.php

**Path**: `migrations\Version20250327143313.php`

## Summary
This PHP migration script, `Version20250327143313`, modifies the `sylius_shipment` database table by adding a `free_shipping_threshold` column with a default value of NULL when executed in the "up" direction, and removes this column when executed in the "down" direction. The purpose of this migration is to introduce a new field to store the threshold for free shipping in an e-commerce system, likely built with the Sylius framework. This migration exists to manage changes to the database schema in a controlled and reversible manner.

## Classes
- `Version20250327143313`

## Function Details

### `getDescription`


### `up`

- **Parameters**: `Schema $schema`

### `down`

- **Parameters**: `Schema $schema`

