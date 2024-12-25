import PropTypes from "prop-types";

const Row = ({label, children}) => {

    return(
        <div className="row">
            <label>{label}</label>
            <div className="ro__content">{children}</div>
        </div>
    );
}

Row.propTypes = {
    label : PropTypes.string.isRequired
};


export default Row;