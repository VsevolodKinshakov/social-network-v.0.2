import React from "react";
import { UserElem } from "./UserElem/UserElement";
import { ParagraphPost } from "./Paragraph/ParagraphPost";
import { MediaContainer } from "./MediaContainer/MediaContainer";
import { PostConstrols } from "./PostControls/PostControls";
import { CommentBlock } from "./CommentBlock/CommentBlock";


export const Post = ({}) => {
    return (
        <div className="Post _liked _marked">
        <UserElem
          src="./img/users/aleksandr-maykov.jpeg"
          name="Александр Майков"
          timestamp="Сегодня 9:37"
        />
        <ParagraphPost text="Момент умиротворения и спокойствия" />
        <MediaContainer
          images={[
            "./img/post/nature-1.png",
            "./img/post/nature-2.png",
            "./img/post/nature-3.png",
            "./img/post/nature-4.png",
            "./img/post/nature-5.png",
            "./img/post/nature-6.png",
          ]}
        />
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