/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import NotSelectedButton from './button/NotSelectedButton';
import NSelectedNAvailable from './button/NSelectedNAvailable';
import SelectedButton from './button/SelectedButton';
import SelectedNAvailable from './button/SelectedNAvailable';

const ButtonLayout = ({ buttons, setSelected, selected, available }) => {
  const [collapse, setCollapse] = useState(true);
  console.log(available);
  const availableButtons = Object.keys(available);
  return (
    <div className="flex flex-wrap flex-[60%] items-center [&>*]:flex-grow-1 [&>*]:mr-[13px] [&>*]:mb-[8px] [&>*]:cursor-pointer">
      {buttons?.map((button, index) => {
        if (index === selected && availableButtons?.indexOf(button) !== -1)
          return (
            <SelectedButton
              text={button}
              key={index}
              setSelectedForm={setSelected}
              hide={collapse && index > 3}
              index={index}
            />
          );
        if (index === selected && availableButtons?.indexOf(button) === -1) {
          return (
            <SelectedNAvailable
              text={button}
              key={index}
              setSelectedForm={setSelected}
              hide={collapse && index > 3}
              index={index}
            />
          );
        }
        if (availableButtons?.indexOf(button) === -1) {
          return (
            <NSelectedNAvailable
              text={button}
              key={index}
              setSelectedForm={setSelected}
              hide={collapse && index > 3}
              index={index}
            />
          );
        }
        return (
          <NotSelectedButton
            text={button}
            key={index}
            setSelectedForm={setSelected}
            hide={collapse && index > 3}
            index={index}
          />
        );
      })}
      {buttons.length > 4 ? (
        <div
          className="font-bold text-cyan-900 text-sm leading-[21.84px]"
          onClick={() => setCollapse((prevValue) => !prevValue)}
        >
          {collapse ? 'more..' : 'less..'}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ButtonLayout;
