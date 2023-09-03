import React from "react";
import { BioInfoStyle } from "./BioInfoItem.style";

interface BioInfoItemProps {
  education: string;
  activity: string;
  hobby: string;
}

const BioInfoItem: React.FC<BioInfoItemProps> = ({
  education,
  activity,
  hobby,
}) => {
  return (
    <BioInfoStyle>
      <p className="main__text education">Образование</p>
      <p className="secondary__text education">{education}</p>
      <p className="main__text activity">Деятельность</p>
      <p className="secondary__text activity">{activity}</p>
      <p className="main__text hobby">Хобби</p>
      <p className="secondary__text hobby">{hobby}</p>
    </BioInfoStyle>
  );
};

export default BioInfoItem;
