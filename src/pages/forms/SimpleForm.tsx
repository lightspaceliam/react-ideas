import { FC, useState } from 'react';
import { FormikHelpers, Formik, Form } from 'formik';
import { Grid2, Button, Typography } from '@mui/material';
import { initialValues, preferredContactOptions, validationSchema } from './config';
import Input from '../../components/FormCtrls/Input';
import RadioButtons from '../../components/FormCtrls/RadioButtons';
import ISimpleForm from '../../interfaces/ISimpleForm';
import { handleFieldError } from '../../helpers/formikHelpers';

import { StyledPre } from './styles/simpleForm';

const SimpleForm: FC = () => {

    const [simpleForm, setSimpleForm] = useState<ISimpleForm>({} as ISimpleForm);

    return (
        <>
            <Grid2 container spacing={2}>
                <Grid2 size={12} textAlign='left'>
                    <Typography variant='h1'>Simple Form</Typography>
                    
                    <br />
                    
                    <Typography variant='body1'>
                        <b>First name:</b> {simpleForm?.firstName}
                    </Typography>
                    <Typography variant='body1'>
                        <b>Last name:</b> {simpleForm?.lastName}
                    </Typography>
                    <Typography variant='body1'>
                        <b>Email:</b> {simpleForm?.email}
                    </Typography>
                    <Typography variant='body1'>
                        <b>Preferred contact:</b> {simpleForm?.preferredContact?.text}
                    </Typography>
                </Grid2>
            </Grid2>
            
            <br />
            <br />

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={async (values: ISimpleForm, { setSubmitting }: FormikHelpers<ISimpleForm>) => {
                    await new Promise((r) => setTimeout(r, 500));
                    setSimpleForm(values);
                    setSubmitting(false);
                  }}
            >
                {({
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    touched,
                    values,
                    errors
                }) => {
                const { firstName, lastName, email, preferredContact } = values;
                return (
                    <>
                        <StyledPre>
                            <code>
                                {JSON.stringify(values, null, 2)}
                            </code>
                        </StyledPre>
                        <br />
                        <br />
                        <Form>
                            <Grid2 container spacing={2}>
                                <Grid2 size={{ xs: 12, md: 6 }}>
                                    <Input
                                        label='First name'
                                        name='firstName'
                                        handleChange={handleChange}
                                        handleBlur={handleBlur}
                                        value={firstName}
                                        fieldError={handleFieldError(touched.firstName, errors?.firstName)}
                                        
                                    />        
                                </Grid2>
                                <Grid2 size={{ xs: 12, md: 6 }}>
                                    <Input
                                        label='Last name'
                                        name='lastName'
                                        handleChange={handleChange}
                                        handleBlur={handleBlur}
                                        value={lastName}
                                        fieldError={handleFieldError(touched.lastName, errors?.lastName)}
                                    />        
                                </Grid2>
                                <Grid2 size={12}>
                                    <Input
                                        label='Email'
                                        name='email'
                                        handleChange={handleChange}
                                        handleBlur={handleBlur}
                                        value={email}
                                        fieldError={handleFieldError(touched.email, errors?.email)}
                                    />       
                                </Grid2>
                                <Grid2 size={12}>
                                    <RadioButtons
                                        label='Preferred contact'
                                        name='preferredContact'
                                        handleChange={handleChange}
                                        options={preferredContactOptions}
                                        value={preferredContact}
                                    />       
                                </Grid2>
                                <Grid2 size={12}>
                                    <Button type='submit' disabled={isSubmitting} variant='outlined' fullWidth>Submit</Button>
                                </Grid2>
                            </Grid2>
                        </Form>
                    </>)
                }}
        </Formik>
      </>
    );
};

export default SimpleForm;