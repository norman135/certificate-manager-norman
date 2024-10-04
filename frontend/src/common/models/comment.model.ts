import User from './user.model';

type UserComment = {
	userName: string;
	comment: string;
};

export type PostComment = {
	userHandle: string;
	commentText: string;
};

export default UserComment;
