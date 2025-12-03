# Version20241009103632.php

**Path**: `migrations\Version20241009103632.php`

## Summary
This PHP migration script, `Version20241009103632`, modifies the `sylius_shipment` database table by adding a new column `available_in_shipup` with a data type of `TINYINT(1)` to store a boolean value. The script exists to implement a database schema change, allowing for the storage of shipment availability in a system integrated with Shipup. The migration is reversible, providing `up` and `down` methods to apply and revert the change, respectively.

## Classes
- `Version20241009103632`

## Function Details

### `getDescription`


### `up`

- **Parameters**: `Schema $schema`

### `down`

- **Parameters**: `Schema $schema`

