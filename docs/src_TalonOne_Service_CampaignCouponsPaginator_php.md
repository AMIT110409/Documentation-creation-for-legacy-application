# CampaignCouponsPaginator.php

**Path**: `src\TalonOne\Service\CampaignCouponsPaginator.php`

## Summary
Fetch all coupons from a campaign using pagination

@param string $applicationId
@param string $campaignId
@param int $pageSize Maximum items per page (max 1000)
@return array All coupons from the campaign

## Classes
- `CampaignCouponsPaginator`

## Function Details

### `fetchAllCoupons`

- **Parameters**: `string $applicationId, string $campaignId, int $pageSize = 1000`
- **Description**: Fetch all coupons from a campaign using pagination

@param string $applicationId
@param string $campaignId
@param int $pageSize Maximum items per page (max 1000)
@return array All coupons from the campaign
/

### `fetchPaginatedCoupons`

- **Parameters**: `string $applicationId, string $campaignId, int $pageSize = 1000, int $skip = 0`
- **Description**: Fetch coupons with custom pagination

@param string $applicationId
@param string $campaignId
@param int $pageSize
@param int $skip
@return array Paginated coupons
/

