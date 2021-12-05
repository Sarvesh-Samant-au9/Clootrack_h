import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { singleDataChart } from "../Actions/action";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#5454d4"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
export default function PieChartComponent({
  dataSource,
  flag,
  setFlag,
  key,
  id
}) {
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
      <PieChart width={400} height={400}>
        <Pie
          data={createObject}
          cx={200}
          cy={200}
          labelLine={true}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {createObject.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
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
}
