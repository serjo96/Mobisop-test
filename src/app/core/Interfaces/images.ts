import {User} from './user';

export interface Images {
    alt_description: number;
    categories: Array<any>;
    color: string;
    created_at: string;
    current_user_collections: Array<any>;
    width: number;
    height:  number;
    id: string;
    liked_by_user: boolean;
    likes:  number;
    description: string;
    sponsored: boolean;
    sponsored_by: number;
    sponsored_impressions_id: number;
    updated_at: string;
    readonly urls: {
        raw: string;
        full: string;
        regular: string;
        small: string;
        thumb: string;
    };
    user: User;

}
