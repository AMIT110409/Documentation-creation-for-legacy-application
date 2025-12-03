# PayoutsReportDownloaderInterface.php

**Path**: `plugins\PayPalPlugin\src\Downloader\PayoutsReportDownloaderInterface.php`

## Summary
The `PayoutsReportDownloaderInterface` defines a contract for downloading PayPal payout reports for a specific day and payment method, returning a `Report` object. This interface exists to encapsulate the business logic of retrieving payout reports from PayPal, allowing for a decoupled and flexible implementation. The interface's `downloadFor` method is designed to handle exceptions related to report downloading, specifically throwing a `PayPalReportDownloadException` if an error occurs.

## Function Details

### `downloadFor`

- **Parameters**: `\DateTimeInterface $day, PaymentMethodInterface $paymentMethod`
- **Description**: @throws PayPalReportDownloadException
/

