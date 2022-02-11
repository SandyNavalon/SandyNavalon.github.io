import './Education.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookReader} from '@fortawesome/free-solid-svg-icons';


const Education = ({ education }) => {
    return (
      <div className='education'>
        <div className='box'>
          <div className='education__background'></div>
          <div className='education__card'>
              {education.map((item, index) => {
                return (
                  <div className='education__card-item' key={index}>
                    <p className='education__card-item-name'><FontAwesomeIcon icon={faBookReader}/> {item.name}</p>
                    <p>{item.where}</p>
                    <p>{item.date}</p>
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    );
}

export default Education;