import UserComment from '../../models/comment.model';
import { CommentDTO, CommentPostDTO } from '../../models/dtos/comment-dto';

export class CommentMapper {
	static ToModel(commentDTO: CommentDTO): UserComment {
		const comment: UserComment = {
			userName: commentDTO.userName,
			comment: commentDTO.comment,
		};

		return comment;
	}

	static ToDTO(comment: UserComment, userId: string): CommentPostDTO {
		const commentPostDTO: CommentPostDTO = {
			userHandle: userId,
			commentText: comment.comment,
		};

		return commentPostDTO;
	}
}
