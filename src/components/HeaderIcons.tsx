import React, { Fragment, useCallback } from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { GoMailRead } from "react-icons/go";
import { SiSahibinden } from "react-icons/si";
import { AiOutlineStock } from "react-icons/ai";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { RiShipLine, RiBarcodeBoxLine } from "react-icons/ri";
import { GrSend } from "react-icons/gr";
import { BiCube } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { VscServerEnvironment } from "react-icons/vsc";
import { TbCircleRectangle } from "react-icons/tb";
import {IHeaderIcons} from ".././interfaces"


export const HeaderIcons = ()=>{

    let headerTabs:IHeaderIcons[] = [
        {
          title: "Dashboard",
          iconName: <AiOutlineDashboard />,
        },
    
        { title: "Mailbox", iconName: <GoMailRead /> },
        { title: "Sales", iconName: <SiSahibinden /> },
        { title: "Purchase", iconName: <BiPurchaseTagAlt /> },
        { title: "Stock", iconName: <AiOutlineStock /> },
        { title: "Shipment", iconName: <RiShipLine /> },
        { title: "Booking", iconName: <GrSend /> },
        { title: "Container", iconName: <RiBarcodeBoxLine /> },
        { title: "Product", iconName: <BiCube /> },
        { title: "Customer", iconName: <FiUsers /> },
        { title: "Partner", iconName: <TbCircleRectangle /> },
        { title: "Contacts", iconName: <FaRegUserCircle /> },
        { title: "Report", iconName: <VscServerEnvironment /> },
      ];

    return (
        <div className="tiles">
          {headerTabs?.map((val:IHeaderIcons, i:number) => {
            return (
              <div className="tile">
                {val?.iconName}
                <p>{val?.title}</p>
              </div>
            );
          })}
        </div>

    )
}