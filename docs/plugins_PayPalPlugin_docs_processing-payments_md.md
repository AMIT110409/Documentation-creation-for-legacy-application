# processing-payments.md

**Path**: `plugins\PayPalPlugin\docs\processing-payments.md`

## Summary
This documentation file outlines the payment processing functionality of the PayPalPlugin, specifically the `sylius:pay-pal-plugin:complete-payments` command. The command is designed to be run as a cron job, iterating over pending PayPal payments and completing them if the corresponding order has been completed in PayPal. This ensures synchronization between the local system and PayPal, automating the payment completion process for orders that have been successfully paid.

