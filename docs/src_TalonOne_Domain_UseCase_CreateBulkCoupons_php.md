# CreateBulkCoupons.php

**Path**: `src\TalonOne\Domain\UseCase\CreateBulkCoupons.php`

## Summary
Crée des coupons en masse via l'API Management de Talon.One

@param CreateBulkCouponsCommand $command
@return Coupon[] Liste des coupons créés
@throws TalonOneApiException
@throws TalonOneApiErrorException

## Classes
- `CreateBulkCoupons`

## Function Details

### `execute`

- **Parameters**: `CreateBulkCouponsCommand $command`
- **Description**: Crée des coupons en masse via l'API Management de Talon.One

@param CreateBulkCouponsCommand $command
@return Coupon[] Liste des coupons créés
@throws TalonOneApiException
@throws TalonOneApiErrorException
/

### `getCampaign`

- **Parameters**: `int $campaignId`

