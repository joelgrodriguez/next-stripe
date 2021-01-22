import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51IC8yJFKBrHiW0975qJM9AWJbGzk90lk72rbbMGqhH4clF5LHk0QUlapCbe9dCMi4kNBxvN9DZvAuPVfKjaPVqQ400ssyMhJkJ');

export async function initiateCheckout({ lineItems } = {}) {
  const stripe = await stripePromise;

  await stripe.redirectToCheckout({
    mode: 'payment',
    lineItems,
    successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
    cancelUrl: window.location.origin,
  });
}
