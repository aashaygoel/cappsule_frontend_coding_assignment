/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

const NotSelectedButton = ({ text, setSelectedForm, hide, index }) => (
  <div
    className={`border-[1px] border-neutral-400 rounded-lg flex items-center justify-center px-[10px] py-[5px]  ${hide ? 'hidden' : ''} `}
    onClick={() => setSelectedForm(index)}
  >
    <p className="text-[13px] font-normal leading-[20.28px] text-neutral-600">
      {text}
    </p>
  </div>
);
export default NotSelectedButton;
