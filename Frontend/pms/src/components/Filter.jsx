import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dropdown from "./Dropdown";
import CheckBox from "./CheckBox";
import { Label } from "@headlessui/react/dist/components/label/label";
export default function Filter({itemsToFilter}){
    return (
      <>
        <Dropdown>
          <Dropdown.Trigger>
            <button 
              className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium 
              text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200
              hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 
              dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 
              dark:hover:text-white dark:hover:bg-gray-700" 
              type="button">
              <FontAwesomeIcon icon="filter" />
                Filter
              <FontAwesomeIcon icon="chevron-down" />
            </button>
          </Dropdown.Trigger>
          <Dropdown.Content>
            <ul className="space-y-2 text-sm">
              {itemsToFilter.map((itemToFilter, index) => (
                  <li class="flex items-center">
                      <CheckBox />
                      <Label >
             
                      </Label>
                  </li>
              ))}
            </ul>
          </Dropdown.Content>
        </Dropdown>
      </>

    );
}