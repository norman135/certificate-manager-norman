import React from "react";

const Main = (props: {content: React.ReactNode}) => {
    const { content } = props;

    return (
        <main className="main-content">
            <div className="main-top-bar"></div>
            <div className="content-container">
                {content}
            </div>
        </main>
    )
}

export {Main};