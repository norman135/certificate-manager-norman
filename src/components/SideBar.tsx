import React from "react";
import MainTitle from "./MainTitle";
import SideNav from "./SideNav";

const SideBar = (props: {setVisibleContent:any}) => {
    const {setVisibleContent} = props;

    return (
        <div className="side-bar">
            <MainTitle/>
            <SideNav setVisibleContent={setVisibleContent}/>
        </div>
    );
}

export default SideBar;
