import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { editDataChart, singleDataChart } from "../Actions/action";

const BarChartComponent = ({ dataSource, id, flag, setFlag }) => {
  const onClickHandler = (id) => {
    setFlag(false);
    dispatch(singleDataChart(id));
  };
  const dispatch = useDispatch();
  const createObject = dataSource.elements.map((e, index) => {
    return {
      ...e,
      index: index,
      value: e
    };
  });

  return (
    <>
      <BarChart
        width={500}
        height={300}
        data={createObject}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="index" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
      {flag ? (
        <Link to="/edit" onClick={() => onClickHandler(id)}>
          Select
        </Link>
      ) : (
        <Link to="/">Back</Link>
      )}

      <hr />
    </>
  );
};
export default BarChartComponent;
