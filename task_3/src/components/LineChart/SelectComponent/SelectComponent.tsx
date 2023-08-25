import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { fetchDataName } from '../../../types/fetchData';

type SelectComponentProps = {
  value: fetchDataName;
  setValue: React.Dispatch<React.SetStateAction<fetchDataName>>;
};

const SelectComponent = ({ value, setValue }: SelectComponentProps) => {
  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as fetchDataName);
  };

  return (
    <FormControl fullWidth style={{ width: '200px' }}>
      <InputLabel id='demo-simple-select-label'>Age</InputLabel>
      <Select
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        value={value}
        label='Age'
        onChange={handleChange}
      >
        <MenuItem value={'Yield'}>Yield</MenuItem>
        <MenuItem value={'Spread'}>Spread</MenuItem>
        <MenuItem value={'Price'}>Price</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectComponent;
