import React, { useState } from 'react';
import './TimeDashboard.css';
import assets from '../assets';
import VerticalNavbar from './UI/VerticalNavbar';
import Activity from './Activity';
import data from '../data/data.json';

const links = ['Daily', 'Weekly', 'Monthly'];
const styles = {
  work: {
    bgColor: 'hsl(15, 100%, 70%)',
    bgImage: assets.work,
  },
  play: {
    bgColor: 'hsl(195, 74%, 62%)',
    bgImage: assets.play,
  },
  study: {
    bgColor: 'hsl(348, 100%, 68%)',
    bgImage: assets.study,
  },
  exercise: {
    bgColor: 'hsl(145, 58%, 55%)',
    bgImage: assets.exercise,
  },
  social: {
    bgColor: 'hsl(264, 64%, 52%)',
    bgImage: assets.social,
  },
  'self care': {
    bgColor: 'hsl(43, 84%, 65%)',
    bgImage: assets.selfCare,
  },
};

const TimeDashboard = () => {
  const [category, setCategory] = useState('Daily');

  const handleClick = (title) => {
    setCategory(title);
  };

  const filterData = (data, category) => {
    const filteredData = data.map((item) => {
      return {
        title: item.title,
        timeFrames: item.timeframes[category.toLowerCase()],
        bgColor: styles[item.title.toLowerCase()].bgColor,
        bgImage: styles[item.title.toLowerCase()].bgImage,
      };
    });
    console.log(filteredData);
    return filteredData;
  };

  return (
    <div className="dashboard">
      <div className="main-card">
        <div className="personal-details">
          <img src={assets.avatar} className="pd-pic" alt="Jeremy" />
          <div className="pd-name-wrapper">
            <p>Report for</p>
            <p className="pd-name">Jeremy Robson</p>
          </div>
        </div>
        <VerticalNavbar
          category={category}
          links={links}
          onClick={handleClick}
        />
      </div>
      <div className="activities">
        {filterData(data, category).map((item, index) => {
          return (
            <Activity
              key={index}
              title={item.title}
              bgColor={item.bgColor}
              bgImage={item.bgImage}
              current={item.timeFrames.current}
              previous={item.timeFrames.previous}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TimeDashboard;
