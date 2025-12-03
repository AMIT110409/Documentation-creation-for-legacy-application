# SubscriptionOrder.php

**Path**: `src\Entity\Subscription\SubscriptionOrder.php`

## Summary
use for winzou_state_machine

## Classes
- `SubscriptionOrder`

## Function Details

### `getSubscriptionOrderState`

- **Description**: use for winzou_state_machine */
private string $subscriptionOrderState;

public function __construct()
{
parent::__construct();

$this-&gt;draftState = SubscriptionOrderState::DRAFT;
}

public function getDraftState(): SubscriptionOrderState
{
return $this-&gt;draftState;
}

public function setDraftState(SubscriptionOrderState $draftState): self
{
$this-&gt;draftState = $draftState;

return $this;
}

/**
use for GraphQL and winzou_state_machine.
/

### `setSubscriptionOrderState`

- **Parameters**: `string $subscriptionOrderState`
- **Description**: use for winzou_state_machine.
/

### `getSubscription`


### `setSubscription`

- **Parameters**: `?Subscription $subscription`

### `getPickupPoint`


### `isPickupPointShipmentMethod`


### `getIsSubscription`


### `getWebmethodState`

- **Description**: Webmethod */

### `getWebmethodIsSubscriptionOrder`


