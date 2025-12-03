# PaymentProvider.php

**Path**: `plugins\PayPalPlugin\src\Provider\PaymentProvider.php`

## Summary
@throws PaymentNotFoundException
@throws \Doctrine\ORM\NonUniqueResultException

## Classes
- `PaymentProvider`

## Function Details

### `__construct`

- **Parameters**: `EntityManager $entityManager, PaymentRepositoryInterface $paymentRepository`

### `getByPayPalOrderId`

- **Parameters**: `string $orderId`
- **Description**: @throws PaymentNotFoundException
@throws \Doctrine\ORM\NonUniqueResultException
/

