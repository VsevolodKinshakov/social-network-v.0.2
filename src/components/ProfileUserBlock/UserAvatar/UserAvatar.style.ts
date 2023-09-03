import styled from "styled-components";

export const AvatarImage = styled.img`
  width: calc(3.2vw + 113px); //? 125 - 375 | 175 - 1920
  height: calc(3.2vw + 113px); //? 125 - 375 | 175 - 1920
  object-fit: cover;
  border: 5px solid ${(props) => props.theme.colors.elemsBgc};
  border-radius: 50%;
  position: absolute;
  top: -56px;
  left: 30px;
`;

export const AvatarSlug = styled.div`
  width: calc(3.2vw + 113px); //? 125 - 375 | 175 - 1920
  height: calc(3.2vw + 113px); //? 125 - 375 | 175 - 1920
  border: 5px solid ${(props) => props.theme.colors.elemsBgc};
  border-radius: 50%;
  background-color: #b0e0e6;
  position: absolute;
  top: -56px;
  left: 30px;
  text-align: center;
  line-height: calc(3.2vw + 100px);
  font-size: 52px;
  font-weight: 700;
`;

export const AvatarUploadInput = styled.input`
  width: calc(3.2vw + 113px); //? 125 - 375 | 175 - 1920
  height: calc(3.2vw + 113px); //? 125 - 375 | 175 - 1920
  position: absolute;
  top: -56px;
  left: 30px;
  opacity: 0;
  border-radius: 50%;
  cursor: pointer;
`;
