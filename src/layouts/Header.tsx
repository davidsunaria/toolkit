import React, { Fragment, useCallback } from "react";
import { HeaderIcons } from "../components/HeaderIcons";

const Header: React.FC = (): JSX.Element => {
  
  return (
    <Fragment>
      <header>
        <HeaderIcons/>
      </header>
    </Fragment>
  );
};

export default Header;
