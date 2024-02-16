'use client'
import { User } from '@supabase/supabase-js';
import React, { useEffect } from 'react';

interface StripePricingTableProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  'pricing-table-id': string;
  'publishable-key': string;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'stripe-pricing-table': StripePricingTableProps;
    }
  }
}

type Props = {
  user: User;
}

//stripe table
const StripePricingTable = ({ user }: Props) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://js.stripe.com/v3/pricing-table.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <div className='flex flex-1 flex-col w-full'>
      <stripe-pricing-table 
      pricing-table-id="prctbl_1OkHrCIG6b6d28mMnsSqPDkY"
      publishable-key="pk_live_51OFqIMIG6b6d28mMp7NKobhuby3UHndRxAPgU7yn0VDfzwPaBFa3fdob4i4RJVM2auFCIb75INfHtzTy9U1nOF0q00xoFsQB5i"
        client-reference-id={user.id}
        customer-email={user.email}
      >

      </stripe-pricing-table>
    </div>
  );
}

export default StripePricingTable;