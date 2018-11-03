// Shaded Models
import { User } from '@shared/models';

export interface Comment {
    user: User;
    text: string;
    date: Date;
}
