import React, { createContext } from 'react';
import ComB from './ComB';

const Biodata = createContext();

const ComA = () => {
  return (
    <Biodata.Provider value={'Thapa'}>
      <ComB />
    </Biodata.Provider>
  );
};

export default ComA;
export { Biodata };
