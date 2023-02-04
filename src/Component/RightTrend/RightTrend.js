import React, { useState } from "react";
import style from "./RightTrend.module.css";
import MorePop from "../../Atom/PopOver/MorePop/MorePop";
import { Trending } from "../../const";
function RightTrend() {
  const [trending, setTrendings] = useState(Trending.slice(0, 2));
  const [isShowingAllTrendings, setIsShowingAllTrendings] = useState(false);

  function handleRequestSeeAll() {
    setIsShowingAllTrendings(!isShowingAllTrendings);
    if (isShowingAllTrendings) {
      return setTrendings(Trending.slice(0, 2));
    }
    setTrendings(Trending);
  }

  const [selectedId, setSelectedId] = useState(null);
  const updateId = (id) => setSelectedId(id);

  const HandleClick = () => {
    const tempArr = [];

    trending.forEach((x) => {
      if (x.id !== selectedId) {
        tempArr.push(x);
      }
    })
    setTrendings(tempArr);
  };
  return (
    <div className={style.mainParent}>
      <h2 style={{ fontSize: "large", paddingTop: "1rem" }}>
        {" "}
        What's happening
      </h2>
      {trending.map((data) => (
        <div
          key={data.id}
          onClick={() => {
            updateId(data.id);
          }}
          className={style.parent}
        >
          <div className={style.trendbtn}>
            <div className={style.datadiv}>
              <div className={style.trends}>{data.Trends}</div>
              <div className={style.Hash}> {data.Hash}</div>
              <div className={style.trends}>{data.Tweets}</div>
            </div>
            <MorePop onClicks={HandleClick} />
          </div>
        </div>
      ))}
      { (
        <div className={style.Show} onClick={handleRequestSeeAll}>
          {isShowingAllTrendings ? "Show Less" : "Show More"}
        </div>
      )}
    </div>
  );
}
export default RightTrend;
