import React, { useState } from 'react';
import { connect } from 'react-redux';

const SignIn = props => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleChangeEmail = e => setEmail(e.target.value);
    const handleChangePassword = e => setPassword(e.target.value);
    const handleSubmit = e => {
        // eslint-disable-next-line
        const formData = { email, password };
        // Submit data to sign in
    };
    return (
        <div className="sign_in_wrapper">
            {props.language === 'Spanish' ? (
                <h1>Iniciar sesión</h1>
            ) : (
                <h1>Sign in</h1>
            )}
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleChangeEmail} type="email"
                    name="email_sign_in" id="email_sign_in"
                    placeholder="Email" required
                />
                <input
                    onChange={handleChangePassword} type="password"
                    name="password_sign_in" id="password_sign_in"
                    placeholder={props.language === 'Spanish' ? 'Contraseña' : 'Password'}
                    required
                />
                <button>Enter</button>
            </form>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        language: state.language
    };
};

export default connect(mapStateToProps, null)(SignIn);