import React from 'react';
import { MusicElemStyle, PlusButtonStyle } from './MusicElem.style';

interface MusicElemProps {
  src: string;
  alt: string;
  mainText: string;
  secondaryText: string;
}

export const MusicElem = ({
  src,
  alt,
  mainText,
  secondaryText,
}: MusicElemProps) => {
  return (
    <MusicElemStyle>
      <img src={src} alt={alt} />
      <div className="music__description">
        <p className="main__text">{mainText}</p>
        <p className="secondary__text">{secondaryText}</p>
      </div>
      <PlusButtonStyle />
    </MusicElemStyle>
  );
};

export default MusicElem;
