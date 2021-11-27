export interface Post {
	postId?: number;
	postContent: string;
	postDate: Date;
	feedId?: number;
	imageUrl: string;
	usersId?: number;
	type: string;
  }