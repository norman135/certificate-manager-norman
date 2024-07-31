import { ChangeEvent, FC, useState } from 'react';
import Button from '../../../../common/components/button/Button';
import './CommentSection.css';
import UserComment from '../../../../common/models/comment.model';
import User from '../../../../common/models/user.model';

interface CommentSectionProps {
	comments: UserComment[];
	user: User;
	addComment: (comment: UserComment) => void;
}

const CommentSection: FC<CommentSectionProps> = ({
	comments,
	user,
	addComment,
}) => {
	const [isNewComment, setIsNewComment] = useState<boolean>(false);
	const [newComment, setNewComment] = useState<UserComment>({
		user: user,
		comment: '',
	});

	const openNewComment = () => {
		if (!validateUser()) {
			return;
		}
		setIsNewComment(true);
	};

	const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setNewComment({
			user: user,
			comment: e.target.value,
		});
	};

	const handleSend = () => {
		if (!validateComment) {
			return;
		}
		addComment(newComment);
		setIsNewComment(false);
	};

	const validateUser = (): boolean => {
		if (!user.id) {
			alert('Please select a valid user!');
			return false;
		}
		return true;
	};

	const validateComment = (): boolean => {
		if (!newComment.comment) {
			alert('Please add a comment!');
			return false;
		}
		return true;
	};

	return (
		<div className="comment-section">
			<div className="comment-section-button">
				<Button
					color="white"
					bg="#3f9ac9"
					type="button"
					onClick={openNewComment}
					name="New Comment"
				/>
			</div>
			<div className="comments-list">
				{comments?.map((comment) => (
					<div className="comment">
						<div className="comment-user">
							<span>User:</span> {comment.user.name}
						</div>
						<div className="comment-text">
							<span>Comment:</span> {comment.comment}
						</div>
					</div>
				))}
			</div>
			{isNewComment ? (
				<div className="comment-input-section">
					<label className="comment-label">{user.name} *</label>
					<textarea
						placeholder="Comment"
						onChange={handleChange}
					/>
					<Button
						color="white"
						bg="#9f1924"
						type="button"
						onClick={handleSend}
						name="Send"
					/>
				</div>
			) : null}
		</div>
	);
};

export default CommentSection;
