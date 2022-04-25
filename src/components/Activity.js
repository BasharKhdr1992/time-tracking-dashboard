import React from 'react';
import assets from '../assets';
import './Activity.css';

const Activity = ({ title, current, previous, bgColor, bgImage }) => {
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
          <div className="current">{`${current} hrs`}</div>
          <div className="previous">Last week - {`${previous} hrs`}</div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
