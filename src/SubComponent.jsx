import React, { useContext } from 'react';
import DataContext from './DataContext';

const SubComponent = (props) => {
  const { data, setData } = useContext(DataContext);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const {qq, aa} = props

  return (
    <div>
      <pre>{JSON.stringify(qq, null, 2)}</pre>

      <input name="field1" value={data.field1 || ''} onChange={handleChange} />
      <input name="field2" value={data.field2 || ''} onChange={handleChange} />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default SubComponent;
