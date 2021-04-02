import React, { useState } from 'react';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleChangeEmail = e => setEmail(e.target.value);
    const handleChangePassword = e => setPassword(e.target.value);
    const handleSubmit = e => {
        const formData = { email, password };
        // Submit data to sign in
    };
    return (
        <div className="sign_in_wrapper">
            <h1>Sign in</h1>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleChangeEmail}
                    type="email"
                    name="email_sign_in"
                    id="email_sign_in"
                    placeholder="Email"
                    required
                />
                <input
                    onChange={handleChangePassword}
                    type="password"
                    name="password_sign_in"
                    id="password_sign_in"
                    placeholder="Password"
                    required
                />
                <button>Enter</button>
            </form>
        </div>
    );
};

export default SignIn;