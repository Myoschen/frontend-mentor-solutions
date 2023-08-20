import {useMemo, useState} from 'react';

import PricingCard from '@/components/pricing-card';
import Bottom from '@/assets/bg-bottom.svg';
import Top from '@/assets/bg-top.svg';

import {Switch} from './components/ui';

export default function App() {
  const [checked, setChecked] = useState(false);
  const plans = useMemo(
    () => [
      {
        level: 'basic',
        price: checked ? 19.99 : 199.99,
        features: ['500 GB Storage', '2 Users Allowed', 'Send up to 3 GB'],
      },
      {
        level: 'professional',
        price: checked ? 24.99 : 249.99,
        features: ['1 TB Storage', '5 Users Allowed', 'Send up to 10 GB'],
        featured: true,
      },
      {
        level: 'master',
        price: checked ? 39.99 : 399.99,
        features: ['2 TB Storage', '10 Users Allowed', 'Send up to 20 GB'],
      },
    ],
    [checked],
  );

  return (
    <main
      className={
        'relative isolate min-h-screen overflow-hidden bg-grayish-blue-100 px-6 py-16 font-bold lg:py-10'
      }
    >
      <img
        className={
          'absolute -right-48 -top-12 -z-10 object-center lg:right-0 lg:top-0'
        }
        src={Top}
        alt={'Top Decoration'}
      />
      <img
        className={
          'absolute bottom-0 left-0 -z-10 hidden object-center lg:block'
        }
        src={Bottom}
        alt={'Bottom Decoration'}
      />
      {/* Title */}
      <h1
        className={
          'mb-12 text-center text-3xl tracking-wide text-grayish-blue-500 lg:mb-8'
        }
      >
        {'Our Pricing'}
      </h1>

      {/* Switch */}
      <div
        className={
          'mb-16 flex items-center justify-center gap-x-6 text-[15px] text-grayish-blue-300 lg:mb-12'
        }
      >
        <label htmlFor={'type'}>{'Annually'}</label>
        <Switch id={'type'} checked={checked} onCheckedChange={setChecked} />
        <label htmlFor={'type'}>{'Monthly'}</label>
      </div>

      {/* Pricing plans */}
      <div
        className={
          'space-y-8 lg:flex lg:items-center lg:justify-center lg:space-y-0'
        }
      >
        {plans.map((plan) => (
          <PricingCard
            key={plan.level}
            level={plan.level}
            price={plan.price}
            features={plan.features}
            featured={plan.featured}
          />
        ))}
      </div>

      <div
        className={
          'absolute inset-x-0 bottom-2 text-center text-xs font-medium text-grayish-blue-700'
        }
      >
        <span>{'Challenge by '}</span>
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          className={
            'transition-colors ease-out hover:text-grayish-blue-500 hover:underline'
          }
          target="_blank"
          rel={'noopener noreferrer'}
        >
          {'Frontend Mentor'}
        </a>
        <span>{'. Coded by '}</span>
        <a
          href="https://github.com/Myoschen"
          className={
            'transition-colors ease-out hover:text-grayish-blue-500 hover:underline'
          }
          target="_blank"
          rel={'noopener noreferrer'}
        >
          {'Myoschen'}
        </a>
        .
      </div>
    </main>
  );
}
