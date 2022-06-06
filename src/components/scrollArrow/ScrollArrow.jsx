
import React, {useState} from 'react';
import {CgArrowUpR} from 'react-icons/cg';
import './scrollArrow.css';


const ScrollArrow = () =>{

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 200){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 200){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', checkScrollTop)

  return (
        <CgArrowUpR className="scrollTop" onClick={scrollTop} style={{height: 40, display: showScroll ? 'flex' : 'none'}}/>
  );
}

export default ScrollArrow;