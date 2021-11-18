export interface Post {
  postId?: number;
  postContent: string;
  userId: number;
  postDate: Date;
  threadId: number;
  imageUrl: string;
}
