import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import { fetchData } from '../../../types/fetchData';
import { dataArray } from '../../../data/fetchData';
import { useState } from 'react';

type TabComponentProps = {
  setData: React.Dispatch<React.SetStateAction<fetchData[]>>;
};

const TabComponent = ({ setData }: TabComponentProps) => {
  const [value, setValue] = useState<number | 'ALL'>('ALL');

  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(_, newValue) => {
        setValue(newValue);
        setData(() => {
          const result: fetchData[] = [];
          if (newValue === 'ALL') {
            return dataArray;
          } else {
            for (let i = 0; i < newValue; i++) {
              result.push(dataArray[i]);
            }
          }

          return result;
        });
      }}
    >
      <BottomNavigationAction label='3 день' value={3} />
      <BottomNavigationAction label='5 дня' value={5} />
      <BottomNavigationAction label='Полностью' value={'ALL'} />
    </BottomNavigation>
  );
};

export default TabComponent;
