import React, { useState } from 'react';
import Dropdown from './Dropdown';
import PrimaryButton from './PrimaryButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CheckBox from './CheckBox';
import Label from './Label';

const FilterDropdown = ({ items }) => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleCheckboxChange = (value) => {
    if (selectedFilters.includes(value)) {
      setSelectedFilters(selectedFilters.filter(item => item !== value));
    } else {
      setSelectedFilters([...selectedFilters, value]);
    }
  };

  return (
    <Dropdown>
      <Dropdown.Trigger>
        <PrimaryButton>
          <FontAwesomeIcon icon="filter" className="mr-2 text-gray-400" />
          Filter
          <FontAwesomeIcon icon="chevron-down" className="-mr-1 ml-1.5" />
        </PrimaryButton>
      </Dropdown.Trigger>
      <Dropdown.Content>
        <div className="z-10 w-48 p-3 bg-white rounded-lg shadow dark:bg-gray-700">
          <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">Choose brand</h6>
          <ul className="space-y-2 text-sm" aria-labelledby="filterDropdownButton">
            {items.map((item, index) => (
              <li key={index} className="flex items-center">
                <CheckBox
                  id={item.id}
                  checked={selectedFilters.includes(item.id)}
                  onChange={() => handleCheckboxChange(item.id)}
                />
                <Label htmlFor={item.id} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                  {item.name} ({item.count})
                </Label>
              </li>
            ))}
          </ul>
        </div>
      </Dropdown.Content>
    </Dropdown>
  );
};

export default FilterDropdown;

