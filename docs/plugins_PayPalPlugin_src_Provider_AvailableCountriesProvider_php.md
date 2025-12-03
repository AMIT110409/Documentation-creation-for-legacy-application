# AvailableCountriesProvider.php

**Path**: `plugins\PayPalPlugin\src\Provider\AvailableCountriesProvider.php`

## Summary
@var ChannelInterface $channel

## Classes
- `AvailableCountriesProvider`

## Function Details

### `__construct`

- **Parameters**: `RepositoryInterface $countryRepository, ChannelContextInterface $channelContext`

### `provide`


### `convertToStringArray`

- **Parameters**: `array $countries`
- **Description**: @var ChannelInterface $channel */
$channel = $this-&gt;channelContext-&gt;getChannel();

$channelCountries = $channel-&gt;getCountries()-&gt;toArray();

if (\count($channelCountries)) {
return $this-&gt;convertToStringArray($channelCountries);
}

$availableCountries = $this-&gt;countryRepository-&gt;findBy(['enabled' =&gt; true]);

return $this-&gt;convertToStringArray($availableCountries);
}

/** @return string[] */

