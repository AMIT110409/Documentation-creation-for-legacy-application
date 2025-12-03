# PaymentInstrumentApi.php

**Path**: `src\Gateway\Api\CheckoutCom\PaymentInstrumentApi.php`

## Summary
@throws CheckoutArgumentException
@throws CheckoutException

## Classes
- `PaymentInstrumentApi`

## Function Details

### `createInstrument`

- **Parameters**: `string $token`
- **Description**: @throws CheckoutArgumentException
@throws CheckoutException
/

### `verifyInstrument`

- **Parameters**: `string $sourceId, string $url, ?array $metadata = null`
- **Description**: @throws InstrumentVerificationRequestRedirectionException
@throws CheckoutApiException
@throws CheckoutArgumentException
@throws CheckoutException
/

### `verifySourceAuthorization`

- **Parameters**: `string $checkoutPaymentId`
- **Description**: @var HttpMetadata|null $httpMetadata */
$httpMetadata = $this-&gt;accessor-&gt;getValue($verifyResult, '[http_metadata]');
if (null === $httpMetadata) {
return null;
}

if (202 === $httpMetadata-&gt;getStatusCode()) {
$redirectLink = $this-&gt;accessor-&gt;getValue($verifyResult, '[_links][redirect][href]');
if (null === $redirectLink) {
return null;
}

throw new InstrumentVerificationRequestRedirectionException($redirectLink);
}

$approved = $this-&gt;accessor-&gt;getValue($verifyResult, '[approved]');
if (true !== $approved) {
return null;
}

$this-&gt;accessor-&gt;setValue(
$verifyResult,
'[source][referential_payment_id]',
$this-&gt;accessor-&gt;getValue($verifyResult, '[id]')
);

return $this-&gt;accessor-&gt;getValue($verifyResult, '[source]');
}

/**
@throws CheckoutArgumentException
@throws CheckoutApiException
@throws CheckoutException
/

