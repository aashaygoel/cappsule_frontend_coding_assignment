import React from 'react';
import ButtonLayout from './baseComponents/ButtonLayout';

const FieldLayout = ({ selected, setSelected, buttons, field, available }) => (
  <div className="flex">
    <p className="text-[15px] font-light leading-[22.5px] flex-[15%]">
      {field} :&nbsp;
    </p>
    <ButtonLayout
      selected={selected}
      setSelected={setSelected}
      buttons={buttons}
      available={available}
    />
  </div>
);
export default FieldLayout;
