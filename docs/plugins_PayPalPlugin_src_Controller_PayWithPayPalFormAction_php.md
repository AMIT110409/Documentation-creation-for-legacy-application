# PayWithPayPalFormAction.php

**Path**: `plugins\PayPalPlugin\src\Controller\PayWithPayPalFormAction.php`

## Summary
This PHP class, `PayWithPayPalFormAction`, is a controller action responsible for handling PayPal payment requests in an e-commerce application. It retrieves a payment object based on the provided payment ID and order token, and then uses this payment object to facilitate a PayPal payment transaction. The class exists to integrate PayPal payment functionality into the application, leveraging various APIs and providers to manage payment methods, gateway configurations, and country availability.

## Classes
- `PayWithPayPalFormAction`

## Function Details

### `__invoke`

- **Parameters**: `Request $request`

### `findOneByPaymentIdOrderToken`

- **Parameters**: `string $paymentId, string $orderToken`
- **Description**: @var PaymentInterface $payment */
$payment = $this-&gt;findOneByPaymentIdOrderToken($paymentId, $orderToken);
/** @var PaymentMethodInterface $paymentMethod */
$paymentMethod = $payment-&gt;getMethod();

/** @var GatewayConfigInterface $gatewayConfig */
$gatewayConfig = $paymentMethod-&gt;getGatewayConfig();
/** @var string $clientId */
$clientId = $gatewayConfig-&gt;getConfig()['client_id'];
/** @var string $partnerAttributionId */
$partnerAttributionId = $gatewayConfig-&gt;getConfig()['partner_attribution_id'];

/** @var OrderInterface $order */
$order = $payment-&gt;getOrder();

$token = $this-&gt;authorizeClientApi-&gt;authorize($paymentMethod);
$clientToken = $this-&gt;identityApi-&gt;generateToken($token);

return new Response($this-&gt;twig-&gt;render('@SyliusPayPalPlugin/payWithPaypal.html.twig', [
'available_countries' =&gt; $this-&gt;countriesProvider-&gt;provide(),
'billing_address' =&gt; $order-&gt;getBillingAddress(),
'client_id' =&gt; $clientId,
'client_token' =&gt; $clientToken,
'currency' =&gt; $order-&gt;getCurrencyCode(),
'locale' =&gt; $request-&gt;getLocale(),
'merchant_id' =&gt; $gatewayConfig-&gt;getConfig()['merchant_id'],
'order_token' =&gt; $order-&gt;getTokenValue(),
'partner_attribution_id' =&gt; $partnerAttributionId,
]));
}

/**
Need to be used due to support for Sylius 1.8.
After dropping it, we can switch to Sylius\Component\Core\Repository\PaymentRepositoryInterface::findOneByOrderToken.
/

