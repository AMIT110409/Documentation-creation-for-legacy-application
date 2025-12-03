# GenerateCSCouponForCustomerCommand.php

**Path**: `src\TalonOne\Domain\Command\GenerateCSCouponForCustomerCommand.php`

## Summary
@param string $customerId
@param PromotionAnalyticCategory $analyticCategory
@param PromotionAnalyticTarget $analyticTarget
@param PromotionAnalyticBroadcast[] $analyticBroadcasts
@param CustomerSupportEventAttributes $attributes

## Classes
- `GenerateCSCouponForCustomerCommand`

## Function Details

### `getAnalyticBroadcasts`

- **Description**: @param string $customerId
@param PromotionAnalyticCategory $analyticCategory
@param PromotionAnalyticTarget $analyticTarget
@param PromotionAnalyticBroadcast[] $analyticBroadcasts
@param CustomerSupportEventAttributes $attributes
/
public function __construct(
public string $customerId,
private PromotionAnalyticCategory $analyticCategory,
private PromotionAnalyticTarget $analyticTarget,
private iterable $analyticBroadcasts,
private CustomerSupportEventAttributes $attributes,
) {
}

public function getAttributes(): CustomerSupportEventAttributes
{
return $this-&gt;attributes;
}

public function getAnalyticCategory(): PromotionAnalyticCategory
{
return $this-&gt;analyticCategory;
}

public function setAnalyticCategory(PromotionAnalyticCategory $analyticCategory): void
{
$this-&gt;analyticCategory = $analyticCategory;
}

public function getAnalyticTarget(): PromotionAnalyticTarget
{
return $this-&gt;analyticTarget;
}

public function setAnalyticTarget(PromotionAnalyticTarget $analyticTarget): void
{
$this-&gt;analyticTarget = $analyticTarget;
}

/**
@return PromotionAnalyticBroadcast[]
/

### `setAnalyticBroadcasts`

- **Parameters**: `iterable $analyticBroadcasts`
- **Description**: @param PromotionAnalyticBroadcast[] $analyticBroadcasts
/

