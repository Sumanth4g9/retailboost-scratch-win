import React from 'react';
import { Badge } from '@/components/ui/badge';

interface VoucherItem {
  id: string;
  brand: string;
  logo: string;
  discount: string;
}

const voucherData: VoucherItem[] = [
  { id: '1', brand: 'Husle', logo: 'Nykaa.png', discount: '5%' },
  { id: '2', brand: 'Mehfil', logo: 'download.png', discount: '16%' },
  { id: '3', brand: 'PVR Cinemas', logo: 'PVR Cinemas.png', discount: '18%' },
  { id: '4', brand: 'Niloufer', logo: 'amazon.png', discount: '2%' },
  { id: '5', brand: 'CMR shopping Mall', logo: 'uber.png', discount: '4%' },
];

const ExclusiveVouchers = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Exclusive Vouchers </h2>
        <h3>vochers can be redemed using coins</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {voucherData.map((voucher) => (
            <div key={voucher.id} className="flex flex-col items-center">
              <div className="relative w-full aspect-square mb-2">
                <div className="w-full h-full  border border-pink-200 flex items-center justify-center overflow-hidden p-4">
                  <div className="w-3/4 h-3/4 relative flex items-center justify-center">
                    {/* Using a placeholder div with brand name since we're using the same image for all logos */}
                    <div className="text-center text-xs font-bold">
                      {voucher.brand}
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/4">
                  <Badge className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium px-3 py-1 text-xs whitespace-nowrap">
                    Save {voucher.discount}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExclusiveVouchers;