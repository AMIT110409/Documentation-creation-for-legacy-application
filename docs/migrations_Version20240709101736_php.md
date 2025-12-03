# Version20240709101736.php

**Path**: `migrations\Version20240709101736.php`

## Summary
This PHP migration script, `Version20240709101736`, modifies the `sylius_admin_user_group` database table by adding `created_at` and `updated_at` fields with default current timestamp values. The purpose of this migration is to introduce auditing fields to track when admin user groups were created and last updated. This script exists to facilitate database schema evolution in a Sylius-based e-commerce application, allowing for the addition of new fields while providing a rollback mechanism through the `down` method.

## Classes
- `Version20240709101736`

## Function Details

### `getDescription`


### `up`

- **Parameters**: `Schema $schema`

### `down`

- **Parameters**: `Schema $schema`

