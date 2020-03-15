import React, { Component } from 'react';

import { Span, SubmitButton, Container } from './style';
import * as yup from 'yup';
import { Formik, Form as FormMik, Field, ErrorMessage } from 'formik';

class Form extends Component {

    render() {

        const validationSchema = yup.object().shape(
            {task : yup.string().min(5).required()}
        );
        const { initialValues, handleSubmit} = this.props
        return (
            <Formik
                initialValues = {initialValues}
                validationSchema = {validationSchema}
                onSubmit= {(value, {resetForm, setSubmitting}) =>{
                        setSubmitting(true);
                        handleSubmit(value);
                        resetForm();
                        setSubmitting(false);
                    }
                }
            >{({values, isSubmitting,handleChange, handleSubmit}) => (
                <FormMik onSubmit= {handleSubmit}>
                    <Container>
                        <Field
                            values= {values.task}
                            onChange = {handleChange}
                            name='task'
                            type='text'
                            placeholder='Create a new task'
                        />
                        <SubmitButton disabel = {isSubmitting}>+</SubmitButton>
                    </Container>
                    <Span>
                        <ErrorMessage component='span' name='task' />
                    </Span>
                </FormMik>
            )}     
            </Formik>

        );
    }


}

export default Form;
