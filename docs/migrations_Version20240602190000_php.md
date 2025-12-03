# Version20240602190000.php

**Path**: `migrations\Version20240602190000.php`

## Summary
This PHP migration script, `Version20240602190000`, is designed to add full-text indexes to specific tables in a database, including `sylius_customer`, `sylius_order`, `sylius_promotion`, and `sylius_product_translation`, to enhance search functionality. The script generates SQL queries to create these indexes on specified columns, such as customer names and order numbers, to support efficient text-based searches. The migration exists to improve the database's search capabilities, particularly for e-commerce applications using the Sylius framework.

## Classes
- `Version20240602190000`

## Function Details

### `getDescription`


### `up`

- **Parameters**: `Schema $schema`

### `down`

- **Parameters**: `Schema $schema`

### `generateFullTextIndexAlter`

- **Parameters**: `string $tablename, array $columns`

### `_generateIdentifierName`

- **Parameters**: `$columnNames, $prefix = '', $maxSize = 30`

