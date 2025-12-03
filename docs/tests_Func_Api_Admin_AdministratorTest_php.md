# AdministratorTest.php

**Path**: `tests\Func\Api\Admin\AdministratorTest.php`

## Summary
@internal

@coversNothing

## Classes
- `AdministratorTest`

## Function Details

### `testLogin`

- **Parameters**: `string $username = self::ADMIN_USERNAME, string $password = self::ADMIN_PASSWORD`
- **Description**: @internal

@coversNothing
/
final class AdministratorTest extends ApiTestCase
{
use AdminAuthenticationTrait;

private array $adminUsers;
private int $nbUsers = 7;

/**
@throws ExceptionInterface
/

### `testGetAdministrators`

- **Description**: @depends testLogin
/

### `getAdministrators`

- **Parameters**: `?string $token = null`

