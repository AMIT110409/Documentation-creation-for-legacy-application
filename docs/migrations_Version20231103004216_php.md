# Version20231103004216.php

**Path**: `migrations\Version20231103004216.php`

## Summary
This PHP migration script, `Version20231103004216`, is part of the Sylius package and is responsible for adding unique indices to the `password_reset_token` and `email_verification_token` fields in the `sylius_admin_user` and `sylius_shop_user` tables. The purpose of this migration is to ensure data integrity by preventing duplicate tokens from being stored in these tables. This script exists to support the upgrade process from Sylius 1.xx.x, enhancing the security and functionality of user authentication and verification mechanisms.

## Classes
- `Version20231103004216`

## Function Details

### `getDescription`


### `up`

- **Parameters**: `Schema $schema`

### `down`

- **Parameters**: `Schema $schema`

