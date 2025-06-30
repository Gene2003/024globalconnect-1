import React, { useState } from 'react';

const MpesaPaymentButton = () => {
  const [amount, setAmount] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // Phone number validation
  const validatePhone = (phoneNumber) => {
    const kenyanPhoneRegex = /^(254|0)[17]\d{8}$/;
    return kenyanPhoneRegex.test(phoneNumber.replace(/\s+/g, ''));
  };

  // Format phone number to international format
  const formatPhone = (phoneNumber) => {
    const cleaned = phoneNumber.replace(/\s+/g, '').replace(/^\+/, '');
    if (cleaned.startsWith('0')) {
      return '254' + cleaned.slice(1);
    }
    if (cleaned.startsWith('254')) {
      return cleaned;
    }
    return '254' + cleaned;
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(phone)) {
      newErrors.phone = 'Please enter a valid Kenyan phone number';
    }
    
    if (!amount.trim()) {
      newErrors.amount = 'Amount is required';
    } else if (parseFloat(amount) < 1) {
      newErrors.amount = 'Amount must be at least KES 1';
    } else if (parseFloat(amount) > 150000) {
      newErrors.amount = 'Amount cannot exceed KES 150,000';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleMpesaPayment = async () => {
    if (!validateForm()) return;
    
    setLoading(true);
    try {
      const formattedPhone = formatPhone(phone);
      
      // Using fetch instead of axios for the API call
      const response = await fetch('http://localhost:8000/api/mpesa/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone: formattedPhone,
          amount: parseFloat(amount),
        }),
      });
      
      const data = await response.json();
      
      if (response.ok && data.success) {
        alert('M-PESA payment request sent successfully! Please check your phone for the payment prompt.');
        // Reset form on success
        setPhone('');
        setAmount('');
      } else {
        alert('Payment request failed: ' + (data.message || 'Unknown error'));
      }
    } catch (error) {
      console.error('M-PESA Error:', error);
      alert('Payment failed. Please check your internet connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-bold text-green-600 mb-4 flex items-center">
        <span className="mr-2">📱</span>
        M-PESA Payment
      </h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="e.g., 0712345678 or 254712345678"
            value={phone}
            onChange={e => {
              setPhone(e.target.value);
              if (errors.phone) setErrors(prev => ({ ...prev, phone: '' }));
            }}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            }`}
            disabled={loading}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Amount (KES)
          </label>
          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={e => {
              setAmount(e.target.value);
              if (errors.amount) setErrors(prev => ({ ...prev, amount: '' }));
            }}
            min="1"
            max="150000"
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${
              errors.amount ? 'border-red-500' : 'border-gray-300'
            }`}
            disabled={loading}
          />
          {errors.amount && (
            <p className="text-red-500 text-sm mt-1">{errors.amount}</p>
          )}
        </div>

        <button
          onClick={handleMpesaPayment}
          disabled={loading || !phone.trim() || !amount.trim()}
          className={`w-full py-3 px-4 rounded-md font-medium transition-colors ${
            loading || !phone.trim() || !amount.trim()
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-green-600 text-white hover:bg-green-700 active:bg-green-800'
          }`}
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </span>
          ) : (
            'Pay with M-PESA'
          )}
        </button>
      </div>

      <div className="mt-4 text-xs text-gray-500">
        <p>• You will receive an M-PESA prompt on your phone</p>
        <p>• Enter your M-PESA PIN to complete the payment</p>
        <p>• Transaction limit: KES 1 - 150,000</p>
      </div>
    </div>
  );
};

export default MpesaPaymentButton;