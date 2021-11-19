export interface Post {
  postId?: number;
  postContent: string;
  postDate: Date;
  threadId: number;
  userId: number;
  imageUrl: string;
  usersId?: number;
}
