import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataFromAPI } from "../Actions/action";
import BarChartComponent from "./BarChartComponent";
import PieChartComponent from "./PieChartComponent";

export default function ChartComponent() {
  const dispatch = useDispatch();
  const { detailsReducer } = useSelector((state) => state);
  const [flag, setFlag] = useState(true);
  useEffect(() => {
    dispatch(getDataFromAPI());
  }, [dispatch]);

  const { isLoading, fetchDataChart } = detailsReducer;
  return isLoading ? (
    <h1>Loading..</h1>
  ) : (
    <>
      {fetchDataChart.length > 0 &&
        fetchDataChart.map((e, index) =>
          e.type === "Bar" ? (
            <BarChartComponent
              flag={flag}
              setFlag={setFlag}
              dataSource={e}
              key={index}
              id={index}
            />
          ) : (
            <PieChartComponent
              flag={flag}
              setFlag={setFlag}
              dataSource={e}
              key={index}
              id={index}
            />
          )
        )}
    </>
  );
}
