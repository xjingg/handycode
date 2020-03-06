import React from 'react';
import useInputState from './useInputState';

export default function Form(){
    const [email, updateEmail, resetEmail] = useInputState('');
    const [password, updatePassword, resetPassword] = useInputState('');
    return(
        <div>
        <h1>Email is:{email}</h1>
        <h1>Password is: {password}</h1>
        <input type='text' value={email} onChange={updateEmail} />
        <input type='text' value={password} onChange={updatePassword} />
        <button onClick={resetEmail}>reset Email</button>
        <button onClick = {resetPassword}>reset password</button>
        </div>
    )
}