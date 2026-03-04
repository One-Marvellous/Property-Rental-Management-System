import Stripe from 'stripe';
import { ENV } from './env.js';
import logger from './logger.js';

let stripe = null;

if (ENV.STRIPE_SECRET_KEY) {
  stripe = new Stripe(ENV.STRIPE_SECRET_KEY);
  logger.info('Stripe payment service configured', { status: 'ready' });
} else {
  logger.warn(
    'Stripe not configured – set STRIPE_SECRET_KEY in .env to enable payments'
  );
}

export default stripe;
