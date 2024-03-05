export default function PrimaryButton({type='button', className='', children, ...props }){
    return (
        <>
        <button
            {...props}
            type={type}
            className={'text-white bg-gray-700 hover:bg-slate-800 shadow-md focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 ' 
            + className}
        >
            {children}

        </button>
        </>

    );
}