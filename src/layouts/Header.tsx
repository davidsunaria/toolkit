import React, { Fragment, useCallback } from "react";
import { HeaderIcons } from "../components/HeaderIcons";
import LogoHeader from "../components/LogoHeader";

const Header: React.FC = (): JSX.Element => {
  
  return (
    <Fragment>
       <div className="container-fluid">
      <LogoHeader/>
      </div>
        {/* <HeaderIcons/> */}
    </Fragment>
  );
};

export default Header;
