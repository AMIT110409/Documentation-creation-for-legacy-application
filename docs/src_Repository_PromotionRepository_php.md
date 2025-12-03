# PromotionRepository.php

**Path**: `src\Repository\PromotionRepository.php`

## Classes
- `PromotionRepository`

## Function Details

### `__construct`

- **Parameters**: `EntityManager $entityManager, Mapping\ClassMetadata $class`

### `findByNameOrCode`

- **Parameters**: `string $phrase`

### `findByCustomer`

- **Parameters**: `Customer $customer, bool $orderByPriority = false`

### `findActiveForPromotionSubject`

- **Parameters**: `PromotionSubjectInterface $subject`

### `hasOrders`

- **Parameters**: `Promotion $promotion`

### `orderedByPriority`

- **Parameters**: `QueryBuilder $queryBuilder, string $order = 'desc'`

### `filterByCustomer`

- **Parameters**: `QueryBuilder $queryBuilder, ?Customer $customer = null, bool $strict = false`

### `findByToExport`


