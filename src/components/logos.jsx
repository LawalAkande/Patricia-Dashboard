import React from "react";
import { Div } from "atomize";

// import logos
import amazon_logo from "../assests/logos/amazon.svg";
import nike_logo from "../assests/logos/nike.svg";
import starbucks_logo from "../assests/logos/starbucks.svg";
import netflix_logo from "../assests/logos/netflix.svg";
import apple_logo from "../assests/logos/apple.svg";
import apple_fruit_logo from "../assests/logos/apple-fruit.svg";

// Amazon logo
export const AmazonLogo = () => {
  return (
    <Div
      bg="#FEA202"
      w="3rem"
      h="3rem"
      rounded="8px"
      d="flex"
      align="center"
      justify="center"
    >
      <img src={amazon_logo} alt="amazon logo" />
    </Div>
  );
};

// Nike logo
export const NikeLogo = () => {
  return (
    <Div
      bg="#1D1E2C"
      w="3rem"
      h="3rem"
      rounded="8px"
      d="flex"
      align="center"
      justify="center"
    >
      <img src={nike_logo} alt="nike logo" />
    </Div>
  );
};

// Starbucks logo
export const StarbucksLogo = () => {
  return (
    <Div
      bg="#006156"
      w="3rem"
      h="3rem"
      rounded="8px"
      d="flex"
      align="center"
      justify="center"
    >
      <img
        src={starbucks_logo}
        className="bg-primary_main w-10 h-8 rounded"
        alt="starbucks logo"
      />
    </Div>
  );
};

// Netflix logo
export const NetflixLogo = () => {
  return (
    <Div
      bg="#CC4945"
      w="3rem"
      h="3rem"
      rounded="8px"
      d="flex"
      align="center"
      justify="center"
    >
      <img src={netflix_logo} alt="netflix logo" />
    </Div>
  );
};

// Apple logo
export const AppleLogo = () => {
  return (
    <Div
      bg="#EFF2F7"
      w="3rem"
      h="3rem"
      rounded="8px"
      d="flex"
      align="center"
      justify="center"
    >
      <img src={apple_logo} alt="apple logo" />
    </Div>
  );
};

// Apple Fruit logo
export const AppleFruitLogo = () => {
  return (
    <Div
      bg="#2A69AF"
      w="3rem"
      h="3rem"
      rounded="8px"
      d="flex"
      align="center"
      justify="center"
    >
      <img src={apple_fruit_logo} alt="apple fruit logo" />
    </Div>
  );
};
