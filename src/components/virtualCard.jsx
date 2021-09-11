import React from "react";
import { Div, Text } from "atomize";
import { VirtualCardIcon, ArrowDownIcon } from "./icons";
import { CreateNewCardButton } from "./buttons";

const VirtualCard = () => {
  return (
    <div>
      <Div className="display-space-between" m={{ x: "1rem" }}>
        <Div d="flex" align="center">
          <VirtualCardIcon />
          <Div m={{ l: "1rem" }}>
            <Div d="flex">
              <Div m={{ r: "5px" }} className="font-20">
                Virtual Card
              </Div>
              <Div>
                <ArrowDownIcon />
              </Div>
            </Div>
            <Text textSize={{ xs: "caption" }}>Lorem Ipsum dolor sit amet</Text>
          </Div>
        </Div>
        <Div>
          <CreateNewCardButton />
        </Div>
      </Div>
    </div>
  );
};

export default VirtualCard;
