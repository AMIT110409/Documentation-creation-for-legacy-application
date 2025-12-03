# SftpPayoutsReportDownloaderSpec.php

**Path**: `plugins\PayPalPlugin\spec\Downloader\SftpPayoutsReportDownloaderSpec.php`

## Summary
This PHP specification file defines the behavior of the `SftpPayoutsReportDownloader` class, which is responsible for downloading payout reports from a PayPal SFTP server. The class implements the `PayoutsReportDownloaderInterface` and uses the phpseclib3 library to establish an SFTP connection, allowing it to retrieve the latest payout report in CSV format. The purpose of this class is to facilitate the integration of PayPal payout reporting with the Sylius e-commerce platform.

## Classes
- `SftpPayoutsReportDownloaderSpec`

## Function Details

### `let`

- **Parameters**: `SFTP $sftp`

### `it_implements_payouts_report_downloader_interface`


