import React, { useEffect, useState } from 'react';
import { SaltType } from '../../types';
import { getAvailableSaltList } from '../../util/commonMethod';
import FieldLayout from '../FieldLayout';
import Pricing from './Pricing';

const Salt = ({ salt }: { salt: SaltType }) => {
  const [selectedForm = 0, setSelectedForm] = useState(0);
  const [selectedStrength = 0, setSelectedStrength] = useState(0);
  const [selectedPacking = 0, setSelectedPacking] = useState(0);
  const [strengths, setStrength] = useState<string[]>([]);
  const [packings, setPackings] = useState<string[]>([]);
  const [available = {}, setAvailable] = useState<object>({});

  useEffect(() => {
    setAvailable(getAvailableSaltList(salt));
  }, []);
  useEffect(() => {
    const strength = Object.keys(
      salt.salt_forms_json[salt.available_forms[selectedForm]] ?? {},
    );
    const packing = Object.keys(
      salt?.salt_forms_json?.[salt?.available_forms?.[selectedForm]]?.[
        strength?.[selectedStrength]
      ] ?? {},
    );
    setStrength(strength);
    setPackings(packing);
  }, [selectedForm, selectedStrength]);
  useEffect(() => {
    setSelectedStrength(0);
    setSelectedPacking(0);
  }, [selectedForm]);
  useEffect(() => {
    setSelectedPacking(0);
  }, [selectedStrength]);
  return (
    <div className="w-[1007px] min-h-[180px] shadow-saltBox rounded-2xl	flex justify-between p-8 mt-[42px] bg-Salt">
      <div className="flex flex-col justify-center flex-[33%]">
        <FieldLayout
          selected={selectedForm}
          setSelected={setSelectedForm}
          buttons={salt.available_forms}
          field="Form"
          available={available}
        />
        <FieldLayout
          selected={selectedStrength}
          setSelected={setSelectedStrength}
          buttons={strengths}
          field="Strength"
          available={available?.[salt.available_forms[selectedForm]] ?? {}}
        />
        <FieldLayout
          selected={selectedPacking}
          setSelected={setSelectedPacking}
          buttons={packings}
          field="Packaging"
          available={
            available?.[salt.available_forms[selectedForm]]?.[
              strengths[selectedStrength]
            ] ?? {}
          }
        />
      </div>
      <div className="flex items-center flex-col justify-center flex-[33%]">
        <p className="text-[16.55px] font-semibold	leading-[24.82px]">
          {salt.salt}
        </p>
        <p className="font-medium	 text-[12.87px] leading-[19.3px] text-cyan-800">
          {`${salt.available_forms[selectedForm]} |
          ${strengths[selectedStrength]} |
          ${packings[selectedPacking]}`}
        </p>
      </div>
      <div className="flex flex-[15%] justify-center items-center">
        <Pricing
          available={
            !!available?.[salt.available_forms[selectedForm]]?.[
              strengths[selectedStrength]
            ]?.[packings[selectedPacking]]
          }
          price={
            available?.[salt.available_forms[selectedForm]]?.[
              strengths[selectedStrength]
            ]?.[packings[selectedPacking]]
          }
        />
      </div>
    </div>
  );
};

export default Salt;
