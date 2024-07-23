import { FC } from "react";
import './DropDown.css';

export type DropDownItem = {
    name: string,
    action: () => void
}

interface DropDownProps {
    items: DropDownItem[]
}


const DropDown: FC <DropDownProps> = ({ items }): JSX.Element => {
    return (
        <div
        className="dropdown"
        >
            {
                items.map(item => (
                    <div
                        className="dropdown-item"
                        onClick={() => item.action()}
                    >{item.name}</div>
                ))
            }
        </div>
    )
}

export default DropDown;
