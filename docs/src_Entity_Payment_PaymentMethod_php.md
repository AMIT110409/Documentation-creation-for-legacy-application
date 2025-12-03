# PaymentMethod.php

**Path**: `src\Entity\Payment\PaymentMethod.php`

## Summary
@return Collection&lt;int, PaymentMethodCharges&gt;

## Classes
- `PaymentMethod`

## Function Details

### `__construct`


### `createTranslation`


### `getEnabledForSubscription`


### `setEnabledForSubscription`

- **Parameters**: `bool $enabledForSubscription`

### `isEnabledForAdminOrder`


### `setEnabledForAdminOrder`

- **Parameters**: `bool $enabledForAdminOrder`

### `getCharges`

- **Description**: @return Collection&lt;int, PaymentMethodCharges&gt;
/

### `addCharge`

- **Parameters**: `PaymentMethodCharges $charge`

### `removeCharge`

- **Parameters**: `PaymentMethodCharges $charge`

### `getTaxCategory`


### `setTaxCategory`

- **Parameters**: `?TaxCategoryInterface $category`

### `isEnabledForShopOrder`


### `setEnabledForShopOrder`

- **Parameters**: `bool $enabledForShopOrder`

