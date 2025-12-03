# SftpPayoutsReportDownloader.php

**Path**: `plugins\PayPalPlugin\src\Downloader\SftpPayoutsReportDownloader.php`

## Summary
This PHP class, `SftpPayoutsReportDownloader`, is responsible for downloading PayPal payout reports via SFTP (Secure File Transfer Protocol) for a specific payment method and date. It exists to facilitate the retrieval of financial transaction data from PayPal, utilizing the `phpseclib3` library for SFTP connections, and is part of the Sylius package. The class implements the `PayoutsReportDownloaderInterface` and throws exceptions if the download process fails, ensuring robust error handling for financial data retrieval.

## Classes
- `SftpPayoutsReportDownloader`

## Function Details

### `__construct`

- **Parameters**: `SFTP $sftp`

### `downloadFor`

- **Parameters**: `\DateTimeInterface $day, PaymentMethodInterface $paymentMethod`

