# NthOrderRuleChecker.php

**Path**: `src\Promotion\Checker\Rule\NthOrderRuleChecker.php`

## Summary
@var OrderRepositoryInterface

## Classes
- `NthOrderRuleChecker`

## Function Details

### `isEligible`

- **Parameters**: `PromotionSubjectInterface $subject, array $configuration`
- **Description**: @var OrderRepositoryInterface */
private $orderRepository;

public function __construct(OrderRepositoryInterface $orderRepository)
{
$this-&gt;orderRepository = $orderRepository;
}

/**
@throws UnsupportedTypeException
/

