import React from "react";
import { Div } from "atomize";
import { DownloadIcon } from "./icons";
import { recentActivityData } from "../data/recentActivityData";

const RecentActivities = () => {
  return (
    <div>
      <Div bg="#FFFFFF" p="2rem" rounded="24px" m="1rem">
        <Div d="flex" justify="space-between" m={{ b: "2rem" }}>
          <Div className="font-14">Recent Activity</Div>
          <Div d="flex" justify="space-between">
            <Div>
              <input type="date" />
            </Div>
            <Div>
              <DownloadIcon />
            </Div>
          </Div>
        </Div>
        <div>
          {recentActivityData.map((data, index) => (
            <Div
              d="flex"
              align="center"
              justify="space-between"
              m={{ b: "2rem" }}
              key={index}
            >
              <Div>
                <Div d="flex" align="center" justify="space-between">
                  <Div>{data.logo}</Div>
                  <Div m={{ l: "10px" }}>
                    <Div className="font_14">{data.title}</Div>
                    <Div className="font-12" textSize={{ xs: "caption" }}>
                      {data.date}
                    </Div>
                  </Div>
                </Div>
              </Div>
              <Div className="font-14">{data.amount}</Div>
            </Div>
          ))}
        </div>
      </Div>
    </div>
  );
};

export default RecentActivities;
