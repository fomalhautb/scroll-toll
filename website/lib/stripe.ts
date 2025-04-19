export async function checkPaymentMethods(): Promise<{
  hasValidPaymentMethod: boolean;
  message: string;
}> {
  const response = await fetch('/api/stripe/check-payment-methods');
  
  if (!response.ok) {
    throw new Error('Failed to check payment methods');
  }
  
  return response.json();
} 