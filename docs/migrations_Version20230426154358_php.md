# Version20230426154358.php

**Path**: `migrations\Version20230426154358.php`

## Summary
This PHP migration script, `Version20230426154358`, updates the database schema for the Sylius e-commerce platform by modifying the foreign key constraint on the `main_taxon_id` column in the `sylius_product` table to set the value to `NULL` when the referenced taxon is deleted. This change ensures data consistency and prevents cascading deletions. The script provides both `up` and `down` methods to apply and revert the changes, respectively.

## Classes
- `Version20230426154358`

## Function Details

### `getDescription`


### `up`

- **Parameters**: `Schema $schema`

### `down`

- **Parameters**: `Schema $schema`

