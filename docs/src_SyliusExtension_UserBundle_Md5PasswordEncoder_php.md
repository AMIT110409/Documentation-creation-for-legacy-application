# Md5PasswordEncoder.php

**Path**: `src\SyliusExtension\UserBundle\Md5PasswordEncoder.php`

## Classes
- `Md5PasswordEncoder`

## Function Details

### `__construct`

- **Parameters**: `private string $salt`

### `hash`

- **Parameters**: `string $plainPassword`

### `verify`

- **Parameters**: `string $hashedPassword, string $plainPassword`

### `needsRehash`

- **Parameters**: `string $hashedPassword`

### `encodePassword`

- **Parameters**: `$raw`

### `mergePasswordAndSalt`

- **Parameters**: `$password, $salt`

### `isPasswordValid`

- **Parameters**: `$encoded, $raw`

