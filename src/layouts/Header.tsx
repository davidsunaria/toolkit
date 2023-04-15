import React, { Fragment, useCallback } from "react";
import { HeaderIcons } from "../components/HeaderIcons";
import LogoHeader from "../components/LogoHeader";
import LastHeader from "../components/LastHeader";

const Header: React.FC = (): JSX.Element => {
  
  return (
    <Fragment>
       <div className="container-fluid">
      <LogoHeader/>
      <HeaderIcons/>
      <LastHeader/>
      </div>
        {/* <HeaderIcons/> */}
    </Fragment>
  );
};

export default Header;
