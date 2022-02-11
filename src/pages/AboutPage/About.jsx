import './About.scss';
import { FormattedMessage as T } from 'react-intl';

const About = ({ about }) => {
    return (
      <div className='about'>
        <h1 className='about__title'><T id="about.title"/></h1>
        <div className='box'>
          <div className='about__background'></div>
          <div className='about__card'>
            {about.map ((item, index) => {
              return(
                <div className='about__card-item' key={index}>
                  <p>{item.info}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    );
}

export default  About;