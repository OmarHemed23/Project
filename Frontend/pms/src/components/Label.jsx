export default function Label({value, className='',children, ...props}){
    return (
        <>
            <label 
            {...props}
            className={'block font-medium text-md text-gray-700 dark:text-gray-100' + className}>
                {value ? value : children}
            </label>
        </>
    );
} 