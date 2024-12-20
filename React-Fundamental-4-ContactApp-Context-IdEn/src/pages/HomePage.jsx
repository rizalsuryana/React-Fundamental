import React from "react";
import ContactList from "../component/ContactList";
import SearchBar from "../component/SearchBar";
import { useSearchParams } from "react-router-dom";
import { deleteContact, getContacts } from "../utils/api";
import { LocaleConsumer } from "../contexts/LocaleContext";


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
            contacts: [],
            keyword: props.defaultKeyword || '',
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    }

    async componentDidMount () {
        const {data} = await getContacts();

        this.setState(()=>{
            return {
                contacts: data
            }
        })
    }

   async onDeleteHandler(id) {
       await deleteContact(id);

        // update contact state from data.js
        const {data} = await getContacts();
        this.setState(()=>{
            return {
                contact: data,
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
            <LocaleConsumer>
                {
                    ({locale}) => {
                        return(
            <section>
                <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler}/>
                <h2> {locale === 'id' ? 'Daftar Kontak' : 'Contacts List'} </h2>
                <ContactList contacts={contacts} onDelete={this.onDeleteHandler}/>
            </section>

                        )
                    }
                }
            </LocaleConsumer>
        )
    }
}


// export default HomePage;
export default HomePageWrapper;