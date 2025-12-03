# PaymentChargesPercentageDiscountActionCommand.php

**Path**: `src\Promotion\Action\PaymentChargesPercentageDiscountActionCommand.php`

## Summary
@var PromotionCoupon $item

## Classes
- `PaymentChargesPercentageDiscountActionCommand`

## Function Details

### `__construct`

- **Parameters**: `FactoryInterface $adjustmentFactory`

### `execute`

- **Parameters**: `PromotionSubjectInterface $subject, array $configuration, PromotionInterface $promotion`

### `revert`

- **Parameters**: `PromotionSubjectInterface $subject, array $configuration, PromotionInterface $promotion`

### `createAdjustment`

- **Parameters**: `PromotionInterface $promotion, string $type = AdjustmentInterface::PAYMENT_CHARGES_PROMOTION_ADJUSTMENT`

