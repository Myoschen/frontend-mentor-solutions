import {cn} from '@/utils/classnames';
import {Button} from '@/components/ui';

interface PricingCardProps {
  level: string;
  price: number;
  features: string[];
  featured?: boolean;
}

export default function PricingCard({
  level,
  price,
  features,
  featured = false,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        'w-full max-w-xs rounded-lg p-8 shadow-xl shadow-grayish-blue-300/20 lg:max-w-[360px]',
        featured
          ? 'bg-gradient-to-br from-[#a3a8f0] to-[#696fdd] lg:py-12'
          : 'bg-white',
      )}
    >
      <h3
        className={cn(
          'mb-6 block text-center text-lg capitalize',
          featured ? 'text-white' : 'text-grayish-blue-500',
        )}
      >
        {level}
      </h3>
      <div
        className={cn(
          'mb-8 flex items-center justify-center gap-x-1',
          featured ? 'text-white' : 'text-grayish-blue-700',
        )}
      >
        <span className={'text-4xl'}>{'$'}</span>
        <span className={'text-7xl'}>{price}</span>
      </div>
      <ul
        className={cn(
          'mb-8 text-center text-[15px]',
          featured ? 'text-white' : 'text-grayish-blue-500',
        )}
      >
        {features.map((feature, index) => (
          <li
            key={index}
            className={'border-t border-grayish-blue-300/50 py-4 last:border-y'}
          >
            {feature}
          </li>
        ))}
      </ul>
      <Button featured={featured}>{'LEARN MORE'}</Button>
    </div>
  );
}
