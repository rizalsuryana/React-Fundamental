import React from "react";
import ContanctItemBody from "./ContactItemBody";
import ContactItemImage from "./ContactItemImage";
import DeleteButton from "./DeleteButton";
import PropTypes from "prop-types";

const ContactItem = ({imageUrl, name, tag, id, onDelete}) => {
    return (
        <div className="contact-item">
            <ContactItemImage imageUrl={imageUrl} />
            <ContanctItemBody name={name} tag={tag} />
            <DeleteButton id={id} onDelete={onDelete}/>
        </div>
    );
}

ContactItem.propTypes = {
    imageUrl    : PropTypes.string.isRequired,
    name        : PropTypes.string.isRequired,
    tag         : PropTypes.string.isRequired,
    id          : PropTypes.number.isRequired,
    onDelete    : PropTypes.func.isRequired,
};


export default ContactItem;