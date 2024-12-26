import React, {useState, useMemo} from "react";
import Navigation from "./Navigation";
import Community from "../pages/Community";
import Home from "../pages/Home";
import Guide from "../pages/Guide";
import { Routes, Route } from "react-router-dom";
import LocaleContext from "../contexts/LocaleContext";

const App = () => {

    const [locale, setLocale] = useState('id');

    const toggleLocale = ()=> {
        setLocale((prevLocale) => {
            return prevLocale === 'id' ? 'en' : 'id';
        });
    }

    const localeContextValue = useMemo(()=> {
        return {
            locale,
            toggleLocale
        };
    }, [locale]);





    return(
        <>
        <LocaleContext.Provider value={localeContextValue}>
            
        <header>
        <Navigation/>
        </header>
        <main>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/community" element={<Community/>}/>
        <Route path="/guide" element={<Guide/>}/>
        </Routes>
        </main>

        </LocaleContext.Provider>
        </>
    );
}

export default App;