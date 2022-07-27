export interface IAvatar {
    name: string;
    avatarUrl: string;
    role: string;
}

export interface IPost {
    avatar: IAvatar;
    content: {
        type: string;
        content: string;
    }[],
    published_at: Date;
}