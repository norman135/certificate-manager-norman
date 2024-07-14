import React from "react";

const SvgIcon = (props: {path:string, viewBox:string}) => {
    const { path, viewBox} = props;
    
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox={viewBox}>
            <path d={path}/>
        </svg>
    );
}

export default SvgIcon;
