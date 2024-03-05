export default function TextInput({ type = 'text', className = '',...props }){
    return (
        <>
        <input 
            {...props}
            type={type}
            className={'border border-slate-400 bg-transparent focus:ring-2 focus:border focus:border-slate-800 focus:ring-slate-800 rounded-md shadow-sm ' + 
            className}  
        />
        </>
    );
}