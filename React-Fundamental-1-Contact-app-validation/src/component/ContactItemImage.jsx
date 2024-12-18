import PropTypes from "prop-types";

const ContactItemImage = ({imageUrl}) => {
    return (
        <div className="contact-item__image">
            <img src={imageUrl} alt="Contact Avatar"/>
        </div>
    );
}

ContactItemImage.propTypes = {
    imageUrl    : PropTypes.string.isRequired
};

export default ContactItemImage;