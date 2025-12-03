# PromotionCouponCustomerRepository.php

**Path**: `src\Repository\Promotion\PromotionCouponCustomerRepository.php`

## Summary
@method PromotionCouponCustomer|null find($id, $lockMode = null, $lockVersion = null)
@method PromotionCouponCustomer|null findOneBy(array $criteria, array $orderBy = null)
@method PromotionCouponCustomer[]    findAll()
@method PromotionCouponCustomer[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)

## Classes
- `PromotionCouponCustomerRepository`

## Function Details

### `findByCustomerAndCoupon`

- **Parameters**: `Customer $customer, PromotionCoupon $coupon`
- **Description**: @method PromotionCouponCustomer|null find($id, $lockMode = null, $lockVersion = null)
@method PromotionCouponCustomer|null findOneBy(array $criteria, array $orderBy = null)
@method PromotionCouponCustomer[]    findAll()
@method PromotionCouponCustomer[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
/
class PromotionCouponCustomerRepository extends EntityRepository
{
/**
@return PromotionCouponCustomer[] Returns an array of PromotionCouponCustomer objects
/

### `findByCustomerAndPromotion`

- **Parameters**: `Customer $customer, Promotion $promotion`
- **Description**: @return PromotionCouponCustomer[] Returns an array of PromotionCouponCustomer objects
/

