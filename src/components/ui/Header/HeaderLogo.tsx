import React from "react";

const HeaderLogo = () => {
  return (
    <div className="Header__logo">
      <a href="#">
        <svg
          id="tehnikum-logo"
          viewBox="0 0 143 23"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.1657 1.07477H0V4.08411H5.26629V21.9252H8.10198V4.08411H13.1657V1.07477Z"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24.0021 23C28.516 23 32.3852 20.0712 34.0145 15.9065H30.3634C29.0072 18.1069 26.6646 19.5607 24.0021 19.5607C20.1157 19.5607 16.9109 16.4631 16.4606 12.4673H34.8385V11.0701C34.8385 10.9925 34.8326 10.9163 34.8211 10.8422C34.4998 4.79698 29.7789 0 24.0021 0C18.0173 0 13.1657 5.14873 13.1657 11.5C13.1657 17.8513 18.0173 23 24.0021 23ZM31.4018 9.6729C30.6218 6.10121 27.6049 3.43925 24.0021 3.43925C20.3993 3.43925 17.3824 6.10121 16.6025 9.6729H31.4018Z"
          />
        </svg>
      </a>
    </div>
  );
};

export default HeaderLogo;
