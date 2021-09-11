import React from "react";
import { Div, Image } from "atomize";
import { BellIcon } from "./icons";
import profile from "../assests/images/profile-img.svg";

const HeaderProfile = () => {
  return (
    <Div
      d={{ xs: "none", md: "none", lg: "flex" }}
      align="space-around"
      justify="flex-end"
      m={{ x: "1rem", b: "3rem" }}
    >
      <Div cursor="pointer">
        <BellIcon />
      </Div>
      <Div m={{ l: "1rem" }}>
        <Image src={profile} alt="user profile image" />
      </Div>
      <Div cursor="pointer" m={{ l: "1rem" }}>
        <i class="fa fa-ellipsis-v" style={{ fontSize: "25px" }}></i>
      </Div>
    </Div>
  );
};

export default HeaderProfile;
