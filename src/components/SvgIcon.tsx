import React from "react";

const SvgIcon = (props: {path:string, viewBox:string, expand:boolean}) => {
    const { path, viewBox, expand } = props;
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox={viewBox} className={expand ? "expand-icon" : ""}>
            <path d={path}/>
        </svg>
    )
}

export {SvgIcon};