/**
 * @description Convenience method for testing if there really is a Formik field error.
 * 
 * @param {boolean | undefined} isTouched Formik check 
 * @param {string | undefined} fieldError Formik field error 
 * @returns 
 */
export const handleFieldError = (isTouched?: boolean, fieldError?: string): string | undefined => {

    if(isTouched === undefined || isTouched === false) { return undefined; }

    return fieldError;
}