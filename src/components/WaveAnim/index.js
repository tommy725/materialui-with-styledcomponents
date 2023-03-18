import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Wrapper } from './styles';

function WaveAnim() {
  return (
    <Wrapper>
      <svg className="finny scroll fade scrolled" viewBox="0 0 800 350">
        <defs>
          <path id="path1" d="M 40 80 C 320 20 440 140 780 150"></path>
          <path id="path2" d="M 40 240 C 320 340 480 200 780 190"></path>
          <path id="path3" d="M 120 160 C 280 120 260 240 680 160"></path>
          <path id="path4" d="M 40 80 C 320 20 440 140 780 151"></path>
        </defs>
        
        <use href="#path1" className="line1 line "></use>
        <use href="#path2" className="line line2"></use>
        <use href="#path3" className="line line3"></use>
        <use href="#path4" className="line line4"></use>

      </svg>
    </Wrapper>
  );
}

export default WaveAnim;