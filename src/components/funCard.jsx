import React from "react";
import { Div, Row, Col } from "atomize";
import { FundCardButton } from "./buttons";
import { tableData } from "../data/tableData";

const FundCardTable = () => {
  return (
    <Div>
      <Div bg="#F9FAFC" p="2rem" m={{ y: "2rem", x: "1rem" }} rounded="24px">
        <Div d={{ md: "flex" }} justify="space-between">
          <Div>
            {tableData.map((data, index) => (
              <Row key={index}>
                <Col>
                  <Div>{data.title}</Div>
                </Col>
                <Col>
                  <Div className="font-14" m={{ b: "1rem" }}>
                    <Div className="font-16">{data.title_td}</Div>
                    <Div className="">{data.icon}</Div>
                  </Div>
                </Col>
              </Row>
            ))}
          </Div>
          <Div>
            <FundCardButton />
          </Div>
        </Div>
      </Div>
    </Div>
  );
};

export default FundCardTable;
