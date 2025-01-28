import { FC, JSX, ChangeEvent } from 'react';
import ISelect from '../../interfaces/ISelect';
import { FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup } from '@mui/material';
import { useFormikContext } from 'formik';

interface IProps {
    label: string;
    name: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    handleChange: (e: ChangeEvent<any>) => void;
    value?: ISelect;
    options?: Array<ISelect>;
    error?: string;
    row?: boolean;
}

const RadioButtons: FC<IProps> = ({
    label,
    name,
    value = undefined,
    options = [],
    error = undefined,
    row = true,
}): JSX.Element => {
    const formikContext = useFormikContext();

    const handleLocalChange = (event: ChangeEvent<HTMLInputElement>): void => {
        event.preventDefault();
        const { target: { value }} = event;

      console.log(`N: ${name}, V: ${value}`);
        const newValue = options
          .filter((p: ISelect) => (p.value === value))
          ?.[0];
        
        const { setFieldValue } = formikContext;
        setFieldValue(name, newValue);
    };

    return (
        <FormControl
            fullWidth
            margin='normal'
            error={error !== undefined}
      >
        <FormLabel htmlFor={name}>{label}</FormLabel>
        <RadioGroup
          row={row}
          name={name}
          onChange={(e) => handleLocalChange(e)}
          aria-labelledby="demo-row-radio-buttons-group-label"
          
        >
          {options.map((p: ISelect) => {
            return <FormControlLabel
              key={p.value}
              value={p.value}
              checked={p.value === value?.value}    
              control={<Radio />}
              label={p.text}
            />  
          })}
        </RadioGroup>
        {error &&
          <FormHelperText>{error}</FormHelperText>
        }
      </FormControl>
    );
}

export default RadioButtons;