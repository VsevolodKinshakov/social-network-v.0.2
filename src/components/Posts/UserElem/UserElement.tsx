import React from "react";

interface UserElementPostProps {
    src: string,
    name: string,
    timestamp: string,
}

export const UserElem = ({ src, name, timestamp }: UserElementPostProps) => {
    return (
        <div className="UserElem">
        <img src={src} alt="User" />
        <div className="user__description">
          <a href="#" className="main__text">
            {name}
          </a>
          <p className="secondary__text">{timestamp}</p>
        </div>
      </div>
    )
}