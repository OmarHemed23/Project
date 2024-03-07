export default function CheckBox({value="", type="checkbox", className="" , ...props}) {
    return (
        <>
            <input
                {...props}
                type={type} 
                value={value} 
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
        </>
    );
}