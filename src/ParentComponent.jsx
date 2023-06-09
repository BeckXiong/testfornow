import React, { useState } from 'react';
import DataContext from './DataContext';
import SubComponent from './SubComponent';

const ParentComponent = (props) => {
  const [data, setData] = useState({});
  const {qq, aa, children} = props

  return (
    <DataContext.Provider value={{ data, setData }}>
      
      <pre>{JSON.stringify(qq, null, 2)}</pre>
      {/* <div>{aa}</div> */}
      {/* <SubComponent /> */}
      {children}
    </DataContext.Provider>
  );
};

export default ParentComponent;
