# CouponsFinder.php

**Path**: `src\TalonOne\Domain\UseCase\CouponsFinder.php`

## Summary
Enrich coupons with campaign data, caching campaigns to avoid duplicate API calls

## Classes
- `CouponsFinder`

## Function Details

### `execute`

- **Parameters**: `string $applicationId, CouponsFinderRequest $payload`

### `enrichCouponsWithCampaignData`

- **Parameters**: `string $applicationId, array $coupons`
- **Description**: Enrich coupons with campaign data, caching campaigns to avoid duplicate API calls
/

### `getCampaignRealState`

- **Parameters**: `Campaign $campaign`

