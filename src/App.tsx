import React, { FC, useState } from "react"
import SideBar from "./components/SideBar"
import Main from "./components/Main"


const App: FC = (): JSX.Element => {
    const [visibleContent, setVisibleContent] = useState<JSX.Element>(<h1>Start</h1>);

    return (
        <div className="main-container">
            <SideBar setVisibleContent={setVisibleContent}/>
            <Main
                content={visibleContent}
            />
        </div>
    );
}

export default App;
