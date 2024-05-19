/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

const SelectedButton = ({ text, setSelectedForm, hide, index }) => (
  <div
    className={`border-[1.5px] rounded-lg border-teal-950 shadow-selectedBox flex items-center justify-center px-[10px] py-[5px]  ${hide ? 'hidden' : ''}`}
    onClick={() => setSelectedForm(index)}
  >
    <p className="text-[13px] font-semibold	leading-[20.28px] text-teal-950">
      {text}
    </p>
  </div>
);

export default SelectedButton;
