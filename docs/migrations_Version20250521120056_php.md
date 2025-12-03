# Version20250521120056.php

**Path**: `migrations\Version20250521120056.php`

## Summary
This PHP migration script updates the `sylius_customer_business_report` table by setting empty arrays as default values for the `historic_used_coupons` column where it is currently null. The migration exists to ensure data consistency and prevent potential errors caused by null values in this column. It provides a reversible update, allowing for easy rollback to the previous state if needed.

## Classes
- `Version20250521120056`

## Function Details

### `getDescription`


### `up`

- **Parameters**: `Schema $schema`

### `down`

- **Parameters**: `Schema $schema`

