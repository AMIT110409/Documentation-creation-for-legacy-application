# AbstractApiAction.php

**Path**: `plugins\PayzenPlugin\src\Action\Api\AbstractApiAction.php`

## Summary
Class AbstractApiAction.

@author  Etienne Dauvergne &lt;contact@ekyna.com&gt;

## Classes
- `AbstractApiAction`

## Function Details

### `log`

- **Parameters**: `$message`
- **Description**: Class AbstractApiAction.

@author  Etienne Dauvergne &lt;contact@ekyna.com&gt;
/
abstract class AbstractApiAction implements ActionInterface, GatewayAwareInterface, ApiAwareInterface, LoggerAwareInterface
{
use GatewayAwareTrait;

/**
@var Api
/
protected $api;

/**
@var LoggerInterface
/
private $logger;

public function setApi($api)
{
if (false === $api instanceof Api) {
throw new UnsupportedApiException('Not supported.');
}

$this-&gt;api = $api;
}

public function setLogger(LoggerInterface $logger)
{
$this-&gt;logger = $logger;
}

/**
Logs the given message.

@param string $message
/

### `logData`

- **Parameters**: `$message, array $data, array $filterKeys = []`
- **Description**: Logs the given message and data.

@param string $message
/

