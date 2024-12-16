import React from "react";
import PropTypes from "prop-types";
import LoginInput from "../component/LoginInput";
import { Link } from "react-router-dom";
import {login} from '../utils/api';



const LoginPage = ({loginSuccess}) =>{

    const onLogin = async ({email, password}) =>{
        const {error, data} = await login({email, password});

        if(!error) {
            loginSuccess(data);
        }
    }

    return (
        <section className="login-page">
            <h2>Please login to your acount</h2>
            <LoginInput login={onLogin}/>
            <p>Dont have acount? <Link to='/register'>Create Acount</Link>
            </p>
        </section>
    );
}

LoginPage.propTypes = {
    loginSuccess : PropTypes.func.isRequired,
}


export default LoginPage;