import React from "react";
import { GoBackIcon } from "./icons";
import { Div, Text } from "atomize";
import PatriciaLogo from "../components/patriciaLogo";
import { NavLink } from "react-router-dom";
import { Sidebardata } from "../data/sidebarData";

const Header = ({ sidebar, onClick }) => {
  return (
    <Div>
      <Div
        d="flex"
        justify="space-between"
        align="center"
        m={{ x: "1rem", b: "3rem" }}
      >
        <Div d="flex" align="center">
          <Div>
            <GoBackIcon />
          </Div>
          <Text tag="span" m={{ l: "1rem" }} className="font-32">
            Cards
          </Text>
        </Div>
        <Div d={{ xs: "flex", md: "none" }}></Div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={onClick}>
            <li style={{ listStyleType: "none" }} className="m-5">
              <PatriciaLogo />
            </li>
            {Sidebardata.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <NavLink
                    activeStyle={{
                      padding: "5px",
                      color: "#006156",
                      backgroundColor: "#FFEEA7",
                      borderRadius: "5px",
                    }}
                    to={item.path}
                  >
                    <span>{item.icon}</span>
                    <span>{item.title}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </Div>
    </Div>
  );
};

export default Header;
