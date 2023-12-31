import React from "react";
import { Link } from "react-router-dom";

type LinkProps = {
    linkText: string;
    to: string;
};

const LinkButton = ({ linkText, to }: LinkProps) => {
    return <Link to={to}>{linkText}</Link>;
};

export default LinkButton;

