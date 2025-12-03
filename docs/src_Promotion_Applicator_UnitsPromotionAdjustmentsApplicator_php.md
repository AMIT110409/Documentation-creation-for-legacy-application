# UnitsPromotionAdjustmentsApplicator.php

**Path**: `src\Promotion\Applicator\UnitsPromotionAdjustmentsApplicator.php`

## Summary
@var AdjustmentFactoryInterface

## Classes
- `UnitsPromotionAdjustmentsApplicator`

## Function Details

### `apply`

- **Parameters**: `OrderInterface $order, PromotionInterface $promotion, array $adjustmentsAmounts`
- **Description**: @var AdjustmentFactoryInterface */
private $adjustmentFactory;

/** @var IntegerDistributorInterface */
private $distributor;

public function __construct(
AdjustmentFactoryInterface $adjustmentFactory,
IntegerDistributorInterface $distributor,
) {
$this-&gt;adjustmentFactory = $adjustmentFactory;
$this-&gt;distributor = $distributor;
}

/**
@throws UnsupportedTypeException
/

### `addAdjustment`

- **Parameters**: `PromotionInterface $promotion, OrderItemUnitInterface $unit, int $amount`

