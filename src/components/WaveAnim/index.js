import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Wrapper } from './styles.module';

const WaveAnim = () => {
  return (
    <Wrapper>
      <svg className="finny scroll fade scrolled" viewBox="0 0 800 350">
        <defs>
          <path id="path5" d="M 40 80 C 320 -20 440 180 780 150"></path>
          <path id="path6" d="M 40 240 C 320 360 480 160 780 190"></path>
          <path id="path7" d="M 120 160 C 280 120 260 240 680 160"></path>
          <path id="path8" d="M 40 80 C 320 -20 440 180 780 151"></path>

          <path id="path1" d="M 41 80 C 320 -20 440 180 781 150"></path>
          <path id="path2" d="M 41 240 C 320 360 480 160 781 190"></path>
          <path id="path3" d="M 121 160 C 280 120 260 240 681 160"></path>
          <path id="path4" d="M 41 80 C 320 -20 440 180 781 151"></path>
        </defs>
        
        <use href="#path5" className="line behind line5"></use>
        <use href="#path6" className="line behind line6"></use>
        <use href="#path7" className="line behind line7"></use>
        <use href="#path8" className="line behind line8"></use>

        <use href="#path1" className="line line1"></use>
        <use href="#path2" className="line line2"></use>
        <use href="#path3" className="line line3"></use>
        <use href="#path4" className="line line4"></use>

      </svg>
    </Wrapper>
  );
}

export default WaveAnim;