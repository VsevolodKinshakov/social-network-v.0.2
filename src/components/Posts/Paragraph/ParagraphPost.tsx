import React from "react";

interface ParagraphPostProps {
    text: string
}

export const ParagraphPost = ({ text }:ParagraphPostProps) => {
    return (
        <p className="Post__text">{text}</p>
    )
}