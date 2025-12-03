# ApiResponseAction.php

**Path**: `plugins\PayzenPlugin\src\Action\Api\ApiResponseAction.php`

## Summary
Class ResponseAction.

@author  Etienne Dauvergne &lt;contact@ekyna.com&gt;

## Classes
- `ApiResponseAction`

## Function Details

### `logResponseData`

- **Parameters**: `array $data`
- **Description**: Class ResponseAction.

@author  Etienne Dauvergne &lt;contact@ekyna.com&gt;
/
class ApiResponseAction extends AbstractApiAction
{
public function execute($request)
{
/* @var Response $request */
RequestNotSupportedException::assertSupports($this, $request);

$model = ArrayObject::ensureArrayObject($request-&gt;getModel());

$this-&gt;gateway-&gt;execute($httpRequest = new GetHttpRequest());

if (isset($httpRequest-&gt;request['vads_result'])) {
$data = $httpRequest-&gt;request;
} elseif (isset($httpRequest-&gt;query['vads_result'])) {
$data = $httpRequest-&gt;query;
} else {
return;
}

$this-&gt;logResponseData($data);

// Check amount
if ($model['vads_amount'] !== $data['vads_amount']) {
return;
}

// Check the response signature
if ($this-&gt;api-&gt;checkResponseIntegrity($data)) {
// Update the payment details
$model-&gt;replace($data);
$request-&gt;setModel($model);
}
}

/**
Logs the response data.
/

### `supports`

- **Parameters**: `$request`
- **Description**: @inheritdec
/

