# SubscriptionPaymentCommand.php

**Path**: `src\Subscription\Command\SubscriptionPaymentCommand.php`

## Summary
@throws NonUniqueResultException

## Classes
- `SubscriptionPaymentCommand`

## Function Details

### `configure`


### `execute`

- **Parameters**: `InputInterface $input, OutputInterface $output`
- **Description**: @throws NonUniqueResultException
/

### `executeWithSubscriptionOption`

- **Parameters**: `InputInterface $input, OutputInterface $output`
- **Description**: @throws NonUniqueResultException
/

### `executeWithSubscriptionOrderOption`

- **Parameters**: `InputInterface $input, OutputInterface $output`

### `executeWithRunOption`

- **Parameters**: `\DateTime $shippingDate, OutputInterface $output, bool $dryRun`

### `executeWithRetryOption`

- **Parameters**: `OutputInterface $output`

### `lockAndDispatch`

- **Parameters**: `SubscriptionOrder $subscriptionOrder, OutputInterface $output`

