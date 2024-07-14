import React from "react";
import SvgIcon from "./SvgIcon";

type subMenuItem = {
    text: string,
    content: React.ReactNode
};

const ExpandIcon = (props: {selected:boolean}) => {
    const {selected} = props;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 448 512" className={selected ? "expand-icon expand-icon-selected" : "expand-icon"}>
            <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
        </svg>
    )
};

const SideNavItem = (props: {svgIconPath:string, svgVB:string, itemName:string, subMenu:subMenuItem[], selected:boolean, index:number, onclick:any, onsubclick:any}) => {
    const {svgIconPath, svgVB, itemName, subMenu, selected, index, onclick, onsubclick} = props;

    return (
        <div key={index} className="side-nav-item" onClick={() => onclick(index)}>
            <div className={selected ? "side-nav-item-desc sni-selected" : "side-nav-item-desc"}>
                <SvgIcon path={svgIconPath} viewBox={svgVB}/>
                <p className="side-nav-item-text">{itemName}</p>
                {subMenu.length !== 0 ? (
                    <ExpandIcon
                        selected={selected}
                    />
                ) : null}
            </div>
            {subMenu.length !== 0 && selected ? (
                <div className="sub-menu">
                    {subMenu.map((subMenuItem, index) => (
                            <div
                                key={index}
                                className="sub-menu-item"
                                onClick={(e) => {e.stopPropagation(); onsubclick(subMenuItem.content)}}
                            >{subMenuItem.text}</div>
                        ) 
                    )}
                </div>
            ) : null}
        </div>
    );
}

export {SideNavItem, subMenuItem};
