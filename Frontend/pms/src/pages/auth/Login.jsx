import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Label from "../../components/Label";
import TextInput from "../../components/TextInput";
import PrimaryButton from '../../components/PrimaryButton';

export default function Login(){
    return (
        <>
            <h1 className='text-center text-lg text-slate-700 underline font-bold'>SIGN IN</h1>
            <form action="">
                <div className='mt-4'>
                    <Label
                    htmlFor="email"
                    value='Email' 
                    />
                    <TextInput
                    type='email'
                    className='mt-1 p-1 block w-full'
                    />
                </div>
                <div className='mt-4'>
                    <Label
                    htmlFor="password"
                    value='Password' 
                    />
                    <TextInput
                    type='password'
                    className='mt-1 p-1 block w-full'
                    />
                </div>
                <div className='flex flex-col items-center justify-center mt-4'>
                    <Link 
                    to='forgot-password'
                    className='underline text-md text-slate-700 hover:text-slate-800'
                    >
                        Forgot Password?
                    </Link>
                    <div className="mt-4">
                        <PrimaryButton
                        type='submit'
                        >
                            LOGIN
                        </PrimaryButton>
                    </div>
                </div>
            </form>
        </>

    );
}