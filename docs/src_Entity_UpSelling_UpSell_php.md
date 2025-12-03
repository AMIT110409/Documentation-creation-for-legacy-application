# UpSell.php

**Path**: `src\Entity\UpSelling\UpSell.php`

## Summary
@var Collection&lt;int, UpSellVariant&gt;&amp;iterable&lt;UpSellVariant&gt;

## Classes
- `UpSell`

## Function Details

### `__construct`


### `__clone`


### `getId`


### `getName`


### `setName`

- **Parameters**: `string $name`

### `isEnabled`


### `setEnabled`

- **Parameters**: `bool $enabled`

### `getTypology`


### `setTypology`

- **Parameters**: `?string $typology`

### `getClassification`


### `setClassification`

- **Parameters**: `?string $classification`

### `getVariants`


### `getAvailableVariants`


### `addVariant`

- **Parameters**: `UpSellVariant $variant`

### `removeVariant`

- **Parameters**: `UpSellVariant $variant`

### `getVariant`

- **Parameters**: `int $upsellVariantId`

### `getUpsellVariantFromProductVariant`

- **Parameters**: `ProductVariant $productVariant`

