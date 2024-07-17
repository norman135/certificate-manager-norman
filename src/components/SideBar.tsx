import React, { useState } from "react";

type menuItem = {
    svgIconPath: string,
    svgVB: string,
    itemName: string,
    content: React.ReactNode,
    subMenu: subMenuItem[],
    selected: boolean
};

type subMenuItem = {
    text: string,
    content: React.ReactNode
};

const SvgIcon = (props: {path:string, viewBox:string}) => {
    const { path, viewBox} = props;
    
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox={viewBox}>
            <path d={path}/>
        </svg>
    );
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
};

const SideNav = (props: {setVisibleContent:any}) => {
    const {setVisibleContent} = props;

    const emptySubMenu: subMenuItem[] = [];

    const machineLearningSubMenu: subMenuItem[] = [
        {
            text: "Example 1",
            content: (
                <h1>Example 1</h1>
            )
        },
        {
            text: "Example 2",
            content: (
                <h1>Example 2</h1>
            )
        },
        {
            text: "Example 3",
            content: (
                <h1>Example 3</h1>
            )
        }
    ];

    const [selectedItem, setSelectedItem] = useState(0);

    const handleClick = (index:number, content:React.ReactNode) => {
        setSelectedItem(index);
        setVisibleContent(content);
    };

    const handleSubItemClick = (content:React.ReactNode) => {
        setVisibleContent(content);
    };

    const menuItems: menuItem[] = [
        {
            svgIconPath: "M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z",
            svgVB: "0 0 576 512",
            itemName: "Start",
            content: (
                <h1>Start</h1>
            ),
            subMenu: emptySubMenu,
            selected: false
        },
        {
            svgIconPath: "M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z",
            svgVB: "0 0 448 512",
            itemName: "Machine Learning",
            content: <h1>Machine Learning</h1>,
            subMenu: machineLearningSubMenu,
            selected: false
        }
    ];

    return (
        <div className="side-nav">
            {
                menuItems.map((menuItem, index) => 
                    (
                        <div key={index}>
                            <SideNavItem
                                svgIconPath={menuItem.svgIconPath}
                                svgVB={menuItem.svgVB}
                                itemName={menuItem.itemName}
                                subMenu={menuItem.subMenu}
                                selected={selectedItem === index}
                                index={index}
                                onclick={() => {handleClick(index, menuItem.content)}}
                                onsubclick={handleSubItemClick}
                            />
                        </div>
                    )
                )
            }
        </div>
    );
};

const MainTitle = () => {
    return (
        <div className="main-title">
            <h1>DCCS Tuzla</h1>
        </div>
    );
};

const SideBar = (props: {setVisibleContent:any}) => {
    const {setVisibleContent} = props;

    return (
        <div className="side-bar">
            <MainTitle/>
            <SideNav setVisibleContent={setVisibleContent}/>
        </div>
    );
};

export default SideBar;
