import React, {useContext} from 'react';
import Posts from '../components/Posts';
import LocaleContext from '../contexts/LocaleContext';

function Guide() {
  const {locale} = useContext(LocaleContext);

  return (
    <>
      <h1>{locale === 'id' ? 'Panduan' : 'Guide'}</h1>
      <Posts locale={locale} />
    </>
  );
}

export default Guide;
