import { FC, useState } from 'react';
import { useFormik, FormikHelpers, Formik, Form } from 'formik';
import Grid2 from '@mui/material/Grid2';
import Input from '../../components/FormCtrls/Input';
import { initialValues, preferredContactOptions, validationSchema } from './config';
import { Button, Typography } from '@mui/material';
import ISimpleForm from '../../interfaces/ISimpleForm';
import RadioButtons from '../../components/FormCtrls/RadioButtons';

const SimpleForm: FC = () => {

    const [simpleForm, setSimpleForm] = useState<ISimpleForm>({} as ISimpleForm);

    // const formik = useFormik({
    //     initialValues: initialValues,
    //     validationSchema: validationSchema,
    //     onSubmit: (values, { setSubmitting }: FormikHelpers<ISimpleForm>) => {
    //         setSubmitting(false);
    //         setSimpleForm(values);
    //     },
    // });

    

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
                onSubmit={(values: ISimpleForm, { setSubmitting }: FormikHelpers<ISimpleForm>) => {
                    setSimpleForm(values);
                    setSubmitting(false);
                    // setTimeout(() => {
                    //   alert(JSON.stringify(values, null, 2));
                    //   setSubmitting(false);
                    // }, 500);
                  }}
            >
                {({
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    // handleSubmit,
                    values,
                    errors,
                    // isValid,
                    // setFieldValue
                    
                }) => {
                const { firstName, lastName, email, preferredContact } = values;

                return (
                    <Form>
                        <Grid2 container spacing={2}>
                            <Grid2 size={{ xs: 12, md: 6 }}>
                                <Input
                                    label='First name'
                                    name='firstName'
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                    value={firstName}
                                    error={errors?.firstName}
                                    
                                />        
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 6 }}>
                                <Input
                                    label='Last name'
                                    name='lastName'
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                    value={lastName}
                                    error={errors?.lastName}
                                />        
                            </Grid2>
                            <Grid2 size={12}>
                                <Input
                                    label='Email'
                                    name='email'
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                    value={email}
                                    error={errors?.email}
                                />       
                            </Grid2>
                            <Grid2 size={12}>
                                <RadioButtons
                                    label='Preferred contact'
                                    name='preferredContact'
                                    handleChange={handleChange}
                                    //handleBlur={formik.handleBlur}
                                    options={preferredContactOptions}
                                    value={preferredContact}
                                    error={errors?.preferredContact?.text}
                                />       
                            </Grid2>
                            <Grid2 size={12}>
                                <Button type='submit' disabled={isSubmitting} variant='outlined' fullWidth>Submit</Button>
                            </Grid2>
                        </Grid2>
                    </Form>)
                }}
        </Formik>
      </>
    );
};

export default SimpleForm;