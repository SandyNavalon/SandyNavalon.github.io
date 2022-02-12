import './MoreInfo.scss'

import { FormattedMessage as T  } from 'react-intl';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentAlt, faPencilAlt, faPlus } from '@fortawesome/free-solid-svg-icons'

const MoreInfo = ({ languages, skills, softwareSkills }) => {
    return(
        <div className='moreInfo'>
            <div className='languages'>
                <h2><T id='languages.title'/></h2>
                <div className='box'>
                <div className='languages__background'></div>
                    <div className='languages__card'>
                        {languages.map((item, index) => {
                            return (
                                <div className='languages__card-item' key={index}>
                                    <h4>{item.language}</h4>
                                    <p><FontAwesomeIcon icon={faPencilAlt}/> <T id='writing.title'/>{item.wrlevel}</p>
                                    <p><FontAwesomeIcon icon={faCommentAlt}/> <T id='speaking.title'/> {item.splevel}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className='skills'>
                <h2><T id='skills.title' /></h2>
                <div className='box'>
                    <div className='skills__background'></div>
                    <div className='skills__card'>
                        {skills.map((item, index) => {
                            return (
                                <div className='skills__card-item' key={index}>
                                    <p><FontAwesomeIcon icon={faPlus}/> {item}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className='softwareSkills'>
                <h2><T id='softwareSkills.title' /></h2>
                <div className='box'>
                    <div className='softwareSkills__background'></div>
                    <div className='softwareSkills__card'>
                        {softwareSkills.map((item, index) => {
                            return (
                                <div className='softwareSkills__card-item' key={index}>
                                    <p><FontAwesomeIcon icon={faPlus}/> {item}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default  MoreInfo;