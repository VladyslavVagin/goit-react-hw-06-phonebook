import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import css from './AddContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addUser } from '../../redux/contactsSlice';

const initialValues = {
  name: '',
  number: '',
}

const schema = yup.object().shape({
  name: yup.string().min(5).required(),
  number: yup.number().required(),
});

const AddContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (data, {resetForm}) => {
     dispatch(addUser(data));
     resetForm();
  }

  return (
    <Formik validationSchema={schema} initialValues={initialValues} onSubmit={handleSubmit}>
      <Form
        className={css.contactForm}
        autoComplete="true"
      >
        <label className={css.label} htmlFor="name">
          <Field
            type="text"
            name="name"
            className={css.input}
            required
            placeholder="Name"
          />
          <ErrorMessage name="name" component="span" />
        </label>
        <label className={css.label} htmlFor="number">
          <Field
            type="tel"
            name="number"
            className={css.input}
            required
            placeholder="Number"
          />
          <ErrorMessage name="number" component="span" />
        </label>
        <button className={css.addContactBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default AddContactForm;
