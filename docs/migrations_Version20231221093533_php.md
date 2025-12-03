# Version20231221093533.php

**Path**: `migrations\Version20231221093533.php`

## Summary
This PHP migration script creates a new database table `sylius_admin_user_group` and modifies the existing `sylius_admin_user` table to establish a relationship between admin users and user groups. The script exists to implement a database schema change, specifically to support the management of admin user groups and their associated access rights. It provides both an `up` method to apply the changes and a `down` method to revert them, ensuring a reversible migration process.

## Classes
- `Version20231221093533`

## Function Details

### `getDescription`


### `up`

- **Parameters**: `Schema $schema`

### `down`

- **Parameters**: `Schema $schema`

