import Stripe from 'stripe';
import { ENV } from './env.js';

const stripe = new Stripe(ENV.STRIPE_SECRET_KEY);

export default stripe;
