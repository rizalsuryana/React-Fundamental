import React from "react";
import { Link, useNavigate } from "react-router-dom";
import RegisterInput from "../component/RegisterInput";
import { register } from "../utils/api";


const RegisterPage = () => {
    const navigate = useNavigate();

    const onRegisterHandler = async (user) => {
       const {error} = await register(user);
       if(!error) {
        navigate('/');
       }
    }

    return (
        <section className="register-page">
            <h2>Please Register Your Acount First</h2>
            <RegisterInput register={onRegisterHandler}/>
            <p>Back to <Link to='/'>Login</Link></p>
        </section>
    )
}


export default RegisterPage;