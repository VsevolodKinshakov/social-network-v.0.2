import React, { useState } from "react";
import { Icon } from "../../ui/Icon/Icon";
import { AppInput } from "../../ui/AppInput/AppInput";

export const AddNewPost = ({  }) => {

  const [postValue, setPostValue] = useState('');

    return (
        <div className="WhatsNew">
        <img src="./img/users/arina-volkova.jpeg" alt="User" />
        {/* <AppInput type="text" placeholder="Что у вас нового" /> */}
        <input
          type="text"
          name="whats-new"
          id="whats-new"
          placeholder="Что у вас нового?"
          value={postValue}
          onChange={(e) => setPostValue(e.target.value)}
        />
        <div className="icons-wrapper">
          <Icon name="camera" padding="10" borderRadius="10"/>
          <Icon name="play-history" padding="10" borderRadius="10"/>
          <Icon name="music" padding="10" borderRadius="10"/>
        </div>
      </div>
    )
}