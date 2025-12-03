# Version20250318141651.php

**Path**: `migrations\Version20250318141651.php`

## Summary
This PHP migration script, `Version20250318141651`, modifies the database schema by adding a new column `historic_used_coupons` of type JSON to the `sylius_customer_business_report` table. The purpose of this migration is to extend the existing database structure to store historical coupon usage data for customers in a JSON format. This migration exists to support the evolution of the e-commerce platform's database schema, specifically the Sylius customer business report feature, to accommodate new business requirements.

## Classes
- `Version20250318141651`

## Function Details

### `getDescription`


### `up`

- **Parameters**: `Schema $schema`

### `down`

- **Parameters**: `Schema $schema`

