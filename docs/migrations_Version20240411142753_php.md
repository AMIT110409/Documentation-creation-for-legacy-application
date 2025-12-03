# Version20240411142753.php

**Path**: `migrations\Version20240411142753.php`

## Summary
This PHP migration script, `Version20240411142753`, is designed to remove the BitBag ACL Bundle from a database schema. It achieves this by dropping specific tables and foreign key constraints related to the bundle, as well as removing a column from the `sylius_admin_user` table. The script exists to reverse the installation of the BitBag ACL Bundle, effectively undoing its database modifications.

## Classes
- `Version20240411142753`

## Function Details

### `getDescription`


### `up`

- **Parameters**: `Schema $schema`

### `getSchemaManager`


### `down`

- **Parameters**: `Schema $schema`

