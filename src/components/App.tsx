import React, { useState } from "react";
import { SideBar } from "./SideBar";
import { Main } from "./Main";


const App = () => {
    const [visibleContent, setVisibleContent] = useState(<h1>Start</h1>);

    return (
        <div className="main-container">
            <SideBar setVisibleContent={setVisibleContent}/>
            <Main
                content={visibleContent}
            />
        </div>
    )
}

export {App};