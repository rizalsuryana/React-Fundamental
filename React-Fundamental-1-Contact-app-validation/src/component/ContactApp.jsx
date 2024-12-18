import React from "react";
import ContactList from "./ContactList";
import { getData } from "../utils/data";
import ContactInput from "./ContactInput";

// const ContactApp = () => {
//     const contacts = getData();

//     return(
//         <div className="contact-app">
//             <h1>Daftar Kontak</h1>
//             <ContactList contacts={contacts}/>

//         </div>
//     );
// }


// export default ContactApp;


class ContactApp extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            contacts: getData(),
        }
        // menambahkan fungsi / fitur delete
        this.onDeletehandler = this.onDeletehandler.bind(this);
        // Add contact
        this.onAddContactHandler = this.onAddContactHandler.bind(this);
    }
    onDeletehandler(id) {
        const contacts = this.state.contacts.filter(contact => contact.id !== id);
        this.setState({contacts});
    }

    onAddContactHandler({name, tag}) {
        this.setState((prevState)=> {
            return {
                contacts: [
                    ...prevState.contacts,
                    {
                        id: +new Date(),
                        name,
                        tag,
                        imageUrl: '/images/default.png',
                    }
                ]
            }
        });
    }

    render() {
        return(
            <div className="contact-app">
                <h1>Contacts List</h1>
                <h2>Add New Contact</h2>
                <ContactInput addContact={this.onAddContactHandler} />
                <ContactList contacts={this.state.contacts} onDelete={this.onDeletehandler}/>

            </div>
        );
    }
}

export default ContactApp;