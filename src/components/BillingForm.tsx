
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z.object({
  billAmount: z.string().min(1, 'Bill amount is required'),
});

const BillingForm = () => {
  const { retailerId } = useParams();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      billAmount: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    // Generate random discount (5-30%) and coupon code
    const discount = Math.floor(Math.random() * 26) + 5;
    const couponCode = 'RB' + Math.random().toString(36).substring(2, 10).toUpperCase();
    
    // Navigate to scratch card page with the data
    setTimeout(() => {
      setIsSubmitting(false);
      navigate(`/scratch-card`, { 
        state: { 
          retailerId, 
          billAmount: values.billAmount, 
          discount, 
          couponCode 
        } 
      });
    }, 1000);
  };

  return (
    <div className="container mx-auto max-w-md py-8">
      <Card>
        <CardHeader>
          <CardTitle>Billing Details</CardTitle>
          <CardDescription>
            Enter your bill amount to get a discount coupon
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <FormField
                  control={form.control}
                  name="billAmount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bill Amount (₹)</FormLabel>
                      <FormControl>
                        <Input 
                          type="number" 
                          placeholder="Enter bill amount" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="pt-2">
                  <p className="text-sm font-medium text-gray-700">Retailer ID: {retailerId}</p>
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-brand-purple hover:bg-brand-purple/90" 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Processing...' : 'Get Scratch Card'}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default BillingForm;
