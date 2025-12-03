# ManagingOrdersContext.php

**Path**: `plugins\PayPalPlugin\tests\Behat\Context\Admin\ManagingOrdersContext.php`

## Summary
@Given /^(this order) is already paid as "([^"]+)" PayPal order$/
@Given /^(this order) is already paid as "([^"]+)" PayPal order with "([^"]+)" PayPal payment$/

## Classes
- `ManagingOrdersContext`

## Function Details

### `requestFromPayPalAboutOrderRefundHasBeenReceived`

- **Parameters**: `string $payPalOrderId`
- **Description**: @Given /^(this order) is already paid as "([^"]+)" PayPal order$/
@Given /^(this order) is already paid as "([^"]+)" PayPal order with "([^"]+)" PayPal payment$/
/
public function thisOrderIsAlreadyPaidAsPayPalOrder(
OrderInterface $order,
string $payPalOrderId,
?string $payPalPaymentId = null,
): void {
/** @var PaymentInterface $payment */
$payment = $order-&gt;getPayments()-&gt;first();

$details = ['paypal_order_id' =&gt; $payPalOrderId];
if (null !== $payPalPaymentId) {
$details['paypal_payment_id'] = $payPalPaymentId;
}
$payment-&gt;setDetails($details);

/** @var StateMachineInterface $stateMachine */
$stateMachine = $this-&gt;stateMachineFactory-&gt;get($payment, PaymentTransitions::GRAPH);
$stateMachine-&gt;apply(PaymentTransitions::TRANSITION_COMPLETE);

$this-&gt;refundAmount = $order-&gt;getTotal();

$this-&gt;objectManager-&gt;flush();
}

/**
@When request from PayPal about :payPalOrderId order refund has been received
/

### `iSeeTheRefundedOrder`

- **Parameters**: `OrderInterface $order`
- **Description**: @When I view the summary of the refunded order :order
/

