# AvailableCountriesProviderSpec.php

**Path**: `plugins\PayPalPlugin\spec\Provider\AvailableCountriesProviderSpec.php`

## Summary
This PHP specification class, `AvailableCountriesProviderSpec`, tests the functionality of a provider that retrieves available countries for a PayPal payment gateway, considering the channel's configured countries and enabled countries in the system. The provider's main purpose is to return a list of country codes that are available for payment processing, either by using the channel's specified countries or by defaulting to all enabled countries if none are specified. This ensures that the payment gateway only accepts payments from countries that are supported by the system.

## Classes
- `AvailableCountriesProviderSpec`

## Function Details

### `let`

- **Parameters**: `RepositoryInterface $countryRepository, ChannelContextInterface $channelContext`

