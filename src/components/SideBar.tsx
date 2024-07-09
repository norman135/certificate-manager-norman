import React from "react";
import { MainTitle } from "./MainTitle";
import { SideNav } from "./SideNav";

const SideBar = () => {
    return (
        <div className="side-bar">
            <MainTitle/>
            <SideNav/>
        </div>
    )
}

export {SideBar};