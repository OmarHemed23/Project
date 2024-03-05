import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dropdown from "./Dropdown";
import TextInput from "./TextInput"; // Assuming you have a TextInput component

export default function DropdownInput({ value, items }) {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleItemClick = (item) => {
        setSelectedOption(item);
    };

    return (
        <>
        <div className="w-56">
            <Dropdown>
                <Dropdown.Trigger>
                    <div className="flex items-center">
                        <TextInput 
                            type="text"
                            value={selectedOption ? selectedOption.name : value}
                            readOnly
                            className="text-sm px-3 py-1.5"
                        />
                        <FontAwesomeIcon icon="chevron-down" size="2xs" className="w-2.5 h-2.5 text-slate-100 ml-1" />
                    </div>
                </Dropdown.Trigger>
                <Dropdown.Content>
                    {items.map((item, index) => (
                        <Dropdown.Link key={index} onClick={() => handleItemClick(item)}>
                            {item.name}
                        </Dropdown.Link>
                    ))}
                </Dropdown.Content>
            </Dropdown>
        </div>
        </>
    );
}