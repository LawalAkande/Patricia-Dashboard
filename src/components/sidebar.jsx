import React from "react";
import { Div } from "atomize";
import PatriciaLogo from "../components/patriciaLogo";
import HelpCenter from "../components/helpCenter";
import { NavLink } from "react-router-dom";
import { Sidebardata } from "../data/sidebarData";

const Sidebar = () => {
  return (
    <Div d={{ xs: "none", md: "flex" }}>
      <Div>
        <Div className="m-5">
          <PatriciaLogo />
        </Div>
        <nav className="sidebar">
          <ul className="">
            {Sidebardata.map((item, index) => (
              <li key={index}>
                <NavLink
                  data-toggle="tab"
                  className=""
                  activeStyle={{
                    padding: "5px",
                    color: "#006156",
                    backgroundColor: "#FFEEA7",
                    borderRadius: "5px",
                  }}
                  to={item.path}
                >
                  <span>{item.icon}</span>
                  <span className=" m-2 font-14">{item.title}</span>
                </NavLink>
              </li>
            ))}
          </ul>
          <HelpCenter />
        </nav>
      </Div>
    </Div>
  );
};

export default Sidebar;
