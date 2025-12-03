# Version20241020131604.php

**Path**: `migrations\Version20241020131604.php`

## Summary
This PHP migration script, `Version20241020131604`, is part of the Sylius package and is responsible for removing the `locked`, `expires_at`, and `credentials_expire_at` columns from the `sylius_admin_user` and `sylius_shop_user` tables in the database. The purpose of this migration is to update the User model to reflect changes in Sylius 2.0, specifically removing these columns to align with the updated framework. This script provides both an `up` method to apply the changes and a `down` method to revert them, ensuring database consistency and flexibility.

## Classes
- `Version20241020131604`

## Function Details

### `getDescription`


### `up`

- **Parameters**: `Schema $schema`

### `down`

- **Parameters**: `Schema $schema`

