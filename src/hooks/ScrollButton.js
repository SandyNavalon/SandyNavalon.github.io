import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

import React, {useState} from 'react';

import './ScrollButton.scss'

const ScrollButton = () =>{

const [visible, setVisible] = useState(false)

const toggleVisible = () => {
	const scrolled = document.documentElement.scrollTop;
	if (scrolled > 300){
	setVisible(true)
	}
	else if (scrolled <= 300){
	setVisible(false)
	}
};

const scrollToTop = () =>{
	window.scrollTo({
	top: 0,
	behavior: 'smooth'
	});
};

window.addEventListener('scroll', toggleVisible);

return (
	<button
	className='top-btn'
    onClick={scrollToTop}
	style={{display: visible ? 'inline' : 'none'}} >
    <FontAwesomeIcon icon={faArrowUp}/>
	</button>
);
}

export default ScrollButton;
