import './LanguageSelector.scss';

import { useContext } from 'react';
import {LanguageContext} from '../../contexts/LanguageContext';

import { FormattedMessage as T } from "react-intl";

const LanguageSelector = () => {
    const {locale, changeLanguage} = useContext(LanguageContext);


    return(
        <>
            <p><T id="languageSelector.title" defaultMessage="Idioma" /></p>
            <select className='languageSelector' value={locale} onChange={(event) => changeLanguage(event.target.value)}>
                <option value='es'>Spanish</option>
                <option value='en'>English</option>
            </select>
        </>
    )
}

export default LanguageSelector;