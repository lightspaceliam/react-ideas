import { FC, ChangeEvent, FocusEvent } from 'react';
import TextField from '@mui/material/TextField';
import { FormControl } from '@mui/material';

interface IProps {
    label: string;
    name: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    handleChange: (e: ChangeEvent<any>) => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    handleBlur: (e: FocusEvent<any, Element>) => void;
    value?: string | number;
    fieldError?: string;
    type?: 'email' | 'text' | 'number'
}
const Input: FC<IProps> = ({
    label,
    name,
    handleChange,
    handleBlur,
    value,
    fieldError,
    type = 'text'
}) => {

    return (
        <FormControl variant='standard' error={fieldError !== undefined} fullWidth>
            <TextField
                name={name}
                error={fieldError !== undefined}
                label={label}
                defaultValue={value}
                type={type}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={fieldError}
                variant="standard"
            />
        </FormControl>
    );
};

export default Input;