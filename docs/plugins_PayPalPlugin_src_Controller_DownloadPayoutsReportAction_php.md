# DownloadPayoutsReportAction.php

**Path**: `plugins\PayPalPlugin\src\Controller\DownloadPayoutsReportAction.php`

## Summary
This PHP class, `DownloadPayoutsReportAction`, is a controller action that handles the download of PayPal payouts reports for a specific payment method. It utilizes the `PayoutsReportDownloaderInterface` to fetch the report data for the last 24 hours and returns a CSV response, allowing users to download the report. The purpose of this code is to provide a seamless way to retrieve and export PayPal payout reports, likely for accounting or financial analysis purposes within an e-commerce platform.

## Classes
- `DownloadPayoutsReportAction`

## Function Details

### `__invoke`

- **Parameters**: `Request $request`

