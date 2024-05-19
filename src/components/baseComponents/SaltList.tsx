import React from 'react';
import Salt from './Salt';

const SaltList = ({ data }) =>
  data.saltSuggestions.map((salt) => <Salt salt={salt} key={salt.id} />);

export default SaltList;
