import React from "react";

interface MediaContainerProps {
    images: string[],
}

export const MediaContainer = ({ images }: MediaContainerProps) => {
    return (
        <div className="media-container">
        {images.map((src, index) => (
          <img
            key={index}
            className="media__item"
            src={src}
            alt={`Post Item ${index + 1}`}
          />
        ))}
      </div>
    )
}