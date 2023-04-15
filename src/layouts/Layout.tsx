import React, { FC, Fragment, ReactNode } from "react";
import Header from '../layouts/Header';

interface Props {
  children: ReactNode;
}
const Layout: FC<Props> = ({ children }) => {
 
  return (
      <Fragment>
         <Header/> 
         {children} 
      </Fragment>
  )
}

export default Layout;