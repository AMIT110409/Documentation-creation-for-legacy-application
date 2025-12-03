# SubscriptionAlertsNormalizer.php

**Path**: `src\Api\Serializer\Normalizer\Subscription\SubscriptionAlertsNormalizer.php`

## Summary
@throws ExceptionInterface

## Classes
- `SubscriptionAlertsNormalizer`

## Function Details

### `normalize`

- **Parameters**: `mixed $object, ?string $format = null, array $context = []`
- **Description**: @throws ExceptionInterface
/

### `isDebitDateUnder7days`

- **Parameters**: `string $date`
- **Description**: @throws \Exception
/

### `checkForProductAvailability`

- **Parameters**: `array $data`

### `supportsNormalization`

- **Parameters**: `mixed $data, ?string $format = null, array $context = []`

### `checkPaymentMethodForDraftOrder`

- **Parameters**: `array $data`
- **Description**: @throws \Exception
/

### `checkPromotionValidityForDraftOrder`

- **Parameters**: `array $data`

### `checkProductAvailabilityForDraftOrder`

- **Parameters**: `array $data`

### `checkShipmentMethodForDraftOrder`

- **Parameters**: `array $data`

### `checkForCbValidity`

- **Parameters**: `array $data`
- **Description**: @throws \Exception
/

