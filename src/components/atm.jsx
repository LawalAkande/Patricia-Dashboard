import React from "react";
import { Div, Image } from "atomize";
import patricia_black_atm from "../assests/images/gey.svg";
import { FreezeCardButton, DeleteCardButton } from "./buttons";

const Atm = () => {
  return (
    <Div m={{ x: "1rem", b: "3rem" }}>
      <Div m={{ l: { xs: "20px" } }}>
        <Image
          src={patricia_black_atm}
          alt="patricia_black_atm"
          className="atms"
        />
      </Div>
      <Div d="flex" justify={{ xs: "center", md: "left" }}>
        <Div>
          <FreezeCardButton />
        </Div>
        <Div m={{ l: "2rem" }}>
          <DeleteCardButton />
        </Div>
      </Div>
    </Div>
  );
};

export default Atm;
