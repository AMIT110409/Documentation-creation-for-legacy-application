# PayzenGateway.php

**Path**: `src\Gateway\PayzenGateway.php`

## Summary
@throws PaymentException

## Classes
- `PayzenGateway`

## Function Details

### `supports`

- **Parameters**: `GatewayConfigInterface $gatewayConfig`

### `getPaymentPublicConfig`

- **Parameters**: `PaymentInstrument|Payment $object, array $data = []`
- **Description**: @throws PaymentException
/

### `formatDataDetailsForPaymentInstrument`

- **Parameters**: `array $data`
- **Description**: @throws PaymentInstrumentException
/
public function updatePaymentInstrument(
PaymentInstrument $paymentInstrument,
array $paymentData = [],
string $currentUrl = '',
): PaymentInstrument {
$token = $this-&gt;accessor-&gt;getValue($paymentData, '[token]');
if (null === $token) {
throw PaymentInstrumentException::updateHasFailed();
}

$response = $this-&gt;getPaymentInstrumentApi()-&gt;verifyToken($token);
if ('ACTIVE' !== $this-&gt;accessor-&gt;getValue($response, '[answer][status]')) {
throw PaymentInstrumentException::updateHasFailed();
}

$paymentInstrument-&gt;setDetails(
$this-&gt;formatDataDetailsForPaymentInstrument($response)
);
$paymentInstrument-&gt;setExpiration(
$this-&gt;formatExpirationDateForPaymentInstrument($response)
);

return $paymentInstrument;
}

public function getPaymentInstrumentApi(): PaymentInstrumentApi
{
return new PaymentInstrumentApi($this-&gt;clientConfig);
}

public function getPaymentApi(): PaymentApi
{
return new PaymentApi(
$this-&gt;clientConfig,
$this-&gt;payum,
$this-&gt;orderNumberAssigner
);
}

public function setGatewayConfig(GatewayConfigInterface $gatewayConfig): void
{
$this-&gt;gatewayConfig = $gatewayConfig;
$config = $this-&gt;gatewayConfig-&gt;getConfig();
$this-&gt;clientConfig = new PayzenClientConfig(
siteId: $config['site_id'],
password: $config['rest_password'],
apiEndpoint: $config['rest_endpoint']
);
}

/**
@throws PaymentInstrumentException
/

### `formatExpirationDateForPaymentInstrument`

- **Parameters**: `array $data`
- **Description**: @throws PaymentInstrumentException
/

### `recoverExistingPaidTransaction`

- **Parameters**: `SubscriptionOrder $order`

### `formatPaymentDetails`

- **Parameters**: `array $data`

### `getCardRepresentation`

- **Parameters**: `PaymentInstrument $paymentInstrument`

