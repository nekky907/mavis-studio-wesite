import { z } from 'zod';

export const bookingSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  preferred_date: z.string().optional(),
  package_type: z.enum(['half_day', 'full_day', 'custom'], {
    required_error: 'Please select a package',
  }),
  message: z.string().optional(),
  currency: z.enum(['THB', 'CNY', 'SGD']).default('THB'),
});

export type BookingInput = z.infer<typeof bookingSchema>;
