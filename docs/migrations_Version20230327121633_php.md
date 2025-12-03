# Version20230327121633.php

**Path**: `migrations\Version20230327121633.php`

## Summary
This PHP migration script, `Version20230327121633`, modifies the `sylius_user_oauth` database table to increase the length of `access_token` and `refresh_token` fields from `VARCHAR(255)` to `TEXT`, allowing for longer OAuth tokens. This migration exists to support Sylius 1.xx.x upgrades, enabling more flexible authentication for OAuth users. The script provides both `up` and `down` methods to apply and revert the changes, respectively.

## Classes
- `Version20230327121633`

## Function Details

### `getDescription`


### `up`

- **Parameters**: `Schema $schema`

### `down`

- **Parameters**: `Schema $schema`

