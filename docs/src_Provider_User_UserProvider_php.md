# UserProvider.php

**Path**: `src\Provider\User\UserProvider.php`

## Summary
Loading and ad-hoc creation of a user by an OAuth sign-in provider account.

## Classes
- `UserProvider`

## Function Details

### `findUser`

- **Parameters**: `string $uniqueIdentifier`
- **Description**: Loading and ad-hoc creation of a user by an OAuth sign-in provider account.
/
final class UserProvider extends AbstractUserProvider
{
public function __construct(
protected string $supportedUserClass,
protected UserRepositoryInterface $userRepository,
protected CanonicalizerInterface $canonicalizer,
private readonly CustomerRepository $customerRepository,
private readonly ChannelRepository $channelRepository,
private readonly RequestStack $requestStack,
) {
parent::__construct($supportedUserClass, $userRepository, $canonicalizer);
}

/** @throws \Doctrine\ORM\NonUniqueResultException */

