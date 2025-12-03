# Version20241020131553.php

**Path**: `migrations\Version20241020131553.php`

## Summary
This PHP migration script, `Version20241020131553`, is part of the Sylius package and modifies the database schema by removing the `onDelete` cascade constraint from the `sylius_product_variant_option_value` table. The purpose of this migration is to update the foreign key constraints to prevent cascading deletes, ensuring data integrity and consistency in the e-commerce platform's product variant and option value relationships. This change is specifically applied to support the transition from Sylius 2.0.

## Classes
- `Version20241020131553`

## Function Details

### `getDescription`


### `up`

- **Parameters**: `Schema $schema`

### `down`

- **Parameters**: `Schema $schema`

