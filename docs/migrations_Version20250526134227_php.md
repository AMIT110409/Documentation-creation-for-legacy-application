# Version20250526134227.php

**Path**: `migrations\Version20250526134227.php`

## Summary
This PHP migration script updates the `env_config` field in the `sylius_channel` table by adding a new key-value pair, `updReferencePrefix`, with specific values for channels named 'France' and 'Belgique'. The script exists to modify the database schema as part of a larger application, likely an e-commerce platform using Sylius, to store additional configuration data for each channel. The migration includes both `up` and `down` methods to apply and revert the changes, respectively.

## Classes
- `Version20250526134227`

## Function Details

### `getDescription`


### `up`

- **Parameters**: `Schema $schema`

### `down`

- **Parameters**: `Schema $schema`

