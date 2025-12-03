# Version20241213130024.php

**Path**: `migrations\Version20241213130024.php`

## Summary
This migration script updates the database schema by changing the data type of the `configuration` column in the `sylius_order_rule_condition` and `sylius_payment_method_charges` tables from array (stored as serialized data) to JSON. It achieves this by first unserializing the existing data, then re-encoding it as JSON, and finally updating the column type to JSON. The purpose of this migration is to adapt the database schema to support JSON data type, likely to improve data querying and manipulation capabilities.

## Classes
- `Version20241213130024`

## Function Details

### `getDescription`


### `up`

- **Parameters**: `Schema $schema`

### `down`

- **Parameters**: `Schema $schema`

