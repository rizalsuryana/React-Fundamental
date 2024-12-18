import React from "react";
import ContactItem from "./ContactItem";
import PropTypes from "prop-types";

const ContanctItemBody = ({name, tag}) => {
    return (
        <div className="contact-item__Body">
            <h3 className="contact-item__title">{name}</h3>
            <p className="contact-item__username">@{tag}</p>
        </div>
    );
}

ContanctItemBody.propTypes = {
    name    : PropTypes.string.isRequired,
    tag     : PropTypes.string.isRequired
};

export default ContanctItemBody;