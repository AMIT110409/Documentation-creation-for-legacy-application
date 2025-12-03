# CacheItemPoolBlockedTokenManager.php

**Path**: `src\JWTBlockedToken\CacheItemPoolBlockedTokenManager.php`

## Summary
From JWTAuthenticationBundle v^2.21

## Classes
- `CacheItemPoolBlockedTokenManager`

## Function Details

### `add`

- **Parameters**: `array $payload`
- **Description**: From JWTAuthenticationBundle v^2.21 */
final readonly class CacheItemPoolBlockedTokenManager
{
public function __construct(private CacheItemPoolInterface $cacheJwt)
{
}

/**
@param array $payload

@return bool

@throws MissingClaimException
@throws InvalidArgumentException
@throws \Exception
/

### `has`

- **Parameters**: `array $payload`
- **Description**: @param array $payload

@return bool

@throws MissingClaimException
@throws InvalidArgumentException
/

### `remove`

- **Parameters**: `array $payload`
- **Description**: @param array $payload

@throws MissingClaimException
@throws InvalidArgumentException
/

