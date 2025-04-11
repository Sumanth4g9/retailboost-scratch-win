
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { QrCode } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { QrReader } from 'react-qr-reader';

const QRScanner = ({ isFloating = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleScan = (result: any) => {
    if (result) {
      // Close the scanner
      setIsOpen(false);
      
      // Navigate to billing form with the retailer ID
      const retailerId = result?.text || '';
      if (retailerId) {
        navigate(`/billing-form/${retailerId}`);
      }
    }
  };

  const handleError = (err: any) => {
    console.error('QR Scanner error:', err);
  };

  if (isFloating) {
    return (
      <>
        <Button 
          onClick={() => setIsOpen(true)} 
          variant="default" 
          size="icon"
          className="fixed bottom-6 right-6 z-50 rounded-full shadow-lg h-14 w-14 bg-brand-purple hover:bg-brand-purple/90"
        >
          <QrCode className="w-6 h-6" />
        </Button>

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Scan Retailer QR Code</DialogTitle>
            </DialogHeader>
            <div className="mt-4">
              <QrReader
                scanDelay={300}
                constraints={{ facingMode: 'environment' }}
                onResult={handleScan}
                containerStyle={{ width: '100%', height: '100%' }}
                videoContainerStyle={{ width: '100%', height: '100%' }}
                videoStyle={{ width: '100%', height: '100%' }}
              />
            </div>
            <div className="flex justify-center mt-4">
              <Button variant="outline" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </>
    );
  }

  return (
    <>
      <Button 
        onClick={() => setIsOpen(true)} 
        variant="outline" 
        className="flex items-center gap-2 bg-white"
      >
        <QrCode className="w-5 h-5" />
        <span>Scan QR Code</span>
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Scan Retailer QR Code</DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <QrReader
              scanDelay={300}
              constraints={{ facingMode: 'environment' }}
              onResult={handleScan}
              containerStyle={{ width: '100%', height: '100%' }}
              videoContainerStyle={{ width: '100%', height: '100%' }}
              videoStyle={{ width: '100%', height: '100%' }}
            />
          </div>
          <div className="flex justify-center mt-4">
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default QRScanner;
