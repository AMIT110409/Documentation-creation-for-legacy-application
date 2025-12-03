# Version20230331091850.php

**Path**: `migrations\Version20230331091850.php`

## Summary
This migration script, `Version20230331091850`, initializes the price history feature in Sylius by creating three database tables: `sylius_channel_price_history_config`, `sylius_channel_price_history_config_excluded_taxons`, and `sylius_channel_pricing_log_entry`. The purpose of this script is to establish a logging mechanism for tracking price changes of products across different channels, enabling features like price history and discounted product visibility. It exists to support Sylius' e-commerce functionality, specifically to store and manage price data for products over time.

## Classes
- `Version20230331091850`

## Function Details

### `getDescription`


### `up`

- **Parameters**: `Schema $schema`

### `postUp`

- **Parameters**: `Schema $schema`

### `down`

- **Parameters**: `Schema $schema`

