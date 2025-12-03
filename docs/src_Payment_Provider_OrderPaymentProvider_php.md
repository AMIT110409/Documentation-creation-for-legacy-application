# OrderPaymentProvider.php

**Path**: `src\Payment\Provider\OrderPaymentProvider.php`

## Summary
@throws NotProvidedOrderPaymentException

## Classes
- `OrderPaymentProvider`

## Function Details

### `provideOrderPayment`

- **Parameters**: `OrderInterface $order, string $targetState`
- **Description**: @throws NotProvidedOrderPaymentException
/

### `getLastPayment`

- **Parameters**: `OrderInterface $order`

### `getDefaultPaymentMethod`

- **Parameters**: `PaymentInterface $payment, OrderInterface $order`

### `applyRequiredTransition`

- **Parameters**: `PaymentInterface $payment, string $targetState`

