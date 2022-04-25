import React from 'react';
import './VerticalNavbar.css';

const VerticalNavbar = ({ links, onClick, category }) => {
  return (
    <div className="v-navbar">
      {links.map((link, index) => {
        const selected = category === link;

        return (
          <button
            onClick={() => onClick(link)}
            className="nav-link"
            style={{
              color: selected && 'hsl(0, 0%, 98%)',
            }}
          >
            {link}
          </button>
        );
      })}
    </div>
  );
};

export default VerticalNavbar;
