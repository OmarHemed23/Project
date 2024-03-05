import React from 'react';
import Label from '../../components/Label';
import TextInput from '../../components/TextInput';
import PrimaryButton from '../../components/PrimaryButton';

export default function ForgotPassword(){
    return(
        <>
            <h1 className='text-center text-lg text-slate-700 underline'>CHANGE PASSWORD</h1>
            <form action="">
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
                <div className='mt-4'>
                    <Label
                    htmlFor="new-password"
                    value='New Password' 
                    />
                    <TextInput
                    type='password'
                    className='mt-1 p-1 block w-full'
                    />
                </div>
                <div className='mt-4'>
                    <Label
                    htmlFor="confirm-password"
                    value='Confirm Password' 
                    />
                    <TextInput
                    type='password'
                    className='mt-1 p-1 block w-full'
                    />
                </div>
                <div className='flex flex-col items-center justify-center mt-4'>
                    <div className="mt-4">
                        <PrimaryButton
                        type='submit'
                        >
                            SUBMIT
                        </PrimaryButton>
                    </div>
                </div>
            </form>
        </>
    );
}