import React, { ReactNode } from 'react';

interface UserInfoProps {
  name: string;
  friends: number;
  followers: number;
  subscriptions: number;
  children?: ReactNode;
}

const UserParameter: React.FC<UserInfoProps> = ({
  name,
  friends,
  followers,
  subscriptions,
  children,
}) => {
  return (
    <div className="user__description">
      <h1 className="user__name">{name}</h1>
      <div className="user__info">
        <div className="parameter">
          <span className="key">Друзья</span>
          <span className="value">{friends}</span>
        </div>
        <div className="parameter">
          <span className="key">Подписчики</span>
          <span className="value">{followers}</span>
        </div>
        <div className="parameter">
          <span className="key">Подписки</span>
          <span className="value">{subscriptions}</span>
        </div>
      </div>
      {children}
    </div>
  );
};

export default UserParameter;
