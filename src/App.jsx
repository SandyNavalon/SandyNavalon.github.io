import './App.scss';
import { FormattedMessage as T } from 'react-intl';
import { useContext, useState } from 'react';

import { CV } from './CV/cs'
import { About, Education, Experience, MoreInfo, Person } from './pages'
import ScrollButton from './hooks/ScrollButton';

import LanguageSelector from './components/LanguageSelector/LanguageSelector';
import { LanguageContext } from './contexts/LanguageContext';


function App() {
  const {locale} = useContext(LanguageContext);

  /* DESTRUCTURING */
  const { person, education, experience, languages, skills, softwareSkills, aboutMe } = CV[locale || CV['en']];

  const [showEducation, setShowEducation] = useState(true);

  return (
  <div className='App'>
    <LanguageSelector/>
    <Person person={person}/>
    <About about={aboutMe}/>
    <div className='App__eduExp'>
      <div className='App__btns'>
      <button className='App__btns-btn' onClick={() => setShowEducation(true)}>
      <T id="app.educationBtn" />
      </button>
      <button className='App__btns-btn' onClick={() => setShowEducation(false)}>
      <T id="app.experienceBtn" />
      </button>
      </div>
      <div>
        {showEducation ?
        (<Education education={education}/>)
        :
        (<Experience experience={experience}/>)
        }
      </div>
    </div>
    <MoreInfo
      languages={languages}
      skills={skills}
      softwareSkills={softwareSkills}
    />
    <ScrollButton className='App__elm5'/>
  </div>
  );
}

export default App;
