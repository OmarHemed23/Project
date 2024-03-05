import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

export default function Header({ className = '', tabs = [], activeTab, onTabChange, children }) {
    return (
        <div className={'flex w-full rounded-lg' + className}>
            <div className="flex bg-white mb-4 border-b border-gray-200 dark:border-gray-700 justify-between w-full">
                <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" role="tablist">
                    {tabs.map((tab, index) => (
                        <li key={index} className="me-2" role="presentation">
                            <button
                                className={`inline-block p-4 border-b-2 rounded-t-lg ${
                                    activeTab === tab.id ? 'text-purple-600 hover:text-purple-600 dark:text-purple-500 dark:hover:text-purple-500 border-purple-600 dark:border-purple-500' : 'text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300'
                                }`}
                                id={`styled-${tab.id}-tab`}
                                onClick={() => onTabChange(tab.id)}
                                type="button"
                                role="tab"
                                aria-controls={`styled-${tab.id}`}
                                aria-selected={activeTab === tab.id ? 'true' : 'false'}
                            >
                                {tab.label}
                            </button>
                        </li>
                    ))}
                </ul>
                {/* Place it on the far right-hand side */}
                {children && (
                    <div className="flex items-center mr-10">
                        {children}
                    </div>
                )}
            </div>
        </div>
    );
}
