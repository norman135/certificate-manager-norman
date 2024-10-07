import { ChangeEvent, FC, useState } from 'react';
import Button from '../../../../common/components/button/Button';
import './CommentSection.css';
import {
	CommentDTO,
	CreateCommentDTO,
	UserDTO,
} from '../../../../common/contexts/api-client';
import {
	toSelectedLocale,
	useLanguageContext,
} from '../../../../common/contexts/language/Language';

interface CommentSectionProps {
	comments: CommentDTO[];
	user: UserDTO;
	addComment: (comment: CreateCommentDTO) => void;
}

const CommentSection: FC<CommentSectionProps> = ({
	comments,
	user,
	addComment,
}) => {
	const [isNewComment, setIsNewComment] = useState<boolean>(false);
	const [newComment, setNewComment] = useState<CreateCommentDTO>({
		userHandle: user.handle,
		commentText: '',
	});
	const { language } = useLanguageContext();

	const openNewComment = () => {
		if (!validateUser()) {
			return;
		}
		setIsNewComment(true);
	};

	const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setNewComment({
			userHandle: user.handle,
			commentText: e.target.value,
		});
	};

	const handleSend = () => {
		if (!validateComment()) {
			return;
		}
		addComment(newComment);
		setIsNewComment(false);
	};

	const validateUser = (): boolean => {
		if (!user.handle) {
			alert(toSelectedLocale('selectUser', language));
			return false;
		}
		return true;
	};

	const validateComment = (): boolean => {
		if (!newComment.commentText?.trim()) {
			alert(toSelectedLocale('addComment', language));
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
					name={toSelectedLocale('newComment', language)}
				/>
			</div>
			<div className="comments-list">
				{comments?.map((comment, index) => (
					<div
						key={index.toString()}
						className="comment"
					>
						<div className="comment-user">
							<span>{toSelectedLocale('user', language)}:</span>{' '}
							{comment.userName}
						</div>
						<div className="comment-text">
							<span>{toSelectedLocale('comment', language)}:</span>{' '}
							{comment.comment}
						</div>
					</div>
				))}
			</div>
			{isNewComment ? (
				<div className="comment-input-section">
					<label className="comment-label">{user.name} *</label>
					<textarea
						placeholder={toSelectedLocale('comment', language)}
						onChange={handleChange}
					/>
					<Button
						color="white"
						bg="#9f1924"
						type="button"
						onClick={handleSend}
						name={toSelectedLocale('send', language)}
					/>
				</div>
			) : null}
		</div>
	);
};

export default CommentSection;
