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
}