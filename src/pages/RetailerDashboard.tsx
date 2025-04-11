
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Download, LogOut } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const RetailerDashboard = () => {
  // Mock data for the dashboard
  const retailerId = "088b4aed-a232-49eb-90ed-d7f88b992f55";
  const stats = {
    totalSales: "₹24,350.00",
    noofcustomers: "2",
    transactions: 12
  };

  const transactions = [
    { id: 1, user: "asura", amount: "₹1000.00", finalAmount: "₹900.00", date: "11/04/2025", status: "completed" },
    { id: 2, user: "asura", amount: "₹100.00", finalAmount: "₹90.00", date: "10/04/2025", status: "completed" },
    { id: 3, user: "asura", amount: "₹99.00", finalAmount: "₹89.10", date: "09/04/2025", status: "completed" },
    { id: 4, user: "asura", amount: "₹150.00", finalAmount: "₹135.00", date: "09/04/2025", status: "completed" },
    { id: 5, user: "name", amount: "₹100.00", finalAmount: "₹90.00", date: "08/04/2025", status: "completed" },
    { id: 6, user: "name", amount: "₹100.00", finalAmount: "₹90.00", date: "08/04/2025", status: "completed" },
    { id: 7, user: "name", amount: "₹100.00", finalAmount: "₹90.00", date: "08/04/2025", status: "completed" },
    { id: 8, user: "name", amount: "₹100.00", finalAmount: "₹90.00", date: "08/04/2025", status: "completed" },
    { id: 9, user: "asura", amount: "₹100.00", finalAmount: "₹90.00", date: "07/04/2025", status: "completed" },
    { id: 10, user: "asura", amount: "₹500.00", finalAmount: "₹450.00", date: "07/04/2025", status: "completed" },
    { id: 11, user: "asura", amount: "₹100.00", finalAmount: "₹90.00", date: "07/04/2025", status: "completed" },
    { id: 12, user: "name", amount: "₹100.00", finalAmount: "₹90.00", date: "12/04/2025", status: "completed" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
            <p className="text-gray-600 mb-6">Welcome, Admin kaiki!</p>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="text-blue-700 font-medium mb-2">Total Sales</h3>
                <p className="text-2xl font-bold">{stats.totalSales}</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <h3 className="text-green-700 font-medium mb-2">No of customers</h3>
                <p className="text-2xl font-bold">{stats.noofcustomers}</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="text-purple-700 font-medium mb-2">Transactions</h3>
                <p className="text-2xl font-bold">{stats.transactions}</p>
              </div>
            </div>
            
            {/* QR Code Section */}
            <div className="border border-gray-200 rounded-lg p-6 mb-8">
              <h2 className="text-lg font-semibold mb-4">Your QR Code</h2>
              
              <div className="flex flex-col items-center mb-4">
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=RetailBoostID:088b4aed-a232-49eb-90ed-d7f88b992f55" 
                  alt="Retailer QR Code" 
                  className="w-48 h-48 mb-4"
                />
                <p className="text-sm text-gray-500 mb-2">Admin ID: {retailerId}</p>
                <Button className="bg-purple-600 hover:bg-purple-700">
                  <Download className="mr-2 h-4 w-4" />
                  Download QR as PDF
                </Button>
              </div>
              
              <p className="text-sm text-gray-500 text-center mt-4">
                Users will scan this code to make purchases
              </p>
            </div>
            
            {/* Transaction History */}
            <div className="border border-gray-200 rounded-lg p-6">
              <h2 className="text-lg font-semibold mb-4">Transaction History</h2>
              
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Final Amount</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {transactions.map((tx) => (
                      <TableRow key={tx.id}>
                        <TableCell>{tx.user}</TableCell>
                        <TableCell>{tx.amount}</TableCell>
                        <TableCell>{tx.finalAmount}</TableCell>
                        <TableCell>{tx.date}</TableCell>
                        <TableCell>
                          <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                            {tx.status}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              
              <div className="mt-6">
                <Button variant="destructive" className="flex items-center">
                  <LogOut className="mr-2 h-4 w-4" />
                  LogOUT
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RetailerDashboard;
