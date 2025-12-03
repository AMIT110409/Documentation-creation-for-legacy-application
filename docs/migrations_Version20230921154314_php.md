# Version20230921154314.php

**Path**: `migrations\Version20230921154314.php`

## Summary
This PHP migration script, `Version20230921154314`, extends the `AbstractMigration` class to modify the `sylius_product` database table by adding a new column named `old_product` with a default value of 0. The script provides both an "up" migration to apply the change and a "down" migration to revert it, allowing for flexible database schema management. This migration exists to support the evolution of the e-commerce platform's database schema, specifically to track whether a product is old or not.

## Classes
- `Version20230921154314`

## Function Details

### `getDescription`


### `up`

- **Parameters**: `Schema $schema`

### `down`

- **Parameters**: `Schema $schema`

