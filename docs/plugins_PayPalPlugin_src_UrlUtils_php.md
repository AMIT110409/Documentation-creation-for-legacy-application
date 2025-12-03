# UrlUtils.php

**Path**: `plugins\PayPalPlugin\src\UrlUtils.php`

## Summary
This PHP class, `UrlUtils`, provides a utility function `appendQueryString` to append a query string to an existing URL, handling duplicate keys according to a specified mode. The class exists to facilitate URL manipulation in the context of the Sylius PayPal plugin, allowing for flexible and controlled addition of query parameters to URLs. By handling duplicate keys in different modes, the class ensures that URLs are constructed correctly and consistently, which is crucial for payment processing and other e-commerce operations.

## Classes
- `UrlUtils`

## Function Details

### `__construct`


### `appendQueryString`

- **Parameters**: `string $url, string $queryString, int $mode = APPEND_QUERY_STRING_IGNORE_DUPLICATE`

