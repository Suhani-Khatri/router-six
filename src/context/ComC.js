import React, { useContext } from 'react';
import { Biodata } from './ComA';

const ComC = () => {
  const name = useContext(Biodata);

  return <div>ComC {name}</div>;
};

export default ComC;
