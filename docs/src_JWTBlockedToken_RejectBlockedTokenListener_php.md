# RejectBlockedTokenListener.php

**Path**: `src\JWTBlockedToken\RejectBlockedTokenListener.php`

## Summary
From JWTAuthenticationBundle v^2.21

## Classes
- `RejectBlockedTokenListener`

## Function Details

### `__invoke`

- **Parameters**: `JWTAuthenticatedEvent $event`
- **Description**: From JWTAuthenticationBundle v^2.21 */
#[AutoconfigureTag(name: 'kernel.event_listener', attributes: [
'event' =&gt; 'lexik_jwt_authentication.on_jwt_authenticated',
])]
final readonly class RejectBlockedTokenListener
{
public function __construct(private CacheItemPoolBlockedTokenManager $blockedTokenManager)
{
}

/**
@throws \Psr\Cache\InvalidArgumentException
@throws InvalidTokenException
/

