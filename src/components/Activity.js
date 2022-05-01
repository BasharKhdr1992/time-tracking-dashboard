import React, { useEffect, useState } from 'react';
import assets from '../assets';
import './Activity.css';

const Activity = ({ title, current, previous, bgColor, bgImage }) => {
  const [currentCounter, setCurrentCounter] = useState(0);
  const [prevCounter, setPrevCounter] = useState(0);

  useEffect(() => {
    setCurrentCounter(0);
    setPrevCounter(0);

    const x = setInterval(() => {
      setCurrentCounter((prev) => {
        if (prev < current) return prev + 1;
        else return prev;
      });
      setPrevCounter((prev) => {
        if (prev < previous) return prev + 1;
        else return prev;
      });
    }, 100);

    return () => {
      clearInterval(x);
    };
  }, [current, previous]);

  return (
    <div
      className="activity"
      style={{
        backgroundColor: bgColor,
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="activity-top"></div>
      <div className="activity-info">
        <div className="title-row">
          <p className="title">{title}</p>
          <img src={assets.ellipsis} className="ellipsis" alt="ellipsis" />
        </div>
        <div className="activity-stats">
          <div className="current">{`${currentCounter} hrs`}</div>
          <div className="previous">Last week - {`${prevCounter} hrs`}</div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
