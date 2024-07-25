
import * as z from 'zod';

const userSchema = z.object({
    firstname: z.string().min(1, 'Firstname is required'),
    lastname: z.string().min(1, 'Lastname is required'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(1, 'Password is required')
});

export default userSchema;
