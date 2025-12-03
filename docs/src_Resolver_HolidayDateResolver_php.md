# HolidayDateResolver.php

**Path**: `src\Resolver\HolidayDateResolver.php`

## Summary
Vérifie si la date est un jour férié ou un week-end.

## Classes
- `HolidayDateResolver`

## Function Details

### `__construct`

- **Parameters**: `private HolidayDateRepository $holidayDateRepository`

### `getAllDatetime`

- **Parameters**: `int $year`

### `getAllFixedDatetime`

- **Parameters**: `int $year`

### `getAllVariableDatetime`

- **Parameters**: `int $year`

### `isBeforeHolidayDatetime`

- **Parameters**: `?\DateTime $date = null, int $days_before_holiday = 1`

### `isDayBeforeHolidayDatetime`

- **Parameters**: `\DateTime $date`

### `isDayAfterHolidayDatetime`

- **Parameters**: `\DateTime $date`

### `isHolidayDatetime`

- **Parameters**: `?\DateTime $date = null`
- **Description**: Vérifie si la date est un jour férié ou un week-end.
/

### `isWeekendDate`

- **Parameters**: `\DateTime $date`
- **Description**: Vérifie si la date est un week-end.
/

### `setNextOpenedDay`

- **Parameters**: `\DateTime $date`

### `setPrevOpenedDay`

- **Parameters**: `\DateTime $date`

