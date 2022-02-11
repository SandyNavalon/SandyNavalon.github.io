import './Person.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faCity, faPhone, faCodeBranch } from '@fortawesome/free-solid-svg-icons';

const Person = ({ person }) => {
    return (
      <div className="person">
        <img src={person.image} alt={person.image} />
        <div className='box'>
          <div className='person__background'></div>
          <div className="person__card">
            <h1 className='person__card-name'>
              {person.name} {person.lastName}
            </h1>
            <h2 className='person__card-job'>Junior Full Stack developer</h2>
            <h3><FontAwesomeIcon icon={faCity}/> {person.city}</h3>
            <p>
              <a href={"mailto:" + person.email}><FontAwesomeIcon icon={faAt}/> sandy.navalon.tovar@gmail.com</a>
            </p>
            <p><FontAwesomeIcon icon={faPhone}/> {person.phone}</p>
            <p>
              <a href={person.gitHub}><FontAwesomeIcon icon={faCodeBranch}/> GitHub</a>
            </p>
          </div>
        </div>
      </div>
    );
}


export default Person;