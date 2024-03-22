import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setChildData } from "../Store/ChildReducer";
import SingleChild from "./SingleChild";
import "../styles/AdoptChild.css";

function AdoptChild() {
  const dispatch = useDispatch();

  const datas = useSelector(
    (state: { child: { childId: string }[] }) => state.child
  );

  useEffect(() => {
    fetch("http://localhost:3000/child/piyush")
      .then((response) => response.json())
      .then((data) => {
        const filteredData = data.filter(
          (item: { healthStatus: string }) => item.healthStatus !== "Adopted"
        );
        dispatch(setChildData(filteredData));
      })
      .catch((e) => {});
  }, [dispatch]);

  return (
    <div className="adopt-child-container">
      <div className="intro-section">
        Breaking the bitter chains of poverty through education, healthcare,
        dignified housing, economic and social empowerment, and sustainable
        development.
      </div>
      <div className="child-list">
        {datas.map((item: { childId: string }) => (
          <SingleChild key={item.childId} data={item} />
        ))}
      </div>
    </div>
  );
}

export default AdoptChild;
