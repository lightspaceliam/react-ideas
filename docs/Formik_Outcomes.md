# Formik Outcomes

Forms are complex. The aim is to attempt to follow the simplest form pattern:

```
|  Page
|       ControllerFormComponent.tsx
|       Config.ts
```

**ControllerFormComponent:**

Where the form is initialised from.

Responsible for:

- Making HTTP request
    - GET - requests for dynamic form controls such as selects, radio or checkbox's and more
    - POST  Create
    - PUT   Update
- Formik form model registration of:
    - Shape
    - Validation

**Config:**

Responsible for:

- Form model default values
- Form model field validation rules
- Any hard coded form options that don't make sense to derive from an API or other source

**Strategy:**

I've chosen to use Formik with Yup and Material UI. Good or bad, my chosen implementation aims to mitigate the responsibility of form validation to the best framework / library:

- Yup for complex form model validation
- Formik for:
    - form control
    - field error messaging
- Material UI for look and feel

## Further Investigation

**useFormik()**

Same but different. Similar to react-hook-forms but still seems similar.

**Further Abstraction / Componentisation:**

Below seems like a lot of boiler plate that could be further abstracted away into another component. Potentially further investigation into: `useFormik()` and or `useFormikContext()`.


```tsx
<Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={async (values: ISimpleForm) => {
        await new Promise((r) => setTimeout(r, 500));
         //  Submit: post | put form payload.
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
    const { ... } = values;
    return (
        <Form>
            ... my form
        </Form>
    )}}>
</Formik>
```

However, I don't want to create hundreds of deeply nested form controls that rely `context` to handle props.  

## References

- https://formik.org/docs/guides/typescript
- https://github.com/jquense/yup
- https://formik.org/docs/api/useFormik