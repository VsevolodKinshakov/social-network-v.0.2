import React from "react";
import ButtonsWrapper from "../ui/ButtonsWrapper/ButtonsWrapper";
import BioInfoItem from "./BioInfoItem/BioInfoItem";
import BiodataItem from "./BioDataItem/BioDataItem";
import { BioStyle } from "./Bio.style";

export const Bio = () => {
  return (
<BioStyle>
      <BiodataItem/>
      <BioInfoItem
        education="Филиал университета нефти и газа им. Губкина в Ташкенте"
        activity="Фотограф"
        hobby="Танцы"
      />
        <ButtonsWrapper
          primaryButtonText="Подробнее"
          secondaryButtonText="Редактировать"
          primaryButtonIsSecondary={false}
          secondaryButtonIsPrimary={true}
        />
    </BioStyle>
  );
};
