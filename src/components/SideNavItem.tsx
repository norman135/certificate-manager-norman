import React from "react";
import { SvgIcon } from "./SvgIcon";

type subMenuItem = {
    text: string;
}

const SideNavItem = (props: {svgIconPath:string, svgVB:string, itemName:string, subMenu:subMenuItem[], selected:boolean}) => {
    const {svgIconPath, svgVB, itemName, subMenu, selected} = props;
    return (
        <div className={selected ? "side-nav-item sni-selected" : "side-nav-item"}>
            <div className="side-nav-item-desc">
                <SvgIcon path={svgIconPath} viewBox={svgVB} expand={false}/>
                <p className="side-nav-item-text">{itemName}</p>
                {subMenu.length !== 0 ? (
                    <SvgIcon
                        path="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                        viewBox="0 0 448 512"
                        expand={true}
                    />
                ) : null}
            </div>
            {subMenu.length !== 0 ? (
                <div className="sub-menu">
                    {subMenu.map((subMenuItem, index) => (
                            <div key={index} className="sub-menu-item">{subMenuItem.text}</div>
                        ) 
                    )}
                </div>
            ) : null}
        </div>
    )
}

export {SideNavItem, subMenuItem};