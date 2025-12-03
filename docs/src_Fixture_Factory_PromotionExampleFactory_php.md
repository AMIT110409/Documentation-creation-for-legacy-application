# PromotionExampleFactory.php

**Path**: `src\Fixture\Factory\PromotionExampleFactory.php`

## Summary
@var ExampleFactoryInterface

## Classes
- `PromotionExampleFactory`

## Function Details

### `create`

- **Parameters**: `array $options = []`
- **Description**: @var ExampleFactoryInterface */
private $promotionExampleFactory;

/** @var RepositoryInterface */
private $promotionAnalyticCategoryRepository;

/** @var RepositoryInterface */
private $productVarianRepository;

/** @var OptionsResolver */
private $optionsResolver;

public function __construct(
ExampleFactoryInterface $promotionExampleFactory,
RepositoryInterface $promotionAnalyticCategoryRepository,
RepositoryInterface $productVarianRepository,
) {
$this-&gt;promotionExampleFactory = $promotionExampleFactory;
$this-&gt;promotionAnalyticCategoryRepository = $promotionAnalyticCategoryRepository;
$this-&gt;productVarianRepository = $productVarianRepository;

$this-&gt;optionsResolver = new OptionsResolver();
$this-&gt;configureOptions($this-&gt;optionsResolver);
}

protected function configureOptions(OptionsResolver $resolver): void
{
$resolver
-&gt;setDefault('category', LazyOption::randomOne($this-&gt;promotionAnalyticCategoryRepository))
-&gt;setAllowedTypes('category', ['string', PromotionAnalyticCategory::class])
-&gt;setNormalizer('category', LazyOption::findOneBy($this-&gt;promotionAnalyticCategoryRepository, 'name'))
;
}

/**
@return PromotionInterface
/

