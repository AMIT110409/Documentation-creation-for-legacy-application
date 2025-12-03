# PaymentInstrumentFactory.php

**Path**: `src\Factory\PaymentInstrumentFactory.php`

## Summary
@var PaymentInstrument $paymentInstrument

## Classes
- `PaymentInstrumentFactory`

## Function Details

### `createNew`


### `createNewWithCustomer`

- **Parameters**: `CustomerInterface $customer`
- **Description**: @var PaymentInstrument $paymentInstrument */
$paymentInstrument = $this-&gt;decorated-&gt;createNew();
$paymentInstrument-&gt;setCode($this-&gt;generator-&gt;generateUriSafeString(10));

return $paymentInstrument;
}

/**
@param Customer&amp;CustomerInterface $customer
/

### `createNewFromPayment`

- **Parameters**: `PaymentInterface $payment`

