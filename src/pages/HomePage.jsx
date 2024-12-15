import React from "react";
import ContactList from "../component/ContactList";
import { deleteContact, getContacts } from "../utils/data";
import SearchBar from "../component/SearchBar";
import { useSearchParams } from "react-router-dom";


const HomePageWrapper = () =>{
    const [searchParams, setSearchParams] = useSearchParams();


    const keyword = searchParams.get('keyword');

    const changeSearchParams =(keyword)=>{
        setSearchParams({keyword});
    }

    return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams}/>
}

class HomePage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            contacts: getContacts(),
            keyword: props.defaultKeyword || '',
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    }

    onDeleteHandler(id) {
        deleteContact(id);

        // update contact state from data.js
        this.setState(()=> {
            return{
                contacts: getContacts(),
            }
        });

    }

    onKeywordChangeHandler(keyword) {
        this.setState(()=>{
            return{
                keyword,
            }
        });

        this.props.keywordChange(keyword);
    }

    render () {

        // filter kontak
        const contacts =this.state.contacts.filter((contact)=>{
            return contact.name.toLowerCase().includes(
                this.state.keyword.toLowerCase()
            );
        });




        return(
            <section>
                <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler}/>
                <h2> Contacts List </h2>
                <ContactList contacts={contacts} onDelete={this.onDeleteHandler}/>
            </section>
        )
    }
}


// export default HomePage;
export default HomePageWrapper;