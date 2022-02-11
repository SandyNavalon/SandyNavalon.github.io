import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Experience.scss'

const Experience = ({experience}) => {
    return(
        <div className='experience'>
            <div className='box'>
                <div className='experience__background'></div>
                <div className='experience__card'>
                {experience.map((item) => {
                    return (
                    <div className="experience__card-item" key={item}>
                        <p className='experience__card-item-name'><FontAwesomeIcon icon={faFolderOpen}/> {item.name}</p>
                        <p>{item.where}</p>
                        <p>{item.date}</p>
                    </div>
                    )
                })}
                </div>
            </div>
        </div>
    )
}


export default  Experience;