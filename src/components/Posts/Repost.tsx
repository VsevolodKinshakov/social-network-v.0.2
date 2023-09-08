import React from "react";
import { UserElem } from "./UserElem/UserElement";
import { MediaContainer } from "./MediaContainer/MediaContainer";
import { PostConstrols } from "./PostControls/PostControls";
import { CommentBlock } from "./CommentBlock/CommentBlock";


export const Repost = ({}) => {
    return (
        <div className="Post Repost _liked _marked">
        <div className="UserElem Repost__owner">
          <img src="./img/users/mark-krahmalev.jpeg" alt="User" />
          <div className="user__description">
            <a href="#" className="main__text">
              Марк Крахмалев
            </a>
            <p className="secondary__text">20 марта 23:31</p>
          </div>
        </div>
        <div className="Repost__wrapper">
          <UserElem
            src="./img/users/aleksandr-maykov.jpeg"
            name="Александр Майков"
            timestamp="Сегодня 9:37"
          />
          <MediaContainer
            images={["./img/post/garnet-man.png", "./img/post/garnet.png"]}
          />
        </div>
        <PostConstrols likesCount={-500} commentsCount={500} />
        <CommentBlock
          src="./img/users/aleksandr-maykov.jpeg"
          userName="Карина Савина"
          commentText="Это текст комментария..."
          date="25 марта"
        />
        <svg
          className="icon icon-more"
          viewBox="0 0 25 5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="more">
            <circle id="ellipse" cx="22.5" cy="2.5" r="2.5" />
            <circle id="ellipse_2" cx="12.5" cy="2.5" r="2.5" />
            <circle id="ellipse_3" cx="2.5" cy="2.5" r="2.5" />
          </g>
        </svg>
      </div>
    )
}