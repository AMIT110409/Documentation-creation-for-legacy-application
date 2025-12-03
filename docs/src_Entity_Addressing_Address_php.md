# Address.php

**Path**: `src\Entity\Addressing\Address.php`

## Summary
function hashCode(str: string): number {
return str.split('').reduce((a, b) =&gt; {
// eslint-disable-next-line no-param-reassign
a = (a &lt;&lt; 5) - a + b.charCodeAt(0)
return a &amp; a
}, 0)
}.

## Classes
- `Address`

## Function Details

### `__toString`


### `getAlias`

- **Parameters**: `bool $ensureDefaultAlias = false`

### `setAlias`

- **Parameters**: `?string $alias`

### `getEmailData`


### `isDefault`


### `getStreet2`


### `setStreet2`

- **Parameters**: `?string $street2`

### `getPhoneNumber2`


### `setPhoneNumber2`

- **Parameters**: `?string $phoneNumber2`

### `getIsDefault`


### `setIsDefault`


### `__clone`


### `override`

- **Parameters**: `self $address`

### `setOptionLabel`

- **Parameters**: `?string $optionLabel`

### `getOptionLabel`


### `getDeliveryInstructions`


### `setDeliveryInstructions`

- **Parameters**: `?string $deliveryInstructions`

### `getHash`


### `hashCode`

- **Parameters**: `str: string`

### `getClassName`


### `setClassName`

- **Parameters**: `string $className`

