import React from "react";
import { addContact } from "../utils/api";
import ContactInput from "../component/ContactInput";
import { useNavigate } from "react-router-dom";

const AddPage = () =>{

    const navigate = useNavigate();

    const onAddContactHandler = async (contact) =>{
        await addContact(contact);
        navigate('/');
    }


    return(
        <section>
            <h2>Add Contact</h2>
            <ContactInput addContact={onAddContactHandler}/>
        </section>
    )
}

export default AddPage;