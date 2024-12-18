import React from "react";
import { addContact } from "../utils/api";
import PropTypes from "prop-types";

class ContactInput extends React.Component {
    constructor(props) {
        super(props);

        // inisialisasi state

        this.state = {
            name: '',
            tag: '',
        }

        this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
        this.onTagChangeEventHandler = this.onTagChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }


    onNameChangeEventHandler(evet) {
        this.setState(()=> {
            return{
                name : evet.target.value,
            }
        });
    }


    onTagChangeEventHandler(event) {
        this.setState(()=> {
            return{
                tag: event.target.value,
            }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addContact(this.state);
    }

    render(){
        return(
            <form className="contact-input" onSubmit={this.onSubmitEventHandler}>
                <input type="text" placeholder="Name    :" value={this.state.name} onChange={this.onNameChangeEventHandler}/>
                <input type="text" placeholder="Tag     :" value={this.state.tag} onChange={this.onTagChangeEventHandler}/>
                <button type="submit">Add</button>

            </form>
        )
    }
}

ContactInput.propTypes = {
    addContact  : PropTypes.func.isRequired,
}

export default ContactInput;