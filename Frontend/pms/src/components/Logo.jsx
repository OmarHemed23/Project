import logo from '../images/logo.png';

export default function Logo({className=''}){
    return (
        <>
            <img src={logo} alt="PMS Logo" className={'' + className}/>
        </>
    );
}