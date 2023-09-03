import React from "react";
import { MusicBlockStyle } from "./MusicBlock.style";
import MusicElem from "./MusicElem/MusicElem";

interface MusicBlockProps {
  mainText: string;
  secondaryText: string;
}

export const MusicBlock = ({ mainText, secondaryText }: MusicBlockProps) => {
  return (
    <MusicBlockStyle>
      <div className="MusicBlock__title">
        <h2>{mainText}</h2>
        <span>{secondaryText}</span>
      </div>
      <MusicElem
        src="./img/music/album-1.png"
        alt="Album"
        mainText="Pieces"
        secondaryText="Andrew Belle"
      />
      <MusicElem
        src="./img/music/album-2.png"
        alt="Album"
        mainText="In the Wind"
        secondaryText="On-The-Go"
      />
      <MusicElem
        src="./img/music/album-3.png"
        alt="Album"
        mainText="On you own"
        secondaryText="Meltt"
      />
      <MusicElem
        src="./img/music/album-4.png"
        alt="Album"
        mainText="Infinity"
        secondaryText="James Young"
      />
      <MusicElem
        src="./img/music/album-5.png"
        alt="Album"
        mainText="Let me follow"
        secondaryText="Son Lux"
      />
      <MusicElem
        src="./img/music/album-6.png"
        alt="Album"
        mainText="Youth"
        secondaryText="Glass Animals"
      />
    </MusicBlockStyle>
  );
};
