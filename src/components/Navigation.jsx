import React, {useContext} from "react";
import { Link } from "react-router-dom";
import LocaleContext from "../contexts/LocaleContext";

/**
 * @notes
 * Manfaatkan tombol pada komponen ini untuk mengubah nilai context
 */


const Navigation = () => {
    const {locale, toggleLocale} = useContext(LocaleContext);
    return(
        <nav>
            <ul>

                <li>
                    <Link to='/'>{locale === 'en' ? 'Home' : 'Beranda'}</Link>
                </li>

                <li>
                    <Link to='/guide'>{locale === 'id' ? 'Panduan' : 'Guide'}</Link>
                </li>

                <li>
                    <Link to='/community'>{locale === 'en' ? 'Community' : 'Komunitas'}</Link>
                </li>

            </ul>

            <button onClick={toggleLocale}>{locale === 'id' ? 'English' : 'Indonesia'}</button>
        </nav>
    );
}



export default Navigation;