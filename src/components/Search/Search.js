import PropTypes from "prop-types";
import { Formik, Form } from "formik";
import { Field, ErrorMessage } from "./Search.stayled";
import * as Yup from 'yup';

const ContactSchema = Yup.object().shape({
  search : Yup.string().min(3, 'Too Short!').max(20, 'Too Long!'),
});

export const Search = ({onSubmit}) => {
  return (
    <Formik
        initialValues={{
          search: '',
        }}  
        validationSchema = { ContactSchema }
        onSubmit = {(values, actions) => {
          if (!values.search.toLowerCase().trim()) {
            return alert('Заповніть поле');
          }
          onSubmit(values.search.toLowerCase().trim());
          actions.resetForm();
        } }>
        <Form>
          <Field
            name="search"
            type="text"
            placeholder="Search movie"
          />
          <ErrorMessage name="search" component='span'/>
          <button type="submit">
            <span>Search</span>
          </button>
        </Form>
      </Formik>
  )
}

PropTypes.Search = {
  onSubmit: PropTypes.func.isRequired, 
};
