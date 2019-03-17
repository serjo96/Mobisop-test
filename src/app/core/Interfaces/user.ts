export interface User {
    accepted_tos: boolean;
    bio: string;
    first_name: string;
    id: string;
    instagram_username: string;
    last_name: string;
    links: {
        followers: string;
        following: string;
        html: string;
        likes: string;
        photos: string;
        portfolio: string;
        self: string;
    };
    location: string;
    name: string;
    portfolio_url: string;
    profile_image: {
        large: string;
        medium: string;
        small: string;
    };
    total_collections: number;
    total_likes: number;
    total_photos: number;
    twitter_username: number;
    updated_at: string;
    username: string;
}
