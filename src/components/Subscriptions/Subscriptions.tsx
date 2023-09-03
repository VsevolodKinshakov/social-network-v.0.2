import React from 'react'

import { SubStyle } from './Subscriptions.style'
import UserElement from './UserElement'

export const Subscriptions = () => {
  return (
    <SubStyle>
      <div className='List'>
        <div className='List__title'>
          <h2>Подписки</h2>
          <span className='count'>123</span>
        </div>
        <UserElement
          src='./img/profile/profile-img-1.jpeg'
          alt='User'
          mainText='N E W'
          secondaryText='Развитие'
          badge='3'
        />
        <UserElement
          src='./img/profile/profile-img-2.jpeg'
          alt='User'
          mainText='Aesthetics'
          secondaryText='Стиль'
          badge='3'
        />
        <UserElement
          src='./img/profile/profile-img-3.jpeg'
          alt='User'
          mainText='Дом твоей эстетики'
          secondaryText='Творчество'
          badge='3'
        />
        <UserElement
          src='./img/profile/profile-img-4.jpeg'
          alt='User'
          mainText='Wailet'
          secondaryText='Искусство'
          badge='3'
        />
        <UserElement
          src='./img/profile/profile-img-5.jpeg'
          alt='User'
          mainText='A W E S O M E'
          secondaryText='Стиль'
          badge='3'
        />
        <UserElement
          src='./img/profile/profile-img-6.jpeg'
          alt='User'
          mainText='Minimalism'
          secondaryText='Фотография'
          badge='3'
        />
        <UserElement
          src='./img/profile/profile-img-7.jpeg'
          alt='User'
          mainText='Словарный запас'
          secondaryText='Литература'
          badge='3'
        />
        <UserElement
          src='./img/profile/profile-img-8.jpeg'
          alt='User'
          mainText='Look'
          secondaryText='Мода'
          badge='3'
        />
      </div>
    </SubStyle>
  )
}
