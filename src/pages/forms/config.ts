import ISelect from "../../interfaces/ISelect";
import ISimpleForm from "../../interfaces/ISimpleForm";
import { object, string, number } from 'yup';

export const initialValues: ISimpleForm = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    preferredContact: {value: 'email', text: 'Email'}
}

export const validationSchema = object<ISimpleForm>({
    id: number(),
    firstName: string()
        .required('First name is required'),
    lastName: string()
        .required('First name is required'),
    email: string()
        .email('Please enter valid email')
        .required('Email is required'),
    preferredContact: object<ISelect>()
        .shape({
            value: string().required(),
            text: string().required()
        })
        .required('preferred contact is required')
});


export const preferredContactOptions: Array<ISelect> = [
    { value: 'email', text: 'Email'},
    { value: 'mobile', text: 'Mobile'},
    { value: 'land-line', text: 'Land line'},
];