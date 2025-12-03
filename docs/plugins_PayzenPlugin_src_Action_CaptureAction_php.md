# CaptureAction.php

**Path**: `plugins\PayzenPlugin\src\Action\CaptureAction.php`

## Summary
Class CaptureAction.

@author  Etienne Dauvergne &lt;contact@ekyna.com&gt;

## Classes
- `CaptureAction`

## Function Details

### `execute`

- **Parameters**: `$request`
- **Description**: Class CaptureAction.

@author  Etienne Dauvergne &lt;contact@ekyna.com&gt;
/
class CaptureAction implements ActionInterface, GatewayAwareInterface, GenericTokenFactoryAwareInterface
{
use GatewayAwareTrait;
use GenericTokenFactoryAwareTrait;

/**
@param Capture $request
/

### `supports`

- **Parameters**: `$request`

