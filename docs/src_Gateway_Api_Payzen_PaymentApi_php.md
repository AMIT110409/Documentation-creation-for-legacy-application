# PaymentApi.php

**Path**: `src\Gateway\Api\Payzen\PaymentApi.php`

## Summary
@throws PaymentException

## Classes
- `PaymentApi`

## Function Details

### `requestAliasToken`

- **Parameters**: `PaymentInstrument $paymentInstrument`
- **Description**: @throws PaymentException
/

### `requestPayment`

- **Parameters**: `Order $order`
- **Description**: @throws PaymentException
/

### `getTransactionsByOrder`

- **Parameters**: `Order $order`

### `getParams`

- **Parameters**: `SubscriptionOrder|Order|PaymentInstrument $object`

### `formatParams`

- **Parameters**: `SubscriptionOrder|Order|PaymentInstrument $object`

### `getOrderParams`

- **Parameters**: `SubscriptionOrder|Order $object`

### `formatCustomerParams`

- **Parameters**: `SubscriptionOrder|Order|PaymentInstrument $object`

### `formatShoppingCart`

- **Parameters**: `SubscriptionOrder|Order $object`

