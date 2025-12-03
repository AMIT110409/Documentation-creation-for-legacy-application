# Version20241020131444.php

**Path**: `migrations\Version20241020131444.php`

## Summary
This PHP migration script, `Version20241020131444`, is part of the Sylius package and is designed to modify the database schema by removing the `encoder_name` and `salt` columns from the `sylius_admin_user` and `sylius_shop_user` tables. The purpose of this migration is to update the user tables to reflect changes in password encoding and storage, likely to improve security and compatibility with newer versions of Sylius. This script provides both an "up" migration to apply the changes and a "down" migration to revert them if needed.

## Classes
- `Version20241020131444`

## Function Details

### `getDescription`


### `up`

- **Parameters**: `Schema $schema`

### `down`

- **Parameters**: `Schema $schema`

