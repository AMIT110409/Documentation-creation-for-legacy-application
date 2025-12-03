# Version20250602125301.php

**Path**: `migrations\Version20250602125301.php`

## Summary
This PHP migration script, `Version20250602125301`, modifies the database schema by updating a foreign key constraint on the `sylius_customer_business_report` table, specifically changing the `ON DELETE` action from `NO ACTION` to `CASCADE`. This migration exists to maintain data consistency and integrity by automatically deleting related business reports when a customer is deleted. The script provides both `up` and `down` methods to apply and revert the changes, respectively.

## Classes
- `Version20250602125301`

## Function Details

### `getDescription`


### `up`

- **Parameters**: `Schema $schema`

### `down`

- **Parameters**: `Schema $schema`

