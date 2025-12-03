# OrderByIdentifierSqlWalker.php

**Path**: `src\Doctrine\ORM\SqlWalker\OrderByIdentifierSqlWalker.php`

## Summary
@see https://www.doctrine-project.org/projects/doctrine-orm/en/2.13/cookbook/dql-custom-walkers.html#extending-dql-in-doctrine-orm-custom-ast-walkers

## Classes
- `OrderByIdentifierSqlWalker`

## Function Details

### `walkSelectStatement`

- **Parameters**: `SelectStatement $AST`

### `appendOrderByIdentifiers`

- **Parameters**: `SelectStatement $ast, string $dqlAlias`

### `hasOrderByOnDqlAlias`

- **Parameters**: `OrderByClause $orderByClause, string $dqlAlias`

### `createOrderByItem`

- **Parameters**: `string $dqlAlias, string $fieldName`

### `getDqlAlias`

- **Description**: @see https://www.doctrine-project.org/projects/doctrine-orm/en/2.13/cookbook/dql-custom-walkers.html#extending-dql-in-doctrine-orm-custom-ast-walkers
/

### `isOrderByIdentifierAllowed`

- **Parameters**: `SelectStatement $ast`

