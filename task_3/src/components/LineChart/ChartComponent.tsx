import { fetchDataName } from '../../types/fetchData';
import { useState } from 'react';
import SelectComponent from './SelectComponent/SelectComponent';
import LineComp from './LineComp/LineComp';
import TabComponent from './TabComponent/TabComponent';
import { dataArray } from '../../data/fetchData';

const ChartComponent = () => {
  const [value, setValue] = useState<fetchDataName>('Yield');
  const [data, setData] = useState(dataArray);

  return (
    <div style={{ width: '100vw', height: '500px' }}>
      <div style={{ display: 'flex', marginBottom: '25px' }}>
        <TabComponent setData={setData} />
        <SelectComponent value={value} setValue={setValue} />
      </div>

      <LineComp value={value} data={data} />
    </div>
  );
};

export default ChartComponent;
