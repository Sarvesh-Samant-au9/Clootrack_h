import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import BarChartComponent from "./BarChartComponent";
import PieChartComponent from "./PieChartComponent";

const IntereactiveChart = () => {
  const {
    detailsReducer: { particularData }
  } = useSelector((state) => state);
  const [editDataSource, setEditDataSource] = useState([]);
  const [changeSource, setChangeSource] = useState(false);
  const submitFormHandler = (e) => {
    console.log(e);
    e.preventDefault();
    setEditDataSource([...editDataSource]);
  };
  const onChangeHandler = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    // ...new Set(data.map(item => item.group))
    let ename = e.target.name;
    let evalue = e.target.value;
    setEditDataSource(
      [...editDataSource, { [ename]: evalue }].filter((e) => e !== ename)
    );
  };
  console.log(editDataSource);
  return (
    <>
      {particularData ? (
        <div>
          <h3>Edit Data</h3>
          {particularData && particularData[0].type === "Bar" ? (
            <BarChartComponent dataSource={particularData[0]} />
          ) : (
            <PieChartComponent dataSource={particularData[0]} />
          )}
        </div>
      ) : (
        <Link to="/">Back</Link>
      )}
      {particularData && (
        <form onSubmit={submitFormHandler}>
          {particularData &&
            particularData[0].elements.map((e, id) => (
              <div style={{ padding: "10px" }}>
                <input
                  type="number"
                  min={0}
                  name={id}
                  onChange={onChangeHandler}
                />
                {e}
              </div>
            ))}
          <input type="submit" />
        </form>
      )}
    </>
  );
};
export default IntereactiveChart;
