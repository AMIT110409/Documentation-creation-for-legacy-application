# OrderPromotionNormalizer.php

**Path**: `src\Api\Serializer\Normalizer\Order\OrderPromotionNormalizer.php`

## Summary
@param Order $object

@return array|\ArrayObject|bool|float|int|string|void|null

@throws \Symfony\Component\Serializer\Exception\ExceptionInterface

## Classes
- `OrderPromotionNormalizer`

## Function Details

### `normalize`

- **Parameters**: `$object, ?string $format = null, array $context = []`
- **Description**: @param Order $object

@return array|\ArrayObject|bool|float|int|string|void|null

@throws \Symfony\Component\Serializer\Exception\ExceptionInterface
/

### `getTalonOneCouponPromotion`

- **Parameters**: `OrderTalonOneCoupon $talonOneCoupon, array $adjustments = []`

### `getTotalPromotion`

- **Parameters**: `OrderInterface $order, bool $taxExcluded = false`

### `supportsNormalization`

- **Parameters**: `$data, ?string $format = null, $context = []`

