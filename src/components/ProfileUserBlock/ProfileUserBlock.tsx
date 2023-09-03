import React, { useState } from "react";
import { UserAvatar } from "./UserAvatar/UserAvatar";
import ButtonsWrapper from "../ui/ButtonsWrapper/ButtonsWrapper";
import UserParameter from "./UserParameter/UserParameter";
import { ProfileBackground } from "./UserBackground/UserBackground";

export const ProfileUserBlock = () => {
  const [newAvatar, setNewAvatar] = useState<string | null>(
    "./img/users/denis-frolov.jpeg"
  );

  const [backgroundUrl, setBackgroundUrl] = useState<string | null>(null);

  const handleAvatarUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event?.target?.files && event?.target?.files[0]) {
      const file = event.target.files[0];

      const formData = new FormData();
      formData.append("userAvatar", file);

      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = function () {
        const avatarUrl = reader.result as string;
        setNewAvatar(avatarUrl);
      };
    }
  };

  const handleBackgroundChange = (backgroundUrl: string) => {
    setBackgroundUrl(backgroundUrl);
  };

  return (
    <div className="ProfileHeader">
      <div className="user__block">
        <UserAvatar
          userAvatarUrl={newAvatar}
          isProfile={true}
          onAvatarChange={handleAvatarUpload}
        />
        <UserParameter
          name="Денис Фролов"
          friends={130}
          followers={923}
          subscriptions={246}
        />
        <ButtonsWrapper
          primaryButtonText="Редактировать профиль"
          secondaryButtonText="Добавить историю"
          primaryButtonIsSecondary={true}
          secondaryButtonIsPrimary={false}
        />
      </div>
      <ProfileBackground
        backgroundUrl={backgroundUrl}
        onBackgroundChange={handleBackgroundChange}
      />
    </div>
  );
};
