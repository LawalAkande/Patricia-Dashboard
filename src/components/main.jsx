import React, { useState } from "react";
import Header from "./header";
import Atm from "./atm";
import VirtualCard from "./virtualCard";
import FundcardTable from "./funCard";
import HeaderProfile from "./headerProfile";
import RecentActivities from "./recentActivities";
import PatriciaLogo from "./patriciaLogo";
import { Div, Row, Col } from "atomize";

const Main = () => {
  const [iconClick, setIconClick] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div>
      <Div
        d={{ xs: "flex", md: "none" }}
        justify={{ xs: "space-around" }}
        p={{ t: "1rem" }}
        className="mobileHeader container"
      >
        <Div className="mobile-logo">
          <PatriciaLogo />
        </Div>
        <Div>
          <Div m={{ l: "12rem" }} cursor="pointer" onClick={showSidebar}>
            <div onClick={() => setIconClick(!iconClick)}>
              {iconClick ? (
                <i class="fa fa-times" style={{ fontSize: "30px" }}></i>
              ) : (
                <i class="fa fa-bars" style={{ fontSize: "30px" }}></i>
              )}
            </div>
          </Div>
        </Div>
      </Div>
      <Div m={{ l: { md: "250px" } }}>
        <Row>
          <Div d={{ xs: "flex", md: "none" }}></Div>
          <Col size={{ xs: 12, md: 12, lg: 8 }} className="paddingTop">
            <Header sidebar={sidebar} onClick={showSidebar} />
            <VirtualCard />
            <Atm />
            <FundcardTable />
          </Col>
          <Col bg="#F9FAFC" size={{ xs: 12, md: 12, lg: 4 }}>
            <Div className="paddingTop">
              <HeaderProfile />
              <RecentActivities />
            </Div>
          </Col>
        </Row>
      </Div>
    </div>
  );
};

export default Main;
