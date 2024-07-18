import React from 'react';

interface MainProps {
	content: JSX.Element;
}

const Main: React.FC<MainProps> = ({ content }): JSX.Element => {
	return (
		<main className="main-content">
			<div className="main-top-bar" />
			<div className="content-container">{content}</div>
		</main>
	);
};

export default Main;
