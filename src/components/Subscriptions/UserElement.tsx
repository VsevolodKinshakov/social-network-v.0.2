import React from 'react'

interface UserElementProps {
  src: string
  alt: string
  mainText: string
  secondaryText: string
  badge: string
}

export const UserElement = ({
  src,
  alt,
  mainText,
  secondaryText,
  badge,
}: UserElementProps) => {
  return (
    <div className='UserElem'>
      <img src={src} alt={alt} />
      <div className='user__description'>
        <p className='main__text'>{mainText}</p>
        <p className='secondary__text'>{secondaryText}</p>
      </div>
      <span className='Badge'>{badge}</span>
    </div>
  )
}

export default UserElement;
