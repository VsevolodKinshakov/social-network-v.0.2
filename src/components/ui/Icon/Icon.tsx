import React from "react";
import { ReactSVG } from "react-svg";
import styled, { css } from "styled-components";

interface ISVG {
  height?: string;
  width?: string;
  color?: string;
  transform?: string;
  padding?: string;
  stroke?: string;
}

const StyledSVGIcon = styled(ReactSVG)<ISVG>`
  svg {
    ${(props) =>
      props.color &&
      !props.stroke &&
      css`
        fill: ${props.color};
      `};
    ${(props) =>
      props.stroke &&
      css`
        stroke: ${props.stroke};
      `};

    width: ${(props) => props.width || props.theme.spacing.space.m}px;
    height: ${(props) => props.height || props.theme.spacing.space.m}px;
    ${(props) =>
      props.transform &&
      css`
        transform: ${props.transform};
      `};
    vertical-align: middle;

    path {
      ${(props) =>
        props.color &&
        !props.stroke &&
        css`
          fill: ${props.color};
        `}
      ${(props) =>
        props.stroke &&
        css`
          stroke: ${props.stroke};
        `};
    }
  }
`;

interface IIcon extends ISVG {
  name?: string;
}

export const Icon: React.FC<IIcon> = ({
  stroke,
  name,
  height,
  width,
  color,
  transform,
  ...props
}) => {
  return (
    <StyledSVGIcon
      src={`img/icons/${name}.svg`}
      color={color}
      width={width}
      height={height}
      transform={transform}
      wrapper="span"
      data-testid="icon"
      stroke={stroke}
      {...props}
    />
  );
};
